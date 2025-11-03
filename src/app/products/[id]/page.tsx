import { getProductById } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import DeleteButton from "@/components/DeleteButton";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  try {
    const product = await getProductById(id);
    return {
      title: `${product.name} - Tienda`,
      description: product.description,
    };
  } catch {
    return {
      title: "Producto No Encontrado",
    };
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  let product;
  try {
    product = await getProductById(id);
  } catch {
    notFound();
  }

  const stockNum = Number(product.stock);

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-violet-600 font-medium mb-6 transition-colors group"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Volver a Productos
        </Link>

        {/* Product Layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image Section */}
            <div className="bg-white rounded-2xl border-2 border-violet-200 overflow-hidden shadow-lg shadow-violet-500/10">
              <div className="relative h-[320px] md:h-[400px] bg-gradient-to-br from-violet-50 to-purple-50">
                <Image
                  src={product.image_url}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Stock Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${
                      stockNum > 0
                        ? "bg-emerald-500/90 text-white"
                        : "bg-red-500/90 text-white"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        stockNum > 0 ? "bg-white animate-pulse" : "bg-white/80"
                      }`}
                    ></span>
                    {stockNum > 0 ? `${product.stock} disponibles` : "Agotado"}
                  </span>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-5">
              {/* Main Info */}
              <div className="bg-white rounded-2xl border border-zinc-200 shadow-lg p-6">
                <h1 className="text-2xl font-bold text-zinc-900 mb-3 leading-tight">
                  {product.name}
                </h1>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-violet-600">
                    ${Number(product.price).toFixed(2)}
                  </span>
                  <span className="text-zinc-500 text-sm">USD</span>
                </div>

                {product.description && (
                  <div className="pt-4 border-t border-zinc-200">
                    <p className="text-zinc-600 leading-relaxed text-sm">
                      {product.description}
                    </p>
                  </div>
                )}

                {product.created_at && (
                  <div className="flex items-center gap-2 text-xs text-zinc-500 mt-4 pt-4 border-t border-zinc-100">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      Agregado el{" "}
                      {new Date(product.created_at).toLocaleDateString(
                        "es-ES",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="bg-white rounded-2xl border border-zinc-200 shadow-lg p-5">
                <div className="flex gap-3">
                  <Link
                    href={`/products/${product.id}/edit`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-200 text-sm"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    Editar
                  </Link>
                </div>
                <div className="mt-3">
                  <DeleteButton id={product.id.toString()} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

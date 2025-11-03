import { createProduct } from "@/app/actions";
import ProductForm from "@/components/ProductForm";
import Link from "next/link";

export const metadata = {
  title: "Crear Nuevo Producto - Tienda",
  description: "Agrega un nuevo producto a tu tienda",
};

export default function NewProductPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-violet-600 font-medium mb-8 transition-colors group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
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

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-3">
              Crear nuevo producto
            </h1>
            <p className="text-lg text-zinc-600">
              Completa los detalles a continuación para agregar un nuevo
              producto a tu tienda.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-xl shadow-zinc-900/5 p-8 md:p-10">
            <ProductForm action={createProduct} buttonText="Crear Producto" />
          </div>
        </div>
      </div>
    </div>
  );
}

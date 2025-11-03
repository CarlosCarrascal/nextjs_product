import { getProductById } from '@/lib/api';
import { updateProduct } from '@/app/actions';
import ProductForm from '@/components/ProductForm';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface EditProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: EditProductPageProps) {
  const { id } = await params;
  try {
    const product = await getProductById(id);
    return {
      title: `Editar ${product.name} - Tienda`,
      description: `Editar producto: ${product.name}`,
    };
  } catch {
    return {
      title: 'Editar Producto',
    };
  }
}

export default async function EditProductPage({ params }: EditProductPageProps) {
  const { id } = await params;
  
  let product;
  try {
    product = await getProductById(id);
  } catch {
    notFound();
  }

  const updateProductWithId = async (formData: FormData) => {
    'use server';
    return updateProduct(id, formData);
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <Link
            href={`/products/${id}`}
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-violet-600 font-medium mb-8 transition-colors group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al Producto
          </Link>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-3">
              Editar Producto
            </h1>
            <p className="text-lg text-zinc-600">
              Actualiza los detalles de <span className="font-semibold text-zinc-900">{product.name}</span>
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-xl shadow-zinc-900/5 p-8 md:p-10">
            <ProductForm
              action={updateProductWithId}
              product={product}
              buttonText="Actualizar Producto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


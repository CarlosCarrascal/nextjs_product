import { getProducts } from '@/lib/api';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-50 via-white to-purple-50 border-b border-zinc-200">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 tracking-tight leading-none mb-6">
              Descubre Increíbles
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                Productos
              </span>
          </h1>
            <p className="text-xl text-zinc-600 leading-relaxed mb-8 max-w-2xl">
              Explora nuestra colección seleccionada de productos premium. Agrega nuevos artículos a tu tienda con solo unos clics.
            </p>
            <Link
              href="/products/new"
              className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl shadow-xl shadow-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/40 transition-all duration-200 hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Agregar Producto
            </Link>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6 py-12">
        {products.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center py-24">
            <div className="w-20 h-20 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Aún no hay productos</h2>
            <p className="text-lg text-zinc-600 mb-8">
              Comienza creando tu primer producto. ¡Solo toma un minuto!
            </p>
            <Link
              href="/products/new"
              className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl shadow-xl shadow-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/40 transition-all duration-200 hover:-translate-y-1"
          >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Crear Primer Producto
            </Link>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">Todos los Productos</h2>
                <p className="text-zinc-600 mt-1">{products.length} {products.length === 1 ? 'producto' : 'productos'} disponibles</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
        </div>
    </div>
  );
}

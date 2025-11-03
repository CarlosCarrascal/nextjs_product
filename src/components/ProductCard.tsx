import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <article className="relative bg-white rounded-2xl border-2 border-violet-200 hover:border-violet-400 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20 hover:-translate-y-1 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-56 w-full bg-gradient-to-br from-violet-50 to-purple-50 overflow-hidden">
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Stock Badge */}
          <div className="absolute top-3 right-3">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${
              product.stock > 0 
                ? 'bg-emerald-500/90 text-white' 
                : 'bg-red-500/90 text-white'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${
                product.stock > 0 ? 'bg-white' : 'bg-white/80'
              }`}></span>
              {product.stock > 0 ? `${product.stock} disponibles` : 'Agotado'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-zinc-900 mb-2 line-clamp-2 group-hover:text-violet-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-zinc-600 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
            {product.description || 'Sin descripción disponible'}
          </p>
          
          {/* Price */}
          <div className="flex items-baseline justify-between mt-auto pt-4 border-t border-zinc-100">
            <div>
              <span className="text-3xl font-bold text-zinc-900">
                ${Number(product.price).toFixed(2)}
              </span>
            </div>
            <span className="text-zinc-400 group-hover:text-violet-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}



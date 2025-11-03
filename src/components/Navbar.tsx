import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-zinc-200/80 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="group flex items-center gap-3 transition-all">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl shadow-lg shadow-violet-500/30 flex items-center justify-center group-hover:shadow-xl group-hover:shadow-violet-500/40 transition-all duration-200">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-zinc-900 tracking-tight">
              Tienda
            </span>
          </Link>
          
          <div className="flex items-center gap-3">
            <Link 
              href="/" 
              className="px-5 py-2.5 text-zinc-700 hover:text-zinc-900 font-medium rounded-xl hover:bg-zinc-100 transition-all duration-200"
            >
              Productos
            </Link>
            <Link 
              href="/products/new" 
              className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              Agregar Producto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}


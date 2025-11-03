'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center px-6">
      <div className="max-w-lg w-full">
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-xl shadow-zinc-900/5 p-8 md:p-10 text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>

          {/* Content */}
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">
            Algo salió mal
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-8">
            {error.message || 'Ocurrió un error inesperado. Por favor intenta de nuevo o regresa a la página de inicio.'}
          </p>

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={reset}
              className="w-full px-6 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-200"
            >
              Intentar de Nuevo
            </button>
            <Link
              href="/"
              className="block w-full px-6 py-4 bg-white hover:bg-zinc-50 text-zinc-700 font-medium rounded-xl border-2 border-zinc-200 hover:border-zinc-300 transition-all"
            >
              Ir al Inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


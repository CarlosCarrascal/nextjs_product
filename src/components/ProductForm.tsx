'use client';

import { useFormStatus } from 'react-dom';
import { Product } from '@/types/product';

interface ProductFormProps {
  action: (formData: FormData) => Promise<void>;
  product?: Product;
  buttonText?: string;
}

function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full px-6 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-200 disabled:bg-zinc-300 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-2"
    >
      {pending ? (
        <>
          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Guardando...</span>
        </>
      ) : (
        text
      )}
    </button>
  );
}

export default function ProductForm({ action, product, buttonText = 'Crear Producto' }: ProductFormProps) {
  return (
    <form action={action} className="space-y-8">
      {/* Product Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-zinc-900 mb-3">
          Nombre del Producto <span className="text-violet-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={product?.name}
          required
          minLength={3}
          className="w-full px-4 py-3.5 bg-white border-2 border-zinc-200 rounded-xl focus:border-violet-500 focus:ring-4 focus:ring-violet-100 transition-all outline-none text-zinc-900 placeholder:text-zinc-400"
          placeholder="ej., Audífonos Inalámbricos Pro"
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-semibold text-zinc-900 mb-3">
          Descripción
        </label>
        <textarea
          id="description"
          name="description"
          defaultValue={product?.description}
          rows={5}
          className="w-full px-4 py-3.5 bg-white border-2 border-zinc-200 rounded-xl focus:border-violet-500 focus:ring-4 focus:ring-violet-100 transition-all outline-none text-zinc-900 placeholder:text-zinc-400 resize-none"
          placeholder="Describe las características, beneficios y especificaciones de tu producto..."
        />
      </div>

      {/* Price & Stock Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="price" className="block text-sm font-semibold text-zinc-900 mb-3">
            Precio <span className="text-violet-600">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 font-medium">$</span>
            <input
              type="number"
              id="price"
              name="price"
              defaultValue={product?.price}
              required
              min="0"
              step="0.01"
              className="w-full pl-8 pr-4 py-3.5 bg-white border-2 border-zinc-200 rounded-xl focus:border-violet-500 focus:ring-4 focus:ring-violet-100 transition-all outline-none text-zinc-900"
              placeholder="0.00"
            />
          </div>
        </div>

        <div>
          <label htmlFor="stock" className="block text-sm font-semibold text-zinc-900 mb-3">
            Cantidad en Stock <span className="text-violet-600">*</span>
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            defaultValue={product?.stock}
            required
            min="0"
            step="1"
            className="w-full px-4 py-3.5 bg-white border-2 border-zinc-200 rounded-xl focus:border-violet-500 focus:ring-4 focus:ring-violet-100 transition-all outline-none text-zinc-900"
            placeholder="0"
          />
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-xl p-5 flex gap-4">
        <div className="shrink-0">
          <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-zinc-900 mb-1">Generación Automática de Imagen</h4>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Se generará automáticamente una imagen única basada en el nombre de tu producto. ¡No necesitas subir imágenes manualmente!
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <SubmitButton text={buttonText} />
    </form>
  );
}


export interface Product {
  id: number;
  name: string;
  description: string;
  price: number | string; // API puede devolver string desde MySQL DECIMAL
  stock: number | string; // API puede devolver string
  image_url: string;
  created_at?: string;
  updated_at?: string;
}

export interface ProductFormData {
  name: string;
  description: string;
  price: number;
  stock: number;
}


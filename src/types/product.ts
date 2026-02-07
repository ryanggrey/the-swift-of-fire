export interface ProductVariant {
  id: string;
  label: string;
  type: "colour" | "design";
  value: string; // hex colour or design name
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  madeFrom: string;
  goodFor: string;
  category: "shakers" | "stomp-boxes" | "guitars";
  price: number; // pence (GBP)
  variants: ProductVariant[];
  images: string[];
  inStock: boolean;
  featured: boolean;
}

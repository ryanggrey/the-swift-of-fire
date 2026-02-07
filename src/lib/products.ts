import productsData from "@/data/products.json";
import type { Product } from "@/types/product";

const products: Product[] = productsData as Product[];

export function getAllProducts(): Product[] {
  return products.filter((p) => p.inStock);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured && p.inStock);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category && p.inStock);
}

export function getCategories(): string[] {
  return [...new Set(products.filter((p) => p.inStock).map((p) => p.category))];
}

export function getAllProductsIncludingOutOfStock(): Product[] {
  return products;
}

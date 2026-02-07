import type { Metadata } from "next";
import {
  getAllProducts,
  getProductsByCategory,
  getCategories,
} from "@/lib/products";
import { CategoryFilter } from "@/components/shop/category-filter";
import { ProductGrid } from "@/components/shop/product-grid";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse handmade shakers, stomp boxes, and more from The Swift of Fire.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const categories = getCategories();
  const products = category
    ? getProductsByCategory(category)
    : getAllProducts();

  return (
    <div className="container-page py-12">
      <SectionHeading>Shop</SectionHeading>
      <CategoryFilter categories={categories} activeCategory={category} />
      <ProductGrid products={products} />
    </div>
  );
}

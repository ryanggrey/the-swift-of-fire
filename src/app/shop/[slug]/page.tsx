import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug } from "@/lib/products";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { AddToCartSection } from "@/components/product/add-to-cart-section";

export async function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="container-page py-12">
      <Link
        href="/shop"
        className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors mb-8"
      >
        &larr; Back to shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image */}
        <div>
          <PlaceholderImage
            category={product.category}
            className="aspect-square w-full"
            label={product.name}
          />
        </div>

        {/* Product info + Add to Cart */}
        <AddToCartSection product={product} />
      </div>
    </div>
  );
}

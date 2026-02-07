import Link from "next/link";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import { PlaceholderImage } from "./placeholder-image";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block rounded-xl bg-brand-grey/50 border border-white/5 overflow-hidden transition-all duration-200 hover:border-brand-red/30 hover:shadow-lg hover:shadow-brand-red/10"
    >
      <PlaceholderImage
        category={product.category}
        className="aspect-square w-full"
        label={product.name}
      />
      <div className="p-4">
        <span className="text-xs font-heading tracking-wider uppercase text-brand-orange">
          {product.category.replace("-", " ")}
        </span>
        <h3 className="mt-1 font-heading text-xl tracking-wide text-white group-hover:text-brand-orange transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-gray-400 line-clamp-2">
          {product.description}
        </p>
        <p className="mt-3 font-heading text-2xl text-brand-red">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}

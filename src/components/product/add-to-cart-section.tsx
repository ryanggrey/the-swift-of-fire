"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { VariantSelector } from "./variant-selector";

export function AddToCartSection({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    product.variants.length > 0 ? product.variants[0].id : null
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const selectedVariant = product.variants.find(
    (v) => v.id === selectedVariantId
  );

  function handleAddToCart() {
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      quantity,
      variantId: selectedVariantId,
      variantLabel: selectedVariant?.label || null,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <span className="text-sm font-heading tracking-wider uppercase text-brand-orange">
          {product.category.replace("-", " ")}
        </span>
        <h1 className="mt-1 font-heading text-4xl sm:text-5xl tracking-wide text-white">
          {product.name}
        </h1>
        <p className="mt-2 font-heading text-3xl text-brand-red">
          {formatPrice(product.price)}
        </p>
      </div>

      <p className="text-gray-300 leading-relaxed">{product.longDescription}</p>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-400 font-medium">Good for</p>
          <p className="text-gray-200">{product.goodFor}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400 font-medium">Made from</p>
          <p className="text-gray-200">{product.madeFrom}</p>
        </div>
      </div>

      {product.variants.length > 0 && (
        <VariantSelector
          variants={product.variants}
          selectedId={selectedVariantId}
          onSelect={setSelectedVariantId}
        />
      )}

      {/* Quantity */}
      <div>
        <p className="text-sm text-gray-400 mb-2 font-medium">Quantity</p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-10 h-10 rounded-lg bg-brand-grey text-white font-bold hover:bg-gray-600 transition-colors cursor-pointer"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="w-10 text-center font-heading text-xl">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-10 h-10 rounded-lg bg-brand-grey text-white font-bold hover:bg-gray-600 transition-colors cursor-pointer"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <Button size="lg" onClick={handleAddToCart} disabled={!product.inStock}>
        {added
          ? "Added!"
          : product.inStock
            ? "Add to Cart"
            : "Out of Stock"}
      </Button>

      {added && (
        <p className="text-sm text-green-400">
          Added to cart! <a href="/cart" className="underline">View cart</a>
        </p>
      )}
    </div>
  );
}

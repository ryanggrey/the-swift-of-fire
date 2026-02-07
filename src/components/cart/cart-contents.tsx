"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function CartContents() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            slug: item.slug,
            variantId: item.variantId,
            quantity: item.quantity,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to create checkout session");
      }
      window.location.href = data.url;
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong"
      );
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400 text-lg mb-6">Your cart is empty.</p>
        <Link href="/shop">
          <Button>Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Items */}
      <div className="lg:col-span-2 space-y-4">
        {items.map((item) => (
          <div
            key={`${item.productId}-${item.variantId}`}
            className="flex items-center gap-4 bg-brand-grey/30 rounded-xl p-4 border border-white/5"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-brand-charcoal to-brand-red rounded-lg shrink-0 flex items-center justify-center">
              <span className="text-white/30 text-xs font-heading uppercase">
                {item.name.slice(0, 3)}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <Link
                href={`/shop/${item.slug}`}
                className="font-heading text-lg text-white hover:text-brand-orange transition-colors truncate block"
              >
                {item.name}
              </Link>
              {item.variantLabel && (
                <p className="text-sm text-gray-400">{item.variantLabel}</p>
              )}
              <p className="text-brand-red font-heading text-lg">
                {formatPrice(item.price)}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  updateQuantity(
                    item.productId,
                    item.variantId,
                    item.quantity - 1
                  )
                }
                className="w-8 h-8 rounded-lg bg-brand-grey text-white hover:bg-gray-600 transition-colors cursor-pointer text-sm font-bold"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="w-8 text-center font-heading">
                {item.quantity}
              </span>
              <button
                onClick={() =>
                  updateQuantity(
                    item.productId,
                    item.variantId,
                    item.quantity + 1
                  )
                }
                className="w-8 h-8 rounded-lg bg-brand-grey text-white hover:bg-gray-600 transition-colors cursor-pointer text-sm font-bold"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeItem(item.productId, item.variantId)}
              className="text-gray-500 hover:text-red-400 transition-colors p-1 cursor-pointer"
              aria-label={`Remove ${item.name} from cart`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-brand-grey/30 rounded-xl p-6 border border-white/5 h-fit sticky top-24">
        <h2 className="font-heading text-2xl tracking-wide text-white mb-4">
          Order Summary
        </h2>
        <div className="flex justify-between text-gray-300 mb-2">
          <span>Subtotal</span>
          <span className="font-heading text-lg">
            {formatPrice(totalPrice)}
          </span>
        </div>
        <div className="flex justify-between text-gray-400 text-sm mb-4">
          <span>Shipping</span>
          <span>Calculated at checkout</span>
        </div>
        <div className="border-t border-white/10 pt-4 mb-6">
          <div className="flex justify-between text-white">
            <span className="font-bold">Total</span>
            <span className="font-heading text-2xl text-brand-red">
              {formatPrice(totalPrice)}
            </span>
          </div>
        </div>
        {error && (
          <p className="text-red-400 text-sm mb-4">{error}</p>
        )}
        <Button
          size="lg"
          className="w-full"
          onClick={handleCheckout}
          disabled={loading}
        >
          {loading ? "Redirecting..." : "Proceed to Checkout"}
        </Button>
        <Link
          href="/shop"
          className="block text-center text-sm text-gray-400 hover:text-white mt-3 transition-colors"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
}

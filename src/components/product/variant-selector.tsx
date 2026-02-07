"use client";

import type { ProductVariant } from "@/types/product";
import { cn } from "@/lib/utils";

export function VariantSelector({
  variants,
  selectedId,
  onSelect,
}: {
  variants: ProductVariant[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  if (variants.length === 0) return null;

  return (
    <div>
      <p className="text-sm text-gray-400 mb-2 font-medium">
        {variants[0].type === "colour" ? "Colour" : "Design"}
      </p>
      <div className="flex flex-wrap gap-2">
        {variants.map((variant) => (
          <button
            key={variant.id}
            onClick={() => onSelect(variant.id)}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg border transition-all cursor-pointer",
              selectedId === variant.id
                ? "border-brand-red bg-brand-red/10 text-white"
                : "border-white/10 text-gray-300 hover:border-white/30"
            )}
            aria-pressed={selectedId === variant.id}
          >
            {variant.type === "colour" && (
              <span
                className="w-4 h-4 rounded-full border border-white/20"
                style={{ backgroundColor: variant.value }}
              />
            )}
            <span className="text-sm">{variant.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

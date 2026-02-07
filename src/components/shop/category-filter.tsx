"use client";

import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const categoryLabels: Record<string, string> = {
  shakers: "Shakers",
  "stomp-boxes": "Stomp Boxes",
  guitars: "Guitars",
};

export function CategoryFilter({
  categories,
  activeCategory,
}: {
  categories: string[];
  activeCategory?: string;
}) {
  const router = useRouter();

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => router.push("/shop")}
        className={cn(
          "font-heading text-sm tracking-wider uppercase px-4 py-2 rounded-lg transition-colors cursor-pointer",
          !activeCategory
            ? "bg-brand-red text-white"
            : "bg-brand-grey/50 text-gray-300 hover:text-white hover:bg-brand-grey"
        )}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => router.push(`/shop?category=${cat}`)}
          className={cn(
            "font-heading text-sm tracking-wider uppercase px-4 py-2 rounded-lg transition-colors cursor-pointer",
            activeCategory === cat
              ? "bg-brand-red text-white"
              : "bg-brand-grey/50 text-gray-300 hover:text-white hover:bg-brand-grey"
          )}
        >
          {categoryLabels[cat] || cat}
        </button>
      ))}
    </div>
  );
}

"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

export function Accordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl border border-white/5 bg-brand-grey/30 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
            aria-expanded={openIndex === i}
          >
            <span className="font-heading text-lg tracking-wide text-white pr-4">
              {item.question}
            </span>
            <svg
              className={cn(
                "w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200",
                openIndex === i && "rotate-180"
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={cn(
              "transition-all duration-200 overflow-hidden",
              openIndex === i ? "max-h-96 pb-5" : "max-h-0"
            )}
          >
            <p className="px-5 text-gray-300 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

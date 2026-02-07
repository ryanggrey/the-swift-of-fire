import { cn } from "@/lib/utils";

const gradients: Record<string, string> = {
  shakers: "from-brand-orange to-yellow-500",
  "stomp-boxes": "from-brand-charcoal to-brand-red",
  guitars: "from-gray-800 to-brand-orange",
};

export function PlaceholderImage({
  category,
  className,
  label,
}: {
  category: string;
  className?: string;
  label?: string;
}) {
  const gradient = gradients[category] || "from-gray-700 to-gray-900";
  return (
    <div
      className={cn(
        `bg-gradient-to-br ${gradient} flex items-center justify-center rounded-xl`,
        className
      )}
    >
      <span className="text-white/40 font-heading text-2xl uppercase tracking-wider">
        {label || category}
      </span>
    </div>
  );
}

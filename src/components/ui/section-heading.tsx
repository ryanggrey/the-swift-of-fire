import { cn } from "@/lib/utils";

export function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="font-heading text-3xl sm:text-4xl tracking-wide text-white">
        {children}
      </h2>
      <div className="mt-2 h-1 w-16 bg-gradient-to-r from-brand-red to-brand-orange rounded-full" />
    </div>
  );
}

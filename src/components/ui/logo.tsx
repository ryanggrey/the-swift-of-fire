import { cn } from "@/lib/utils";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl sm:text-3xl",
    lg: "text-4xl sm:text-5xl",
  };

  return (
    <span
      className={cn(
        "font-heading tracking-wider inline-flex items-center gap-1",
        sizeClasses[size]
      )}
    >
      <span className="text-brand-orange">THE</span>{" "}
      <span className="text-white">SWIFT</span>{" "}
      <span className="text-brand-red">OF</span>{" "}
      <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
        FIRE
      </span>
      <svg
        className={cn(
          "inline-block",
          size === "sm" && "w-5 h-5",
          size === "md" && "w-6 h-6",
          size === "lg" && "w-8 h-8"
        )}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2C12 2 4 10 4 15a8 8 0 0016 0c0-5-8-13-8-13z"
          fill="url(#flame-grad)"
        />
        <defs>
          <linearGradient
            id="flame-grad"
            x1="12"
            y1="2"
            x2="12"
            y2="23"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DD6B20" />
            <stop offset="1" stopColor="#E53E3E" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
}

"use client";

import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container-page py-20 text-center max-w-2xl">
      <h1 className="font-heading text-4xl sm:text-5xl text-brand-red mb-4">
        Something Went Wrong
      </h1>
      <p className="text-gray-300 mb-2">
        Sorry about that! Something broke on our end.
      </p>
      <p className="text-gray-500 text-sm mb-8">
        {error.message || "An unexpected error occurred."}
      </p>
      <Button onClick={reset}>Try Again</Button>
    </div>
  );
}

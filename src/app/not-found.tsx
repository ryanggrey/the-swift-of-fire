import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="container-page py-20 text-center max-w-2xl">
      <h1 className="font-heading text-6xl sm:text-8xl text-brand-red mb-4">
        404
      </h1>
      <h2 className="font-heading text-3xl text-white mb-4">
        This Page Went Up in Flames
      </h2>
      <p className="text-gray-400 mb-8">
        We couldn&apos;t find what you were looking for. It might have been
        moved or never existed.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/">
          <Button size="lg">Go Home</Button>
        </Link>
        <Link href="/shop">
          <Button variant="secondary" size="lg">
            Visit Shop
          </Button>
        </Link>
      </div>
    </div>
  );
}

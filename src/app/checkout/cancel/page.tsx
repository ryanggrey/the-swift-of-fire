import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Payment Cancelled",
};

export default function CheckoutCancelPage() {
  return (
    <div className="container-page py-20 text-center max-w-2xl">
      <h1 className="font-heading text-4xl sm:text-5xl text-white mb-4">
        Payment Cancelled
      </h1>
      <p className="text-gray-300 mb-2">
        No worries — your cart items are still saved.
      </p>
      <p className="text-gray-400 mb-8">
        If you had any trouble, please get in touch via our contact page.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/cart">
          <Button size="lg">Return to Cart</Button>
        </Link>
        <Link href="/shop">
          <Button variant="secondary" size="lg">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}

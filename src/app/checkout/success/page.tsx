import type { Metadata } from "next";
import Link from "next/link";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import { ClearCartOnSuccess } from "@/components/checkout/clear-cart-on-success";

export const metadata: Metadata = {
  title: "Order Confirmed",
};

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  if (!session_id) {
    return (
      <div className="container-page py-20 text-center">
        <p className="text-gray-400">Invalid session.</p>
      </div>
    );
  }

  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(session_id);
  } catch {
    return (
      <div className="container-page py-20 text-center">
        <p className="text-gray-400">Could not retrieve order details.</p>
      </div>
    );
  }

  if (session.payment_status !== "paid") {
    return (
      <div className="container-page py-20 text-center">
        <p className="text-gray-400">Payment not completed.</p>
        <Link href="/cart" className="inline-block mt-4">
          <Button variant="secondary">Return to Cart</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page py-20 text-center max-w-2xl">
      <ClearCartOnSuccess />

      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-red to-brand-orange flex items-center justify-center">
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h1 className="font-heading text-4xl sm:text-5xl text-brand-orange mb-4">
        Order Confirmed!
      </h1>
      <p className="text-lg text-gray-300 mb-2">
        Thank you for your order! A confirmation email has been sent to{" "}
        <span className="text-white font-semibold">
          {session.customer_details?.email}
        </span>
        .
      </p>
      <p className="text-gray-400 mb-8">
        Isaac will get started on your instruments right away. You&apos;re
        helping him get closer to Disneyland!
      </p>

      <Link href="/shop">
        <Button size="lg">Continue Shopping</Button>
      </Link>
    </div>
  );
}

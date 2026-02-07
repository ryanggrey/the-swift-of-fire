import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { CartContents } from "@/components/cart/cart-contents";

export const metadata: Metadata = {
  title: "Cart",
};

export default function CartPage() {
  return (
    <div className="container-page py-12">
      <SectionHeading>Your Cart</SectionHeading>
      <CartContents />
    </div>
  );
}

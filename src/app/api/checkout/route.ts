import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getProductBySlug } from "@/lib/products";

interface CheckoutItem {
  slug: string;
  variantId: string | null;
  quantity: number;
}

export async function POST(req: NextRequest) {
  try {
    const { items } = (await req.json()) as { items: CheckoutItem[] };

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    // Look up prices server-side — never trust client-sent prices
    const line_items = items.map((item) => {
      const product = getProductBySlug(item.slug);
      if (!product) {
        throw new Error(`Product not found: ${item.slug}`);
      }
      if (!product.inStock) {
        throw new Error(`Product out of stock: ${product.name}`);
      }

      const variant = item.variantId
        ? product.variants.find((v) => v.id === item.variantId)
        : null;

      return {
        price_data: {
          currency: "gbp",
          product_data: {
            name: product.name,
            description: variant
              ? `${variant.label}`
              : product.description,
          },
          unit_amount: product.price,
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/cancel`,
      shipping_address_collection: {
        allowed_countries: ["GB"],
      },
      billing_address_collection: "required",
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to create checkout session";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

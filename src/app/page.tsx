import Image from "next/image";
import Link from "next/link";
import { getFeaturedProducts } from "@/lib/products";
import { ProductCard } from "@/components/ui/product-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
        {/* Background image (mobile: full bleed behind text) */}
        <Image
          src="/hero.png"
          alt="A bass guitar erupting in flames with drums and smoke"
          fill
          priority
          className="object-cover object-center opacity-40 lg:opacity-100"
          sizes="100vw"
        />
        {/* Dark overlay for readability on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/60 lg:via-brand-dark/90 lg:to-transparent" />
        {/* Bottom fade so image blends into next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-dark to-transparent" />

        <div className="relative container-page py-20 sm:py-28 lg:py-36 flex items-center min-h-[600px] lg:min-h-[700px]">
          <div className="max-w-2xl">
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl tracking-wider">
              <span className="text-white">Handmade Instruments</span>
              <br />
              <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
                For Young Rockers
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl">
              Shakers, stomp boxes, and more — handmade with love by Isaac (age
              7). Affordable, durable, and built to rock.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/shop">
                <Button size="lg">Shop Now</Button>
              </Link>
              <Link href="/about">
                <Button variant="secondary" size="lg">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container-page py-16">
        <SectionHeading>Featured Instruments</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/shop">
            <Button variant="secondary">View All Products</Button>
          </Link>
        </div>
      </section>

      {/* Made by Isaac callout */}
      <section className="bg-brand-charcoal/50 border-y border-white/5">
        <div className="container-page py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-red to-brand-orange flex items-center justify-center shrink-0">
            <span className="font-heading text-5xl text-white">I</span>
          </div>
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl tracking-wide text-white">
              Made by Isaac, Age 7
            </h2>
            <p className="mt-3 text-gray-300 max-w-xl leading-relaxed">
              The Swift of Fire is a real business run by a real kid. Isaac
              loves rock music, making things with his hands, and learning how
              businesses work. Every instrument is handmade by Isaac with help
              from his parents.
            </p>
            <p className="mt-3 text-brand-orange font-semibold">
              All profits go towards Isaac&apos;s Disneyland savings fund!
            </p>
            <Link href="/about" className="inline-block mt-4">
              <Button variant="ghost" size="sm">
                Read Isaac&apos;s Story &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container-page py-16">
        <SectionHeading>What We Make</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link
            href="/shop?category=shakers"
            className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-brand-orange to-yellow-500 flex items-end p-6 hover:scale-[1.02] transition-transform"
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
            <div className="relative">
              <h3 className="font-heading text-3xl text-white tracking-wide">
                Shakers
              </h3>
              <p className="text-sm text-white/80">From £5</p>
            </div>
          </Link>
          <Link
            href="/shop?category=stomp-boxes"
            className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-brand-charcoal to-brand-red flex items-end p-6 hover:scale-[1.02] transition-transform"
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
            <div className="relative">
              <h3 className="font-heading text-3xl text-white tracking-wide">
                Stomp Boxes
              </h3>
              <p className="text-sm text-white/80">From £15</p>
            </div>
          </Link>
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-gray-800 to-brand-orange flex items-end p-6 opacity-60">
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative">
              <h3 className="font-heading text-3xl text-white tracking-wide">
                Custom Guitars
              </h3>
              <p className="text-sm text-brand-orange font-semibold">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

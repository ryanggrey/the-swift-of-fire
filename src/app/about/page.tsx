import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Isaac, the 7-year-old founder of The Swift of Fire, and learn about his handmade instruments.",
};

export default function AboutPage() {
  return (
    <div className="container-page py-12 max-w-3xl">
      <SectionHeading>About The Swift of Fire</SectionHeading>

      <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
        <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-brand-red to-brand-orange flex items-center justify-center shrink-0">
          <span className="font-heading text-6xl text-white">I</span>
        </div>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Hi! My name is <strong className="text-white">Isaac</strong> and
            I&apos;m 7 years old. I love rock music, building things, and making
            loud noises — so I started my own business making instruments!
          </p>
          <p>
            <strong className="text-brand-orange">The Swift of Fire</strong> is
            my brand. I make shakers, stomp boxes, and other percussion
            instruments by hand. Every single one is made by me (with a bit of
            help from Mum and Dad for the tricky bits).
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="font-heading text-2xl tracking-wide text-white mb-3">
            Why I Started
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I wanted to learn how a real business works — from making products,
            to selling them, to counting the money. My parents are helping me
            learn about pricing, customer service, and how to make things people
            actually want to buy. It&apos;s like school but way more fun!
          </p>
        </div>

        <div>
          <h3 className="font-heading text-2xl tracking-wide text-white mb-3">
            My Love of Rock Music
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I love rock music and playing instruments. That&apos;s why all my
            products have cool rock-inspired names and designs — like the Thunder
            Stomp Box and the Rock Star Shaker. Music should be fun and loud!
          </p>
        </div>

        <div>
          <h3 className="font-heading text-2xl tracking-wide text-white mb-3">
            The Disneyland Dream
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I&apos;m saving up all the profits from The Swift of Fire for a
            family trip to Disneyland! Every shaker sold and every stomp box
            shipped gets me a little bit closer. Thank you so much for supporting
            my business — it really means the world to me!
          </p>
          <div className="mt-4 p-4 rounded-xl bg-brand-charcoal/50 border border-brand-orange/20">
            <p className="text-brand-orange font-semibold">
              Disneyland Fund Progress: Growing every day!
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Every purchase helps Isaac get closer to his dream.
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-2xl tracking-wide text-white mb-3">
            What&apos;s Next
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Soon I&apos;m going to start upcycling guitars — taking second-hand
            instruments and making them look amazing with custom vinyl skins and
            decals. Watch this space!
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="/shop">
          <Button size="lg">Check Out My Instruments</Button>
        </Link>
      </div>
    </div>
  );
}

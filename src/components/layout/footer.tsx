import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-brand-dark">
      <div className="container-page py-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          <div>
            <Logo size="sm" />
            <p className="mt-2 text-sm text-gray-400">
              Handmade instruments for young rockers.
            </p>
            <p className="mt-1 text-sm text-brand-orange">
              Made by Isaac (age 7)
            </p>
          </div>
          <nav className="flex gap-6 text-sm">
            <Link
              href="/shop"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/faq"
              className="text-gray-400 hover:text-white transition-colors"
            >
              FAQ
            </Link>
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} The Swift of Fire. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

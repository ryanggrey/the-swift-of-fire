import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/faq/accordion";
import { faqData } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about The Swift of Fire instruments.",
};

export default function FaqPage() {
  return (
    <div className="container-page py-12 max-w-3xl">
      <SectionHeading>Frequently Asked Questions</SectionHeading>
      <Accordion items={faqData} />
    </div>
  );
}

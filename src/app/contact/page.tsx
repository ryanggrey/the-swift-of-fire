import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Swift of Fire.",
};

export default function ContactPage() {
  return (
    <div className="container-page py-12 max-w-3xl">
      <SectionHeading>Contact Us</SectionHeading>
      <p className="text-gray-300 mb-8 leading-relaxed">
        Got a question about our instruments? Want to order in bulk for a school?
        Just want to say hi? Drop us a message and we&apos;ll get back to you!
      </p>
      <ContactForm />
    </div>
  );
}

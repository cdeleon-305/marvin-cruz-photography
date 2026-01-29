import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to book your photography session. I typically respond within 24 hours.",
};

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section with Background Image */}
      <div className="relative bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Contact background"
            fill
            className="object-cover brightness-50"
            sizes="100vw"
            quality={90}
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Let's Work Together
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to capture your special moments? Fill out the form below or
            reach out directly
          </p>
        </div>
      </div>

      {/* Contact Section with Dark Background */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  );
}

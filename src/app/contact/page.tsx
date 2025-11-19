import ContactForm from "@/components/fragments/contact/contact-form-section";
import React from "react";
import ContactHero from "@/components/fragments/contact/hero-section";
import ContactCardsSection from "@/components/fragments/contact/cards-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak & Konsultasi",
  description:
    "Hubungi tim PT Rimbun Daur Alam untuk konsultasi solusi pengolahan sampah, RDF briket, dan energi terbarukan yang sesuai dengan kebutuhan Anda.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center">
      <ContactHero />
      <ContactCardsSection />
      <ContactForm />
    </main>
  );
}

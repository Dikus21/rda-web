import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/fragments/contact/hero-section";
import CardsSection from "@/components/fragments/contact/cards-section";
import ContactForm from "@/components/fragments/contact/contact-form";

export const metadata: Metadata = {
  title: "Kontak & Konsultasi",
  description:
    "Hubungi tim PT Rimbun Daur Alam untuk konsultasi solusi pengolahan sampah, RDF briket, dan energi terbarukan yang sesuai dengan kebutuhan Anda.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <CardsSection />
      <ContactForm />
    </main>
  );
}

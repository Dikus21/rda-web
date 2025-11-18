import React from "react";
import Contact from "@/components/elements/contact-section";
import HeroSection from "@/components/fragments/product/hero-section";
import ProblemSolutionSection from "@/components/fragments/product/problem-solution-section";
import WorkflowSection from "@/components/fragments/product/workflow-section";
import SpecificationSection from "@/components/fragments/product/specification-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aureloop — RDF Briket System",
  description:
    "Aureloop adalah sistem RDF briket terintegrasi dari pemilahan, pencacahan, pengeringan hingga pembentukan briket sebagai bahan bakar alternatif pengganti batu bara.",
  openGraph: {
    title: "Aureloop — RDF Briket System | PT Rimbun Daur Alam",
    description:
      "Solusi lengkap pengolahan sampah menjadi RDF briket bernilai tinggi, siap diintegrasikan on-site di fasilitas industri dan PLTU.",
    images: ["/og/aureloop-page.png"],
  },
};

export default function ProductPage() {
  return (
    <main className="min-h-dvh w-full bg-bg text-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Aureloop — RDF Briket System",
            brand: { "@type": "Organization", name: "PT Rimbun Daur Alam" },
            category: "RDF briquette system",
            description:
              "Sistem pengolahan sampah terpadu menjadi RDF briket, dengan alur pemilahan, pencacahan, pengeringan, hingga pembentukan briket.",
          }),
        }}
      />
      <HeroSection />
      <ProblemSolutionSection />
      <WorkflowSection />
      <SpecificationSection />
      <Contact
        title="Siap Ubah Sampah Menjadi Energi?"
        subtitle="Dengan Aureloop, Anda bisa mengurangi sampah, menghasilkan energi
            bersih, dan membangun masa depan yang berkelanjutan."
      />
    </main>
  );
}

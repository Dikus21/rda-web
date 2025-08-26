import ContactForm from "@/components/fragments/Contact/contactForm";
import type { Metadata } from "next";

const ORG = "PT Rimbun Daur Alam";
const ADDRESS = "Kabupaten Tangerang, Indonesia";

export const metadata: Metadata = {
  title: `Hubungi Kami | ${ORG}`,
  description:
    "Hubungi PT Rimbun Daur Alam untuk konsultasi sistem pengolahan sampah terpadu dan solusi RDF briket.",
  openGraph: {
    title: `Hubungi Kami | ${ORG}`,
    description:
      "Konsultasikan kebutuhan pengolahan sampah: kapasitas, komposisi, output, dan timeline implementasi.",
  },
};
export default function ContactPage() {
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || "";
  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "rimbundauralam@gmail.com";
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Hubungi Kami
          </h1>
          <p
            className="mx-auto mt-3 max-w-2xl text-base"
            style={{ color: "var(--muted)" }}
          >
            Sampaikan kebutuhan Anda—kami siap membantu dari studi awal hingga
            implementasi on-site.
          </p>
        </div>
        <ContactForm
          org={ORG}
          address={ADDRESS}
          waNumber={waNumber}
          contactEmail={contactEmail}
        />
        <div className="h-14" />
      </section>
    </main>
  );
}

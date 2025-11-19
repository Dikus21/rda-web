import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/fragments/navbar";
import Footer from "@/components/fragments/footer";
import type { Metadata } from "next";
import Jsonld from "@/lib/jsonld";

export const metadata: Metadata = {
  metadataBase: new URL("https://rimbun.co.id"),
  title: {
    default: "PT Rimbun Daur Alam",
    template: "%s | PT Rimbun Daur Alam",
  },
  description:
    "PT Rimbun Daur Alam mengembangkan teknologi ramah lingkungan untuk pengolahan sampah dan energi terbarukan, termasuk sistem RDF briket Aureloop.",
  openGraph: {
    type: "website",
    siteName: "PT Rimbun Daur Alam",
    url: "https://rimbun.co.id",
    title:
      "PT Rimbun Daur Alam | Solusi Pengelolaan Sampah & Energi Terbarukan",
    description:
      "Solusi energi dan pengolahan limbah yang terintegrasi, dari pemilahan hingga RDF briket sebagai bahan bakar alternatif ramah lingkungan.",
    images: ["/og/default-rimbun.png"], // buat file ini nanti
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Jsonld
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "PT Rimbun Daur Alam",
          url: "https://rimbun.co.id",
          logo: "https://rimbun.co.id/logo.png",
          description: "Teknologi pengolahan sampah dan energi terbarukan.",
        }}
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

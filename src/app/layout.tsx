import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/fragments/navbar";
import Footer from "@/components/fragments/footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT Rimbun Daur Alam | Solusi Pengelolaan Sampah & Energi Terbarukan",
  description:
    "PT Rimbun Daur Alam menghadirkan solusi berkelanjutan melalui mesin pengolahan sampah dan lampu jalan tenaga surya, mendukung ekonomi sirkular dan energi hijau.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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

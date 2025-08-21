"use client";

import Pill from "@/components/elements/pill";
import Image from "next/image";
import Link from "next/link";

function CTAButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href="/product" className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md shadow-[#000]/5">
        Lihat Produk
      </Link>
      <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md">
        Hubungi Sales
      </Link>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative flex min-h-[70vh] items-center md:min-h-[78vh]">
        <div className="absolute inset-0">
          <Image
            src="/hero-img.jpg"
            alt="Latar hero energi hijau"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Pill tone="accent1">Solusi Energi & Pengolahan Limbah</Pill>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Tumbuh dalam Harmoni, <span className="text-primary">Menghidupkan Kembali Alam</span>
          </h1>
          <p className="mt-4 mx-auto max-w-3xl text-lg text-white/90">
            Menghadirkan inovasi ramah lingkungan untuk pengolahan limbah, energi terbarukan, dan ekonomi sirkular demi masa depan yang bersih dan berkelanjutan.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButtons />
          </div>
        </div>
      </div>
    </section>
  );
}

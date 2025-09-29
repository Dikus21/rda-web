"use client";
import Pill from "@/components/elements/pill";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || "6281234567890";
  const EMAIL_SALES =
    process.env.NEXT_PUBLIC_EMAIL_SALES || "rimbundauralam@gmail.com";

  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Halo PT Rimbun Daur Alam, saya tertarik dengan Aureloop — mohon kirimkan katalog & penawaran."
  )}`;

  const mailtoLink = `mailto:${EMAIL_SALES}?subject=${encodeURIComponent(
    "Permintaan Katalog & Penawaran — Aureloop"
  )}&body=${encodeURIComponent(
    "Halo Tim RDA,%0D%0A%0D%0ASaya tertarik dengan Aureloop. Mohon info katalog, spesifikasi lengkap, dan penawaran harga.%0D%0A%0D%0ATerima kasih."
  )}`;
  return (
    <motion.section
      id="hero"
      className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 lg:py-24 w-full bg-bg"
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={stagger}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div variants={stagger}>
          <motion.div variants={fadeUp}>
            <Pill tone="accent1">Produk</Pill>
          </motion.div>
          <motion.h1
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold"
            variants={fadeUp}
          >
            Aureloop — RDF Briket System
          </motion.h1>
          <motion.p
            className="mt-4 text-base sm:text-lg text-muted"
            variants={fadeUp}
          >
            Ubah timbunan sampah menjadi bahan bakar alternatif yang memberi
            energi baru mendukung keberlanjutan lingkungan.
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-3" variants={fadeUp}>
            <motion.a
              href={waLink}
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium shadow-sm transition active:scale-[.98] bg-primary text-white"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Dapatkan Katalog & Penawaran Harga
            </motion.a>
            <motion.a
              href={mailtoLink}
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium ring-1 transition text-text border-border"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Email Sales
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Gambar/visual */}
        <motion.div className="relative" variants={fadeUp}>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl shadow bg-card border-2 border-solid border-border">
            <Image
              src="/full-line-assy.png"
              alt="Render 3D / ilustrasi sistem Aureloop RDF Briket"
              className="h-full w-fit object-contain"
              loading="lazy"
              width={1000}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

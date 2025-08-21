"use client";

import Pill from "@/components/elements/pill";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-section py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Pill>About Us</Pill>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-text md:text-4xl">
            PT Rimbun Daur Alam
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            PT Rimbun Daur Alam adalah perusahaan yang mengembangkan teknologi
            ramah lingkungan untuk pengolahan limbah dan energi terbarukan. Kami
            berkomitmen membantu pemerintah, industri, dan masyarakat
            menciptakan masa depan yang bersih dan berkelanjutan.
          </p>
          <div className="mt-6">
            <Link
              href="/about"
              className="inline-flex items-center rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-white"
            >
              Pelajari Selengkapnya
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
            <Image
              src="/about-img.jpg"
              alt="Tim engineer bekerja pada solusi teknologi hijau"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="absolute -top-4 left-6">
            <Pill tone="accent2">Sustainability • Innovation</Pill>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

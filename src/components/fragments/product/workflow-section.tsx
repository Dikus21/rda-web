"use client";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { motion } from "framer-motion";
import React from "react";

export default function WorkflowSection() {
  return (
    <motion.section
      id="workflow"
      className="mx-auto max-w-6xl px-4 sm:px-6 py-14 lg:py-16"
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={stagger}
    >
      <div className="grid grid-cols-1 gap-8">
        <motion.h2 className="text-2xl font-semibold" variants={fadeUp}>
          Bagaimana Aureloop Bekerja
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={stagger}
        >
          {[
            {
              title: "Pemilahan & Pencacahan",
              desc: "Sampah dipilah dan dicacah menjadi ukuran seragam.",
              icon: "🧩",
            },
            {
              title: "Pengeringan & Pengolahan",
              desc: "Kadar air dikurangi agar siap dibakar.",
              icon: "🔥",
            },
            {
              title: "Briket RDF",
              desc: "Produk akhir yang dapat dimanfaatkan sebagai sumber energi alternatif.",
              icon: "🔋",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="rounded-3xl p-6 ring-1 border-border bg-card"
              variants={fadeUp}
            >
              <div className="text-3xl" aria-hidden>
                {s.icon}
              </div>
              <h3 className="mt-3 text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

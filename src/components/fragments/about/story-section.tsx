"use client";
import Pill from "@/components/elements/pill";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion"; // ⬅️ sesuaikan path bila perlu

export default function StorySection() {
  return (
    <section className="py-16 bg-section">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-2">
        {/* Left: copy & quote */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp}>
            <Pill tone="accent1">Cerita Kami</Pill>
          </motion.div>

          <motion.h2
            className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl"
            variants={fadeUp}
          >
            Bagaimana kami memulai dan apa yang kami perjuangkan
          </motion.h2>

          <motion.p
            className="mt-3 text-base leading-relaxed text-muted"
            variants={fadeUp}
          >
            PT Rimbun Daur Alam lahir dari kepedulian terhadap lingkungan dan
            kebutuhan energi yang kian meningkat. Sejak awal kami percaya bahwa
            solusi terbaik hadir dari kolaborasi dan inovasi untuk mewujudkan
            sistem yang lebih efisien sekaligus menghasilkan energi yang lebih
            bersih.
          </motion.p>

          <motion.p
            className="mt-3 text-base leading-relaxed text-muted"
            variants={fadeUp}
          >
            Hari ini, kami terus bertumbuh dengan kemitraan yang transparan dan
            berkelanjutan, membantu pemerintah, industri, dan masyarakat
            menciptakan bumi yang lebih bersih dan lestari.
          </motion.p>

          <motion.div
            className="mt-6 max-w-md rounded-2xl border p-4 border-border bg-card"
            variants={fadeUp}
          >
            <p className="text-sm text-text">
              “Teknologi ramah lingkungan untuk masa depan, membangun sistem
              yang <span className="font-semibold">bersih</span>,{" "}
              <span className="font-semibold">efisien</span>, dan{" "}
              <span className="font-semibold">berkelanjutan</span>.”
            </p>
          </motion.div>
        </motion.div>

        {/* Right: image + pill */}
        <motion.div
          className="flex h-full relative"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-xl">
            <div className="absolute bg-black/20 w-full h-full" />
            <Image
              src="/bantar-gebang.png"
              alt="Tim bekerja pada solusi teknologi hijau"
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>

          <motion.div className="absolute -bottom-4 left-6" variants={fadeUp}>
            <Pill tone="accent2">Tantangan Lingkungan Perkotaan</Pill>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

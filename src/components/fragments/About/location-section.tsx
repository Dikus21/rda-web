import Pill from "@/components/elements/pill";
import { data } from "@/data";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion"; // ⬅️ sesuaikan path bila perlu

export default function LocationSection() {
  return (
    <section id="maps" className="py-14 lg:py-16 bg-section">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 px-4 sm:px-6 md:grid-cols-2">
        {/* Left: address + map */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.h2
            className="text-2xl font-semibold text-text"
            variants={fadeUp}
          >
            Workshop & Alamat
          </motion.h2>

          <motion.p className="mt-3 text-muted" variants={fadeUp}>
            {data.company.name}
          </motion.p>
          <motion.p className="text-muted" variants={fadeUp}>
            {data.contact.address}
          </motion.p>

          <motion.div
            className="mt-5 overflow-hidden rounded-xl border border-border"
            variants={fadeUp}
          >
            <iframe
              title="Lokasi PT Rimbun Daur Alam"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                `${data.company.name} ${data.contact.address}`
              )}&output=embed`}
              className="h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </motion.div>

        {/* Right: photo + pill label */}
        <motion.div
          className="relative rounded-2xl border border-border bg-card shadow-sm"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <Image
            src="/about-img.jpg"
            alt="Workshop"
            width={800}
            height={800}
            className="h-auto w-full rounded-xl"
          />

          <motion.div className="absolute -bottom-4 left-6" variants={fadeUp}>
            <Pill tone="accent1">Tampak Depan Workshop</Pill>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

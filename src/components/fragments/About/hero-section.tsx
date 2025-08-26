import Pill from "@/components/elements/pill";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, fade } from "@/lib/motion";

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="relative flex min-h-[50vh] items-center overflow-hidden">
        {/* Subtle Ken Burns bg (formal, pelan) */}
        <motion.div
          aria-hidden
          initial={{ scale: 1.02 }}
          animate={{ scale: 1.06 }}
          transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
        >
          <Image
            src="/about-img.jpg"
            width={2000}
            height={2000}
            alt="Hero green energy"
            className="h-full w-full object-cover"
            priority
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-black/55"
          variants={fade}
          initial="hidden"
          animate="show"
        />

        <div className="relative mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <Pill tone="accent1">Tentang Kami</Pill>
          </motion.div>

          <motion.h1
            className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.08 }}
          >
            Membawa Dampak Nyata Melalui Teknologi Ramah Lingkungan
          </motion.h1>

          <motion.p
            className="mx-auto mt-3 max-w-3xl text-white/90"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.16 }}
          >
            Kenali tim, nilai, dan cara kerja kami dalam membangun solusi
            pengelolaan limbah dan energi terbarukan.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

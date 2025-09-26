"use client";
import Pill from "@/components/elements/pill";
import { fade, fadeUp } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full">
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
            src="/full-line-assy.png"
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
            <Pill tone="accent1">Product & Solution</Pill>
          </motion.div>

          <motion.h1
            className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.08 }}
          >
            AURELOOP
          </motion.h1>

          <motion.p
            className="mx-auto mt-3 max-w-3xl text-white/90"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.16 }}
          >
            Solusi energi terbarukan dari timbunan sampah perkotaan.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

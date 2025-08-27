"use client";

import { motion } from "framer-motion";
import { fadeUp, fade, stagger, VIEWPORT } from "@/lib/motion";
import ContactForm from "@/components/fragments/Contact/contactForm";
import SelectionCard from "@/components/fragments/Contact/selectionCard";
import { data } from "@/data";
import type { Metadata } from "next";
import React from "react";
import Pill from "@/components/elements/pill";
import Image from "next/image";

const SCHEDULE = process.env.NEXT_PUBLIC_SCHEDULE || "08.00–17.00 (Sen–Jum)";

// const metadata: Metadata = {
//   title: `Hubungi Kami | ${data.company.name}`,
//   description:
//     "Hubungi PT Rimbun Daur Alam untuk konsultasi sistem pengolahan sampah terpadu dan solusi RDF briket.",
//   openGraph: {
//     title: `Hubungi Kami | ${data.company.name}`,
//     description:
//       "Konsultasikan kebutuhan pengolahan sampah: kapasitas, komposisi, output, dan timeline implementasi.",
//   },
// };

export default function ContactPage() {
  const telHref = data.contact.phone
    ? `https://wa.me/${data.contact.phone}`
    : undefined;
  const mailHref = `mailto:${data.contact.email}`;
  const mapHref = `https://maps.app.goo.gl/aqdm4cD6iQhSrc8g8`;

  return (
    <main className="flex flex-col items-center">
      <section className="relative w-full">
        <div className="relative flex min-h-[50vh] items-center overflow-hidden">
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
              src="/contact-hero.jpg"
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
              <Pill tone="accent1">Hubungi Kami</Pill>
            </motion.div>

            <motion.h1
              className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.08 }}
            >
              Kami siap menjawab pertanyaan Anda dengan solusi terbaik.
            </motion.h1>

            <motion.p
              className="mx-auto mt-3 max-w-3xl text-white/90"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.16 }}
            >
              Dapatkan informasi, konsultasi, dan penawaran yang sesuai
              kebutuhan Anda. Tim kami selalu siap membantu di setiap tahap.
            </motion.p>
          </div>
        </div>
      </section>
      <motion.section
        aria-labelledby="contact-title"
        className="flex flex-col items-center gap-3 max-w-6xl px-4 py-8 sm:px-6 lg:px-8"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <motion.div
          className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 h-full"
          variants={stagger}
        >
          {/* Phone */}
          <motion.div variants={fadeUp}>
            <SelectionCard
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.3 1.77.54 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.11a2 2 0 0 1 2.11-.45c.84.24 1.71.42 2.61.54A2 2 0 0 1 22 16.92" />
                </svg>
              }
              title="Phone"
              line1={`+${data.contact.phone}`}
              href={telHref}
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={fadeUp}>
            <SelectionCard
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              }
              title="Email"
              line1={data.contact.email}
              href={mailHref}
            />
          </motion.div>

          {/* Schedule */}
          <motion.div variants={fadeUp}>
            <SelectionCard
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12" />
                  <polyline points="12 12 16 14" />
                </svg>
              }
              title="Schedule"
              line1={SCHEDULE}
              line2="(WIB)"
            />
          </motion.div>

          {/* Address */}
          <motion.div variants={fadeUp}>
            <SelectionCard
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
              title="Address"
              line1={data.company.name}
              line2={data.contact.address}
              href={mapHref}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Bagian form */}
      <motion.section
        className="mt-5 bg-accent1/10 py-16 px-10 rounded-3xl"
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <div className="mx-auto max-w-6xl md:min-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            <motion.h2
              className="text-3xl font-extrabold tracking-tight text-text md:text-4xl"
              variants={fadeUp}
            >
              Hubungi Kami Secara Langsung
            </motion.h2>
            <motion.p
              className="mx-auto mt-3 max-w-xl text-sm text-muted md:text-base"
              variants={fadeUp}
            >
              Silakan isi formulir berikut. Tim kami akan menghubungi Anda
              secepatnya.
            </motion.p>
          </motion.div>

          <motion.div
            className="mx-auto mt-8 max-w-3xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            <ContactForm
              waNumber={data.contact.phone}
              contactEmail={data.contact.email}
            />
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

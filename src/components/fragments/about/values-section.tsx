import Pill from "@/components/elements/pill";
import {
  Lightbulb,
  Star,
  MessageSquare,
  Users,
  ArrowUpRight,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion"; // ⬅️ sesuaikan path bila perlu
import { data } from "@/data";

export default function ValuesSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="mb-8 text-center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp}>
            <Pill tone="primary">Nilai-nilai Kami</Pill>
          </motion.div>

          <motion.h2
            className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl text-text"
            variants={fadeUp}
          >
            Nilai-nilai yang mendorong setiap hal yang kami lakukan
          </motion.h2>

          <motion.p
            className="mx-auto mt-3 max-w-3xl text-muted"
            variants={fadeUp}
          >
            Nilai inti ini memandu cara kami membuat keputusan, berkolaborasi,
            dan menghadirkan dampak yang bertahan lama.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Left mosaic (2 cols) */}
          <motion.div
            className="grid grid-cols-1 gap-5 md:col-span-2 md:grid-cols-2"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Innovation – big card spanning 2 cols */}
            <motion.div
              className="rounded-3xl border border-border bg-card p-6 shadow-sm md:col-span-2"
              variants={fadeUp}
            >
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Lightbulb size={18} />
                </div>
                <h3 className="text-xl font-semibold text-text">Innovation</h3>
              </div>
              <p className="text-muted">
                Kami selalu mencari pendekatan baru—menggabungkan riset,
                rekayasa, dan umpan balik klien untuk menghasilkan solusi lebih
                cerdas dan efisien.
              </p>
            </motion.div>

            {/* Excellence */}
            <motion.div
              className="rounded-3xl border border-border bg-card p-6 shadow-sm"
              variants={fadeUp}
            >
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent1/15 text-accent1">
                  <Star size={18} />
                </div>
                <h3 className="text-lg font-semibold text-text">Excellence</h3>
              </div>
              <p className="text-muted">
                Standar kualitas tinggi, keselamatan, dan keandalan operasional.
              </p>
            </motion.div>

            {/* Communication */}
            <motion.div
              className="rounded-3xl border border-border bg-card p-6 shadow-sm"
              variants={fadeUp}
            >
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent2/15 text-accent2">
                  <MessageSquare size={18} />
                </div>
                <h3 className="text-lg font-semibold text-text">
                  Communication
                </h3>
              </div>
              <p className="text-muted">
                Transparansi dan respons cepat dalam setiap kolaborasi.
              </p>
            </motion.div>

            {/* Teamwork */}
            <motion.div
              className="rounded-3xl border border-border bg-card p-6 shadow-sm md:col-span-2"
              variants={fadeUp}
            >
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/15 text-secondary">
                  <Users size={18} />
                </div>
                <h3 className="text-lg font-semibold text-text">Teamwork</h3>
              </div>
              <p className="text-muted">
                Kolaborasi erat dengan klien, pemasok, dan komunitas untuk
                mencapai hasil terbaik.
              </p>
            </motion.div>
          </motion.div>

          {/* Right rail CTA */}
          <motion.aside
            className="rounded-3xl border border-border bg-card p-6 flex flex-col justify-between"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-text">
                Siap berkolaborasi untuk solusi berkelanjutan?
              </h3>
              <p className="text-muted">
                Hubungi tim kami untuk konsultasi sistem pengolahan sampah
                terpadu atau solusi energi terbarukan.
              </p>
              <a
                href="/contact"
                className="mt-3 flex w-fit items-center rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-secondary shadow ring-1 ring-border"
              >
                Hubungi Kami
                <ArrowUpRight className="ml-2 p-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-white" />
              </a>
            </div>
            <div className="mt-6 space-y-3 text-sm">
              <div>
                <div className="font-medium text-text">Email address</div>
                <a
                  href={`mailto:${data.contact.email}`}
                  className="underline-offset-2 hover:underline text-text"
                >
                  {data.contact.email}
                </a>
              </div>
              <div>
                <div className="font-medium text-text">Phone number</div>
                <a
                  href={`tel:${data.contact.phone}`}
                  className="underline-offset-2 hover:underline text-text"
                >
                  {data.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

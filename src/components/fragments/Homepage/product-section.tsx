"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import Pill from "@/components/elements/pill";
import LogoImg from "@/components/elements/logo-img";
import { data } from "@/data";

const WhatsAppLink = `https://wa.me/${data.contact.phone}?text=Halo%20saya%20tertarik%20dan%20ingin%20mendapatkan%20penawaran%20untuk%20mesin%20pengolahan%20sampah`;

function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <li className="flex gap-3">
      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
        <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5">
          <path
            d="M5 10l3 3 7-7"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <p className="font-medium text-text">{title}</p>
        <p className="text-muted">{desc}</p>
      </div>
    </li>
  );
}

export default function Product() {
  return (
    <section id="product" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text md:text-4xl">
            Product & Solution
          </h2>
          <p className="mt-3 text-base text-muted md:text-lg">
            Saat ini kami fokus pada satu solusi utama. Ke depan, lini produk
            akan bertambah seiring kebutuhan dan perkembangan teknologi.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <div className="flex sm:flex-row flex-col items-center sm:gap-3 gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-card text-white">
                <LogoImg size={40} src={"/logo-aureloop.svg"} />
              </div>
              <div className="sm:text-start text-center">
                <h3 className="text-2xl font-semibold text-text">
                  Aureloop — RDF Briket System
                </h3>
                <p className="text-muted">
                  Sistem terintegrasi dari pemilahan hingga energi alternatif.
                </p>
              </div>
            </div>

            <p className="text-base leading-relaxed text-muted">
              Kami merancang sistem yang menghubungkan proses pemilahan,
              pencacahan, pengeringan, dan pemrosesan lanjutan untuk
              menghasilkan Refuse-Derived Fuel (RDF) dalam bentuk briket sebagai
              bahan bakar alternatif ramah lingkungan.
            </p>

            <ul className="mt-4 grid gap-4">
              <FeatureItem
                title="Terintegrasi penuh"
                desc="Menghubungkan seluruh proses dari pemilahan hingga hasil akhir."
              />
              <FeatureItem
                title="Produk bernilai tinggi"
                desc="Menghasilkan RDF briket siap digunakan sebagai energi alternatif."
              />
              <FeatureItem
                title="Mendukung energi berkelanjutan"
                desc="Mengurangi ketergantungan pada batu bara dan emisi karbon."
              />
            </ul>

            <div className="pt-4 flex sm:flex-row flex-col gap-3 w-auto">
              <Link
                href={WhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="mr-3 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white w-fit"
              >
                <MessageSquare size={16} /> Tanya Produk via WhatsApp
              </Link>
              <Link
                href="/product"
                className="w-fit mr-3 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-[#1B5E20] ring-1 ring-[#1B5E20]/20 transition hover:bg-[#1B5E20]/5 bg-white/85"
              >
                Lihat Selengkapnya
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
            <div className="relative aspect-[16/9] rounded-3xl border border-border bg-card shadow-xl flex items-center">
              <Image
                src="/full-line-assy.jpg"
                alt="Waste sorting line dan sistem RDF briket"
                height={800}
                width={800}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-6">
              <Pill tone="accent1">Siap diintegrasikan on-site</Pill>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

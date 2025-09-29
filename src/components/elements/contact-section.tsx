"use client";

import { data } from "@/data";
import { fadeUp, VIEWPORT } from "@/lib/motion";
import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";

const WhatsAppLink = `https://wa.me/${data.contact.phone}?text=Halo%20saya%20tertarik%20dan%20ingin%20mendapatkan%20penawaran%20untuk%20mesin%20pengolahan%20sampah`;
const EmailLink = `mailto:${data.contact.email}?subject=Permintaan%20Katalog%20dan%20Penawaran&body=Halo%2C%20saya%20ingin%20mendapatkan%20katalog%20dan%20penawaran%20untuk%20produk%20Anda.`;

export default function Contact({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      className="w-full bg-section"
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={fadeUp}
    >
      <section id="contact" className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden rounded-3xl border border-border p-8 text-white shadow-lg md:p-10"
            style={{
              background:
                "linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 60%)",
            }}
          >
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent1 opacity-20" />
            <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-accent2 opacity-20" />
            <div className="relative">
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                {title}
              </h3>
              <p className="mt-2 max-w-2xl text-white/90">{subtitle}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={WhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30"
                >
                  <MessageSquare size={16} /> WhatsApp Sales
                </a>
                <a
                  href={EmailLink}
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30"
                >
                  <Mail size={16} /> Email Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

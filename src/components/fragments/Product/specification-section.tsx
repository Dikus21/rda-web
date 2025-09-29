import { fade, fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { motion } from "framer-motion";
import React from "react";

export default function SpecificationSection() {
  return (
    <motion.section
      id="specs"
      className="mx-auto px-4 sm:px-6 py-14 lg:py-8 bg-section w-full flex justify-center"
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={stagger}
    >
      <div className="max-w-5xl w-full">
        <motion.h2 className="text-2xl font-semibold" variants={fadeUp}>
          Spesifikasi Ringkas
        </motion.h2>
        <div className="mt-6 overflow-hidden rounded-3xl ring-1 border-border">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["Kapasitas Input", "50–400 ton/hari (modular)"],
                ["Output RDF Briket", "40–50% dari sampah masuk"],
                ["Kadar Air Maksimal", "< 20%"],
                ["Konsumsi Daya", "disesuaikan kebutuhan"],
                ["Luas Lahan", "custom sesuai lokasi"],
              ].map(([k, v], i) => (
                <motion.tr
                  key={i}
                  className={`border-t ${i === 0 ? "border-transparent" : "border-border"}`}
                  variants={fadeUp}
                >
                  <td className="px-5 py-4 font-medium text-text">{k}</td>
                  <td className="px-5 py-4 text-text">{v}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <motion.p className="mt-3 text-xs text-muted" variants={fade}>
          *Data teknis dapat disesuaikan dengan kondisi proyek.
        </motion.p>
      </div>
    </motion.section>
  );
}

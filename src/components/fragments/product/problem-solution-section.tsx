import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { motion } from "framer-motion";
import React from "react";

export default function ProblemSolutionSection() {
  return (
    <motion.section
      id="problem-solution"
      className="mx-auto px-4 sm:px-6 py-14 lg:py-16 w-full bg-section flex justify-center"
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={stagger}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl">
        <motion.div className="self-center" variants={fadeUp}>
          <h2 className="text-2xl font-semibold">
            Sampah Menumpuk, Energi Bersih Dibutuhkan
          </h2>
          <p className="mt-3 text-muted">
            Indonesia menghasilkan lebih dari{" "}
            <strong>56 juta ton sampah setiap tahun</strong>, dan
            <strong> 61% di antaranya tidak terkelola dengan baik</strong>. Di
            saat yang sama, kebutuhan energi alternatif terus meningkat untuk
            mengurangi ketergantungan pada batubara.
          </p>
        </motion.div>
        <motion.div className="h-full" variants={fadeUp}>
          <div className="h-full rounded-3xl p-5 ring-1 flex flex-col border-border bg-card">
            <h3 className="text-lg font-medium">Solusi Aureloop</h3>
            <p>
              Aureloop adalah sistem pengolahan sampah terpadu yang menghasilkan
              <strong> Refuse-Derived Fuel (RDF)</strong> dalam bentuk briket
              berdaya tinggi. Dengan pendekatan <em>zero waste to landfill</em>,
              Aureloop menekan sampah yang berakhir di TPA dan area terbuka,
              sekaligus menghadirkan sumber energi bersih untuk industri maupun
              pemerintah.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

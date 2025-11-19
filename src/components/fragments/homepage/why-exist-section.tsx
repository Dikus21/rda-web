"use client";

import { motion } from "framer-motion";
import { stagger } from "@/lib/motion";
import { Recycle, Zap, Factory, Award } from "lucide-react";
import SectionHeading from "@/components/elements/section-heading";
import StatCard from "@/components/elements/stat-card";

export default function WhyExist() {
  return (
    <section id="why" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why We Exist"
          subtitle="Perubahan iklim, penumpukan sampah, dan meningkatnya kebutuhan energi menjadi tantangan besar di era modern. Tanpa tindakan inovatif, masalah ini mengancam lingkungan, kesehatan, dan masa depan kita."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          <StatCard
            icon={<Recycle size={18} />}
            title="Penumpukan Sampah"
            desc="Tempat pembuangan akhir semakin penuh lebih cepat daripada kemampuan untuk mengelolanya."
          />
          <StatCard
            icon={<Zap size={18} />}
            title="Kebutuhan Energi"
            desc="Permintaan akan sumber energi bersih dan terbarukan terus meningkat setiap tahun."
          />
          <StatCard
            icon={<Factory size={18} />}
            title="Dampak Lingkungan"
            desc="Polusi merusak udara, air, dan ekosistem yang menjadi penopang kehidupan."
          />
          <StatCard
            icon={<Award size={18} />}
            title="Potensi yang Hilang"
            desc="Bahan dan energi bernilai tinggi sering terbuang tanpa dimanfaatkan secara optimal."
          />
        </motion.div>
      </div>
    </section>
  );
}

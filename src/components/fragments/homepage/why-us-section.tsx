"use client";

import { motion } from "framer-motion";
import { stagger } from "@/lib/motion";
import { Leaf, Award, Shield } from "lucide-react";
import SectionHeading from "@/components/elements/section-heading";
import StatCard from "@/components/elements/stat-card";

export default function WhyUs() {
  return (
    <section id="choose" className="bg-section py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Why Choose Us" />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          <StatCard
            icon={<Leaf size={18} />}
            title="Ramah Lingkungan"
            desc="Teknologi kami mengurangi emisi dan memaksimalkan daur ulang."
          />
          <StatCard
            icon={<Award size={18} />}
            title="Inovasi Teruji"
            desc="Sistem kami terus dikembangkan mengikuti perkembangan teknologi pengolahan limbah."
          />
          <StatCard
            icon={<Shield size={18} />}
            title="Kinerja Andal"
            desc="Mesin kami dirancang untuk bekerja stabil dalam jangka panjang."
          />
        </motion.div>
      </div>
    </section>
  );
}

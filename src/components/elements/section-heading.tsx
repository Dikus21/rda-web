import { fadeUp } from "@/lib/motion";
import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <motion.h2 variants={fadeUp} className="text-3xl font-semibold tracking-tight text-text md:text-4xl">
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="mt-3 text-base text-muted md:text-lg">
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

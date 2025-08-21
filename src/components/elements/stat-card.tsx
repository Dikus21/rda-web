import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import type { ReactNode } from "react";

export default function StatCard({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bg text-secondary">{icon}</div>
        <h3 className="text-lg font-semibold text-text">{title}</h3>
      </div>
      <p className="mt-3 leading-relaxed text-muted">{desc}</p>
    </motion.div>
  );
}

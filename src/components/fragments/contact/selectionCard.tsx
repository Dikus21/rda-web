"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

type Props = {
  icon: React.ReactNode;
  title: string;
  line1: string;
  line2?: string;
  href?: string; // <- jika tidak ada, kartu tidak interaktif
  className?: string;
};

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const cardVariants: Variants = {
  rest: { y: 0, scale: 1, boxShadow: "0 2px 6px rgba(2,6,23,0.05)" },
  hover: { y: -6, scale: 1.01, boxShadow: "0 10px 24px rgba(2,6,23,0.10)" },
  tap: { y: -2, scale: 0.997, boxShadow: "0 6px 16px rgba(2,6,23,0.08)" },
};

const iconVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.98 },
};

export default function SelectionCard({
  icon,
  title,
  line1,
  line2,
  href,
  className,
}: Props) {
  const reduce = useReducedMotion();

  // kelas dasar kartu (dipakai di kedua mode)
  const baseClass =
    "block h-full rounded-2xl border border-border bg-card p-5 py-8 shadow-xs " +
    "flex flex-col items-center text-center gap-3 " +
    "transition-shadow";

  const content = (
    <>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
        <div className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-current">
          {icon}
        </div>
      </div>

      <div className="leading-tight">
        <div className="mb-1 text-xl font-bold text-text">{title}</div>
        <div className="mb-1 text-muted">{line1}</div>
        {line2 ? <div className="text-sm text-muted">{line2}</div> : null}
      </div>
    </>
  );

  // === MODE INTERAKTIF (ada href) ===
  if (href) {
    const motionProps = reduce
      ? { initial: "rest", animate: "rest" }
      : {
          initial: "rest",
          animate: "rest",
          whileHover: "hover",
          whileFocus: "hover",
          whileTap: "tap",
        };

    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={[
          baseClass,
          "focus:outline-none focus:ring-2 focus:ring-primary focus:rounded-2xl will-change-transform",
          "hover:shadow-lg",
          className || "",
        ].join(" ")}
        variants={cardVariants}
        transition={{ duration: 0.35, ease: EASE_OUT }}
        {...motionProps}
      >
        <motion.div
          variants={iconVariants}
          transition={{
            type: "spring",
            stiffness: 340,
            damping: 26,
            mass: 0.6,
          }}
          className="contents"
        />
        {content}
      </motion.a>
    );
  }

  // === MODE STATIS (tanpa href) ===
  return (
    <div className={[baseClass, className || ""].join(" ")}>{content}</div>
  );
}

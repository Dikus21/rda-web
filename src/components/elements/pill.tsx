import type { ReactNode } from "react";

export default function Pill({
  children,
  tone = "primary",
}: {
  children: ReactNode;
  tone?: "primary" | "accent1" | "accent2";
}) {
  const toneClass =
    tone === "accent1" ? "bg-accent1"
    : tone === "accent2" ? "bg-accent2"
    : "bg-primary";

  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-white shadow-sm ${toneClass}`}>
      {children}
    </span>
  );
}

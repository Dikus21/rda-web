"use client";

import Link from "next/link";
import LogoImg from "../elements/logo-img";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:px-6 lg:flex-row lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-xl border border-border bg-card">
            <LogoImg size={28} />
          </div>
          <span>
            © {new Date().getFullYear()} PT Rimbun Daur Alam. All rights
            reserved.
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#privacy" className="hover:opacity-90">
            Kebijakan Privasi
          </Link>
          <Link href="#terms" className="hover:opacity-90">
            Syarat & Ketentuan
          </Link>
        </div>
      </div>
    </footer>
  );
}

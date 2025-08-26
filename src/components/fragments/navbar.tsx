"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import LogoImg from "../elements/logo-img";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // render nothing (or a neutral placeholder) until client knows the theme
    return null;
  }

  const isDark = resolvedTheme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded-xl border border-border bg-text/10 px-3 py-2 text-sm font-semibold text-text"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}{" "}
      {isDark ? "Light" : "Dark"}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <Link
      href={href}
      className="text-sm font-medium text-text transition-colors hover:opacity-90"
    >
      {children}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-border bg-card">
              <LogoImg size={28} />
            </div>
            <span className="sr-only">PT Rimbun Daur Alam</span>
            <span className="hidden font-semibold tracking-tight text-text sm:block">
              PT Rimbun Daur Alam
            </span>
          </Link>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/product">Product</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-accent1 px-4 py-2 text-sm font-semibold text-white"
          >
            <FileText size={16} /> Get a Quote
          </Link>
          <ThemeToggle />
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border md:hidden">
          <div className="flex flex-col gap-3 px-4 py-3 text-text">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/product">Product</Link>
            <Link href="/contact">Contact</Link>
            <Link
              href="/contact"
              className="mt-2 inline-flex w-max items-center gap-2 rounded-xl bg-accent1 px-4 py-2 text-sm font-semibold text-white"
            >
              <FileText size={16} /> Get a Quote
            </Link>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}

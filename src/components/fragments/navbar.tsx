"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import LogoImg from "../elements/logo-img";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm font-semibold text-text transition hover:bg-text/10 active:scale-[0.98]"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}

type NavItem = { href: string; label: string };

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems: NavItem[] = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/product", label: "Product" },
      { href: "/contact", label: "Contact" },
    ],
    [],
  );

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const NavLink = ({ href, label }: NavItem) => {
    const active = isActive(href);
    return (
      <Link
        href={href}
        className={[
          "rounded-lg px-2 py-1 text-sm font-medium transition",
          "hover:bg-text/10 hover:opacity-100",
          active ? "bg-text/10 text-text" : "text-text/80",
        ].join(" ")}
        aria-current={active ? "page" : undefined}
      >
        {label}
      </Link>
    );
  };

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur",
        scrolled ? "shadow-sm" : "",
      ].join(" ")}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-border bg-card">
            <LogoImg size={28} />
          </div>
          <span className="sr-only">PT Rimbun Daur Alam</span>
          <span className="hidden font-semibold tracking-tight text-text sm:block">
            PT Rimbun Daur Alam
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-accent1 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-95 active:scale-[0.98]"
          >
            <FileText size={16} /> Get a Quote
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text transition hover:bg-text/10 active:scale-[0.98] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile overlay + panel */}
      {open && (
        <>
          {/* overlay: click outside to close */}
          <button
            aria-label="Close menu overlay"
            className="fixed inset-0 z-40 bg-black/30 md:hidden"
            onClick={() => setOpen(false)}
          />

          <div
            id="mobile-menu"
            className="relative z-50 border-t border-border bg-bg/95 backdrop-blur md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 text-text">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-xl px-3 py-2 text-sm font-semibold transition",
                    isActive(item.href) ? "bg-text/10" : "hover:bg-text/10",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-2 flex items-center gap-2">
                <Link
                  href="/contact"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent1 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-95 active:scale-[0.98]"
                >
                  <FileText size={16} /> Get a Quote
                </Link>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

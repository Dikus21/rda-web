import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  Boxes,
  Droplets,
  Flame,
  Zap,
  LayoutPanelTop,
  Wrench,
  TrendingUp,
  Leaf,
  Recycle,
  Gauge,
} from "lucide-react";

/**
 * Design refresh with Tailwind v4 inline theme mapping + ICONS
 * Uses classes like bg-bg, text-text, text-muted, bg-card, bg-section, ring-border, border-border, bg-primary, etc.
 * No client-side env usage; env is read server-side only.
 */

export const metadata: Metadata = {
  title: "Aureloop — RDF Briket System | PT Rimbun Daur Alam",
  description:
    "Sistem pengolahan sampah terpadu menjadi RDF briket: alur kerja, fitur, spesifikasi ringkas, dan CTA untuk katalog & penawaran harga.",
  openGraph: {
    title: "Aureloop — RDF Briket System | PT Rimbun Daur Alam",
    description:
      "Ubah timbunan sampah menjadi bahan bakar alternatif ramah lingkungan dengan nilai kalor kompetitif.",
    type: "website",
  },
};

/** Helpers (isomorphic, no process.env here) */
function digitsOnly(input: string): string {
  return (input || "").replace(/\D+/g, "");
}

function buildWaLink(phone?: string): string | null {
  if (!phone) return null;
  const sanitized = digitsOnly(phone);
  if (!sanitized) return null;
  const text =
    "Halo PT Rimbun Daur Alam, saya tertarik dengan Aureloop — mohon kirimkan katalog & penawaran.";
  return `https://wa.me/${sanitized}?text=${encodeURIComponent(text)}`;
}

function buildMailtoLink(email?: string): string | null {
  if (!email) return null;
  const subject = "Permintaan Katalog & Penawaran — Aureloop";
  const body =
    "Halo Tim RDA,%0D%0A%0D%0ASaya tertarik dengan Aureloop. Mohon info katalog, spesifikasi lengkap, dan penawaran harga.%0D%0A%0D%0ATerima kasih.";
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Sanity tests (non-throwing). Ensures helpers behave as expected. */
function runSanityTests() {
  console.assert(
    digitsOnly("+62 812-34 56") === "628123456",
    "digitsOnly should strip non-digits"
  );
  console.assert(digitsOnly("") === "", "digitsOnly('') should be empty");
  const wa = buildWaLink("62-812 3456");
  console.assert(
    wa?.startsWith("https://wa.me/628123456"),
    "WA link should use sanitized number"
  );
  console.assert(wa?.includes("text="), "WA link should include text param");
  const ml = buildMailtoLink("sales@example.com");
  console.assert(
    ml?.startsWith("mailto:sales@example.com"),
    "Mailto should use provided email"
  );
  console.assert(
    ml?.includes("subject=") && ml?.includes("body="),
    "Mailto should include subject & body"
  );
  // extra tests
  console.assert(
    buildWaLink("") === null,
    "buildWaLink should return null for empty string"
  );
  console.assert(
    buildMailtoLink("") === null,
    "buildMailtoLink should return null for empty string"
  );
}
runSanityTests();

/** Decorative background for hero (elegant, subtle) */
function HeroBeams() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute -top-32 -left-20 h-[480px] w-[800px] blur-3xl"
        style={{
          background:
            "radial-gradient(40% 40% at 50% 50%, color-mix(in srgb, var(--color-primary), transparent 85%) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute -top-24 right-[-10%] h-[420px] w-[700px] blur-3xl"
        style={{
          background:
            "radial-gradient(45% 45% at 50% 50%, color-mix(in srgb, var(--color-accent1), transparent 90%) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-[-20%] left-1/2 h-[520px] w-[900px] -translate-x-1/2 blur-3xl"
        style={{
          background:
            "radial-gradient(35% 35% at 50% 50%, color-mix(in srgb, var(--color-text), transparent 94%) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div>
      {eyebrow && (
        <span className="inline-block rounded-full px-3 py-1 text-xs tracking-wide ring-1 text-muted ring-border">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-2xl font-semibold">{title}</h2>
      {desc && <p className="mt-2 text-sm text-muted">{desc}</p>}
    </div>
  );
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-10 w-10 rounded-2xl grid place-items-center ring-1 ring-border bg-card shadow-sm">
      <div className="text-primary">{children}</div>
    </div>
  );
}

export default function ProductPage() {
  // Server-only env usage
  const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER;
  const EMAIL_SALES = process.env.NEXT_PUBLIC_EMAIL_SALES;

  const waLink = buildWaLink(WA_NUMBER);
  const mailtoLink = buildMailtoLink(EMAIL_SALES);

  return (
    <main className="min-h-dvh bg-bg text-text">
      {/* JSON-LD Product (basic) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Aureloop — RDF Briket System",
            brand: { "@type": "Organization", name: "PT Rimbun Daur Alam" },
            category: "RDF briquette system",
            description:
              "Sistem pengolahan sampah terpadu menjadi RDF briket, dengan alur pemilahan, pencacahan, pengeringan, hingga pembentukan briket.",
          }),
        }}
      />

      {/* HERO */}
      <section
        id="hero"
        className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 lg:py-24"
      >
        <HeroBeams />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block rounded-full px-3 py-1 text-sm ring-1 text-muted ring-border">
              Produk
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Aureloop — RDF Briket System
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted">
              Ubah timbunan sampah menjadi bahan bakar alternatif ramah
              lingkungan dengan nilai kalor setara batubara.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {waLink && (
                <a
                  href={waLink}
                  data-testid="cta-wa"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium shadow-sm transition active:scale-[.98] bg-primary text-white"
                >
                  Dapatkan Katalog & Penawaran Harga
                </a>
              )}
              {mailtoLink && (
                <a
                  href={mailtoLink}
                  data-testid="cta-email"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium ring-1 transition ring-border text-text"
                >
                  Email Sales
                </a>
              )}
            </div>
            {/* Trust band / quick stats with icons */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { k: "Nilai Kalor", v: "±3.973 kkal/kg", Icon: Flame },
                { k: "Reduksi TPA", v: "hingga 80%", Icon: Recycle },
                { k: "Kapasitas", v: "20–200 t/hari", Icon: Gauge },
              ].map((it, i) => (
                <div
                  key={i}
                  className="rounded-2xl px-3 py-3 ring-1 ring-border"
                >
                  <div className="flex items-center justify-center gap-2">
                    <it.Icon className="h-4 w-4 text-primary" aria-hidden />
                    <span className="text-xs text-muted">{it.k}</span>
                  </div>
                  <div className="mt-1 text-sm font-medium">{it.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual with elegant frame */}
          <div className="relative">
            <div className="group relative overflow-hidden rounded-[2rem] border shadow border-border bg-card">
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 40%, color-mix(in srgb, var(--color-primary), transparent 88%) 0%, transparent 70%)",
                }}
              />
              <Image
                src="/images/aureloop-hero-placeholder.jpg"
                alt="Render 3D / ilustrasi sistem Aureloop RDF Briket"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <figcaption className="mt-2 text-xs text-muted">
              Ilustrasi sistem Aureloop (placeholder). Ganti dengan render 3D /
              foto workshop.
            </figcaption>
          </div>
        </div>
      </section>

      {/* PROBLEM → SOLUTION */}
      <section
        id="problem-solution"
        className="mx-auto max-w-6xl px-4 sm:px-6 py-14 lg:py-16 bg-section"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <SectionHeader
              eyebrow="Tantangan"
              title="Sampah Menumpuk, Energi Bersih Dibutuhkan"
              desc="Indonesia menghasilkan >56 juta ton sampah/tahun; 61% belum terkelola dengan baik. Di saat bersamaan, transisi energi bersih menuntut alternatif batubara."
            />
            <div className="mt-6 rounded-3xl p-5 ring-1 ring-border bg-card">
              <div className="flex items-start gap-3">
                <IconBadge>
                  <Leaf className="h-5 w-5" aria-hidden />
                </IconBadge>
                <div>
                  <h3 className="text-lg font-medium">Solusi Aureloop</h3>
                  <p className="mt-2 text-muted">
                    Sistem pengolahan sampah terpadu yang menghasilkan{" "}
                    <strong>RDF briket</strong> untuk kebutuhan energi industri
                    dan pemerintah daerah.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Sticky mini-specs to add substance */}
          <aside className="top-24 lg:sticky">
            <div className="rounded-3xl p-6 ring-1 ring-border shadow-sm bg-card">
              <h4 className="text-base font-medium">Ringkasan Cepat</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li className="flex items-center gap-2">
                  <Flame className="h-4 w-4 text-primary" aria-hidden /> Nilai
                  kalor: ±3.973 kkal/kg
                </li>
                <li className="flex items-center gap-2">
                  <Recycle className="h-4 w-4 text-primary" aria-hidden />{" "}
                  Reduksi TPA: hingga 60–80%
                </li>
                <li className="flex items-center gap-2">
                  <Boxes className="h-4 w-4 text-primary" aria-hidden />{" "}
                  Modular: 20–200 ton/hari
                </li>
              </ul>
              <div
                className="mt-4 h-px w-full"
                style={{
                  background:
                    "linear-gradient(to right, transparent, var(--color-border), transparent)",
                }}
              />
              <div className="mt-4 flex gap-2">
                {waLink && (
                  <a
                    href={waLink}
                    className="flex-1 rounded-xl px-4 py-2 text-sm font-medium shadow-sm bg-primary text-white"
                  >
                    WhatsApp
                  </a>
                )}
                {mailtoLink && (
                  <a
                    href={mailtoLink}
                    className="flex-1 rounded-xl px-4 py-2 text-sm font-medium ring-1 ring-border text-text"
                  >
                    Email Sales
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* WORKFLOW */}
      <section
        id="workflow"
        className="mx-auto max-w-6xl px-4 sm:px-6 py-14 lg:py-16"
      >
        <SectionHeader
          eyebrow="Alur"
          title="Bagaimana Aureloop Bekerja"
          desc="Tiga tahap utama untuk menghasilkan RDF briket berkualitas."
        />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Pemilahan & Pencacahan",
              desc: "Sampah dipilah dan dicacah menjadi ukuran seragam.",
              badge: "1",
              Icon: Boxes,
            },
            {
              title: "Pengeringan & Pengolahan",
              desc: "Kadar air dikurangi agar siap dibakar.",
              badge: "2",
              Icon: Droplets,
            },
            {
              title: "Briket RDF",
              desc: "Nilai kalor ±3.973 kkal/kg untuk aplikasi industri.",
              badge: "3",
              Icon: Flame,
            },
          ].map((s, i) => (
            <div
              key={i}
              className="relative rounded-3xl p-6 ring-1 ring-border shadow-sm bg-card"
            >
              <div className="absolute -top-3 left-4 h-6 w-6 rounded-full text-center text-xs font-semibold leading-6 bg-primary text-white">
                {s.badge}
              </div>
              <div className="flex items-start gap-3">
                <IconBadge>
                  <s.Icon className="h-5 w-5" aria-hidden />
                </IconBadge>
                <div>
                  <h3 className="text-lg font-medium">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="mx-auto max-w-6xl px-4 sm:px-6 py-14 lg:py-16 bg-section"
      >
        <SectionHeader
          eyebrow="Keunggulan"
          title="Dirancang untuk Efisiensi & Keberlanjutan"
        />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Kapasitas Fleksibel",
              desc: "Modular, menyesuaikan 20–200 ton/hari.",
              Icon: Boxes,
            },
            {
              title: "Energi Kompetitif",
              desc: "Nilai kalor RDF 3.000–5.000 kkal/kg, mendekati batubara.",
              Icon: Zap,
            },
            {
              title: "Ramah Lingkungan",
              desc: "Mengurangi sampah TPA hingga 60–80%.",
              Icon: Leaf,
            },
            {
              title: "Desain Modular",
              desc: "Mudah diintegrasikan di berbagai lokasi.",
              Icon: LayoutPanelTop,
            },
            {
              title: "Mudah Perawatan",
              desc: "Komponen standar, akses cepat.",
              Icon: Wrench,
            },
            {
              title: "Skalabel",
              desc: "Dapat ditingkatkan sesuai kebutuhan wilayah.",
              Icon: TrendingUp,
            },
          ].map((f, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 ring-1 ring-border shadow-sm transition hover:shadow bg-card"
            >
              <div className="flex items-start gap-3">
                <IconBadge>
                  <f.Icon className="h-5 w-5" aria-hidden />
                </IconBadge>
                <div>
                  <h3 className="text-lg font-medium">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPECS TABLE + NOTE */}
      <section
        id="specs"
        className="mx-auto max-w-6xl px-4 sm:px-6 py-14 lg:py-16"
      >
        <SectionHeader eyebrow="Spesifikasi" title="Spesifikasi Ringkas" />
        <div className="mt-6 overflow-hidden rounded-3xl ring-1 ring-border bg-card">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["Kapasitas Input", "20–200 ton/hari (modular)"],
                ["Output RDF Briket", "30–40% dari sampah masuk"],
                ["Nilai Kalor", "±3.973 kkal/kg (kisaran 3.000–5.000)"],
                ["Kadar Air Maksimal", "< 20%"],
                ["Konsumsi Daya", "disesuaikan kebutuhan"],
                ["Luas Lahan", "custom sesuai lokasi"],
              ].map(([k, v], i) => (
                <tr
                  key={i}
                  className={`border-t ${i === 0 ? "border-transparent" : "border-border"}`}
                >
                  <td className="px-5 py-4 font-medium">{k}</td>
                  <td className="px-5 py-4 text-muted">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted">
          *Data teknis dapat disesuaikan dengan kondisi proyek.
        </p>
      </section>

      {/* FAQ (adds substance + SEO) */}
      <section
        id="faq"
        className="mx-auto max-w-6xl px-4 sm:px-6 py-14 lg:py-16 bg-section"
      >
        <SectionHeader eyebrow="FAQ" title="Pertanyaan yang Sering Diajukan" />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "Apakah nilai kalor RDF stabil?",
              a: "Nilai kalor dipengaruhi komposisi input & proses pengeringan. Kami menjaga konsistensi melalui standar operasi & kontrol kadar air.",
              Icon: Flame,
            },
            {
              q: "Berapa kebutuhan daya & luas lahan?",
              a: "Bersifat site-specific. Kami lakukan asesmen untuk menyesuaikan konfigurasi modul dengan kondisi lokasi dan target kapasitas.",
              Icon: Gauge,
            },
            {
              q: "Apakah bisa integrasi dengan sistem yang sudah ada?",
              a: "Ya. Desain modular memudahkan integrasi ke rantai pengolahan eksisting, termasuk conveyor, shredder, atau unit pengering.",
              Icon: LayoutPanelTop,
            },
            {
              q: "Bagaimana dukungan purna jual?",
              a: "Dukungan training operator, jadwal perawatan, dan ketersediaan suku cadang standar industri.",
              Icon: Wrench,
            },
          ].map((f, i) => (
            <div key={i} className="rounded-3xl p-6 ring-1 ring-border bg-card">
              <div className="flex items-start gap-3">
                <IconBadge>
                  <f.Icon className="h-5 w-5" aria-hidden />
                </IconBadge>
                <div>
                  <h3 className="text-base font-medium">{f.q}</h3>
                  <p className="mt-2 text-sm text-muted">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section
        id="cta"
        className="mx-auto max-w-6xl px-4 sm:px-6 py-16 lg:py-20"
      >
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-10 ring-1 ring-border text-center shadow bg-card">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 60% at 50% -10%, color-mix(in srgb, var(--color-primary), transparent 88%) 0%, transparent 70%)",
            }}
          />
          <h2 className="relative text-2xl font-semibold">
            Siap Ubah Sampah Menjadi Energi?
          </h2>
          <p className="relative mt-3 text-muted">
            Dengan Aureloop, Anda bisa mengurangi sampah, menghasilkan energi
            bersih, dan membangun masa depan yang berkelanjutan.
          </p>
          <div className="relative mt-6 flex flex-wrap items-center justify-center gap-3">
            {waLink && (
              <a
                href={waLink}
                data-testid="cta-wa-bottom"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium shadow-sm transition active:scale-[.98] bg-primary text-white"
              >
                Hubungi via WhatsApp
              </a>
            )}
            {mailtoLink && (
              <a
                href={mailtoLink}
                data-testid="cta-email-bottom"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium ring-1 transition ring-border text-text"
              >
                Email Sales untuk Penawaran
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import React from "react";
import {
  ArrowRight,
  Award,
  Leaf,
  Lightbulb,
  Link,
  MessageSquare,
  PencilRuler,
  Rocket,
  Search,
  Star,
  Users,
  Zap,
} from "lucide-react";

// ---- Reusable UI ----
const Pill: React.FC<{
  children: React.ReactNode;
  tone?: "accent1" | "accent2" | "primary";
}> = ({ children, tone = "primary" }) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium shadow-sm text-white bg-${tone}`}
  >
    {children}
  </span>
);

const ORG = "PT Rimbun Daur Alam";
const ADDRESS =
  "Jalan Raya Perancis, Pergudangan 9 No. 9 AE, Dadap, Kab. Tangerang";

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg text-text">
      {/* Hero */}
      <section className="relative">
        <div className="relative flex min-h-[46vh] items-center">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1920&auto=format&fit=crop"
            alt="Hero green energy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 lg:px-8">
            <Pill tone="accent1">Tentang Kami</Pill>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Membawa Dampak Nyata Melalui Teknologi Ramah Lingkungan
            </h1>
            <p className="mx-auto mt-3 max-w-3xl text-white/90">
              Kenali tim, nilai, dan cara kerja kami dalam membangun solusi
              pengelolaan limbah dan energi terbarukan.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-section py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-2">
          <div>
            <Pill tone="primary">Our Story</Pill>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Bagaimana kami memulai dan apa yang kami perjuangkan
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              PT Rimbun Daur Alam lahir dari kepedulian terhadap lingkungan dan
              kebutuhan energi yang kian meningkat. Sejak awal kami percaya
              bahwa solusi terbaik hadir dari kolaborasi dan inovasi untuk
              mewujudkan sistem yang lebih efisien sekaligus menghasilkan energi
              yang lebih bersih.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Hari ini, kami terus bertumbuh dengan kemitraan yang transparan
              dan berkelanjutan, membantu pemerintah, industri, dan masyarakat
              menciptakan bumi yang lebih bersih dan lestari.
            </p>

            {/* Mini quote card */}
            <div className="mt-6 max-w-md rounded-2xl border p-4 border-border bg-card">
              <p className="text-sm text-text">
                “Teknologi ramah lingkungan untuk masa depan, membangun sistem
                yang <span className="font-semibold">bersih</span>,{" "}
                <span className="font-semibold">efisien</span>, dan{" "}
                <span className="font-semibold">berkelanjutan</span>.”
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1600&auto=format&fit=crop"
              alt="Tim bekerja pada solusi teknologi hijau"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <Pill tone="accent1">Our Purpose</Pill>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl text-text">
              Visi & Misi
            </h2>
            <p className="mt-3 text-base md:text-lg max-w-3xl mx-auto text-muted">
              Kami berpegang pada prinsip inti yang menuntun langkah kami dalam
              menghadirkan solusi berkelanjutan. Visi dan misi kami
              merefleksikan komitmen terhadap lingkungan, inovasi, dan
              masyarakat.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Mission */}
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent1/15 text-accent1">
                <Leaf size={20} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-text">Misi Kami</h3>
              <p className="mb-4 text-base leading-relaxed text-muted">
                PT Rimbun Daur Alam berkomitmen untuk menghadirkan solusi ramah
                lingkungan yang melampaui ekspektasi mitra kami dengan inovasi,
                integritas, dan keberlanjutan.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-accent1">✔</span>
                  <span className="text-muted">
                    Mengembangkan teknologi yang efisien dan berkelanjutan untuk
                    pengelolaan limbah.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent1">✔</span>
                  <span className="text-muted">
                    Membangun budaya inovasi, perbaikan berkelanjutan, dan
                    pertumbuhan profesional.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent1">✔</span>
                  <span className="text-muted">
                    Menjalin hubungan transparan dengan pemerintah, industri,
                    dan komunitas.
                  </span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Award size={20} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-text">Visi Kami</h3>
              <p className="mb-4 text-base leading-relaxed text-muted">
                Visi kami adalah menjadi pelopor dalam inovasi teknologi ramah
                lingkungan yang dipercaya oleh mitra di berbagai sektor.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✔</span>
                  <span className="text-muted">
                    Menetapkan standar baru dalam kualitas, keselamatan, dan
                    kepuasan mitra.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✔</span>
                  <span className="text-muted">
                    Menggagas praktik berkelanjutan yang meminimalkan dampak
                    lingkungan sekaligus meningkatkan efisiensi.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✔</span>
                  <span className="text-muted">
                    Menciptakan perubahan positif di masyarakat melalui
                    kolaborasi dan praktik bisnis yang bertanggung jawab.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-section py-14 lg:py-16">
        <div
          aria-labelledby="approach-title"
          className="relative isolate mx-auto max-w-6xl rounded-3xl bg-card/60 px-6 py-16 shadow-[inset_0_1px_0_rgba(255,255,255,.5)] ring-1 ring-border md:px-10"
        >
          {/* soft background accent (brand gradient) */}
          {/* <div
          aria-hidden
          className="pointer-events-none absolute -top-10 left-1/2 h-56 w-[15rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/20 via-accent1/20 to-secondary/20 blur-3xl"
        /> */}

          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30">
              <Zap className="h-5 w-5" aria-hidden />
            </span>
            <h2
              id="approach-title"
              className="mt-4 text-2xl font-bold tracking-tight text-text md:text-3xl"
            >
              Our Approach
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted md:text-base">
              Keberhasilan solusi berkelanjutan bertumpu pada kolaborasi,
              inovasi, dan perhatian pada detail. Kami menggabungkan rekayasa
              yang presisi dengan teknologi mutakhir untuk merancang sistem yang
              efisien, aman, dan tahan uji waktu.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mx-auto mt-12 max-w-5xl">
            {/* horizontal connector (md+) */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-[6%] right-[6%] top-[1.75rem] hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block"
            />

            <ol role="list" className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {/* Step 1 */}
              <li className="text-center">
                <div className="group inline-flex flex-col items-center">
                  <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20 transition-transform group-hover:scale-105">
                    <Search className="h-6 w-6 text-primary" aria-hidden />
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-text">
                    Discover
                  </h3>
                  <p className="mt-1 max-w-xs text-sm text-muted">
                    Studi kebutuhan & audit limbah di lapangan.
                  </p>
                </div>
              </li>

              {/* Step 2 */}
              <li className="text-center">
                <div className="group inline-flex flex-col items-center">
                  <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent1/10 ring-1 ring-accent1/20 transition-transform group-hover:scale-105">
                    <PencilRuler className="h-6 w-6 text-accent1" aria-hidden />
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-text">
                    Design
                  </h3>
                  <p className="mt-1 max-w-xs text-sm text-muted">
                    Perancangan sistem modular & terukur.
                  </p>
                </div>
              </li>

              {/* Step 3 */}
              <li className="text-center">
                <div className="group inline-flex flex-col items-center">
                  <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 ring-1 ring-secondary/20 transition-transform group-hover:scale-105">
                    <Rocket className="h-6 w-6 text-secondary" aria-hidden />
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-text">
                    Deliver
                  </h3>
                  <p className="mt-1 max-w-xs text-sm text-muted">
                    Implementasi, pelatihan, & continuous improvement.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-accent1 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent1"
            >
              Partner With Us{" "}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* Our Values (mosaic style) */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <Pill tone="primary">Our Values</Pill>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl text-text">
              The values that drive everything we do
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-muted">
              Nilai inti ini memandu cara kami membuat keputusan, berkolaborasi,
              dan menghadirkan dampak yang bertahan lama.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {/* Left mosaic (2 cols) */}
            <div className="grid grid-cols-1 gap-5 md:col-span-2 md:grid-cols-2">
              {/* Innovation – big card spanning 2 cols */}
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:col-span-2">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Lightbulb size={18} />
                  </div>
                  <h3 className="text-xl font-semibold text-text">
                    Innovation
                  </h3>
                </div>
                <p className="text-muted">
                  Kami selalu mencari pendekatan baru—menggabungkan riset,
                  rekayasa, dan umpan balik klien untuk menghasilkan solusi
                  lebih cerdas dan efisien.
                </p>
              </div>

              {/* Excellence */}
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent1/15 text-accent1">
                    <Star size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-text">
                    Excellence
                  </h3>
                </div>
                <p className="text-muted">
                  Standar kualitas tinggi, keselamatan, dan keandalan
                  operasional.
                </p>
              </div>

              {/* Communication */}
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent2/15 text-accent2">
                    <MessageSquare size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-text">
                    Communication
                  </h3>
                </div>
                <p className="text-muted">
                  Transparansi dan respons cepat dalam setiap kolaborasi.
                </p>
              </div>

              {/* Teamwork */}
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:col-span-2">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/15 text-secondary">
                    <Users size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-text">Teamwork</h3>
                </div>
                <p className="text-muted">
                  Kolaborasi erat dengan klien, pemasok, dan komunitas untuk
                  mencapai hasil terbaik.
                </p>
              </div>
            </div>

            {/* Right rail CTA */}
            <aside className="rounded-3xl border border-border bg-card p-6 md:row-span-2">
              <h3 className="text-2xl font-semibold text-text">
                Siap berkolaborasi untuk solusi berkelanjutan?
              </h3>
              <p className="mt-2 text-muted">
                Hubungi tim kami untuk konsultasi sistem pengolahan sampah
                terpadu atau solusi energi terbarukan.
              </p>
              <a
                href="/careers"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-secondary shadow ring-1 ring-border"
              >
                Contact
                <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-white">
                  ↗
                </span>
              </a>
              <div className="mt-6 space-y-3 text-sm">
                <div>
                  <div className="font-medium text-text">Email address</div>
                  <a
                    href="mailto:hr@rda.co.id"
                    className="underline-offset-2 hover:underline text-text"
                  >
                    hr@rda.co.id
                  </a>
                </div>
                <div>
                  <div className="font-medium text-text">Phone number</div>
                  <a
                    href="tel:+622112345678"
                    className="underline-offset-2 hover:underline text-text"
                  >
                    (+62) 21 1234 5678
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Alamat & Maps */}
      <section id="maps" className="py-14 lg:py-16 bg-section">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 px-4 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-text">
              Workshop & Alamat
            </h2>
            <p className="mt-3 text-muted">{ORG}</p>
            <p className="text-muted">{ADDRESS}</p>
            <div className="mt-5 overflow-hidden rounded-xl border border-border">
              <iframe
                title="Lokasi PT Rimbun Daur Alam"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${ORG} ${ADDRESS}`
                )}&output=embed`}
                className="h-[320px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1600&auto=format&fit=crop"
                alt="Workshop"
                className="h-auto w-full rounded-xl"
              />
              <p className="mt-2 text-center text-sm text-muted">
                Tampak depan workshop
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;

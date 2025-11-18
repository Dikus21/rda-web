"use client";
import Pill from "@/components/elements/pill";
import { ArrowRight, PencilRuler, Rocket, Search } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion"; // ⬅️ sesuaikan path

export default function VisionMisionSection() {
  return (
    <section className="py-14 lg:py-16 flex flex-col gap-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="mb-8 text-center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <motion.div variants={fadeUp}>
            <Pill tone="primary">Tujuan Kami</Pill>
          </motion.div>

          <motion.h2
            className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl text-text"
            variants={fadeUp}
          >
            Visi & Misi
          </motion.h2>

          <motion.p
            className="mt-3 text-base md:text-lg max-w-3xl mx-auto text-muted"
            variants={fadeUp}
          >
            Kami berpegang pada prinsip inti yang menuntun langkah kami dalam
            menghadirkan solusi berkelanjutan. Visi dan misi kami merefleksikan
            komitmen terhadap lingkungan, inovasi, dan masyarakat.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Mission */}
          <motion.div
            className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-8 shadow-sm"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            <div className="flex flex-row items-center gap-2">
              <svg
                className="w-10 h-10 p-1.5 rounded-full bg-accent1/15 fill-accent1"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path
                  transform="translate(-164 -4599)"
                  d="M176,4609 C176,4610.105 175.105,4611 174,4611 C172.895,4611 172,4610.105 172,4609 C172,4607.895 172.895,4607 174,4607 C175.105,4607 176,4607.895 176,4609 M174,4613 C171.794,4613 170,4611.206 170,4609 C170,4606.794 171.794,4605 174,4605 C176.206,4605 178,4606.794 178,4609 C178,4611.206 176.206,4613 174,4613 M174,4603 C170.686,4603 168,4605.686 168,4609 C168,4612.314 170.686,4615 174,4615 C177.314,4615 180,4612.314 180,4609 C180,4605.686 177.314,4603 174,4603 M174,4617 C169.589,4617 166,4613.411 166,4609 C166,4604.589 169.589,4601 174,4601 C178.411,4601 182,4604.589 182,4609 C182,4613.411 178.411,4617 174,4617 M174,4599 C168.477,4599 164,4603.477 164,4609 C164,4614.523 168.477,4619 174,4619 C179.523,4619 184,4614.523 184,4609 C184,4603.477 179.523,4599 174,4599"
                />
              </svg>
              <h3 className="text-xl font-bold text-text">Misi Kami</h3>
            </div>
            <p className="text-base leading-relaxed text-muted">
              Kami berkomitmen untuk menghadirkan solusi ramah lingkungan yang
              melampaui ekspektasi mitra kami dengan inovasi, integritas, dan
              keberlanjutan.
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
                  Menjalin hubungan transparan dengan pemerintah, industri, dan
                  komunitas.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-8 shadow-sm"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.08 }}
          >
            <div className="flex flex-row items-center gap-2">
              <svg
                className="w-10 h-10 p-1.5 rounded-full bg-primary/15 fill-primary"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.9944 15.5C13.9274 15.5 15.4944 13.933 15.4944 12C15.4944 10.067 13.9274 8.5 11.9944 8.5C10.0614 8.5 8.49439 10.067 8.49439 12C8.49439 13.933 10.0614 15.5 11.9944 15.5ZM11.9944 13.4944C11.1691 13.4944 10.5 12.8253 10.5 12C10.5 11.1747 11.1691 10.5056 11.9944 10.5056C12.8197 10.5056 13.4888 11.1747 13.4888 12C13.4888 12.8253 12.8197 13.4944 11.9944 13.4944Z" />
                <path d="M12 5C7.18879 5 3.9167 7.60905 2.1893 9.47978C0.857392 10.9222 0.857393 13.0778 2.1893 14.5202C3.9167 16.391 7.18879 19 12 19C16.8112 19 20.0833 16.391 21.8107 14.5202C23.1426 13.0778 23.1426 10.9222 21.8107 9.47978C20.0833 7.60905 16.8112 5 12 5ZM3.65868 10.8366C5.18832 9.18002 7.9669 7 12 7C16.0331 7 18.8117 9.18002 20.3413 10.8366C20.9657 11.5128 20.9657 12.4872 20.3413 13.1634C18.8117 14.82 16.0331 17 12 17C7.9669 17 5.18832 14.82 3.65868 13.1634C3.03426 12.4872 3.03426 11.5128 3.65868 10.8366Z" />
              </svg>
              <h3 className="text-xl font-bold text-text">Visi Kami</h3>
            </div>
            <p className="text-base leading-relaxed text-muted">
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
                  Menciptakan perubahan positif di masyarakat melalui kolaborasi
                  dan praktik bisnis yang bertanggung jawab.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Our Approach */}
      <section className="px-4">
        <motion.div
          aria-labelledby="approach-title"
          className="relative isolate mx-auto max-w-4xl rounded-3xl bg-accent1/10 px-6 py-14 ring-1 ring-border"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Header */}
          <motion.div
            className="mx-auto max-w-3xl text-center"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.svg
              className="w-16 h-16 mx-auto rounded-full p-1.5 bg-accent1/15 text-accent1 ring-1 ring-accent1/30"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={fadeUp}
            >
              <line x1="50.4" y1="24.38" x2="58.3" y2="23.14" />
              <line x1="47.93" y1="17.11" x2="52.87" y2="14.2" />
              <line x1="42.89" y1="11.73" x2="46.21" y2="4.51" />
              <line x1="33.45" y1="10.69" x2="33.41" y2="4.96" />
              <line x1="24.29" y1="12.09" x2="21.62" y2="4.51" />
              <line x1="17.99" y1="17.03" x2="12.96" y2="14.29" />
              <line x1="15.78" y1="23.97" x2="8.03" y2="22.66" />
              <path d="M26.22,45.47c0-5.16-3.19-9.49-4.91-12.69A12.24,12.24,0,0,1,19.85,27c0-6.79,6.21-12.3,13-12.3" />
              <path d="M39.48,45.47c0-5.16,3.19-9.49,4.91-12.69A12.24,12.24,0,0,0,45.85,27c0-6.79-6.21-12.3-13-12.3" />
              <rect x="23.63" y="45.19" width="18.93" height="4.25" rx="2.12" />
              <rect x="24.79" y="49.43" width="16.61" height="4.25" rx="2.12" />
              <path d="M36.32,53.68v.84a3.23,3.23,0,1,1-6.44,0v-.84" />
              <path d="M24.57,26.25a7.5,7.5,0,0,1,7.88-7.11" />
            </motion.svg>

            <motion.h2
              id="approach-title"
              className="mt-4 text-2xl font-bold tracking-tight text-text md:text-3xl"
              variants={fadeUp}
            >
              Metode Kami
            </motion.h2>

            <motion.p
              className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted md:text-base"
              variants={fadeUp}
            >
              Keberhasilan solusi berkelanjutan bertumpu pada kolaborasi,
              inovasi, dan perhatian pada detail. Kami menggabungkan rekayasa
              yang presisi dengan teknologi mutakhir untuk merancang sistem yang
              efisien, aman, dan tahan uji waktu.
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <div className="relative mx-auto mt-12 max-w-5xl">
            <div
              aria-hidden
              className="pointer-events-none absolute left-[6%] right-[6%] top-[1.75rem] hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block"
            />
            <ol role="list" className="grid grid-cols-1 gap-10 md:grid-cols-3">
              <motion.li
                className="text-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="group inline-flex flex-col items-center">
                  <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20 transition-transform group-hover:scale-105">
                    <Search className="h-6 w-6 text-primary" aria-hidden />
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-text">
                    Discover
                  </h3>
                  <p className="mt-1 max-w-xs text-sm text-muted">
                    Studi kebutuhan & audit kondisi di lapangan.
                  </p>
                </div>
              </motion.li>

              <motion.li
                className="text-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.06 }}
              >
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
              </motion.li>

              <motion.li
                className="text-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.12 }}
              >
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
              </motion.li>
            </ol>
          </div>

          {/* CTA */}
          <motion.div
            className="mt-12 flex justify-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <a
              href="/contact"
              className="inline-flex items-center rounded-full bg-accent1 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent1"
            >
              Menjadi Mitra Kami{" "}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </a>
          </motion.div>
        </motion.div>
      </section>
    </section>
  );
}

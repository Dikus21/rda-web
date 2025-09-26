"use client";

import React from "react";
import Image from "next/image";
import Contact from "@/components/fragments/Homepage/contact-section";

export default function ProductPage() {
  const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || "6281234567890";
  const EMAIL_SALES =
    process.env.NEXT_PUBLIC_EMAIL_SALES || "rimbundauralam@gmail.com";

  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Halo PT Rimbun Daur Alam, saya tertarik dengan Aureloop — mohon kirimkan katalog & penawaran."
  )}`;

  const mailtoLink = `mailto:${EMAIL_SALES}?subject=${encodeURIComponent(
    "Permintaan Katalog & Penawaran — Aureloop"
  )}&body=${encodeURIComponent(
    "Halo Tim RDA,%0D%0A%0D%0ASaya tertarik dengan Aureloop. Mohon info katalog, spesifikasi lengkap, dan penawaran harga.%0D%0A%0D%0ATerima kasih."
  )}`;

  return (
    <main
      className="min-h-dvh w-full"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
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
        className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 lg:py-24 w-full bg-bg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span
              className="inline-block rounded-full px-3 py-1 text-sm ring-1"
              style={{ color: "var(--muted)", borderColor: "var(--border)" }}
            >
              Produk
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Aureloop — RDF Briket System
            </h1>
            <p
              className="mt-4 text-base sm:text-lg"
              style={{ color: "var(--muted)" }}
            >
              Ubah timbunan sampah menjadi bahan bakar alternatif ramah
              lingkungan dengan nilai kalor setara batubara.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink}
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium shadow-sm transition active:scale-[.98]"
                style={{ backgroundColor: "var(--primary)", color: "white" }}
              >
                Dapatkan Katalog & Penawaran Harga
              </a>
              <a
                href={mailtoLink}
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium ring-1 transition"
                style={{ color: "var(--text)", borderColor: "var(--border)" }}
              >
                Email Sales
              </a>
            </div>
          </div>

          {/* Gambar/visual placeholder: ganti src dengan render 3D/foto workshop */}
          <div className="relative">
            <div
              className="aspect-[4/3] w-full overflow-hidden rounded-3xl shadow"
              style={{
                backgroundColor: "var(--card)",
                border: `1px solid var(--border)`,
              }}
            >
              <Image
                src="/full-line-assy.png"
                alt="Render 3D / ilustrasi sistem Aureloop RDF Briket"
                className="h-full w-fit object-contain"
                loading="lazy"
                width={1000}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM → SOLUTION */}
      <section
        id="problem-solution"
        className="mx-auto px-4 sm:px-6 py-14 lg:py-16 w-full bg-section flex justify-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl">
          <div className="self-center">
            <h2 className="text-2xl font-semibold">
              Sampah Menumpuk, Energi Bersih Dibutuhkan
            </h2>
            <p className="mt-3" style={{ color: "var(--muted)" }}>
              Indonesia menghasilkan lebih dari{" "}
              <strong>56 juta ton sampah setiap tahun</strong>, dan
              <strong> 61% di antaranya tidak terkelola dengan baik</strong>. Di
              saat yang sama, kebutuhan energi alternatif terus meningkat untuk
              mengurangi ketergantungan pada batubara.
            </p>
          </div>
          <div className="h-full">
            <div
              className="h-full rounded-3xl p-5 ring-1 flex flex-col"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--card)",
              }}
            >
              <h3 className="text-lg font-medium">Solusi Aureloop</h3>
              <p>
                Aureloop adalah sistem pengolahan sampah terpadu yang
                menghasilkan
                <strong> Refuse-Derived Fuel (RDF)</strong> dalam bentuk briket
                berdaya tinggi. Dengan pendekatan{" "}
                <em>zero waste to landfill</em>, Aureloop menekan sampah yang
                berakhir di TPA dan area terbuka, sekaligus menghadirkan sumber
                energi bersih untuk industri maupun pemerintah.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section
        id="workflow"
        className="mx-auto max-w-6xl px-4 sm:px-6 py-14 lg:py-16"
      >
        <div className="grid grid-cols-1 gap-8">
          <h2 className="text-2xl font-semibold">Bagaimana Aureloop Bekerja</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Pemilahan & Pencacahan",
                desc: "Sampah dipilah dan dicacah menjadi ukuran seragam.",
                icon: "🧩",
              },
              {
                title: "Pengeringan & Pengolahan",
                desc: "Kadar air dikurangi agar siap dibakar.",
                icon: "🔥",
              },
              {
                title: "Briket RDF",
                desc: "Produk akhir yang dapat dimanfaatkan sebagai sumber energi alternatif.",
                icon: "🔋",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-3xl p-6 ring-1"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--card)",
                }}
              >
                <div className="text-3xl" aria-hidden>
                  {s.icon}
                </div>
                <h3 className="mt-3 text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS TABLE */}
      <section
        id="specs"
        className="mx-auto px-4 sm:px-6 py-14 lg:py-8 bg-section w-full flex justify-center"
      >
        <div className="max-w-5xl w-full">
          <h2 className="text-2xl font-semibold">Spesifikasi Ringkas</h2>
          <div
            className="mt-6 overflow-hidden rounded-3xl ring-1"
            style={{
              borderColor: "var(--border)",
            }}
          >
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
                    className="border-t"
                    style={{
                      borderColor: i === 0 ? "transparent" : "var(--border)",
                    }}
                  >
                    <td
                      className="px-5 py-4 font-medium"
                      style={{ color: "var(--text)" }}
                    >
                      {k}
                    </td>
                    <td className="px-5 py-4" style={{ color: "var(--muted)" }}>
                      {v}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs" style={{ color: "var(--muted)" }}>
            *Data teknis dapat disesuaikan dengan kondisi proyek.
          </p>
        </div>
      </section>

      {/* CLOSING CTA */}
      <div className="w-full bg-section">
        <Contact
          title="Siap Ubah Sampah Menjadi Energi?"
          subtitle="Dengan Aureloop, Anda bisa mengurangi sampah, menghasilkan energi
            bersih, dan membangun masa depan yang berkelanjutan."
        />
      </div>
    </main>
  );
}

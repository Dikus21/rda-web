"use client";

import * as React from "react";

type Props = {
  org: string;
  address: string;
  waNumber: string;
  contactEmail: string;
};

function buildWhatsAppText(values: Record<string, string>) {
  const lines = [
    "Halo Rimbun Daur Alam, saya ingin konsultasi:",
    `Nama: ${values.name || "-"}`,
    `Instansi/Perusahaan: ${values.company || "-"}`,
    `Email: ${values.email || "-"}`,
    `Telepon: ${values.phone || "-"}`,
    `Lokasi Proyek: ${values.location || "-"}`,
    `Kapasitas (ton/hari): ${values.capacity || "-"}`,
    `Komposisi Sampah: ${values.composition || "-"}`,
    `Output Diharapkan: ${values.output || "-"}`,
    `Timeline Implementasi: ${values.timeline || "-"}`,
    `Budget Range: ${values.budget || "-"}`,
    `Pesan Tambahan: ${values.message || "-"}`,
  ];
  return lines.join("");
}

export default function ContactForm({
  org,
  address,
  waNumber,
  contactEmail,
}: Props) {
  const [status, setStatus] = React.useState<
    | { type: "idle" }
    | { type: "loading" }
    | { type: "success"; msg: string }
    | { type: "error"; msg: string }
  >({ type: "idle" });

  const [values, setValues] = React.useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
    capacity: "",
    composition: "",
    output: "RDF briket",
    timeline: "",
    budget: "",
    message: "",
    website: "", // honeypot
  });

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: "loading" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Gagal mengirim formulir");
      setStatus({
        type: "success",
        msg: "Terima kasih! Kami akan menghubungi Anda segera.",
      });
      setValues((v) => ({ ...v, message: "" }));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setStatus({
        type: "error",
        msg: err.message || "Terjadi kesalahan. Coba lagi.",
      });
    }
  }

  function openWhatsApp() {
    if (!waNumber) {
      alert(
        "Nomor WhatsApp belum dikonfigurasi. Set NEXT_PUBLIC_WA_NUMBER di .env.local"
      );
      return;
    }
    const text = buildWhatsAppText(values);
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
      {/* Contact form */}
      <form
        onSubmit={onSubmit}
        className="rounded-2xl p-6 shadow-xl"
        style={{
          backgroundColor: "var(--card)",
          border: "1px solid var(--border)",
        }}
        aria-labelledby="contact-form-title"
      >
        <h2 id="contact-form-title" className="mb-4 text-xl font-semibold">
          Formulir Penawaran / Konsultasi
        </h2>

        {/* honeypot */}
        <input
          type="text"
          name="website"
          value={values.website}
          onChange={onChange}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px" }}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm">
              Nama<span aria-hidden> *</span>
            </label>
            <input
              id="name"
              name="name"
              value={values.name}
              onChange={onChange}
              required
              className="block w-full rounded-2xl border p-3 shadow-sm focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "var(--card)",
                color: "var(--text)",
                borderColor: "var(--border)",
              }}
              placeholder="Nama lengkap"
            />
          </div>
          <div>
            <label htmlFor="company" className="mb-1 block text-sm">
              Instansi/Perusahaan<span aria-hidden> *</span>
            </label>
            <input
              id="company"
              name="company"
              value={values.company}
              onChange={onChange}
              required
              className="block w-full rounded-2xl border p-3 shadow-sm focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "var(--card)",
                color: "var(--text)",
                borderColor: "var(--border)",
              }}
              placeholder="Nama institusi"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm">
              Email<span aria-hidden> *</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={onChange}
              required
              className="block w-full rounded-2xl border p-3 shadow-sm focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "var(--card)",
                color: "var(--text)",
                borderColor: "var(--border)",
              }}
              placeholder="nama@perusahaan.co.id"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1 block text-sm">
              Telepon/WhatsApp<span aria-hidden> *</span>
            </label>
            <input
              id="phone"
              name="phone"
              inputMode="tel"
              value={values.phone}
              onChange={onChange}
              required
              className="block w-full rounded-2xl border p-3 shadow-sm focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "var(--card)",
                color: "var(--text)",
                borderColor: "var(--border)",
              }}
              placeholder="62xxxxxxxxxx"
            />
          </div>
          <div>
            <label htmlFor="location" className="mb-1 block text-sm">
              Lokasi Proyek<span aria-hidden> *</span>
            </label>
            <input
              id="location"
              name="location"
              value={values.location}
              onChange={onChange}
              required
              className="block w-full rounded-2xl border p-3 shadow-sm focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "var(--card)",
                color: "var(--text)",
                borderColor: "var(--border)",
              }}
              placeholder="Kota/Kabupaten, Provinsi"
            />
          </div>
          <div>
            <label htmlFor="capacity" className="mb-1 block text-sm">
              Kapasitas (ton/hari)
            </label>
            <input
              id="capacity"
              name="capacity"
              value={values.capacity}
              onChange={onChange}
              className="block w-full rounded-2xl border p-3 shadow-sm focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "var(--card)",
                color: "var(--text)",
                borderColor: "var(--border)",
              }}
              placeholder="Contoh: 150"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="composition" className="mb-1 block text-sm">
              Komposisi Sampah
            </label>
            <input
              id="composition"
              name="composition"
              value={values.composition}
              onChange={onChange}
              className="block w-full rounded-2xl border p-3 shadow-sm focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "var(--card)",
                color: "var(--text)",
                borderColor: "var(--border)",
              }}
              placeholder="Perkiraan organik, plastik, kertas, residu, dll."
            />
          </div>
          <div>
            <label htmlFor="output" className="mb-1 block text-sm">
              Output Diharapkan
            </label>
            <input
              id="output"
              name="output"
              value={values.output}
              onChange={onChange}
              className="block w-full rounded-2xl border p-3 shadow-sm focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "var(--card)",
                color: "var(--text)",
                borderColor: "var(--border)",
              }}
              placeholder="RDF briket / RDF loose / lainnya"
            />
          </div>
          <div>
            <label htmlFor="timeline" className="mb-1 block text-sm">
              Timeline Implementasi
            </label>
            <input
              id="timeline"
              name="timeline"
              value={values.timeline}
              onChange={onChange}
              className="block w-full rounded-2xl border p-3 shadow-sm focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "var(--card)",
                color: "var(--text)",
                borderColor: "var(--border)",
              }}
              placeholder="Target mulai/selesai"
            />
          </div>
          <div>
            <label htmlFor="budget" className="mb-1 block text-sm">
              Budget Range
            </label>
            <input
              id="budget"
              name="budget"
              value={values.budget}
              onChange={onChange}
              className="block w-full rounded-2xl border p-3 shadow-sm focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "var(--card)",
                color: "var(--text)",
                borderColor: "var(--border)",
              }}
              placeholder="Contoh: 2–5 M"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="mb-1 block text-sm">
              Pesan Tambahan
            </label>
            <textarea
              id="message"
              name="message"
              value={values.message}
              onChange={onChange}
              rows={5}
              className="block w-full resize-y rounded-2xl border p-3 shadow-sm focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "var(--card)",
                color: "var(--text)",
                borderColor: "var(--border)",
              }}
              placeholder="Ceritakan konteks proyek, kendala, atau pertanyaan…"
            />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={status.type === "loading"}
            className="rounded-2xl px-5 py-3 text-sm font-medium shadow-sm transition disabled:opacity-60"
            style={{ background: "var(--primary)", color: "#0B0F12" }}
          >
            {status.type === "loading" ? "Mengirim…" : "Kirim Formulir"}
          </button>
          <button
            type="button"
            onClick={openWhatsApp}
            className="rounded-2xl px-5 py-3 text-sm font-medium shadow-sm ring-1 transition"
            style={{ color: "var(--text)", borderColor: "var(--border)" }}
          >
            WhatsApp Sales
          </button>

          {status.type === "success" && (
            <span
              role="status"
              className="text-sm"
              style={{ color: "var(--muted)" }}
            >
              {status.msg}
            </span>
          )}
          {status.type === "error" && (
            <span role="alert" className="text-sm" style={{ color: "#E63946" }}>
              {status.msg}
            </span>
          )}
        </div>

        <p className="mt-3 text-xs" style={{ color: "var(--muted)" }}>
          Dengan mengirim formulir ini, Anda setuju dengan Kebijakan Privasi
          kami.
        </p>
      </form>

      {/* Contact details + Map */}
      <aside className="space-y-4">
        <div
          className="rounded-2xl p-6 shadow-xl"
          style={{
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
          }}
        >
          <h2 className="text-xl font-semibold">Informasi Kontak</h2>
          <div
            className="mt-3 space-y-2 text-sm"
            style={{ color: "var(--muted)" }}
          >
            <p>
              <strong style={{ color: "var(--text)" }}>{org}</strong>
            </p>
            <p>{address}</p>
            <p>
              Email:{" "}
              <a href={`mailto:${contactEmail}`} className="underline">
                {contactEmail}
              </a>
            </p>
            <p>
              WhatsApp:{" "}
              <button
                type="button"
                onClick={openWhatsApp}
                className="underline"
              >
                {waNumber || "Set NEXT_PUBLIC_WA_NUMBER"}
              </button>
            </p>
          </div>
        </div>

        <div
          className="overflow-hidden rounded-2xl shadow-xl ring-1"
          style={{ borderColor: "var(--border)" }}
        >
          <iframe
            title={`Lokasi ${org}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              `${org} ${address}`
            )}&output=embed`}
            className="h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </aside>
    </div>
  );
}

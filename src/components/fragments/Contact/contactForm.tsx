"use client";

import * as React from "react";

type Props = {
  waNumber: string;
  contactEmail: string;
};

export default function ContactForm({ contactEmail }: Props) {
  const [status, setStatus] = React.useState<
    | { type: "idle" }
    | { type: "loading" }
    | { type: "success"; msg: string }
    | { type: "error"; msg: string }
  >({ type: "idle" });

  const [values, setValues] = React.useState({
    name: "",
    company: "", // opsional; tidak ada inputnya di UI ini, tetap kirim "" ke server
    email: "",
    phone: "",
    subject: "",
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
    if (status.type === "loading") return;
    setStatus({ type: "loading" });

    try {
      // const res = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "content-type": "application/json" },
      //   body: JSON.stringify(values),
      // });

      // const data = await res.json().catch(() => ({}));
      // if (!res.ok || data?.ok === false) {
      //   throw new Error(data?.error || "Gagal mengirim. Coba lagi.");
      // }

      setStatus({
        type: "success",
        msg: "Terkirim! Kami akan menghubungi Anda sesegera mungkin.",
      });

      // reset form
      setValues({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        website: "",
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setStatus({
        type: "error",
        msg: err?.message || "Gagal mengirim. Coba lagi.",
      });
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-card p-6 shadow-2xl"
      aria-labelledby="contact-form-title"
    >
      <h2 id="contact-form-title" className="sr-only">
        Contact form
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
          <label htmlFor="name" className="mb-1 block text-sm text-text">
            Name<span aria-hidden> *</span>
          </label>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={onChange}
            required
            className="block w-full rounded-full border border-border bg-card px-4 py-3.5 text-text shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="John Carter"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-text">
            Email<span aria-hidden> *</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            required
            className="block w-full rounded-full border border-border bg-card px-4 py-3.5 text-text shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="email@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block text-sm text-text">
            Phone<span aria-hidden> *</span>
          </label>
          <input
            id="phone"
            name="phone"
            inputMode="tel"
            value={values.phone}
            onChange={onChange}
            required
            className="block w-full rounded-full border border-border bg-card px-4 py-3.5 text-text shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="(62) xxx - xxx"
          />
        </div>

        <div>
          <label htmlFor="subject" className="mb-1 block text-sm text-text">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            value={values.subject}
            onChange={onChange}
            className="block w-full rounded-full border border-border bg-card px-4 py-3.5 text-text shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="ex. Services"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="mb-1 block text-sm text-text">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={onChange}
            rows={5}
            className="block w-full resize-y rounded-3xl border border-border bg-card px-4 py-3.5 text-text shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Please type your message here..."
          />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          disabled={status.type === "loading"}
          className="rounded-full bg-accent1 px-6 py-3 text-sm text-white font-medium shadow-sm transition disabled:opacity-60"
        >
          {status.type === "loading" ? "Sending…" : "Send Message"}
        </button>

        {status.type === "success" && (
          <span role="status" className="text-sm text-muted">
            {status.msg}
          </span>
        )}
        {status.type === "error" && (
          <span role="alert" className="text-sm text-accent2">
            {status.msg}
          </span>
        )}
      </div>

      <p className="mt-3 text-xs text-muted">
        Or email us at{" "}
        <a
          className="underline text-primary hover:opacity-90"
          href={`mailto:${contactEmail}`}
        >
          {contactEmail}
        </a>
      </p>
    </form>
  );
}

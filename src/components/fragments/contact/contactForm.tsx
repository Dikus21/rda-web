/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(1, "Phone is required"),
  subject: z.string().optional(),
  message: z.string().optional(),
  // honeypot – must stay empty
  website: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [status, setStatus] = React.useState<
    | { type: "idle" }
    | { type: "loading" }
    | { type: "success"; msg: string }
    | { type: "error"; msg: string }
  >({ type: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (values) => {
    if (status.type === "loading") return;
    setStatus({ type: "loading" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json().catch(() => ({}) as any);
      if (!res.ok || (data as any)?.ok === false) {
        throw new Error((data as any)?.error || "Gagal mengirim. Coba lagi.");
      }

      setStatus({
        type: "success",
        msg: "Terkirim! Kami akan menghubungi Anda sesegera mungkin.",
      });

      reset();
    } catch (err: any) {
      setStatus({
        type: "error",
        msg: err?.message || "Gagal mengirim. Coba lagi.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-border bg-card p-6 shadow-2xl"
      aria-labelledby="contact-form-title"
    >
      <h2 id="contact-form-title" className="sr-only">
        Contact form
      </h2>

      {/* Honeypot field */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px" }}
        {...register("website")}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm text-text">
            Name<span aria-hidden> *</span>
          </label>
          <input
            id="name"
            className="block w-full rounded-full border border-border bg-card px-4 py-3.5 text-text shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="John Carter"
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-accent2">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-text">
            Email<span aria-hidden> *</span>
          </label>
          <input
            id="email"
            type="email"
            className="block w-full rounded-full border border-border bg-card px-4 py-3.5 text-text shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="email@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-accent2">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block text-sm text-text">
            Phone<span aria-hidden> *</span>
          </label>
          <input
            id="phone"
            inputMode="tel"
            className="block w-full rounded-full border border-border bg-card px-4 py-3.5 text-text shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="(62) xxx - xxx"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-accent2">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="mb-1 block text-sm text-text">
            Subject
          </label>
          <input
            id="subject"
            className="block w-full rounded-full border border-border bg-card px-4 py-3.5 text-text shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="ex. Services"
            {...register("subject")}
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-accent2">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="mb-1 block text-sm text-text">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="block w-full resize-y rounded-3xl border border-border bg-card px-4 py-3.5 text-text shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Please type your message here..."
            {...register("message")}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-accent2">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status.type === "loading" || isSubmitting}
          className="rounded-full bg-accent1 px-6 py-3 text-sm text-white font-medium shadow-sm transition disabled:opacity-60"
        >
          {status.type === "loading" || isSubmitting
            ? "Sending…"
            : "Send Message"}
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
    </form>
  );
}

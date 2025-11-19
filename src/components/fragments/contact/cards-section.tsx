"use client";
import { data } from "@/data";
import { motion } from "framer-motion";
import React from "react";
import SelectionCard from "./selection-card";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

const SCHEDULE = process.env.NEXT_PUBLIC_SCHEDULE || "08.00–17.00 (Sen–Jum)";
const telHref = data.contact.phone
  ? `https://wa.me/${data.contact.phone}`
  : undefined;
const mailHref = `mailto:${data.contact.email}`;
const mapHref =
  process.env.NEXT_PUBLIC_MAP_URL ||
  `https://maps.app.goo.gl/aqdm4cD6iQhSrc8g8`;

export default function ContactCardsSection() {
  return (
    <motion.section
      aria-labelledby="contact-title"
      className="flex flex-col items-center gap-3 max-w-6xl px-4 py-8 sm:px-6 lg:px-8"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      <motion.div
        className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 h-full"
        variants={stagger}
      >
        {/* Phone */}
        <motion.div variants={fadeUp}>
          <SelectionCard
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.3 1.77.54 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.11a2 2 0 0 1 2.11-.45c.84.24 1.71.42 2.61.54A2 2 0 0 1 22 16.92" />
              </svg>
            }
            title="Phone"
            line1={`+${data.contact.phone}`}
            href={telHref}
          />
        </motion.div>

        {/* Email */}
        <motion.div variants={fadeUp}>
          <SelectionCard
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            }
            title="Email"
            line1={data.contact.email}
            href={mailHref}
          />
        </motion.div>

        {/* Schedule */}
        <motion.div variants={fadeUp}>
          <SelectionCard
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12" />
                <polyline points="12 12 16 14" />
              </svg>
            }
            title="Schedule"
            line1={SCHEDULE}
            line2="(WIB)"
          />
        </motion.div>

        {/* Address */}
        <motion.div variants={fadeUp}>
          <SelectionCard
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            }
            title="Address"
            line1={data.company.name}
            line2={data.contact.address}
            href={mapHref}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

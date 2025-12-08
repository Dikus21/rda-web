import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Hr,
  Img,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import { brand } from "./components/Brand";

type Props = {
  /** Customer name to personalize greeting */
  name: string;
  /** Topic of the request, e.g. "Waste Sorting Line" */
  topic?: string;
  /** Requested info: accept string or array of bullet points */
  requestedInfo?: string | string[];
  /** Phone number to display; falls back to brand.phone */
  phone?: string;
  /** Organization name; falls back to brand.org */
  orgName?: string;
  /** Override logo URL if needed */
  logoUrl?: string;
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `${process.env.NEXT_PUBLIC_SITE_URL}`
  : "https://rimbun.co.id";

console.log(baseUrl);
export default function ContactReceipt({
  name,
  topic,
  phone = "085285849686",
  orgName = "PT Rimbun Daur Alam",
}: Props) {
  const org = orgName ?? brand.org;
  const supportPhone = phone ?? brand.phone;

  return (
    <Html>
      <Head />
      <Preview>We’ve received your request — {org}</Preview>

      <Tailwind config={{ theme: { extend: { colors: { ...brand.colors } } } }}>
        <Body className="bg-bg text-text">
          <Container className="mx-auto my-6 w-[600px] rounded-2xl bg-card p-8">
            {/* Logo header */}
            <Section>
              <Img
                src={`${baseUrl}/logo-rda.png`}
                alt={`${org} logo`}
                width="50"
                height="50"
                className="mx-auto"
              />
            </Section>

            {/* Main message (exact wording requested) */}
            <Section className="leading-7">
              <Text className="text-base">
                Hello <b>{name || "Customer"}</b>,
              </Text>

              <Text className="text-base">
                Terima kasih telah menghubungi kami. Kami menghargai
                ketertarikan Anda pada bisnis kami. Dengan ini kami
                mengonfirmasi bahwa kami telah menerima permintaan Anda
                {topic ? (
                  <>
                    {" "}
                    for <b>{topic}</b>.
                  </>
                ) : (
                  "."
                )}
              </Text>

              <Text className="mt-4 text-base">
                Kami akan menghubungi Anda segera mungkin, Terimakasih.
                {/* Jika membutuhkan bantuan segera atau ada pertanyaan lain, silakan hubungi kami di{" "}
                <a href="https://wa.me/${data.contact.phone}?text=Halo%20saya%20tertarik%20dan%20ingin%20mendapatkan%20penawaran%20untuk%20mesin%20pengolahan%20sampah">
                  <b>{supportPhone ?? "+62-812-3456-7890"}</b>
                </a>
                . */}
              </Text>

              <Text className="mt-4 text-base">
                Hormat kami,
                <br />
                {org ?? "PT Rimbun Daur Alam"}
              </Text>
            </Section>

            <Hr className="my-6 border-border" />

            {/* Footer (optional; bisa dihapus kalau mau super-minimal) */}
            <Section>
              <Text className="m-0 text-xs text-muted">
                {org} • {brand.address}
              </Text>
              <Text className="m-0 mt-1 text-xs text-muted">
                Business Hours: {brand.hours}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

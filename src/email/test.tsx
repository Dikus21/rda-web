// emails/ContactReceipt.tsx
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
  Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type Props = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message?: string;
};

export default function ContactReceipt(props: Props) {
  const { name, company, email, phone, message } = props;

  return (
    <Html>
      <Head />
      <Preview>Thanks, we’ve received your inquiry</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                bg: "#F9FAFB",
                text: "#111827",
                muted: "#4B5563",
                brand: "#6BCB3B",
              },
            },
          },
        }}
      >
        <Body className="bg-bg text-text">
          <Container className="mx-auto my-6 w-[600px] rounded-2xl border border-gray-200 bg-white p-8">
            <Text className="text-xl font-semibold">Hi {name || "there"},</Text>
            <Text className="text-base text-muted">
              Terima kasih sudah menghubungi PT Rimbun Daur Alam. Kami sudah
              menerima pesan Anda dan akan membalas secepatnya.
            </Text>

            <Section className="my-5 rounded-xl border border-gray-200 p-4">
              <Text className="text-sm font-medium">Ringkasan kontak:</Text>
              <Text className="text-sm text-muted">Nama: {name}</Text>
              {company && (
                <Text className="text-sm text-muted">
                  Perusahaan: {company}
                </Text>
              )}
              <Text className="text-sm text-muted">Email: {email}</Text>
              {phone && (
                <Text className="text-sm text-muted">Telepon: {phone}</Text>
              )}
              {message && (
                <>
                  <Hr />
                  <Text className="text-sm whitespace-pre-wrap">{message}</Text>
                </>
              )}
            </Section>

            <Text className="text-sm">
              Butuh cepat? Balas email ini atau kunjungi{" "}
              <Link href="https://yourdomain.com">yourdomain.com</Link>.
            </Text>

            <Hr />
            <Text className="text-xs text-muted">
              PT Rimbun Daur Alam • Kabupaten Tangerang, Indonesia
            </Text>
            <Text className="text-xs text-muted">
              Jam operasional: 08.00–17.00 (Sen–Jum)
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

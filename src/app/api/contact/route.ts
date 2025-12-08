import ContactReceipt from "@/email/ContactReciept";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const parsed = await req.json();

    // Honeypot — kalau diisi bot, pura-pura sukses
    if (parsed.website) {
      return NextResponse.json({ ok: true, msg: "OK" });
    }

    const FROM = process.env.PUBLIC_EMAIL_FROM!;
    const OWNER = process.env.PUBLIC_EMAIL_TO!;

    // 1) Kirim notifikasi ke kamu (plain text, simple & cepat)
    const adminSubject = `New inquiry — ${parsed.name}`;
    const adminText = [
      `Name: ${parsed.name}`,
      `Company: ${parsed.company || "-"}`,
      `Email: ${parsed.email}`,
      `Phone: ${parsed.phone}`,
      parsed.subject ? `Subject: ${parsed.subject}` : undefined,
      "",
      parsed.message ? parsed.message : undefined,
    ]
      .filter(Boolean)
      .join("\n");

    await resend.emails.send({
      from: FROM,
      to: OWNER,
      subject: adminSubject,
      text: adminText,
    });

    // 2) Auto-reply ke customer (Bahasa Indonesia + logo)
    await resend.emails.send({
      from: FROM,
      to: parsed.email,
      subject: "Terima kasih — Pesan Anda telah kami terima",
      react: ContactReceipt({
        name: parsed.name,
        // phone/orgName/logoUrl -> biarkan default brand dari template
      }),
    });

    return NextResponse.json({ ok: true, msg: "Sent" });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Unknown error" },
      { status: 400 }
    );
  }
}

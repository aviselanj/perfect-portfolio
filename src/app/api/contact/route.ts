import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    console.log("📩 Received form data:", body); // log incoming request

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // must be verified in Resend
      to: "aviselanj@gmail.com",                // your inbox
      subject: `New message from ${name}`,
      text: `From: ${email}\n\n${message}`,
    });

    console.log("✅ Resend API response:", data);

    return NextResponse.json({ success: true, data });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("❌ Error sending email:", error.message || error);
    return NextResponse.json({ success: false, error: error.message || error }, { status: 500 });
  }
}

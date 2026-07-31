import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { SITE_METADATA } from "@/data/content";

const ADMIN_EMAIL = process.env.CONTACT_TO || process.env.SMTP_TO || SITE_METADATA.email;
const SHEET_WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_SECURE = process.env.SMTP_SECURE === "true";
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM = process.env.SMTP_FROM || `Sreeram Creations <${ADMIN_EMAIL}>`;

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
});

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, eventType, eventDate, location, message } = data;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Name, email, and phone are required." }, { status: 400 });
    }

    if (SHEET_WEBHOOK_URL) {
      const sheetResponse = await fetch(SHEET_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name,
          email,
          phone,
          eventType,
          eventDate: eventDate || "Not provided",
          location: location || "Not provided",
          message: message || "No additional message provided.",
        }),
      });

      if (!sheetResponse.ok) {
        throw new Error("Google Sheet submission failed.");
      }

      return NextResponse.json({ success: true, savedTo: "google-sheet" });
    }

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        {
          error:
            "Email delivery is not configured yet. Set SMTP_HOST, SMTP_USER, and SMTP_PASS in the deployment environment before testing the contact form.",
        },
        { status: 500 },
      );
    }

    const mailHtml = `
      <div style="font-family: Inter, system-ui, sans-serif; color: #111; line-height: 1.6;">
        <h2 style="margin-bottom: 0.75rem; color: #0f172a;">New Contact Inquiry</h2>
        <p style="margin-bottom: 1rem; color: #475569;">A visitor submitted the contact form on the website.</p>
        <table cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 700px;">
          <tbody>
            <tr style="background: #f8fafc;"><td style="font-weight: 700; width: 210px;">Name</td><td>${name}</td></tr>
            <tr><td style="font-weight: 700; width: 210px;">Email</td><td>${email}</td></tr>
            <tr style="background: #f8fafc;"><td style="font-weight: 700; width: 210px;">Phone</td><td>${phone}</td></tr>
            <tr><td style="font-weight: 700; width: 210px;">Collection / Specialty</td><td>${eventType}</td></tr>
            <tr style="background: #f8fafc;"><td style="font-weight: 700; width: 210px;">Anticipated Date</td><td>${eventDate || "Not provided"}</td></tr>
            <tr><td style="font-weight: 700; width: 210px;">Event Destination</td><td>${location || "Not provided"}</td></tr>
            <tr style="background: #f8fafc;"><td style="font-weight: 700; width: 210px; vertical-align: top;">Message</td><td>${message || "No additional message provided."}</td></tr>
          </tbody>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: SMTP_FROM,
      to: ADMIN_EMAIL,
      subject: `New inquiry from ${name} — ${eventType}`,
      text: `New inquiry from ${name}\nEmail: ${email}\nPhone: ${phone}\nCollection / Specialty: ${eventType}\nAnticipated Date: ${eventDate || "Not provided"}\nEvent Destination: ${location || "Not provided"}\nMessage: ${message || "No additional message provided."}`,
      html: mailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Contact form error:", error);

    const errorMessage =
      error?.code === "EAUTH"
        ? "Email delivery authentication failed. Check the SMTP app password and Gmail configuration."
        : "Failed to send inquiry. Please try again later.";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

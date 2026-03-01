import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, bathroomsPerYear, serviceArea, projectTypes } = body;

    await resend.emails.send({
      from: "Bath-in-a-Box <onboarding@resend.dev>",
      to: "justin@thenorthlinegroup.co",
      subject: `New Trade Partner Inquiry — ${company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fbfaf7; border-radius: 16px;">
          <h2 style="margin: 0 0 24px; font-size: 20px; color: #0a0a0a;">New Trade Partner Inquiry</h2>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="border-bottom: 1px solid #e5e5e5;">
              <td style="padding: 10px 0; color: #737373; width: 40%;">Name</td>
              <td style="padding: 10px 0; color: #0a0a0a; font-weight: 600;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e5e5;">
              <td style="padding: 10px 0; color: #737373;">Company</td>
              <td style="padding: 10px 0; color: #0a0a0a; font-weight: 600;">${company}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e5e5;">
              <td style="padding: 10px 0; color: #737373;">Email</td>
              <td style="padding: 10px 0; color: #0a0a0a; font-weight: 600;">${email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e5e5;">
              <td style="padding: 10px 0; color: #737373;">Phone</td>
              <td style="padding: 10px 0; color: #0a0a0a; font-weight: 600;">${phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e5e5;">
              <td style="padding: 10px 0; color: #737373;">Bathrooms / year</td>
              <td style="padding: 10px 0; color: #0a0a0a; font-weight: 600;">${bathroomsPerYear}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e5e5;">
              <td style="padding: 10px 0; color: #737373;">Service area</td>
              <td style="padding: 10px 0; color: #0a0a0a; font-weight: 600;">${serviceArea}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #737373;">Project types</td>
              <td style="padding: 10px 0; color: #0a0a0a; font-weight: 600;">${projectTypes.join(", ")}</td>
            </tr>
          </table>

          <p style="margin: 24px 0 0; font-size: 12px; color: #a3a3a3;">Sent from bathinabox.net</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
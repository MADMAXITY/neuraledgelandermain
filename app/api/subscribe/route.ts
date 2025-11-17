import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      subject: `New Newsletter Subscription: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00D4FF;">New Newsletter Subscription</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            This subscriber has requested to receive templates & playbooks from NeuralEdge.
          </p>
        </div>
      `,
    });

    // Also send a welcome email to the subscriber
    const { data: welcomeData, error: welcomeError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: email,
      subject: "Welcome to NeuralEdge Newsletter!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 30px 0;">
            <h1 style="color: #00D4FF; margin-bottom: 10px;">Welcome to NeuralEdge!</h1>
            <p style="color: #666; font-size: 16px;">Thank you for subscribing to our newsletter</p>
          </div>

          <div style="background-color: #f5f5f5; padding: 30px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 15px;">What to expect:</h3>
            <ul style="color: #666; line-height: 1.8;">
              <li>AI automation templates and playbooks</li>
              <li>Industry insights and best practices</li>
              <li>Case studies and success stories</li>
              <li>Early access to new features and tools</li>
            </ul>
          </div>

          <div style="text-align: center; padding: 20px;">
            <p style="color: #666;">
              Stay tuned for valuable content coming your way soon!
            </p>
          </div>

          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
          <p style="color: #999; font-size: 12px; text-align: center;">
            © ${new Date().getFullYear()} NeuralEdge. All rights reserved.
          </p>
        </div>
      `,
    });

    if (error || welcomeError) {
      console.error("Resend error:", error || welcomeError);
      return NextResponse.json(
        { error: "Failed to process subscription" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Successfully subscribed!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
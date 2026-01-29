import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, serviceType, message } = body;

    // Validate required fields
    if (!name || !email || !serviceType || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service
    // Option 1: Use Resend (recommended)
    // const { data, error } = await resend.emails.send({
    //   from: 'Photography Portfolio <onboarding@resend.dev>',
    //   to: ['your.email@example.com'],
    //   subject: `New Contact Form: ${serviceType}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    //     <p><strong>Service Type:</strong> ${serviceType}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    // Option 2: Use Formspree
    // Just change the form action to https://formspree.io/f/YOUR_FORM_ID

    // Option 3: Use SendGrid, Mailgun, etc.

    // For now, log to console (DEVELOPMENT ONLY)
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      serviceType,
      message,
      timestamp: new Date().toISOString(),
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

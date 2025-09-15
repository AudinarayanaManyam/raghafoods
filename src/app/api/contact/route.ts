import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { rateLimit } from './rate-limit';

// Email regex pattern for validation
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Create a transporter using Gmail OAuth2
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';

    // Check rate limit (5 requests per hour per IP)
    const isRateLimited = await rateLimit(clientIp);
    if (isRateLimited) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse and validate input
    const { name, email, message } = await request.json();

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Message length validation
    if (message.length < 10 || message.length > 1000) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 1000 characters' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = name.trim().slice(0, 100);
    const sanitizedMessage = message.trim();

    // Email content with sanitized inputs
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.CONTACT_EMAIL, // Your business email
      replyTo: email,
      subject: `New Contact Form Message from ${sanitizedName}`,
      text: `Name: ${sanitizedName}\nEmail: ${email}\n\nMessage:\n${sanitizedMessage}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Message:</h3>
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>IP: ${clientIp}</small></p>
        <p><small>Sent: ${new Date().toISOString()}</small></p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Send auto-reply
    const autoReplyOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: email,
      subject: 'Thank you for contacting Raaga Foods',
      text: `
Dear ${sanitizedName},

Thank you for reaching out to Raaga Foods. We have received your message and will get back to you as soon as possible.

Best regards,
The Raaga Foods Team
      `,
      html: `
        <h2>Thank you for contacting Raaga Foods</h2>
        <p>Dear ${sanitizedName},</p>
        <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
        <br>
        <p>Best regards,</p>
        <p>The Raaga Foods Team</p>
      `,
    };

    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

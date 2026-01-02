// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req: Request) {
//   try {
//     const { email, name, message } = await req.json();

//     if (!email || !name || !message) {
//       return NextResponse.json(
//         { error: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

//     if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
//       console.error('Missing email configuration');
//       return NextResponse.json(
//         { error: 'Email service not configured' },
//         { status: 500 }
//       );
//     }

//     const transporter = nodemailer.createTransport({
//       service: 'smtp.gmail.com',
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_APP_PASSWORD,
//       },
//     });

//     await transporter.sendMail({
//       from: `"Raaga Foods" <${process.env.GMAIL_USER}>`,
//       to: process.env.CONTACT_EMAIL ,
//       replyTo: email,
//       subject: `New Contact Message from ${name}`,
//       html: `
//         <h3>New Contact Message</h3>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     });

//     return NextResponse.json({ success: true, message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Email error:', error);
//     return NextResponse.json(
//       { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
//       { status: 500 }
//     );
//   }
// }



import nodemailer from 'nodemailer';

// Utility function to escape HTML
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email ||  !message) {
      return Response.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Validate SMTP configuration
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('SMTP configuration missing:', {
        host: !!process.env.SMTP_HOST,
        user: !!process.env.SMTP_USER,
        pass: !!process.env.SMTP_PASSWORD,
      });
      return Response.json(
        { success: false, error: 'Email service not configured. Please contact support.' },
        { status: 500 }
      );
    }

    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to admin
    const adminMailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: email,
      subject: 'We received your message - Ragafoods',
      html: `
        <h2>Hello ${escapeHtml(name)},</h2>
        <p>Thank you for reaching out to us! We have received your message and will get back to you shortly.</p>
        <p><strong>Your Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Best regards,<br>Ragafoods Team</p>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return Response.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error.message);
    return Response.json(
      { success: false, error: 'Failed to send email: ' + error.message },
      { status: 500 }
    );
  }
}



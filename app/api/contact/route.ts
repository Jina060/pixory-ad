import { NextRequest, NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, company, projectType, message, recaptchaToken } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate reCAPTCHA token
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification is required' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token with Google
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecret) {
      return NextResponse.json(
        { error: 'reCAPTCHA configuration is missing' },
        { status: 500 }
      );
    }

    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
    });

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get SMTP configuration from environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;
    const smtpTo = process.env.SMTP_TO || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPassword) {
      return NextResponse.json(
        { error: 'SMTP configuration is missing' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Email content
    const mailOptions = {
      from: `PixoryFlow Agency Contact Form <${smtpFrom}>`,
      to: smtpTo,
      replyTo: email,
      subject: `New Inquiry from ${fullName}${company ? ` - ${company}` : ''} | PixoryFlow Contact Form`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="color-scheme" content="light only">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5; line-height: 1.6;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5;">
            <tr>
              <td style="padding: 20px 10px;">
                <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden;">
                  <!-- Header -->
                  <tr>
                    <td bgcolor="#2201DC" style="background-color: #2201DC; padding: 24px 20px; text-align: center;">
                      <h1 style="margin: 0; color: #FFFFFF; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">PixoryFlow Agency</h1>
                      <p style="margin: 8px 0 0 0; color: #FFFFFF; font-size: 14px;">New Contact Form Submission</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 24px 20px;">
                      <p style="margin: 0 0 24px 0; color: #1E293B; font-size: 16px;">Hello Team,</p>
                      <p style="margin: 0 0 32px 0; color: #475569; font-size: 15px;">You have received a new inquiry through the PixoryFlow contact form. Please review the details below:</p>
                      
                      <!-- Contact Information Card -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #F7F7F7; border-radius: 8px; margin-bottom: 24px;">
                        <tr>
                          <td style="padding: 20px;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                              <tr>
                                <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">
                                  <strong style="color: #1E293B; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Full Name</strong>
                                  <span style="color: #334155; font-size: 15px;">${fullName}</span>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">
                                  <strong style="color: #1E293B; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Email Address</strong>
                                  <a href="mailto:${email}" style="color: #2201DC; font-size: 15px; text-decoration: none;">${email}</a>
                                </td>
                              </tr>
                              ${company ? `
                              <tr>
                                <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">
                                  <strong style="color: #1E293B; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Company / Brand</strong>
                                  <span style="color: #334155; font-size: 15px;">${company}</span>
                                </td>
                              </tr>
                              ` : ''}
                              ${projectType ? `
                              <tr>
                                <td style="padding: 8px 0;">
                                  <strong style="color: #1E293B; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Project Type</strong>
                                  <span style="color: #334155; font-size: 15px;">${projectType}</span>
                                </td>
                              </tr>
                              ` : ''}
                            </table>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Message Section -->
                      <div style="margin-bottom: 32px;">
                        <h2 style="margin: 0 0 16px 0; color: #1E293B; font-size: 18px; font-weight: 600;">Message</h2>
                        <div style="background-color: #F7F7F7; padding: 20px; border-radius: 8px; border-left: 4px solid #2201DC;">
                          <p style="margin: 0; color: #334155; font-size: 15px; white-space: pre-wrap; line-height: 1.7;">${message}</p>
                        </div>
                      </div>
                      
                      <!-- Action Note -->
                      <div style="background-color: #F0F9FF; border: 1px solid #BAE6FD; border-radius: 8px; padding: 16px; margin-top: 24px;">
                        <p style="margin: 0; color: #0C4A6E; font-size: 14px; line-height: 1.6;">
                          <strong>💡 Quick Action:</strong> You can reply directly to this email to respond to ${fullName}. The reply-to address has been automatically set to their email address.
                        </p>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 20px 24px; background-color: #F8FAFC; border-top: 1px solid #E2E8F0; text-align: center;">
                      <p style="margin: 0 0 8px 0; color: #64748B; font-size: 12px; line-height: 1.5;">
                        This email was automatically generated from the PixoryFlow Agency contact form.
                      </p>
                      <p style="margin: 0; color: #94A3B8; font-size: 11px;">
                        © ${new Date().getFullYear()} PixoryFlow Agency. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `
PixoryFlow Agency - New Contact Form Submission

Hello Team,

You have received a new inquiry through the PixoryFlow contact form. Please review the details below:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT INFORMATION

Full Name: ${fullName}
Email Address: ${email}
${company ? `Company / Brand: ${company}\n` : ''}${projectType ? `Project Type: ${projectType}\n` : ''}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MESSAGE

${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

QUICK ACTION: You can reply directly to this email to respond to ${fullName}. The reply-to address has been automatically set to their email address.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This email was automatically generated from the PixoryFlow Agency contact form.
© ${new Date().getFullYear()} PixoryFlow Agency. All rights reserved.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } // To this
 catch (error: unknown) {
  const message = error instanceof Error ? error.message : 'Unknown error';
  console.error('Error sending email:', message);
  return NextResponse.json(
    { error: 'Failed to send email. Please try again later.' },
    { status: 500 }
  );
}}

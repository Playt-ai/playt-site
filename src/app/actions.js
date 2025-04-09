"use server"

import { createTransport } from 'nodemailer';

// Helper function to get environment variables that works in both environments
function getEnvVariable(key) {
  // AWS Amplify stores secrets in process.env
  // Local development uses .env
  return process.env[key] || process.env[`NEXT_PUBLIC_${key}`];
}

export async function submitWaitlistEntry(prevState, formData) {
  const email = formData.get("email")

  if (!email) {
    return { success: false, message: "Please provide an email." }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please provide a valid email address." }
  }

  try {
    const waitlistUrl = getEnvVariable('WAITLIST_URL');
    
    if (!waitlistUrl) {
      throw new Error("Waitlist URL not configured");
    }

    const response = await fetch(waitlistUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })

    if (!response.ok) {
      throw new Error("Failed to submit")
    }

    return { success: true, message: "Thank you for joining our waitlist!" }
  } catch (error) {
    console.error('Waitlist submission error:', error);
    return { success: false, message: "An error occurred. Please try again later." }
  }
}

export async function submitApplication(formData) {
  try {
    // Get SMTP configuration
    const smtpHost = getEnvVariable('SMTP_HOST');
    const smtpPort = getEnvVariable('SMTP_PORT');
    const smtpUser = getEnvVariable('SMTP_USER');
    const smtpPass = getEnvVariable('SMTP_PASS');
    const recipientEmail = getEnvVariable('RECIPIENT_EMAIL') || 'team@playt.ai';

    // Validate SMTP configuration
    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      console.error('Missing SMTP configuration');
      throw new Error('Email service not configured');
    }

    // Create email transporter
    const transporter = createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Get form data
    const name = formData.get('name');
    const email = formData.get('email');
    const linkedin = formData.get('linkedin');
    const whyStartup = formData.get('whyStartup');
    const resume = formData.get('resume');

    // Validate required fields
    if (!name || !email || !linkedin || !whyStartup || !resume) {
      throw new Error('Please fill in all required fields');
    }

    // Convert resume file to base64
    const buffer = await resume.arrayBuffer();
    const base64Resume = Buffer.from(buffer).toString('base64');

    // Create email content
    const mailOptions = {
      from: smtpUser,
      to: recipientEmail,
      subject: `Growth Intern Application - ${name}`,
      text: `
New application received from ${name}

Email: ${email}
LinkedIn: ${linkedin}

Why are you interested in joining an early-stage startup?
${whyStartup}

Resume attached.
      `,
      attachments: [
        {
          filename: resume.name,
          content: base64Resume,
          encoding: 'base64'
        }
      ]
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return { success: true, message: 'Application submitted successfully!' };
  } catch (error) {
    console.error('Application submission error:', error);
    return { 
      success: false, 
      message: error.message === 'Email service not configured' || error.message === 'Please fill in all required fields'
        ? error.message
        : 'Failed to submit application. Please try again.'
    };
  }
}
'use server'

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
    // Submit to waitlist API
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
      throw new Error("Failed to submit to waitlist")
    }

    // Send confirmation emails
    const smtpHost = getEnvVariable('SMTP_HOST');
    const smtpPort = getEnvVariable('SMTP_PORT');
    const smtpUser = getEnvVariable('SMTP_USER');
    const smtpPass = getEnvVariable('SMTP_PASS');

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      console.error('Missing SMTP configuration');
      throw new Error('Email service not configured');
    }

    const transporter = createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Send confirmation to user
    await transporter.sendMail({
      from: smtpUser,
      to: email,
      subject: "Welcome to Playt's Waitlist!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <img src="https://playt.ai/logo.png" alt="Playt Logo" style="width: 120px; margin: 20px 0;">
          <h2>Thanks for joining our waitlist!</h2>
          <p>We're excited to have you on board. You'll be among the first to know when we launch and get early access to our platform.</p>
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Follow our journey on <a href="https://linkedin.com/company/playt-ai" style="color: #6C63FF;">LinkedIn</a></li>
            <li>Learn more about our team at <a href="https://playt.ai/team" style="color: #6C63FF;">playt.ai/team</a></li>
          </ul>
          <p>If you have any questions, just reply to this email.</p>
          <p>Best regards,<br>The Playt Team</p>
        </div>
      `
    });

    // Send notification to team
    await transporter.sendMail({
      from: smtpUser,
      to: 'team@playt.ai',
      subject: "New Waitlist Signup",
      text: `
New waitlist signup:
Email: ${email}
Time: ${new Date().toLocaleString()}
      `
    });

    return { success: true, message: "Thank you for joining our waitlist!" }
  } catch (error) {
    console.error('Waitlist submission error:', error);
    return { 
      success: false, 
      message: error.message === 'Email service not configured' 
        ? "Successfully joined waitlist, but couldn't send confirmation email." 
        : "An error occurred. Please try again later." 
    }
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
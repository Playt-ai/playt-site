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
    const waitlistUrl = getEnvVariable('WAITLIST_URL');
    console.log(waitlistUrl);
    
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

    // Create email content for team
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

    // Create confirmation email content for applicant
    const confirmationMailOptions = {
      from: recipientEmail,
      to: email,
      subject: 'Thank You for Applying to Playt',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://playt.ai/logo.png" alt="Playt Logo" style="width: 120px;">
          </div>
          
          <h1 style="color: #6C63FF; font-size: 24px; margin-bottom: 20px;">Application Received!</h1>
          
          <p>Hello ${name},</p>
          
          <p>Thank you for applying to Playt. We've received your application and resume. Our team will review your application and reach out if there's a good fit.</p>
        </div>
      `,
      text: `
Thank You for Applying to Playt

Hello ${name},

Thank you for applying to Playt. We've received your application and resume. Our team will review your application and reach out if there's a good fit.
      `
    };

    // Send application email to team
    await transporter.sendMail(mailOptions);
    
    // Send confirmation email to applicant
    await transporter.sendMail(confirmationMailOptions);

    return { success: true, message: 'Application submitted successfully! Check your email for confirmation.' };
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
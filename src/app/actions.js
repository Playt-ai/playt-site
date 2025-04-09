"use server"

import { createTransport } from 'nodemailer';

export async function submitWaitlistEntry(prevState, formData) {
  const email = formData.get("email")

  if (!email) {
    return { success: false, message: "Please provide an email." }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please provide a valid email address." }
  }

  try {
    const response = await fetch(process.env.WAITLIST_URL, {
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
    return { success: false, message: "An error occurred. Please try again later." }
  }
}

export async function submitApplication(formData) {
  try {
    // Create email transporter
    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Get form data
    const name = formData.get('name');
    const email = formData.get('email');
    const linkedin = formData.get('linkedin');
    const whyStartup = formData.get('whyStartup');
    // const relevantExperience = formData.get('relevantExperience');
    const resume = formData.get('resume');

    // Convert resume file to base64
    const buffer = await resume.arrayBuffer();
    const base64Resume = Buffer.from(buffer).toString('base64');

    // Create email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'team@playt.ai',
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
    return { success: false, message: 'Failed to submit application. Please try again.' };
  }
}
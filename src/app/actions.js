"use server"

export async function submitWaitlistEntry(prevState, formData) {
  const companyName = formData.get("companyName")
  const email = formData.get("email")

  if (!companyName || !email) {
    return { success: false, message: "Please provide both company name and email." }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please provide a valid email address." }
  }

  try {
    const response = await fetch("https://a4b0ayr1v1.execute-api.us-east-1.amazonaws.com/storeWaitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ companyName, email }),
    })

    if (!response.ok) {
      throw new Error("Failed to submit")
    }

    return { success: true, message: "Thank you for joining our waitlist!" }
  } catch (error) {
    return { success: false, message: "An error occurred. Please try again later." }
  }
}


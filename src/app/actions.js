"use server"

export async function submitWaitlistEntry(prevState, formData) {
  const email = formData.get("email")

  if (!email) {
    return { success: false, message: "Please provide an email address." }
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
      body: JSON.stringify({ email }),
    })

    if (!response.ok) {
      let errorMessage = "Failed to submit"
      try {
        const errorData = await response.json()
        errorMessage = errorData.message || errorMessage
      } catch (parseError) {
        // Ignore if response body isn't valid JSON
      }
      console.error("API Error:", response.status, errorMessage)
      throw new Error(errorMessage)
    }

    return { success: true, message: "Thank you for joining our waitlist!" }
  } catch (error) {
    console.error("Submission Error:", error)
    return { success: false, message: error.message || "An error occurred. Please try again later." }
  }
}


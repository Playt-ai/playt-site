"use client"

import { useActionState } from "react"
import { submitWaitlistEntry } from "../actions"

export default function WaitlistForm() {
  const [state, action, isPending] = useActionState(submitWaitlistEntry, null)

  return (
    <form action={action} className="space-y-4">
      <div className="animate-fade-in-up animation-delay-450">
        <label htmlFor="companyName" className="block text-sm font-medium text-white mb-1">
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          required
          className="w-full px-3 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-300"
          placeholder="Enter your company name"
        />
      </div>
      <div className="animate-fade-in-up animation-delay-600">
        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-300"
          placeholder="Enter your email address"
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-150 ease-in-out disabled:opacity-50 animate-fade-in-up animation-delay-750"
      >
        {isPending ? "Submitting..." : "Join Waitlist"}
      </button>
      {state && (
        <p className={`text-sm ${state.success ? "text-green-400" : "text-red-400"} animate-fade-in`}>
          {state.message}
        </p>
      )}
    </form>
  )
}


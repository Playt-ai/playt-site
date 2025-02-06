"use client"
import { useActionState } from "react"
import { submitWaitlistEntry } from "../actions"

export default function WaitlistForm() {
  const [state, action, isPending] = useActionState(submitWaitlistEntry, null)

  return (
    <form action={action} className="space-y-4">
      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          required
          className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Enter your company name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Enter your email address"
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-150 ease-in-out disabled:opacity-50"
      >
        {isPending ? "Submitting..." : "Join Waitlist"}
      </button>
      {state && <p className={`text-sm ${state.success ? "text-green-600" : "text-red-600"}`}>{state.message}</p>}
    </form>
  )
}


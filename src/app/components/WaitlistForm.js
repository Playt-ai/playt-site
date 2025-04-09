'use client';

import { useActionState } from 'react';
import { submitWaitlistEntry } from '../actions';

export default function WaitlistForm() {
  const initialState = { message: '', success: false };
  const [state, formAction] = useActionState(submitWaitlistEntry, initialState);

  return (
    <form action={formAction} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          required
          className="flex-grow px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-playt-purple/50 focus:border-transparent transition duration-200"
          aria-label="Email address"
        />
        <button
          type="submit"
          className="px-6 py-3 font-semibold text-gray-900 bg-playt-yellow rounded-lg shadow hover:bg-playt-yellow/90 focus:outline-none focus:ring-2 focus:ring-playt-yellow/50 focus:ring-offset-2 focus:ring-offset-playt-purple transition-all transform hover:scale-105"
        >
          Join Waitlist
        </button>
      </div>
      {state?.message && (
        <p className={`mt-3 text-sm text-center ${state.success ? 'text-green-300' : 'text-red-400'} animate-fade-in`}>
          {state.message}
        </p>
      )}
    </form>
  );
}

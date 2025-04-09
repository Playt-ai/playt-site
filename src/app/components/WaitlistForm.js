'use client'; // Mark as a Client Component for state and event handling

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // To show feedback like 'Submitting...', 'Success!', 'Error'
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Submitting...');
    setMessage('');

    // Replace with your actual API endpoint and fetch logic
    try {
      // Example API call (replace with your actual backend endpoint/logic)
      const response = await fetch('/api/waitlist', { // Ensure this endpoint exists
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('Success!');
        setMessage('Thanks for joining the waitlist!');
        setEmail(''); // Clear input on success
      } else {
        const errorData = await response.json();
        setStatus('Error');
        setMessage(errorData.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Waitlist form submission error:', error);
      setStatus('Error');
      setMessage('Could not connect to the server. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          className="flex-grow px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-playt-purple/50 focus:border-transparent transition duration-200"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={status === 'Submitting...'} // Disable button while submitting
          className="px-6 py-3 font-semibold text-gray-900 bg-playt-yellow rounded-lg shadow hover:bg-playt-yellow/90 focus:outline-none focus:ring-2 focus:ring-playt-yellow/50 focus:ring-offset-2 focus:ring-offset-playt-purple transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === 'Submitting...' ? 'Joining...' : 'Join Waitlist'}
        </button>
      </div>
      {/* Feedback Messages */}
      {message && (
        <p className={`mt-3 text-sm text-center ${status === 'Error' ? 'text-red-400' : 'text-green-300'}`}>
          {message}
        </p>
      )}
    </form>
  );
} 
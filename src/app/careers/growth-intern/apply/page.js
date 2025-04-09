'use client';

import { useState } from 'react';
import Header from '@/app/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { submitApplication } from '../../../actions';

export default function Apply() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ message: '', success: false });
  const [selectedFile, setSelectedFile] = useState(null);

  async function handleSubmit(formData) {
    setSubmitting(true);
    setStatus({ message: '', success: false });

    try {
      const result = await submitApplication(formData);
      setStatus(result);
      if (result.success) {
        // Reset form
        document.getElementById('applicationForm').reset();
        setSelectedFile(null);
      }
    } catch (error) {
      setStatus({
        success: false,
        message: 'An error occurred. Please try again.'
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />

      {/* Application Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <Link href="/careers/growth-intern" className="text-playt-purple hover:text-playt-purple/80 mb-8 inline-block">
            ← Back to Job Description
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-8">Apply for Growth Intern</h1>

          <form id="applicationForm" action={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-playt-purple focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-playt-purple focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile URL</label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-playt-purple focus:border-transparent"
              />
            </div>

            {/* Questions */}
            <div>
              <label htmlFor="whyStartup" className="block text-sm font-medium text-gray-700 mb-1">
                Why are you interested in joining us?
              </label>
              <textarea
                id="whyStartup"
                name="whyStartup"
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-playt-purple focus:border-transparent"
              />
            </div>

            {/* <div>
              <label htmlFor="relevantExperience" className="block text-sm font-medium text-gray-700 mb-1">
                Tell us about any relevant experience you have
              </label>
              <textarea
                id="relevantExperience"
                name="relevantExperience"
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-playt-purple focus:border-transparent"
              />
            </div> */}

            {/* Resume Upload */}
            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Resume</label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                onChange={(e) => setSelectedFile(e.target.files[0])}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-playt-purple focus:border-transparent"
              />
              <p className="mt-1 text-sm text-gray-500">PDF, DOC, or DOCX (Max 5MB)</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-playt-purple hover:bg-playt-purple/90 text-white font-medium px-8 py-4 rounded-lg shadow transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting...' : 'Submit Application'}
            </button>

            {/* Status Message */}
            {status.message && (
              <p className={`text-center ${status.success ? 'text-green-600' : 'text-red-600'}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

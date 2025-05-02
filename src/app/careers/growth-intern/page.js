import Image from 'next/image';
import Header from '@/app/components/Header';
import Link from 'next/link';

export const metadata = {
  title: 'Growth Intern Position',
  description: 'Join Playt as a Growth Intern and help shape the future of restaurant operations technology.',
};

export default function GrowthIntern() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header - Same as main page */}
      <Header />

      {/* Page Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Link href="/careers" className="text-playt-purple hover:text-playt-purple/80 mb-8 inline-block">
            ← Back to Careers
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-4">Growth Intern</h1>
          
          <div className="flex gap-4 mb-8">
            <span className="text-sm bg-playt-purple/10 text-playt-purple px-3 py-1 rounded-full">Internship</span>
            <span className="text-sm bg-playt-yellow/10 text-gray-600 px-3 py-1 rounded-full">Remote</span>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Join Playt's growth team and help shape the future of restaurant operations. As a Growth Intern, you'll work directly with our founding team to drive user acquisition and engagement strategies.
            </p>

            <h2 className="text-2xl font-bold font-poppins text-gray-900 mt-12 mb-4">What You'll Do</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Handle early customer relationships</li>
              <li>Analyze user acquisition data and provide insights</li>
              <li>Support business development and partnership initiatives</li>
              <li>Contribute to our product growth strategy</li>
            </ul>

            <h2 className="text-2xl font-bold font-poppins text-gray-900 mt-12 mb-4">What We're Looking For</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Strong interest in startups, entrepreneurship, and early-stage growth</li>
              <li>Excellent written and verbal communication skills</li>
              <li>Willingness to grow with the team and take on new responsibilities</li>
              <li>Ability to work independently and remotely</li>
            </ul>

            <h2 className="text-2xl font-bold font-poppins text-gray-900 mt-12 mb-4">Benefits</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Potential for a salaried position and equity in an early stage startup</li>
              <li>Flexible remote work environment</li>
              <li>Mentorship from experienced founders</li>
            </ul>

            <div className="mt-12">
              <Link 
                href="/careers/growth-intern/apply"
                className="bg-playt-purple hover:bg-playt-purple/90 text-white font-medium px-8 py-4 rounded-lg shadow transition-all hover:shadow-lg inline-block"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

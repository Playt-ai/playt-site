import Image from 'next/image';
import Link from 'next/link';

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header - Same as main page */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Playt Logo"
              width={64}
              height={64}
              priority
            />
            <span className="font-poppins font-bold text-4xl text-gray-800">
              Playt
            </span>
          </Link>
          <div className="space-x-2">
            <Link href="/#features" className="px-4 py-2 text-sm font-medium text-playt-purple hover:text-playt-purple/80 transition-colors">
              Learn More
            </Link>
            <a href="https://calendly.com/team-playt/30min" target="_blank" rel="noopener noreferrer" className="bg-playt-purple hover:bg-playt-purple/90 text-white text-sm font-medium px-4 py-2 rounded-lg shadow transition-all hover:shadow-lg transform hover:-translate-y-0.5">
              Book a Demo
            </a>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose max-w-none md:prose-lg space-y-6">
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-poppins text-gray-900 mt-12 mb-4">Information We Collect</h2>
            <p className="text-lg text-gray-600">
              We collect information that you provide directly to us, including when you sign up for our waitlist, create an account, or contact us for support.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-poppins text-gray-900 mt-12 mb-4">How We Use Your Information</h2>
            <p className="text-lg text-gray-600">
              We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-poppins text-gray-900 mt-12 mb-4">Data Security</h2>
            <p className="text-lg text-gray-600">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-poppins text-gray-900 mt-12 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at team@playt.ai.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
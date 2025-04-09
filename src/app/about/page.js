import Image from 'next/image';
import Link from 'next/link';

export default function About() {
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
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-8">About Playt</h1>
          <div className="prose max-w-none md:prose-lg space-y-6">
            {/* <div className="prose max-w-none md:prose-lg space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-gray-600">
                Playt is revolutionizing restaurant operations through intelligent data analytics and management tools. Our mission is to empower restaurants with the insights and tools they need to thrive in today's competitive market.
              </p>
              <p className="text-lg text-gray-600">
                Founded by industry experts with decades of combined experience in restaurant operations and technology, Playt understands the unique challenges faced by modern restaurants.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold font-poppins text-gray-900 mt-12 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600">
                We envision a future where every restaurant can harness the power of data to make informed decisions, optimize operations, and deliver exceptional dining experiences.
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
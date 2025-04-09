import Image from 'next/image';
import Header from '../components/Header';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header - Same as main page */}
      <Header />

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
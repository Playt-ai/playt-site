import Image from 'next/image';
import Link from 'next/link';
import Header from "./components/Header"
import WaitlistForm from "./components/WaitlistForm"

// Import icons (example using react-icons, install it first: npm install react-icons)
// You can replace these with your preferred icon solution (SVG imports, etc.)
import { FaChartLine, FaTruckLoading, FaCalendarAlt, FaTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

export const metadata = {
  title: 'Playt | Restaurant Analytics and Operations Platform',
  description: 'Smarter data and smoother operations for restaurants. Playt helps restaurants optimize their operations with predictive analytics and intelligent insights.',
};

export default function Home() {
  // Define base container class for consistent padding/max-width
  const containerClass = "container mx-auto px-4 sm:px-6 lg:px-8";

  return (
    // Use light background, set default text color
    <main className="min-h-screen bg-white text-gray-800">
      <Header />

      {/* Hero Section */}
      <section id="hero" className={`h-[calc(100vh-96px)] px-4 sm:px-12 lg:px-16 flex flex-col md:flex-row items-center gap-8 md:gap-12`}>
        <div className="md:w-2/3 text-center md:text-left mt-8 md:-mt-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins text-gray-900 mb-8 md:mb-10 leading-tight">
            <span className="block opacity-0 animate-fade-in-stagger" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Smarter Data.
            </span>
            <span className="block opacity-0 animate-fade-in-stagger" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
              Smoother Operations.
            </span>
            <span className="block opacity-0 animate-fade-in-stagger" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
              For Restaurants.
            </span>
          </h1>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-fade-in" style={{ animationDelay: '1.7s', animationFillMode: 'forwards' }}>
            <a href="https://calendly.com/team-playt/30min" target="_blank" rel="noopener noreferrer" 
               className="inline-block w-full sm:w-auto bg-playt-purple hover:bg-playt-purple/90 text-white font-medium px-8 py-4 rounded-lg shadow transition-all hover:shadow-lg transform hover:-translate-y-0.5 text-lg mb-4 sm:mb-0">
              Book a Demo
            </a>
          </div>
        </div>
        <div className="md:w-1/3 pr-0 md:pr-8 mt-4 md:-mt-28 opacity-0 animate-fade-in" style={{ animationDelay: '1.7s', animationFillMode: 'forwards' }}>
          <Image
            src="/product-preview.png"
            alt="Playt Dashboard Preview"
            width={1000}
            height={800}
            className="rounded-lg mx-auto w-full max-w-[300px] md:max-w-none"
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-12 md:py-24 bg-gray-50 px-4 sm:px-0`}>
        <div className={containerClass}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-center text-gray-900 mb-8 md:mb-12 animate-slide-in-top">
            Features Designed for Your Restaurant
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:-translate-y-1 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-playt-yellow/20 text-playt-yellow">
                 {/* Replace with actual icon */}
                <FaChartLine className="w-8 h-8 text-playt-purple" />
              </div>
              <h3 className="text-xl font-bold font-poppins mb-2">Predictive Analytics</h3>
              <p className="text-gray-600">Track orders, revenue, and trends with real-time insights.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:-translate-y-1 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-playt-yellow/20 text-playt-yellow">
                 {/* Replace with actual icon */}
                <FaTruckLoading className="w-8 h-8 text-playt-purple" />
              </div>
              <h3 className="text-xl font-bold font-poppins mb-2">Supply Chain Optimization</h3>
              <p className="text-gray-600">Automate and manage your inventory based on smart forecasts.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:-translate-y-1 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-playt-yellow/20 text-playt-yellow">
                {/* Replace with actual icon */}
                <FaCalendarAlt className="w-8 h-8 text-playt-purple" />
              </div>
              <h3 className="text-xl font-bold font-poppins mb-2">Scheduling & Operations</h3>
              <p className="text-gray-600">Order scheduling and management, simplified.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className={`py-12 md:py-24 px-4 sm:px-0`}>
        <div className={containerClass}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-center text-gray-900 mb-8 md:mb-12">
            How Playt Works
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-12 h-12 mb-4 rounded-full bg-playt-purple text-white flex items-center justify-center text-xl font-bold">1</div>
              <h3 className="text-xl font-bold font-poppins mb-2">Connect</h3>
              <p className="text-gray-600">Link your existing POS and delivery platforms.</p>
            </div>
            {/* Arrow (hidden on small screens) */}
            <div className="hidden md:block text-3xl text-playt-purple font-light">&rarr;</div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center max-w-xs">
               <div className="w-12 h-12 mb-4 rounded-full bg-playt-purple text-white flex items-center justify-center text-xl font-bold">2</div>
              <h3 className="text-xl font-bold font-poppins mb-2">Analyze</h3>
              <p className="text-gray-600">Playt crunches the numbers and identifies trends.</p>
            </div>
            {/* Arrow (hidden on small screens) */}
            <div className="hidden md:block text-3xl text-playt-purple font-light">&rarr;</div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center max-w-xs">
               <div className="w-12 h-12 mb-4 rounded-full bg-playt-purple text-white flex items-center justify-center text-xl font-bold">3</div>
              <h3 className="text-xl font-bold font-poppins mb-2">Optimize</h3>
              <p className="text-gray-600">Get actionable insights for inventory, performance, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - REMOVED */}
      {/* 
      <section id="testimonials" className={`py-16 md:py-24`}>
        <div className={containerClass}>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center text-gray-900 mb-12">
            Trusted by Restaurants
          </h2>
          <div className="text-center max-w-3xl mx-auto">
            <blockquote className="text-xl italic text-gray-600 mb-8">
             "Playt transformed how we manage our inventory!" - Happy Customer
            </blockquote>
            <div className="flex justify-center items-center space-x-8 opacity-60 grayscale">
              <span className="text-sm font-medium">Client Logo 1</span>
              <span className="text-sm font-medium">Client Logo 2</span>
              <span className="text-sm font-medium">Client Logo 3</span>
            </div>
          </div>
        </div>
      </section> 
      */}

      {/* Bottom CTA Section */}
      <section id="waitlist-cta" className={`py-12 md:py-24 bg-playt-purple text-white px-4 sm:px-0`}>
        <div className={`${containerClass} text-center`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins mb-4">
            Ready to Optimize Your Operations?
          </h2>
          <p className="text-base sm:text-lg opacity-90 mb-6 md:mb-8 max-w-xl mx-auto px-4 sm:px-0">
            Join our waitlist to get early access and updates.
          </p>
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8 md:py-12">
        <div className={containerClass}>
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center justify-center md:justify-start">
                <Image 
                  src="/logo.png" 
                  alt="Playt Logo Light" 
                  width={90} 
                  height={36} 
                  className="filter brightness-0 invert opacity-75 w-16 md:w-[90px]"
                />
              </Link>
              <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Playt. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 md:mb-0">
              <Link href="mailto:team@playt.ai" className="hover:text-white transition-colors">Contact</Link>
              <Link href="/team" className="hover:text-white transition-colors">Our Team</Link>
              <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            </div>
            <div className="flex space-x-5">
              <a href="#" aria-label="Twitter" className="hover:text-playt-purple transition-colors"><FaTwitter className="w-5 h-5" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-playt-purple transition-colors"><FaLinkedinIn className="w-5 h-5" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-playt-purple transition-colors"><FaFacebookF className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}


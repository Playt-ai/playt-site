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
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '1.7s', animationFillMode: 'forwards' }}>
            <a href="https://calendly.com/team-playt/30min" target="_blank" rel="noopener noreferrer" 
               className="inline-block w-full sm:w-auto bg-playt-purple hover:bg-playt-purple/90 text-white font-medium px-8 py-4 rounded-lg shadow transition-all hover:shadow-lg transform hover:-translate-y-0.5 text-lg">
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

      {/* AI Section */}
      <section className="py-16 md:py-24 px-4 sm:px-12 lg:px-16 bg-gray-50">
        <div className={`${containerClass} flex flex-col md:flex-row items-center gap-12 md:gap-16`}>
          {/* Left side - Chat Animation */}
          <div className="md:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-4 max-w-[400px] mx-auto">
              {/* Chat Header */}
              <div className="flex items-center space-x-2 mb-4 pb-3 border-b">
                <div className="w-5 h-5 rounded-full bg-playt-purple flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <span className="font-medium">AI Assistant</span>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4">
                {/* User Message */}
                <div className="flex justify-end opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                  <div className="bg-playt-purple text-white p-3 rounded-2xl rounded-tr-none max-w-[75%]">
                    How's my restaurant performing this week?
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start opacity-0 animate-fade-in" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
                  <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none max-w-[75%]">
                    Your revenue is up 15% compared to last week, with a notable increase in dinner orders. I've noticed your pasta dishes are trending particularly well!
                  </div>
                </div>

                {/* Second User Message */}
                <div className="flex justify-end opacity-0 animate-fade-in" style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
                  <div className="bg-playt-purple text-white p-3 rounded-2xl rounded-tr-none max-w-[75%]">
                    What should I order for next week?
                  </div>
                </div>

                {/* Second AI Response */}
                <div className="flex justify-start opacity-0 animate-fade-in" style={{ animationDelay: '4s', animationFillMode: 'forwards' }}>
                  <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none max-w-[75%]">
                    Based on your trends and upcoming weather forecast, I recommend increasing pasta ingredients by 20% and preparing for higher dine-in traffic.
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="mt-4 pt-3 border-t flex space-x-2 opacity-0 animate-fade-in" style={{ animationDelay: '4.5s', animationFillMode: 'forwards' }}>
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm"
                  disabled
                />
                <button className="bg-playt-purple text-white p-2 rounded-lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Left side - Text */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-gray-900 leading-tight">
              <span className="block mb-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Bringing AI
              </span>
              <span className="block mb-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                to restaurants.
              </span>
              <span className="block text-playt-purple opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                Smarter than ever.
              </span>
            </h2>
          </div>
          
        </div>
      </section>

      {/* Supply Management Section */}
      <section className="py-16 md:py-24 px-4 sm:px-12 lg:px-16 bg-white">
        <div className={`${containerClass} flex flex-col md:flex-row items-center gap-12 md:gap-16`}>
          {/* Left side - Text */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-gray-900 leading-tight">
              <span className="block mb-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                We handle
              </span>
              <span className="block mb-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                your supply.
              </span>
              <span className="block text-playt-purple opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                You just worry about cooking.
              </span>
            </h2>
          </div>

          {/* Right side - Calendar and Suggestion Animation */}
          <div className="md:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-4 max-w-[450px] mx-auto">
              {/* Order Suggestion */}
              <div className="mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                <div className="border border-amber-100 bg-amber-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="bg-white rounded-lg p-2 flex items-center justify-center mr-3 text-amber-500 border border-amber-200">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Order More Tomatoes</h4>
                      <p className="text-sm text-gray-600">Usage trending 20% higher this week</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini Chart */}
              <div className="opacity-0 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-medium text-gray-900">Tomato Soup</div>
                    <div className="flex items-center gap-4">
                      {/* Legend */}
                      <div className="flex items-center gap-3 text-xs">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-[#9747FF]"></div>
                          <span className="text-gray-600">Actual</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-[#3a36db]"></div>
                          <span className="text-gray-600">Predicted</span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">Last 7 days</div>
                    </div>
                  </div>
                  
                  {/* SVG Chart */}
                  <div className="h-[100px] relative">
                    <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                      {/* Gradient for area */}
                      <defs>
                        <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#9747FF" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#9747FF" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Grid lines */}
                      {[0, 25, 50, 75, 100].map((y) => (
                        <line
                          key={y}
                          x1="0"
                          y1={y}
                          x2="400"
                          y2={y}
                          stroke="#f0f0f0"
                          strokeWidth="1"
                        />
                      ))}

                      {/* Actual data area */}
                      <path
                        d="M0,80 L50,75 L100,70 L150,60 L200,50 L250,45 L300,40 L300,100 L0,100 Z"
                        fill="url(#areaGradient)"
                        className="opacity-0 animate-fade-in"
                        style={{ animationDelay: '2s', animationFillMode: 'forwards' }}
                      />

                      {/* Actual data line */}
                      <path
                        d="M0,80 L50,75 L100,70 L150,60 L200,50 L250,45 L300,40"
                        fill="none"
                        stroke="#9747FF"
                        strokeWidth="2"
                        className="opacity-0 animate-fade-in"
                        style={{ animationDelay: '2s', animationFillMode: 'forwards' }}
                      />

                      {/* Predicted data line (dashed) */}
                      <path
                        d="M0,80 L50,70 L100,75 L150,55 L200,50 L250,40 L300,40 L350,25 L400,0"
                        fill="none"
                        stroke="#3a36db"
                        strokeWidth="2"
                        strokeDasharray="4,4"
                        className="opacity-0 animate-fade-in"
                        style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}
                      />

                      {/* Today indicator */}
                      <g className="opacity-0 animate-fade-in" style={{ animationDelay: '2.7s', animationFillMode: 'forwards' }}>
                        <line
                          x1="300"
                          y1="0"
                          x2="300"
                          y2="100"
                          stroke="#4b5563"
                          strokeWidth="1"
                          strokeDasharray="2,2"
                        />
                        <circle
                          cx="300"
                          cy="40"
                          r="4"
                          fill="#9747FF"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                        <text
                          x="320"
                          y="10"
                          textAnchor="middle"
                          fill="#4b5563"
                          fontSize="10"
                          className="font-medium"
                        >
                          Today
                        </text>
                      </g>
                    </svg>

                    {/* Legend */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 mt-2">
                      <span>Mon</span>
                      <span>Wed</span>
                      <span>Fri</span>
                      <span>Sun</span>
                    </div>
                  </div>

                  {/* Metrics */}
                  {/* <div className="flex justify-between items-center mt-4 text-sm">
                    <div>
                      <div className="text-gray-500">Current Usage</div>
                      <div className="font-medium text-gray-900">142 orders/day</div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-500">Predicted Peak</div>
                      <div className="font-medium text-emerald-600">+28%</div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <Link href="/eula" className="hover:text-white transition-colors">EULA</Link>
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


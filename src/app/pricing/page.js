'use client';

import Link from 'next/link';
import Header from '../components/Header';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-playt-purple/5 to-white">
      <Header />
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-3">Pricing</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose the plan that fits your restaurant. You can update your plan anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col">
            <div className="mb-6">
              <h2 className="text-3xl font-semibold text-gray-900">Basic</h2>
              <p className="mt-1 text-sm text-gray-600">Everything you need to get started with data-driven operations.</p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-gray-900">$75</span>
                <span className="text-gray-500">/ month</span>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-gray-700 mb-8">
              <li>• Connect your POS system seamlessly</li>
              <li>• Centralized, easy-to-use data analytics</li>
              <li>• Smart forecasting for demand and inventory</li>
              <li>• AI-powered order scheduling and management</li>
              <li>• Real-time insights and alerts</li>
            </ul>
            <Link
              href="/register"
              className="mt-auto inline-flex items-center justify-center w-full bg-playt-purple hover:bg-playt-purple/90 text-white font-medium py-3 px-6 rounded-lg transition-all hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-playt-purple/20 flex flex-col relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-playt-purple text-white px-3 py-1 rounded-full shadow">Most Popular</span>
            <div className="mb-6">
              <h2 className="text-3xl font-semibold text-gray-900">Pro</h2>
              <p className="mt-1 text-sm text-gray-600">Advanced AI features for restaurants with 1-3 locations looking to optimize.</p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-gray-900">$125</span>
                <span className="text-gray-500">/ month</span>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-gray-700 mb-8">
              <li>Everything in Basic, plus:</li>
              <li>• AI-powered staffing management</li>
              <li>• Intelligent assistant for restaurant operations</li>
              <li>• Smart simulations for business decisions</li>
            </ul>
            <Link
              href="/register"
              className="mt-auto inline-flex items-center justify-center w-full bg-playt-purple hover:bg-playt-purple/90 text-white font-medium py-3 px-6 rounded-lg transition-all hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col">
            <div className="mb-6">
              <h2 className="text-3xl font-semibold text-gray-900">Enterprise</h2>
              <p className="mt-1 text-sm text-gray-600">Centralized data, integrations, and global optimization for multi-location chains.</p>
            </div>
            <ul className="space-y-3 text-sm text-gray-700 mb-8">
              <li>• Centralized data for all locations, plus individual location insights</li>
              <li>• Location to location integrations for staff, inventory, and supply chain</li>
              <li>• Intelligent fleet of AI assistants for each location</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}



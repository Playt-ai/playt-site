'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/layout/Footer';
import WaitlistForm from './components/WaitlistForm';
import AnimatedSection from './components/animations/AnimatedSection';
import StaggerChildren, { StaggerItem } from './components/animations/StaggerChildren';
import InventoryDashboardMockup from './components/mockups/InventoryDashboardMockup';
import BuildOrdersMockup from './components/mockups/BuildOrdersMockup';
import VendorChoiceMockup from './components/mockups/VendorChoiceMockup';
import { FaChartLine, FaBrain, FaBoxes, FaTruck, FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <InventorySection />
      <OrderingSection />
      <VendorSection />
      <CTASection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-playt-purple-50/50 via-white to-playt-yellow-50/30" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-playt-purple-200 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-playt-yellow-200 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-display-xl font-bold font-poppins text-gray-900 mb-6 leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Smart Inventory.{' '}
              <br className="hidden sm:block" />
              Seamless Supply Chain.{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">For Restaurants.</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Predict demand, automate ordering, and optimize your supply chain with AI-powered inventory management built for restaurants.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.a
                href="https://calendly.com/team-playt/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-playt-purple text-white font-medium px-8 py-4 rounded-xl shadow-soft hover:shadow-soft-lg hover:bg-playt-purple-600 transition-all duration-200"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Demo
                <FaArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#features"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 font-medium px-8 py-4 rounded-xl border border-gray-200 shadow-soft-sm hover:shadow-soft hover:border-gray-300 transition-all duration-200"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </div>

          {/* Floating Mockups Composition */}
          <div className="relative h-[420px] sm:h-[480px] lg:h-[580px]">
            {/* Inventory Dashboard - primary card, top-right */}
            <motion.div
              className="absolute -top-2 right-[0%] w-[100%] lg:w-[95%] z-30 origin-top-right pointer-events-none"
              initial={{ opacity: 0, y: 30, scale: 0.65, rotate: 0 }}
              animate={{ opacity: 1, y: 0, scale: 0.75, rotate: -1.5 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="shadow-glow-purple rounded-2xl">
                  <InventoryDashboardMockup />
                </div>
              </motion.div>
            </motion.div>

            {/* Build Orders - bottom-left, overlapping */}
            <motion.div
              className="absolute top-[0%] -left-[6%] w-[82%] z-20 origin-left pointer-events-none hidden lg:block"
              initial={{ opacity: 0, y: 30, scale: 0.55, rotate: 0 }}
              animate={{ opacity: 1, y: 0, scale: 0.65, rotate: 2.5 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="rounded-2xl shadow-soft-xl">
                  <BuildOrdersMockup />
                </div>
              </motion.div>
            </motion.div>

            {/* Vendor Orders - bottom-right
            <motion.div
              className="absolute top-[48%] -right-[4%] w-[74%] z-10 origin-right pointer-events-none hidden lg:block"
              initial={{ opacity: 0, y: 30, scale: 0.5, rotate: 0 }}
              animate={{ opacity: 1, y: 0, scale: 0.6, rotate: -2.5 }}
              transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="rounded-2xl shadow-soft-xl">
                  <VendorChoiceMockup />
                </div>
              </motion.div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: FaChartLine,
      title: 'Real-Time Tracking',
      description: 'Monitor stock levels, expiration dates, and usage patterns across all your ingredients in one dashboard.',
    },
    {
      icon: FaBrain,
      title: 'AI-Powered Forecasting',
      description: 'Predict demand based on sales history, seasonality, and trends to order the right amount every time.',
    },
    {
      icon: FaBoxes,
      title: 'Automated Ordering',
      description: 'Generate optimized purchase orders automatically based on par levels and predicted demand.',
    },
    {
      icon: FaTruck,
      title: 'Vendor Management',
      description: 'Compare vendors, track reliability, and optimize your supply chain for cost and efficiency.',
    },
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-playt-purple-100 text-playt-purple-700 text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-display-md font-bold font-poppins text-gray-900 mb-4">
            Everything you need to manage inventory smarter
          </h2>
          <p className="text-lg text-gray-600">
            Stop guessing. Start optimizing your supply chain with intelligent tools built for restaurants.
          </p>
        </AnimatedSection>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 h-full"
                whileHover={{ y: -8 }}
              >
                <div className="w-12 h-12 rounded-xl bg-playt-purple-100 flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-playt-purple" />
                </div>
                <h3 className="text-lg font-semibold font-poppins text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

function InventorySection() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection direction="left">
            <span className="inline-block px-4 py-2 rounded-full bg-playt-purple-100 text-playt-purple-700 text-sm font-medium mb-6">
              Inventory Dashboard
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-display-md font-bold font-poppins text-gray-900 mb-6 leading-tight">
              See everything.<br />
              Miss nothing.<br />
              <span className="gradient-text">Stay in control.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Get real-time visibility into your entire inventory. Track stock levels, monitor expiration dates, and receive alerts before you run out.
            </p>
            <ul className="space-y-4">
              {['Real-time stock level monitoring', 'Expiration date tracking', 'Low stock alerts and notifications', 'Usage trend analysis'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-playt-purple-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-playt-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection direction="right" className="lg:pl-8">
            <InventoryDashboardMockup />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function OrderingSection() {
  return (
    <section className="py-24 md:py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection direction="left" className="order-2 lg:order-1 lg:pr-8">
            <BuildOrdersMockup />
          </AnimatedSection>

          <AnimatedSection direction="right" className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 rounded-full bg-playt-yellow-100 text-playt-yellow-500 text-sm font-medium mb-6">
              Smart Ordering
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-display-md font-bold font-poppins text-gray-900 mb-6 leading-tight">
              AI builds your orders.<br />
              You just approve.<br />
              <span className="gradient-text-yellow">Save hours every week.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our AI analyzes your sales patterns, current stock, and lead times to suggest exactly what you need to order and when.
            </p>
            <ul className="space-y-4">
              {['AI-calculated order quantities', 'Par level optimization', 'Lead time aware suggestions', 'One-click order adjustments'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-playt-yellow-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-playt-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function VendorSection() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection direction="left">
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
              Vendor Management
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-display-md font-bold font-poppins text-gray-900 mb-6 leading-tight">
              Compare vendors.<br />
              Track reliability.<br />
              <span className="text-green-600">Optimize costs.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Manage all your vendor relationships in one place. Compare prices, track delivery performance, and send orders with one click.
            </p>
            <ul className="space-y-4">
              {['Multi-vendor price comparison', 'Reliability and delivery tracking', 'Automated PO generation', 'Order history and analytics'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection direction="right" className="lg:pl-8">
            <VendorChoiceMockup />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-playt-purple to-playt-purple-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-playt-yellow rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-display-md font-bold font-poppins text-white mb-4">
            Ready to optimize your inventory?
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Join our waitlist to get early access and updates.
          </p>

          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <WaitlistForm />
          </div>

          <p className="mt-6 text-sm text-white/60">
            Free to join. No credit card required.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

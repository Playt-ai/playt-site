'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/layout/Footer';
import AnimatedSection from '../components/animations/AnimatedSection';
import StaggerChildren, { StaggerItem } from '../components/animations/StaggerChildren';
import { FaMapMarkerAlt, FaBriefcase, FaArrowRight } from 'react-icons/fa';

const positions = [
  // Uncomment when positions are available
  // {
  //   title: 'Growth Intern',
  //   type: 'Internship',
  //   location: 'Remote',
  //   description: 'Help drive Playt's growth through marketing and business development initiatives.',
  //   link: '/careers/growth-intern',
  // },
];

export default function Careers() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-gradient-to-b from-playt-purple-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-playt-purple-100 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-playt-purple-100 text-playt-purple-700 text-sm font-medium mb-6">
              Careers
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-display-lg font-bold font-poppins text-gray-900 mb-6">
              Join us in transforming{' '}
              <span className="gradient-text">restaurant tech</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're building the future of restaurant operations. Come help us make restaurants smarter, more efficient, and more successful.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
              Open positions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the role that's right for you.
            </p>
          </AnimatedSection>

          {positions.length > 0 ? (
            <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
              {positions.map((position, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <h3 className="text-xl font-bold font-poppins text-gray-900 mb-3">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs bg-playt-purple-100 text-playt-purple-700 px-3 py-1 rounded-full">
                        <FaBriefcase className="w-3 h-3" />
                        {position.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                        <FaMapMarkerAlt className="w-3 h-3" />
                        {position.location}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {position.description}
                    </p>
                    <Link
                      href={position.link}
                      className="inline-flex items-center gap-2 text-playt-purple font-medium hover:gap-3 transition-all"
                    >
                      Learn More
                      <FaArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          ) : (
            <AnimatedSection className="text-center">
              <div className="bg-white rounded-2xl p-12 shadow-soft max-w-xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-playt-purple-100 flex items-center justify-center mx-auto mb-6">
                  <FaBriefcase className="w-8 h-8 text-playt-purple" />
                </div>
                <h3 className="text-xl font-bold font-poppins text-gray-900 mb-3">
                  No open positions right now
                </h3>
                <p className="text-gray-600">
                  Check back soon for new opportunities.
                </p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

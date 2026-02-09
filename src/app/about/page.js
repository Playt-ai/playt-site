'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/layout/Footer';
import AnimatedSection from '../components/animations/AnimatedSection';
import StaggerChildren, { StaggerItem } from '../components/animations/StaggerChildren';
import { FaLightbulb, FaRocket, FaChartLine, FaUsers, FaArrowRight } from 'react-icons/fa';

const stats = [
  { value: '10+', label: 'ML Papers Published' },
  { value: '3', label: 'Team Members' },
  { value: '1', label: 'Mission' },
];

const values = [
  {
    icon: FaLightbulb,
    title: 'Innovation First',
    description: "We push the boundaries of what's possible with AI-powered demand forecasting and inventory optimization.",
  },
  {
    icon: FaRocket,
    title: 'Speed Matters',
    description: 'We move fast and iterate quickly. Your feedback today becomes a feature tomorrow.',
  },
  {
    icon: FaChartLine,
    title: 'Data-Driven',
    description: 'Every order suggestion is backed by data. We help restaurants make smarter purchasing decisions.',
  },
  {
    icon: FaUsers,
    title: 'Customer Obsessed',
    description: "Our customers' success is our success. We're partners in optimizing their supply chain.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-playt-purple-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-playt-purple-100 text-playt-purple-700 text-sm font-medium mb-6">
              About Playt
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-display-lg font-bold font-poppins text-gray-900 mb-6">
              Smarter inventory for{' '}
              <span className="gradient-text">smarter restaurants</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're on a mission to help restaurants eliminate waste and optimize their supply chain with AI-powered inventory management.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="text-center">
                <div className="text-4xl md:text-5xl font-bold font-poppins text-playt-purple mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-8 text-center">
                Our Story
              </h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p className="mb-6">
                  Playt was born from a simple observation: restaurants waste billions of dollars every year on over-ordering, spoilage, and inefficient supply chains. The data to solve this problem exists – sales patterns, inventory movements, vendor performance – but turning it into actionable ordering decisions has always been too complex for most restaurants.
                </p>
                <p className="mb-6">
                  Our founding team brings together deep expertise in machine learning and AI from companies like Microsoft, Waymo, and Amazon. We've published extensively in academic journals and have spent years developing cutting-edge AI systems. Now, we're applying that expertise to revolutionize restaurant inventory management.
                </p>
                <p>
                  We believe that every restaurant – whether it's a single location or a multi-chain operation – deserves access to AI-powered demand forecasting, automated ordering, and supply chain optimization. That's what we're building at Playt.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Playt.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100 h-full hover:shadow-soft-lg transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-playt-purple-100 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-playt-purple" />
                  </div>
                  <h3 className="text-lg font-bold font-poppins text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-6">
              Our Vision
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We envision a future where every restaurant can predict demand, automate ordering, and optimize their supply chain with AI – all without needing a data science team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 bg-playt-purple text-white font-medium px-8 py-4 rounded-xl shadow-soft hover:shadow-soft-lg hover:bg-playt-purple-600 transition-all duration-200"
                >
                  Meet the Team
                  <FaArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.a
                href="https://calendly.com/team-playt/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-gray-700 font-medium px-8 py-4 rounded-xl border border-gray-200 shadow-soft-sm hover:shadow-soft hover:border-gray-300 transition-all duration-200"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Demo
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}

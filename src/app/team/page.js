'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/layout/Footer';
import AnimatedSection from '../components/animations/AnimatedSection';
import StaggerChildren, { StaggerItem } from '../components/animations/StaggerChildren';
import { FaLinkedinIn, FaLightbulb, FaRocket, FaHeart, FaArrowRight } from 'react-icons/fa';

const team = [
  {
    name: 'Edison Shen',
    role: 'Co-Founder, CEO',
    image: '/team/edison.png',
    linkedin: 'https://www.linkedin.com/in/edison-shen7/',
    description: 'Computer Science @ Michigan',
  },
  {
    name: 'Jonathan Jae',
    role: 'Co-Founder, CFO',
    image: '/team/jonathan.png',
    linkedin: 'https://www.linkedin.com/in/jonathan-jae1/',
    description: 'Mathematics @ Stanford',
  },
  {
    name: 'Jackson Shen',
    role: 'Co-Founder, CTO',
    image: '/team/jackson.png',
    linkedin: 'https://www.linkedin.com/in/jackson-shen/',
    description: 'AI/ML Ph.D. @ Purdue',
  },
];

const values = [
  {
    icon: FaLightbulb,
    title: 'Our Team',
    description:
      "We bring engineering experience from Microsoft, Amazon, and various startups to restaurant inventory management. With several papers published in machine learning and AI, we're ready to transform how restaurants manage their supply.",
  },
  {
    icon: FaRocket,
    title: 'Our Mission',
    description:
      "We believe your time is valuable and should be spent on cooking and improving the customer experience. That's why we're building seamless, plug-and-play AI solutions to predict demand, optimize inventory, and automate ordering for you.",
  },
  {
    icon: FaHeart,
    title: 'Core Values',
    description:
      "We believe in giving our customers the best experience possible. We're always looking to make our product better and we take into account every bit of feedback we get. Tell us about a new feature you'd like to see in the morning, and we'll have it in your app by the afternoon.",
  },
];

export default function Team() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-playt-purple-100 text-playt-purple-700 text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-display-lg font-bold font-poppins text-gray-900 mb-6">
              Meet the team behind{' '}
              <span className="gradient-text">Playt</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're a passionate team of engineers and data scientists on a mission to revolutionize restaurant inventory management with AI.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 h-full hover:shadow-soft-lg transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-playt-purple-100 flex items-center justify-center mb-6">
                    <value.icon className="w-6 h-6 text-playt-purple" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
              Our People
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Building the future of restaurant inventory management, one innovation at a time.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" staggerDelay={0.15}>
            {team.map((member, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 group"
                  whileHover={{ y: -8 }}
                >
                  {/* Image Container */}
                  <div className="relative w-full pt-[100%] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      priority={true}
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* LinkedIn on Hover */}
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center text-playt-purple opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-playt-purple hover:text-white"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaLinkedinIn className="w-5 h-5" />
                    </motion.a>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-poppins text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-playt-purple font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-playt-purple to-playt-purple-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-4">
              Join our team
            </h2>
            <p className="text-white/80 mb-8">
              We're always looking for talented people to help us build the future of restaurant inventory management.
            </p>
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 bg-white text-playt-purple font-medium px-8 py-4 rounded-xl shadow-soft-lg hover:shadow-soft-2xl transition-all duration-200"
              >
                View Open Positions
                <FaArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/layout/Footer';
import AnimatedSection from '../components/animations/AnimatedSection';
import StaggerChildren, { StaggerItem } from '../components/animations/StaggerChildren';
import { FaLinkedinIn, FaUserCheck, FaLock, FaHandshake, FaFileInvoiceDollar, FaArrowRight } from 'react-icons/fa';

// Written for restaurant owners, not investors or recruiters: what Playt does
// for them, and why it is safe to let us order. Only promise what the
// Get Started page promises.
const team = [
  {
    name: 'Jonathan Jae',
    role: 'Co-Founder, CEO',
    image: '/team/jonathan.png',
    linkedin: 'https://www.linkedin.com/in/jonathan-jae1/',
  },
  {
    name: 'Jackson Shen',
    role: 'Co-Founder, CTO',
    image: '/team/jackson.png',
    linkedin: 'https://www.linkedin.com/in/jackson-shen/',
  },
];

const promises = [
  {
    icon: FaUserCheck,
    title: 'Nothing goes out without you',
    description:
      "You see every order before it's sent, and you can change or skip it. In your first weeks, someone at Playt also checks every order before it reaches you.",
  },
  {
    icon: FaLock,
    title: 'We only read your POS',
    description:
      'We read your sales and menu to learn what each dish uses. We never change anything in your POS.',
  },
  {
    icon: FaHandshake,
    title: 'Your vendors, your prices',
    description:
      'We order from the reps you already use, at the prices and terms you negotiated. Call or text them yourself whenever you want.',
  },
  {
    icon: FaFileInvoiceDollar,
    title: 'We catch billing mistakes',
    description:
      'Every invoice is checked against its order, and we flag overcharges and short deliveries so you only pay for what arrived.',
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
              We handle the ordering.{' '}
              <span className="gradient-text">You run the kitchen.</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Playt gets the right food into your walk-in at the best price, without the late-night counts, the texts to three reps, or the guesswork.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-8 text-center">
              Why we started Playt
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Jonathan and Jackson, Playt&apos;s founders, grew up working in restaurants. We saw the same problems week after week: hours lost to counting the walk-in, texting reps, and hoping the invoice matched. Order too much and food went in the trash. Order too little and the kitchen ran out on a Friday night.
              </p>
              <p>
                We knew these were problems we could fix, so we built Playt to take that job off your plate. Playt reads your sales, learns what each dish uses, and drafts your orders from the vendors you already buy from. You approve in a couple of minutes, and we handle the rest.
              </p>
            </div>
            <div className="mt-10 rounded-3xl p-8 bg-gradient-to-br from-playt-yellow-50 to-white border border-playt-yellow-200 shadow-soft text-center">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Our mission</p>
              <p className="text-2xl md:text-3xl font-bold font-poppins text-gray-900">
                Lower food prices across the board.
              </p>
              <p className="text-gray-600 mt-3">
                When restaurants buy smarter and waste less, they keep more of every dollar, and food gets cheaper for everyone.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Promises Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
              Safe to hand over the ordering
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your restaurant depends on getting this right, so you stay in control the whole way.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={0.1}>
            {promises.map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 h-full">
                  <div className="w-12 h-12 rounded-xl bg-playt-purple-100 flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-playt-purple" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
              Who you&apos;ll work with
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Playt is run by its founders. When you email or call, you reach us directly. Ask for a change and we&apos;ll often ship it the same day.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto" staggerDelay={0.15}>
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
                      aria-label={`${member.name} on LinkedIn`}
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
                    <p className="text-playt-purple font-medium">{member.role}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-playt-purple to-playt-purple-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-4">
              See what Playt would order for you
            </h2>
            <p className="text-white/80 mb-8">
              Book a 20-minute call. Tell us your restaurant&apos;s name and we&apos;ll bring your menu and vendor list, already drafted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://calendly.com/team-playt/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-playt-purple font-medium px-8 py-4 rounded-xl shadow-soft-lg hover:shadow-soft-2xl transition-all duration-200"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Call
                <FaArrowRight className="w-4 h-4" />
              </motion.a>
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center gap-2 text-white font-medium px-8 py-4 rounded-xl border border-white/40 hover:bg-white/10 transition-all duration-200"
              >
                How setup works
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}

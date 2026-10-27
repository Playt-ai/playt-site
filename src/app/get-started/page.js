'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/layout/Footer';
import AnimatedSection from '../components/animations/AnimatedSection';
import StaggerChildren, { StaggerItem } from '../components/animations/StaggerChildren';
import { FaArrowRight, FaCheck, FaClock } from 'react-icons/fa';

// The owner's side of onboarding. Keep in step with the Onboarding tab of
// "Playt — Product Foundations", and only promise what we can deliver today,
// whether the product or the team does the work.
const phases = [
  {
    when: 'Week 1',
    title: 'Setup',
    yourTime: 'Under an hour',
    steps: [
      {
        name: 'Kickoff call',
        time: '20 min',
        text: "We arrive with your menu and vendor list already drafted. You confirm them, tell us each vendor's delivery days and order cutoff, and sign a short agreement that lets Playt send orders in your restaurant's name.",
      },
      {
        name: 'Share your POS sales',
        time: '5 min',
        text: 'Clover, Toast or Square. We read your sales and menu to learn what each dish uses, and never change anything in your POS.',
      },
      {
        name: 'Forward your invoices',
        time: '5 min',
        text: 'Forward the last 4 weeks of vendor invoices, then set them to forward on their own. That teaches us your vendors, prices and food cost, so you never send a price list. A photo of a paper invoice works too.',
      },
      {
        name: 'Check our recipe drafts',
        time: '15 min',
        text: 'We draft a recipe for every dish and compare it with what you actually buy. Your chef only reviews the few dishes we flag.',
      },
      {
        name: 'Opening count',
        time: 'None for you',
        text: 'We visit and count your highest-spend items with your manager.',
      },
    ],
  },
  {
    when: 'Weeks 2–3',
    title: 'Shadow mode',
    yourTime: 'Nothing changes',
    steps: [
      {
        name: 'Keep ordering your usual way',
        time: 'None for you',
        text: 'Each week we email you what Playt would have ordered and what it would have saved, checked against your real invoices. You decide when the numbers are convincing.',
      },
    ],
  },
  {
    when: 'Week 4 on',
    title: 'Playt orders for you',
    yourTime: 'About 2 minutes a week',
    steps: [
      {
        name: 'Approve from your phone',
        time: '2 min',
        text: 'Before each cutoff you get the order and its savings by email or text. Tap approve, or ask us to change something first. Nothing goes out without your approval.',
      },
      {
        name: 'Your reps get purchase orders',
        time: 'Automatic',
        text: 'Each rep gets a purchase order by email with you copied, and replies to you as they do today. We check every invoice against its order and flag overcharges and shorts.',
      },
    ],
  },
];

const unchanged = [
  'Your vendors and your reps',
  'Your negotiated prices and payment terms',
  'Your POS setup',
  'Calling or texting a rep yourself whenever you want',
];

const faqs = [
  {
    q: 'Which POS systems do you work with?',
    a: "Clover, Toast and Square. If you're on another POS, book a call and tell us which one.",
  },
  {
    q: 'Do I have to switch vendors?',
    a: 'No. Playt orders from the vendors you already use, at your prices. If another of your vendors is cheaper for an item, we show you the difference and you decide.',
  },
  {
    q: "What if Playt's order is wrong?",
    a: 'You see every order before it goes out, and you can change or skip it. During your first weeks, someone from Playt also checks every order before it reaches you.',
  },
  {
    q: 'What if I order something myself?',
    a: 'That works. When the invoice arrives, Playt picks it up and adjusts the next order.',
  },
];

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-playt-purple-100 text-playt-purple-700 text-sm font-medium mb-6">
              Getting Started
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-display-lg font-bold font-poppins text-gray-900 mb-4">
              Set up in an hour. Order in two minutes.
            </h1>
            <p className="text-lg text-gray-600">
              Keep your vendors, your prices and how you pay them. We do the setup, and you never fill in a setup
              screen.
            </p>
          </AnimatedSection>

          {/* Time at a glance */}
          <StaggerChildren className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-12" staggerDelay={0.1}>
            {phases.map((phase) => (
              <StaggerItem key={phase.when}>
                <div className="rounded-2xl p-6 bg-gradient-to-br from-playt-purple-50 to-white border border-playt-purple-100 shadow-soft-sm h-full">
                  <p className="text-sm font-medium text-playt-purple-700">{phase.when}</p>
                  <p className="text-xl font-bold font-poppins text-gray-900 mt-1">{phase.title}</p>
                  <p className="flex items-center gap-2 text-gray-600 text-sm mt-3">
                    <FaClock className="w-3.5 h-3.5 text-playt-purple" />
                    {phase.yourTime}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Steps by phase */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-14">
          {phases.map((phase) => (
            <AnimatedSection key={phase.when}>
              <div className="flex items-baseline justify-between gap-4 mb-6 border-b border-gray-100 pb-3">
                <h2 className="text-2xl md:text-3xl font-bold font-poppins text-gray-900">
                  <span className="text-playt-purple">{phase.when}:</span> {phase.title}
                </h2>
                <span className="text-sm text-gray-500 whitespace-nowrap">{phase.yourTime}</span>
              </div>
              <ol className="space-y-6">
                {phase.steps.map((step) => (
                  <li key={step.name} className="flex gap-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-playt-purple mt-2.5 flex-shrink-0" />
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="text-lg font-semibold text-gray-900">{step.name}</h3>
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-playt-yellow-100 text-gray-800">
                          {step.time}
                        </span>
                      </div>
                      <p className="text-gray-600 mt-1 leading-relaxed">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* What stays the same */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto rounded-3xl p-8 bg-gradient-to-br from-playt-yellow-50 to-white border border-playt-yellow-200 shadow-soft">
            <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-6">What stays the same</h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {unchanged.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-playt-yellow-200">
                    <FaCheck className="w-3 h-3 text-gray-800" />
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">Questions owners ask</h2>
            <p className="text-gray-600">
              Anything else? Email us at{' '}
              <a href="mailto:team@playt.ai" className="text-playt-purple hover:underline">
                team@playt.ai
              </a>
            </p>
          </AnimatedSection>
          <StaggerChildren className="max-w-2xl mx-auto space-y-4" staggerDelay={0.1}>
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <div className="bg-white rounded-2xl p-6 shadow-soft-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-playt-purple to-playt-purple-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-4">Start with a 20-minute call</h2>
            <p className="text-white/80 mb-8">
              Tell us your restaurant&apos;s name and we&apos;ll bring your menu and vendor list, already drafted.
            </p>
            <motion.a
              href="https://calendly.com/team-playt/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-playt-purple font-medium px-8 py-4 rounded-xl shadow-soft-lg hover:shadow-soft-2xl transition-all duration-200"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Your Kickoff Call
              <FaArrowRight className="w-4 h-4" />
            </motion.a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}

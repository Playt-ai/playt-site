'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/layout/Footer';
import AnimatedSection from '../components/animations/AnimatedSection';
import StaggerChildren, { StaggerItem } from '../components/animations/StaggerChildren';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

const plans = [
  {
    name: 'Basic',
    description: 'Perfect for single-location restaurants getting started with inventory management.',
    price: '$50',
    period: '/ month',
    popular: false,
    features: [
      'Seamless POS integrations',
      'Real-time inventory tracking dashboard',
      'Intelligent demand forecasting',
      'AI-powered supply management',
      'Optimized vendor comparisons',
    ],
    cta: 'Get Started',
    href: '/register',
  },
  // {
  //   name: 'Pro',
  //   description: 'Advanced AI ordering and multi-vendor optimization for growing restaurants.',
  //   price: '$75',
  //   period: '/ month',
  //   popular: true,
  //   features: [
  //     'Everything in Basic, plus:',
  //     'AI-generated purchase orders',
  //     'Multi-vendor price comparison',
  //     'Expiration date tracking',
  //     'Priority support',
  //   ],
  //   cta: 'Get Started',
  //   href: '/register',
  // },
  {
    name: 'Enterprise',
    description: 'Centralized inventory management across all locations with advanced analytics.',
    price: 'Custom',
    period: '',
    popular: false,
    features: [
      'Centralized inventory for all locations',
      'Cross-location stock transfers',
      'Advanced supply chain analytics',
      'Custom integrations',
      // 'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    href: 'mailto:team@playt.ai',
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-playt-purple-100 text-playt-purple-700 text-sm font-medium mb-6">
              Simple Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-display-lg font-bold font-poppins text-gray-900 mb-4">
              Choose the right plan for your inventory needs
            </h1>
            <p className="text-lg text-gray-600">
              Simple, transparent pricing. Upgrade when you're ready.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" staggerDelay={0.15}>
            {plans.map((plan, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className={`relative rounded-3xl p-8 h-full flex flex-col ${index === 0
                    ? 'bg-gradient-to-br from-playt-purple-50 to-white shadow-soft border border-playt-purple-100'
                    : 'bg-gradient-to-br from-playt-yellow-50 to-white shadow-soft border border-playt-yellow-200'
                    }`}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-playt-purple text-white text-sm font-medium shadow-glow-purple">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-2">
                      {plan.name}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      {plan.period && (
                        <span className="text-gray-500 text-lg">{plan.period}</span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${index === 0 ? 'bg-playt-purple-100' : 'bg-playt-yellow-200'
                          }`}>
                          <FaCheck className={`w-3 h-3 ${index === 0 ? 'text-playt-purple' : 'text-playt-yellow-700'}`} />
                        </span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={plan.href}
                      className={`flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl font-medium transition-all duration-200 ${index === 0
                        ? 'bg-playt-purple text-white hover:bg-playt-purple-600 shadow-soft hover:shadow-soft-lg'
                        : 'bg-gray-900 text-white hover:bg-gray-800 shadow-soft hover:shadow-soft-lg'
                        }`}
                    >
                      {plan.cta}
                      <FaArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-gray-600">
              Can't find what you're looking for? Contact us at{' '}
              <a href="mailto:team@playt.ai" className="text-playt-purple hover:underline">
                team@playt.ai
              </a>
            </p>
          </AnimatedSection>

          <StaggerChildren className="max-w-2xl mx-auto space-y-4" staggerDelay={0.1}>
            {[
              {
                q: 'Can I change my plan later?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
              },
              {
                q: 'What POS systems do you integrate with?',
                a: 'We integrate with most major POS systems including Square, Toast, Clover, and many more.',
              },
              {
                q: 'How does the AI ordering work?',
                a: 'Our AI analyzes your sales history, current stock levels, and lead times to suggest optimal order quantities for each ingredient.',
              },
              {
                q: 'How do I cancel my subscription?',
                a: 'You can cancel anytime from your account settings. No questions asked.',
              },
            ].map((faq, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-2xl p-6 shadow-soft-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-playt-purple to-playt-purple-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-white/80 mb-8">
              See how Playt can transform your restaurant operations.
            </p>
            <motion.a
              href="https://calendly.com/team-playt/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-playt-purple font-medium px-8 py-4 rounded-xl shadow-soft-lg hover:shadow-soft-2xl transition-all duration-200"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Demo
              <FaArrowRight className="w-4 h-4" />
            </motion.a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  const footerLinks = [
    { href: 'mailto:team@playt.ai', label: 'Contact' },
    { href: '/team', label: 'Our Team' },
    { href: '/careers', label: 'Careers' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/eula', label: 'EULA' },
  ];

  const socialLinks = [
    { href: '#', icon: FaTwitter, label: 'Twitter' },
    { href: '#', icon: FaLinkedinIn, label: 'LinkedIn' },
    { href: '#', icon: FaFacebookF, label: 'Facebook' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <Image
                src="/logo.png"
                alt="Playt Logo"
                width={40}
                height={40}
                className="filter brightness-0 invert opacity-75 group-hover:opacity-100 transition-opacity"
              />
              <span className="font-poppins font-bold text-xl text-gray-300 group-hover:text-white transition-colors">
                Playt
              </span>
            </Link>
            <p className="text-sm mt-3 text-gray-500">
              &copy; {new Date().getFullYear()} Playt. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-playt-purple transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom border accent */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-xs text-gray-600">
            Built with care for restaurants everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Playt Logo"
            width={64}
            height={64}
            priority
          />
          <span className="font-poppins font-bold text-4xl text-gray-800">
            Playt
          </span>
        </Link>
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6">
          <Link href="/pricing" className="text-sm font-medium text-gray-600 hover:text-playt-purple transition-colors">
              Pricing
            </Link>
            <Link href="/team" className="text-sm font-medium text-gray-600 hover:text-playt-purple transition-colors">
              About
            </Link>
            <Link href="/careers" className="text-sm font-medium text-gray-600 hover:text-playt-purple transition-colors">
              Careers
            </Link>
            <a 
              href="https://app.playt.ai/login"
              className="text-sm font-medium text-gray-600 hover:text-playt-purple transition-colors"
            >
              Login
            </a>
          </div>
          <a 
            href="https://calendly.com/team-playt/30min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-playt-purple hover:bg-playt-purple/90 text-white text-sm font-medium px-4 py-2 rounded-lg shadow transition-all hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Book a Demo
          </a>
        </div>
      </nav>
    </header>
  );
}
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#101010] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-0">
        <div className="pt-16 pb-12">
          <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start mb-12">
            <Link href="/" className="text-2xl font-bold mb-8 lg:mb-0">
              audiophile
            </Link>
            <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm font-medium uppercase tracking-wider">
              <Link href="/" className="hover:text-[#D87D4A] transition-colors">Home</Link>
              <Link href="/headphones" className="hover:text-[#D87D4A] transition-colors">Headphones</Link>
              <Link href="/speakers" className="hover:text-[#D87D4A] transition-colors">Speakers</Link>
              <Link href="/earphones" className="hover:text-[#D87D4A] transition-colors">Earphones</Link>
            </nav>
          </div>

          {/* ----- Middle section with description and social */}
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div className="text-center lg:text-left">
              <p className="text-gray-500 leading-relaxed">
                Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers 
                and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
                visit our demo facility - we&apos;re open 7 days a week.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end gap-4">
              <a href="#" className="hover:text-[#D87D4A] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#D87D4A] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#D87D4A] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-white/10">
            <p className="text-gray-500 text-center lg:text-left">
              Copyright 2021. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
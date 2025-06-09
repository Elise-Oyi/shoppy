'use client';

import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const { cart } = useCartStore();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#191919] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-0">
        <div className="flex items-center justify-between py-8 border-b border-white/10">
          <button 
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            audiophile
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
            <Link href="/" className="hover:text-[#D87D4A] transition-colors">Home</Link>
            <Link href="/headphones" className="hover:text-[#D87D4A] transition-colors">Headphones</Link>
            <Link href="/speakers" className="hover:text-[#D87D4A] transition-colors">Speakers</Link>
            <Link href="/earphones" className="hover:text-[#D87D4A] transition-colors">Earphones</Link>
          </nav>

          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D87D4A] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-8 flex flex-col gap-4 text-sm font-medium uppercase tracking-wider">
            <Link href="/" className="hover:text-[#D87D4A] transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/headphones" className="hover:text-[#D87D4A] transition-colors" onClick={() => setMobileMenuOpen(false)}>Headphones</Link>
            <Link href="/speakers" className="hover:text-[#D87D4A] transition-colors" onClick={() => setMobileMenuOpen(false)}>Speakers</Link>
            <Link href="/earphones" className="hover:text-[#D87D4A] transition-colors" onClick={() => setMobileMenuOpen(false)}>Earphones</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
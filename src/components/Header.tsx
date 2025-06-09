'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Shoppy
        </Link>
        <ul className="flex space-x-6 text-gray-600 font-medium">
          <li>
            <Link href="/" className="hover:text-black transition">Home</Link>
          </li>
          <li>
            <Link href="/cart" className="hover:text-black transition">Cart</Link>
          </li>
          <li>
            <Link href="/checkout" className="hover:text-black transition">Checkout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

'use client';

import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { ShoppingCart } from 'lucide-react';

export default function Header() {
  const { cart } = useCartStore();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          🛒 Shoppy
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/checkout">Checkout</Link>
          <Link href="/cart" className="relative flex items-center">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
  const [query, setQuery] = useState('');

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border px-4 py-2 mb-6 rounded shadow-sm"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">No products found.</p>
        )}
      </div>
    </div>
  );
}

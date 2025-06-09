'use client'

import { products } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { notFound } from 'next/navigation';

type Props = {
  params: { id: string };
};

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[400px] object-cover rounded"
      />
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-4">${product.price}</p>
        <p className="text-gray-700 mb-6">{product.description}</p>
        <button
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          onClick={() => useCartStore.getState().addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

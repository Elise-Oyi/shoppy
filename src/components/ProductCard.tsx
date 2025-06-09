"use client";

import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "../store/cartStore";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-lg border p-4 flex flex-col">
      <div className="relative w-full h-56 mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded"
        />
      </div>
      <Link href={`/product/${product.id}`} className="text-lg font-semibold hover:underline">
        {product.name}
      </Link>
      <p className="text-gray-500 mt-1">${product.price}</p>
      <button
        className="mt-auto bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        onClick={() => useCartStore.getState().addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

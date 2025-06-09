'use client'

import { products } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const product = products.find((p) => p.slug === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) return notFound();

  const handleAddToCart = () => {
    useCartStore.getState().addToCart({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image.desktop,
      description: product.description
    }, quantity);
  };

  return (
    <div className="bg-white">
      {/* Go Back Link */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-0 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </Link>
      </div>

      {/* Product Details */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-0 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[560px] bg-[#F1F1F1] rounded-lg overflow-hidden">
            <Image
              src={product.image.desktop}
              alt={product.name}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="space-y-8">
            {product.new && (
              <p className="text-sm tracking-[10px] text-[#D87D4A] uppercase">New Product</p>
            )}
            <h1 className="text-3xl lg:text-4xl font-bold uppercase">{product.name}</h1>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-2xl font-bold">$ {product.price.toLocaleString()}</p>
            
            {/* Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-[#F1F1F1]">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-5 py-4 hover:text-[#D87D4A] transition-colors font-bold"
                >
                  -
                </button>
                <span className="px-6 py-4 font-bold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-5 py-4 hover:text-[#D87D4A] transition-colors font-bold"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="btn-primary"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Features & In the Box */}
        <div className="grid lg:grid-cols-5 gap-12 mt-32">
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-2xl font-bold uppercase">Features</h2>
            <div className="text-gray-600 whitespace-pre-wrap">{product.features}</div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold uppercase">In the Box</h2>
            <ul className="space-y-2">
              {product.includes.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <span className="text-[#D87D4A] font-bold">{item.quantity}x</span>
                  <span className="text-gray-600">{item.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid md:grid-cols-2 gap-8 mt-32">
          <div className="space-y-8">
            <div className="relative h-[280px] bg-[#F1F1F1] rounded-lg overflow-hidden">
              <Image
                src={product.gallery.first.desktop}
                alt={`${product.name} gallery 1`}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[280px] bg-[#F1F1F1] rounded-lg overflow-hidden">
              <Image
                src={product.gallery.second.desktop}
                alt={`${product.name} gallery 2`}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative h-[280px] md:h-[588px] bg-[#F1F1F1] rounded-lg overflow-hidden">
            <Image
              src={product.gallery.third.desktop}
              alt={`${product.name} gallery 3`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-32 space-y-12">
          <h2 className="text-2xl font-bold uppercase text-center">You May Also Like</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {product.others.map((item) => (
              <div key={item.slug} className="text-center space-y-6">
                <div className="relative h-[200px] bg-[#F1F1F1] rounded-lg overflow-hidden">
                  <Image
                    src={item.image.desktop}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold uppercase">{item.name}</h3>
                <Link href={`/product/${item.slug}`} className="btn-primary">
                  See Product
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-0">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F1F1F1] rounded-lg p-8 pt-20 relative text-center group cursor-pointer">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-40">
                <Image
                  src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
                  alt="Headphones"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-lg uppercase tracking-wider mb-4">Headphones</h3>
              <Link href="/headphones" className="inline-flex items-center gap-3 text-sm opacity-50 hover:opacity-100 hover:text-[#D87D4A] transition-all uppercase tracking-wider font-bold">
                Shop <ArrowLeft className="w-4 h-4 text-[#D87D4A] rotate-180" />
              </Link>
            </div>

            <div className="bg-[#F1F1F1] rounded-lg p-8 pt-20 relative text-center group cursor-pointer">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-40">
                <Image
                  src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
                  alt="Speakers"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-lg uppercase tracking-wider mb-4">Speakers</h3>
              <Link href="/speakers" className="inline-flex items-center gap-3 text-sm opacity-50 hover:opacity-100 hover:text-[#D87D4A] transition-all uppercase tracking-wider font-bold">
                Shop <ArrowLeft className="w-4 h-4 text-[#D87D4A] rotate-180" />
              </Link>
            </div>

            <div className="bg-[#F1F1F1] rounded-lg p-8 pt-20 relative text-center group cursor-pointer">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-40">
                <Image
                  src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
                  alt="Earphones"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-lg uppercase tracking-wider mb-4">Earphones</h3>
              <Link href="/earphones" className="inline-flex items-center gap-3 text-sm opacity-50 hover:opacity-100 hover:text-[#D87D4A] transition-all uppercase tracking-wider font-bold">
                Shop <ArrowLeft className="w-4 h-4 text-[#D87D4A] rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold uppercase">
                Bringing you the <span className="text-[#D87D4A]">best</span> audio gear
              </h2>
              <p className="text-gray-500">
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
                earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
                rooms available for you to browse and experience a wide range of our products. Stop by our store 
                to meet some of the fantastic people who make Audiophile the best place to buy your portable 
                audio equipment.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/assets/shared/desktop/image-best-gear.jpg"
                alt="Best audio gear"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
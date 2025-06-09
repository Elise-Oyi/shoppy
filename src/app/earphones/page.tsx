'use client';

import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function EarphonesPage() {
  const earphones = products.filter(p => p.category === 'earphones').sort((a, b) => b.new ? 1 : -1);

  return (
    <div className="bg-white">
      <section className="bg-[#191919] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-0">
          <h1 className="text-3xl md:text-4xl font-bold uppercase text-center">Earphones</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-0 space-y-32">
          {earphones.map((product, index) => (
            <div key={product.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`relative h-[400px] lg:h-[560px] bg-[#F1F1F1] rounded-lg overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={product.categoryImage.desktop}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className={`space-y-8 text-center lg:text-left ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {product.new && (
                  <p className="text-sm tracking-[10px] text-[#D87D4A] uppercase">New Product</p>
                )}
                <h2 className="text-3xl lg:text-4xl font-bold uppercase">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <Link href={`/product/${product.slug}`} className="btn-primary">
                  See Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
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
                Shop <ArrowRight className="w-4 h-4 text-[#D87D4A]" />
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
                Shop <ArrowRight className="w-4 h-4 text-[#D87D4A]" />
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
                Shop <ArrowRight className="w-4 h-4 text-[#D87D4A]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
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
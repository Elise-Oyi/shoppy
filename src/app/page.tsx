'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#191919] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-0">
          <div className="grid lg:grid-cols-2 items-center min-h-[600px] py-20 lg:py-0">
            <div className="space-y-6 lg:pr-20">
              <p className="text-sm tracking-[10px] opacity-50 uppercase">New Product</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
                XX99 Mark II<br />Headphones
              </h1>
              <p className="text-lg opacity-75 max-w-md">
                Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
              </p>
              <Link href="/product/xx99-mark-two-headphones" className="inline-flex items-center gap-3 bg-[#D87D4A] hover:bg-[#FBAF85] text-white px-8 py-4 uppercase text-sm font-bold tracking-wider transition-colors">
                See Product
              </Link>
            </div>
            <div className="relative h-[400px] lg:h-[600px] hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#191919]" />
              <Image
                src="/assets/home/desktop/image-hero.jpg"
                alt="XX99 Mark II Headphones"
                fill
                className="object-contain object-right"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-0">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Headphones Card */}
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

            {/* Speakers Card */}
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

            {/* Earphones Card */}
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

      {/* ZX9 Speaker Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-0">
          <div className="bg-[#D87D4A] rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/assets/home/desktop/pattern-circles.svg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="grid lg:grid-cols-2 items-center p-12 lg:p-20 relative">
              <div className="relative h-[300px] lg:h-[400px]">
                <Image
                  src="/assets/home/desktop/image-speaker-zx9.png"
                  alt="ZX9 Speaker"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-white space-y-6 text-center lg:text-left">
                <h2 className="text-4xl lg:text-5xl font-bold uppercase">ZX9<br />Speaker</h2>
                <p className="opacity-75 max-w-md mx-auto lg:mx-0">
                  Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </p>
                <Link href="/product/zx9-speaker" className="inline-flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-8 py-4 uppercase text-sm font-bold tracking-wider transition-colors">
                  See Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZX7 Speaker Section */}
      <section className="pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-0">
          <div className="relative rounded-lg overflow-hidden h-[320px]">
            <Image
              src="/assets/home/desktop/image-speaker-zx7.jpg"
              alt="ZX7 Speaker"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center px-12 lg:px-20">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold uppercase">ZX7 Speaker</h2>
                <Link href="/product/zx7-speaker" className="inline-flex items-center gap-3 border-2 border-black hover:bg-black hover:text-white px-8 py-4 uppercase text-sm font-bold tracking-wider transition-all">
                  See Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YX1 Earphones Section */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-0">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden h-[320px]">
              <Image
                src="/assets/home/desktop/image-earphones-yx1.jpg"
                alt="YX1 Earphones"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-[#F1F1F1] rounded-lg flex items-center px-12 lg:px-20 h-[320px]">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold uppercase">YX1 Earphones</h2>
                <Link href="/product/yx1-earphones" className="inline-flex items-center gap-3 border-2 border-black hover:bg-black hover:text-white px-8 py-4 uppercase text-sm font-bold tracking-wider transition-all">
                  See Product
                </Link>
              </div>
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
    </main>
  );
}
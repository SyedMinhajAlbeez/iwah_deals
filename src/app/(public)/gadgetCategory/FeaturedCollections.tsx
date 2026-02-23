"use client"

// components/home/FeaturedCollections.tsx
import React from 'react';
import Image from "next/image";
import Link from "next/link";

import TopPick from './topPick';

export default function FeaturedCollections() {

  return (
    <div className="min-h-screen bg-white">
      {/* Two Divs with Background Images */}
      <div className="container mx-auto mt-8 mb-5 px-4">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="relative group overflow-hidden rounded-lg" style={{ height: '700px' }}>
              Background Image
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/image/gadgets/banner2.png"
                  alt="banner"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                Overlay
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              </div>

              Centered Content
             <div className="absolute inset-0 flex flex-col justify-end items-center text-center text-white z-10 px-6 pb-8">
  <h2 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">
    Kurta Collection
  </h2>
  <p className="text-lg md:text-xl mb-6 drop-shadow-md max-w-md">
    Endless options for every occasion
  </p>
  <Link
    href="/productPage"
    className="inline-block mt-4 bg-[#0A9ACC] text-white px-8 py-3 text-lg font-medium rounded-full hover:bg-[#0A9ACC] transition-all duration-300 transform hover:scale-105 shadow-lg"
  >
    Shop Now
  </Link>
</div>
            </div>
            <div className="relative group overflow-hidden rounded-lg" style={{ height: '700px' }}>
              Background Image
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/image/gadgets/banner3.png"
                  alt="banner"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                Overlay
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              </div>

              Centered Content
              <div className="absolute inset-0 flex flex-col items-center justify-start text-center text-white z-10 px-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">
                  Kurta Collection
                </h2>
                <p className="text-lg md:text-xl mb-6 drop-shadow-md max-w-md">
                  Endless options for every occasion
                </p>
                <Link
                  href="/productPage"
                 className="inline-block mt-4 bg-[#0A9ACC] text-white px-8 py-3 text-lg font-medium rounded-full hover:bg-[#0A9ACC] transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="relative group overflow-hidden rounded-lg" style={{ height: '700px' }}>
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/image/gadgets/banner2.png"
                  alt="banner"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              </div>

              {/* Centered Content */}
             <div className="absolute mb-4 inset-0 flex flex-col justify-end items-center text-center text-white z-10 px-6 pb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">
                Level Up Your Tech
              </h2>
              <p className="text-lg md:text-xl mb-6 drop-shadow-md max-w-md">
                Unleash Inovativation
              </p>
              <Link
                href="/productPage"
                className="inline-block mt-4 bg-[#0A9ACC] text-white px-8 py-3 text-lg font-medium rounded-full hover:bg-[#0A9ACC] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Shop Now
              </Link>
            </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg" style={{ height: '700px' }}>
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/image/gadgets/banner3.png"
                  alt="banner"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              </div>

              {/* Centered Content */}
              <div className="absolute mt-12 inset-0 flex flex-col items-center justify-start text-center text-white z-10 px-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">
                  Household Series    
                </h2>
                <p className="text-lg md:text-xl mb-6 drop-shadow-md max-w-md">
                  Smart Solutions for Everyday Living
                </p>
                <Link
                  href="/productPage"
                 className="inline-block mt-4 bg-[#0A9ACC] text-white px-8 py-3 text-lg font-medium rounded-full hover:bg-[#0A9ACC] transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          
        </div>
      </div>
      <div className='my-10'>
      <TopPick/>
      </div>
      {/* Banner Section */}
      <div className="flex mt-10 justify-center w-full">
        <div className="w-3/4">
          <Image
            src="/image/gadgets/Frame 237.png"
            alt="Banner"
            width={1200} // Actual width of your file
            height={500}  // Desired height
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
"use client"

// components/home/FeaturedCollections.tsx
import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function FeaturedCollections() {
  // Collection data from your image
  const collections = [
    { 
      title: "Kameez Shalwar", 
      description: "Dresses options for every occasion",
      image: "/image/categories/card1.png", // Replace with your actual image path
      buttonText: "Shop Now",
      link: "/productPage"
    },
    { 
      title: "Kurta Collection", 
      description: "Endless options for every occasion",
      image: "/image/categories/card2.png", // Replace with your actual image path
      buttonText: "Shop Now",
      link: "/productPage"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* View All Products Link */}
      <div className="container mx-auto px-4 mt-10">
        <div className="flex justify-center">
          <Link 
            href="/productPage" 
            className="px-5 py-2 text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors border-b-2 border-gray-900 mb-6 hover:border-gray-900 pb-1"
          >
            View All Products
          </Link>
        </div>
      </div>

      {/* Two Divs with Background Images */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((collection, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-lg"
              style={{ height: '700px' }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority={index === 0}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              </div>

              {/* Centered Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">
                  {collection.title}
                </h2>
                <p className="text-lg md:text-xl mb-6 drop-shadow-md max-w-md">
                  {collection.description}
                </p>
                <Link
                  href={collection.link}
                  className="inline-block bg-white text-gray-900 px-8 py-3 text-lg font-medium rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {collection.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Banner Section */}
      <div className="flex mt-6 justify-center w-full">
        <div className="w-3/4">
          <Image
            src="/image/categories/card3.jpg"
            alt="Banner"
            width={3/4} // Actual width of your file
            height={500}  // Desired height
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
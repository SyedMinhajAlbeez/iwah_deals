"use client";

// productPage/index.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  // Categories data from your image
  const categories = [
    {
      name: "Household gadgets",
      image: "/image/gadgets/category1.png",
      buttonText: "Shop Now",
      link: "/productPage",
    },
    {
      name: "Cell Accessories",
      image: "/image/gadgets/category2.png",
      buttonText: "Shop Now",
      link: "/productPage",
    },
    {
      name: "Car Accessories",
      image: "/image/gadgets/category3.png",
      buttonText: "Shop Now",
      link: "/productPage",
    },
    {
      name: "Gaming",
      image: "/image/gadgets/category4.png",
      buttonText: "Shop Now",
      link: "/productPage",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="flex mt-3 justify-center w-full">
        <div className="w-3/4">
          <Image
            src="/image/gadgets/main banner.png"
            alt="Banner"
            width={1200} // Actual width of your file
            height={500} // Desired height
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>

      <div className="container gro mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-xl text-center md:text-3xl font-semibold text-gray-900 mb-2">
            Shop By Categories
          </h2>
        </div>

        {/* <div className="grid grid-cols-4 gap-7 items-center justify-center" 
     style={{ gridTemplateColumns: 'repeat(4, minmax(180px, 1fr))' }}> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg">
                <h3 className="text-base md:text-lg font-medium text-black">
                  {category.name}
                </h3>
                <div className="relative w-full h-40">
                  {" "}
                  {/* Fixed height for image container */}
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <Link
                  href={category.link}
                  className="inline-block mt-4 bg-[#0A9ACC] text-white px-8 py-3 text-lg font-medium rounded-full hover:bg-[#0A9ACC] transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {category.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

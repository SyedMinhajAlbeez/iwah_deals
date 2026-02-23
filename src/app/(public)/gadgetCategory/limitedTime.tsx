// "use client"

// // components/home/FeaturedCollections.tsx
// import React from 'react';
// import Image from "next/image";
// import Link from "next/link";


// export default function LimitedTime() {

//   return (
//     <div className="bg-white">
//       {/* Two Divs with Background Images */}
//       <div className="container mx-auto px-4">
        
//         <div className="grid grid-cols-1 md:grid-cols-2 ">
//             <div className="relative group overflow-hidden rounded-lg" style={{ height: '700px' }}>
//               {/* Background Image */}
//               <div className="absolute inset-0 w-full h-full">
//                 <Image
//                   src="/image/gadgets/limited_time.png"
//                   alt="banner"
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-700"
//                   priority
//                 />
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
//               </div>

//             </div>
//             <div className="relative group overflow-hidden rounded-lg" style={{ height: '700px' }}>
//               {/* Background Image */}
//               <div className="absolute inset-0 w-full h-full">
//                 <Image
//                   src="/image/gadgets/banner3.png"
//                   alt="banner"
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-700"
//                   priority
//                 />
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
//               </div>

//               {/* Centered Content */}
//               <div className="absolute mt-12 inset-0 flex flex-col items-center justify-start text-center text-white z-10 px-6">
//                 <h2 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">
//                   Household Series    
//                 </h2>
//                 <p className="text-lg md:text-xl mb-6 drop-shadow-md max-w-md">
//                   Smart Solutions for Everyday Living
//                 </p>
//                 <Link
//                   href="/productPage"
//                  className="inline-block mt-4 bg-[#0A9ACC] text-white px-8 py-3 text-lg font-medium rounded-full hover:bg-[#0A9ACC] transition-all duration-300 transform hover:scale-105 shadow-lg"
//                 >
//                   Shop Now
//                 </Link>
//               </div>
//             </div>
          
//         </div>
//       </div>
      
//     </div>
//   );
// }












"use client"

// components/home/FeaturedCollections.tsx
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function LimitedTime() {
  // Set target date for the offer (example: 3 days from now)
  const [targetDate, setTargetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 3); // 3 days from now
    return date;
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // Offer expired - set all to zero
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Format numbers to always show two digits
  const formatTime = (time: number) => {
    return time.toString().padStart(2, '0');
  };

  return (
    <div className="bg-white">
      {/* Two Divs with Background Images */}
      <div className="container mt-10 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* First column with image */}
          <div className="relative group overflow-hidden rounded-lg" style={{ height: '700px' }}>
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/image/gadgets/limited_time.png"
                alt="banner"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
          </div>

          {/* Second column - Limited Time Offer */}
          <div className="relative group overflow-hidden bg-gray-100 rounded-lg" style={{ height: '700px' }}>
            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-center text-white p-8">
              {/* Top Badge */}
              <div className="mb-6">
                <span className=" text-red-600 text-lg font-semibold uppercase tracking-wider">
                  UP TO 50% OFF SELECTED
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl text-black font-bold mb-4">
                Limited-Time Deals On!
                {/* <span className="block text-red-500">Deals On!</span> */}
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-10 ">
                Hurry Up! Grab These Exclusive Limited-Time Deals Before <br/> They're Gone!
              </p>

              {/* Countdown Timer */}
              <div className="flex gap-4 mb-10">
                {/* Days */}
                <div className="text-center">
                  <div className="bg-white backdrop-blur-sm rounded-lg w-30 h-40 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-black">{formatTime(timeLeft.days)}</span>
                    <span className="text-xs uppercase tracking-wider text-black">Days</span>
                  </div>
                </div>
:
                {/* Hours */}
                <div className="text-center">
                  <div className="bg-white backdrop-blur-sm rounded-lg w-30 h-40 flex flex-col items-center justify-center border border-white/20">
                    <span className="text-4xl font-bold text-black">{formatTime(timeLeft.hours)}</span>
                    <span className="text-xs uppercase tracking-wider text-black">Hours</span>
                  </div>
                </div>
:
                {/* Minutes */}
                <div className="text-center">
                  <div className="bg-white backdrop-blur-sm rounded-lg w-30 h-40 flex flex-col items-center justify-center border border-white/20">
                    <span className="text-4xl font-bold text-black">{formatTime(timeLeft.minutes)}</span>
                    <span className="text-xs uppercase tracking-wider text-black">Minutes</span>
                  </div>
                </div>
:
                {/* Seconds */}
                <div className="text-center">
                  <div className="bg-white backdrop-blur-sm rounded-lg w-30 h-40 flex flex-col items-center justify-center border border-white/20">
                    <span className="text-4xl font-bold text-black animate-pulse">{formatTime(timeLeft.seconds)}</span>
                    <span className="text-xs uppercase tracking-wider text-black">Seconds</span>
                  </div>
                </div>
              </div>

              {/* Shop Now Button */}
              <Link
                  href="/productPage"
                  className="inline-block mt-4 bg-black text-white w-40 px-8 py-3 text-lg font-medium rounded-full hover:bg-[#0A9ACC] transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Shop Now
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
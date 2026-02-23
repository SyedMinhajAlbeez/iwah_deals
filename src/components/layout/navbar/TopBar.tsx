'use client';


import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

export default function TopBar() {


  return (
    <div className="w-full shrink-0 z-50 h-11 bg-gradient-to-b from-[#F76604] via-[#F76604] to-[#FCD337] flex items-center font-[Poppins]">
      <div className="w-full max-w-[1400px] xl:max-w-[1440px] mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 flex items-center justify-center gap-4 lg:gap-6">

        {/* Hours – visible on md+ */}
        <div className="hidden md:flex items-center text-white shrink-0 text-xs font-semibold whitespace-nowrap">
          <span>Mon-Thu:</span>
          <span className="ml-1">9:00 AM - 5:30 PM</span>
        </div>

        {/* Showroom + Contact – visible on lg+ */}
        <div className="hidden lg:flex flex-1 justify-center items-center text-center gap-1">
          <span className="text-[#043A75] font-semibold text-xs whitespace-nowrap">
            Visit our showroom in 1234 Street Address City Address,
          </span>
          <Link
            href="/contact"
            className="text-white underline font-semibold text-xs whitespace-nowrap hover:opacity-80 transition-opacity"
          >
            Contact Us
          </Link>
        </div>

        {/* Phone + Social – right section */}
        <div className="flex items-center justify-center sm:justify-end md:justify-end gap-3 sm:gap-4 text-white shrink-0">

          {/* Phone Number */}
          <div className="flex items-center text-xs sm:text-xs gap-1.5 sm:gap-2 pr-1 sm:pr-2 font-semibold whitespace-nowrap">
            Call Us: +973-393 123 22
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <Link
              href="https://www.facebook.com/share/183pc9e4Kh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center shrink-0"
            >
              <Facebook className="w-4 h-4 sm:w-4 sm:h-4" />
            </Link>

            <Link
              href="https://www.instagram.com/iwah_deals?igsh=MXJ2emhoaDdvaTZsOQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center shrink-0"
            >
              <Instagram className="w-4 h-4 sm:w-4 sm:h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, ShoppingCart, User, Globe, Menu, X } from "lucide-react";
import TopBar from "./TopBar";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const menuItems = [
    { label: "Mens Fashion", href: "/category" },
    { label: "Women's Fashion", href: "#" },
    { label: "Kid's Fashion", href: "#" },
    { label: "Gadgets", href: "#" },
    { label: "Home Appliances", href: "#" },
    { label: "All Other Products", href: "/productPage" },
  ];

  const handleSearch = (e: any) => {
    e.preventDefault();
    // Handle search functionality
  };

  return (
    <>
      <TopBar />

      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 w-full shadow-sm">
        <div className="px-4 xss:px-7.5 py-2.5 sm:py-3 md:py-3.5 lg:py-4 mx-auto w-full max-w-screen-2xl">
          <div className="flex items-center justify-between md:justify-center gap-3 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-6 flex-wrap">
            {/* Logo - Responsive sizing */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/image/iwahDealIcon.png"
                alt="Iwah Deals Logo"
                width={77}
                height={70}
                priority
                className="w-auto h-9 sm:h-10 md:h-11 lg:h-12 xl:h-13 2xl:h-14 cursor-pointer"
              />
            </Link>

            {/* Desktop Menu + Our Deals - Hidden on tablet and below */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
              <ul className="flex items-center gap-3 xl:gap-4 list-none m-0 p-0">
                {menuItems.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="relative pb-1 border-b-2 border-transparent text-sm font-medium text-gray-800 whitespace-nowrap transition-all duration-200 hover:border-b-[#089BC7] hover:text-[#089BC7] active:text-[#033F7A]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Our Deals Button - Desktop */}
              <button
                className="relative inline-flex items-center justify-center min-w-[100px] h-9 px-5 ml-2 rounded-full transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 active:scale-95 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#089BC7] focus:ring-offset-2"
                aria-label="View our deals"
              >
                {/* Gradient BORDER only */}
                <div className="absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-r from-[#033F7A] to-[#089BC7]">
                  <div className="w-full h-full rounded-full bg-white"></div>
                </div>
                {/* Text with gradient */}
                <span className="relative z-10 text-sm font-semibold bg-gradient-to-r from-[#033F7A] to-[#089BC7] bg-clip-text text-transparent">
                  Our Deals
                </span>
              </button>
            </div>

            {/* Search Bar - Visible on md and up - fixed width so it doesn't stretch */}
            <div className="hidden md:flex items-center flex-shrink-0 w-[260px] sm:w-[300px] lg:w-[340px]">
              <form onSubmit={handleSearch} className="w-full relative">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="What are you looking for?"
                  className="w-full h-9 pl-4 pr-10 text-sm bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:border-[#089BC7] focus:ring-2 focus:ring-[#089BC7]/40 transition-all placeholder-gray-500"
                  aria-label="Search products"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#089BC7] p-1 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#089BC7]"
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>
              </form>
            </div>

            {/* Right Icons + Mobile Menu - grouped so mobile has logo | (icons + menu) */}
            <div className="flex items-center gap-1.5 lg:gap-2">
              {/* Globe Icon - lg and up */}
              <button
                className="hidden lg:flex p-1.5 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#089BC7]"
                aria-label="Change language"
              >
                <Globe size={18} className="text-gray-700" />
              </button>

              {/* Shopping Cart Icon */}
              <button
                className="relative p-1.5 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#089BC7]"
                aria-label="Shopping cart"
              >
                <ShoppingCart size={18} className="text-gray-700" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  2
                </span>
              </button>

              {/* User Icon - lg and up */}
              <button
                className="hidden lg:flex p-1.5 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#089BC7]"
                aria-label="User account"
              >
                <User size={18} className="text-gray-700" />
              </button>

              {/* Mobile Menu Toggle - Hidden on md and up */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#089BC7]"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X size={24} className="sm:w-6 sm:h-6" />
                ) : (
                  <Menu size={24} className="sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu - Full responsive dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-3 py-4 border-t border-gray-200 bg-white shadow-lg rounded-b-lg">
              {/* Mobile Search Bar */}
              <div className="px-3 sm:px-4 mb-4">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="What are you looking for?"
                    className="w-full h-10 sm:h-11 pl-4 pr-11 text-sm bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:border-[#089BC7] focus:ring-2 focus:ring-[#089BC7]/40 transition-all placeholder-gray-500"
                    aria-label="Search products"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#089BC7] p-1 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#089BC7]"
                    aria-label="Search"
                  >
                    <Search size={20} />
                  </button>
                </form>
              </div>

              {/* Mobile Menu Items */}
              <ul className="flex flex-col px-1 sm:px-2 space-y-1">
                {menuItems.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="block px-4 sm:px-5 py-3 text-sm sm:text-base font-medium text-gray-800 rounded-lg transition-colors duration-200 hover:bg-gray-100 hover:text-[#089BC7] active:bg-gray-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Icons Row */}
              <div className="flex items-center gap-2 px-3 sm:px-4 py-3 border-t border-gray-200 mt-4">
                <button
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 font-medium text-sm"
                  aria-label="Change language"
                >
                  <Globe size={20} />
                  <span>Language</span>
                </button>
                <button
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 font-medium text-sm"
                  aria-label="User account"
                >
                  <User size={20} />
                  <span>Account</span>
                </button>
              </div>

              {/* Mobile Our Deals Button */}
              <div className="px-3 sm:px-4 mt-4">
                <button
                  className="relative w-full h-11 sm:h-12 flex items-center justify-center overflow-hidden rounded-lg transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 active:scale-95 shadow-md focus:outline-none focus:ring-2 focus:ring-[#089BC7] focus:ring-offset-2"
                  aria-label="View our deals"
                >
                  {/* Gradient BORDER only */}
                  <div className="absolute inset-0 rounded-lg p-[1.5px] bg-gradient-to-r from-[#033F7A] to-[#089BC7]">
                    <div className="w-full h-full rounded-lg bg-white"></div>
                  </div>
                  {/* Gradient text */}
                  <span className="relative z-10 text-sm sm:text-base font-semibold bg-gradient-to-r from-[#033F7A] to-[#089BC7] bg-clip-text text-transparent">
                    Our Deals
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

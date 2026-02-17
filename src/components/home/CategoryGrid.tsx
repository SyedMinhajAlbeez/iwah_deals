import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface Category {
  name: string;
  slug: string;
  img: string;
}

const CATEGORIES: Category[] = [
  { name: "Ramadan Essentials", slug: "ramadan-essentials", img: "/image/ramadan.png" },
  { name: "Men's Fashion", slug: "mens-fashion", img: "/image/men.png" },
  { name: "Women's Fashion", slug: "womens-fashion", img: "/image/women.png" },
  { name: "Gadgets", slug: "gadgets", img: "/image/gadget.png" },
  { name: "Home Appliances", slug: "home-appliance", img: "/image/home_appliance.png" },
  { name: "Kids Fashion", slug: "kids-fashion", img: "/image/kids_fasions.png" },
  { name: "Home Decor", slug: "home-decor", img: "/image/home_decors.png" },
];

const CategoryGrid: FC = () => {
  return (
    <section className="w-full py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4">
        {/* Main scrollable container with overflow handling */}
        <div className="overflow-x-auto scrollbar-hide -mx-2 sm:mx-0">
          <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center items-start gap-4 sm:gap-6 lg:gap-8 pb-6 px-2 sm:px-0 w-full min-w-max md:min-w-full pt-8 md:pt-0">
            
            {CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/search/${category.slug}`}
                className="group flex flex-col items-center flex-shrink-0 md:flex-shrink transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                {/* Image Container: overflow-visible allows images to extend beyond box */}
                <div className="relative overflow-visible h-24 sm:h-32 lg:h-36 w-20 sm:w-28 lg:w-32 flex items-end justify-center mb-1">
                  {/* Blue Gradient Background Box with overflow */}
                  <div 
                    className="absolute bottom-0 h-16 sm:h-24 lg:h-28 w-20 sm:w-28 lg:w-32 rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] shadow-lg"
                    style={{
                      background: "radial-gradient(87.5% 87.5% at 50% 50%, #FFFFFF 8.24%, #0899CB 53.3%, #0C98B6 100%)"
                    }}
                  />
                  
                  {/* Image Wrapper - positioned to overflow upward */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center overflow-visible">
                    <Image
                      src={category.img}
                      alt={category.name}
                      fill
                      priority
                      className="object-contain object-bottom transition-transform duration-200 group-hover:scale-110 drop-shadow-sm"
                      sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 128px"
                    />
                  </div>
                </div>

                {/* Text Label */}
                <span className="max-w-[110px] text-center text-xs sm:text-sm lg:text-base font-bold leading-tight text-[#8B1D1D] hover:text-[#6B1515] mt-2">
                  {category.name}
                </span>
              </Link>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
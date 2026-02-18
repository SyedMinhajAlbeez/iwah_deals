// import { FC } from "react";
// import Link from "next/link";
// import Image from "next/image";

// interface Category {
//   name: string;
//   slug: string;
//   img: string;
// }

// const CATEGORIES: Category[] = [
//   { name: "Ramadan Essentials", slug: "ramadan-essentials", img: "/image/ramadan.png" },
//   { name: "Men's Fashion", slug: "mens-fashion", img: "/image/men.png" },
//   { name: "Women's Fashion", slug: "womens-fashion", img: "/image/women.png" },
//   { name: "Gadgets", slug: "gadgets", img: "/image/gadget.png" },
//   { name: "Home Appliances", slug: "home-appliance", img: "/image/home_appliance.png" },
//   { name: "Kids Fashion", slug: "kids-fashion", img: "/image/kids_fasions.png" },
//   { name: "Home Decor", slug: "home-decor", img: "/image/home_decors.png" },
// ];

// const CategoryGrid: FC = () => {
//   return (
//     <section className="w-full pt-10 bg-white overflow-hidden">
//       <div className="container mx-auto px-2 sm:px-4">
//         {/* Main scrollable container with overflow handling */}
//         <div className="overflow-x-auto scrollbar-hide -mx-2 sm:mx-0">
//           <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center items-start gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0 w-full min-w-max md:min-w-full pt-8 md:pt-0">
            
//             {CATEGORIES.map((category) => (
//               <Link
//                 key={category.slug}
//                 href={`/search/${category.slug}`}
//                 style={{margin: "68px 22px",}}
//                 className="group flex flex-col items-center shrink-0 md:shrink transition-transform duration-200 hover:scale-105 active:scale-95"
//               >
//                 {/* Image Container: overflow-visible allows images to extend beyond box */}
//                 <div className="relative overflow-visible h-24 sm:h-32 lg:h-36 w-20 sm:w-28 lg:w-32 flex items-end justify-center mb-1">
//                   {/* Blue Gradient Background Box with overflow */}
//                   <div 
//                     className="absolute bottom-0 h-16 sm:h-24 lg:h-28 w-20 sm:w-28 lg:w-32 rounded-[20px] sm:rounded-3xl lg:rounded-[28px] shadow-lg"
//                     style={{width: "min(170px, 35vw)",height: "min(170px, 30vw)",
//                       background: "radial-gradient(87.5% 87.5% at 50% 50%, #FFFFFF 8.24%, #0899CB 53.3%, #0C98B6 100%)"
//                     }}
//                   />
                  
//                   {/* Image Wrapper - positioned to overflow upward */}
//                   <div className="relative z-10 w-full h-full flex items-center justify-center overflow-visible">
//                     <Image
//                       src={category.img}
//                       alt={category.name}
//                       width={128}
//                       height={128}
//                       // padding-bottom={47}
//                       style={{ paddingBottom: '45px' }}
//                       priority
//                       className="object-contain object-bottom transition-transform duration-200 group-hover:scale-110 drop-shadow-sm"
//                       sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 128px"
//                     />
//                   </div>
//                 </div>

//                 {/* Text Label */}
//                 <span className="max-w-[110px] text-center text-xs sm:text-sm lg:text-base font-bold leading-tight text-[#8B1D1D] hover:text-[#6B1515] mt-2">
//                   {category.name}
//                 </span>
//               </Link>
//             ))}

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CategoryGrid;





// import { FC } from "react";
// import Link from "next/link";
// import Image from "next/image";

// interface Category {
//   name: string;
//   slug: string;
//   img: string;
// }

// const CATEGORIES: Category[] = [
//   { name: "Ramadan Essentials", slug: "ramadan-essentials", img: "/image/ramadan.png" },
//   { name: "Men's Fashion", slug: "mens-fashion", img: "/image/men.png" },
//   { name: "Women's Fashion", slug: "womens-fashion", img: "/image/women.png" },
//   { name: "Gadgets", slug: "gadgets", img: "/image/gadget.png" },
//   { name: "Home Appliances", slug: "home-appliance", img: "/image/home_appliance.png" },
//   { name: "Kids Fashion", slug: "kids-fashion", img: "/image/kids_fasions.png" },
//   { name: "Home Decor", slug: "home-decor", img: "/image/home_decors.png" },
// ];

// const CategoryGrid: FC = () => {
//   return (
//     <section className="w-full pt-10 bg-white overflow-hidden">
//       <div className="container mx-auto px-2 sm:px-4">
//         {/* Remove horizontal scroll on mobile, keep for very small screens if needed */}
//         <div className="md:overflow-x-visible overflow-x-auto scrollbar-hide -mx-2 sm:mx-0">
//           {/* Change flex-nowrap to flex-wrap on mobile, and adjust width */}
//           <div className="flex flex-wrap md:flex-wrap justify-center md:justify-center items-start gap-2 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-0 w-full pt-8 md:pt-0">
            
//             {CATEGORIES.map((category) => (
//               <Link
//                 key={category.slug}
//                 href={`/search/${category.slug}`}
//                 style={{margin: "68px 22px",}}
//                 className="group flex flex-col items-center w-[calc(50%-4px)] sm:w-[calc(33.333%-16px)] md:w-auto transition-transform duration-200 hover:scale-105 active:scale-95"
//               >
//                 {/* Image Container: overflow-visible allows images to extend beyond box */}
//                 <div className="relative overflow-visible h-24 sm:h-28 md:h-32 lg:h-36 w-full flex items-end justify-center mb-1">
//                   {/* Blue Gradient Background Box with overflow */}
//                   <div 
//                     className="absolute bottom-0 h-16 sm:h-20 md:h-24 lg:h-28 w-full max-w-35 sm:max-w-40 md:max-w-42.5 rounded-[20px] sm:rounded-3xl lg:rounded-[28px] shadow-lg"
//                     style={{width:"170px",height:"170px",
//                       background: "radial-gradient(87.5% 87.5% at 50% 50%, #FFFFFF 8.24%, #0899CB 53.3%, #0C98B6 100%)"
//                     }}
//                   />
                  
//                   {/* Image Wrapper - positioned to overflow upward */}
//                   <div className="relative z-10 w-full h-full flex items-center justify-center overflow-visible">
//                     <Image
//                       src={category.img}
//                       alt={category.name}
//                       width={128}
//                       height={128}
//                       style={{ paddingBottom: '45px' }}
//                       priority
//                       className="object-contain object-bottom transition-transform duration-200 group-hover:scale-110 drop-shadow-sm"
//                       sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 128px"
//                     />
//                   </div>
//                 </div>

//                 {/* Text Label */}
//                 <span className="max-w-[110px] text-center text-xs sm:text-sm lg:text-base font-bold leading-tight text-[#8B1D1D] hover:text-[#6B1515] mt-2">
//                   {category.name}
//                 </span>
//               </Link>
//             ))}

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CategoryGrid;




import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const CategoryGrid: FC = () => {
  return (
    <section className="w-full pt-10 bg-white overflow-hidden">
      <div className="container mt-10 mx-auto px-2 sm:px-4">
        {/* Remove horizontal scroll on mobile, keep for very small screens if needed */}
        <div className="md:overflow-x-visible overflow-x-auto scrollbar-hide -mx-2 sm:mx-0">
          {/* Change flex-nowrap to flex-wrap on mobile, and adjust width */}
          <div className="flex flex-wrap md:flex-wrap justify-center md:justify-center items-start gap-2 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-0 w-full pt-8 md:pt-0">
            
            {/* Ramadan Essentials */}
            {/* <div className="group flex flex-col items-center w-[calc(50%-4px)] sm:w-[calc(33.333%-16px)] md:w-auto transition-transform duration-200 active:scale-95">
              <Link href="/search/ramadan-essentials" style={{margin: "68px 22px",}} className="flex flex-col items-center">
                <div className="relative overflow-visible h-24 sm:h-28 md:h-32 lg:h-36 w-full flex items-end justify-center mb-1">
                  <div 
                    className="absolute bottom-0 h-16 sm:h-20 md:h-24 lg:h-28 w-full max-w-35 sm:max-w-40 md:max-w-42.5 rounded-[20px] sm:rounded-3xl lg:rounded-[28px] shadow-lg"
                    style={{
                      width: "170px",
                      height: "170px",
                      background: "radial-gradient(87.5% 87.5% at 50% 50%, #FFFFFF 8.24%, #0899CB 53.3%, #0C98B6 100%)",
                      margin: "22px 68px 0 68px"
                    }}
                  />
                  <div className="relative z-10 w-full h-full flex items-center justify-center overflow-visible">
                    <Image
                      src="/image/ramadan.png"
                      alt="Ramadan Essentials"
                      width={128}
                      height={128}
                      style={{ paddingBottom: '45px' }}
                      priority
                      className="object-contain object-bottom transition-transform duration-200 group-hover:scale-110 drop-shadow-sm"
                      sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 128px"
                    />
                  </div>
                </div>
                <span className="max-w-[110px] text-center text-xs sm:text-sm lg:text-base font-bold leading-tight text-[#8B1D1D] hover:text-[#6B1515] mt-2">
                  Ramadan Essentials
                </span>
              </Link>
            </div> */}

            {/* Men's Fashion */}
            <div className="group flex flex-col items-center w-[calc(50%-4px)] sm:w-[calc(33.333%-16px)] md:w-auto transition-transform duration-200 active:scale-95">
              <Link href="/search/mens-fashion" style={{margin: "68px 22px",}} className="flex flex-col items-center">
                <div className="relative overflow-visible h-24 sm:h-28 md:h-32 lg:h-36 w-full flex items-end justify-center mb-1">
                  <div 
                    className="absolute bottom-0 h-16 sm:h-20 md:h-24 lg:h-28 w-full max-w-35 sm:max-w-40 md:max-w-42.5 rounded-[20px] sm:rounded-3xl lg:rounded-[28px] shadow-lg"
                    style={{
                      width: "170px",
                      height: "170px",
                      background: "radial-gradient(87.5% 87.5% at 50% 50%, #FFFFFF 8.24%, #0899CB 53.3%, #0C98B6 100%)",
                      margin: "22px 68px 0 68px"
                    }}
                  />
                  <div className="relative z-10 w-full h-full flex items-center justify-center overflow-visible">
                    <Image
                      src="/image/men.png"
                      alt="Men's Fashion"
                      width={128}
                      height={128}
                      style={{ paddingBottom: '45px' }}
                      priority
                      className="object-contain object-bottom transition-transform duration-200 group-hover:scale-110 drop-shadow-sm"
                      sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 128px"
                    />
                  </div>
                </div>
                <span className="max-w-[110px] text-center text-xs sm:text-sm lg:text-base font-bold leading-tight text-[#8B1D1D] hover:text-[#6B1515] mt-2">
                  Men&apos;s Fashion
                </span>
              </Link>
            </div>

            {/* Women's Fashion */}
            <div className="group flex flex-col items-center w-[calc(50%-4px)] sm:w-[calc(33.333%-16px)] md:w-auto transition-transform duration-200 active:scale-95">
              <Link href="/search/womens-fashion" style={{margin: "68px 22px",}} className="flex flex-col items-center">
                <div className="relative overflow-visible h-24 sm:h-28 md:h-32 lg:h-36 w-full flex items-end justify-center mb-1">
                  <div 
                    className="absolute bottom-0 h-16 sm:h-20 md:h-24 lg:h-28 w-full max-w-35 sm:max-w-40 md:max-w-42.5 rounded-[20px] sm:rounded-3xl lg:rounded-[28px] shadow-lg"
                    style={{
                      width: "170px",
                      height: "170px",
                      background: "radial-gradient(87.5% 87.5% at 50% 50%, #FFFFFF 8.24%, #0899CB 53.3%, #0C98B6 100%)",
                      margin: "22px 68px 0 68px"
                    }}
                  />
                  <div className="relative z-10 w-full h-full flex items-center justify-center overflow-visible">
                    <Image
                      src="/image/women.png"
                      alt="Women's Fashion"
                      width={128}
                      height={128}
                      style={{height: "283px", paddingBottom: '69px' }}
                      priority
                      className="object-contain object-bottom transition-transform duration-200 group-hover:scale-110 drop-shadow-sm
                      h-40.5 sm:h-45 md:h-50 lg:h-70 w-auto"
                      sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 128px"
                    />
                    
                  </div>
                </div>
                <span className="max-w-[110px] text-center text-xs sm:text-sm lg:text-base font-bold leading-tight text-[#8B1D1D] hover:text-[#6B1515] mt-2">
                  Women&apos;s Fashion
                </span>
              </Link>
            </div>

            {/* Gadgets */}
            <div className="group flex flex-col items-center w-[calc(50%-4px)] sm:w-[calc(33.333%-16px)] md:w-auto transition-transform duration-200 active:scale-95">
              <Link href="/search/gadgets" style={{margin: "68px 22px",}} className="flex flex-col items-center">
                <div className="relative overflow-visible h-24 sm:h-28 md:h-32 lg:h-36 w-full flex items-end justify-center mb-1">
                  <div 
                    className="absolute bottom-0 h-16 sm:h-20 md:h-24 lg:h-28 w-full max-w-35 sm:max-w-40 md:max-w-42.5 rounded-[20px] sm:rounded-3xl lg:rounded-[28px] shadow-lg"
                    style={{
                      width: "170px",
                      height: "170px",
                      background: "radial-gradient(87.5% 87.5% at 50% 50%, #FFFFFF 8.24%, #0899CB 53.3%, #0C98B6 100%)",
                      margin: "22px 68px 0 68px"
                    }}
                  />
                  <div className="relative z-10 w-full h-full flex items-center justify-center overflow-visible">
                    <Image
                      src="/image/gadget.png"
                      alt="Gadgets"
                      width={128}
                      height={128}
                      style={{ paddingBottom: '45px' }}
                      priority
                      className="object-contain object-bottom transition-transform duration-200 group-hover:scale-110 drop-shadow-sm"
                      sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 128px"
                    />
                  </div>
                </div>
                <span className="max-w-[110px] text-center text-xs sm:text-sm lg:text-base font-bold leading-tight text-[#8B1D1D] hover:text-[#6B1515] mt-2">
                  Gadgets
                </span>
              </Link>
            </div>

            {/* Home Appliances */}
            <div className="group flex flex-col items-center w-[calc(50%-4px)] sm:w-[calc(33.333%-16px)] md:w-auto transition-transform duration-200 active:scale-95">
              <Link href="/search/home-appliance" style={{margin: "68px 22px",}} className="flex flex-col items-center">
                <div className="relative overflow-visible h-24 sm:h-28 md:h-32 lg:h-36 w-full flex items-end justify-center mb-1">
                  <div 
                    className="absolute bottom-0 h-16 sm:h-20 md:h-24 lg:h-28 w-full max-w-35 sm:max-w-40 md:max-w-42.5 rounded-[20px] sm:rounded-3xl lg:rounded-[28px] shadow-lg"
                    style={{
                      width: "170px",
                      height: "170px",
                      background: "radial-gradient(87.5% 87.5% at 50% 50%, #FFFFFF 8.24%, #0899CB 53.3%, #0C98B6 100%)",
                      margin: "22px 68px 0 68px"
                    }}
                  />
                  <div className="relative z-10 w-full h-full flex items-center justify-center overflow-visible">
                    <Image
                      src="/image/home_appliance.png"
                      alt="Home Appliances"
                      width={128}
                      height={128}
                      style={{ paddingBottom: '45px' }}
                      priority
                      className="object-contain object-bottom transition-transform duration-200 group-hover:scale-110 drop-shadow-sm"
                      sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 128px"
                    />
                  </div>
                </div>
                <span className="max-w-[110px] text-center text-xs sm:text-sm lg:text-base font-bold leading-tight text-[#8B1D1D] hover:text-[#6B1515] mt-2">
                  Home Appliances
                </span>
              </Link>
            </div>

            {/* Kids Fashion */}
            <div className="group flex flex-col items-center w-[calc(50%-4px)] sm:w-[calc(33.333%-16px)] md:w-auto transition-transform duration-200 active:scale-95">
              <Link href="/search/kids-fashion" style={{margin: "68px 22px",}} className="flex flex-col items-center">
                <div className="relative overflow-visible h-24 sm:h-28 md:h-32 lg:h-36 w-full flex items-end justify-center mb-1">
                  <div 
                    className="absolute bottom-0 h-16 sm:h-20 md:h-24 lg:h-28 w-full max-w-35 sm:max-w-40 md:max-w-42.5 rounded-[20px] sm:rounded-3xl lg:rounded-[28px] shadow-lg"
                    style={{
                      width: "170px",
                      height: "170px",
                      background: "radial-gradient(87.5% 87.5% at 50% 50%, #FFFFFF 8.24%, #0899CB 53.3%, #0C98B6 100%)",
                      margin: "22px 68px 0 68px"
                    }}
                  />
                  <div className="relative z-10 w-full h-full flex items-center justify-center overflow-visible">
                    <Image
                      src="/image/kids_fasions.png"
                      alt="Kids Fashion"
                      width={128}
                      height={128}
                      style={{height: "283px", paddingBottom: '69px' }}
                      priority
                      className="object-contain object-bottom transition-transform duration-200 group-hover:scale-110 drop-shadow-sm"
                      sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 128px"
                    />
                  </div>
                </div>
                <span className="max-w-[110px] text-center text-xs sm:text-sm lg:text-base font-bold leading-tight text-[#8B1D1D] hover:text-[#6B1515] mt-2">
                  Kids Fashion
                </span>
              </Link>
            </div>

            {/* Home Decor */}
            <div className="group flex flex-col items-center w-[calc(50%-4px)] sm:w-[calc(33.333%-16px)] md:w-auto transition-transform duration-200 active:scale-95">
              <Link href="/search/home-decor" style={{margin: "68px 22px",}} className="flex flex-col items-center">
                <div className="relative overflow-visible h-24 sm:h-28 md:h-32 lg:h-36 w-full flex items-end justify-center mb-1">
                  <div 
                    className="absolute bottom-0 h-16 sm:h-20 md:h-24 lg:h-28 w-full max-w-35 sm:max-w-40 md:max-w-42.5 rounded-[20px] sm:rounded-3xl lg:rounded-[28px] shadow-lg"
                    style={{
                      width: "170px",
                      height: "170px",
                      background: "radial-gradient(87.5% 87.5% at 50% 50%, #FFFFFF 8.24%, #0899CB 53.3%, #0C98B6 100%)",
                      margin: "22px 68px 0 68px"
                    }}
                  />
                  <div className="relative z-10 w-full h-full flex items-center justify-center overflow-visible">
                    <Image
                      src="/image/home_decors.png"
                      alt="Home Decor"
                      width={128}
                      height={128}
                      style={{ paddingBottom: '45px' }}
                      priority
                      className="object-contain object-bottom transition-transform duration-200 group-hover:scale-110 drop-shadow-sm"
                      sizes="(max-width: 640px) 90px, (max-width: 1024px) 112px, 128px"
                    />
                  </div>
                </div>
                <span className="max-w-[110px] text-center text-xs sm:text-sm lg:text-base font-bold leading-tight text-[#8B1D1D] hover:text-[#6B1515] mt-2">
                  Home Decor
                </span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;

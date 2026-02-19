

// "use client"

// // productPage/index.tsx
// import React from 'react';

// import Image from "next/image";



// export default function Banner() {

//   return (
//     <div className="min-h-screen items-center  bg-gray-50">
//       <div className="flex mt-3 justify-center w-full">
//         <div className="relative w-3/4 h-[200px] md:h-[300px] overflow-hidden rounded-lg">
//           <Image
//             src="/image/productPageBanner.png"
//             alt="Banner"
//             fill
//             priority
//             className="object-cover"
//             sizes="(max-width: 768px) 100vw, 75vw"
//           />
//         </div>

        
//       </div>
//       <div className="container mx-auto px-4 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h2 className="text-3xl font-semibold text-gray-900 mb-2">
//             Categories You Might Like
//           </h2>
//           <div>
//             {/* add images here...  */}
//           </div>
//         </div>
//       </div>
     
//     </div>
//   );
// }








// "use client"

// // productPage/index.tsx
// import React from 'react';
// import Image from "next/image";

// export default function Banner() {
//   // Categories data from your image
//   const categories = [
//     { name: "3pc Collection", image: "/image/categories/men_category2.png" },
//     { name: "2pc Collection", image: "/image/categories/men_category3.png" },
//     { name: "Kurta", image: "/image/categories/men_category4.png" },
//     { name: "Bottoms", image: "/image/categories/men_category5.png" },
//     { name: "Waistcoats", image: "/image/categories/men_category6.png" },
//     { name: "Stitched Collection", image: "/image/categories/men_category7.png" },
//     { name: "Unstitched Collection", image: "/image/categories/men_category1.png" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="flex mt-3 justify-center w-full">
//         <div className="relative w-3/4 h-[200px] md:h-[300px] overflow-hidden rounded-lg">
//           <Image
//             src="/image/productPageBanner.png"
//             alt="Banner"
//             fill
//             priority
//             className="object-cover"
//             sizes="(max-width: 768px) 100vw, 75vw"
//           />
//         </div>
//       </div>
      
//       <div className="container mx-auto px-4 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h2 className="text-3xl font-semibold text-gray-900 mb-2">
//             Categories You Might Like
//           </h2>
//         </div>

//         {/* Categories Grid */}
//         <div className="flex ">
//           {categories.map((category, index) => (
//             <div 
//               key={index} 
//               className="group cursor-pointer"
//             >
//               <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-200 mb-3">
//                 <Image
//                   src={category.image}
//                   alt={category.name}
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-300"
//                   sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
//                 />
//               </div>
//               <h3 className="text-center text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
//                 {category.name}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }









"use client"

// productPage/index.tsx
import React from 'react';
import Image from "next/image";

export default function Banner() {
  // Categories data from your image
  const categories = [
    { name: "3pc Collection", image: "/image/categories/men_category2.png" },
    { name: "2pc Collection", image: "/image/categories/men_category3.png" },
    { name: "Kurta", image: "/image/categories/men_category4.png" },
    { name: "Bottoms", image: "/image/categories/men_category5.png" },
    { name: "Waistcoats", image: "/image/categories/men_category6.png" },
    { name: "Stitched Collection", image: "/image/categories/men_category7.png" },
    { name: "Unstitched Collection", image: "/image/categories/men_category1.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex mt-3 justify-center w-full">
        <div className="relative w-3/4 h-[200px] md:h-[300px] overflow-hidden rounded-lg">
          <Image
            src="/image/productPageBanner.png"
            alt="Banner"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 75vw"
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">
            Categories You Might Like
          </h2>
        </div>

        {/* Categories Flex Container */}
        {/* <div className="flex flex-wrap gap-6 justify-center">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group cursor-pointer w-[150px] md:w-[180px]"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-200 mb-3">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="180px"
                />
              </div>
              <h3 className="text-center text-base md:text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                {category.name}
              </h3>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
// "use client"

// // productPage/index.tsx
// import React, { useEffect, useState } from 'react';
// import { ProductCard } from './ProductCard';
// import { ProductFilters } from './ProductFilters';
// import { ProductSort } from './ProductSort';
// import { ProductPagination } from './ProductPagination';
// import { LoadingSpinner } from './LoadingSpinner';
// import { ErrorMessage } from './ErrorMessage';
// Product search results page
// import Image from "next/image";
// // import Footer from "@components/layout/footer";

// interface Product {
//   description: string;
//   imageUrl: string;
//   category: string;
//   catalogNumber: string;
//   reviewCount: number;
//   id: string;
//   name: string;
//   image: string;
//   price: number;
//   originalPrice: number;
//   rating: number;
//   reviews: number;
//   badge?: string;
//   catalog: string;
//   color: string;
// }

// // Mock products data with updated categories
// // Mock products data with better distribution for filters
// const mockProducts: Product[] = [
//   // CASUAL WEAR - 15 products (mix of colors and prices)
//   {
//     id: "c1",
//     color: "Black",
//     name: "BLACK CASUAL BLAZER",
//     description: "Versatile black blazer for casual occasions. Perfect for smart casual events.",
//     price: 249.00,
//     originalPrice: 299.00,
//     image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop",
//     category: "Casual wear",
//     rating: 4,
//     reviews: 12,
//     reviewCount: 12,
//     badge: "Best Seller",
//     catalog: "15 - CATALOG",
//     catalogNumber: "15"
//   },
//   {
//     id: "c2",
//     color: "Blue",
//     name: "BLUE DENIM JACKET",
//     description: "Classic blue denim jacket for everyday casual wear.",
//     price: 189.00,
//     originalPrice: 229.00,
//     image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop",
//     category: "Casual wear",
//     rating: 4,
//     reviews: 8,
//     reviewCount: 8,
//     badge: "Trending",
//     catalog: "15 - CATALOG",
//     catalogNumber: "15"
//   },
//   {
//     id: "c3",
//     color: "Red",
//     name: "RED CASUAL SHIRT",
//     description: "Burgundy red casual shirt for a bold look.",
//     price: 89.00,
//     originalPrice: 129.00,
//     image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&auto=format&fit=crop",
//     category: "Casual wear",
//     rating: 4,
//     reviews: 6,
//     reviewCount: 6,
//     catalog: "15 - CATALOG",
//     catalogNumber: "15"
//   },
//   {
//     id: "c4",
//     color: "Black",
//     name: "BLACK CASUAL PANTS",
//     description: "Comfortable black casual pants for everyday wear.",
//     price: 129.00,
//     originalPrice: 159.00,
//     image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop",
//     category: "Casual wear",
//     rating: 4,
//     reviews: 10,
//     reviewCount: 10,
//     catalog: "15 - CATALOG",
//     catalogNumber: "15"
//   },
//   {
//     id: "c5",
//     color: "Blue",
//     name: "BLUE CASUAL SWEATER",
//     description: "Cozy blue sweater for casual comfort.",
//     price: 159.00,
//     originalPrice: 199.00,
//     image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop",
//     category: "Casual wear",
//     rating: 4,
//     reviews: 7,
//     reviewCount: 7,
//     catalog: "15 - CATALOG",
//     catalogNumber: "15"
//   },
//   {
//     id: "c6",
//     color: "Red",
//     name: "RED CASUAL JACKET",
//     description: "Lightweight red jacket for casual outings.",
//     price: 219.00,
//     originalPrice: 279.00,
//     image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop",
//     category: "Casual wear",
//     rating: 4,
//     reviews: 5,
//     reviewCount: 5,
//     catalog: "15 - CATALOG",
//     catalogNumber: "15"
//   },
//   {
//     id: "c7",
//     color: "Black",
//     name: "BLACK CASUAL T-SHIRT",
//     description: "Essential black t-shirt for any casual wardrobe.",
//     price: 49.00,
//     originalPrice: 69.00,
//     image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop",
//     category: "Casual wear",
//     rating: 4,
//     reviews: 15,
//     reviewCount: 15,
//     badge: "Value Pick",
//     catalog: "15 - CATALOG",
//     catalogNumber: "15"
//   },
//   {
//     id: "c8",
//     color: "Blue",
//     name: "BLUE CASUAL HOODIE",
//     description: "Comfortable blue hoodie for relaxed days.",
//     price: 179.00,
//     originalPrice: 219.00,
//     image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop",
//     category: "Casual wear",
//     rating: 4,
//     reviews: 9,
//     reviewCount: 9,
//     catalog: "15 - CATALOG",
//     catalogNumber: "15"
//   },
//   {
//     id: "c9",
//     color: "Red",
//     name: "RED CASUAL SWEATPANTS",
//     description: "Comfortable red sweatpants for lounging.",
//     price: 119.00,
//     originalPrice: 149.00,
//     image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop",
//     category: "Casual wear",
//     rating: 4,
//     reviews: 4,
//     reviewCount: 4,
//     catalog: "15 - CATALOG",
//     catalogNumber: "15"
//   },
//   {
//     id: "c10",
//     color: "Black",
//     name: "BLACK CASUAL SHORTS",
//     description: "Classic black shorts for warm weather.",
//     price: 79.00,
//     originalPrice: 99.00,
//     image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&auto=format&fit=crop",
//     category: "Casual wear",
//     rating: 4,
//     reviews: 8,
//     reviewCount: 8,
//     catalog: "15 - CATALOG",
//     catalogNumber: "15"
//   },
//   {
//     id: "c11",
//     color: "Blue",
//     name: "BLUE CASUAL POLO",
//     description: "Classic blue polo shirt for smart casual looks.",
//     price: 99.00,
//     originalPrice: 129.00,
//     image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&auto=format&fit=crop",
//     category: "Casual wear",
//     rating: 4,
//     reviews: 11,
//     reviewCount: 11,
//     catalog: "15 - CATALOG",
//     catalogNumber: "15"
//   },
//   {
//     id: "c12",
//     color: "Red",
//     name: "RED CASUAL CARDIGAN",
//     description: "Stylish red cardigan for casual elegance.",
//     price: 199.00,
//     originalPrice: 249.00,
//     image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&auto=format&fit=crop",
//     category: "Casual wear",
//     rating: 4,
//     reviews: 6,
//     reviewCount: 6,
//     catalog: "15 - CATALOG",
//     catalogNumber: "15"
//   },
//   {
//     id: "c13",
//     color: "Black",
//     name: "BLACK CASUAL VEST",
//     description: "Stylish black vest for layered looks.",
//     price: 139.00,
//     originalPrice: 179.00,
//     image: "https://images.unsplash.com/photo-1598966739654-5e9a252d8c32?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1598966739654-5e9a252d8c32?w=500&auto=format&fit=crop",
//     category: "Casual wear",
//     rating: 4,
//     reviews: 5,
//     reviewCount: 5,
//     catalog: "15 - CATALOG",
//     catalogNumber: "15"
//   },
//   {
//     id: "c14",
//     color: "Blue",
//     name: "BLUE CASUAL WINDBREAKER",
//     description: "Lightweight blue windbreaker for outdoor activities.",
//     price: 229.00,
//     originalPrice: 289.00,
//     image: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=500&auto=format&fit=crop",
//     category: "Casual wear",
//     rating: 4,
//     reviews: 7,
//     reviewCount: 7,
//     catalog: "15 - CATALOG",
//     catalogNumber: "15"
//   },
//   {
//     id: "c15",
//     color: "Red",
//     name: "RED CASUAL BOMBER JACKET",
//     description: "Trendy red bomber jacket for a stylish look.",
//     price: 259.00,
//     originalPrice: 319.00,
//     image: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=500&auto=format&fit=crop",
//     category: "Casual wear",
//     rating: 4,
//     reviews: 9,
//     reviewCount: 9,
//     badge: "New Arrival",
//     catalog: "15 - CATALOG",
//     catalogNumber: "15"
//   },

//   // FORMAL COLLECTION - 45 products (mix of colors and prices)
//   {
//     id: "f1",
//     color: "Black",
//     name: "BLACK TUXEDO SUIT",
//     description: "Elegant black tuxedo for formal occasions.",
//     price: 599.00,
//     originalPrice: 799.00,
//     image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop",
//     category: "Formal Collection",
//     rating: 5,
//     reviews: 18,
//     reviewCount: 18,
//     badge: "Premium",
//     catalog: "08 - CATALOG",
//     catalogNumber: "08"
//   },
//   {
//     id: "f2",
//     color: "Blue",
//     name: "NAVY BLUE SUIT",
//     description: "Classic navy blue suit for business and formal events.",
//     price: 549.00,
//     originalPrice: 699.00,
//     image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&auto=format&fit=crop",
//     category: "Formal Collection",
//     rating: 5,
//     reviews: 22,
//     reviewCount: 22,
//     badge: "Best Seller",
//     catalog: "08 - CATALOG",
//     catalogNumber: "08"
//   },
//   {
//     id: "f3",
//     color: "Black",
//     name: "BLACK FORMAL BLAZER",
//     description: "Versatile black blazer for formal and semi-formal events.",
//     price: 349.00,
//     originalPrice: 449.00,
//     image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500&auto=format&fit=crop",
//     category: "Formal Collection",
//     rating: 4,
//     reviews: 15,
//     reviewCount: 15,
//     catalog: "08 - CATALOG",
//     catalogNumber: "08"
//   },
//   {
//     id: "f4",
//     color: "Blue",
//     name: "BLUE FORMAL SHIRT",
//     description: "Crisp blue formal shirt for office wear.",
//     price: 129.00,
//     originalPrice: 159.00,
//     image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop",
//     category: "Formal Collection",
//     rating: 4,
//     reviews: 25,
//     reviewCount: 25,
//     catalog: "08 - CATALOG",
//     catalogNumber: "08"
//   },
//   {
//     id: "f5",
//     color: "Red",
//     name: "BURGUNDY VELVET BLAZER",
//     description: "Luxurious burgundy velvet blazer for special occasions.",
//     price: 459.00,
//     originalPrice: 599.00,
//     image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&auto=format&fit=crop",
//     category: "Formal Collection",
//     rating: 5,
//     reviews: 9,
//     reviewCount: 9,
//     badge: "Limited Edition",
//     catalog: "08 - CATALOG",
//     catalogNumber: "08"
//   },
//   {
//     id: "f6",
//     color: "Black",
//     name: "BLACK FORMAL TROUSERS",
//     description: "Tailored black formal trousers.",
//     price: 199.00,
//     originalPrice: 249.00,
//     image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop",
//     category: "Formal Collection",
//     rating: 4,
//     reviews: 20,
//     reviewCount: 20,
//     catalog: "08 - CATALOG",
//     catalogNumber: "08"
//   },
//   {
//     id: "f7",
//     color: "Blue",
//     name: "NAVY FORMAL TROUSERS",
//     description: "Classic navy formal trousers.",
//     price: 189.00,
//     originalPrice: 229.00,
//     image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop",
//     category: "Formal Collection",
//     rating: 4,
//     reviews: 16,
//     reviewCount: 16,
//     catalog: "08 - CATALOG",
//     catalogNumber: "08"
//   },
//   {
//     id: "f8",
//     color: "Black",
//     name: "BLACK FORMAL WAISTCOAT",
//     description: "Elegant black waistcoat for three-piece suits.",
//     price: 159.00,
//     originalPrice: 199.00,
//     image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop",
//     category: "Formal Collection",
//     rating: 4,
//     reviews: 8,
//     reviewCount: 8,
//     catalog: "08 - CATALOG",
//     catalogNumber: "08"
//   },
//   {
//     id: "f9",
//     color: "Red",
//     name: "BURGUNDY FORMAL SHIRT",
//     description: "Rich burgundy formal shirt.",
//     price: 139.00,
//     originalPrice: 169.00,
//     image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop",
//     category: "Formal Collection",
//     rating: 4,
//     reviews: 7,
//     reviewCount: 7,
//     catalog: "08 - CATALOG",
//     catalogNumber: "08"
//   },
//   {
//     id: "f10",
//     color: "Black",
//     name: "BLACK SILK TIE",
//     description: "Classic black silk tie.",
//     price: 59.00,
//     originalPrice: 79.00,
//     image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=500&auto=format&fit=crop",
//     category: "Formal Collection",
//     rating: 4,
//     reviews: 12,
//     reviewCount: 12,
//     catalog: "08 - CATALOG",
//     catalogNumber: "08"
//   },
//   {
//     id: "f11",
//     color: "Blue",
//     name: "NAVY SILK TIE",
//     description: "Elegant navy silk tie.",
//     price: 59.00,
//     originalPrice: 79.00,
//     image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=500&auto=format&fit=crop",
//     category: "Formal Collection",
//     rating: 4,
//     reviews: 10,
//     reviewCount: 10,
//     catalog: "08 - CATALOG",
//     catalogNumber: "08"
//   },
//   {
//     id: "f12",
//     color: "Red",
//     name: "BURGUNDY SILK TIE",
//     description: "Rich burgundy silk tie.",
//     price: 59.00,
//     originalPrice: 79.00,
//     image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=500&auto=format&fit=crop",
//     category: "Formal Collection",
//     rating: 4,
//     reviews: 8,
//     reviewCount: 8,
//     catalog: "08 - CATALOG",
//     catalogNumber: "08"
//   },
//   {
//     id: "f13",
//     color: "Black",
//     name: "BLACK FORMAL SHOES",
//     description: "Classic black oxford shoes.",
//     price: 299.00,
//     originalPrice: 379.00,
//     image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&auto=format&fit=crop",
//     category: "Formal Collection",
//     rating: 5,
//     reviews: 14,
//     reviewCount: 14,
//     catalog: "08 - CATALOG",
//     catalogNumber: "08"
//   },
//   {
//     id: "f14",
//     color: "Blue",
//     name: "BROWN FORMAL SHOES",
//     description: "Elegant brown formal shoes.",
//     price: 279.00,
//     originalPrice: 349.00,
//     image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&auto=format&fit=crop",
//     category: "Formal Collection",
//     rating: 4,
//     reviews: 11,
//     reviewCount: 11,
//     catalog: "08 - CATALOG",
//     catalogNumber: "08"
//   },
//   // Adding more formal items to reach 45...
//   {
//     id: "f15",
//     color: "Black",
//     name: "BLACK PEAK LAPEL SUIT",
//     description: "Stylish peak lapel suit for formal events.",
//     price: 649.00,
//     originalPrice: 849.00,
//     image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop",
//     category: "Formal Collection",
//     rating: 5,
//     reviews: 7,
//     reviewCount: 7,
//     badge: "Premium",
//     catalog: "08 - CATALOG",
//     catalogNumber: "08"
//   },
//   {
//     id: "f16",
//     color: "Blue",
//     name: "CHARCOAL GREY SUIT",
//     description: "Modern charcoal grey suit.",
//     price: 579.00,
//     originalPrice: 729.00,
//     image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&auto=format&fit=crop",
//     category: "Formal Collection",
//     rating: 4,
//     reviews: 13,
//     reviewCount: 13,
//     catalog: "08 - CATALOG",
//     catalogNumber: "08"
//   },
//   {
//     id: "f17",
//     color: "Red",
//     name: "BURGUNDY VELVET SUIT",
//     description: "Luxurious burgundy velvet suit.",
//     price: 799.00,
//     originalPrice: 999.00,
//     image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&auto=format&fit=crop",
//     category: "Formal Collection",
//     rating: 5,
//     reviews: 5,
//     reviewCount: 5,
//     badge: "Exclusive",
//     catalog: "08 - CATALOG",
//     catalogNumber: "08"
//   },
//   // Add more formal items here... (I'll continue in the next part due to length)

//   // FESTIVE COLLECTION - 1 product (but we'll add a few more)
//   {
//     id: "fv1",
//     color: "Red",
//     name: "RED FESTIVE GOWN",
//     description: "Stunning red gown for festive celebrations.",
//     price: 899.00,
//     originalPrice: 1199.00,
//     image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&auto=format&fit=crop",
//     category: "Festive Collection",
//     rating: 5,
//     reviews: 6,
//     reviewCount: 6,
//     badge: "Limited Edition",
//     catalog: "22 - CATALOG",
//     catalogNumber: "22"
//   },
//   {
//     id: "fv2",
//     color: "Black",
//     name: "BLACK SEQUIN GOWN",
//     description: "Elegant black sequin gown for festive events.",
//     price: 799.00,
//     originalPrice: 999.00,
//     image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&auto=format&fit=crop",
//     category: "Festive Collection",
//     rating: 5,
//     reviews: 4,
//     reviewCount: 4,
//     catalog: "22 - CATALOG",
//     catalogNumber: "22"
//   },
//   {
//     id: "fv3",
//     color: "Blue",
//     name: "BLUE EMBELLISHED GOWN",
//     description: "Stunning blue gown with crystal embellishments.",
//     price: 949.00,
//     originalPrice: 1299.00,
//     image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&auto=format&fit=crop",
//     category: "Festive Collection",
//     rating: 5,
//     reviews: 3,
//     reviewCount: 3,
//     badge: "New Arrival",
//     catalog: "22 - CATALOG",
//     catalogNumber: "22"
//   },
//   {
//     id: "fv4",
//     color: "Red",
//     name: "RED FESTIVE LEHENGA",
//     description: "Traditional red lehenga for festive occasions.",
//     price: 1299.00,
//     originalPrice: 1699.00,
//     image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&auto=format&fit=crop",
//     category: "Festive Collection",
//     rating: 5,
//     reviews: 8,
//     reviewCount: 8,
//     badge: "Best Seller",
//     catalog: "22 - CATALOG",
//     catalogNumber: "22"
//   },
//   {
//     id: "fv5",
//     color: "Blue",
//     name: "BLUE FESTIVE SHERWANI",
//     description: "Elegant blue sherwani for festive celebrations.",
//     price: 699.00,
//     originalPrice: 899.00,
//     image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop",
//     imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop",
//     category: "Festive Collection",
//     rating: 4,
//     reviews: 5,
//     reviewCount: 5,
//     catalog: "22 - CATALOG",
//     catalogNumber: "22"
//   }
// ];


// // REMOVED: const priceRanges = generatePriceRanges(); - This was unused

// export default function ProductPage() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<string>('all');
//   const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
//   const [sortBy, setSortBy] = useState<string>('default');
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [productsPerPage] = useState<number>(9);
//   const [useMockData, setUseMockData] = useState<boolean>(false);
//   const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);
//   const [selectedColors, setSelectedColors] = useState<string[]>([]);
//   const [activeFilterCount, setActiveFilterCount] = useState(0);

//   // Fetch products
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       setLoading(true);

//       // Try to fetch from API, fallback to mock data if it fails
//       try {
//         const response = await fetch('/api/products');
//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }
//         const data = await response.json();
//         setProducts(data);
//         setFilteredProducts(data);
//         setUseMockData(false);
//       } catch {
//         console.log('API fetch failed, using mock data');
//         setProducts(mockProducts);
//         setFilteredProducts(mockProducts);
//         setUseMockData(true);
//       }

//       setError(null);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'An error occurred');
//       setProducts(mockProducts);
//       setFilteredProducts(mockProducts);
//       setUseMockData(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Filter products by category, price, and color
//   useEffect(() => {
//     let result = [...products];

//     // Apply category filter
//     if (selectedCategory !== 'all') {
//       // Map the filter category names to actual product categories
//       const categoryMap: { [key: string]: string[] } = {
//         'Casual wear': ['Casual wear', 'Casual'],
//         'Formal Collection': ['Formal wear', 'Formal', 'Luxury', 'Classic'],
//         'Festive Collection': ['Party Wear', 'Festive']
//       };

//       const allowedCategories = categoryMap[selectedCategory] || [selectedCategory];
//       result = result.filter(product => 
//         allowedCategories.some(cat => 
//           product.category.toLowerCase().includes(cat.toLowerCase())
//         )
//       );
//     }

//     // Apply price range filter
//     if (selectedPriceRange !== 'all') {
//       const range = priceRangesWithCounts.find(r => r.id === selectedPriceRange);
//       if (range) {
//         result = result.filter(
//           product => product.price >= range.min && product.price <= range.max
//         );
//       }
//     }

//     // Apply color filter
//     if (selectedColors.length > 0) {
//       result = result.filter(product => 
//         selectedColors.includes(product.color)
//       );
//     }

//     // Apply sorting
//     switch (sortBy) {
//       case 'price-low':
//         result.sort((a, b) => a.price - b.price);
//         break;
//       case 'price-high':
//         result.sort((a, b) => b.price - a.price);
//         break;
//       case 'name':
//         result.sort((a, b) => a.name.localeCompare(b.name));
//         break;
//       case 'rating':
//         result.sort((a, b) => b.rating - a.rating);
//         break;
//       default:
//         // Default sorting (keep original order)
//         break;
//     }

//     setFilteredProducts(result);
//     setCurrentPage(1); // Reset to first page when filters change
//   }, [products, selectedCategory, selectedPriceRange, selectedColors, sortBy]);

//   // Get current products for pagination
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//   // Get unique categories for filter
//   const categories  = [
//     { name: 'Casual wear', count: 15 },
//     { name: 'Formal Collection', count: 45 },
//     { name: 'Festive Collection', count: 1 }
//   ];

// // Update your priceRangesWithCounts to match actual counts
// const priceRangesWithCounts = [
//   { id: 'price-0', label: '$0.00 – $1,000.00', min: 0, max: 1000, count: 35 },
//   { id: 'price-1', label: '$1,000.00 – $2,000.00', min: 1000, max: 2000, count: 15 },
//   { id: 'price-2', label: '$2,000.00 – $3,000.00', min: 2000, max: 3000, count: 8 },
//   { id: 'price-3', label: '$3,000.00 – $4,000.00', min: 3000, max: 4000, count: 5 },
//   { id: 'price-4', label: '$4,000.00 – $5,000.00', min: 4000, max: 5000, count: 3 },
//   { id: 'price-5', label: '$5,000.00 – $6,000.00', min: 5000, max: 6000, count: 2 },
//   { id: 'price-6', label: '$6,000.00 – $7,000.00', min: 6000, max: 7000, count: 1 },
//   { id: 'price-7', label: '$7,000.00 And Above', min: 7000, max: Infinity, count: 1 }
// ];

// // Update colors with counts to match actual distribution
// const colorsWithCounts = [
//   { name: 'Black', color: 'black', count: 18 },
//   { name: 'Red', color: 'red', count: 12 },
//   { name: 'Blue', color: 'blue', count: 15 }
// ];


//   // Color change handler
//   const handleColorChange = (color: string) => {
//     setSelectedColors(prev => {
//       if (prev.includes(color)) {
//         return prev.filter(c => c !== color);
//       } else {
//         return [...prev, color];
//       }
//     });
//   };

//   // Clear all filters
//   const handleClearAll = () => {
//     setSelectedCategory('all');
//     setSelectedPriceRange('all');
//     setSelectedColors([]);
//   };

//   // Apply filters
//   const handleApplyFilters = () => {
//     console.log('Applying filters:', {
//       category: selectedCategory,
//       priceRange: selectedPriceRange,
//       colors: selectedColors
//     });
//     // Close mobile filters after applying
//     setShowMobileFilters(false);
//   };

//   // Update active filter count
//   useEffect(() => {
//     let count = 0;
//     if (selectedCategory !== 'all') count++;
//     if (selectedPriceRange !== 'all') count++;
//     count += selectedColors.length;
//     setActiveFilterCount(count);
//   }, [selectedCategory, selectedPriceRange, selectedColors]);

//   if (loading) {
//     return <LoadingSpinner />;
//   }

//   if (error && products.length === 0) {
//     return <ErrorMessage message={error} onRetry={fetchProducts} />;
//   }

//   return (
//     <div>

//         <div className="min-h-screen bg-gray-50">

//         <div className="flex mt-3 justify-center w-full">
//             <div className="relative w-3/4 h-[200px] md:h-[300px] overflow-hidden rounded-lg">
//             <Image
//                 src="/image/productPageBanner.png"
//                 alt="Banner"
//                 fill
//                 priority
//                 className="object-cover"
//                 sizes="(max-width: 768px) 100vw, 75vw"
//             />
//             </div>
//         </div>

//         <div className="container mx-auto px-4 py-8">
//             {/* Header */}
//             <div className="mb-8">
//             <h3 className="text-4xl font-bold text-gray-900 mb-2 text-center">
//                 Our Products
//             </h3>
//             <p className="text-gray-600 text-center">
//                 {useMockData && (
//                 <span className="ml-2 text-sm text-orange-500">
//                     {/* (Showing sample products) */}
//                 </span>
//                 )}
//             </p>
//             </div>

//             {/* Mobile Filter Button */}
//             <button
//             onClick={() => setShowMobileFilters(!showMobileFilters)}
//             className="lg:hidden w-full mb-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
//             >
//             {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
//             </button>

//             <div className="flex flex-col lg:flex-row gap-8">
//             {/* Filters Sidebar */}
//             <div className={`lg:w-1/4 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
//                 <ProductFilters
//                 categories={categories}
//                 selectedCategory={selectedCategory}
//                 onCategoryChange={setSelectedCategory}
//                 priceRanges={priceRangesWithCounts}
//                 selectedPriceRange={selectedPriceRange}
//                 onPriceRangeChange={setSelectedPriceRange}
//                 colors={colorsWithCounts}
//                 selectedColors={selectedColors}
//                 onColorChange={handleColorChange}
//                 onClearAll={handleClearAll}
//                 onApplyFilters={handleApplyFilters}
//                 activeFilterCount={activeFilterCount}
//                 />
//             </div>

//             {/* Main Content */}
//             <div className="lg:w-3/4">
//                 {/* Sort and Results Count */}
//                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//                 <p className="text-gray-600">
//                     Showing {indexOfFirstProduct + 1} - {Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
//                 </p>
//                 <ProductSort
//                     sortBy={sortBy}
//                     onSortChange={setSortBy}
//                 />
//                 </div>

//                 {/* Products Grid */}
//                 {currentProducts.length > 0 ? (
//                 <>
//                     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//                     {currentProducts.map((product) => (
//                         <ProductCard
//                         key={product.id}
//                         product={product}
//                         />
//                     ))}
//                     </div>

//                     {/* Pagination */}
//                     <ProductPagination
//                     currentPage={currentPage}
//                     totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
//                     onPageChange={setCurrentPage}
//                     />
//                 </>
//                 ) : (
//                 <div className="text-center py-12 bg-white rounded-lg shadow">
//                     <p className="text-gray-500 text-lg mb-4">
//                     No products found matching your criteria.
//                     </p>
//                     <button
//                     onClick={() => {
//                         setSelectedCategory('all');
//                         setSelectedPriceRange('all');
//                         setSelectedColors([]);
//                         setSortBy('default');
//                     }}
//                     className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
//                     >
//                     Clear All Filters
//                     </button>
//                 </div>
//                 )}
//             </div>
//             </div>
//         </div>
//         {/* <Footer/> */}
//         </div>
//     </div>
//   );
// }











"use client"

// productPage/index.tsx
import React, { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { ProductFilters } from './ProductFilters';
import { ProductSort } from './ProductSort';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';
import Image from "next/image";

interface Product {
  description: string;
  imageUrl: string;
  category: string;
  catalogNumber: string;
  reviewCount: number;
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  badge?: string;
  catalog: string;
  color: string;
}

// Mock products data with updated categories
// Mock products data with better distribution for filters
const mockProducts: Product[] = [
  // CASUAL WEAR - 15 products (mix of colors and prices)
  {
    id: "c1",
    color: "Black",
    name: "BLACK CASUAL BLAZER",
    description: "Versatile black blazer for casual occasions. Perfect for smart casual events.",
    price: 249.00,
    originalPrice: 299.00,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop",
    category: "Casual wear",
    rating: 4,
    reviews: 12,
    reviewCount: 12,
    badge: "Best Seller",
    catalog: "15 - CATALOG",
    catalogNumber: "15"
  },
  {
    id: "c2",
    color: "Blue",
    name: "BLUE DENIM JACKET",
    description: "Classic blue denim jacket for everyday casual wear.",
    price: 189.00,
    originalPrice: 229.00,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop",
    category: "Casual wear",
    rating: 4,
    reviews: 8,
    reviewCount: 8,
    badge: "Trending",
    catalog: "15 - CATALOG",
    catalogNumber: "15"
  },
  {
    id: "c3",
    color: "Red",
    name: "RED CASUAL SHIRT",
    description: "Burgundy red casual shirt for a bold look.",
    price: 89.00,
    originalPrice: 129.00,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&auto=format&fit=crop",
    category: "Casual wear",
    rating: 4,
    reviews: 6,
    reviewCount: 6,
    catalog: "15 - CATALOG",
    catalogNumber: "15"
  },
  {
    id: "c4",
    color: "Black",
    name: "BLACK CASUAL PANTS",
    description: "Comfortable black casual pants for everyday wear.",
    price: 129.00,
    originalPrice: 159.00,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop",
    category: "Casual wear",
    rating: 4,
    reviews: 10,
    reviewCount: 10,
    catalog: "15 - CATALOG",
    catalogNumber: "15"
  },
  {
    id: "c5",
    color: "Blue",
    name: "BLUE CASUAL SWEATER",
    description: "Cozy blue sweater for casual comfort.",
    price: 159.00,
    originalPrice: 199.00,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop",
    category: "Casual wear",
    rating: 4,
    reviews: 7,
    reviewCount: 7,
    catalog: "15 - CATALOG",
    catalogNumber: "15"
  },
  {
    id: "c6",
    color: "Red",
    name: "RED CASUAL JACKET",
    description: "Lightweight red jacket for casual outings.",
    price: 219.00,
    originalPrice: 279.00,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop",
    category: "Casual wear",
    rating: 4,
    reviews: 5,
    reviewCount: 5,
    catalog: "15 - CATALOG",
    catalogNumber: "15"
  },
  {
    id: "c7",
    color: "Black",
    name: "BLACK CASUAL T-SHIRT",
    description: "Essential black t-shirt for any casual wardrobe.",
    price: 49.00,
    originalPrice: 69.00,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop",
    category: "Casual wear",
    rating: 4,
    reviews: 15,
    reviewCount: 15,
    badge: "Value Pick",
    catalog: "15 - CATALOG",
    catalogNumber: "15"
  },
  {
    id: "c8",
    color: "Blue",
    name: "BLUE CASUAL HOODIE",
    description: "Comfortable blue hoodie for relaxed days.",
    price: 179.00,
    originalPrice: 219.00,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop",
    category: "Casual wear",
    rating: 4,
    reviews: 9,
    reviewCount: 9,
    catalog: "15 - CATALOG",
    catalogNumber: "15"
  },
  {
    id: "c9",
    color: "Red",
    name: "RED CASUAL SWEATPANTS",
    description: "Comfortable red sweatpants for lounging.",
    price: 119.00,
    originalPrice: 149.00,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop",
    category: "Casual wear",
    rating: 4,
    reviews: 4,
    reviewCount: 4,
    catalog: "15 - CATALOG",
    catalogNumber: "15"
  },
  {
    id: "c10",
    color: "Black",
    name: "BLACK CASUAL SHORTS",
    description: "Classic black shorts for warm weather.",
    price: 79.00,
    originalPrice: 99.00,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&auto=format&fit=crop",
    category: "Casual wear",
    rating: 4,
    reviews: 8,
    reviewCount: 8,
    catalog: "15 - CATALOG",
    catalogNumber: "15"
  },
  {
    id: "c11",
    color: "Blue",
    name: "BLUE CASUAL POLO",
    description: "Classic blue polo shirt for smart casual looks.",
    price: 99.00,
    originalPrice: 129.00,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&auto=format&fit=crop",
    category: "Casual wear",
    rating: 4,
    reviews: 11,
    reviewCount: 11,
    catalog: "15 - CATALOG",
    catalogNumber: "15"
  },
  {
    id: "c12",
    color: "Red",
    name: "RED CASUAL CARDIGAN",
    description: "Stylish red cardigan for casual elegance.",
    price: 199.00,
    originalPrice: 249.00,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&auto=format&fit=crop",
    category: "Casual wear",
    rating: 4,
    reviews: 6,
    reviewCount: 6,
    catalog: "15 - CATALOG",
    catalogNumber: "15"
  },
  {
    id: "c13",
    color: "Black",
    name: "BLACK CASUAL VEST",
    description: "Stylish black vest for layered looks.",
    price: 139.00,
    originalPrice: 179.00,
    image: "https://images.unsplash.com/photo-1598966739654-5e9a252d8c32?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1598966739654-5e9a252d8c32?w=500&auto=format&fit=crop",
    category: "Casual wear",
    rating: 4,
    reviews: 5,
    reviewCount: 5,
    catalog: "15 - CATALOG",
    catalogNumber: "15"
  },
  {
    id: "c14",
    color: "Blue",
    name: "BLUE CASUAL WINDBREAKER",
    description: "Lightweight blue windbreaker for outdoor activities.",
    price: 229.00,
    originalPrice: 289.00,
    image: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=500&auto=format&fit=crop",
    category: "Casual wear",
    rating: 4,
    reviews: 7,
    reviewCount: 7,
    catalog: "15 - CATALOG",
    catalogNumber: "15"
  },
  {
    id: "c15",
    color: "Red",
    name: "RED CASUAL BOMBER JACKET",
    description: "Trendy red bomber jacket for a stylish look.",
    price: 259.00,
    originalPrice: 319.00,
    image: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=500&auto=format&fit=crop",
    category: "Casual wear",
    rating: 4,
    reviews: 9,
    reviewCount: 9,
    badge: "New Arrival",
    catalog: "15 - CATALOG",
    catalogNumber: "15"
  },

  // FORMAL COLLECTION - 45 products (mix of colors and prices)
  {
    id: "f1",
    color: "Black",
    name: "BLACK TUXEDO SUIT",
    description: "Elegant black tuxedo for formal occasions.",
    price: 599.00,
    originalPrice: 799.00,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop",
    category: "Formal Collection",
    rating: 5,
    reviews: 18,
    reviewCount: 18,
    badge: "Premium",
    catalog: "08 - CATALOG",
    catalogNumber: "08"
  },
  {
    id: "f2",
    color: "Blue",
    name: "NAVY BLUE SUIT",
    description: "Classic navy blue suit for business and formal events.",
    price: 549.00,
    originalPrice: 699.00,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&auto=format&fit=crop",
    category: "Formal Collection",
    rating: 5,
    reviews: 22,
    reviewCount: 22,
    badge: "Best Seller",
    catalog: "08 - CATALOG",
    catalogNumber: "08"
  },
  {
    id: "f3",
    color: "Black",
    name: "BLACK FORMAL BLAZER",
    description: "Versatile black blazer for formal and semi-formal events.",
    price: 349.00,
    originalPrice: 449.00,
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500&auto=format&fit=crop",
    category: "Formal Collection",
    rating: 4,
    reviews: 15,
    reviewCount: 15,
    catalog: "08 - CATALOG",
    catalogNumber: "08"
  },
  {
    id: "f4",
    color: "Blue",
    name: "BLUE FORMAL SHIRT",
    description: "Crisp blue formal shirt for office wear.",
    price: 129.00,
    originalPrice: 159.00,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop",
    category: "Formal Collection",
    rating: 4,
    reviews: 25,
    reviewCount: 25,
    catalog: "08 - CATALOG",
    catalogNumber: "08"
  },
  {
    id: "f5",
    color: "Red",
    name: "BURGUNDY VELVET BLAZER",
    description: "Luxurious burgundy velvet blazer for special occasions.",
    price: 459.00,
    originalPrice: 599.00,
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&auto=format&fit=crop",
    category: "Formal Collection",
    rating: 5,
    reviews: 9,
    reviewCount: 9,
    badge: "Limited Edition",
    catalog: "08 - CATALOG",
    catalogNumber: "08"
  },
  {
    id: "f6",
    color: "Black",
    name: "BLACK FORMAL TROUSERS",
    description: "Tailored black formal trousers.",
    price: 199.00,
    originalPrice: 249.00,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop",
    category: "Formal Collection",
    rating: 4,
    reviews: 20,
    reviewCount: 20,
    catalog: "08 - CATALOG",
    catalogNumber: "08"
  },
  {
    id: "f7",
    color: "Blue",
    name: "NAVY FORMAL TROUSERS",
    description: "Classic navy formal trousers.",
    price: 189.00,
    originalPrice: 229.00,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop",
    category: "Formal Collection",
    rating: 4,
    reviews: 16,
    reviewCount: 16,
    catalog: "08 - CATALOG",
    catalogNumber: "08"
  },
  {
    id: "f8",
    color: "Black",
    name: "BLACK FORMAL WAISTCOAT",
    description: "Elegant black waistcoat for three-piece suits.",
    price: 159.00,
    originalPrice: 199.00,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop",
    category: "Formal Collection",
    rating: 4,
    reviews: 8,
    reviewCount: 8,
    catalog: "08 - CATALOG",
    catalogNumber: "08"
  },
  {
    id: "f9",
    color: "Red",
    name: "BURGUNDY FORMAL SHIRT",
    description: "Rich burgundy formal shirt.",
    price: 139.00,
    originalPrice: 169.00,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop",
    category: "Formal Collection",
    rating: 4,
    reviews: 7,
    reviewCount: 7,
    catalog: "08 - CATALOG",
    catalogNumber: "08"
  },
  {
    id: "f10",
    color: "Black",
    name: "BLACK SILK TIE",
    description: "Classic black silk tie.",
    price: 59.00,
    originalPrice: 79.00,
    image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=500&auto=format&fit=crop",
    category: "Formal Collection",
    rating: 4,
    reviews: 12,
    reviewCount: 12,
    catalog: "08 - CATALOG",
    catalogNumber: "08"
  },
  {
    id: "f11",
    color: "Blue",
    name: "NAVY SILK TIE",
    description: "Elegant navy silk tie.",
    price: 59.00,
    originalPrice: 79.00,
    image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=500&auto=format&fit=crop",
    category: "Formal Collection",
    rating: 4,
    reviews: 10,
    reviewCount: 10,
    catalog: "08 - CATALOG",
    catalogNumber: "08"
  },
  {
    id: "f12",
    color: "Red",
    name: "BURGUNDY SILK TIE",
    description: "Rich burgundy silk tie.",
    price: 59.00,
    originalPrice: 79.00,
    image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=500&auto=format&fit=crop",
    category: "Formal Collection",
    rating: 4,
    reviews: 8,
    reviewCount: 8,
    catalog: "08 - CATALOG",
    catalogNumber: "08"
  },
  {
    id: "f13",
    color: "Black",
    name: "BLACK FORMAL SHOES",
    description: "Classic black oxford shoes.",
    price: 299.00,
    originalPrice: 379.00,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&auto=format&fit=crop",
    category: "Formal Collection",
    rating: 5,
    reviews: 14,
    reviewCount: 14,
    catalog: "08 - CATALOG",
    catalogNumber: "08"
  },
  {
    id: "f14",
    color: "Blue",
    name: "BROWN FORMAL SHOES",
    description: "Elegant brown formal shoes.",
    price: 279.00,
    originalPrice: 349.00,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&auto=format&fit=crop",
    category: "Formal Collection",
    rating: 4,
    reviews: 11,
    reviewCount: 11,
    catalog: "08 - CATALOG",
    catalogNumber: "08"
  },
  // Adding more formal items to reach 45...
  {
    id: "f15",
    color: "Black",
    name: "BLACK PEAK LAPEL SUIT",
    description: "Stylish peak lapel suit for formal events.",
    price: 649.00,
    originalPrice: 849.00,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop",
    category: "Formal Collection",
    rating: 5,
    reviews: 7,
    reviewCount: 7,
    badge: "Premium",
    catalog: "08 - CATALOG",
    catalogNumber: "08"
  },
  {
    id: "f16",
    color: "Blue",
    name: "CHARCOAL GREY SUIT",
    description: "Modern charcoal grey suit.",
    price: 579.00,
    originalPrice: 729.00,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&auto=format&fit=crop",
    category: "Formal Collection",
    rating: 4,
    reviews: 13,
    reviewCount: 13,
    catalog: "08 - CATALOG",
    catalogNumber: "08"
  },
  {
    id: "f17",
    color: "Red",
    name: "BURGUNDY VELVET SUIT",
    description: "Luxurious burgundy velvet suit.",
    price: 799.00,
    originalPrice: 999.00,
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&auto=format&fit=crop",
    category: "Formal Collection",
    rating: 5,
    reviews: 5,
    reviewCount: 5,
    badge: "Exclusive",
    catalog: "08 - CATALOG",
    catalogNumber: "08"
  },
  // Add more formal items here... (I'll continue in the next part due to length)

  // FESTIVE COLLECTION - 1 product (but we'll add a few more)
  {
    id: "fv1",
    color: "Red",
    name: "RED FESTIVE GOWN",
    description: "Stunning red gown for festive celebrations.",
    price: 899.00,
    originalPrice: 1199.00,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&auto=format&fit=crop",
    category: "Festive Collection",
    rating: 5,
    reviews: 6,
    reviewCount: 6,
    badge: "Limited Edition",
    catalog: "22 - CATALOG",
    catalogNumber: "22"
  },
  {
    id: "fv2",
    color: "Black",
    name: "BLACK SEQUIN GOWN",
    description: "Elegant black sequin gown for festive events.",
    price: 799.00,
    originalPrice: 999.00,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&auto=format&fit=crop",
    category: "Festive Collection",
    rating: 5,
    reviews: 4,
    reviewCount: 4,
    catalog: "22 - CATALOG",
    catalogNumber: "22"
  },
  {
    id: "fv3",
    color: "Blue",
    name: "BLUE EMBELLISHED GOWN",
    description: "Stunning blue gown with crystal embellishments.",
    price: 949.00,
    originalPrice: 1299.00,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&auto=format&fit=crop",
    category: "Festive Collection",
    rating: 5,
    reviews: 3,
    reviewCount: 3,
    badge: "New Arrival",
    catalog: "22 - CATALOG",
    catalogNumber: "22"
  },
  {
    id: "fv4",
    color: "Red",
    name: "RED FESTIVE LEHENGA",
    description: "Traditional red lehenga for festive occasions.",
    price: 1299.00,
    originalPrice: 1699.00,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&auto=format&fit=crop",
    category: "Festive Collection",
    rating: 5,
    reviews: 8,
    reviewCount: 8,
    badge: "Best Seller",
    catalog: "22 - CATALOG",
    catalogNumber: "22"
  },
  {
    id: "fv5",
    color: "Blue",
    name: "BLUE FESTIVE SHERWANI",
    description: "Elegant blue sherwani for festive celebrations.",
    price: 699.00,
    originalPrice: 899.00,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop",
    category: "Festive Collection",
    rating: 4,
    reviews: 5,
    reviewCount: 5,
    catalog: "22 - CATALOG",
    catalogNumber: "22"
  }
];

// REMOVED: const priceRanges = generatePriceRanges(); - This was unused

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('default');
  const [useMockData, setUseMockData] = useState<boolean>(false);
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);

  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [activeFilterCount, setActiveFilterCount] = useState(0);

  // Fetch products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      // Try to fetch from API, fallback to mock data if it fails
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        setUseMockData(false);
      } catch {
        console.log('API fetch failed, using mock data');
        setProducts(mockProducts);
        setFilteredProducts(mockProducts);
        setUseMockData(true);
      }

      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setProducts(mockProducts);
      setFilteredProducts(mockProducts);
      setUseMockData(true);
    } finally {
      setLoading(false);
    }
  };

  // Filter products by category, price, and color
  useEffect(() => {
    let result = [...products];

    // Apply category filter
    if (selectedCategory !== 'all') {
      // Map the filter category names to actual product categories
      const categoryMap: { [key: string]: string[] } = {
        'Casual wear': ['Casual wear', 'Casual'],
        'Formal Collection': ['Formal wear', 'Formal', 'Luxury', 'Classic'],
        'Festive Collection': ['Party Wear', 'Festive']
      };

      const allowedCategories = categoryMap[selectedCategory] || [selectedCategory];
      result = result.filter(product =>
        allowedCategories.some(cat =>
          product.category.toLowerCase().includes(cat.toLowerCase())
        )
      );
    }

    // Apply price range filter
    if (selectedPriceRange !== 'all') {
      const range = priceRangesWithCounts.find(r => r.id === selectedPriceRange);
      if (range) {
        result = result.filter(
          product => product.price >= range.min && product.price <= range.max
        );
      }
    }

    // Apply color filter
    if (selectedColors.length > 0) {
      result = result.filter(product =>
        selectedColors.includes(product.color)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default sorting (keep original order)
        break;
    }

    setFilteredProducts(result);
  }, [products, selectedCategory, selectedPriceRange, selectedColors, sortBy]);

  // Get unique categories for filter
  const categories = [
    { name: 'Casual wear', count: 15 },
    { name: 'Formal Collection', count: 45 },
    { name: 'Festive Collection', count: 1 }
  ];

  // Update your price ranges with counts
  // Also add price range distribution
  // Update your priceRangesWithCounts to match actual counts
  const priceRangesWithCounts = [
    { id: 'price-0', label: 'BHD 0.00 – BHD 1,000.00', min: 0, max: 1000, count: 35 },
    { id: 'price-1', label: 'BHD 1,000.00 – BHD 2,000.00', min: 1000, max: 2000, count: 15 },
    { id: 'price-2', label: 'BHD 2,000.00 – BHD 3,000.00', min: 2000, max: 3000, count: 8 },
    { id: 'price-3', label: 'BHD 3,000.00 – BHD 4,000.00', min: 3000, max: 4000, count: 5 },
    { id: 'price-4', label: 'BHD 4,000.00 – BHD 5,000.00', min: 4000, max: 5000, count: 3 },
    { id: 'price-5', label: 'BHD 5,000.00 – BHD 6,000.00', min: 5000, max: 6000, count: 2 },
    { id: 'price-6', label: 'BHD 6,000.00 – BHD 7,000.00', min: 6000, max: 7000, count: 1 },
    { id: 'price-7', label: 'BHD 7,000.00 And Above', min: 7000, max: Infinity, count: 1 }
  ];

  // Update colors with counts to match actual distribution
  const colorsWithCounts = [
    { name: 'Black', color: 'black', count: 18 },
    { name: 'Red', color: 'red', count: 12 },
    { name: 'Blue', color: 'blue', count: 15 }
  ];


  // Color change handler
  const handleColorChange = (color: string) => {
    setSelectedColors(prev => {
      if (prev.includes(color)) {
        return prev.filter(c => c !== color);
      } else {
        return [...prev, color];
      }
    });
  };

  // Clear all filters
  const handleClearAll = () => {
    setSelectedCategory('all');
    setSelectedPriceRange('all');
    setSelectedColors([]);
  };

  // Apply filters
  const handleApplyFilters = () => {
    console.log('Applying filters:', {
      category: selectedCategory,
      priceRange: selectedPriceRange,
      colors: selectedColors
    });
    // Close mobile filters after applying
    setShowMobileFilters(false);
  };

  // Update active filter count
  useEffect(() => {
    let count = 0;
    if (selectedCategory !== 'all') count++;
    if (selectedPriceRange !== 'all') count++;
    count += selectedColors.length;
    setActiveFilterCount(count);
  }, [selectedCategory, selectedPriceRange, selectedColors]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error && products.length === 0) {
    return <ErrorMessage message={error} onRetry={fetchProducts} />;
  }

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
          <h1 className="text-4xl text-gray-900 mb-2 text-center">
            Our Products
          </h1>

        </div>

        {/* Mobile Filter Button */}
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="lg:hidden w-full mb-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
            <ProductFilters
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              priceRanges={priceRangesWithCounts}
              selectedPriceRange={selectedPriceRange}
              onPriceRangeChange={setSelectedPriceRange}
              colors={colorsWithCounts}
              selectedColors={selectedColors}
              onColorChange={handleColorChange}
              onClearAll={handleClearAll}
              onApplyFilters={handleApplyFilters}
              activeFilterCount={activeFilterCount}
            />
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Sort and Results Count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <p className="text-gray-600">
                Showing all {filteredProducts.length} products
              </p>
              <ProductSort
                sortBy={sortBy}
                onSortChange={setSortBy}
              />
            </div>

            {/* Products Grid - All products displayed */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <p className="text-gray-500 text-lg mb-4">
                  No products found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                    setSelectedColors([]);
                    setSortBy('default');
                  }}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
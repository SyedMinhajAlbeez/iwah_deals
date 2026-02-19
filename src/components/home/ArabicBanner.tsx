"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
export interface Product {
  id: string;
  name: string;
  brand: string;
  catalog: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number; // 0–5
  reviewCount: number;
  inStock: boolean;
  isWishlisted?: boolean;
  description?: string;
}

export interface Category {
  id: string;
  title: string; // e.g. "Arabic Collection"
  subtitle: string; // e.g. "Women's Wear"
  seeAllHref: string;
  products: Product[]; // any number; displayed in a horizontal scroll row
}

export interface CollectionSection {
  id: string;
  banner: {
    src: string;
    alt: string;
    href?: string;
  };
  categories: Category[]; // 1, 2, 3... however many the API returns
}

export type CollectionPageData = CollectionSection[];

// ─────────────────────────────────────────────
// Dummy data — used directly
// ─────────────────────────────────────────────
const RAW_DUMMY_DATA: CollectionPageData = [
  {
    id: "section-arabic",
    banner: {
      src: "/image/webBanner4.jpg",
      alt: "The Essence of Arabia – Premium Fabrics. Iconic Designs.",
      href: "/arabic-collection",
    },
    categories: [
      {
        id: "arabic-womens",
        title: "Arabic Collection",
        subtitle: "Women's Wear",
        seeAllHref: "/collections/arabic",
        products: [
          {
            id: "a1",
            name: "ROSETTE BLUSH",
            brand: "FIORELLA FORMALS",
            catalog: "26 – CATALOG",
            price: 499,
            originalPrice: 499,
            image: "/image/sliderImages/arabicCollection1.png",
            rating: 4,
            reviewCount: 41,
            inStock: true,
            isWishlisted: true,
            description: `This adorable ensemble features sage green overalls with a playful character detail, perfectly paired with a soft, pastel-striped long-sleeve top. Designed for both comfort and style, it’s the ideal outfit for your little one's daily adventures and playdates adorable ensemble features sage green overalls with a playful character detail, perfectly paired with a soft, pastel-striped long-sleeve top. Designed for both comfort and style, it’s the ideal outfit for your little one's daily adventures and playdates.`,
          },
          {
            id: "a2",
            name: "VIOLETS ECLIPS",
            brand: "FIORELLA FORMALS",
            catalog: "26 – CATALOG",
            price: 499,
            originalPrice: 499,
            image: "/image/sliderImages/arabicCollection2.png",
            rating: 4,
            reviewCount: 14,
            inStock: false,
            description: "Elegant deep violet tones meet classic Arabic silhouettes. This collection piece highlights the harmony between traditional craftsmanship and modern design.",
          },
          {
            id: "a3",
            name: "EMILY",
            brand: "LUXE RAW SILK FORMALS",
            catalog: "25 – CATALOG",
            price: 499,
            originalPrice: 495,
            image: "/image/sliderImages/arabicCollection3.png",
            rating: 2,
            reviewCount: 40,
            inStock: true,
            description: "The Emily set defines understated luxury with its soft textures and minimalist gold detailing on premium silk. An essential for any sophisticated wardrobe.",
          },
          {
            id: "a4",
            name: "VESPER",
            brand: "LUXE RAW SILK FORMALS",
            catalog: "05 – CATALOG",
            price: 499,
            originalPrice: 499,
            image: "/image/sliderImages/arabicCollection4.png",
            rating: 4,
            reviewCount: 14,
            inStock: true,
            description: "A bold statement piece in royal hues, the Vesper features hand-stitched beadwork and a flowing design that exudes confidence and grace.",
          },
          {
            id: "a5",
            name: "ROSETTE BLUSH",
            brand: "FIORELLA FORMALS",
            catalog: "28 – CATALOG",
            price: 499,
            originalPrice: 499,
            image: "/image/sliderImages/arabicCollection5.png",
            rating: 4,
            reviewCount: 41,
            inStock: true,
            description: "An updated version of our signature Rosette series, this piece brings a lighter touch with ethereal lace patterns and a comfortable tailored fit.",
          },
        ],
      },
      {
        id: "arabic-mens",
        title: "Eastern Collection",
        subtitle: "Women’s Wear",
        seeAllHref: "/collections/arabic-mens",
        products: [
          {
            id: "am1",
            name: "SULTAN NOIR",
            brand: "FIORELLA FORMALS",
            catalog: "12 – CATALOG",
            price: 549,
            originalPrice: 599,
            image: "/image/sliderImages/arabicCollection6.png",
            rating: 5,
            reviewCount: 22,
            inStock: true,
            description: "Regal and commanding, the Sultan Noir set uses the finest midnight black silk with silver metallic threads, reflecting the mystery of the Arabian night.",
          },
          {
            id: "am2",
            name: "DESERT KING",
            brand: "LUXE RAW SILK FORMALS",
            catalog: "08 – CATALOG",
            price: 499,
            originalPrice: 499,
            image: "/image/sliderImages/arabicCollection7.png",
            rating: 3,
            reviewCount: 9,
            inStock: true,
            isWishlisted: true,
            description: "Inspired by the golden dunes, this sand-toned ensemble offers breathability and a sturdy texture for the modern explorer of tradition.",
          },
          {
            id: "am3",
            name: "AL RASHID",
            brand: "FIORELLA FORMALS",
            catalog: "14 – CATALOG",
            price: 479,
            originalPrice: 520,
            image: "/image/sliderImages/westernCollection1.png",
            rating: 4,
            reviewCount: 17,
            inStock: false,
            description: "The Al Rashid collection combines classic paisley motifs with a tailored structure that bridges the gap between Eastern heritage and Western precision.",
          },
          {
            id: "am4",
            name: "KHAMSIN",
            brand: "LUXE RAW SILK FORMALS",
            catalog: "09 – CATALOG",
            price: 499,
            originalPrice: 499,
            image: "/image/sliderImages/westernCollection2.png",
            rating: 4,
            reviewCount: 31,
            inStock: true,
            description: "Named after the desert wind, this lightweight set features micro-pleats and a unique texture that creates movement as you walk.",
          },
          {
            id: "am5",
            name: "GOLDEN MIST",
            brand: "FIORELLA FORMALS",
            catalog: "11 – CATALOG",
            price: 499,
            originalPrice: 499,
            image: "/image/sliderImages/westernCollection3.png",
            rating: 3,
            reviewCount: 6,
            inStock: true,
            description: "A shimmering gold-flecked fabric that captures the light. This ensemble is designed for celebrations where you want to shine without compromise.",
          },
        ],
      },
    ],
  },
  {
    id: "section-eastern",
    banner: {
      src: "/image/webBanner5.jpg",
      alt: "Eastern Elegance – Timeless Styles. Modern Cuts.",
      href: "/eastern-collection",
    },
    categories: [
      {
        id: "eastern-womens",
        title: "Arabic Collection",
        subtitle: "Men's Wear",
        seeAllHref: "/collections/eastern",
        products: [
          {
            id: "e-m-1",
            name: "ROSETTE BLUSH",
            brand: "FIORELLA FORMALS",
            catalog: "26 – CATALOG",
            price: 499,
            originalPrice: 419,
            image: "/image/sliderImages/arabicMensCollection1.png",
            rating: 4,
            reviewCount: 12,
            inStock: true,
            isWishlisted: true,
            description: "A masculine take on the Rosette theme, this deep blush set features structured shoulders and subtle floral motifs in charcoal thread.",
          },
          {
            id: "e-m-2",
            name: "VIOLETS ECLIPS",
            brand: "FIORELLA FORMALS",
            catalog: "26 – CATALOG",
            price: 499,
            originalPrice: 499,
            image: "/image/sliderImages/arabicMensCollection2.png",
            rating: 4,
            reviewCount: 8,
            inStock: false,
            description: "A dark violet formal set designed for evening galas. The fabric has a slight sheen that catches the light beautifully under night skies.",
          },
          {
            id: "e-m-3",
            name: "EMILY",
            brand: "LUXE RAW SILK FORMALS",
            catalog: "05 – CATALOG",
            price: 499,
            originalPrice: 499,
            image: "/image/sliderImages/arabicMensCollection3.png",
            rating: 3,
            reviewCount: 40,
            inStock: true,
            description: "Clean lines and a focus on texture define this luxury silk piece. It offers a cool, breathable fit for warm climates without sacrificing style.",
          },
          {
            id: "e-m-4",
            name: "VESPER",
            brand: "LUXE RAW SILK FORMALS",
            catalog: "06 – CATALOG",
            price: 499,
            originalPrice: 499,
            image: "/image/sliderImages/arabicMensCollection4.png",
            rating: 5,
            reviewCount: 14,
            inStock: true,
            isWishlisted: true,
            description: "The Vesper Men's edition: A fusion of tradition and modernity, featuring a hidden placket and sharp tailoring for a sophisticated silhouette.",
          },
          {
            id: "e-m-5",
            name: "ROSETTE BLUSH",
            brand: "FIORELLA FORMALS",
            catalog: "26 – CATALOG",
            price: 499,
            originalPrice: 410,
            image: "/image/sliderImages/arabicMensCollection5.png",
            rating: 4,
            reviewCount: 41,
            inStock: true,
            description: "Comfort meets class in this daily formal wear. The blush tones are muted to provide a versatile look that pairs well with various accessories.",
          },
        ],
      },
      {
        id: "eastern-mens",
        title: "Eastern Collection",
        subtitle: "Men's Wear",
        seeAllHref: "/collections/eastern",
        products: [
          {
            id: "east-m-1",
            name: "ROSETTE BLUSH",
            brand: "FIORELLA FORMALS",
            catalog: "26 – CATALOG",
            price: 499,
            originalPrice: 419,
            image: "/image/sliderImages/easternMensCollection1.png",
            rating: 4,
            reviewCount: 12,
            inStock: true,
            isWishlisted: true,
            description: "Authentic eastern craftsmanship in a soft blush hue. This piece uses traditional weaving techniques to create a fabric that is both durable and elegant.",
          },
          {
            id: "east-m-2",
            name: "VIOLETS ECLIPS",
            brand: "FIORELLA FORMALS",
            catalog: "26 – CATALOG",
            price: 499,
            originalPrice: 499,
            image: "/image/sliderImages/easternMensCollection2.png",
            rating: 4,
            reviewCount: 8,
            inStock: false,
            description: "A standout violet ensemble with geometric embroidery that reflects the heritage of the East. Ideal for family gatherings and festive events.",
          },
          {
            id: "east-m-3",
            name: "EMILY",
            brand: "LUXE RAW SILK FORMALS",
            catalog: "05 – CATALOG",
            price: 499,
            originalPrice: 499,
            image: "/image/sliderImages/easternMensCollection3.png",
            rating: 3,
            reviewCount: 40,
            inStock: true,
            description: "The Eastern Emily: A minimalist masterpiece in off-white raw silk, perfect for those who appreciate the beauty of simplicity and fine materials.",
          },
          {
            id: "east-m-4",
            name: "VESPER",
            brand: "LUXE RAW SILK FORMALS",
            catalog: "06 – CATALOG",
            price: 499,
            originalPrice: 499,
            image: "/image/sliderImages/easternMensCollection4.png",
            rating: 5,
            reviewCount: 14,
            inStock: true,
            isWishlisted: true,
            description: "Bold, dark, and distinguished. The Eastern Vesper features a unique textured collar and premium pearl buttons for an added touch of luxury.",
          },
          {
            id: "east-m-5",
            name: "ROSETTE BLUSH",
            brand: "FIORELLA FORMALS",
            catalog: "26 – CATALOG",
            price: 499,
            originalPrice: 410,
            image: "/image/sliderImages/easternMensCollection5.png",
            rating: 4,
            reviewCount: 41,
            inStock: true,
            description: "A classic cut in a modern color. This Rosette blush set is a staple for any Eastern formal collection, offering timeless appeal and comfort.",
          },
        ],
      },
    ],
  },
  {
    id: "section-easternn",
    banner: {
      src: "/image/webBanner8.png",
      alt: "Accessories",
      href: "/eastern-collection",
    },
    categories: [
      {
        id: "accessories-women",
        title: "Accessories",
        subtitle: "Women’s Wear",
        seeAllHref: "/collections/eastern",
        products: [
          {
            id: "acc-w-1",
            name: "ROSETTE BLUSH",
            brand: "FIORELLA FORMALS",
            catalog: "26 – CATALOG",
            price: 499,
            originalPrice: 419,
            image: "/image/sliderImages/AccessoriesWomen1.png",
            rating: 4,
            reviewCount: 12,
            inStock: true,
            isWishlisted: true,
            description: "A delicate rosette blush clutch designed to complement formal ensembles. Hand-embroidered with silk threads and finished with a gold-tone clasp.",
          },
          {
            id: "acc-w-2",
            name: "VIOLETS ECLIPS",
            brand: "FIORELLA FORMALS",
            catalog: "26 – CATALOG",
            price: 499,
            originalPrice: 499,
            image: "/image/sliderImages/AccessoriesWomen2.png",
            rating: 4,
            reviewCount: 8,
            inStock: false,
            description: "An elegant silk wrap in deep violet, featuring a subtle eclipse-inspired pattern. This versatile accessory adds warmth and sophistication to any look.",
          },
          {
            id: "acc-w-3",
            name: "EMILY",
            brand: "LUXE RAW SILK FORMALS",
            catalog: "05 – CATALOG",
            price: 499,
            originalPrice: 499,
            image: "/image/sliderImages/AccessoriesWomen3.png",
            rating: 3,
            reviewCount: 40,
            inStock: true,
            description: "The Emily headband: A crown of raw silk with minimalist pearl accents. Designed to stay comfortable throughout long events while making a luxury statement.",
          },
          {
            id: "acc-w-4",
            name: "VESPER",
            brand: "LUXE RAW SILK FORMALS",
            catalog: "06 – CATALOG",
            price: 499,
            originalPrice: 499,
            image: "/image/sliderImages/AccessoriesWomen4.png",
            rating: 5,
            reviewCount: 14,
            inStock: true,
            isWishlisted: true,
            description: "Bold and beautiful, the Vesper scarf is a large format accessory with hand-beaded edges and a vibrant floral print that draws the eye.",
          },
          {
            id: "acc-w-5",
            name: "ROSETTE BLUSH",
            brand: "FIORELLA FORMALS",
            catalog: "26 – CATALOG",
            price: 499,
            originalPrice: 410,
            image: "/image/sliderImages/AccessoriesWomen5.png",
            rating: 4,
            reviewCount: 41,
            inStock: true,
            description: "A set of silk-wrapped buttons in rosette blush, perfect for customizing your favorite formal attire or adding a touch of color to a simple outfit.",
          },
        ],
      },
      {
        id: "accessories-men",
        title: "Accessories",
        subtitle: "Men's Wear",
        seeAllHref: "/collections/eastern",
        products: [
          {
            id: "acc-m-1",
            name: "ROSETTE BLUSH",
            brand: "FIORELLA FORMALS",
            catalog: "26 – CATALOG",
            price: 499,
            originalPrice: 419,
            image: "/image/sliderImages/AccessoriesMen1.png",
            rating: 4,
            reviewCount: 12,
            inStock: true,
            isWishlisted: true,
            description: "A formal rosette blush pocket square for men, featuring a refined hem and a slight texture that stays in place all day.",
          },
          {
            id: "acc-m-2",
            name: "VIOLETS ECLIPS",
            brand: "FIORELLA FORMALS",
            catalog: "26 – CATALOG",
            price: 499,
            originalPrice: 499,
            image: "/image/sliderImages/AccessoriesMen2.png",
            rating: 4,
            reviewCount: 8,
            inStock: false,
            description: "A set of dark violet cufflinks with a sunburst 'eclipse' engraving. A subtle yet powerful accessory for the modern gentleman.",
          },
          {
            id: "acc-m-3",
            name: "EMILY",
            brand: "LUXE RAW SILK FORMALS",
            catalog: "05 – CATALOG",
            price: 499,
            originalPrice: 499,
            image: "/image/sliderImages/AccessoriesMen3.png",
            rating: 3,
            reviewCount: 40,
            inStock: true,
            description: "The Men's Emily belt: Handcrafted from raw silk on a sturdy leather base, providing a unique texture and premium feel for formal wear.",
          },
          {
            id: "acc-m-4",
            name: "VESPER",
            brand: "LUXE RAW SILK FORMALS",
            catalog: "06 – CATALOG",
            price: 499,
            originalPrice: 499,
            image: "/image/sliderImages/AccessoriesMen4.png",
            rating: 5,
            reviewCount: 14,
            inStock: true,
            isWishlisted: true,
            description: "A distinguished silk cravat in royal blue with traditional hand-stitched patterns. Elevates any eastern formal look to new heights.",
          },
          {
            id: "acc-m-5",
            name: "ROSETTE BLUSH",
            brand: "FIORELLA FORMALS",
            catalog: "26 – CATALOG",
            price: 499,
            originalPrice: 410,
            image: "/image/sliderImages/AccessoriesMen5.png",
            rating: 4,
            reviewCount: 41,
            inStock: true,
            description: "A pair of blush-toned dress socks made from the finest cotton-silk blend, offering unmatched comfort and a subtle pop of color.",
          },
        ],
      },
    ],
  },
];

// ─────────────────────────────────────────────
// Star Rating
// ─────────────────────────────────────────────
const StarRating: FC<{ rating: number; count: number }> = ({ rating, count }) => (
  <div className="flex items-center gap-[3px]">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width="13"
        height="13"
        viewBox="0 0 20 20"
        fill={i < rating ? "#F5A623" : "#E0E0E0"}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
    <span
      style={{
        fontFamily: "Poppins, sans-serif",
        fontWeight: 400,
        fontSize: 10,
        color: "#9CA3AF",
        marginLeft: 4,
        lineHeight: "210%",
        letterSpacing: 0,
      }}
    >
      Reviews ({count})
    </span>
  </div>
);

// ─────────────────────────────────────────────
// Product Card
// ─────────────────────────────────────────────
const ProductCard: FC<{ product: Product }> = ({ product }) => {
  const slug = product.name.toLowerCase().replace(/ /g, "-") + "-" + product.id;

  const handleProductClick = () => {
    // Save to sessionStorage for dynamic page to pick up
    const fullProduct = {
      ...product,
      slug,
      description: product.description,
      thumbnails: [product.image],
    };
    sessionStorage.setItem("selectedProduct", JSON.stringify(fullProduct));
  };

  return (
    <Link
      href={`/product/${slug}`}
      onClick={handleProductClick}
      className="relative flex-shrink-0 bg-white group cursor-pointer transition-shadow hover:shadow-lg no-underline block"
      style={{
        width: 284,
        height: 472,
        borderRadius: 24,
        border: "1px solid #E8E8E8",
        boxShadow: "0px 2px 12px 0px rgba(0,0,0,0.06)",
        overflow: "hidden",
      }}
    >
      {/* Wishlist heart */}
      <button
        aria-label="Add to wishlist"
        className="absolute z-10 flex items-center justify-center"
        style={{
          top: 12,
          left: 12,
          width: 34,
          height: 34,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.92)",
          boxShadow: "0 1px 6px rgba(0,0,0,0.14)",
          border: "none",
          padding: 0,
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          stroke={product.isWishlisted ? "#E53935" : "#BDBDBD"}
          strokeWidth={2.2}
          fill={product.isWishlisted ? "#E53935" : "none"}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>

      {/* Stock badge */}
      <div className="absolute z-10 flex items-center" style={{ top: 28, left: 182 }}>
        <span
          className="flex items-center justify-center"
          style={{
            width: 70,
            height: 18,
            borderRadius: 13,
            borderWidth: 1,
            borderStyle: "solid",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontSize: 10,
            color: product.inStock ? "#47A01F" : "#F97316",
            borderColor: product.inStock ? "rgba(71,160,31,0.2)" : "rgba(249,115,22,0.2)",
            whiteSpace: "nowrap",
          }}
        >
          {product.inStock ? "In stock" : "Out of stock"}
        </span>
      </div>

      {/* Product Image */}
      <div
        className="relative overflow-hidden"
        style={{
          width: 252,
          height: 306,
          borderRadius: 14,
          marginTop: 15,
          marginLeft: 16,
        }}
      >
        <Image
          src={product.image}
          alt=""
          aria-hidden="true"
          fill
          className="object-cover blur-md scale-110 brightness-95 transition-transform duration-500 group-hover:scale-125"
          sizes="252px"
        />
        <Image
          src={product.image}
          alt={`${product.name} – ${product.brand}`}
          fill
          className="object-contain object-center"
          sizes="252px"
        />
      </div>

      {/* Info block */}
      <div style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 12 }}>
        <StarRating rating={product.rating} count={product.reviewCount} />
        <p
          className="line-clamp-1"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: 11,
            color: "#1A1A1A",
            marginTop: 6,
            lineHeight: "150%",
            textTransform: "uppercase",
          }}
        >
          {product.name} <span style={{ fontWeight: 400, color: "#6B7280" }}>{product.brand}</span>
        </p>
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            color: "#9CA3AF",
            marginTop: 2,
            lineHeight: "150%",
          }}
        >
          ( {product.catalog} )
        </p>
        <div style={{ marginTop: 10 }}>
          {product.originalPrice !== product.price && (
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: 11,
                color: "#9CA3AF",
                textDecoration: "line-through",
                lineHeight: "150%",
                marginBottom: 1,
              }}
            >
              BHD{product.originalPrice.toFixed(2)}
            </p>
          )}
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              color: "#111827",
              lineHeight: "130%",
            }}
          >
            BHD{product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
};

// ─────────────────────────────────────────────
// Category Row
// ─────────────────────────────────────────────
const CategoryRow: FC<{ category: Category }> = ({ category }) => (
  <div className="w-full rounded-2xl py-5">
    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-lg font-bold text-gray-900">
        {category.title} <span className="font-normal text-gray-500 text-base">({category.subtitle})</span>
      </h2>
      <Link
        href={category.seeAllHref}
        className="inline-flex w-fit shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-purple-300 px-3 py-1 text-xs font-semibold text-purple-600 transition-colors hover:bg-purple-50 sm:text-sm"
      >
        See All Products
      </Link>
    </div>
    <div className="flex gap-4 overflow-x-auto pb-1 no-scrollbar" style={{ scrollbarWidth: "none" }}>
      {category.products.map((product, idx) => (
        <ProductCard key={product.id + idx} product={product} />
      ))}
    </div>
  </div>
);

// ─────────────────────────────────────────────
// Banner
// ─────────────────────────────────────────────
const Banner: FC<{ banner: CollectionSection["banner"] }> = ({ banner }) => {
  const inner = (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.01]">
      <Image
        src={banner.src}
        alt={banner.alt}
        width={1399}
        height={361}
        className="w-full h-auto min-h-[180px] md:min-h-[300px] object-cover"
        loading="lazy"
      />
    </div>
  );
  return banner.href ? <Link href={banner.href}>{inner}</Link> : inner;
};

// ─────────────────────────────────────────────
// Single Section
// ─────────────────────────────────────────────
const CollectionSectionBlock: FC<{ section: CollectionSection }> = ({ section }) => (
  <div className="flex flex-col gap-6">
    <Banner banner={section.banner} />
    {section.categories.map((category) => (
      <CategoryRow key={category.id} category={category} />
    ))}
  </div>
);

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
const ArabicBanner: FC<{ data?: CollectionPageData }> = ({ data = RAW_DUMMY_DATA }) => {
  return (
    <div className="w-full max-w-8xl mx-auto flex flex-col gap-12 px-4 pb-16">
      {data.map((section, index) => (
        <CollectionSectionBlock key={`${section.id}-${index}`} section={section} />
      ))}
    </div>
  );
};

export default ArabicBanner;

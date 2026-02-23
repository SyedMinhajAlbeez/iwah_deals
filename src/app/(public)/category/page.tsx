import Banner from "./banner";
import ProductListing, { type Product as ProductListingProduct } from "./ProductListing";
import FeaturedCollections from "./FeaturedCollections";
import PartnerWithSection from "@components/layout/footer/PartnerWithSection";
import ReviewsCarousel from "@components/layout/footer/ReviewsCarousel";
import Products from "@components/layout/footer/products";
import { GET_ALL_PRODUCTS, GET_HOME_CATEGORIES, graphqlRequest } from "@/graphql";
import { NOT_IMAGE } from "@/utils/constants";

interface HomeCategoriesResponse {
  categories: {
    edges: Array<{
      node: {
        id: string;
        logoUrl?: string | null;
        translation: { name?: string | null; slug?: string | null };
      };
    }>;
  };
}

interface ImageNode {
  url?: string | null;
}

interface AllProductNode {
  id: string;
  sku: string;
  name: string;
  urlKey: string;
  productNumber?: string | null;
  shortDescription?: string | null;
  price?: number | null;
  specialPrice?: number | null;
  new?: boolean | null;
  featured?: boolean | null;
  isInSale?: boolean | null;
  isInWishlist?: boolean | null;
  images?: ImageNode[];
  averageRating?: string | null;
}

interface AllProductsResponse {
  allProducts: {
    data: AllProductNode[];
  };
}

function toProductListingProduct(p: AllProductNode): ProductListingProduct {
  const originalPrice = Number(p.price ?? 0);
  const salePrice = Number(p.specialPrice ?? p.price ?? 0);
  const imageUrl = p.images?.[0]?.url ?? NOT_IMAGE;
  const rating = Number(p.averageRating ?? 0);

  let badge: ProductListingProduct["badge"] | undefined;
  if (p.new) badge = "New Arrival";
  else if (p.featured) badge = "Best Seller";
  else if (p.isInSale || (p.specialPrice != null && p.specialPrice < (p.price ?? 0))) badge = "Sale";
  else badge = "New Arrival";

  const catalogNumber = (p.productNumber || p.sku) ?? "";

  return {
    id: p.id,
    color: "",
    name: p.name,
    description: p.shortDescription ?? "",
    price: salePrice,
    originalPrice,
    image: imageUrl,
    imageUrl,
    category: "",
    rating: Number.isFinite(rating) ? rating : 0,
    reviews: 0,
    reviewCount: 0,
    badge,
    catalog: catalogNumber ? `${catalogNumber} - CATALOG` : "CATALOG",
    catalogNumber,
  };
}

export default async function Category() {
  let bannerCategories: Array<{ name: string; image: string }> | undefined;
  let listingProducts: ProductListingProduct[] | undefined;

  try {
    const [categoriesData, productsData] = await Promise.all([
      graphqlRequest<HomeCategoriesResponse>(GET_HOME_CATEGORIES, {}, { tags: ["categories"], life: "days" }),
      graphqlRequest<AllProductsResponse>(GET_ALL_PRODUCTS, undefined, { tags: ["products"], life: "minutes" }),
    ]);

    bannerCategories =
      categoriesData?.categories?.edges
        ?.map(({ node }) => ({
          name: node.translation?.name ?? "",
          image: node.logoUrl ?? NOT_IMAGE,
        }))
        .filter((c) => c.name.length > 0)
        .slice(0, 7) ?? undefined;

    listingProducts = productsData?.allProducts?.data?.map(toProductListingProduct) ?? undefined;
  } catch (error) {
    console.error("[category/page] Failed to fetch GraphQL data:", error);
  }

  return (
    <div className="min-h-screen bg-white">
      <Banner categories={bannerCategories} />
      <ProductListing products={listingProducts} />
      <FeaturedCollections />
      <ReviewsCarousel />
      <PartnerWithSection />

      <div style={{ textAlign: "center", marginBottom: "48px", marginTop: "48px" }}>
        <h2
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "40px",
            lineHeight: "1",
            color: "#000000",
            margin: "0 0 12px 0",
          }}
        >
          Shop Instagram
        </h2>
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            color: "#666666",
            margin: 0,
          }}
        >
          Elevate your wardrobe with fresh finds today!
        </p>
      </div>
      <Products />
    </div>
  );
}

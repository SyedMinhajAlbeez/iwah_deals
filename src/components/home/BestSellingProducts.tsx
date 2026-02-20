// Server Component - fetches real products from GraphQL
import { FC } from "react";
import { graphqlRequest } from "@/lib/graphql-fetch";
import { GET_ALL_PRODUCTS } from "@/graphql";
import BestSellingSlider from "./BestSellingSlider";
import { NOT_IMAGE } from "@/utils/constants";

interface ImageNode {
  id: string;
  type?: string;
  path?: string;
  url?: string;
  productId?: string;
}

interface AllProductNode {
  id: string;
  sku: string;
  name: string;
  type?: string;
  urlKey: string;
  productNumber?: string | null;
  shortDescription?: string | null;
  price?: number | null;
  specialPrice?: number | null;
  new?: boolean | null;
  featured?: boolean | null;
  status?: boolean | null;
  images?: ImageNode[];
  averageRating?: string | null;
  percentageRating?: any[];
  isInWishlist?: boolean | null;
}

interface AllProductsResponse {
  allProducts: {
    data: AllProductNode[];
  };
}

export interface SliderProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  badge?: string;
  catalog: string;
  urlKey: string;
  isInWishlist: boolean;
}

function getBadge(product: AllProductNode): string | undefined {
  if (product.new) return "New Arrival";
  if (product.featured) return "Best Seller";
  return undefined;
}

const BestSellingProducts: FC = async () => {
  let products: SliderProduct[] = [];

  try {
    const data = await graphqlRequest<AllProductsResponse>(
      GET_ALL_PRODUCTS,
      undefined,
      { tags: ["products"], life: "minutes", noCache: true }
    );

    const rawData = data?.allProducts?.data ?? [];
    if (rawData.length > 0) {
      console.log("[BestSelling] first product:", JSON.stringify(rawData[0], null, 2));
    }

    products = rawData.map((p) => ({
      id: p.id,
      name: p.name,
      // Use first available image URL, fallback to placeholder
      image: p.images?.[0]?.url || NOT_IMAGE,
      price: Number(p.specialPrice ?? p.price ?? 0),
      originalPrice: Number(p.price ?? 0),
      rating: Number(p.averageRating ?? 0),
      reviews: 0,
      badge: getBadge(p),
      catalog: (p.productNumber || p.sku) ? `${p.productNumber || p.sku} - CATALOG` : "CATALOG",
      urlKey: p.urlKey,
      isInWishlist: !!p.isInWishlist,
    }));
  } catch (error) {
    console.error("[BestSellingProducts] Failed to fetch products:", error);
  }

  // DEBUG: Show raw data info if empty
  if (products.length === 0) {
    return (
      <div className="my-8 text-center">
        <p>No products found.</p>
        <div className="mt-4 p-4 bg-gray-100 text-left text-xs font-mono inline-block rounded max-w-lg overflow-auto">
          <strong>Debug Info:</strong>
          <br />
          Fetched from: {process.env.NEXT_PUBLIC_BAGISTO_ENDPOINT}
          <br />
          Items count: {products.length}
        </div>
      </div>
    );
  }

  return <BestSellingSlider products={products} />;
};

export default BestSellingProducts;

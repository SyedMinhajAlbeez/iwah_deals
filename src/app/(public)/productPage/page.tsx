// Server Component - fetches real products from GraphQL
import { graphqlRequest } from "@/lib/graphql-fetch";
import { GET_ALL_PRODUCTS } from "@/graphql";
import Image from "next/image";
import { ProductListing, SliderProduct } from "./ProductListing";
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


export default async function ProductPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  let products: SliderProduct[] = [];
  await searchParams;

  try {
    const data = await graphqlRequest<AllProductsResponse>(
      GET_ALL_PRODUCTS,
      undefined,
      { tags: ["products"], life: "minutes", noCache: true }
    );

    const rawData = data?.allProducts?.data ?? [];
    products = rawData.map((p) => ({
      id: p.id,
      name: p.name,
      image: p.images?.[0]?.url || NOT_IMAGE,
      price: Number(p.specialPrice ?? p.price ?? 0),
      originalPrice: Number(p.price ?? 0),
      rating: Number(p.averageRating ?? 0),
      reviews: 0,
      catalog: (p.productNumber || p.sku) ? `${p.productNumber || p.sku} - CATALOG` : "CATALOG",
      urlKey: p.urlKey,
      isInWishlist: !!p.isInWishlist,
    }));
  } catch (error) {
    console.error("[ProductPage] Failed to fetch products:", error);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <div className="flex mt-6 justify-center w-full">
        <div className="w-3/4">
          <Image
            src="/image/productPageBanner.png"
            alt="Banner"
            width={1200} // Actual width of your file
            height={500}  // Desired height
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#111111] mb-4 tracking-tight">
            Our Products
          </h1>
          <div className="w-24 h-1.5 bg-[#fdad5a] mx-auto rounded-full"></div>
        </div>

        {/* Product Listing (Client Component) */}
        <ProductListing initialProducts={products} />
      </div>
    </div>
  );
}

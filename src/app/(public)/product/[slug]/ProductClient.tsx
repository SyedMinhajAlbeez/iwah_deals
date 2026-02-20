"use client";

import { FC, useEffect, useState } from "react";
import { Product } from "@/data/products";
import { ProductDetailView } from "@/components/product/ProductDetailView";

interface ProductClientProps {
    slug: string;
    fallbackProduct: Product;
}

export const ProductClient: FC<ProductClientProps> = ({ slug, fallbackProduct }) => {
    const [product, setProduct] = useState<Product>(fallbackProduct);

    useEffect(() => {
        // Attempt hydration from sessionStorage
        const stored = sessionStorage.getItem("selectedProduct");
        if (stored) {
            try {
                const parsed = JSON.parse(stored) as Product;

                // Navigation Persistence Cleanup: Ignore if slug mismatch
                if (parsed.slug === slug) {
                    setProduct(parsed);
                } else {
                    // Slug mismatch
                    sessionStorage.removeItem("selectedProduct");
                }
            } catch (e) {
                console.error("Failed to parse stored product", e);
                sessionStorage.removeItem("selectedProduct");
            }
        }
    }, [slug]);


    return <ProductDetailView product={product} />;
};

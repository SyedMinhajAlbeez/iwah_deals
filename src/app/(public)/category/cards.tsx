import React, { useState } from 'react';
import Image from 'next/image';

// Product type definition
interface Product {
  id: string;
  color: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  imageUrl: string;
  category: string;
  rating: number;
  reviews: number;
  reviewCount: number;
  badge?: 'New Arrival' | 'Best Seller' | 'Trending' | 'Sale';
  catalog: string;
  catalogNumber: string;
}

// Extended mock products covering all filter categories
const mockProducts: Product[] = [
  // Best Seller
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
  // Trending (can be considered under Best Seller or separate)
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
  // New Arrival
  {
    id: "n1",
    color: "Beige",
    name: "BEIGE LINEN BLAZER",
    description: "Lightweight linen blazer for summer days. A fresh new style.",
    price: 279.00,
    originalPrice: 279.00,
    image: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=500&auto=format&fit=crop",
    category: "Formal wear",
    rating: 5,
    reviews: 3,
    reviewCount: 3,
    badge: "New Arrival",
    catalog: "16 - CATALOG",
    catalogNumber: "16"
  },
  {
    id: "n2",
    color: "Olive",
    name: "OLIVE UTILITY JACKET",
    description: "Trendy utility jacket with multiple pockets. Just landed.",
    price: 199.00,
    originalPrice: 199.00,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop",
    category: "Casual wear",
    rating: 4,
    reviews: 5,
    reviewCount: 5,
    badge: "New Arrival",
    catalog: "16 - CATALOG",
    catalogNumber: "16"
  },
  // Best Seller
  {
    id: "b1",
    color: "Grey",
    name: "GREY WOOL OVERCOAT",
    description: "Elegant wool overcoat, a customer favourite this season.",
    price: 399.00,
    originalPrice: 450.00,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&auto=format&fit=crop",
    category: "Outerwear",
    rating: 5,
    reviews: 24,
    reviewCount: 24,
    badge: "Best Seller",
    catalog: "14 - CATALOG",
    catalogNumber: "14"
  },
  // Sale items (originalPrice > price)
  {
    id: "s1",
    color: "Navy",
    name: "NAVY BLAZER",
    description: "Classic navy blazer, now at a discounted price.",
    price: 199.00,
    originalPrice: 299.00,
    image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=500&auto=format&fit=crop",
    category: "Formal wear",
    rating: 4,
    reviews: 18,
    reviewCount: 18,
    badge: "Sale",
    catalog: "13 - CATALOG",
    catalogNumber: "13"
  },
  {
    id: "s2",
    color: "Brown",
    name: "BROWN LEATHER JACKET",
    description: "Genuine leather jacket with great savings. Limited stock.",
    price: 349.00,
    originalPrice: 499.00,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop",
    category: "Outerwear",
    rating: 4,
    reviews: 9,
    reviewCount: 9,
    badge: "Sale",
    catalog: "13 - CATALOG",
    catalogNumber: "13"
  }
];

// Product Card Component
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const discount = product.originalPrice && product.originalPrice > product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-card">
      <div className="product-image">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={500}
          height={500}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover w-full h-full"
        />
        {product.badge && <span className="badge">{product.badge}</span>}
        {discount > 0 && <span className="discount">-{discount}%</span>}
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="color">{product.color}</p>
        <div className="price">
          <span className="current">BHD{product.price.toFixed(2)}</span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="original">BHD{product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        <div className="rating">
          <span>{'★'.repeat(product.rating)}</span>
          <span>({product.reviewCount})</span>
        </div>
        <p className="catalog">{product.catalog}</p>
      </div>

      <style jsx>{`
        .product-card {
          border: 1px solid #eaeaea;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          background: white;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .product-image {
          position: relative;
          aspect-ratio: 3/4;
          background: #f5f5f5;
        }
        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .badge, .discount {
          position: absolute;
          top: 10px;
          left: 10px;
          background: #000;
          color: #fff;
          padding: 4px 8px;
          font-size: 12px;
          font-weight: 600;
          border-radius: 4px;
          z-index: 1;
        }
        .discount {
          left: auto;
          right: 10px;
          background: #e63946;
        }
        .product-info {
          padding: 16px;
        }
        h3 {
          font-size: 16px;
          font-weight: 600;
          margin: 0 0 4px;
          text-transform: uppercase;
        }
        .color {
          font-size: 14px;
          color: #666;
          margin: 0 0 8px;
        }
        .price {
          margin-bottom: 8px;
        }
        .current {
          font-size: 18px;
          font-weight: 700;
          color: #000;
          margin-right: 8px;
        }
        .original {
          font-size: 14px;
          color: #999;
          text-decoration: line-through;
        }
        .rating {
          font-size: 14px;
          color: #f5a623;
          margin-bottom: 8px;
        }
        .catalog {
          font-size: 12px;
          color: #888;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

// Main App Component
const ProductPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'New Arrival' | 'Best Seller' | 'Sale'>('New Arrival');

  // Filter products based on active tab
  const filteredProducts = mockProducts.filter(product => {
    if (activeTab === 'New Arrival') {
      return product.badge === 'New Arrival';
    }
    if (activeTab === 'Best Seller') {
      return product.badge === 'Best Seller';
    }
    if (activeTab === 'Sale') {
      // Consider on sale if originalPrice exists and is greater than price
      return product.originalPrice != null && product.originalPrice > product.price;
    }
    return false;
  });

  return (
    <div className="container">
      <div className="tabs">
        <button
          className={activeTab === 'New Arrival' ? 'active' : ''}
          onClick={() => setActiveTab('New Arrival')}
        >
          New Arrival
        </button>
        <button
          className={activeTab === 'Best Seller' ? 'active' : ''}
          onClick={() => setActiveTab('Best Seller')}
        >
          Best Seller
        </button>
        <button
          className={activeTab === 'Sale' ? 'active' : ''}
          onClick={() => setActiveTab('Sale')}
        >
          Sale
        </button>
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-products">No products found in this category.</p>
        )}
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }
        .tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 30px;
          border-bottom: 1px solid #eaeaea;
          padding-bottom: 10px;
        }
        .tabs button {
          background: none;
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          font-weight: 500;
          color: #666;
          cursor: pointer;
          transition: color 0.2s, border-bottom-color 0.2s;
          border-bottom: 2px solid transparent;
        }
        .tabs button.active {
          color: #000;
          border-bottom-color: #000;
        }
        .tabs button:hover {
          color: #000;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 24px;
        }
        .no-products {
          grid-column: 1 / -1;
          text-align: center;
          color: #999;
          padding: 40px;
        }
      `}</style>
    </div>
  );
};

export default ProductPage;
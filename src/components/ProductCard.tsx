'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getAverageRating, getReviewCount } from '@/data/reviews';

// Star Rating Component
const StarRating = ({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${sizeClasses[size]} ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;

  image?: string;
  videoUrl?: string;
  tags?: string[];
  benefits?: string[];
  ingredients?: string[];
  storageInfo?: string;
  shelfLife?: string;
}

interface ProductCardProps {
  product: Product;
  variant?: 'grid' | 'list';
}

const ProductCard = ({ product, variant = 'grid' }: ProductCardProps) => {
  const { name, description, category, image, id } = product;
  const router = useRouter();
  const [imageError, setImageError] = useState(false);
  
  // Get review data
  const averageRating = getAverageRating(id);
  const reviewCount = getReviewCount(id);

  const handleProductClick = () => {
    router.push(`/products/${id}`);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  if (variant === 'list') {
    return (
      <div 
        onClick={handleProductClick}
        className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
        itemScope
        itemType="https://schema.org/Product"
      >
        {/* SEO Structured Data for List View */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": name,
              "description": description,
              "category": category,
              "image": image,
              "brand": {"@type": "Brand", "name": "Raaga Foods"}
            })
          }}
        />
        
        <div className="flex gap-2">
          {/* Image */}
          <div className="relative w-full md:w-32 aspect-square">
            <Image
              src={imageError ? '/products/placeholder.jpg' : (image || '/products/placeholder.jpg')}
              alt={`${name} - ${category} from Raaga Foods`}
              fill
              className="rounded-lg object-cover transition-transform duration-300 hover:scale-110"
              sizes="(max-width: 768px) 100vw, 128px"
              priority
              onError={handleImageError}
              itemProp="image"
            />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <span 
              className="inline-block px-2 py-1 text-sm bg-orange-100 text-orange-600 rounded-full"
              itemProp="category"
            >
              {category}
            </span>
          </div>
          <h3 
            className="mt-2 text-lg font-semibold text-gray-800"
            itemProp="name"
          >
            {name}
          </h3>
          <p 
            className="mt-2 text-gray-600"
            itemProp="description"
          >
            {description}
          </p>
          
          {/* Rating Display for List View */}
          <div className="flex items-center gap-2 mt-3">
            <StarRating rating={averageRating} size="sm" />
            <span className="text-sm text-gray-600">({reviewCount})</span>
                            
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden cursor-pointer transform hover:scale-[1.02]"
      onClick={handleProductClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && handleProductClick()}
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": name,
            "description": description,
            "category": category,
            "image": image,
            "brand": {
              "@type": "Brand",
              "name": "Raaga Foods"
            }
          })
        }}
      />
      
      {/* Image Section */}
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={imageError ? '/products/placeholder.jpg' : (image || '/products/placeholder.jpg')}
          alt={`${name} - ${category} from Raaga Foods`}
          fill
          className="rounded-t-lg object-cover transform group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          onError={handleImageError}
          itemProp="image"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span 
            className="inline-block px-2 py-1 text-sm bg-orange-100 text-orange-600 rounded-full"
            itemProp="category"
          >
            {category}
          </span>
        </div>
        <h3 
          className="text-lg font-semibold text-gray-800 mb-2"
          itemProp="name"
        >
          {name}
        </h3>
        <p 
          className="text-sm text-gray-600 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300"
          itemProp="description"
        >
          {description}
        </p>
        
        {/* Rating Display */}
        <div className="flex items-center gap-2 mt-2">
          <StarRating rating={averageRating} size="sm" />
          <span className="text-sm text-gray-600">({reviewCount})</span>
        </div>
        
        {/* Additional details on hover */}
        <div className="mt-3 pt-3 border-t border-gray-100 transform opacity-0 max-h-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300">
          <div className="flex justify-between items-center">
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
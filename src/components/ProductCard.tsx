'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import { getAverageRating, getReviewCount } from '@/data/reviews';

// Star Rating Component with partial stars
const StarRating = ({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  // Determine full, half, and empty stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.25 && rating - fullStars < 0.75;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {/* Full stars */}
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={`full-${i}`}
          className={`${sizeClasses[size]} text-yellow-400`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {/* Half star */}
      {hasHalfStar && (
        <svg
          key="half"
          className={`${sizeClasses[size]} text-yellow-400`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <defs>
            <linearGradient id="half-grad" x1="0" x2="100%" y1="0" y2="0">
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="50%" stopColor="#d1d5db" />
            </linearGradient>
          </defs>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="url(#half-grad)" />
        </svg>
      )}
      {/* Empty stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <svg
          key={`empty-${i}`}
          className={`${sizeClasses[size]} text-gray-300`}
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
 
  ingredients?: string[];
  storageInfo?: string;
  shelfLife?: string;
}


import WriteReviewForm from './WriteReviewForm';

interface ProductCardProps {
  product: Product;
  reviews: import('@/data/reviews').Review[];
  addReview: (review: import('@/data/reviews').Review) => void;
  variant?: 'grid' | 'list';
}


const ProductCard = ({ product, reviews, addReview, variant = 'grid' }: ProductCardProps) => {
  const { name, description, category, image, id } = product;
  const router = useRouter();
  const [imageError, setImageError] = useState(false);
  const [showWriteReview, setShowWriteReview] = useState(false);

  // Calculate average rating and review count from passed reviews
  const averageRating = reviews.length > 0 ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length) : 0;
  const reviewCount = reviews.length;

  const handleProductClick = () => {
    router.push(`/products/${id}`);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Handle review submission
  const handleSubmitReview = (newReview: Omit<import('@/data/reviews').Review, 'id' | 'createdAt' | 'helpfulVotes' | 'totalVotes'>) => {
    const review = {
      ...newReview,
      id: `user_review_${Date.now()}`,
      createdAt: new Date().toISOString(),
      helpfulVotes: 0,
      totalVotes: 0
    };
    addReview(review);
    setShowWriteReview(false);
    alert('Thank you! Your review has been submitted successfully.');
  };


  if (variant === 'list') {
    return (
      <div 
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
            <span className="text-sm text-gray-800 font-semibold">{averageRating.toFixed(1)}</span>
            <span className="text-sm text-gray-600">({reviewCount} {reviewCount === 1 ? 'review' : 'reviews'})</span>
            <button
              className="ml-2 text-xs text-orange-600 underline hover:text-orange-800"
              onClick={() => setShowWriteReview(true)}
              type="button"
            >
              Write Review
            </button>
          </div>
          {showWriteReview && (
            <div className="mt-4">
              <WriteReviewForm
                productId={id}
                productName={name}
                onSubmit={handleSubmitReview}
                onCancel={() => setShowWriteReview(false)}
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div 
      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden cursor-pointer transform hover:scale-[1.02] max-w-5xl mx-auto px-4 py-12"
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
      <div className="relative w-full aspect-square overflow-hidden ">
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
          <span className="text-sm font-semibold text-gray-800">{averageRating.toFixed(1)}</span>
          <span className="text-sm text-gray-600">({reviewCount} {reviewCount === 1 ? 'review' : 'reviews'})</span>
        </div>
        {showWriteReview && (
          <div className="mt-4" onClick={e => e.stopPropagation()}>
            
          </div>
        )}
        {/* Additional details on hover */}
        <div className="mt-3 pt-3 border-t border-gray-100 transform opacity-0 max-h-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300">
          <div className="flex justify-between items-center">
           {/* ... */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
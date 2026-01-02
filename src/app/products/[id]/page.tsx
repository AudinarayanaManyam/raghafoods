import { notFound } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/data/products';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import { getAverageRating, getReviewCount } from '@/data/reviews';
import ProductDetailClient from './ProductDetailClient';

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// Star Rating Component
const StarRating = ({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
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
  image: string;
  videoUrl?: string;
  additionalImages?: string[];
  additionalVideos?: string[];
  tags?: string[];
  benefits?: string[];
  ingredients?: string[];
  storageInfo?: string;
  shelfLife?: string;
}

const getProductDetails = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

interface ProductDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const { id } = await params;
  const product = getProductDetails(id);
  
  // If product not found, return not found
  if (!product) {
    notFound();
  }
  
  // Get review data
  const averageRating = getAverageRating(id);
  const reviewCount = getReviewCount(id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 bg-white">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium group transition-transform duration-200 ease-in-out transform hover:-translate-x-1"
        >
          <svg 
            className="w-5 h-5 mr-2 transition-transform duration-200 ease-in-out transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Products
        </Link>
      </div>

      <ProductDetailClient />

      {/* Customer Reviews Section */}
      <div className="mt-16  pt-12">
        <div className="mb-8">
          
          {reviewCount > 0 && (
            <div className="flex items-center gap-3 mb-6">
              <StarRating rating={averageRating} size="md" />
              <span className="text-lg font-medium text-gray-700">
                {averageRating.toFixed(1)}
              </span>
              <span className="text-blue-600">
                ({reviewCount} {reviewCount === 1 ? 'review' : 'reviews'})
              </span>
            </div>
          )}
        </div>
        <ReviewsDisplay productId={product.id} productName={product.name} />
      </div>
    </div>
  );
}

'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { reviews, sortReviews, filterReviewsByRating, Review } from '@/data/reviews';
import WriteReviewForm from './WriteReviewForm';
import reviewApiClient from '@/utils/reviewApiClient';

interface ReviewsDisplayProps {
  productId: string;
  productName: string;
  className?: string;
}

export default function ReviewsDisplay({ productId, productName, className = '' }: ReviewsDisplayProps) {
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'highest' | 'lowest' | 'helpful'>('helpful');
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [helpfulVotes, setHelpfulVotes] = useState<{ [key: string]: { helpful: number; total: number } }>({});
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [apiReviews, setApiReviews] = useState<Review[]>([]);
  const [showAllReviews, setShowAllReviews] = useState(false);

  // Load reviews from API
  useEffect(() => {
    const loadReviews = async () => {
      const response = await reviewApiClient.getReviews(productId, sortBy, filterRating || undefined);
      
      if (response.success && response.data) {
        setApiReviews(response.data.reviews);
      } else {
        console.error('Failed to load reviews:', response.error);
      }
    };

    loadReviews();
  }, [productId, sortBy, filterRating]);

  // No longer need to load from localStorage - using API instead

  // Get reviews for specific product (combine sample data with API data)
  const productReviews = useMemo(() => {
    const allReviews = [...reviews, ...apiReviews].filter(r => r.productId === productId);
    // Deduplicate by ID
    const uniqueReviews = Array.from(new Map(allReviews.map(r => [r.id, r])).values());
    return sortReviews(filterReviewsByRating(uniqueReviews, filterRating), sortBy);
  }, [productId, sortBy, filterRating, apiReviews]);

  const summary = useMemo(() => {
    const allReviews = [...reviews, ...apiReviews].filter(r => r.productId === productId);
    // Deduplicate
    const uniqueReviews = Array.from(new Map(allReviews.map(r => [r.id, r])).values());
    
    if (uniqueReviews.length === 0) {
      return {
        averageRating: 0,
        totalReviews: 0,
        ratingBreakdown: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
      };
    }
    
    const ratingBreakdown = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    let totalRating = 0;
    
    uniqueReviews.forEach(review => {
      ratingBreakdown[review.rating as keyof typeof ratingBreakdown]++;
      totalRating += review.rating;
    });
    
    return {
      averageRating: totalRating / uniqueReviews.length,
      totalReviews: uniqueReviews.length,
      ratingBreakdown
    };
  }, [productId, apiReviews]);

  const handleHelpfulVote = async (reviewId: string, isHelpful: boolean) => {
    const response = await reviewApiClient.voteHelpful(reviewId, productId, isHelpful);
    if (response.success) {
      setHelpfulVotes(prev => {
        const current = prev[reviewId] || { helpful: 0, total: 0 };
        return {
          ...prev,
          [reviewId]: {
            helpful: current.helpful + (isHelpful ? 1 : 0),
            total: current.total + 1
          }
        };
      });
    }
  };

  const handleSubmitReview = async (newReview: Omit<Review, 'id' | 'createdAt' | 'helpfulVotes' | 'totalVotes'>) => {
    // Immediately add the new review to local state
    const reviewWithDefaults: Review = {
      ...newReview,
      id: `review_${Date.now()}`,
      createdAt: new Date().toISOString(),
      helpfulVotes: 0,
      totalVotes: 0
    };
    
    // Add review to the top of the list immediately
    setApiReviews(prev => [reviewWithDefaults, ...prev]);
    setShowWriteReview(false);
  };

  const StarRating = ({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) => {
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

  const RatingBreakdown = () => (
    <div className="space-y-2">
      {[5, 4, 3, 2, 1].map(rating => {
        const count = summary.ratingBreakdown[rating as keyof typeof summary.ratingBreakdown] || 0;
        const percentage = summary.totalReviews > 0 ? (count / summary.totalReviews) * 100 : 0;
        
        return (
          <button
            key={rating}
            onClick={() => setFilterRating(filterRating === rating ? null : rating)}
            className={`flex items-center w-full text-sm hover:bg-gray-50 p-1 rounded transition-colors ${
              filterRating === rating ? 'bg-blue-50 text-blue-700' : ''
            }`}
          >
            <span className="flex items-center gap-1 w-16">
              <span>{rating}</span>
              <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
            <div className="flex-1 mx-2">
              <div className="bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
            <span className="w-8 text-right text-blue-600">{count}</span>
          </button>
        );
      })}
    </div>
  );

  if (showWriteReview) {
    return (
      <div className={`bg-white ${className}`} id="reviews">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <WriteReviewForm
            productId={productId}
            productName={productName}
            onSubmit={handleSubmitReview}
            onCancel={() => setShowWriteReview(false)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white ${className}`} id="reviews">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
            <button
              onClick={() => setShowWriteReview(true)}
              className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
            >
              Write a Review
            </button>
          </div>
          
          {/* Overall Rating Summary */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Average Rating */}
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {summary.totalReviews > 0 ? summary.averageRating.toFixed(1) : '0.0'}
                </div>
                <StarRating rating={Math.round(summary.averageRating)} size="md" />
                <div className="text-sm text-gray-600 mt-1">
                  {summary.totalReviews} customer review{summary.totalReviews !== 1 ? 's' : ''}
                </div>
              </div>
              
              {/* Rating Breakdown */}
              <div className="lg:col-span-2">
                <h3 className="font-semibold text-gray-900 mb-3">Rating Breakdown</h3>
                <RatingBreakdown />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Sort */}
        {productReviews.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'helpful')}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="helpful">Most Helpful</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="highest">Highest Rating</option>
                <option value="lowest">Lowest Rating</option>
              </select>
            </div>
            
            {filterRating && (
              <button
                onClick={() => setFilterRating(null)}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Clear filter ({filterRating} star{filterRating !== 1 ? 's' : ''})
              </button>
            )}
          </div>
        )}

        {/* Reviews List */}
        {productReviews.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No reviews yet</h3>
            <p className="text-gray-600 mb-4">Be the first to share your thoughts about this product!</p>
            <button
              onClick={() => setShowWriteReview(true)}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
            >
              Write the First Review
            </button>
          </div>
        ) : (
          <div className="space-y-6">
                {(showAllReviews ? productReviews : productReviews.slice(0, 5)).map((review) => {
                  const currentVotes = helpfulVotes[review.id] || { helpful: 0, total: 0 };
                  const totalHelpful = review.helpfulVotes + currentVotes.helpful;
                  const totalVotes = review.totalVotes + currentVotes.total;
                  // const isShareMenuOpen = openShareMenus[review.id];
                  return (
                    <div key={review.id} id={`review-${review.id}`} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      {/* ...existing code for review card... */}
                      {/* Review Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-3">
                          {/* Avatar */}
                          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                            {review.userAvatar ? (
                              <Image src={review.userAvatar || '/products/placeholder.jpg'} alt={review.userName} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                            ) : (
                              <span className="text-sm font-medium text-gray-600">
                                {review.userName.charAt(0)}
                              </span>
                            )}
                          </div>
                          {/* User Info */}
                          <div>
                            <div className="font-medium text-gray-900">{review.userName}</div>
                            {review.location && (
                              <div className="text-xs text-gray-500">{review.location}</div>
                            )}
                            {review.reviewerRank && (
                              <div className="text-xs text-orange-600">{review.reviewerRank}</div>
                            )}
                          </div>
                        </div>
                        {/* Share Button */}

                      </div>
                      {/* Rating and Date */}
                      <div className="flex items-center gap-4 mb-3">
                        <StarRating rating={review.rating} />
                        <div className="text-sm text-gray-600">
                          {new Date(review.createdAt).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                      </div>
                      {/* Badges */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {review.verifiedPurchase && (
                          <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded">
                            ✓ Verified Purchase
                          </span>
                        )}
                        {review.vine && (
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                            🍃 Vine Customer Review
                          </span>
                        )}
                        {review.earlyReviewer && (
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                            ⭐ Early Reviewer Rewards
                          </span>
                        )}
                      </div>
                      {/* Review Title */}
                      <h3 className="font-semibold text-gray-900 mb-2">{review.title}</h3>
                      {/* Review Content */}
                      <p className="text-gray-700 mb-4 leading-relaxed">{review.content}</p>
                      {/* Review Images */}
                      {review.images && review.images.length > 0 && (
                        <div className="flex gap-2 mb-4">
                          {review.images.map((image, index) => (
                            <Image
                              key={index}
                              src={image}
                              alt={`Review image ${index + 1}`}
                              width={64}
                              height={64}
                              className="w-16 h-16 object-cover rounded border cursor-pointer hover:opacity-80"
                            />
                          ))}
                        </div>
                      )}
                      {/* Helpful Votes */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-600">Was this review helpful?</span>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleHelpfulVote(review.id, true)}
                              className="text-sm text-gray-600 hover:text-gray-800 px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                            >
                              👍 Helpful
                            </button>
                            <button
                              onClick={() => handleHelpfulVote(review.id, false)}
                              className="text-sm text-gray-600 hover:text-gray-800 px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                            >
                              👎 Not helpful
                            </button>
                          </div>
                        </div>
                        {totalVotes > 0 && (
                          <div className="text-sm text-gray-500">
                            {totalHelpful} of {totalVotes} people found this helpful
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
                {productReviews.length > 5 && !showAllReviews && (
                  <div className="flex justify-center mt-6">
                    <button
                      className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold"
                      onClick={() => setShowAllReviews(true)}
                    >
                      See more reviews
                    </button>
                  </div>
                )}
          </div>
        )}
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Review } from '@/data/reviews';

interface WriteReviewFormProps {
  productId: string;
  productName: string;
  onSubmit: (review: Omit<Review, 'id' | 'createdAt' | 'helpfulVotes' | 'totalVotes'>) => void;
  onCancel: () => void;
}

export default function WriteReviewForm({ productId, productName, onSubmit, onCancel }: WriteReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userName, setUserName] = useState('');
  // const [userAvatar, setUserAvatar] = useState<string | undefined>(undefined);
  const [location, setLocation] = useState('');
  // Removed image upload and verified purchase fields
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastReview, setLastReview] = useState<Partial<Review> | null>(null);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  // Removed image upload handlers

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0 || !title.trim() || !content.trim() || !userName.trim()) {
      alert('Please fill in all required fields and provide a rating.');
      return;
    }

    setIsSubmitting(true);
  // Removed setUploadError reference
    // Removed image upload logic
    const newReview = {
      productId,
      userId: `user_${Date.now()}`,
      userName,
      userAvatar: undefined,
      rating,
      title,
      content,
      location: location || undefined,
      updatedAt: new Date().toISOString(),
      verifiedPurchase: false
    };

    try {
      onSubmit(newReview);
      setLastReview(newReview);
      // Reset form
      setRating(0);
      setTitle('');
      setContent('');
      setUserName('');
      setLocation('');
    } catch {
      alert('Error submitting review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const StarRating = () => (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => handleStarClick(star)}
          onMouseEnter={() => setHoveredRating(star)}
          onMouseLeave={() => setHoveredRating(0)}
          className="focus:outline-none"
        >
          <svg
            className={`w-8 h-8 transition-colors ${
              star <= (hoveredRating || rating)
                ? 'text-yellow-400'
                : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </button>
      ))}
      <span className="ml-2 text-sm text-gray-600">
        {rating > 0 && (
          <>
            {rating} out of 5 stars
            {rating === 1 && ' - Poor'}
            {rating === 2 && ' - Fair'}
            {rating === 3 && ' - Good'}
            {rating === 4 && ' - Very Good'}
            {rating === 5 && ' - Excellent'}
          </>
        )}
      </span>
    </div>
  );

  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Write a Customer Review for {productName}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Overall Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Overall Rating <span className="text-red-500">*</span>
          </label>
          <StarRating />
        </div>

        {/* Review Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Add a headline <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What's most important to know?"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            maxLength={100}
            required
          />
          <p className="text-xs text-gray-500 mt-1">{title.length}/100 characters</p>
        </div>

        {/* Review Content */}
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
            Add a written review <span className="text-red-500">*</span>
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What did you like or dislike? What did you use this product for?"
            rows={6}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            maxLength={1000}
            required
          />
          <p className="text-xs text-gray-500 mt-1">{content.length}/1000 characters</p>
        </div>

        {/* Personal Information */}
        <div>
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-2">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
          />
        </div>

        {/* Submit Buttons */}
        <div className="flex items-center justify-end space-x-3 pt-4 border-t">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting || rating === 0 || !title.trim() || !content.trim() || !userName.trim()}
            className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Review'}
          </button>
        </div>
      </form>

      {lastReview && (
        <div className="mt-8 p-4 bg-gray-50 border rounded">
          <h4 className="font-semibold mb-2">Submitted Review (JSON Format):</h4>
          <pre className="text-xs bg-white p-2 rounded overflow-x-auto border">
            {JSON.stringify(lastReview, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
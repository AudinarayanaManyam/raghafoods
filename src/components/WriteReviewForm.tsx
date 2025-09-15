'use client';

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
  const [location, setLocation] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [verifiedPurchase, setVerifiedPurchase] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImages(prev => [...prev, ...files].slice(0, 5)); // Max 5 images
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0 || !title.trim() || !content.trim() || !userName.trim()) {
      alert('Please fill in all required fields and provide a rating.');
      return;
    }

    setIsSubmitting(true);

    // Simulate image processing (in real app, you'd upload to a server)
    const imageUrls = images.map((file, index) => 
      URL.createObjectURL(file) // This is just for demo - in production, upload to server
    );

    const newReview = {
      productId,
      userId: `user_${Date.now()}`,
      userName,
      rating,
      title,
      content,
      images: imageUrls.length > 0 ? imageUrls : undefined,
      verifiedPurchase,
      location: location || undefined,
      updatedAt: new Date().toISOString()
    };

    try {
      onSubmit(newReview);
      // Reset form
      setRating(0);
      setTitle('');
      setContent('');
      setUserName('');
      setLocation('');
      setImages([]);
      setVerifiedPurchase(false);
    } catch (error) {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location (Optional)
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., Mumbai, India"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Add Photos */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Add Photos (Optional)
          </label>
          <div className="space-y-2">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Photos
            </label>
            <p className="text-xs text-gray-500">
              Shoppers find images more helpful than text alone. (Max 5 images)
            </p>
          </div>

          {/* Image Previews */}
          {images.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {images.map((file, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Upload preview ${index + 1}`}
                    className="w-20 h-20 object-cover rounded border"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Verified Purchase */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="verifiedPurchase"
            checked={verifiedPurchase}
            onChange={(e) => setVerifiedPurchase(e.target.checked)}
            className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
          />
          <label htmlFor="verifiedPurchase" className="ml-2 text-sm text-gray-700">
            I purchased this product (Verified Purchase badge will be shown)
          </label>
        </div>

        {/* Guidelines */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-sm text-gray-900 mb-2">Review Guidelines</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• Focus on the product and your experience with it</li>
            <li>• Be honest and authentic in your review</li>
            <li>• Avoid inappropriate content and personal information</li>
            <li>• Photos should be relevant to the product</li>
          </ul>
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
    </div>
  );
}
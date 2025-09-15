'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { products } from '@/data/products';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import { getAverageRating, getReviewCount } from '@/data/reviews';

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

// Share Product Component
const ShareProduct = ({ productId, productName, productImage, size = 'md' }: { 
  productId: string; 
  productName: string; 
  productImage: string; 
  size?: 'sm' | 'md' | 'lg' 
}) => {
  const handleShare = () => {
    const shareUrl = `${window.location.origin}/products/${productId}`;
    const shareText = `Check out ${productName} from Raaga Foods!`;
    
    if (typeof window !== 'undefined' && 'share' in navigator) {
      navigator.share({
        title: productName,
        text: shareText,
        url: shareUrl
      });
    } else {
      // Fallback to WhatsApp
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <button
      onClick={handleShare}
      className="p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all duration-200"
      title="Share this product"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
      </svg>
    </button>
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

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const id = typeof params.id === 'string' ? params.id : '';
  const product = getProductDetails(id);
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [hoveredThumbnail, setHoveredThumbnail] = useState<number | null>(null);
  const [previewVideo, setPreviewVideo] = useState<string | null>(null);
  
  // Get review data
  const averageRating = getAverageRating(id);
  const reviewCount = getReviewCount(id);
  
  // Create gallery items (images + videos)
  const galleryItems = [
    { type: 'image', src: product?.image || '/products/placeholder.jpg', alt: `${product?.name} - Main Image` },
    ...(product?.additionalImages || []).map((img, index) => ({
      type: 'image' as const,
      src: img,
      alt: `${product?.name} - Image ${index + 2}`
    })),
    ...(product?.videoUrl ? [{ type: 'video' as const, src: product.videoUrl, alt: `${product?.name} - Product Video` }] : []),
    ...(product?.additionalVideos || []).map((video, index) => ({
      type: 'video' as const,
      src: video,
      alt: `${product?.name} - Video ${index + 2}`
    }))
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    
    // If it's a video slide, scroll to video and play it
    if (galleryItems[index]?.type === 'video') {
      // Scroll to the video container
      const videoContainer = document.querySelector('.video-gallery-container');
      if (videoContainer) {
        const navbar = document.querySelector('nav');
        const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
        
        const elementPosition = videoContainer.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight - 20; // 20px extra padding
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      
      // Small delay to ensure scroll completes, then play video
      setTimeout(() => {
        const videoElement = document.querySelector('video');
        if (videoElement) {
          setIsVideoPlaying(true);
          videoElement.play().catch(console.error);
        }
      }, 500);
    }
  };

  // Enhanced video click handler
  const handleVideoThumbnailClick = (index: number) => {
    if (galleryItems[index]?.type === 'video') {
      goToSlide(index);
      
      // Add visual feedback
      const thumbnail = document.querySelector(`[data-thumbnail="${index}"]`);
      if (thumbnail) {
        thumbnail.classList.add('animate-pulse');
        setTimeout(() => {
          thumbnail.classList.remove('animate-pulse');
        }, 1000);
      }
    } else {
      setCurrentSlide(index);
    }
  };

  const handleBackToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Navigate to home page
    router.push('/');
    
    // Wait for navigation and then scroll to products section
    setTimeout(() => {
      const productsSection = document.getElementById('all-products');
      const navbar = document.querySelector('nav');
      
      if (productsSection && navbar) {
        const navbarHeight = navbar.getBoundingClientRect().height;
        const elementPosition = productsSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight - 16;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 500);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h1>
        <Link 
          href="/products" 
          className="text-orange-600 hover:text-orange-700 font-medium"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium group transition-transform duration-200 ease-in-out transform hover:-translate-x-1"
          onClick={handleBackToProducts}
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side - Gallery */}
        <div className="lg:col-span-7">
          {/* Share Button Above Gallery */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Product Gallery</h2>
            <ShareProduct 
              productId={product.id}
              productName={product.name}
              productImage={product.image}
              size="md"
            />
          </div>
          
          {/* Main Image/Video Display */}
          <div className="video-gallery-container relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4 shadow-lg group">
            {galleryItems[currentSlide]?.type === 'video' ? (
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay={isVideoPlaying}
                muted
                loop
                playsInline
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
                onLoadedData={() => {
                  // Auto-play when video loads if it's the current slide
                  const videoElement = document.querySelector('video');
                  if (videoElement && currentSlide === galleryItems.findIndex(item => item.type === 'video')) {
                    videoElement.play().catch(console.error);
                  }
                }}
                onClick={() => {
                  // Enhanced click handler for video
                  const videoElement = document.querySelector('video');
                  if (videoElement) {
                    if (videoElement.paused) {
                      setIsVideoPlaying(true);
                      videoElement.play().catch(console.error);
                    } else {
                      setIsVideoPlaying(false);
                      videoElement.pause();
                    }
                  }
                }}
                key={currentSlide}
              >
                <source src={galleryItems[currentSlide].src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={imageError ? '/products/placeholder.jpg' : galleryItems[currentSlide]?.src || '/products/placeholder.jpg'}
                alt={galleryItems[currentSlide]?.alt || product?.name || 'Product Image'}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
                onError={() => setImageError(true)}
              />
            )}
            
            {/* Navigation Arrows */}
            {galleryItems.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
            
            {/* Amazon-style Gallery Indicators */}
            {galleryItems.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                {galleryItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-white scale-125' : 'bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            )}
            
            {/* Video Indicator */}
            {galleryItems[currentSlide]?.type === 'video' && (
              <div className="absolute top-4 left-4 bg-red-600 text-white text-sm px-3 py-1 rounded-full flex items-center shadow-lg">
                <span className="mr-2">🔴</span>
                <span className="font-medium">{isVideoPlaying ? 'PLAYING' : 'VIDEO'}</span>
                <span className="ml-2 text-xs opacity-75">
                  {Math.floor(currentSlide + 1)}/{galleryItems.length}
                </span>
              </div>
            )}

            {/* Image Counter for Images */}
            {galleryItems[currentSlide]?.type === 'image' && galleryItems.length > 1 && (
              <div className="absolute top-4 left-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full flex items-center shadow-lg">
                <span className="mr-1">📷</span>
                <span className="font-medium">
                  {currentSlide + 1} / {galleryItems.length}
                </span>
              </div>
            )}

            {/* Click to Play Overlay for Videos */}
            {galleryItems[currentSlide]?.type === 'video' && !isVideoPlaying && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 hover:bg-white transition-all duration-300 cursor-pointer hover:scale-110">
                  <svg className="w-12 h-12 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            )}

            {/* Amazon-style Zoom Indicator for Images */}
            {galleryItems[currentSlide]?.type === 'image' && (
              <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Hover to zoom
              </div>
            )}
          </div>
          
          {/* Thumbnail Navigation with Mouse-over Video Preview */}
          {galleryItems.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0"
                  onMouseEnter={() => {
                    setHoveredThumbnail(index);
                    if (item.type === 'video') {
                      setPreviewVideo(item.src);
                    }
                  }}
                  onMouseLeave={() => {
                    setHoveredThumbnail(null);
                    setPreviewVideo(null);
                  }}
                >
                  <button
                    data-thumbnail={index}
                    onClick={() => handleVideoThumbnailClick(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      currentSlide === index 
                        ? 'border-orange-500 ring-2 ring-orange-200 shadow-lg scale-105' 
                        : 'border-gray-300 hover:border-gray-400 hover:scale-105'
                    } ${item.type === 'video' ? 'hover:border-red-400' : ''}`}
                    title={item.type === 'video' ? 'Click to play video' : 'View image'}
                  >
                    {item.type === 'video' ? (
                      <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center relative overflow-hidden">
                        {/* Video Preview on Hover */}
                        {hoveredThumbnail === index && previewVideo && (
                          <video
                            className="absolute inset-0 w-full h-full object-cover"
                            muted
                            autoPlay
                            loop
                            playsInline
                          >
                            <source src={previewVideo} type="video/mp4" />
                          </video>
                        )}
                        
                        {/* Video Overlay */}
                        <div className={`absolute inset-0 transition-opacity duration-300 ${
                          hoveredThumbnail === index ? 'opacity-30' : 'opacity-100'
                        }`}>
                          <div className="absolute inset-0 bg-black/20"></div>
                          <div className="relative flex flex-col items-center justify-center h-full">
                            <span className="text-white text-lg mb-1">🎬</span>
                            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                              <span className="text-red-600 text-xs">▶</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Current Slide Indicator */}
                        {currentSlide === index && (
                          <div className="absolute top-1 right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse z-10"></div>
                        )}
                        
                        {/* Hover Effect Overlay */}
                        {hoveredThumbnail === index && (
                          <div className="absolute inset-0 border-2 border-red-400 rounded-lg animate-pulse"></div>
                        )}
                      </div>
                    ) : (
                      <div className="relative w-full h-full">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className={`object-cover transition-all duration-300 ${
                            hoveredThumbnail === index ? 'scale-110 brightness-110' : ''
                          }`}
                          sizes="80px"
                        />
                        {/* Hover Effect for Images */}
                        {hoveredThumbnail === index && (
                          <div className="absolute inset-0 bg-white/20 border-2 border-orange-400 rounded-lg"></div>
                        )}
                      </div>
                    )}
                  </button>
                  
                  {/* Amazon-style Badge */}
                  {item.type === 'video' && (
                    <div className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full font-bold shadow-lg">
                      VIDEO
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Side - Product Info */}
        <div className="lg:col-span-5">
          <div className="sticky top-8">
            {/* Product Title & Category */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-sm bg-orange-100 text-orange-600 rounded-full mb-3">
                {product.category}
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
              
              {/* Rating Display */}
              {reviewCount > 0 && (
                <div className="flex items-center gap-3 mb-4">
                  <StarRating rating={averageRating} size="md" />
                  <span className="text-lg font-medium text-gray-700">
                    {averageRating.toFixed(1)}
                  </span>
                  <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                    ({reviewCount} {reviewCount === 1 ? 'review' : 'reviews'})
                  </span>
                </div>
              )}
              
              <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {product.shelfLife && (
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-1">Shelf Life</h3>
                  <p className="text-sm text-green-700">{product.shelfLife}</p>
                </div>
              )}
              {product.storageInfo && (
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-800 mb-1">Storage</h3>
                  <p className="text-sm text-blue-700">{product.storageInfo}</p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mb-8">
              <Link
                href="#contact"
                className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300 text-center block"
              >
                Contact for Price & Availability
              </Link>
            </div>

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Detailed Information Tabs */}
      <div className="mt-16 border-t border-gray-200 pt-12">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Product Details</h2>
          
          <div className="space-y-8">
            {/* Benefits */}
            {product.benefits && product.benefits.length > 0 && (
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Health Benefits
                </h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Ingredients */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-blue-600 mr-2">🥄</span>
                  Ingredients
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {product.ingredients.map((ingredient, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm border border-gray-200 text-center"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Storage & Usage */}
            <div className="grid md:grid-cols-2 gap-6">
              {product.storageInfo && (
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="text-purple-600 mr-2">📦</span>
                    Storage Information
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{product.storageInfo}</p>
                </div>
              )}
              
              {product.shelfLife && (
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="text-orange-600 mr-2">⏰</span>
                    Shelf Life
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{product.shelfLife}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="mt-16 border-t border-gray-200 pt-12">
        <ReviewsDisplay productId={product.id} productName={product.name} />
      </div>
    </div>
  );
}

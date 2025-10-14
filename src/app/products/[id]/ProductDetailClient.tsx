'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image?: string;
  videoUrl?: string;
  additionalImages?: string[];
  additionalVideos?: string[];
  tags?: string[];
  ingredients?: string[];
  storageInfo?: string;
  shelfLife?: string;
}

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [hoveredThumbnail, setHoveredThumbnail] = useState<number | null>(null);
  // const [previewVideo, setPreviewVideo] = useState<string | null>(null);

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
    setCurrentSlide((prev: number) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev: number) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleThumbnailHover = (index: number | null) => {
    setHoveredThumbnail(index);
    // Video preview functionality can be added later if needed
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-white">
      {/* Product Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Main Gallery */}
        <div className="space-y-4">
          {/* Main Image/Video Display */}
          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            {galleryItems[currentSlide]?.type === 'video' ? (
              <video
                src={galleryItems[currentSlide].src}
                className="w-full h-full object-cover"
                controls
                autoPlay={isVideoPlaying}
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
              />
            ) : (
              <Image
                src={imageError ? '/products/placeholder.jpg' : (galleryItems[currentSlide]?.src || '/products/placeholder.jpg')}
                alt={galleryItems[currentSlide]?.alt || `${product.name} - Product Image`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                onError={handleImageError}
              />
            )}
            
            {/* Navigation Arrows */}
            {galleryItems.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  aria-label="Previous image"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  aria-label="Next image"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Gallery */}
          {galleryItems.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {galleryItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  onMouseEnter={() => handleThumbnailHover(index)}
                  onMouseLeave={() => handleThumbnailHover(null)}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentSlide
                      ? 'border-orange-500 ring-2 ring-orange-200'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {item.type === 'video' ? (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  )}
                  {hoveredThumbnail === index && item.type === 'video' && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-3 py-1 text-sm bg-orange-100 text-orange-600 rounded-full">
                {product.category}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Ingredients */}
          {product.ingredients && product.ingredients.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Ingredients</h3>
              <ul className="text-gray-600 space-y-1">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0"></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Storage & Shelf Life */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {product.storageInfo && (
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Storage</h3>
                <p className="text-gray-600">{product.storageInfo}</p>
              </div>
            )}
            {product.shelfLife && (
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Shelf Life</h3>
                <p className="text-gray-600">{product.shelfLife}</p>
              </div>
            )}
          </div>

        

        </div>
      </div>
    </div>
  );
}
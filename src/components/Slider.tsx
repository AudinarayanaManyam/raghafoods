'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: '/slides/Frame 51.jpg',
    
  },
  {
    id: 2,
    image: '/slides/Frame 52.jpg',
    
  },
  {
    id: 3,
    image: '/slides/Frame 53.jpg',
    
  }
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-100 rounded-lg shadow-lg">
      {/* Responsive container with increased height for laptop devices */}
      <div className="relative w-full h-0 pb-[56.25%] sm:pb-[50%] md:pb-[45%] lg:pb-[50%] xl:pb-[45%] 2xl:pb-[40%]">
        {/* Slides container */}
        <div 
          className="absolute inset-0 flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative w-full h-full flex-shrink-0"
            >
              {/* Image container with responsive sizing */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={slide.image}
                  alt={`Raaga Foods Slide ${slide.id} - Product Showcase`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center center'
                  }}
                  priority={slide.id === 1}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                  quality={85}
                />
                {/* Responsive gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10 pointer-events-none" />
              </div>
              
              {/* Content overlay - can be used for future text/CTA */}
              <div className="relative flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                {/* Future content can go here */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Improved positioning */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-3 md:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-1.5 sm:p-2 md:p-2.5 lg:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 backdrop-blur-sm border border-gray-200/50"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-3 md:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-1.5 sm:p-2 md:p-2.5 lg:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95  backdrop-blur-sm border border-gray-200/50"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Slide Indicators - Better responsive sizing */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 left-0 right-0 z-40">
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30 ${
                currentSlide === index
                  ? 'bg-white shadow-lg w-6 sm:w-8 md:w-10 lg:w-12 h-2 sm:h-2.5 md:h-3 lg:h-3.5'
                  : 'bg-white/70 hover:bg-white/90 w-2 sm:w-2.5 md:w-3 lg:w-3.5 h-2 sm:h-2.5 md:h-3 lg:h-3.5 hover:shadow-md'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

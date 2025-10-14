'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: '/categories/Screenshot1.png',
    
  },
  {
    id: 2,
    image: '/categories/Screenshot2.png',
    
  },
  {
    id: 3,
    image: '/categories/Screenshot3.png',
    
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
    <div className="relative w-full overflow-hidden bg-gray-100 rounded-lg shadow-lg"
      style={{ 
        aspectRatio: 'clamp(4/3, 16/9, 21/9)',
        height: 'clamp(250px, 35vw, 80vh)',
        maxWidth: '100%',
        minHeight: '250px',
        width: '100vw',
        maxHeight: '80vh'
      }}>
      {/* Slides */}
      <div 
        className="h-full w-full flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative h-full w-full flex-shrink-0"
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
                loading={slide.id === 1 ? 'eager' : 'lazy'}
                sizes="100vw"
              />
              {/* Responsive gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10 pointer-events-none" />
            </div>
            <div className="relative flex flex-col items-center justify-center h-full text-white px-4 sm:px-8">
              
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 lg:left-8 xl:left-10 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 rounded-full shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 touch-manipulation z-40 backdrop-blur-sm border border-gray-200/50"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
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
        className="absolute right-2 sm:right-4 md:right-6 lg:right-8 xl:right-10 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 rounded-full shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 touch-manipulation z-40 backdrop-blur-sm border border-gray-200/50"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-7 xl:bottom-8 left-0 right-0 z-40">
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all duration-300 touch-manipulation backdrop-blur-sm border border-white/30 ${
                currentSlide === index
                  ? 'bg-white shadow-xl w-10 sm:w-12 md:w-14 lg:w-16 xl:w-18 h-3 sm:h-3.5 md:h-4 lg:h-4.5 xl:h-5'
                  : 'bg-white/70 hover:bg-white/90 w-3 sm:w-3.5 md:w-4 lg:w-4.5 xl:w-5 h-3 sm:h-3.5 md:h-4 lg:h-4.5 xl:h-5 hover:shadow-lg'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Slider from '@/components/Slider';
import ProductsList from '@/components/ProductsList';
import About from './about/page';
import Contact from './contact/page';

import { categories } from '@/data/categories';
import { scrollToProducts } from '@/utils/scroll';
import { useSearch } from '@/contexts/SearchContext';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const { searchQuery } = useSearch();

  useEffect(() => {
    // Listen for the clear category and show all products event
    const handleClearCategoryAndShowAll = () => {
      setSelectedCategory(undefined);
    };

    window.addEventListener('clearCategoryAndShowAll', handleClearCategoryAndShowAll);
    return () => {
      window.removeEventListener('clearCategoryAndShowAll', handleClearCategoryAndShowAll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      if (sectionId === 'home') {
        setSelectedCategory(undefined);
        // Small delay to ensure state is updated
        requestAnimationFrame(() => {
          scrollToProducts();
        });
      } else {
        // For other sections, scroll directly
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Handle initial scroll if URL has a hash
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      scrollToSection(id);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <div id="home" className="px-4">
          <Slider />
        </div>

        {/* Featured Categories Section */}
        <section id="products" className="py-8 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 sm:mb-4">Categories</h2>
           
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 py-4">
              {/* Category Cards */}
              {categories.map((category, idx) => (
                <div 
                  key={idx}
                  className={`flex flex-col items-center group cursor-pointer transition-all duration-300 ${
                    selectedCategory === category.title ? 'opacity-100 scale-105' : 'opacity-90 hover:opacity-100'
                  }`}
                  onClick={() => {
                    setSelectedCategory(category.title);
                    scrollToProducts();
                  }}
                >
                  <div className={`relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 mb-3 sm:mb-4 md:mb-5 overflow-hidden rounded-full shadow-lg sm:shadow-xl transform transition-all duration-300 hover:scale-110 hover:shadow-xl ${
                    selectedCategory === category.title ? 'ring-1 sm:ring-2 ring-orange-500 ring-offset-1 sm:ring-offset-2' : ''
                  }`}>
                    <Image
                      src={category.img}
                      alt={category.title}
                      fill
                      sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, (max-width: 1024px) 144px, (max-width: 1280px) 160px, 176px"
                      quality={85}
                      priority={idx < 3}
                      className={`object-cover rounded-full transform transition-all duration-300 ${
                        selectedCategory === category.title ? 'brightness-110 scale-105' : 'hover:brightness-110'
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm md:text-base font-medium px-2 sm:px-4 text-center">View</span>
                    </div>
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-800 text-center">{category.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="all-products" className="py-8 sm:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="space-y-6">
              {/* Search Section */}


              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 flex-1">
                  {searchQuery ? `Search Results` : selectedCategory ? `${selectedCategory} Products` : 'Our Products'}
                </h2>
              </div>
              
              {/* Display search query info */}
              {searchQuery && (
                <div >
                  <div >
                    <span className="text-orange-800">
                      Showing results for: <strong>&ldquo;{searchQuery}&rdquo;</strong>
                    </span>

                  </div>
                </div>
              )}
              
              <ProductsList selectedCategory={selectedCategory} />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-4 sm:py-8 bg-gray-50">
          <About />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-8 sm:py-16">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default HomePage;

'use client';

import { useEffect, useState, } from 'react';

import ProductCard from '@/components/ProductCard';
import { useSearch } from '@/contexts/SearchContext';
import { products } from '@/data/products';
import { Review } from '@/data/reviews';
import reviewApiClient from '@/utils/reviewApiClient';

interface SearchResult {
  category: string;
  items: typeof products;
}

interface ProductsListProps {
  selectedCategory?: string;
}


export default function ProductsList({ selectedCategory }: ProductsListProps) {
  const { searchQuery } = useSearch();
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [displayCount, setDisplayCount] = useState(8);
  const [allProducts, setAllProducts] = useState<typeof products>([]);

  // --- API Review State (Production Level) ---
  const [apiReviews, setApiReviews] = useState<Review[]>([]);

  // Load all reviews from API on mount
  useEffect(() => {
    const loadAllReviews = async () => {
      try {
        let allReviews: Review[] = [];
        
        // Fetch reviews for each product from API
        for (const product of products) {
          try {
            const response = await reviewApiClient.getReviews(product.id);
            if (response.success && response.data?.reviews) {
              allReviews = allReviews.concat(response.data.reviews);
            }
          } catch (error) {
            console.error(`Failed to load reviews for product ${product.id}:`, error);
          }
        }
        
        setApiReviews(allReviews);
      } catch (error) {
        console.error('Failed to load all reviews:', error);
      }
    };
    
    loadAllReviews();
  }, []);

  // Add review handler - update local state immediately for instant UI feedback
  const handleAddReview = (review: Review) => {
    setApiReviews(prev => [review, ...prev]);
  };

  useEffect(() => {
    // Reset display count when category or search changes
    setDisplayCount(8);
  }, [searchQuery, selectedCategory]);

  useEffect(() => {
    setIsSearching(!!searchQuery.trim());
    
    // Start with deduplicated products
    let filteredProducts = Array.from(
      new Map(products.map(product => [product.id, product])).values()
    );

    console.log('Initial products loaded:', filteredProducts.length);

    // First apply category filter if selected
    if (selectedCategory) {
      if (selectedCategory.toLowerCase() === 'veg') {
        // For veg category, exclude non-veg products first
        filteredProducts = filteredProducts.filter(product => {
          // Check if product is non-veg
          const isNonVeg = product.tags?.some(tag => tag.toLowerCase() === 'non-veg') ||
                          product.name.toLowerCase().includes('chicken') ||
                          product.name.toLowerCase().includes('mutton') ||
                          product.name.toLowerCase().includes('fish');
          
          // Return true only for non-non-veg (veg) products
          return !isNonVeg;
        });
      } else if (selectedCategory.toLowerCase() === 'non-veg') {
        // For non-veg category, check tags and category
        filteredProducts = filteredProducts.filter(product => 
          product.tags?.some(tag => tag.toLowerCase().includes('non-veg')) ||
          product.name.toLowerCase().includes('non-veg') ||
          product.description.toLowerCase().includes('non-vegetarian')
        );
      } else {
        // For other categories, match the category exactly
        filteredProducts = filteredProducts.filter(product => 
          product.category === selectedCategory
        );
      }
      console.log('After category filter:', filteredProducts.length, 'for category:', selectedCategory);
    }

    // Then apply search filter if there's a search query
    if (searchQuery.trim()) {
      const searchLower = searchQuery.toLowerCase();
      const terms = searchLower.split(' ').filter(term => term.length > 0);

      // First deduplicate products by ID
      filteredProducts = Array.from(
        new Map(filteredProducts.map(product => [product.id, product])).values()
      );

      // Find products with name matches
      const productsWithNameMatch = filteredProducts.filter(product => {
        const nameLower = product.name.toLowerCase();
        return terms.every(term => nameLower.includes(term));
      });

      // Set search results with name matches only
      filteredProducts = productsWithNameMatch;

      // Sort results by how closely they match the search terms
      filteredProducts.sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();
        
        // Exact matches come first
        if (aName === searchLower) return -1;
        if (bName === searchLower) return 1;
        
        // Then matches at start of name
        const aStartsWith = aName.startsWith(terms[0]);
        const bStartsWith = bName.startsWith(terms[0]);
        if (aStartsWith && !bStartsWith) return -1;
        if (!aStartsWith && bStartsWith) return 1;

        // Then alphabetical order
        return aName.localeCompare(bName);
      });
      console.log('After search filter:', filteredProducts.length, 'for query:', searchQuery);
    }

    console.log('Final filtered products:', filteredProducts.length);

    // Put all products in a single group
    setAllProducts(filteredProducts);
    setSearchResults([{
      category: 'All Products',
      items: filteredProducts.slice(0, displayCount)
    }]);
  }, [displayCount, searchQuery, selectedCategory]);

  const handleLoadMore = () => {
    setDisplayCount(prev => {
      const newCount = prev + 8;
      console.log('Loading more products:', { prev, newCount, totalProducts: allProducts.length });
      return newCount;
    });
  };

  const hasMoreProducts = allProducts.length > displayCount;

  console.log('ProductsList state:', { 
    displayCount, 
    allProductsLength: allProducts.length, 
    hasMoreProducts,
    searchResultsLength: searchResults[0]?.items.length 
  });

  if (searchResults.length === 0 && !searchQuery && !selectedCategory) {
    return (
      <div className="w-full text-center py-12">
        <p className="text-gray-600 text-lg animate-pulse">
          Loading products...
        </p>
      </div>
    );
  }

  // Helper: get reviews for a product from API (production level)
  const getReviewsForProduct = (productId: string) => {
    return apiReviews.filter(r => r.productId === productId);
  };

  return (
    <div className="w-full">
      {(isSearching || selectedCategory) && (
        <div className="mb-8">
          <h3 className="text-lg text-gray-600 mb-2">
            {isSearching ? (
              searchResults[0]?.items.length > 0 ? (
                <span>
                 <strong>{searchResults[0].items.length}</strong> {searchResults[0].items.length === 1 ? 'product' : 'products'} matching &ldquo;<strong>{searchQuery}</strong>&rdquo;
                  {selectedCategory ? ` in ${selectedCategory}` : ''}
                </span>
              ) : (
                <>No products found matching &ldquo;{searchQuery}&rdquo;</>
              )
            ) : selectedCategory ? (
              `Showing ${searchResults[0]?.items.length || 0} products in ${selectedCategory}`
            ) : null}
          </h3>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-4 sm:gap-6 ">
        {searchResults[0]?.items.map((product) => (
          <div key={product.id} className="w-full ">
            <ProductCard 
              product={product} 
              reviews={getReviewsForProduct(product.id)}
              addReview={handleAddReview}
            />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMoreProducts && (
        <div className="flex justify-between items-center mt-8">
          <span className="text-sm text-gray-500">
            Showing {searchResults[0]?.items.length || 0} of {allProducts.length} products
          </span>
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors duration-300 flex items-center gap-2"
          >
            <span>Load More</span>
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      )}

      {/* Show total count when all products are loaded */}
      
    </div>
  );
}

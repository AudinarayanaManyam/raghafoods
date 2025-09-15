'use client';
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Logo from './Logo'
import SearchBar from './SearchBar'
import { useSearch } from '@/contexts/SearchContext'
import { scrollToProducts } from '@/utils/scroll'

export default function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { searchQuery, setSearchQuery } = useSearch();

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  }

  const handleSearchSubmit = () => {
    // Only proceed if there's a search query
    if (searchQuery.trim()) {
      // Check current page location
      const currentPath = window.location.pathname;
      
      if (currentPath === '/') {
        // If on home page, just scroll to products section to show search results
        scrollToProducts();
      } else {
        // If on another page, navigate to home page first
        router.push('/');
        // Small delay to ensure navigation completes before scrolling
        setTimeout(() => {
          scrollToProducts();
        }, 300);
      }
    }
  }

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Update URL hash without reload
    history.pushState(null, '', `/#${sectionId}`);
    
    const section = document.getElementById(sectionId);
    const navbar = document.querySelector('nav');
    
    if (section && navbar) {
      const navbarHeight = navbar.getBoundingClientRect().height;
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      // Account for navbar height and add small padding
      const offsetPosition = elementPosition - navbarHeight - 16;
      
      // Smooth scroll to section
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
    }
  }

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 navbar-responsive">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 zoom-container">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 navbar-responsive">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center min-w-0 max-w-[40%] sm:max-w-none">
            <Link 
              href="/" 
              className="flex items-center min-w-0"
              onClick={(e) => {
                e.preventDefault();
                
                // Clear search, category filters, and URL hash
                setSearchQuery('');
                window.dispatchEvent(new CustomEvent('clearCategoryAndShowAll'));
                history.replaceState(null, '', '/');
                
                // Reset scroll position to top
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
                
                // Close mobile menu
                setIsMobileMenuOpen(false);
                
                // Force router refresh to ensure clean slate
                router.refresh();
              }}
            >
              <Logo />
            </Link>
          </div>

          {/* Search Bar - Responsive */}
          <div className="hidden sm:flex flex-1 max-w-xs lg:max-w-xl mx-2 sm:mx-4 lg:mx-8">
            <SearchBar 
              value={searchQuery}
              onChange={handleSearch}
              onEnter={handleSearchSubmit}
              placeholder="Search for products..."
            />
          </div>

          {/* Desktop & Tablet Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-shrink-0">
            <Link 
              href="/"
              className="text-gray-700 hover:text-orange-600 px-2 xl:px-3 py-2 rounded-md text-sm xl:text-base font-semibold whitespace-nowrap responsive-text"
              onClick={(e) => {
                e.preventDefault();
                
                // Check current page location
                const currentPath = window.location.pathname;
                
                if (currentPath === '/') {
                  // If already on home page, just scroll to top
                  setSearchQuery('');
                  window.dispatchEvent(new CustomEvent('clearCategoryAndShowAll'));
                  
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                } else {
                  // If on another page, navigate to home page
                  setSearchQuery('');
                  window.dispatchEvent(new CustomEvent('clearCategoryAndShowAll'));
                  router.push('/');
                  
                  // Small delay to ensure navigation completes before scrolling
                  setTimeout(() => {
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  }, 300);
                }

                // Reset mobile menu state
                setIsMobileMenuOpen(false);
              }}
            >
              Home
            </Link>
            <Link 
              href="#all-products"
              className="text-gray-700 hover:text-orange-600 px-2 xl:px-3 py-2 rounded-md text-sm xl:text-base font-medium whitespace-nowrap responsive-text"
              onClick={(e) => {
                e.preventDefault();
                setSearchQuery(''); // Clear any search
                
                // Check current page location
                const currentPath = window.location.pathname;
                
                if (currentPath === '/') {
                  // If on home page, just scroll to products section
                  // Dispatch event to clear category and show all products
                  window.dispatchEvent(new CustomEvent('clearCategoryAndShowAll'));
                  
                  // Get navbar height for offset
                  const navbar = document.querySelector('nav');
                  const productsSection = document.getElementById('all-products');
                  
                  if (productsSection && navbar) {
                    const navbarHeight = navbar.getBoundingClientRect().height;
                    const elementPosition = productsSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - navbarHeight - 16;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                } else {
                  // If on another page, navigate to home page first
                  router.push('/');
                  // Small delay to ensure navigation completes before scrolling
                  setTimeout(() => {
                    window.dispatchEvent(new CustomEvent('clearCategoryAndShowAll'));
                    scrollToProducts();
                  }, 300);
                }
                
                setIsMobileMenuOpen(false); // Close mobile menu if open
              }}
            >
              Products
            </Link>
            <Link 
              href="/blogs"
              className="text-gray-700 hover:text-orange-600 px-2 xl:px-3 py-2 rounded-md text-sm xl:text-base font-medium whitespace-nowrap responsive-text flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="mr-1">📰</span>
              Blogs
            </Link>
            <Link 
              href="#about" 
              className="text-gray-700 hover:text-orange-600 px-2 xl:px-3 py-2 rounded-md text-sm xl:text-base font-medium whitespace-nowrap responsive-text"
              onClick={(e) => {
                e.preventDefault();
                
                // Check current page location
                const currentPath = window.location.pathname;
                
                if (currentPath === '/') {
                  // If on home page, just scroll to about section
                  scrollToSection('about')(e);
                } else {
                  // If on another page, navigate to home page first
                  router.push('/');
                  // Small delay to ensure navigation completes before scrolling
                  setTimeout(() => {
                    const section = document.getElementById('about');
                    const navbar = document.querySelector('nav');
                    
                    if (section && navbar) {
                      const navbarHeight = navbar.getBoundingClientRect().height;
                      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - navbarHeight - 16;
                      
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }, 300);
                }
                
                setIsMobileMenuOpen(false); // Close mobile menu if open
              }}
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-700 hover:text-orange-600 px-2 xl:px-3 py-2 rounded-md text-sm xl:text-base font-medium whitespace-nowrap responsive-text"
              onClick={(e) => {
                e.preventDefault();
                
                // Check current page location
                const currentPath = window.location.pathname;
                
                if (currentPath === '/') {
                  // If on home page, just scroll to contact section
                  scrollToSection('contact')(e);
                } else {
                  // If on another page, navigate to home page first
                  router.push('/');
                  // Small delay to ensure navigation completes before scrolling
                  setTimeout(() => {
                    const section = document.getElementById('contact');
                    const navbar = document.querySelector('nav');
                    
                    if (section && navbar) {
                      const navbarHeight = navbar.getBoundingClientRect().height;
                      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - navbarHeight - 16;
                      
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }, 300);
                }
                
                setIsMobileMenuOpen(false); // Close mobile menu if open
              }}
            >
              Contact
            </Link>
          </div>

          {/* Tablet Navigation (between mobile and desktop) */}
          <div className="hidden md:flex lg:hidden items-center space-x-1 flex-shrink-0">
            <Link 
              href="/"
              className="text-gray-700 hover:text-orange-600 px-2 py-2 rounded-md text-xs font-semibold responsive-text"
              onClick={(e) => {
                e.preventDefault();
                
                const currentPath = window.location.pathname;
                
                if (currentPath === '/') {
                  setSearchQuery('');
                  window.dispatchEvent(new CustomEvent('clearCategoryAndShowAll'));
                  
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                } else {
                  setSearchQuery('');
                  window.dispatchEvent(new CustomEvent('clearCategoryAndShowAll'));
                  router.push('/');
                  
                  setTimeout(() => {
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  }, 300);
                }

                setIsMobileMenuOpen(false);
              }}
            >
              Home
            </Link>
            <Link 
              href="#all-products"
              className="text-gray-700 hover:text-orange-600 px-2 py-2 rounded-md text-xs font-medium responsive-text"
              onClick={(e) => {
                e.preventDefault();
                setSearchQuery('');
                
                const currentPath = window.location.pathname;
                
                if (currentPath === '/') {
                  window.dispatchEvent(new CustomEvent('clearCategoryAndShowAll'));
                  
                  const navbar = document.querySelector('nav');
                  const productsSection = document.getElementById('all-products');
                  
                  if (productsSection && navbar) {
                    const navbarHeight = navbar.getBoundingClientRect().height;
                    const elementPosition = productsSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - navbarHeight - 16;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                } else {
                  router.push('/');
                  setTimeout(() => {
                    window.dispatchEvent(new CustomEvent('clearCategoryAndShowAll'));
                    scrollToProducts();
                  }, 300);
                }
                
                setIsMobileMenuOpen(false);
              }}
            >
              Products
            </Link>
            <Link 
              href="/blogs"
              className="text-gray-700 hover:text-orange-600 px-2 py-2 rounded-md text-xs font-medium responsive-text flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="mr-1 text-xs">📰</span>
              Blogs
            </Link>
            <Link 
              href="#about" 
              className="text-gray-700 hover:text-orange-600 px-2 py-2 rounded-md text-xs font-medium responsive-text"
              onClick={(e) => {
                e.preventDefault();
                
                const currentPath = window.location.pathname;
                
                if (currentPath === '/') {
                  scrollToSection('about')(e);
                } else {
                  router.push('/');
                  setTimeout(() => {
                    const section = document.getElementById('about');
                    const navbar = document.querySelector('nav');
                    
                    if (section && navbar) {
                      const navbarHeight = navbar.getBoundingClientRect().height;
                      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - navbarHeight - 16;
                      
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }, 300);
                }
                
                setIsMobileMenuOpen(false);
              }}
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-700 hover:text-orange-600 px-2 py-2 rounded-md text-xs font-medium responsive-text"
              onClick={(e) => {
                e.preventDefault();
                
                const currentPath = window.location.pathname;
                
                if (currentPath === '/') {
                  scrollToSection('contact')(e);
                } else {
                  router.push('/');
                  setTimeout(() => {
                    const section = document.getElementById('contact');
                    const navbar = document.querySelector('nav');
                    
                    if (section && navbar) {
                      const navbarHeight = navbar.getBoundingClientRect().height;
                      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - navbarHeight - 16;
                      
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }, 300);
                }
                
                setIsMobileMenuOpen(false);
              }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden sm:ml-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 focus:outline-none"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 sm:px-4 pt-2 pb-3 space-y-2 shadow-lg">
            {/* Search Bar - Mobile */}
            <div className="sm:hidden px-2 py-2">
              <SearchBar 
                value={searchQuery}
                onChange={handleSearch}
                onEnter={handleSearchSubmit}
                placeholder="Search for products..."
              />
            </div>
            <div className="space-y-1 py-2">
              <Link 
                href="#"
                className="text-gray-700 hover:text-orange-600 block px-3 py-2.5 rounded-lg text-base font-medium hover:bg-orange-50 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  
                  // Check current page location
                  const currentPath = window.location.pathname;
                  
                  if (currentPath === '/') {
                    // If already on home page, just scroll to top
                    setSearchQuery('');
                    window.dispatchEvent(new CustomEvent('clearCategoryAndShowAll'));
                    
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  } else {
                    // If on another page, navigate to home page
                    setSearchQuery('');
                    window.dispatchEvent(new CustomEvent('clearCategoryAndShowAll'));
                    router.push('/');
                    
                    // Small delay to ensure navigation completes before scrolling
                    setTimeout(() => {
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                    }, 300);
                  }
                }}
              >
                Home
              </Link>
              <Link 
                href="#"
                className="text-gray-700 hover:text-orange-600 block px-3 py-2.5 rounded-lg text-base font-medium hover:bg-orange-50 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  setSearchQuery(''); // Clear any search
                  
                  // Check current page location
                  const currentPath = window.location.pathname;
                  
                  if (currentPath === '/') {
                    // If on home page, just scroll to products section
                    scrollToSection('all-products')(e);
                  } else {
                    // If on another page, navigate to home page first
                    router.push('/');
                    // Small delay to ensure navigation completes before scrolling
                    setTimeout(() => {
                      window.dispatchEvent(new CustomEvent('clearCategoryAndShowAll'));
                      scrollToProducts();
                    }, 300);
                  }
                }}
              >
                Products
              </Link>
              <Link 
                href="/blogs"
                className="text-gray-700 hover:text-orange-600 block px-3 py-2.5 rounded-lg text-base font-medium hover:bg-orange-50 transition-colors duration-200 flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mr-2">📰</span>
                Blogs
              </Link>
              <Link 
                href="#about" 
                className="text-gray-700 hover:text-orange-600 block px-3 py-2.5 rounded-lg text-base font-medium hover:bg-orange-50 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  
                  // Check current page location
                  const currentPath = window.location.pathname;
                  
                  if (currentPath === '/') {
                    // If on home page, just scroll to about section
                    scrollToSection('about')(e);
                  } else {
                    // If on another page, navigate to home page first
                    router.push('/');
                    // Small delay to ensure navigation completes before scrolling
                    setTimeout(() => {
                      const section = document.getElementById('about');
                      const navbar = document.querySelector('nav');
                      
                      if (section && navbar) {
                        const navbarHeight = navbar.getBoundingClientRect().height;
                        const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
                        const offsetPosition = elementPosition - navbarHeight - 16;
                        
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }, 300);
                  }
                }}
              >
                About
              </Link>
              <Link 
                href="#contact" 
                className="text-gray-700 hover:text-orange-600 block px-3 py-2.5 rounded-lg text-base font-medium hover:bg-orange-50 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  
                  // Check current page location
                  const currentPath = window.location.pathname;
                  
                  if (currentPath === '/') {
                    // If on home page, just scroll to contact section
                    scrollToSection('contact')(e);
                  } else {
                    // If on another page, navigate to home page first
                    router.push('/');
                    // Small delay to ensure navigation completes before scrolling
                    setTimeout(() => {
                      const section = document.getElementById('contact');
                      const navbar = document.querySelector('nav');
                      
                      if (section && navbar) {
                        const navbarHeight = navbar.getBoundingClientRect().height;
                        const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
                        const offsetPosition = elementPosition - navbarHeight - 16;
                        
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }, 300);
                  }
                }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

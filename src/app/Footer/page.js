'use client';

import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSearch } from '@/contexts/SearchContext';
  




  
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/raagafoods',
      icon: '/social/facebook.svg',
      hoverClass: 'hover:text-[#1877F2]'  // Facebook brand color
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/raagafoods',
      icon: '/social/twitter.svg',
      hoverClass: 'hover:text-[#1DA1F2]'  // Twitter brand color
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/raagafoods',
      icon: '/social/instagram.svg',
      hoverClass: 'hover:text-[#E4405F]'  // Instagram brand color
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/raagafoods',
      icon: '/social/youtube.svg',
      hoverClass: 'hover:text-[#FF0000]'  // YouTube brand color
    }
  ];
  
  export default function Footer() {
    const router = useRouter();
    const { setSearchQuery } = useSearch();

    const handleHomeClick = (e) => {
      e.preventDefault();
      
      // Check current page location
      const currentPath = window.location.pathname;
      
      if (currentPath === '/') {
        // If already on home page, just scroll to top and clear filters
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
    };

    const handleSectionClick = (sectionId) => (e) => {
      e.preventDefault();
      
      // Check current page location
      const currentPath = window.location.pathname;
      
      if (currentPath === '/') {
        // If on home page, just scroll to section
        const section = document.getElementById(sectionId);
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
      } else {
        // If on another page, navigate to home page first
        router.push('/');
        
        // Small delay to ensure navigation completes before scrolling
        setTimeout(() => {
          const section = document.getElementById(sectionId);
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
    };

    const handleAboutClick = (e) => {
      e.preventDefault();
      
      // Check current page location
      const currentPath = window.location.pathname;
      
      if (currentPath === '/') {
        // If already on home page, just scroll to about section
        const aboutSection = document.getElementById('about');
        const navbar = document.querySelector('nav');
        
        if (aboutSection && navbar) {
          const navbarHeight = navbar.getBoundingClientRect().height;
          const elementPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight - 16;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        // If on another page, navigate to home page first
        router.push('/');
        
        // Longer delay to ensure navigation and page load completes before scrolling
        setTimeout(() => {
          const aboutSection = document.getElementById('about');
          const navbar = document.querySelector('nav');
          
          if (aboutSection && navbar) {
            const navbarHeight = navbar.getBoundingClientRect().height;
            const elementPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight - 16;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 500);
      }
    };
    



  
  
  
  
  
  
  
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Brand / About */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Raaga Foods</h3>
          <p className="text-sm leading-relaxed">
            Bringing you authentic Indian pickles with traditional flavors and
            premium quality ingredients.
          </p>
          
                      <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src={social.icon}
                      alt={social.name}
                      fill
                      className="object-contain brightness-0 invert opacity-90 hover:opacity-100"
                    />
                  </div>
                </Link>
              ))}
            </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link 
                href="/" 
                className="hover:text-white transition-colors duration-200"
                onClick={handleHomeClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="#all-products" 
                className="hover:text-white transition-colors duration-200"
                onClick={handleSectionClick('all-products')}
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                href="#about" 
                className="hover:text-white transition-colors duration-200"
                onClick={handleAboutClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="#contact" 
                className="hover:text-white transition-colors duration-200"
                onClick={handleSectionClick('contact')}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact Info */}

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Raaga Foods. All rights reserved.
      </div>
    </footer>
  );
}

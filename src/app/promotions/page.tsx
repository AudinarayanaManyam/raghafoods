'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: string;
  code?: string;
  validUntil: string;
  image: string;
  category: string;
  minOrder?: string;
  featured: boolean;
  termsAndConditions: string[];
  usageCount?: number;
  maxUsage?: number;
}

const promotions: Promotion[] = [
  {
    id: 'welcome-offer',
    title: 'Welcome to Raaga Foods',
    description: 'Get started with authentic South Indian flavors! Perfect for new customers to experience our premium quality products.',
    discount: '25% OFF',
    code: 'WELCOME25',
    validUntil: '2024-12-31',
    image: '/categories/pickles-banner.jpg',
    category: 'New Customer',
    minOrder: '₹500',
    featured: true,
    termsAndConditions: [
      'Valid for new customers only',
      'Minimum order value ₹500',
      'Cannot be combined with other offers',
      'Valid on all products except combo deals',
      'Free shipping on orders above ₹999'
    ],
    usageCount: 1247,
    maxUsage: 5000
  },
  {
    id: 'pickle-special',
    title: 'Pickle Paradise',
    description: 'Dive into our authentic pickle collection! Made with traditional recipes and premium ingredients.',
    discount: '20% OFF',
    code: 'PICKLE20',
    validUntil: '2024-11-30',
    image: '/categories/pickle.jpg',
    category: 'Category Special',
    minOrder: '₹300',
    featured: true,
    termsAndConditions: [
      'Valid on all pickle varieties',
      'Minimum order value ₹300',
      'Valid for all customers',
      'Free shipping on orders above ₹999'
    ],
    usageCount: 856,
    maxUsage: 3000
  },
  {
    id: 'batter-combo',
    title: 'Batter Bonanza',
    description: 'Fresh, fermented batters for perfect idlis and dosas every time. Ready to cook convenience!',
    discount: '15% OFF',
    code: 'BATTER15',
    validUntil: '2024-10-31',
    image: '/categories/Batters.jpg',
    category: 'Combo Deal',
    minOrder: '₹400',
    featured: false,
    termsAndConditions: [
      'Valid on all batter products',
      'Minimum order value ₹400',
      'Valid for all customers',
      'Cannot be combined with other offers'
    ],
    usageCount: 432,
    maxUsage: 1500
  },
  {
    id: 'powder-power',
    title: 'Spice It Up',
    description: 'Authentic South Indian spice powders to elevate your cooking. Traditional blends with modern packaging.',
    discount: '18% OFF',
    code: 'SPICE18',
    validUntil: '2024-11-15',
    image: '/categories/powders.jpg',
    category: 'Spice Special',
    minOrder: '₹350',
    featured: false,
    termsAndConditions: [
      'Valid on all spice powder products',
      'Minimum order value ₹350',
      'Valid for all customers',
      'Free recipe book with orders above ₹750'
    ],
    usageCount: 623,
    maxUsage: 2000
  },
  {
    id: 'festive-feast',
    title: 'Festive Celebration',
    description: 'Celebrate festivals with authentic flavors! Special combo packs for festive occasions.',
    discount: '30% OFF',
    code: 'FESTIVE30',
    validUntil: '2024-10-31',
    image: '/categories/veg.jpg',
    category: 'Festival Special',
    minOrder: '₹1000',
    featured: true,
    termsAndConditions: [
      'Valid on festive combo packs only',
      'Minimum order value ₹1000',
      'Limited time offer',
      'Free express delivery included',
      'Gift wrapping available'
    ],
    usageCount: 234,
    maxUsage: 1000
  },
  {
    id: 'bulk-order',
    title: 'Bulk Order Savings',
    description: 'Perfect for restaurants, hostels, and large families. Wholesale prices with retail convenience.',
    discount: '35% OFF',
    validUntil: '2024-12-31',
    image: '/categories/Non-Veg.jpg',
    category: 'Bulk Orders',
    minOrder: '₹2500',
    featured: false,
    termsAndConditions: [
      'Valid on bulk orders only',
      'Minimum order value ₹2500',
      'Valid for commercial and personal use',
      'Free delivery and setup',
      'Dedicated customer support'
    ],
    usageCount: 89,
    maxUsage: 500
  }
];

const categories = ['All', 'New Customer', 'Category Special', 'Combo Deal', 'Spice Special', 'Festival Special', 'Bulk Orders'];

export default function PromotionsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedCode, setCopiedCode] = useState('');

  const filteredPromotions = selectedCategory === 'All' 
    ? promotions 
    : promotions.filter(promo => promo.category === selectedCategory);

  const featuredPromotions = promotions.filter(promo => promo.featured);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getUsagePercentage = (used: number = 0, max: number = 0) => {
    if (max === 0) return 0;
    return Math.min((used / max) * 100, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🎯 <span className="text-orange-600">Exclusive Promotions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing deals on authentic South Indian food products. Save more while enjoying the traditional flavors of Raaga Foods.
          </p>
        </div>

        {/* Featured Promotions Banner */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-2">⭐</span>
            Featured Deals
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {featuredPromotions.map((promotion) => (
              <div
                key={promotion.id}
                className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {promotion.discount}
                  </span>
                </div>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={promotion.image}
                    alt={promotion.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">
                      {promotion.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      Until {formatDate(promotion.validUntil)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{promotion.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{promotion.description}</p>
                  
                  {promotion.code && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border-2 border-dashed border-gray-300">
                        <span className="font-mono font-bold text-lg text-gray-900">{promotion.code}</span>
                        <button
                          onClick={() => handleCopyCode(promotion.code!)}
                          className="bg-orange-600 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors"
                        >
                          {copiedCode === promotion.code ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                    </div>
                  )}

                  {promotion.usageCount && promotion.maxUsage && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Usage</span>
                        <span>{promotion.usageCount} / {promotion.maxUsage}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${getUsagePercentage(promotion.usageCount, promotion.maxUsage)}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <Link
                    href="/#all-products"
                    className="block w-full bg-orange-600 text-white text-center py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Promotions</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* All Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPromotions.map((promotion) => (
            <div
              key={promotion.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={promotion.image}
                  alt={promotion.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {promotion.discount}
                  </span>
                </div>
                {promotion.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      ⭐ FEATURED
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">
                    {promotion.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    Until {formatDate(promotion.validUntil)}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{promotion.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{promotion.description}</p>
                
                {promotion.minOrder && (
                  <p className="text-sm text-gray-500 mb-3">
                    Minimum order: <span className="font-medium">{promotion.minOrder}</span>
                  </p>
                )}

                {promotion.code && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg border border-gray-200">
                      <span className="font-mono font-bold text-sm text-gray-900">{promotion.code}</span>
                      <button
                        onClick={() => handleCopyCode(promotion.code!)}
                        className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-medium hover:bg-orange-700 transition-colors"
                      >
                        {copiedCode === promotion.code ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                  </div>
                )}

                {promotion.usageCount && promotion.maxUsage && (
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Used</span>
                      <span>{promotion.usageCount} / {promotion.maxUsage}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-orange-600 h-1.5 rounded-full transition-all duration-300"
                        style={{ width: `${getUsagePercentage(promotion.usageCount, promotion.maxUsage)}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Link
                    href="/#all-products"
                    className="block w-full bg-orange-600 text-white text-center py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors text-sm"
                  >
                    Shop Now
                  </Link>
                  <details className="text-xs text-gray-600">
                    <summary className="cursor-pointer font-medium hover:text-orange-600">
                      Terms & Conditions
                    </summary>
                    <ul className="mt-2 space-y-1 pl-4">
                      {promotion.termsAndConditions.map((term, index) => (
                        <li key={index} className="list-disc">{term}</li>
                      ))}
                    </ul>
                  </details>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-orange-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Don&apos;t Miss Out!
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers and start your authentic South Indian food journey with Raaga Foods.
          </p>
          <Link
            href="/#all-products"
            className="inline-flex items-center bg-orange-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-700 transition-colors"
          >
            <span>Start Shopping</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
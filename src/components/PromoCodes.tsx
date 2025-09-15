'use client';

import { useState } from 'react';
;
import { ShareMenu, shareUtils } from './ShareMenu';

interface PromoCodesProps {
  className?: string;
}

export default function PromoCodes({ className = '' }: PromoCodesProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [openShareMenus, setOpenShareMenus] = useState<{ [key: string]: boolean }>({});

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const toggleShareMenu = (promoId: string) => {
    setOpenShareMenus(prev => ({
      ...prev,
      [promoId]: !prev[promoId]
    }));
  };

  const handleShare = (promo: PromoCode, platform: string) => {
    const promoUrl = `${window.location.origin}/offers#promo-${promo.id}`;
    const shareTitle = `Amazing Offer from Raaga Foods!`;
    const shareText = `🎉 ${promo.title} - Use code "${promo.code}" for ${promo.discount}! Valid until ${promo.validUntil}. ${promo.description}`;

    shareUtils.handleShare(platform, shareTitle, shareText, promoUrl, () => {
      setOpenShareMenus(prev => ({ ...prev, [promo.id]: false }));
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getProgressPercentage = (used: number, max?: number) => {
    if (!max) return 0;
    return Math.min((used / max) * 100, 100);
  };

  return (
    <div className={`bg-white ${className}`} id="offers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 Exclusive Offers & Promo Codes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Save more on authentic South Indian flavors! Copy these exclusive codes and share with friends.
          </p>
        </div>

        {/* Promo Codes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promoCodes.map((promo) => {
            const isShareMenuOpen = openShareMenus[promo.id];
            const progressPercentage = getProgressPercentage(promo.usageCount, promo.maxUsage);
            
            return (
              <div key={promo.id} id={`promo-${promo.id}`} className="relative bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                {/* Header with Share */}
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-lg">
                    {promo.discount}
                  </div>
                  
                  {/* Share Button */}
                  <ShareMenu
                    isOpen={isShareMenuOpen}
                    onShare={(platform) => handleShare(promo, platform)}
                    onToggle={() => toggleShareMenu(promo.id)}
                  />
                </div>

                {/* Category Badge */}
                {promo.category && (
                  <div className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {promo.category}
                  </div>
                )}

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{promo.title}</h3>
                <p className="text-gray-700 mb-4">{promo.description}</p>

                {/* Promo Code */}
                <div className="flex items-center justify-between bg-white/80 rounded-lg p-3 border-2 border-dashed border-orange-300 mb-4">
                  <div className="flex-1">
                    <span className="text-sm text-gray-600">Promo Code:</span>
                    <div className="font-mono font-bold text-lg text-orange-600">{promo.code}</div>
                  </div>
                  <button
                    onClick={() => handleCopyCode(promo.code)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      copiedCode === promo.code
                        ? 'bg-green-500 text-white'
                        : 'bg-orange-500 text-white hover:bg-orange-600'
                    }`}
                  >
                    {copiedCode === promo.code ? '✓ Copied!' : 'Copy Code'}
                  </button>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Valid Until:</span>
                    <div className="font-semibold text-gray-900">{formatDate(promo.validUntil)}</div>
                  </div>
                  {promo.minOrder && (
                    <div>
                      <span className="text-gray-600">Min Order:</span>
                      <div className="font-semibold text-gray-900">{promo.minOrder}</div>
                    </div>
                  )}
                </div>

                {/* Usage Progress */}
                {promo.maxUsage && (
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Used: {promo.usageCount}</span>
                      <span>Total: {promo.maxUsage}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {promo.maxUsage - promo.usageCount} uses remaining
                    </div>
                  </div>
                )}

                {/* Terms and Conditions */}
                <div className="mt-4 pt-4 border-t border-orange-200">
                  <details className="group">
                    <summary className="text-sm text-gray-600 cursor-pointer hover:text-gray-800 transition-colors">
                      Terms & Conditions
                      <span className="ml-1 group-open:rotate-180 inline-block transition-transform">▼</span>
                    </summary>
                    <div className="mt-2 text-xs text-gray-600 space-y-1">
                      {promo.termsAndConditions.map((term, index) => (
                        <div key={index}>• {term}</div>
                      ))}
                    </div>
                  </details>
                </div>

                {/* Action Button */}
                <div className="mt-6">
                  <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                    Shop Now & Save
                  </button>
                </div>

                {/* Amazon-style corner ribbon */}
                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                  SAVE BIG
                </div>
              </div>
            );
          })}
        </div>

        {/* How to Use Section */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How to Use Promo Codes</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">1. Copy Code</h4>
              <p className="text-sm text-gray-600">Click "Copy Code" on any offer above</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">2. Shop Products</h4>
              <p className="text-sm text-gray-600">Add your favorite items to cart</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">3. Apply at Checkout</h4>
              <p className="text-sm text-gray-600">Paste code during checkout process</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">4. Enjoy Savings</h4>
              <p className="text-sm text-gray-600">Get instant discount on your order</p>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">💝 Share These Offers</h3>
          <p className="text-gray-600 mb-6">
            Love these deals? Share them with family and friends so they can enjoy authentic South Indian food at great prices!
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => {
                const shareText = "🎉 Amazing offers at Raaga Foods! Check out these exclusive promo codes for authentic South Indian food.";
                const shareUrl = `${window.location.origin}/offers`;
                shareUtils.handleShare('whatsapp', 'Raaga Foods Offers', shareText, shareUrl);
              }}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
            >
              Share on WhatsApp
            </button>
            <button 
              onClick={() => {
                const shareText = "🎉 Amazing offers at Raaga Foods! Check out these exclusive promo codes for authentic South Indian food.";
                const shareUrl = `${window.location.origin}/offers`;
                shareUtils.handleShare('facebook', 'Raaga Foods Offers', shareText, shareUrl);
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Share on Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

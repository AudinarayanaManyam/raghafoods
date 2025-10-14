'use client';

import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onEnter?: () => void;
}

export default function SearchBar({ value, onChange, placeholder = 'Search products...', onEnter }: SearchBarProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.trim() && onEnter) {
      onEnter();
    }
  };

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full px-4 sm:px-6 py-2 sm:py-2.5 md:py-3 pl-8 sm:pl-10 md:pl-12 pr-10 sm:pr-12 md:pr-14 text-sm sm:text-base md:text-lg text-gray-700 bg-white border-2 border-gray-300 rounded-full focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 shadow-sm transition-all duration-200"
      />
      <FaSearch className="absolute left-2 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base md:text-lg" />
      {value && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={() => onChange('')}
          className="absolute right-2 sm:right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500 text-lg focus:outline-none"
          style={{ padding: 0, background: 'none', border: 'none', cursor: 'pointer' }}
        >
          ×
        </button>
      )}
    </div>
  );
}

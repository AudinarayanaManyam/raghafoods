'use client';

export default function Loading() {
  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center h-64">
          <div className="animate-pulse text-gray-600">Loading products...</div>
        </div>
      </div>
    </div>
  );
}

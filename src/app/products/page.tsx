// 'use client';

// import { useSearchParams } from 'next/navigation';
// import { Suspense, useEffect, useState } from 'react';
// import ProductsList from '@/components/ProductsList';
// import Loading from './loading';

// export default function ProductsPage() {
//   const searchParams = useSearchParams();
//   const category = searchParams.get('category');
//   const [isScrolledToProducts, setIsScrolledToProducts] = useState(false);

//   useEffect(() => {
//     // Check if we came from a product detail page (back navigation)
//     if (!isScrolledToProducts && document.referrer.includes('/products/')) {
//       // Get any fixed navbar height
//       const navbar = document.querySelector('nav');
//       const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
      
//       // Scroll with offset for navbar
//       window.scrollTo({
//         top: Math.max(0, window.scrollY - navbarHeight - 16),
//         behavior: 'smooth'
//       });
      
//       setIsScrolledToProducts(true);
//     }
//   }, [isScrolledToProducts]);

//   return (
//     <Suspense fallback={<Loading />}>
//       <div className="min-h-screen py-8 sm:py-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="space-y-6">
//             <div className="flex justify-between items-center">
//               <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
//                 {category ? `${category} Products` : 'All Products'}
//               </h1>
//             </div>
//             <ProductsList selectedCategory={category || undefined} />
//           </div>
//         </div>
//       </div>
//     </Suspense>
//   );
// }
'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import ProductsList from '@/components/ProductsList';
import Loading from './loading';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const [isScrolledToProducts, setIsScrolledToProducts] = useState(false);

  useEffect(() => {
    // Check if we came from a product detail page (back navigation)
    if (!isScrolledToProducts && document.referrer.includes('/products/')) {
      // Get any fixed navbar height
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
      
      // Scroll with offset for navbar
      window.scrollTo({
        top: Math.max(0, window.scrollY - navbarHeight - 16),
        behavior: 'smooth'
      });
      
      setIsScrolledToProducts(true);
    }
  }, [isScrolledToProducts]);

  return (
    <Suspense fallback={<Loading />}>
      <div className="min-h-screen py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                {category ? `${category} Products` : 'All Products'}
              </h1>
            </div>
            <ProductsList selectedCategory={category || undefined} />
          </div>
        </div>
      </div>
    </Suspense>
  );
}


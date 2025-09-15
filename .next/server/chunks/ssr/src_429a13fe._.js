module.exports = [
"[project]/src/data/products.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "products",
    ()=>products
]);
const products = [
    {
        id: '1',
        name: 'Mango Pickle',
        description: 'Authentic Andhra Mango Pickle made with traditional spices and pure oil',
        category: 'Pickles',
        image: '/products/mango-pickle.jpg',
        tags: [
            'spicy',
            'traditional',
            'andhra style',
            'veg'
        ],
        benefits: [
            'Made with fresh, hand-picked mangoes',
            'Traditional Andhra recipe',
            'No artificial preservatives',
            'Rich in antioxidants'
        ],
        ingredients: [
            'Raw Mangoes',
            'Mustard Oil',
            'Red Chili Powder',
            'Salt',
            'Turmeric',
            'Fenugreek Seeds',
            'Mustard Seeds'
        ],
        storageInfo: 'Store in a cool, dry place. Keep away from direct sunlight.',
        shelfLife: '12 months from manufacturing date'
    },
    {
        id: '2',
        name: 'Mixed Vegetable Pickle',
        description: 'Spicy Mixed Vegetable Pickle with a perfect blend of vegetables and spices',
        category: 'Pickles',
        image: '/products/mixed_veg.jpg',
        tags: [
            'mixed veg',
            'spicy',
            'traditional',
            'veg'
        ],
        benefits: [
            'Mix of fresh vegetables',
            'Traditional recipe',
            'No artificial preservatives',
            'Rich in nutrients'
        ],
        ingredients: [
            'Mixed Vegetables',
            'Mustard Oil',
            'Red Chili Powder',
            'Salt',
            'Turmeric',
            'Spices'
        ],
        storageInfo: 'Store in a cool, dry place. Keep away from direct sunlight.',
        shelfLife: '12 months from manufacturing date'
    },
    {
        id: '3',
        name: 'Gongura Pickle',
        description: 'Homestyle Gongura Pickle, a traditional Andhra delicacy',
        category: 'Pickles',
        image: '/products/gongura.jpg',
        tags: [
            'gongura',
            'andhra style',
            'traditional',
            'veg'
        ],
        benefits: [
            'Made with fresh Gongura leaves',
            'Rich in iron and vitamins',
            'Authentic Andhra taste',
            'No artificial preservatives'
        ],
        ingredients: [
            'Gongura Leaves',
            'Red Chili Powder',
            'Salt',
            'Garlic',
            'Oil',
            'Spices'
        ],
        storageInfo: 'Store in a cool, dry place. Keep away from direct sunlight.',
        shelfLife: '12 months from manufacturing date'
    },
    {
        id: '4',
        name: 'Dosa Batter',
        description: 'Fresh ground Dosa Batter made with premium rice and urad dal',
        category: 'Batters',
        image: '/products/dosa-batter.jpg',
        tags: [
            'fresh',
            'fermented',
            'breakfast',
            'veg'
        ],
        benefits: [
            'Freshly ground daily',
            'Perfect fermentation',
            'No preservatives',
            'Ready to use'
        ],
        ingredients: [
            'Rice',
            'Urad Dal',
            'Fenugreek Seeds',
            'Salt'
        ],
        storageInfo: 'Keep refrigerated at 4°C',
        shelfLife: '3 days from manufacturing date'
    },
    {
        id: '5',
        name: 'Idli Batter',
        description: 'Idli Batter prepared with perfect proportions for soft and fluffy idlis',
        category: 'Batters',
        image: '/products/idly.jpg',
        tags: [
            'fresh',
            'fermented',
            'breakfast',
            'veg'
        ],
        benefits: [
            'Freshly ground daily',
            'Perfect consistency',
            'No preservatives',
            'Ready to use'
        ],
        ingredients: [
            'Rice',
            'Urad Dal',
            'Fenugreek Seeds',
            'Salt'
        ],
        storageInfo: 'Keep refrigerated at 4°C',
        shelfLife: '3 days from manufacturing date'
    },
    {
        id: '6',
        name: 'Sambar Powder',
        description: 'Sambar Powder made with roasted spices and lentils',
        category: 'Powders',
        image: '/products/sambar.jpg',
        tags: [
            'spices',
            'blend',
            'authentic'
        ],
        benefits: [
            'Freshly ground spices',
            'Traditional recipe',
            'No artificial additives',
            'Rich aroma'
        ],
        ingredients: [
            'Coriander',
            'Red Chilies',
            'Turmeric',
            'Cumin',
            'Fenugreek',
            'Black Pepper',
            'Curry Leaves'
        ],
        storageInfo: 'Store in an airtight container in a cool, dry place',
        shelfLife: '6 months from manufacturing date'
    },
    {
        id: '7',
        name: 'Rasam Powder',
        description: 'Rasam Powder blended with handpicked spices for authentic taste',
        category: 'Powders',
        image: '/products/rasam.jpg',
        tags: [
            'spices',
            'blend',
            'authentic'
        ],
        benefits: [
            'Perfect blend of spices',
            'Traditional recipe',
            'No artificial additives',
            'Rich in flavor'
        ],
        ingredients: [
            'Black Pepper',
            'Cumin',
            'Coriander',
            'Red Chilies',
            'Garlic',
            'Curry Leaves'
        ],
        storageInfo: 'Store in an airtight container in a cool, dry place',
        shelfLife: '6 months from manufacturing date'
    },
    {
        id: '8',
        name: 'Curry Powder',
        description: 'Special Curry Powder perfect for vegetable and meat dishes',
        category: 'Powders',
        image: '/products/curry.jpg',
        tags: [
            'spices',
            'blend',
            'versatile'
        ],
        benefits: [
            'Versatile blend',
            'Rich aroma',
            'No artificial additives',
            'Perfect for multiple dishes'
        ],
        ingredients: [
            'Coriander',
            'Cumin',
            'Turmeric',
            'Red Chilies',
            'Black Pepper',
            'Cardamom',
            'Cinnamon'
        ],
        storageInfo: 'Store in an airtight container in a cool, dry place',
        shelfLife: '6 months from manufacturing date'
    },
    {
        id: '9',
        name: 'Chicken Pickle',
        description: 'Authentic Andhra Chicken Pickle made with traditional spices and pure oil',
        category: 'Pickles',
        image: '/products/chicken.jpg',
        tags: [
            'spicy',
            'traditional',
            'andhra style',
            'non-veg'
        ],
        benefits: [
            'Made with fresh, hand-picked Chicken',
            'Traditional Andhra recipe',
            'No artificial preservatives',
            'Rich in antioxidants'
        ],
        ingredients: [
            'Chicken',
            'Mustard Oil',
            'Red Chili Powder',
            'Salt',
            'Turmeric',
            'Fenugreek Seeds',
            'Mustard Seeds'
        ],
        storageInfo: 'Store in a cool, dry place. Keep away from direct sunlight.',
        shelfLife: '12 months from manufacturing date'
    }
];
}),
"[project]/src/app/products/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const getProductDetails = (id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].find((product)=>product.id === id);
};
function ProductDetail() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const id = typeof params.id === 'string' ? params.id : '';
    const product = getProductDetails(id);
    const handleBackToProducts = (e)=>{
        e.preventDefault();
        // Navigate to home page
        router.push('/');
        // Wait for navigation and then scroll to products section
        setTimeout(()=>{
            const productsSection = document.getElementById('all-products');
            const navbar = document.querySelector('nav');
            if (productsSection && navbar) {
                const navbarHeight = navbar.getBoundingClientRect().height;
                const elementPosition = productsSection.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight - 16;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 500);
    };
    if (!product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col items-center justify-center p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-gray-800 mb-4",
                    children: "Product not found"
                }, void 0, false, {
                    fileName: "[project]/src/app/products/[id]/page.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/products",
                    className: "text-orange-600 hover:text-orange-700 font-medium",
                    children: "Back to Products"
                }, void 0, false, {
                    fileName: "[project]/src/app/products/[id]/page.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/products/[id]/page.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-4 py-8 sm:py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "inline-flex items-center text-orange-600 hover:text-orange-700 font-medium group transition-transform duration-200 ease-in-out transform hover:-translate-x-1",
                    onClick: handleBackToProducts,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5 mr-2 transition-transform duration-200 ease-in-out transform group-hover:translate-x-1",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/[id]/page.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/products/[id]/page.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        "Back to Products"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/products/[id]/page.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/products/[id]/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: product.image || '/products/placeholder.jpg',
                            alt: product.name,
                            fill: true,
                            className: "object-cover",
                            sizes: "(max-width: 768px) 100vw, 50vw",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/products/[id]/page.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/[id]/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block px-3 py-1 text-sm bg-orange-100 text-orange-600 rounded-full mb-4",
                                        children: product.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/[id]/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl sm:text-3xl font-bold text-gray-800 mb-4",
                                        children: product.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/[id]/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-gray-600 mb-4",
                                        children: product.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/[id]/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/products/[id]/page.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            product.benefits && product.benefits.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold text-gray-800 mb-3",
                                        children: "Benefits"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/[id]/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2",
                                        children: product.benefits.map((benefit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-orange-500 mr-2",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/products/[id]/page.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-600",
                                                        children: benefit
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/products/[id]/page.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/products/[id]/page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/[id]/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/products/[id]/page.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            product.ingredients && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold text-gray-800 mb-3",
                                        children: "Ingredients"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/[id]/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: product.ingredients.map((ingredient, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm",
                                                children: ingredient
                                            }, index, false, {
                                                fileName: "[project]/src/app/products/[id]/page.tsx",
                                                lineNumber: 140,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/[id]/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/products/[id]/page.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-auto space-y-4 border-t border-gray-200 pt-6",
                                children: [
                                    product.storageInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-semibold text-gray-800 mb-2",
                                                children: "Storage Information"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/[id]/page.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600",
                                                children: product.storageInfo
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/[id]/page.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/products/[id]/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    product.shelfLife && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-semibold text-gray-800 mb-2",
                                                children: "Shelf Life"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/[id]/page.tsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600",
                                                children: product.shelfLife
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/[id]/page.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/products/[id]/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/products/[id]/page.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#contact",
                                    className: "inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-300",
                                    children: "Contact for Price"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/products/[id]/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/[id]/page.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/products/[id]/page.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/products/[id]/page.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/products/[id]/page.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_429a13fe._.js.map
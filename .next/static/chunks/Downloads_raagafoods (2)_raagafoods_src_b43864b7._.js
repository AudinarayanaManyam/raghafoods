(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/raagafoods (2)/raagafoods/src/components/Slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Slider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const slides = [
    {
        id: 1,
        image: '/slides/Raaga 5.png'
    },
    {
        id: 2,
        image: '/slides/Raaga 6.png'
    },
    {
        id: 3,
        image: '/slides/Raaga 7.png'
    },
    {
        id: 4,
        image: '/slides/Raaga 9.png'
    }
];
function Slider() {
    _s();
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Auto-slide every 5 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Slider.useEffect": ()=>{
            const timer = setInterval({
                "Slider.useEffect.timer": ()=>{
                    setCurrentSlide({
                        "Slider.useEffect.timer": (prev)=>prev === slides.length - 1 ? 0 : prev + 1
                    }["Slider.useEffect.timer"]);
                }
            }["Slider.useEffect.timer"], 5000);
            return ({
                "Slider.useEffect": ()=>clearInterval(timer)
            })["Slider.useEffect"];
        }
    }["Slider.useEffect"], []);
    // Navigation functions
    const nextSlide = ()=>{
        setCurrentSlide((prev)=>prev === slides.length - 1 ? 0 : prev + 1);
    };
    const prevSlide = ()=>{
        setCurrentSlide((prev)=>prev === 0 ? slides.length - 1 : prev - 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-hidden bg-gray-100 rounded-lg shadow-lg mt-4 sm:mt-6 md:mt-8 lg:mt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-[180px] xs:h-[200px] sm:h-[240px] md:h-[3px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex transition-transform duration-500 ease-out",
                    style: {
                        transform: "translateX(-".concat(currentSlide * 100, "%)")
                    },
                    children: slides.map((slide)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-full flex-shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: slide.image,
                                            alt: "Raaga Foods Slide ".concat(slide.id, " - Product Showcase"),
                                            fill: true,
                                            className: "object-cover transition-transform duration-300 hover:scale-[1.02]",
                                            style: {
                                                objectFit: 'cover',
                                                objectPosition: 'center center'
                                            },
                                            priority: slide.id === 1,
                                            sizes: "(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw",
                                            quality: 85
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Slider.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10 pointer-events-none"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Slider.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Slider.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Slider.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, slide.id, true, {
                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Slider.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Slider.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Slider.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: prevSlide,
                className: "absolute left-2 sm:left-3 md:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-1.5 sm:p-2 md:p-2.5 lg:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 backdrop-blur-sm border border-gray-200/50",
                "aria-label": "Previous slide",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 2.5,
                    stroke: "currentColor",
                    className: "w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M15.75 19.5L8.25 12l7.5-7.5"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Slider.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Slider.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Slider.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: nextSlide,
                className: "absolute right-2 sm:right-3 md:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-1.5 sm:p-2 md:p-2.5 lg:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95  backdrop-blur-sm border border-gray-200/50",
                "aria-label": "Next slide",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 2.5,
                    stroke: "currentColor",
                    className: "w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Slider.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Slider.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Slider.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 left-0 right-0 z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3",
                    children: slides.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCurrentSlide(index),
                            className: "rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30 ".concat(currentSlide === index ? 'bg-white shadow-lg w-6 sm:w-8 md:w-10 lg:w-12 h-2 sm:h-2.5 md:h-3 lg:h-3.5' : 'bg-white/70 hover:bg-white/90 w-2 sm:w-2.5 md:w-3 lg:w-3.5 h-2 sm:h-2.5 md:h-3 lg:h-3.5 hover:shadow-md'),
                            "aria-label": "Go to slide ".concat(index + 1)
                        }, index, false, {
                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Slider.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Slider.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Slider.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Slider.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(Slider, "/jm+XmndjAYlDCFyCnfFEXJOloU=");
_c = Slider;
var _c;
__turbopack_context__.k.register(_c, "Slider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/raagafoods (2)/raagafoods/src/utils/reviewApiClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
class ReviewApiClient {
    static getInstance() {
        if (!ReviewApiClient.instance) {
            ReviewApiClient.instance = new ReviewApiClient();
        }
        return ReviewApiClient.instance;
    }
    async submitReview(review) {
        try {
            const response = await fetch('/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(review)
            });
            if (!response.ok) {
                const errorData = {};
                try {
                    const parsed = await response.json();
                    Object.assign(errorData, parsed);
                } catch (e) {
                    errorData.error = response.statusText;
                }
                return {
                    success: false,
                    error: errorData.error || "HTTP ".concat(response.status),
                    details: errorData.errors
                };
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Network error'
            };
        }
    }
    async getReviews(productId) {
        let sortBy = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'newest', filterRating = arguments.length > 2 ? arguments[2] : void 0;
        try {
            const params = new URLSearchParams({
                productId,
                sortBy
            });
            if (filterRating) {
                params.append('filterRating', filterRating.toString());
            }
            const response = await fetch("/api/reviews?".concat(params), {
                method: 'GET'
            });
            if (!response.ok) {
                const errorData = {};
                try {
                    const parsed = await response.json();
                    if ('error' in parsed) {
                        errorData.error = parsed.error;
                    }
                } catch (e) {
                    errorData.error = response.statusText;
                }
                return {
                    success: false,
                    error: errorData.error || "HTTP ".concat(response.status)
                };
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Network error'
            };
        }
    }
    async voteHelpful(reviewId, productId, isHelpful) {
        try {
            const response = await fetch('/api/reviews', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    reviewId,
                    productId,
                    isHelpful
                })
            });
            if (!response.ok) {
                const errorData = {};
                try {
                    const parsed = await response.json();
                    if ('error' in parsed) {
                        errorData.error = parsed.error;
                    }
                } catch (e) {
                    errorData.error = response.statusText;
                }
                return {
                    success: false,
                    error: errorData.error || "HTTP ".concat(response.status)
                };
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Network error'
            };
        }
    }
    constructor(){}
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ReviewApiClient, "instance", void 0);
const __TURBOPACK__default__export__ = ReviewApiClient.getInstance();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WriteReviewForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$utils$2f$reviewApiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/src/utils/reviewApiClient.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function WriteReviewForm(param) {
    let { productId, productName, onSubmit, onCancel } = param;
    _s();
    const [rating, setRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [hoveredRating, setHoveredRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastReview, setLastReview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleStarClick = (selectedRating)=>{
        setRating(selectedRating);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(null);
        setSuccess(false);
        if (rating === 0 || !title.trim() || !content.trim() || !userName.trim()) {
            setError('Please fill in all required fields and provide a rating.');
            return;
        }
        setIsSubmitting(true);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$utils$2f$reviewApiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].submitReview({
                productId,
                userName: userName.trim(),
                rating,
                title: title.trim(),
                content: content.trim(),
                location: location.trim() || undefined,
                verifiedPurchase: false
            });
            if (response.success && response.review) {
                setSuccess(true);
                setLastReview(response.review);
                // Create the review object for callback
                const newReview = {
                    productId,
                    userId: response.review.userId || "user_".concat(Date.now()),
                    userName: response.review.userName,
                    rating: response.review.rating,
                    title: response.review.title,
                    content: response.review.content,
                    location: response.review.location,
                    verifiedPurchase: response.review.verifiedPurchase
                };
                // Call the onSubmit callback to update parent component
                onSubmit(newReview);
                // Reset form immediately
                setRating(0);
                setTitle('');
                setContent('');
                setUserName('');
                setLocation('');
                // Close the form and clear success message after 2 seconds
                setTimeout(()=>{
                    setSuccess(false);
                    onCancel(); // Close the form
                }, 2000);
            } else {
                setError(response.error || 'Failed to submit review');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred');
        } finally{
            setIsSubmitting(false);
        }
    };
    const StarRating = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-1",
            children: [
                [
                    1,
                    2,
                    3,
                    4,
                    5
                ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>handleStarClick(star),
                        onMouseEnter: ()=>setHoveredRating(star),
                        onMouseLeave: ()=>setHoveredRating(0),
                        className: "focus:outline-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-8 h-8 transition-colors ".concat(star <= (hoveredRating || rating) ? 'text-yellow-400' : 'text-gray-300'),
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    }, star, false, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "ml-2 text-sm text-gray-600",
                    children: rating > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            rating,
                            " out of 5 stars",
                            rating === 1 && ' - Poor',
                            rating === 2 && ' - Fair',
                            rating === 3 && ' - Good',
                            rating === 4 && ' - Very Good',
                            rating === 5 && ' - Excellent'
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                    lineNumber: 118,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
            lineNumber: 95,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border rounded-lg p-6 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-bold text-gray-900 mb-6",
                children: [
                    "Write a Customer Review for ",
                    productName
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-4 bg-green-50 border border-green-200 rounded-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-green-800 font-medium",
                    children: "✓ Review submitted successfully!"
                }, void 0, false, {
                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                    lineNumber: 142,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                lineNumber: 141,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-4 bg-red-50 border border-red-200 rounded-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-800 font-medium",
                    children: [
                        "✗ ",
                        error
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                    lineNumber: 149,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                lineNumber: 148,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: [
                                    "Overall Rating ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                                        lineNumber: 157,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarRating, {}, void 0, false, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "title",
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: [
                                    "Add a headline ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                                        lineNumber: 165,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "title",
                                value: title,
                                onChange: (e)=>setTitle(e.target.value),
                                placeholder: "What's most important to know?",
                                className: "w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent",
                                maxLength: 100,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 mt-1",
                                children: [
                                    title.length,
                                    "/100 characters"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "content",
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: [
                                    "Add a written review ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                                        lineNumber: 183,
                                        columnNumber: 34
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: "content",
                                value: content,
                                onChange: (e)=>setContent(e.target.value),
                                placeholder: "What did you like or dislike? What did you use this product for?",
                                rows: 6,
                                className: "w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent",
                                maxLength: 1000,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 mt-1",
                                children: [
                                    content.length,
                                    "/1000 characters"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "userName",
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: [
                                    "Your Name ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                                        lineNumber: 201,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "userName",
                                value: userName,
                                onChange: (e)=>setUserName(e.target.value),
                                placeholder: "Enter your name",
                                className: "w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "location",
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Location (optional)"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "location",
                                value: location,
                                onChange: (e)=>setLocation(e.target.value),
                                placeholder: "City, State",
                                className: "w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-end space-x-3 pt-4 border-t",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onCancel,
                                className: "px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors",
                                disabled: isSubmitting,
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isSubmitting || rating === 0 || !title.trim() || !content.trim() || !userName.trim(),
                                className: "px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors",
                                children: isSubmitting ? 'Submitting...' : 'Submit Review'
                            }, void 0, false, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            lastReview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 p-4 bg-gray-50 border rounded",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-semibold mb-2",
                        children: "Submitted Review (JSON Format):"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "text-xs bg-white p-2 rounded overflow-x-auto border",
                        children: JSON.stringify(lastReview, null, 2)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
                lineNumber: 250,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_s(WriteReviewForm, "TUQpcrw8MPqoSXCHI++VRvtK5Zw=");
_c = WriteReviewForm;
var _c;
__turbopack_context__.k.register(_c, "WriteReviewForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$components$2f$WriteReviewForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/src/components/WriteReviewForm.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// import { getAverageRating, getReviewCount } from '@/data/reviews';
// Star Rating Component with partial stars
const StarRating = (param)=>{
    let { rating, size = 'sm' } = param;
    const sizeClasses = {
        sm: 'w-3 h-3',
        md: 'w-4 h-4',
        lg: 'w-5 h-5'
    };
    // Determine full, half, and empty stars
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.25 && rating - fullStars < 0.75;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center",
        children: [
            [
                ...Array(fullStars)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "".concat(sizeClasses[size], " text-yellow-400"),
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, "full-".concat(i), false, {
                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            hasHalfStar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "".concat(sizeClasses[size], " text-yellow-400"),
                fill: "currentColor",
                viewBox: "0 0 20 20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "half-grad",
                            x1: "0",
                            x2: "100%",
                            y1: "0",
                            y2: "0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "50%",
                                    stopColor: "#facc15"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "50%",
                                    stopColor: "#d1d5db"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
                        fill: "url(#half-grad)"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, "half", true, {
                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            [
                ...Array(emptyStars)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "".concat(sizeClasses[size], " text-gray-300"),
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, "empty-".concat(i), false, {
                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = StarRating;
;
const ProductCard = (param)=>{
    let { product, reviews, addReview, variant = 'grid' } = param;
    _s();
    const { name, description, category, image, id } = product;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [imageError, setImageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showWriteReview, setShowWriteReview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Calculate average rating and review count from passed reviews
    const averageRating = reviews.length > 0 ? reviews.reduce((acc, r)=>acc + r.rating, 0) / reviews.length : 0;
    const reviewCount = reviews.length;
    const handleProductClick = ()=>{
        router.push("/products/".concat(id));
    };
    const handleImageError = ()=>{
        setImageError(true);
    };
    // Handle review submission
    const handleSubmitReview = (newReview)=>{
        const review = {
            ...newReview,
            id: "user_review_".concat(Date.now()),
            createdAt: new Date().toISOString(),
            helpfulVotes: 0,
            totalVotes: 0
        };
        addReview(review);
        setShowWriteReview(false);
        alert('Thank you! Your review has been submitted successfully.');
    };
    if (variant === 'list') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-[1.02]",
            itemScope: true,
            itemType: "https://schema.org/Product",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Product",
                            "name": name,
                            "description": description,
                            "category": category,
                            "image": image,
                            "brand": {
                                "@type": "Brand",
                                "name": "Raaga Foods"
                            }
                        })
                    }
                }, void 0, false, {
                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full md:w-32 aspect-square",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: imageError ? '/products/placeholder.jpg' : image || '/products/placeholder.jpg',
                            alt: "".concat(name, " - ").concat(category, " from Raaga Foods"),
                            fill: true,
                            className: "rounded-lg object-cover transition-transform duration-300 hover:scale-110",
                            sizes: "(max-width: 768px) 100vw, 128px",
                            priority: true,
                            onError: handleImageError,
                            itemProp: "image"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block px-2 py-1 text-sm bg-orange-100 text-orange-600 rounded-full",
                                itemProp: "category",
                                children: category
                            }, void 0, false, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mt-2 text-lg font-semibold text-gray-800",
                            itemProp: "name",
                            children: name
                        }, void 0, false, {
                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-gray-600",
                            itemProp: "description",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarRating, {
                                    rating: averageRating,
                                    size: "sm"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-gray-800 font-semibold",
                                    children: averageRating.toFixed(1)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-gray-600",
                                    children: [
                                        "(",
                                        reviewCount,
                                        " ",
                                        reviewCount === 1 ? 'review' : 'reviews',
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "ml-2 text-xs text-orange-600 underline hover:text-orange-800",
                                    onClick: ()=>setShowWriteReview(true),
                                    type: "button",
                                    children: "Write Review"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        showWriteReview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$components$2f$WriteReviewForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                productId: id,
                                productName: name,
                                onSubmit: handleSubmitReview,
                                onCancel: ()=>setShowWriteReview(false)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                                lineNumber: 201,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                            lineNumber: 200,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
            lineNumber: 127,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden cursor-pointer transform hover:scale-[1.02] max-w-5xl mx-auto px-4 py-12",
        onClick: handleProductClick,
        role: "button",
        tabIndex: 0,
        onKeyPress: (e)=>e.key === 'Enter' && handleProductClick(),
        itemScope: true,
        itemType: "https://schema.org/Product",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": name,
                        "description": description,
                        "category": category,
                        "image": image,
                        "brand": {
                            "@type": "Brand",
                            "name": "Raaga Foods"
                        }
                    })
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full aspect-square overflow-hidden ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: imageError ? '/products/placeholder.jpg' : image || '/products/placeholder.jpg',
                    alt: "".concat(name, " - ").concat(category, " from Raaga Foods"),
                    fill: true,
                    className: "rounded-t-lg object-cover transform group-hover:scale-110 transition-transform duration-500",
                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                    priority: true,
                    onError: handleImageError,
                    itemProp: "image"
                }, void 0, false, {
                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block px-2 py-1 text-sm bg-orange-100 text-orange-600 rounded-full",
                            itemProp: "category",
                            children: category
                        }, void 0, false, {
                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-gray-800 mb-2",
                        itemProp: "name",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300",
                        itemProp: "description",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarRating, {
                                rating: averageRating,
                                size: "sm"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-800",
                                children: averageRating.toFixed(1)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-600",
                                children: [
                                    "(",
                                    reviewCount,
                                    " ",
                                    reviewCount === 1 ? 'review' : 'reviews',
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    showWriteReview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        onClick: (e)=>e.stopPropagation()
                    }, void 0, false, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                        lineNumber: 286,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 pt-3 border-t border-gray-100 transform opacity-0 max-h-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                            lineNumber: 292,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx",
        lineNumber: 215,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProductCard, "KqdpfYM6ffLcOBMNrDo76YqkCBg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = ProductCard;
const __TURBOPACK__default__export__ = ProductCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "StarRating");
__turbopack_context__.k.register(_c1, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/raagafoods (2)/raagafoods/src/data/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "products",
    ()=>products
]);
const products = [
    {
        id: '1',
        name: 'Chicken Pickle',
        description: 'Authentic Andhra Chicken Pickle made with traditional spices and pure oil',
        category: 'Pickles',
        image: '/products/1N8A7839.JPG',
        // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        additionalImages: [
            '/products/1N8A7840.JPG',
            '/products/1N8A7841.JPG'
        ],
        // additionalVideos: [
        //   'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
        // ],
        tags: [
            'spicy',
            'traditional',
            'andhra style',
            'non-veg'
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
        shelfLife: '4 months from manufacturing date'
    },
    {
        id: '2',
        name: 'Mutton Pickle',
        description: 'Authentic Andhra Mutton Pickle prepared with tender mutton pieces, traditional spices, and pure oil',
        category: 'Pickles',
        image: '/products/1N8A7842.JPG',
        // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        additionalImages: [
            '/products/1N8A7843.JPG',
            '/products/1N8A7844.JPG'
        ],
        // additionalVideos: [
        //   'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
        // ],
        tags: [
            'spicy',
            'traditional',
            'andhra style',
            'non-veg'
        ],
        ingredients: [
            'Mutton',
            'Mustard Oil',
            'Red Chili Powder',
            'Salt',
            'Turmeric',
            'Fenugreek Seeds',
            'Mustard Seeds',
            'Garlic'
        ],
        storageInfo: 'Store in a cool, dry place. Keep away from direct sunlight.',
        shelfLife: '4 months from manufacturing date'
    },
    {
        id: '3',
        name: 'Dosa Batter',
        description: 'Fresh ground Dosa Batter made with premium rice and urad dal',
        category: 'Batters',
        image: '/products/IMG-20251206-WA0013.jpg',
        // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        additionalImages: [
            '/products/1N8A7837.JPG',
            '/products/1N8A7806.JPG'
        ],
        // additionalVideos: [
        //   'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
        // ],
        tags: [
            'fresh',
            'fermented',
            'breakfast',
            'veg'
        ],
        ingredients: [
            'Rice',
            'Urad Dal',
            'Fenugreek Seeds',
            'Salt'
        ],
        storageInfo: 'Keep refrigerated at 4°C',
        shelfLife: '9 days from manufacturing date'
    },
    {
        id: '4',
        name: 'Idli Batter',
        description: 'Idli Batter prepared with perfect proportions for soft and fluffy idlis',
        category: 'Batters',
        image: '/products/IMG-20251206-WA0014.jpg',
        // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        additionalImages: [
            '/products/1N8A7798.JPG',
            '/products/1N8A7809.JPG'
        ],
        // additionalVideos: [
        //   'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
        // ],
        tags: [
            'fresh',
            'fermented',
            'breakfast',
            'veg'
        ],
        ingredients: [
            'Rice',
            'Urad Dal',
            'Fenugreek Seeds',
            'Salt'
        ],
        storageInfo: 'Keep refrigerated at 4°C',
        shelfLife: '9 days from manufacturing date'
    },
    {
        id: '5',
        name: 'Idli Dosa Batter',
        description: 'Idli Dosa Batter prepared with perfect proportions for soft and fluffy idlis',
        category: 'Batters',
        image: '/products/IMG-20251210-WA0013.jpg',
        // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        additionalImages: [
            '/products/1N8A7803.JPG',
            '/products/1N8A7820.JPG'
        ],
        // additionalVideos: [
        //   'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
        // ],
        tags: [
            'fresh',
            'fermented',
            'breakfast',
            'veg'
        ],
        ingredients: [
            'Rice',
            'Urad Dal',
            'Fenugreek Seeds',
            'Salt'
        ],
        storageInfo: 'Keep refrigerated at 4°C',
        shelfLife: '9 days from manufacturing date'
    },
    {
        id: '6',
        name: 'ragi Dosa Batter',
        description: 'ragi Dosa Batter prepared with perfect proportions for soft and fluffy ragi',
        category: 'Batters',
        image: '/products/IMG-20251210-WA0014.jpg',
        // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        additionalImages: [
            '/products/1N8A7796.JPG',
            '/products/1N8A7824.JPG'
        ],
        // additionalVideos: [
        //   'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
        // ],
        tags: [
            'fresh',
            'fermented',
            'breakfast',
            'veg'
        ],
        ingredients: [
            'Rice',
            'Urad Dal',
            'Fenugreek Seeds',
            'Salt'
        ],
        storageInfo: 'Keep refrigerated at 4°C',
        shelfLife: '9 days from manufacturing date'
    },
    {
        id: '7',
        name: 'Jeera Powder',
        description: 'Jeera Powder made from premium roasted cumin seeds for rich aroma and flavor',
        category: 'Powders',
        image: '/products/1N8A7830.JPG',
        // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        additionalImages: [
            '/products/1N8A7831.JPG',
            '/products/1N8A7832.JPG'
        ],
        // additionalVideos: [
        //   'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
        // ],
        tags: [
            'spices',
            'single spice',
            'aromatic'
        ],
        ingredients: [
            'Cumin Seeds'
        ],
        storageInfo: 'Store in an airtight container in a cool, dry place',
        shelfLife: '6 months from manufacturing date'
    },
    {
        id: '8',
        name: 'Dhaniyalu Powder',
        description: 'Dhaniyalu (Coriander) Powder made from premium roasted coriander seeds for a fresh and aromatic flavor',
        category: 'Powders',
        image: '/products/1N8A7833.JPG',
        // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        additionalImages: [
            '/products/1N8A7834.JPG',
            '/products/1N8A7835.JPG'
        ],
        // additionalVideos: [
        //   'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
        // ],
        tags: [
            'spices',
            'single spice',
            'aromatic'
        ],
        ingredients: [
            'Coriander Seeds'
        ],
        storageInfo: 'Store in an airtight container in a cool, dry place',
        shelfLife: '6 months from manufacturing date'
    },
    {
        id: '9',
        name: 'Sambar Powder',
        description: 'Sambar Powder made with roasted spices and lentils',
        category: 'Powders',
        image: '/products/Sambar-Powder-Recipe.jpg',
        // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        additionalImages: [
            '/products/dummy.png',
            '/products/dummy.png'
        ],
        // additionalVideos: [
        //   'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
        // ],
        tags: [
            'spices',
            'blend',
            'authentic'
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
        id: '10',
        name: 'Rasam Powder',
        description: 'Rasam Powder blended with handpicked spices for authentic taste',
        category: 'Powders',
        image: '/products/rasam-powder-recipe-1.jpg',
        // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        additionalImages: [
            '/products/dummy.png',
            '/products/dummy.png'
        ],
        // additionalVideos: [
        //   'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
        // ],
        tags: [
            'spices',
            'blend',
            'authentic'
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
        id: '11',
        name: 'Curry Powder',
        description: 'Special Curry Powder perfect for vegetable and meat dishes',
        category: 'Powders',
        image: '/products/curry-powder.jpg',
        // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        additionalImages: [
            '/products/dummy.png',
            '/products/dummy.png'
        ],
        // additionalVideos: [
        //   'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
        // ],
        tags: [
            'spices',
            'blend',
            'versatile'
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
        id: '12',
        name: 'Mango Pickle',
        description: 'Authentic Andhra Mango Pickle made with traditional spices and pure oil',
        category: 'Pickles',
        image: '/products/mango-pickle-6.jpg',
        // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        additionalImages: [
            '/products/dummy.png',
            '/products/dummy.png'
        ],
        // additionalVideos: [
        //   'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
        // ],
        tags: [
            'spicy',
            'traditional',
            'andhra style',
            'veg'
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
        shelfLife: '4 months from manufacturing date'
    },
    {
        id: '13',
        name: 'Lime Pickle',
        description: 'Spicy Lime Pickle with a perfect blend of spices',
        category: 'Pickles',
        image: '/products/lime-pickle-12.jpg',
        // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        additionalImages: [
            '/products/dummy.png',
            '/products/dummy.png'
        ],
        // additionalVideos: [
        //   'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
        // ],
        tags: [
            'mixed veg',
            'spicy',
            'traditional',
            'veg'
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
        shelfLife: '4 months from manufacturing date'
    },
    {
        id: '14',
        name: 'Gongura Pickle',
        description: 'Homestyle Gongura Pickle, a traditional Andhra delicacy',
        category: 'Pickles',
        image: '/products/GonguraRedChilli_2.png',
        // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        additionalImages: [
            '/products/dummy.png',
            '/products/dummy.png'
        ],
        tags: [
            'gongura',
            'andhra style',
            'traditional',
            'veg'
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
        shelfLife: '4 months from manufacturing date'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductsList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$contexts$2f$SearchContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/src/contexts/SearchContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/src/data/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$utils$2f$reviewApiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/src/utils/reviewApiClient.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ProductsList(param) {
    let { selectedCategory } = param;
    var _searchResults_, _searchResults_1, _searchResults_2, _searchResults_3, _searchResults_4;
    _s();
    const { searchQuery } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$contexts$2f$SearchContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearch"])();
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [displayCount, setDisplayCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(8);
    const [allProducts, setAllProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // --- API Review State (Production Level) ---
    const [apiReviews, setApiReviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Load all reviews from API on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsList.useEffect": ()=>{
            const loadAllReviews = {
                "ProductsList.useEffect.loadAllReviews": async ()=>{
                    try {
                        let allReviews = [];
                        // Fetch reviews for each product from API
                        for (const product of __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"]){
                            try {
                                var _response_data;
                                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$utils$2f$reviewApiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getReviews(product.id);
                                if (response.success && ((_response_data = response.data) === null || _response_data === void 0 ? void 0 : _response_data.reviews)) {
                                    allReviews = allReviews.concat(response.data.reviews);
                                }
                            } catch (error) {
                                console.error("Failed to load reviews for product ".concat(product.id, ":"), error);
                            }
                        }
                        setApiReviews(allReviews);
                    } catch (error) {
                        console.error('Failed to load all reviews:', error);
                    }
                }
            }["ProductsList.useEffect.loadAllReviews"];
            loadAllReviews();
        }
    }["ProductsList.useEffect"], []);
    // Add review handler - update local state immediately for instant UI feedback
    const handleAddReview = (review)=>{
        setApiReviews((prev)=>[
                review,
                ...prev
            ]);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsList.useEffect": ()=>{
            // Reset display count when category or search changes
            setDisplayCount(8);
        }
    }["ProductsList.useEffect"], [
        searchQuery,
        selectedCategory
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsList.useEffect": ()=>{
            setIsSearching(!!searchQuery.trim());
            // Start with deduplicated products
            let filteredProducts = Array.from(new Map(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].map({
                "ProductsList.useEffect.filteredProducts": (product)=>[
                        product.id,
                        product
                    ]
            }["ProductsList.useEffect.filteredProducts"])).values());
            console.log('Initial products loaded:', filteredProducts.length);
            // First apply category filter if selected
            if (selectedCategory) {
                if (selectedCategory.toLowerCase() === 'veg') {
                    // For veg category, exclude non-veg products first
                    filteredProducts = filteredProducts.filter({
                        "ProductsList.useEffect": (product)=>{
                            var _product_tags;
                            // Check if product is non-veg
                            const isNonVeg = ((_product_tags = product.tags) === null || _product_tags === void 0 ? void 0 : _product_tags.some({
                                "ProductsList.useEffect": (tag)=>tag.toLowerCase() === 'non-veg'
                            }["ProductsList.useEffect"])) || product.name.toLowerCase().includes('chicken') || product.name.toLowerCase().includes('mutton') || product.name.toLowerCase().includes('fish');
                            // Return true only for non-non-veg (veg) products
                            return !isNonVeg;
                        }
                    }["ProductsList.useEffect"]);
                } else if (selectedCategory.toLowerCase() === 'non-veg') {
                    // For non-veg category, check tags and category
                    filteredProducts = filteredProducts.filter({
                        "ProductsList.useEffect": (product)=>{
                            var _product_tags;
                            return ((_product_tags = product.tags) === null || _product_tags === void 0 ? void 0 : _product_tags.some({
                                "ProductsList.useEffect": (tag)=>tag.toLowerCase().includes('non-veg')
                            }["ProductsList.useEffect"])) || product.name.toLowerCase().includes('non-veg') || product.description.toLowerCase().includes('non-vegetarian');
                        }
                    }["ProductsList.useEffect"]);
                } else {
                    // For other categories, match the category exactly
                    filteredProducts = filteredProducts.filter({
                        "ProductsList.useEffect": (product)=>product.category === selectedCategory
                    }["ProductsList.useEffect"]);
                }
                console.log('After category filter:', filteredProducts.length, 'for category:', selectedCategory);
            }
            // Then apply search filter if there's a search query
            if (searchQuery.trim()) {
                const searchLower = searchQuery.toLowerCase();
                const terms = searchLower.split(' ').filter({
                    "ProductsList.useEffect.terms": (term)=>term.length > 0
                }["ProductsList.useEffect.terms"]);
                // First deduplicate products by ID
                filteredProducts = Array.from(new Map(filteredProducts.map({
                    "ProductsList.useEffect": (product)=>[
                            product.id,
                            product
                        ]
                }["ProductsList.useEffect"])).values());
                // Find products with name matches
                const productsWithNameMatch = filteredProducts.filter({
                    "ProductsList.useEffect.productsWithNameMatch": (product)=>{
                        const nameLower = product.name.toLowerCase();
                        return terms.every({
                            "ProductsList.useEffect.productsWithNameMatch": (term)=>nameLower.includes(term)
                        }["ProductsList.useEffect.productsWithNameMatch"]);
                    }
                }["ProductsList.useEffect.productsWithNameMatch"]);
                // Set search results with name matches only
                filteredProducts = productsWithNameMatch;
                // Sort results by how closely they match the search terms
                filteredProducts.sort({
                    "ProductsList.useEffect": (a, b)=>{
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
                    }
                }["ProductsList.useEffect"]);
                console.log('After search filter:', filteredProducts.length, 'for query:', searchQuery);
            }
            console.log('Final filtered products:', filteredProducts.length);
            // Put all products in a single group
            setAllProducts(filteredProducts);
            setSearchResults([
                {
                    category: 'All Products',
                    items: filteredProducts.slice(0, displayCount)
                }
            ]);
        }
    }["ProductsList.useEffect"], [
        displayCount,
        searchQuery,
        selectedCategory
    ]);
    const handleLoadMore = ()=>{
        setDisplayCount((prev)=>{
            const newCount = prev + 8;
            console.log('Loading more products:', {
                prev,
                newCount,
                totalProducts: allProducts.length
            });
            return newCount;
        });
    };
    const hasMoreProducts = allProducts.length > displayCount;
    console.log('ProductsList state:', {
        displayCount,
        allProductsLength: allProducts.length,
        hasMoreProducts,
        searchResultsLength: (_searchResults_ = searchResults[0]) === null || _searchResults_ === void 0 ? void 0 : _searchResults_.items.length
    });
    if (searchResults.length === 0 && !searchQuery && !selectedCategory) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full text-center py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 text-lg animate-pulse",
                children: "Loading products..."
            }, void 0, false, {
                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductsList.tsx",
                lineNumber: 178,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductsList.tsx",
            lineNumber: 177,
            columnNumber: 7
        }, this);
    }
    // Helper: get reviews for a product from API (production level)
    const getReviewsForProduct = (productId)=>{
        return apiReviews.filter((r)=>r.productId === productId);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            (isSearching || selectedCategory) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg text-gray-600 mb-2",
                    children: isSearching ? ((_searchResults_1 = searchResults[0]) === null || _searchResults_1 === void 0 ? void 0 : _searchResults_1.items.length) > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: searchResults[0].items.length
                            }, void 0, false, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductsList.tsx",
                                lineNumber: 198,
                                columnNumber: 18
                            }, this),
                            " ",
                            searchResults[0].items.length === 1 ? 'product' : 'products',
                            " matching “",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: searchQuery
                            }, void 0, false, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductsList.tsx",
                                lineNumber: 198,
                                columnNumber: 146
                            }, this),
                            "”",
                            selectedCategory ? " in ".concat(selectedCategory) : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductsList.tsx",
                        lineNumber: 197,
                        columnNumber: 17
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "No products found matching “",
                            searchQuery,
                            "”"
                        ]
                    }, void 0, true) : selectedCategory ? "Showing ".concat(((_searchResults_2 = searchResults[0]) === null || _searchResults_2 === void 0 ? void 0 : _searchResults_2.items.length) || 0, " products in ").concat(selectedCategory) : null
                }, void 0, false, {
                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductsList.tsx",
                    lineNumber: 194,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductsList.tsx",
                lineNumber: 193,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-4 sm:gap-6 ",
                children: (_searchResults_3 = searchResults[0]) === null || _searchResults_3 === void 0 ? void 0 : _searchResults_3.items.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            product: product,
                            reviews: getReviewsForProduct(product.id),
                            addReview: handleAddReview
                        }, void 0, false, {
                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductsList.tsx",
                            lineNumber: 214,
                            columnNumber: 13
                        }, this)
                    }, product.id, false, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductsList.tsx",
                        lineNumber: 213,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductsList.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            hasMoreProducts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: [
                            "Showing ",
                            ((_searchResults_4 = searchResults[0]) === null || _searchResults_4 === void 0 ? void 0 : _searchResults_4.items.length) || 0,
                            " of ",
                            allProducts.length,
                            " products"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductsList.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleLoadMore,
                        className: "px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors duration-300 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Load More"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductsList.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M19 14l-7 7m0 0l-7-7m7 7V3"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductsList.tsx",
                                    lineNumber: 240,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductsList.tsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductsList.tsx",
                        lineNumber: 229,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductsList.tsx",
                lineNumber: 225,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductsList.tsx",
        lineNumber: 191,
        columnNumber: 5
    }, this);
}
_s(ProductsList, "o9FYUOjOAtKIucvd1Ru0jQjIzUw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$contexts$2f$SearchContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearch"]
    ];
});
_c = ProductsList;
var _c;
__turbopack_context__.k.register(_c, "ProductsList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function About() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " w-full bg-gradient-to-br from-orange-100 via-white to-orange-200 flex items-center justify-center py-10 px-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl w-full mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-extrabold text-orange-700 mb-10 text-center drop-shadow-sm tracking-tight",
                    children: "About Us"
                }, void 0, false, {
                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                    lineNumber: 5,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block w-24 h-1 rounded-full bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/90 rounded-2xl shadow-xl border border-orange-100 p-8 flex flex-col justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-6 w-6 text-orange-500",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M12 8c-1.657 0-3 1.343-3 3 0 2.5 3 6 3 6s3-3.5 3-6c0-1.657-1.343-3-3-3z"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                                lineNumber: 15,
                                                columnNumber: 145
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                            lineNumber: 15,
                                            columnNumber: 15
                                        }, this),
                                        "Our Story"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 text-lg",
                                    children: "Founded with a passion for authentic food, Raaga Foods began as a small family business and has grown into a trusted name in traditional food products. We take pride in our heritage recipes and commitment to quality."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/90 rounded-2xl shadow-xl border border-orange-100 p-8 flex flex-col justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-6 w-6 text-orange-500",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M13 16h-1v-4h-1m4 0h-1v4h-1m-4 0h-1v-4h-1"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                                lineNumber: 25,
                                                columnNumber: 145
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                            lineNumber: 25,
                                            columnNumber: 15
                                        }, this),
                                        "Our Mission"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 text-lg",
                                    children: "At Raaga Foods, we are committed to delivering authentic, high-quality food products that bring the traditional taste of home to your kitchen."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/90 rounded-2xl shadow-xl border border-orange-100 p-8 md:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-6 w-6 text-orange-500",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M5 13l4 4L19 7"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                                lineNumber: 35,
                                                columnNumber: 145
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this),
                                        "Our Values"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center p-4 rounded-xl bg-orange-50/60 shadow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-orange-600 flex items-center justify-center gap-1 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-5 w-5 text-orange-400",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M12 8c-1.657 0-3 1.343-3 3 0 2.5 3 6 3 6s3-3.5 3-6c0-1.657-1.343-3-3-3z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                                                lineNumber: 41,
                                                                columnNumber: 149
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Quality First"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600",
                                                    children: "Premium ingredients always"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center p-4 rounded-xl bg-orange-50/60 shadow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-orange-600 flex items-center justify-center gap-1 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-5 w-5 text-orange-400",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 17v-2a4 4 0 014-4h0a4 4 0 014 4v2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                                                lineNumber: 48,
                                                                columnNumber: 149
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                                            lineNumber: 48,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Traditional Methods"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600",
                                                    children: "Time-tested processes"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center p-4 rounded-xl bg-orange-50/60 shadow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-orange-600 flex items-center justify-center gap-1 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-5 w-5 text-orange-400",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M12 11c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 2.5 3 6 3 6s3-3.5 3-6z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                                                lineNumber: 55,
                                                                columnNumber: 149
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                                            lineNumber: 55,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Food Safety"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600",
                                                    children: "Highest standards"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center p-4 rounded-xl bg-orange-50/60 shadow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-orange-600 flex items-center justify-center gap-1 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-5 w-5 text-orange-400",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M5 13l4 4L19 7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                                                lineNumber: 62,
                                                                columnNumber: 149
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                                            lineNumber: 62,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Customer First"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600",
                                                    children: "Your satisfaction matters"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ContactPage() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        email: '',
        name: '',
        message: ''
    });
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const handleAddressClick = ()=>{
        // Replace these coordinates with your actual business location
        window.open('https://www.google.com/maps/place/Indis+VB+City,+208,+Bolarum+-+Turkapally+Rd,+Railway+Employees+Colony+Phase+I,+Railway+Employees+Colony,+Bolarum,+Secunderabad,+Telangana+500010/@17.5387311,78.4945351,15z/data=!3m1!4b1!4m10!1m2!2m1!1s2nd+Floor,+Flat+No+204,+E-block,+Indis+VB+City++Machha+Bollaram+Road,+Secunderabad++Medchal+Malkajgiri,+Telangana+%E2%80%93+500010!3m6!1s0x3bcb8524427ccad3:0xf4dcb8084a7a0dd8!8m2!3d17.538732!4d78.5129892!15sCnwybmQgRmxvb3IsIEZsYXQgTm8gMjA0LCBFLWJsb2NrLCBJbmRpcyBWQiBDaXR5ICBNYWNoaGEgQm9sbGFyYW0gUm9hZCwgU2VjdW5kZXJhYmFkICBNZWRjaGFsIE1hbGthamdpcmksIFRlbGFuZ2FuYSDigJMgNTAwMDEwkgERY29tcG91bmRfYnVpbGRpbmfgAQA!16s%2Fg%2F11w7qdnbkj?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D', '_blank');
    };
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setStatus('sending');
        setErrorMessage('');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }
            setStatus('success');
            setFormData({
                email: '',
                name: '',
                message: ''
            }); // Clear form
            setTimeout(()=>setStatus('idle'), 5000); // Reset status after 5 seconds
        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
            setTimeout(()=>setStatus('idle'), 5000);
        }
    };
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-5xl mx-auto px-4 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-semibold text-gray-800 mb-8",
                children: "Contact Us"
            }, void 0, false, {
                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-md p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-gray-800 mb-6",
                                children: "Visit Us"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start space-x-3 mb-6 cursor-pointer group",
                                onClick: handleAddressClick,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 text-orange-600 group-hover:text-orange-700 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-5 w-5",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group-hover:text-orange-600 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 font-medium",
                                                children: "GORIPARTHI RAGHAVAMMA"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                                lineNumber: 100,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700",
                                                children: "RAAGA HOMELY BATTERS AND PICKLES"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                                lineNumber: 101,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700",
                                                children: "GSTIN: 36CIDPG2839Q1ZS"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                                lineNumber: 102,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 mt-2",
                                                children: "2nd Floor, Flat No 204, E-block, Indis VB City"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                                lineNumber: 103,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700",
                                                children: "Machha Bollaram Road, Secunderabad"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                                lineNumber: 106,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700",
                                                children: "Medchal Malkajgiri, Telangana – 500010"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                                lineNumber: 109,
                                                columnNumber: 3
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                        lineNumber: 99,
                                        columnNumber: 1
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:info@raagafoods.com",
                                        className: "flex items-center space-x-3 group cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "h-5 w-5 text-orange-600 group-hover:text-orange-700 transition-colors",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-700 group-hover:text-orange-600 transition-colors",
                                                children: " raagahomelybattersandpickles@gmail.com"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                                lineNumber: 131,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "tel:+911234567890",
                                        className: "flex items-center space-x-3 group cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "h-5 w-5 text-orange-600 group-hover:text-orange-700 transition-colors",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-700 group-hover:text-orange-600 transition-colors",
                                                children: "+91 9390687301"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-md p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-gray-800 mb-6",
                                children: "Send us a Message"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "email",
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                                lineNumber: 160,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                id: "email",
                                                name: "email",
                                                required: true,
                                                value: formData.email,
                                                onChange: handleChange,
                                                className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors",
                                                placeholder: "your.email@example.com"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "name",
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                                lineNumber: 175,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "name",
                                                name: "name",
                                                required: true,
                                                value: formData.name,
                                                onChange: handleChange,
                                                className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors",
                                                placeholder: "Your name"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                                lineNumber: 178,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                        lineNumber: 174,
                                        columnNumber: 18
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "message",
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Message"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                                lineNumber: 190,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                id: "message",
                                                name: "message",
                                                required: true,
                                                value: formData.message,
                                                onChange: handleChange,
                                                rows: 5,
                                                className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors",
                                                placeholder: "Your message..."
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                                lineNumber: 193,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                        lineNumber: 189,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: status === 'sending',
                                        className: "w-full py-3 px-6 text-white rounded-md transition-all ".concat(status === 'sending' ? 'bg-orange-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700 active:transform active:scale-[0.99]'),
                                        children: status === 'sending' ? 'Sending...' : 'Send Message'
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this),
                                    status === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 p-4 bg-green-50 border border-green-200 rounded-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-green-700 text-center",
                                            children: "Thank you! Your message has been sent successfully."
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                            lineNumber: 220,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this),
                                    status === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 p-4 bg-red-50 border border-red-200 rounded-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-700 text-center",
                                            children: errorMessage || 'Sorry, there was an error sending your message. Please try again.'
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                            lineNumber: 228,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(ContactPage, "34IYyasCKiCK6ua9Hm5omPoDTQI=");
_c = ContactPage;
var _c;
__turbopack_context__.k.register(_c, "ContactPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/raagafoods (2)/raagafoods/src/data/categories.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories
]);
const categories = [
    {
        title: 'Pickles',
        img: '/categories/mango-pickle-6.jpg'
    },
    {
        title: 'Batters',
        img: '/categories/allbatters.png'
    },
    {
        title: 'Powders',
        img: '/categories/Sambar-Powder-Recipe.jpg'
    },
    {
        title: 'Veg',
        img: '/categories/mango-pickle-6.jpg'
    },
    {
        title: 'Non-Veg',
        img: '/categories/chicken-pickle.jpg'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$components$2f$Slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/src/components/Slider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$components$2f$ProductsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/src/components/ProductsList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/src/components/About.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$components$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/src/components/Contact.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/src/data/categories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$utils$2f$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/src/utils/scroll.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$contexts$2f$SearchContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/src/contexts/SearchContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
const HomePage = ()=>{
    _s();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const { searchQuery } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$contexts$2f$SearchContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearch"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            // Listen for the clear category and show all products event
            const handleClearCategoryAndShowAll = {
                "HomePage.useEffect.handleClearCategoryAndShowAll": ()=>{
                    setSelectedCategory(undefined);
                }
            }["HomePage.useEffect.handleClearCategoryAndShowAll"];
            window.addEventListener('clearCategoryAndShowAll', handleClearCategoryAndShowAll);
            return ({
                "HomePage.useEffect": ()=>{
                    window.removeEventListener('clearCategoryAndShowAll', handleClearCategoryAndShowAll);
                }
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], []);
    const scrollToSection = (sectionId)=>{
        const element = document.getElementById(sectionId);
        if (element) {
            if (sectionId === 'home') {
                setSelectedCategory(undefined);
                // Small delay to ensure state is updated
                requestAnimationFrame(()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$utils$2f$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToProducts"])();
                });
            } else {
                // For other sections, scroll directly
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };
    // Handle initial scroll if URL has a hash
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            if (window.location.hash) {
                const id = window.location.hash.substring(1);
                scrollToSection(id);
            }
        }
    }["HomePage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "home",
                    className: "px-4 -mt-1 sm:-mt-2 md:-mt-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$components$2f$Slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    id: "products",
                    className: "py-8 sm:py-16 bg-gray-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-800",
                                children: "Categories"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 max-w-6xl",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].map((category, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center group cursor-pointer transition-all duration-300 ".concat(selectedCategory === category.title ? 'opacity-100 scale-105' : 'opacity-90 hover:opacity-100'),
                                            onClick: ()=>{
                                                setSelectedCategory(category.title);
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$utils$2f$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToProducts"])();
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 mb-3 sm:mb-4 md:mb-5 overflow-hidden rounded-full shadow-lg sm:shadow-xl transform transition-all duration-300 hover:scale-110 hover:shadow-xl ".concat(selectedCategory === category.title ? 'ring-1 sm:ring-2 ring-orange-500 ring-offset-1 sm:ring-offset-2' : ''),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: category.img,
                                                            alt: category.title,
                                                            fill: true,
                                                            sizes: "(max-width: 640px) 80px, (max-width: 768px) 112px, (max-width: 1024px) 144px, (max-width: 1280px) 160px, 176px",
                                                            quality: 85,
                                                            priority: idx < 3,
                                                            className: "object-cover rounded-full transform transition-all duration-300 ".concat(selectedCategory === category.title ? 'brightness-110 scale-105' : 'hover:brightness-110')
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white text-xs sm:text-sm md:text-base font-medium px-2 sm:px-4 text-center",
                                                                children: "View"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                                                                lineNumber: 96,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xs sm:text-sm md:text-base font-bold text-gray-800 text-center",
                                                    children: category.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    id: "all-products",
                    className: "py-8 sm:py-16 bg-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl sm:text-3xl font-bold text-gray-800 flex-1",
                                        children: searchQuery ? "Search Results" : selectedCategory ? "".concat(selectedCategory, " Products") : 'Our Products'
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-orange-800",
                                            children: [
                                                "Showing results for: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        "“",
                                                        searchQuery,
                                                        "”"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 44
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                                            lineNumber: 124,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$components$2f$ProductsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    selectedCategory: selectedCategory
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    id: "about",
                    className: "py-4 sm:py-8 bg-gray-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    id: "contact",
                    className: "py-8 sm:py-16 bg-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$components$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/raagafoods (2)/raagafoods/src/app/page.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HomePage, "XCh63KkSuRi7Bc21MRYluUgdTxw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$src$2f$contexts$2f$SearchContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearch"]
    ];
});
_c = HomePage;
const __TURBOPACK__default__export__ = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_raagafoods%20%282%29_raagafoods_src_b43864b7._.js.map
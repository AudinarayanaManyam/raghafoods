(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
function Logo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-10 h-10 relative rounded-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/logo.jpg",
                    alt: "Raaga Foods Logo",
                    fill: true,
                    className: "object-cover",
                    sizes: "40px",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/src/components/Logo.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Logo.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-10 relative w-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/logoname.jpg",
                    alt: "Raaga Foods",
                    fill: true,
                    className: "object-contain",
                    sizes: "128px",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/src/components/Logo.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Logo.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Logo.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SearchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
'use client';
;
;
function SearchBar(param) {
    let { value, onChange, placeholder = 'Search products...', onEnter } = param;
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter' && value.trim() && onEnter) {
            onEnter();
        }
        // Handle ArrowDown to scroll to products section
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const productsSection = document.getElementById('all-products');
            if (productsSection) {
                productsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        // Zoom keyboard shortcuts (Ctrl + Plus/Minus)
        if (e.ctrlKey || e.metaKey) {
            if (e.key === '=' || e.key === '+') {
                e.preventDefault();
                // Dispatch zoom in event
                window.dispatchEvent(new CustomEvent('zoomIn'));
            } else if (e.key === '-') {
                e.preventDefault();
                // Dispatch zoom out event
                window.dispatchEvent(new CustomEvent('zoomOut'));
            } else if (e.key === '0') {
                e.preventDefault();
                // Dispatch zoom reset event
                window.dispatchEvent(new CustomEvent('zoomReset'));
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full max-w-md mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: value,
                onChange: (e)=>onChange(e.target.value),
                onKeyDown: handleKeyDown,
                placeholder: placeholder,
                className: "w-full px-6 py-3 pl-12 pr-4 text-base sm:text-lg text-gray-700 bg-white border-2 border-gray-300 rounded-full focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 shadow-sm"
            }, void 0, false, {
                fileName: "[project]/src/components/SearchBar.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaSearch"], {
                className: "absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"
            }, void 0, false, {
                fileName: "[project]/src/components/SearchBar.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SearchBar.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/contexts/ZoomContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZoomProvider",
    ()=>ZoomProvider,
    "useZoom",
    ()=>useZoom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const ZoomContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ZOOM_LEVELS = [
    100,
    125,
    150,
    175,
    200,
    250,
    300
];
function ZoomProvider(param) {
    let { children } = param;
    _s();
    const [zoomLevel, setZoomLevelState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(200); // Default to 200% for better visibility
    const setZoomLevel = (level)=>{
        if (ZOOM_LEVELS.includes(level)) {
            setZoomLevelState(level);
            // Apply zoom to CSS custom property
            document.documentElement.style.setProperty('--zoom-scale', (level / 100).toString());
            document.documentElement.className = "zoom-".concat(level);
        }
    };
    const increaseZoom = ()=>{
        const currentIndex = ZOOM_LEVELS.indexOf(zoomLevel);
        if (currentIndex < ZOOM_LEVELS.length - 1) {
            setZoomLevel(ZOOM_LEVELS[currentIndex + 1]);
        }
    };
    const decreaseZoom = ()=>{
        const currentIndex = ZOOM_LEVELS.indexOf(zoomLevel);
        if (currentIndex > 0) {
            setZoomLevel(ZOOM_LEVELS[currentIndex - 1]);
        }
    };
    const resetZoom = ()=>{
        setZoomLevel(100);
    };
    // Apply initial zoom on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ZoomProvider.useEffect": ()=>{
            setZoomLevel(zoomLevel);
            // Listen for zoom keyboard events
            const handleZoomIn = {
                "ZoomProvider.useEffect.handleZoomIn": ()=>increaseZoom()
            }["ZoomProvider.useEffect.handleZoomIn"];
            const handleZoomOut = {
                "ZoomProvider.useEffect.handleZoomOut": ()=>decreaseZoom()
            }["ZoomProvider.useEffect.handleZoomOut"];
            const handleZoomReset = {
                "ZoomProvider.useEffect.handleZoomReset": ()=>resetZoom()
            }["ZoomProvider.useEffect.handleZoomReset"];
            window.addEventListener('zoomIn', handleZoomIn);
            window.addEventListener('zoomOut', handleZoomOut);
            window.addEventListener('zoomReset', handleZoomReset);
            // Global keyboard shortcuts
            const handleKeyDown = {
                "ZoomProvider.useEffect.handleKeyDown": (e)=>{
                    if (e.ctrlKey || e.metaKey) {
                        if (e.key === '=' || e.key === '+') {
                            e.preventDefault();
                            increaseZoom();
                        } else if (e.key === '-') {
                            e.preventDefault();
                            decreaseZoom();
                        } else if (e.key === '0') {
                            e.preventDefault();
                            resetZoom();
                        }
                    }
                }
            }["ZoomProvider.useEffect.handleKeyDown"];
            document.addEventListener('keydown', handleKeyDown);
            return ({
                "ZoomProvider.useEffect": ()=>{
                    window.removeEventListener('zoomIn', handleZoomIn);
                    window.removeEventListener('zoomOut', handleZoomOut);
                    window.removeEventListener('zoomReset', handleZoomReset);
                    document.removeEventListener('keydown', handleKeyDown);
                }
            })["ZoomProvider.useEffect"];
        }
    }["ZoomProvider.useEffect"], [
        zoomLevel
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ZoomContext.Provider, {
        value: {
            zoomLevel,
            setZoomLevel,
            increaseZoom,
            decreaseZoom,
            resetZoom,
            zoomLevels: ZOOM_LEVELS
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/ZoomContext.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s(ZoomProvider, "XUiJRZi6hvUBQoaRD5eeL27RV3I=");
_c = ZoomProvider;
function useZoom() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ZoomContext);
    if (context === undefined) {
        throw new Error('useZoom must be used within a ZoomProvider');
    }
    return context;
}
_s1(useZoom, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ZoomProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ZoomControls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ZoomControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ZoomContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ZoomContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ZoomControls() {
    _s();
    const { zoomLevel, increaseZoom, decreaseZoom, resetZoom, setZoomLevel, zoomLevels } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ZoomContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useZoom"])();
    const [showControls, setShowControls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowControls(!showControls),
                className: "flex items-center space-x-2 px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md font-medium transition-all duration-200",
                title: "Current zoom: ".concat(zoomLevel, "%"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ZoomControls.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M10 8v6m3-3H7"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ZoomControls.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ZoomControls.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        children: [
                            zoomLevel,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ZoomControls.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ZoomControls.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            showControls && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 min-w-[200px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-semibold text-gray-800",
                                children: [
                                    zoomLevel,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ZoomControls.tsx",
                                lineNumber: 31,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ZoomControls.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: decreaseZoom,
                                    disabled: zoomLevel === Math.min(...zoomLevels),
                                    className: "flex-1 px-3 py-2 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-300 text-white rounded text-sm font-medium transition-colors",
                                    children: "−"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ZoomControls.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: resetZoom,
                                    className: "flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium transition-colors",
                                    children: "100%"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ZoomControls.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: increaseZoom,
                                    disabled: zoomLevel === Math.max(...zoomLevels),
                                    className: "flex-1 px-3 py-2 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-300 text-white rounded text-sm font-medium transition-colors",
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ZoomControls.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ZoomControls.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-600 font-medium",
                                    children: "Quick Zoom:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ZoomControls.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-1",
                                    children: [
                                        125,
                                        150,
                                        200,
                                        250,
                                        300
                                    ].map((level)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setZoomLevel(level),
                                            className: "px-2 py-1 text-xs rounded transition-colors ".concat(zoomLevel === level ? 'bg-orange-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'),
                                            children: [
                                                level,
                                                "%"
                                            ]
                                        }, level, true, {
                                            fileName: "[project]/src/components/ZoomControls.tsx",
                                            lineNumber: 63,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ZoomControls.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ZoomControls.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-gray-500 text-center pt-2 border-t",
                            children: "🔍 Enhanced visibility for better reading"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ZoomControls.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ZoomControls.tsx",
                    lineNumber: 28,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ZoomControls.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this),
            showControls && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40",
                onClick: ()=>setShowControls(false)
            }, void 0, false, {
                fileName: "[project]/src/components/ZoomControls.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ZoomControls.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(ZoomControls, "raPy8VCu07PkZOCM9pJJWQ9fGeU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ZoomContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useZoom"]
    ];
});
_c = ZoomControls;
var _c;
__turbopack_context__.k.register(_c, "ZoomControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/contexts/SearchContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchProvider",
    ()=>SearchProvider,
    "useSearch",
    ()=>useSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const SearchContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function SearchProvider(param) {
    let { children } = param;
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchContext.Provider, {
        value: {
            searchQuery,
            setSearchQuery
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/SearchContext.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(SearchProvider, "uixqA8hxOTN7LqZPWxVzG2fnyhQ=");
_c = SearchProvider;
function useSearch() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SearchContext);
    if (context === undefined) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
}
_s1(useSearch, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "SearchProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/scroll.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enableSmoothScrolling",
    ()=>enableSmoothScrolling,
    "initializeDefaultScrolling",
    ()=>initializeDefaultScrolling,
    "scrollToProducts",
    ()=>scrollToProducts,
    "scrollToSection",
    ()=>scrollToSection
]);
const scrollToProducts = ()=>{
    const productsSection = document.getElementById('all-products');
    if (productsSection) {
        // Get any fixed header height
        const header = document.querySelector('header');
        const headerHeight = header ? header.getBoundingClientRect().height : 0;
        // Calculate the element's position relative to the viewport
        const elementPosition = productsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - (headerHeight + 20);
        // Smooth scroll to element with offset
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};
const scrollToSection = (sectionId)=>{
    const element = document.getElementById(sectionId);
    if (element) {
        const navbar = document.querySelector('nav');
        const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 64;
        // Use browser's default smooth scrolling
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
        // Fine-tune position to account for fixed navbar
        setTimeout(()=>{
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - navbarHeight - 16;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }, 100);
    }
};
const enableSmoothScrolling = ()=>{
    // Add smooth scrolling CSS to html element
    if (typeof document !== 'undefined') {
        document.documentElement.style.scrollBehavior = 'smooth';
    }
};
const initializeDefaultScrolling = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Enable smooth scrolling
    enableSmoothScrolling();
    // Handle hash changes in URL
    const handleHashChange = ()=>{
        const hash = window.location.hash.substring(1);
        if (hash) {
            setTimeout(()=>scrollToSection(hash), 100);
        }
    };
    // Handle initial hash on page load
    if (window.location.hash) {
        handleHashChange();
    }
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return ()=>{
        window.removeEventListener('hashchange', handleHashChange);
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SearchBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ZoomControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ZoomControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$SearchContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/SearchContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/scroll.ts [app-client] (ecmascript)");
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
function Navbar() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [windowWidth, setWindowWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { searchQuery, setSearchQuery } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$SearchContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearch"])();
    // Amazon-like scroll and resize detection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 10);
                }
            }["Navbar.useEffect.handleScroll"];
            const handleResize = {
                "Navbar.useEffect.handleResize": ()=>{
                    setWindowWidth(window.innerWidth);
                }
            }["Navbar.useEffect.handleResize"];
            // Set initial values
            if ("TURBOPACK compile-time truthy", 1) {
                handleScroll();
                handleResize();
            }
            // Add event listeners
            window.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleResize);
            // Cleanup
            return ({
                "Navbar.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                    window.removeEventListener('resize', handleResize);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const handleSearch = (value)=>{
        setSearchQuery(value);
    };
    const handleSearchSubmit = ()=>{
        // Only proceed if there's a search query
        if (searchQuery.trim()) {
            // Check current page location
            const currentPath = window.location.pathname;
            if (currentPath === '/') {
                // If on home page, just scroll to products section to show search results
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToProducts"])();
            } else {
                // If on another page, navigate to home page first
                router.push('/');
                // Small delay to ensure navigation completes before scrolling
                setTimeout(()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToProducts"])();
                }, 300);
            }
        }
    };
    const scrollToSection = (sectionId)=>(e)=>{
            e.preventDefault();
            // Update URL hash without reload
            history.pushState(null, '', "/#".concat(sectionId));
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
        };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "bg-white fixed w-full z-50 transition-all duration-300 ".concat(isScrolled ? 'shadow-lg' : 'shadow-md'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-screen-2xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between transition-all duration-300 ".concat(windowWidth < 480 ? 'h-12 px-2' : windowWidth < 768 ? 'h-14 px-3' : windowWidth < 1024 ? 'h-16 px-4' : windowWidth < 1440 ? 'h-18 px-6' : 'h-20 px-8'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 ".concat(windowWidth < 480 ? 'mr-2' : windowWidth < 768 ? 'mr-3' : 'mr-4'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center transition-all duration-200 hover:scale-105 ".concat(windowWidth < 480 ? 'scale-90' : 'scale-100'),
                                onClick: (e)=>{
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
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        windowWidth >= 768 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 transition-all duration-300 ".concat(windowWidth < 1024 ? 'max-w-md mx-4' : windowWidth < 1440 ? 'max-w-lg mx-6' : 'max-w-2xl mx-8'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: searchQuery,
                                onChange: handleSearch,
                                onEnter: handleSearchSubmit,
                                placeholder: "Search for products..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 149,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this),
                        windowWidth < 768 && !isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 mx-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMobileMenuOpen(true),
                                className: "w-full h-8 bg-gray-100 rounded-md flex items-center px-3 text-gray-500 text-sm hover:bg-gray-200 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 mr-2",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 166,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this),
                                    "Search..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 161,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 160,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center transition-all duration-300 ".concat(windowWidth < 1440 ? 'space-x-4' : 'space-x-6'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ZoomControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "text-gray-700 hover:text-orange-600 transition-all duration-200 rounded-md font-medium border-b-2 border-transparent hover:border-orange-600 ".concat(windowWidth < 1440 ? 'px-2 py-2 text-sm' : 'px-3 py-2 text-sm'),
                                    onClick: (e)=>{
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
                                            setTimeout(()=>{
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: 'smooth'
                                                });
                                            }, 300);
                                        }
                                        // Reset mobile menu state
                                        setIsMobileMenuOpen(false);
                                    },
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#all-products",
                                    className: "text-gray-700 hover:text-orange-600 transition-all duration-200 rounded-md font-medium border-b-2 border-transparent hover:border-orange-600 ".concat(windowWidth < 1440 ? 'px-2 py-2 text-sm' : 'px-3 py-2 text-sm'),
                                    onClick: (e)=>{
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
                                            setTimeout(()=>{
                                                window.dispatchEvent(new CustomEvent('clearCategoryAndShowAll'));
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToProducts"])();
                                            }, 300);
                                        }
                                        setIsMobileMenuOpen(false); // Close mobile menu if open
                                    },
                                    children: "Products"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#about",
                                    className: "text-gray-700 hover:text-orange-600 transition-all duration-200 rounded-md font-medium border-b-2 border-transparent hover:border-orange-600 ".concat(windowWidth < 1440 ? 'px-2 py-2 text-sm' : 'px-3 py-2 text-sm'),
                                    onClick: (e)=>{
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
                                            setTimeout(()=>{
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
                                    },
                                    children: "About"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#contact",
                                    className: "text-gray-700 hover:text-orange-600 transition-all duration-200 rounded-md font-medium border-b-2 border-transparent hover:border-orange-600 ".concat(windowWidth < 1440 ? 'px-2 py-2 text-sm' : 'px-3 py-2 text-sm'),
                                    onClick: (e)=>{
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
                                            setTimeout(()=>{
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
                                    },
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:hidden flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                className: "inline-flex items-center justify-center rounded-md text-gray-700 hover:text-orange-600 focus:outline-none transition-all duration-200 ".concat(windowWidth < 480 ? 'p-1' : 'p-2'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "transition-all duration-200 ".concat(windowWidth < 480 ? 'h-5 w-5' : 'h-6 w-6'),
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 366,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 368,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 357,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 351,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 350,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden border-t border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white shadow-xl transition-all duration-300 ".concat(windowWidth < 480 ? 'px-2 py-3' : 'px-4 py-4'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "".concat(windowWidth < 480 ? 'mb-3' : 'mb-4'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: searchQuery,
                                onChange: handleSearch,
                                onEnter: handleSearchSubmit,
                                placeholder: "Search for products..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 385,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 384,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1 ".concat(windowWidth < 480 ? 'text-sm' : 'text-base'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b border-gray-200 pb-3 mb-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ZoomControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 397,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 396,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#",
                                    className: "text-gray-800 hover:text-orange-600 hover:bg-orange-50 block rounded-lg font-medium transition-all duration-200 border-l-4 border-transparent hover:border-orange-600 ".concat(windowWidth < 480 ? 'px-3 py-2' : 'px-4 py-3'),
                                    onClick: (e)=>{
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
                                            setTimeout(()=>{
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: 'smooth'
                                                });
                                            }, 300);
                                        }
                                    },
                                    children: "🏠 Home"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 400,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#",
                                    className: "text-gray-800 hover:text-orange-600 hover:bg-orange-50 block rounded-lg font-medium transition-all duration-200 border-l-4 border-transparent hover:border-orange-600 ".concat(windowWidth < 480 ? 'px-3 py-2' : 'px-4 py-3'),
                                    onClick: (e)=>{
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
                                            setTimeout(()=>{
                                                window.dispatchEvent(new CustomEvent('clearCategoryAndShowAll'));
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToProducts"])();
                                            }, 300);
                                        }
                                    },
                                    children: "🛒 Products"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 439,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#about",
                                    className: "text-gray-800 hover:text-orange-600 hover:bg-orange-50 block rounded-lg font-medium transition-all duration-200 border-l-4 border-transparent hover:border-orange-600 ".concat(windowWidth < 480 ? 'px-3 py-2' : 'px-4 py-3'),
                                    onClick: (e)=>{
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
                                            setTimeout(()=>{
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
                                    },
                                    children: "ℹ️ About"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 468,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#contact",
                                    className: "text-gray-800 hover:text-orange-600 hover:bg-orange-50 block rounded-lg font-medium transition-all duration-200 border-l-4 border-transparent hover:border-orange-600 ".concat(windowWidth < 480 ? 'px-3 py-2' : 'px-4 py-3'),
                                    onClick: (e)=>{
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
                                            setTimeout(()=>{
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
                                    },
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 507,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 394,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 379,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 378,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s(Navbar, "T7K0yrJ+1alZKRn0QH+qZTERDJ4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$SearchContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearch"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/Footer/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$SearchContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/SearchContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const socialLinks = [
    {
        name: 'Facebook',
        url: 'https://facebook.com/raagafoods',
        icon: '/social/facebook.svg',
        hoverClass: 'hover:text-[#1877F2]' // Facebook brand color
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/raagafoods',
        icon: '/social/twitter.svg',
        hoverClass: 'hover:text-[#1DA1F2]' // Twitter brand color
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/raagafoods',
        icon: '/social/instagram.svg',
        hoverClass: 'hover:text-[#E4405F]' // Instagram brand color
    },
    {
        name: 'YouTube',
        url: 'https://youtube.com/raagafoods',
        icon: '/social/youtube.svg',
        hoverClass: 'hover:text-[#FF0000]' // YouTube brand color
    }
];
function Footer() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { setSearchQuery } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$SearchContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearch"])();
    const handleHomeClick = (e)=>{
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
            setTimeout(()=>{
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }, 300);
        }
    };
    const handleSectionClick = (sectionId)=>(e)=>{
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
                setTimeout(()=>{
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
    const handleAboutClick = (e)=>{
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
            setTimeout(()=>{
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-gray-900 text-gray-300 mt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-white mb-4",
                                children: "Raaga Foods"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Footer/page.js",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm leading-relaxed",
                                children: "Bringing you authentic Indian pickles with traditional flavors and premium quality ingredients."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Footer/page.js",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-6",
                                children: socialLinks.map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: social.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "transition-all duration-300 hover:scale-110",
                                        "aria-label": "Follow us on ".concat(social.name),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-6 h-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: social.icon,
                                                alt: social.name,
                                                fill: true,
                                                className: "object-contain brightness-0 invert opacity-90 hover:opacity-100"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Footer/page.js",
                                                lineNumber: 197,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Footer/page.js",
                                            lineNumber: 196,
                                            columnNumber: 19
                                        }, this)
                                    }, social.name, false, {
                                        fileName: "[project]/src/app/Footer/page.js",
                                        lineNumber: 188,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/Footer/page.js",
                                lineNumber: 186,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Footer/page.js",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-white mb-4",
                                children: "Quick Links"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Footer/page.js",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "hover:text-white transition-colors duration-200",
                                            onClick: handleHomeClick,
                                            children: "Home"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Footer/page.js",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Footer/page.js",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#all-products",
                                            className: "hover:text-white transition-colors duration-200",
                                            onClick: handleSectionClick('all-products'),
                                            children: "Products"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Footer/page.js",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Footer/page.js",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#about",
                                            className: "hover:text-white transition-colors duration-200",
                                            onClick: handleAboutClick,
                                            children: "About"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Footer/page.js",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Footer/page.js",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#contact",
                                            className: "hover:text-white transition-colors duration-200",
                                            onClick: handleSectionClick('contact'),
                                            children: "Contact"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Footer/page.js",
                                            lineNumber: 241,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Footer/page.js",
                                        lineNumber: 240,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Footer/page.js",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Footer/page.js",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-white mb-4",
                                children: "Customer Service"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Footer/page.js",
                                lineNumber: 254,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:text-white",
                                            children: "FAQ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Footer/page.js",
                                            lineNumber: 256,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Footer/page.js",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:text-white",
                                            children: "Shipping & Returns"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Footer/page.js",
                                            lineNumber: 257,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Footer/page.js",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:text-white",
                                            children: "Privacy Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Footer/page.js",
                                            lineNumber: 258,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Footer/page.js",
                                        lineNumber: 258,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:text-white",
                                            children: "Terms of Service"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Footer/page.js",
                                            lineNumber: 259,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Footer/page.js",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Footer/page.js",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Footer/page.js",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Footer/page.js",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-gray-700 py-4 text-center text-sm text-gray-400",
                children: [
                    "© ",
                    new Date().getFullYear(),
                    " Raaga Foods. All rights reserved."
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Footer/page.js",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "ManyamConsultancy"
            }, void 0, false, {
                fileName: "[project]/src/app/Footer/page.js",
                lineNumber: 271,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Footer/page.js",
        lineNumber: 175,
        columnNumber: 5
    }, this);
}
_s(Footer, "TotL+bKcmQOr09QQy9fUUA66Gbo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$SearchContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearch"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_26592ff8._.js.map
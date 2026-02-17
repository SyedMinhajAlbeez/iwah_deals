(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/storefront/src/components/common/Shimmer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/common/Shimmer.tsx
__turbopack_context__.s([
    "Shimmer",
    ()=>Shimmer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Shimmer({ className, rounded = "md", width = "100%", height = "100%", ...props }) {
    const roundedClass = {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
        none: "rounded-none"
    }[rounded];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        relative overflow-hidden
        bg-gray-200 dark:bg-gray-700
        ${roundedClass}
        ${className}
      `,
        style: {
            width,
            height
        },
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `
          absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite]
          bg-gradient-to-r from-transparent via-white/30 to-transparent
        `
        }, void 0, false, {
            fileName: "[project]/storefront/src/components/common/Shimmer.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/storefront/src/components/common/Shimmer.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = Shimmer;
var _c;
__turbopack_context__.k.register(_c, "Shimmer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/components/home/ImageCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/storefront/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$common$2f$Shimmer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/components/common/Shimmer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ImageCarousel = ({ options })=>{
    _s();
    const { images } = options;
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const autoplayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const getFullImageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageCarousel.useCallback[getFullImageUrl]": (imagePath)=>{
            if (!imagePath) return "";
            if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
                return imagePath;
            }
            const backendUrl = ("TURBOPACK compile-time value", "http://localhost:8000");
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
            const cleanBase = backendUrl.endsWith('/') ? backendUrl.slice(0, -1) : backendUrl;
            return `${cleanBase}/${cleanPath}`;
        }
    }["ImageCarousel.useCallback[getFullImageUrl]"], []);
    const startAutoplay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageCarousel.useCallback[startAutoplay]": ()=>{
            if (!images || images.length <= 1) return;
            autoplayRef.current = setInterval({
                "ImageCarousel.useCallback[startAutoplay]": ()=>{
                    setCurrentIndex({
                        "ImageCarousel.useCallback[startAutoplay]": (prev)=>(prev + 1) % images.length
                    }["ImageCarousel.useCallback[startAutoplay]"]);
                }
            }["ImageCarousel.useCallback[startAutoplay]"], 5000);
        }
    }["ImageCarousel.useCallback[startAutoplay]"], [
        images
    ]);
    const stopAutoplay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageCarousel.useCallback[stopAutoplay]": ()=>{
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current);
                autoplayRef.current = null;
            }
        }
    }["ImageCarousel.useCallback[stopAutoplay]"], []);
    const handleDotClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageCarousel.useCallback[handleDotClick]": (index)=>{
            setCurrentIndex(index);
            setIsPaused(true);
            stopAutoplay();
            setTimeout({
                "ImageCarousel.useCallback[handleDotClick]": ()=>{
                    setIsPaused(false);
                }
            }["ImageCarousel.useCallback[handleDotClick]"], 10000);
        }
    }["ImageCarousel.useCallback[handleDotClick]"], [
        stopAutoplay
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageCarousel.useEffect": ()=>{
            if (!isPaused && images && images.length > 1) {
                startAutoplay();
            }
            return ({
                "ImageCarousel.useEffect": ()=>stopAutoplay()
            })["ImageCarousel.useEffect"];
        }
    }["ImageCarousel.useEffect"], [
        isPaused,
        images,
        startAutoplay,
        stopAutoplay
    ]);
    const touchStartX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const touchEndX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseStartX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseEndX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (!Array.isArray(images) || images.length === 0) return null;
    const handleTouchStart = (e)=>{
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchMove = (e)=>{
        touchEndX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = ()=>{
        if (touchStartX.current !== null && touchEndX.current !== null) {
            const distance = touchStartX.current - touchEndX.current;
            if (distance > 50) {
                setCurrentIndex((prev)=>(prev + 1) % images.length);
            } else if (distance < -50) {
                setCurrentIndex((prev)=>(prev - 1 + images.length) % images.length);
            }
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };
    const handleMouseDown = (e)=>{
        mouseStartX.current = e.clientX;
    };
    const handleMouseUp = (e)=>{
        mouseEndX.current = e.clientX;
        if (mouseStartX.current !== null && mouseEndX.current !== null) {
            const distance = mouseStartX.current - mouseEndX.current;
            if (distance > 50) {
                setCurrentIndex((prev)=>(prev + 1) % images.length);
            } else if (distance < -50) {
                setCurrentIndex((prev)=>(prev - 1 + images.length) % images.length);
            }
        }
        mouseStartX.current = null;
        mouseEndX.current = null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mt-7.5 w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative w-full overflow-hidden rounded-xl md:rounded-2xl aspect-[1.97/1]",
            style: {
                position: 'relative',
                width: '100%'
            },
            onMouseEnter: ()=>setIsPaused(true),
            onMouseLeave: ()=>setIsPaused(false),
            onTouchStart: handleTouchStart,
            onTouchMove: handleTouchMove,
            onTouchEnd: handleTouchEnd,
            onMouseDown: handleMouseDown,
            onMouseUp: handleMouseUp,
            children: [
                images.map((img, index)=>{
                    const imageUrl = getFullImageUrl(img.image);
                    const isActive = index === currentIndex;
                    const altText = img.title || `Banner ${index + 1}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute inset-0 transition-opacity duration-700 ${isActive ? "opacity-100 z-0" : "opacity-0 z-0"}`,
                        style: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%'
                        },
                        children: img.link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/search/${img.link}`,
                            className: "block h-full w-full",
                            "aria-label": `View ${altText}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-full w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$common$2f$Shimmer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shimmer"], {
                                        className: "h-full w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/storefront/src/components/home/ImageCarousel.tsx",
                                        lineNumber: 155,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: imageUrl,
                                        alt: altText,
                                        fill: true,
                                        className: "object-cover !z-0",
                                        priority: index === 0,
                                        sizes: "100vw"
                                    }, void 0, false, {
                                        fileName: "[project]/storefront/src/components/home/ImageCarousel.tsx",
                                        lineNumber: 156,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/storefront/src/components/home/ImageCarousel.tsx",
                                lineNumber: 154,
                                columnNumber: 37
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/storefront/src/components/home/ImageCarousel.tsx",
                            lineNumber: 149,
                            columnNumber: 33
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-full w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$common$2f$Shimmer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shimmer"], {
                                    className: "h-full w-full"
                                }, void 0, false, {
                                    fileName: "[project]/storefront/src/components/home/ImageCarousel.tsx",
                                    lineNumber: 168,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: imageUrl,
                                    alt: altText,
                                    fill: true,
                                    className: "object-cover !z-0",
                                    priority: index === 0,
                                    sizes: "100vw"
                                }, void 0, false, {
                                    fileName: "[project]/storefront/src/components/home/ImageCarousel.tsx",
                                    lineNumber: 169,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/storefront/src/components/home/ImageCarousel.tsx",
                            lineNumber: 167,
                            columnNumber: 33
                        }, ("TURBOPACK compile-time value", void 0))
                    }, index, false, {
                        fileName: "[project]/storefront/src/components/home/ImageCarousel.tsx",
                        lineNumber: 137,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0));
                }),
                images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-4 left-1/2 z-0 flex -translate-x-1/2 gap-2 rounded-full bg-black/30 px-3 py-2 backdrop-blur-sm md:bottom-6",
                    children: images.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleDotClick(index),
                            className: `h-2.5 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80 hover:w-4"}`,
                            type: "button",
                            "aria-label": `Go to slide ${index + 1}`,
                            "aria-current": index === currentIndex
                        }, index, false, {
                            fileName: "[project]/storefront/src/components/home/ImageCarousel.tsx",
                            lineNumber: 186,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/storefront/src/components/home/ImageCarousel.tsx",
                    lineNumber: 184,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/storefront/src/components/home/ImageCarousel.tsx",
            lineNumber: 117,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/storefront/src/components/home/ImageCarousel.tsx",
        lineNumber: 116,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ImageCarousel, "oIts0MCm27vw4M/0q/L36ucYi7o=");
_c = ImageCarousel;
const __TURBOPACK__default__export__ = ImageCarousel;
var _c;
__turbopack_context__.k.register(_c, "ImageCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/components/common/icons/LeftArrow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeftArrow",
    ()=>LeftArrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const LeftArrow = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "size-4",
        fill: "none",
        height: "14",
        viewBox: "0 0 15 14",
        width: "15",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M11.188 5.448V8.304H0.028V5.448H11.188ZM4.588 13.056L10.756 6.888L4.588 0.719999H8.596L14.764 6.888L8.596 13.056H4.588Z",
            fill: "white"
        }, void 0, false, {
            fileName: "[project]/storefront/src/components/common/icons/LeftArrow.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/storefront/src/components/common/icons/LeftArrow.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LeftArrow;
var _c;
__turbopack_context__.k.register(_c, "LeftArrow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/components/theme/ui/Price.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Price",
    ()=>Price
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Price = ({ amount, className, currencyCode = "USD", ...rest })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: className,
        suppressHydrationWarning: true,
        ...rest,
        children: `${new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: currencyCode,
            currencyDisplay: "narrowSymbol"
        }).format(parseFloat(amount))}`
    }, void 0, false, {
        fileName: "[project]/storefront/src/components/theme/ui/Price.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Price;
var _c;
__turbopack_context__.k.register(_c, "Price");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/components/theme/ui/Label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$common$2f$icons$2f$LeftArrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/components/common/icons/LeftArrow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$theme$2f$ui$2f$Price$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/components/theme/ui/Price.tsx [app-client] (ecmascript)");
;
;
;
;
const Label = ({ title, amount, currencyCode, page, position = "bottom" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("absolute w-fit px-4 ", {
            "bottom-0  pb-4": position === "center",
            "bottom-0 pb-5 md:pb-4": position === "bottom",
            "bottom-0 left-0  pb-4": position === "left"
        }),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex gap-5 items-center rounded-full px-[3.5rem] py-2 border border-neutral-200 bg-white/70 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white ${page === "category" ? "md:py-2  md:px-4 lg:px-6 lg:py-4" : "md:py-5 md:px-6 "}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: ` line-clamp-2 font-semibold leading-none tracking-tight ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(page === "category" ? "text-sm md:text-xl lg:text-2xl" : "text-sm ")}`,
                    children: title
                }, void 0, false, {
                    fileName: "[project]/storefront/src/components/theme/ui/Label.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                page === "category" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    "aria-label": "Go back",
                    className: "cursor-pointer rounded-full bg-blue-600 p-2 sm:p-3 transition-transform duration-300 hover:translate-x-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$common$2f$icons$2f$LeftArrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeftArrow"], {}, void 0, false, {
                        fileName: "[project]/storefront/src/components/theme/ui/Label.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/storefront/src/components/theme/ui/Label.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$theme$2f$ui$2f$Price$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Price"], {
                    amount: amount,
                    className: "flex-none rounded-full bg-blue-600 p-2 text-sm text-white",
                    currencyCode: currencyCode
                }, void 0, false, {
                    fileName: "[project]/storefront/src/components/theme/ui/Label.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/storefront/src/components/theme/ui/Label.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/storefront/src/components/theme/ui/Label.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Label;
const __TURBOPACK__default__export__ = Label;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/components/theme/ui/grid/Tile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GridTileImage",
    ()=>GridTileImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$theme$2f$ui$2f$Label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/components/theme/ui/Label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/utils/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$common$2f$Shimmer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/components/common/Shimmer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function GridTileImage({ active, label, src, alt, className, ...props }) {
    _s();
    const [imgSrc, setImgSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(src);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasError, setHasError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const loadDone = ()=>{
        setTimeout(()=>{
            if (!src) {
                setImgSrc(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOT_IMAGE"]);
            }
        }, 500);
        setIsLoaded(true);
    };
    const handleError = ()=>{
        setHasError(true);
        setImgSrc(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOT_IMAGE"]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("group relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg dark:bg-black", active ? "border-2 border-blue-600" : "border-2 border-transparent", {
            relative: label
        }),
        children: [
            !isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$common$2f$Shimmer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shimmer"], {
                className: "absolute inset-0 z-0",
                width: "100%",
                height: "100%",
                rounded: "lg"
            }, void 0, false, {
                fileName: "[project]/storefront/src/components/theme/ui/grid/Tile.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this),
            imgSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: imgSrc,
                alt: alt ?? "",
                placeholder: "blur",
                blurDataURL: __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOT_IMAGE"],
                onError: handleError,
                onLoad: loadDone,
                ...props,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("duration-700 truncate h-full transition group-hover:scale-105 w-full object-cover ease-in-out", hasError ? "bg-contain!" : "", isLoaded ? "opacity-100" : "opacity-0", className)
            }, void 0, false, {
                fileName: "[project]/storefront/src/components/theme/ui/grid/Tile.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full w-full"
            }, void 0, false, {
                fileName: "[project]/storefront/src/components/theme/ui/grid/Tile.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this),
            label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$theme$2f$ui$2f$Label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                amount: label.amount,
                currencyCode: label.currencyCode,
                page: label.page,
                position: label.position,
                title: label.title
            }, void 0, false, {
                fileName: "[project]/storefront/src/components/theme/ui/grid/Tile.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/storefront/src/components/theme/ui/grid/Tile.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(GridTileImage, "vqLB8hWUjRFpBC2fZJmoHbENa1A=");
_c = GridTileImage;
var _c;
__turbopack_context__.k.register(_c, "GridTileImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/utils/hooks/useMediaQueryHook.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMediaQuery",
    ()=>useMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useMediaQuery(query) {
    _s();
    const subscribe = (callback)=>{
        const media = window.matchMedia(query);
        media.addEventListener("change", callback);
        return ()=>media.removeEventListener("change", callback);
    };
    const getSnapshot = ()=>{
        return window.matchMedia(query).matches;
    };
    const getServerSnapshot = ()=>{
        return false;
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, getSnapshot, getServerSnapshot);
}
_s(useMediaQuery, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/components/home/ThreeItemGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThreeItemGrid",
    ()=>ThreeItemGrid,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$theme$2f$ui$2f$grid$2f$Tile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/components/theme/ui/grid/Tile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$hooks$2f$useMediaQueryHook$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/utils/hooks/useMediaQueryHook.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ThreeItemGridItem({ product, size, priority }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "relative block h-full w-full",
            href: `/product/${product.urlKey}`,
            "aria-label": `${product?.name}`,
            style: {
                aspectRatio: size === 'full' ? '1018 / 800' : '502 / 393'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$theme$2f$ui$2f$grid$2f$Tile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridTileImage"], {
                src: product.baseImageUrl,
                className: "object-cover ",
                fill: true,
                sizes: size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw',
                priority: priority,
                alt: product.name,
                label: {
                    position: size === 'full' ? 'center' : 'bottom',
                    title: product.name,
                    amount: product.type === 'configurable' ? product.minimumPrice || '0' : product.price || '0',
                    currencyCode: 'USD'
                }
            }, void 0, false, {
                fileName: "[project]/storefront/src/components/home/ThreeItemGrid.tsx",
                lineNumber: 43,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/storefront/src/components/home/ThreeItemGrid.tsx",
            lineNumber: 35,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/storefront/src/components/home/ThreeItemGrid.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
_c = ThreeItemGridItem;
function MobileThreeItemGridItem({ product, size, priority }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: size === 'full' ? 'col-span-1 xs:col-span-2 order-2' : 'col-span-1',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "relative block h-full w-full",
            href: `/product/${product.urlKey}`,
            "aria-label": `${product?.name}`,
            style: {
                aspectRatio: size === 'full' ? '380 / 280' : '182 / 280'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$theme$2f$ui$2f$grid$2f$Tile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridTileImage"], {
                src: product.baseImageUrl,
                className: "object-cover ",
                fill: true,
                sizes: size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw',
                priority: priority,
                alt: product.name,
                label: {
                    position: size === 'full' ? 'center' : 'bottom',
                    title: product.name,
                    amount: product.type === 'configurable' ? product.minimumPrice || '0' : product.price || '0',
                    currencyCode: 'USD'
                }
            }, void 0, false, {
                fileName: "[project]/storefront/src/components/home/ThreeItemGrid.tsx",
                lineNumber: 87,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/storefront/src/components/home/ThreeItemGrid.tsx",
            lineNumber: 79,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/storefront/src/components/home/ThreeItemGrid.tsx",
        lineNumber: 74,
        columnNumber: 9
    }, this);
}
_c1 = MobileThreeItemGridItem;
const ThreeItemGrid = ({ title, description, products })=>{
    _s();
    if (!products || products.length < 3) return null;
    const [firstProduct, secondProduct, thirdProduct] = products;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const isDesktop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$hooks$2f$useMediaQueryHook$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])("(min-width: 768px)");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pt-8 sm:pt-12 lg:pt-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:max-w-4.5xl mx-auto mb-10 w-auto px-0 text-center md:px-36",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mb-4 font-outfit text-xl md:text-4xl font-semibold text-black dark:text-white",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/storefront/src/components/home/ThreeItemGrid.tsx",
                        lineNumber: 119,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm md:text-base font-normal text-black/60 dark:text-neutral-300",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/storefront/src/components/home/ThreeItemGrid.tsx",
                        lineNumber: 122,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/storefront/src/components/home/ThreeItemGrid.tsx",
                lineNumber: 118,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isDesktop ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThreeItemGridItem, {
                        product: firstProduct,
                        size: "full",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/storefront/src/components/home/ThreeItemGrid.tsx",
                        lineNumber: 129,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThreeItemGridItem, {
                        product: secondProduct,
                        size: "half",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/storefront/src/components/home/ThreeItemGrid.tsx",
                        lineNumber: 130,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThreeItemGridItem, {
                        product: thirdProduct,
                        size: "half"
                    }, void 0, false, {
                        fileName: "[project]/storefront/src/components/home/ThreeItemGrid.tsx",
                        lineNumber: 131,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/storefront/src/components/home/ThreeItemGrid.tsx",
                lineNumber: 128,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid  gap-4 grid-cols-1 xs:grid-cols-2 lg:max-h-[calc(100vh-200px)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileThreeItemGridItem, {
                        product: firstProduct,
                        size: "full",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/storefront/src/components/home/ThreeItemGrid.tsx",
                        lineNumber: 136,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileThreeItemGridItem, {
                        product: secondProduct,
                        size: "half",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/storefront/src/components/home/ThreeItemGrid.tsx",
                        lineNumber: 137,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileThreeItemGridItem, {
                        product: thirdProduct,
                        size: "half"
                    }, void 0, false, {
                        fileName: "[project]/storefront/src/components/home/ThreeItemGrid.tsx",
                        lineNumber: 138,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/storefront/src/components/home/ThreeItemGrid.tsx",
                lineNumber: 135,
                columnNumber: 25
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/storefront/src/components/home/ThreeItemGrid.tsx",
        lineNumber: 117,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThreeItemGrid, "OwvWUQgjrMnuU8GZKzxgeJ0yhK4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$hooks$2f$useMediaQueryHook$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"]
    ];
});
_c2 = ThreeItemGrid;
const __TURBOPACK__default__export__ = ThreeItemGrid;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ThreeItemGridItem");
__turbopack_context__.k.register(_c1, "MobileThreeItemGridItem");
__turbopack_context__.k.register(_c2, "ThreeItemGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/components/common/icons/ShoppingCartIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BasketCartIcon",
    ()=>BasketCartIcon,
    "default",
    ()=>ShoppingCartIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
function ShoppingCartIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("fill-ptimary h-5 w-5 dark:fill-transparent", props.className),
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/storefront/src/components/common/icons/ShoppingCartIcon.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/storefront/src/components/common/icons/ShoppingCartIcon.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = ShoppingCartIcon;
function BasketCartIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("fill-ptimary h-48 w-48 dark:fill-transparent", props.className),
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/storefront/src/components/common/icons/ShoppingCartIcon.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/storefront/src/components/common/icons/ShoppingCartIcon.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c1 = BasketCartIcon;
var _c, _c1;
__turbopack_context__.k.register(_c, "ShoppingCartIcon");
__turbopack_context__.k.register(_c1, "BasketCartIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/utils/hooks/useGuestCartToken.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGuestCartToken",
    ()=>useGuestCartToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$fetch$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/utils/fetch-handler.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/utils/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$jwt$2d$cookie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/utils/jwt-cookie.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/utils/getCartToken.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
let tokenCreated = false;
let tokenPromise = null;
const useGuestCartToken = ()=>{
    _s();
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cartId, setCartId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isResettingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const createGuestToken = async ()=>{
        if (tokenPromise) return tokenPromise;
        tokenPromise = (async ()=>{
            if (tokenCreated) {
                // Return existing raw token from cookie
                const cookieVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNativeCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_CART_TOKEN"]);
                if (cookieVal) {
                    const isGuest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNativeCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_GUEST"]) !== "false";
                    const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$jwt$2d$cookie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeJWT"])(cookieVal, isGuest);
                    return decoded?.sessionToken ?? null;
                }
                return null;
            }
            tokenCreated = true;
            try {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$fetch$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchHandler"])({
                    url: "cart/createGuestToken",
                    method: "POST",
                    contentType: true
                });
                const cart = res?.data?.createCartToken?.cartToken;
                if (!cart) {
                    tokenCreated = false;
                    return null;
                }
                const newToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$jwt$2d$cookie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeJWT"])({
                    sessionToken: cart.sessionToken,
                    cartId: cart.id,
                    isGuest: cart.isGuest
                });
                const newCartId = Number(cart.id);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_CART_TOKEN"], newToken);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_CART_ID"], String(newCartId));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_GUEST"], String(cart?.isGuest));
                // State and return should be the RAW token
                setToken(cart.sessionToken);
                setCartId(newCartId);
                return cart.sessionToken;
            } catch (e) {
                console.error("Error creating guest token:", e);
                tokenCreated = false;
                return null;
            } finally{
                tokenPromise = null;
            }
        })();
        return tokenPromise;
    };
    const resetGuestToken = async ()=>{
        if (isResettingRef.current) return;
        isResettingRef.current = true;
        tokenCreated = false;
        // delete old
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_CART_TOKEN"]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_CART_ID"]);
        await createGuestToken();
        isResettingRef.current = false;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGuestCartToken.useEffect": ()=>{
            const cookieToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNativeCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_CART_TOKEN"]);
            if (cookieToken) {
                const isGuest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNativeCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_GUEST"]) !== "false";
                const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$jwt$2d$cookie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeJWT"])(cookieToken, isGuest);
                if (decoded) {
                    setToken(decoded.sessionToken);
                    setCartId(decoded.cartId);
                }
            }
            setIsReady(true);
        }
    }["useGuestCartToken.useEffect"], []);
    return {
        token,
        cartId,
        isReady,
        createGuestToken,
        resetGuestToken,
        deleteCookie: __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCookie"]
    };
};
_s(useGuestCartToken, "VLKxyatSxPGZYiv3gLoWXmTl/cY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/utils/hooks/useAddToCart.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAddProduct",
    ()=>useAddProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/utils/hooks/useToast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$fetch$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/utils/fetch-handler.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$slices$2f$cart$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/store/slices/cart-slice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$type$2d$guards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/utils/type-guards.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/utils/getCartToken.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$hooks$2f$useGuestCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/utils/hooks/useGuestCartToken.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/utils/constants.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
const useAddProduct = ()=>{
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { createGuestToken, resetGuestToken } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$hooks$2f$useGuestCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGuestCartToken"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomToast"])();
    const { mutateAsync, isPending: isCartLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useAddProduct.useMutation": ({ token, ...input })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$fetch$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchHandler"])({
                    url: "cart/addToCart",
                    method: "POST",
                    contentType: true,
                    body: {
                        ...input
                    },
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
        }["useAddProduct.useMutation"],
        onSuccess: {
            "useAddProduct.useMutation": (res)=>{
                const responseData = res?.data?.createAddProductInCart?.addProductInCart;
                if (!responseData?.success) {
                    showToast(res?.error?.message?.message, "danger");
                    return;
                }
                if (responseData) {
                    if (responseData.success) {
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$slices$2f$cart$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addItem"])(responseData));
                        showToast("Product added to cart successfully", "success");
                    }
                }
            }
        }["useAddProduct.useMutation"],
        onError: {
            "useAddProduct.useMutation": (err)=>{
                showToast(err?.message ?? "Error", "danger");
            }
        }["useAddProduct.useMutation"]
    });
    const onAddToCart = async ({ productId, quantity })=>{
        // Ensure token exists - create if needed
        let token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCartToken"])();
        if (!token) {
            token = await createGuestToken();
            if (!token) {
                showToast("Failed to create cart session", "danger");
                return;
            }
        }
        await mutateAsync({
            productId: parseInt(productId),
            quantity,
            token
        });
    };
    //--------Remove Cart Product Quantity--------//
    const { mutateAsync: removeFromCart, isPending: isRemoveLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useAddProduct.useMutation": ({ token, ...input })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$fetch$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchHandler"])({
                    url: "cart/removeCart",
                    method: "POST",
                    contentType: true,
                    body: {
                        ...input
                    },
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
        }["useAddProduct.useMutation"],
        onSuccess: {
            "useAddProduct.useMutation": async (response)=>{
                const responseData = response?.data?.createRemoveCartItem;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$type$2d$guards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(responseData)) {
                    const message = responseData?.message || "Cart item removed successfully";
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$slices$2f$cart$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addItem"])(responseData?.removeCartItem));
                    showToast(message, "warning");
                    if (!responseData?.removeCartItem?.itemsQty) {
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$slices$2f$cart$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCart"])());
                        const isGuest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_GUEST"]);
                        if (isGuest === "true") {
                            resetGuestToken();
                        }
                    }
                } else {
                    showToast("Something went wrong", "warning");
                }
            }
        }["useAddProduct.useMutation"],
        onError: {
            "useAddProduct.useMutation": (error)=>{
                showToast(error?.message, "danger");
            }
        }["useAddProduct.useMutation"]
    });
    const onAddToRemove = async (productId)=>{
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCartToken"])();
        await removeFromCart({
            token: token || "",
            cartItemId: parseInt(productId)
        });
    };
    //---------Update Cart Product Quantity--------//
    const { mutateAsync: updateCartItem, isPending: isUpdateLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useAddProduct.useMutation": ({ token, ...input })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$fetch$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchHandler"])({
                    url: "cart/updateCart",
                    contentType: true,
                    method: "POST",
                    body: {
                        ...input
                    },
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
        }["useAddProduct.useMutation"],
        onSuccess: {
            "useAddProduct.useMutation": (response)=>{
                const responseData = response?.data?.createUpdateCartItem?.updateCartItem;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$type$2d$guards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(responseData)) {
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$slices$2f$cart$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addItem"])(responseData));
                } else {
                    showToast("Something went wrong!", "warning");
                }
            }
        }["useAddProduct.useMutation"],
        onError: {
            "useAddProduct.useMutation": (error)=>{
                showToast(error?.message, "danger");
            }
        }["useAddProduct.useMutation"]
    });
    const onUpdateCart = async ({ cartItemId, quantity })=>{
        if (quantity < 1) {
            showToast("Quantity must be at least 1", "warning");
            return;
        }
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCartToken"])();
        await updateCartItem({
            token: token || "",
            cartItemId: cartItemId,
            quantity
        });
    };
    return {
        isCartLoading,
        onAddToCart,
        isRemoveLoading,
        onAddToRemove,
        onUpdateCart,
        isUpdateLoading
    };
};
_s(useAddProduct, "EN93d/3YSKZ368O+R9cGyqjYCBA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$hooks$2f$useGuestCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGuestCartToken"],
        __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/components/theme/ui/AddToCartButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddToCartButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$common$2f$icons$2f$ShoppingCartIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/components/common/icons/ShoppingCartIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$hooks$2f$useAddToCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/utils/hooks/useAddToCart.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$common$2f$icons$2f$LoadingDots$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/components/common/icons/LoadingDots.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/utils/hooks/useToast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function AddToCartButton({ productType, productUrlKey, productId, isSaleable }) {
    _s();
    const { isCartLoading, onAddToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$hooks$2f$useAddToCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAddProduct"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomToast"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "AddToCartButton.useAppSelector": (state)=>state.user
    }["AddToCartButton.useAppSelector"]);
    const session = {
        user
    };
    const handleAddToCart = ()=>{
        if (!isSaleable || isSaleable === "") {
            showToast("This product is out of stock", "warning");
            return;
        }
        onAddToCart({
            productId: productId.split("/").pop() || "",
            quantity: 1,
            token: session?.user?.token ?? undefined
        });
    };
    const buttonClasses = " flex w-full cursor-pointer items-center  justify-center px-4 rounded-full min-h-8  tracking-wide ";
    const disabledClasses = "cursor-wait opacity-60 hover:opacity-60";
    return productType !== "simple" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        "aria-disabled": "true",
        "aria-label": productUrlKey,
        rel: "prefetch",
        prefetch: true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(buttonClasses, {
            "hover:opacity-90": true
        }),
        href: `/product/${productUrlKey}`,
        type: "submit",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$common$2f$icons$2f$ShoppingCartIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "size-6 -rotate-6 stroke-black stroke-[1.5]"
        }, void 0, false, {
            fileName: "[project]/storefront/src/components/theme/ui/AddToCartButton.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/storefront/src/components/theme/ui/AddToCartButton.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        "aria-disabled": isCartLoading || !isSaleable || isSaleable === "",
        "aria-label": productUrlKey,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(buttonClasses, {
            "hover:opacity-90": isSaleable && isSaleable !== "",
            [disabledClasses]: isCartLoading || !isSaleable || isSaleable === ""
        }),
        type: "button",
        onClick: handleAddToCart,
        children: isCartLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$common$2f$icons$2f$LoadingDots$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "bg-black"
        }, void 0, false, {
            fileName: "[project]/storefront/src/components/theme/ui/AddToCartButton.tsx",
            lineNumber: 70,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$common$2f$icons$2f$ShoppingCartIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "size-6 -rotate-6 stroke-black stroke-[1.5]"
        }, void 0, false, {
            fileName: "[project]/storefront/src/components/theme/ui/AddToCartButton.tsx",
            lineNumber: 72,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/storefront/src/components/theme/ui/AddToCartButton.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(AddToCartButton, "1zKw8lzoHpl8THE7ttKWC+65sEw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$hooks$2f$useAddToCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAddProduct"],
        __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = AddToCartButton;
var _c;
__turbopack_context__.k.register(_c, "AddToCartButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/components/common/NextImage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NextImage",
    ()=>NextImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/utils/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$common$2f$Shimmer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/components/common/Shimmer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function NextImage({ src, alt, className = "", width, height, sizes = "100vw", priority = false }) {
    _s();
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasError, setHasError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const finalSrc = hasError || !src ? __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOT_IMAGE"] : src;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative overflow-hidden ${className}`,
        style: {
            width: "100%",
            height: "100%"
        },
        children: [
            !isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$common$2f$Shimmer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shimmer"], {
                className: "absolute inset-0 z-0",
                width: "100%",
                height: "100%",
                rounded: "lg"
            }, void 0, false, {
                fileName: "[project]/storefront/src/components/common/NextImage.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: finalSrc,
                alt: alt,
                width: width,
                height: height,
                sizes: sizes,
                priority: priority,
                loading: priority ? "eager" : "lazy",
                onLoad: ()=>setIsLoaded(true),
                onError: ()=>{
                    setHasError(true);
                    setIsLoaded(true);
                },
                className: `transition-opacity duration-300 object-cover w-full h-full ${isLoaded ? "opacity-100" : "opacity-0"}`
            }, void 0, false, {
                fileName: "[project]/storefront/src/components/common/NextImage.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/storefront/src/components/common/NextImage.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(NextImage, "wGLfwiT7oEuC5a/S3xg4+IhIxYA=");
_c = NextImage;
var _c;
__turbopack_context__.k.register(_c, "NextImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/components/layout/navbar/Search.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Search
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/utils/helper.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftIcon$3e$__ = __turbopack_context__.i("[project]/storefront/node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js [app-client] (ecmascript) <export default as ArrowLeftIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$hooks$2f$useMediaQueryHook$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/utils/hooks/useMediaQueryHook.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Search({ search = false, setSearch, onClose }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [searchValue, setSearchValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchParams?.get("q") || "");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Search.useEffect": ()=>{
            const handler = setTimeout({
                "Search.useEffect.handler": ()=>{
                    const newParams = new URLSearchParams(searchParams.toString());
                    if (searchValue.trim() === "") {
                        newParams.delete("q");
                    } else {
                        newParams.set("q", searchValue);
                    }
                    if (searchValue) {
                        router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUrl"])("/search", newParams));
                    }
                }
            }["Search.useEffect.handler"], 400);
            return ({
                "Search.useEffect": ()=>clearTimeout(handler)
            })["Search.useEffect"];
        }
    }["Search.useEffect"], [
        searchValue
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Search.useEffect": ()=>{
            if (search && inputRef.current) {
                const input = inputRef.current;
                input.focus();
                const len = input.value.length;
                input.setSelectionRange(len, len);
            }
        }
    }["Search.useEffect"], [
        search
    ]);
    const handleSubmit = ()=>{
        const newParams = new URLSearchParams(searchParams.toString());
        if (searchValue.trim() === "") {
            newParams.delete("q");
        } else {
            newParams.set("q", searchValue);
        }
        if (searchValue) {
            router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUrl"])("/search", newParams));
            onClose?.();
        }
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter") {
            handleSubmit();
        }
    };
    const isDesktop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$hooks$2f$useMediaQueryHook$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])("(min-width: 1024px)");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${isDesktop ? "max-w-[550px]" : ""} relative w-full mx-auto xl:min-w-[516px] outline-none hover:outline-none`,
        children: [
            setSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setSearch(!search),
                type: "button",
                className: "absolute bottom-0 left-1 top-0 flex w-9 cursor-pointer items-center justify-center border-r border-neutral-200 dark:border-neutral-700 md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftIcon$3e$__["ArrowLeftIcon"], {
                    className: "size-5 stroke-neutral-500"
                }, void 0, false, {
                    fileName: "[project]/storefront/src/components/layout/navbar/Search.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/storefront/src/components/layout/navbar/Search.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: inputRef,
                value: searchValue,
                onChange: (e)=>setSearchValue(e.target.value),
                onKeyDown: handleKeyDown,
                autoComplete: "off",
                className: "input w-full rounded-lg border border-neutral-200 bg-white py-2 pl-3 pr-10 text-sm text-black outline-none placeholder:text-neutral-500 focus:ring-2 focus:ring-neutral-300 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400 md:pl-4",
                name: "search",
                placeholder: "Search for products...",
                type: "text"
            }, void 0, false, {
                fileName: "[project]/storefront/src/components/layout/navbar/Search.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: handleSubmit,
                className: "absolute bottom-0 right-1 top-0 flex w-9 cursor-pointer items-center justify-center border-l border-neutral-200 dark:border-neutral-700 md:border-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    className: "size-5 stroke-neutral-500 dark:stroke-white md:stroke-black",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    }, void 0, false, {
                        fileName: "[project]/storefront/src/components/layout/navbar/Search.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/storefront/src/components/layout/navbar/Search.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/storefront/src/components/layout/navbar/Search.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/storefront/src/components/layout/navbar/Search.tsx",
        lineNumber: 73,
        columnNumber: 3
    }, this);
}
_s(Search, "3EpT8c8URHNAK/QWBiKxYW5ZDoc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$hooks$2f$useMediaQueryHook$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"]
    ];
});
_c = Search;
var _c;
__turbopack_context__.k.register(_c, "Search");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/components/cart/OpenCart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OpenCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShoppingCartIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCartIcon$3e$__ = __turbopack_context__.i("[project]/storefront/node_modules/@heroicons/react/24/outline/esm/ShoppingCartIcon.js [app-client] (ecmascript) <export default as ShoppingCartIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
;
function OpenCart({ className, quantity }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex  items-center justify-center rounded-md border-0 lg:border border-solid border-neutral-200 dark:border-neutral-700 lg:h-11 lg:w-11",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShoppingCartIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCartIcon$3e$__["ShoppingCartIcon"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("h-5 w-5", className)
            }, void 0, false, {
                fileName: "[project]/storefront/src/components/cart/OpenCart.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            quantity ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-0 -mr-2 margin-t lg:-mt-2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white",
                children: quantity
            }, void 0, false, {
                fileName: "[project]/storefront/src/components/cart/OpenCart.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/storefront/src/components/cart/OpenCart.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = OpenCart;
var _c;
__turbopack_context__.k.register(_c, "OpenCart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/components/common/skeleton/SearchSkeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchSkeleton",
    ()=>SearchSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__ = __turbopack_context__.i("[project]/storefront/node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js [app-client] (ecmascript) <export default as MagnifyingGlassIcon>");
;
;
const SearchSkeleton = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[550px] relative w-full md:min-w-[386px] xl:min-w-[516px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: "input w-full rounded-lg border border-neutral-200 bg-white py-2 pl-3 pr-10 text-sm text-black outline-none placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400 md:pl-4",
                placeholder: "Search for products..."
            }, void 0, false, {
                fileName: "[project]/storefront/src/components/common/skeleton/SearchSkeleton.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 right-1 top-0 flex w-9 items-center justify-center border-l border-neutral-200 dark:border-neutral-700 md:border-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__["MagnifyingGlassIcon"], {
                    className: "size-5 stroke-neutral-500"
                }, void 0, false, {
                    fileName: "[project]/storefront/src/components/common/skeleton/SearchSkeleton.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/storefront/src/components/common/skeleton/SearchSkeleton.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/storefront/src/components/common/skeleton/SearchSkeleton.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SearchSkeleton;
var _c;
__turbopack_context__.k.register(_c, "SearchSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/components/layout/navbar/MobileSearch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileSearchBar",
    ()=>MobileSearchBar,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$layout$2f$navbar$2f$Search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/components/layout/navbar/Search.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$cart$2f$OpenCart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/components/cart/OpenCart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$common$2f$skeleton$2f$SearchSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/components/common/skeleton/SearchSkeleton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const MobileSearch = ()=>{
    _s();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$cart$2f$OpenCart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/storefront/src/components/layout/navbar/MobileSearch.tsx",
                    lineNumber: 12,
                    columnNumber: 27
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setSearch(!search),
                    "aria-label": "Open cart",
                    className: "size-9 lg:size-11 flex cursor-pointer items-center justify-center rounded-sm border border-solid border-neutral-200 dark:border-neutral-700 md:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: "1.5",
                        stroke: "currentColor",
                        className: "size-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        }, void 0, false, {
                            fileName: "[project]/storefront/src/components/layout/navbar/MobileSearch.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/storefront/src/components/layout/navbar/MobileSearch.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/storefront/src/components/layout/navbar/MobileSearch.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/storefront/src/components/layout/navbar/MobileSearch.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("absolute z-50 left-0 right-0 top-0 flex w-full justify-center bg-neutral-50 dark:bg-neutral-900 p-[15px] transition-all duration-300 md:hidden ", search ? "translate-y-0 opacity-100" : " -translate-y-full opacity-0"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$common$2f$skeleton$2f$SearchSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchSkeleton"], {}, void 0, false, {
                        fileName: "[project]/storefront/src/components/layout/navbar/MobileSearch.tsx",
                        lineNumber: 40,
                        columnNumber: 29
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$layout$2f$navbar$2f$Search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        search: search,
                        setSearch: setSearch
                    }, void 0, false, {
                        fileName: "[project]/storefront/src/components/layout/navbar/MobileSearch.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/storefront/src/components/layout/navbar/MobileSearch.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/storefront/src/components/layout/navbar/MobileSearch.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(MobileSearch, "U++H1Seh0ABbq6ENHr6v/byZWis=");
_c = MobileSearch;
const MobileSearchBar = ({ onClose })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "block w-full justify-center md:hidden px-4 mt-2 z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$common$2f$skeleton$2f$SearchSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchSkeleton"], {}, void 0, false, {
                    fileName: "[project]/storefront/src/components/layout/navbar/MobileSearch.tsx",
                    lineNumber: 58,
                    columnNumber: 29
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$layout$2f$navbar$2f$Search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    search: false,
                    onClose: onClose
                }, void 0, false, {
                    fileName: "[project]/storefront/src/components/layout/navbar/MobileSearch.tsx",
                    lineNumber: 59,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/storefront/src/components/layout/navbar/MobileSearch.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/storefront/src/components/layout/navbar/MobileSearch.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
_c1 = MobileSearchBar;
const __TURBOPACK__default__export__ = MobileSearch;
var _c, _c1;
__turbopack_context__.k.register(_c, "MobileSearch");
__turbopack_context__.k.register(_c1, "MobileSearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=storefront_src_0d59a0f6._.js.map
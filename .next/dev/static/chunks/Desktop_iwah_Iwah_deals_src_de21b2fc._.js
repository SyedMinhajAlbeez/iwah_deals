(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/iwah/Iwah_deals/src/utils/hooks/useScrollTo.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollTo",
    ()=>useScrollTo,
    "useScrollToTop",
    ()=>useScrollToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const useScrollTo = ()=>{
    _s();
    const scrollTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScrollTo.useCallback[scrollTo]": (options)=>{
            if ("TURBOPACK compile-time truthy", 1) {
                window.scrollTo(options || {
                    top: 0,
                    behavior: "smooth"
                });
            }
        }
    }["useScrollTo.useCallback[scrollTo]"], []);
    return scrollTo;
};
_s(useScrollTo, "6p2xCSNbkAHWyJKuFCNJd84GbIw=");
const useScrollToTop = ()=>{
    _s1();
    const scrollTo = useScrollTo();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollToTop.useEffect": ()=>{
            scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }["useScrollToTop.useEffect"], [
        scrollTo
    ]);
};
_s1(useScrollToTop, "NpkDI+C7/ZdNicR6VFq2HbVAklk=", false, function() {
    return [
        useScrollTo
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductDetailSkeleton",
    ()=>ProductDetailSkeleton,
    "ProductPageSkeleton",
    ()=>ProductPageSkeleton,
    "RelatedProductSkeleton",
    ()=>RelatedProductSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useScrollTo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/hooks/useScrollTo.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ProductPageSkeleton = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useScrollTo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollToTop"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductDetailSkeleton, {}, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RelatedProductSkeleton, {}, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProductPageSkeleton, "F6boe31qPOSJnXx5sZBsQsNolgM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useScrollTo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollToTop"]
    ];
});
_c = ProductPageSkeleton;
const ProductDetailSkeleton = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row gap-x-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-w-[878px] items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[736px] w-full animate-pulse rounded-2xl bg-neutral-100 dark:bg-neutral-900"
                }, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full flex-col space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-12 w-full animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-900"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-12 w-1/2 animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-900"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-6 w-1/3 animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-900"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-6 w-1/3 animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-900"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                        className: "text-neutral-100 dark:text-neutral-900"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-6 w-full animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-900"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-full animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-900"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-6 w-full animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-900"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-full animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-900"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-2/3 animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-900"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-x-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 w-24 animate-pulse rounded-full bg-neutral-100 dark:bg-neutral-900"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 w-24 animate-pulse rounded-full bg-neutral-100 dark:bg-neutral-900"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 w-24 animate-pulse rounded-full bg-neutral-100 dark:bg-neutral-900"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 w-24 animate-pulse rounded-full bg-neutral-100 dark:bg-neutral-900"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-x-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-12 w-32 animate-pulse rounded-full bg-neutral-100 dark:bg-neutral-900"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-12 w-48 animate-pulse rounded-xl bg-neutral-100 dark:bg-neutral-900"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                        className: "text-neutral-100 dark:text-neutral-900"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 w-full animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-900"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 w-full animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-900"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 w-full animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-900"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = ProductDetailSkeleton;
const RelatedProductSkeleton = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-12 w-1/3 animate-pulse rounded-md bg-neutral-100 text-2xl font-semibold text-white dark:bg-neutral-900"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 h-6 w-1/2 animate-pulse rounded-md bg-neutral-100 text-2xl font-semibold text-white dark:bg-neutral-900"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 h-6 w-1/6 animate-pulse rounded-md bg-neutral-100 text-2xl font-semibold text-white dark:bg-neutral-900"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
                children: Array(4).fill(0).map((_, index)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-pulse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-92.5 aspect-square w-full rounded-lg bg-neutral-100 dark:bg-neutral-900"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                                lineNumber: 80,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 h-6 w-3/4 rounded-md bg-neutral-100 dark:bg-neutral-900"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                                lineNumber: 81,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 h-4 w-1/2 rounded-md bg-neutral-100 dark:bg-neutral-900"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                                lineNumber: 82,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                        lineNumber: 79,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/ProductSkeleton.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = RelatedProductSkeleton;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ProductPageSkeleton");
__turbopack_context__.k.register(_c1, "ProductDetailSkeleton");
__turbopack_context__.k.register(_c2, "RelatedProductSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/LeftArrow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeftArrow",
    ()=>LeftArrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const LeftArrow = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "size-4",
        fill: "none",
        height: "14",
        viewBox: "0 0 15 14",
        width: "15",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M11.188 5.448V8.304H0.028V5.448H11.188ZM4.588 13.056L10.756 6.888L4.588 0.719999H8.596L14.764 6.888L8.596 13.056H4.588Z",
            fill: "white"
        }, void 0, false, {
            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/LeftArrow.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/LeftArrow.tsx",
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
"[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/Price.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Price",
    ()=>Price
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Price = ({ amount, className, currencyCode = "USD", ...rest })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: className,
        suppressHydrationWarning: true,
        ...rest,
        children: `${new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: currencyCode,
            currencyDisplay: "narrowSymbol"
        }).format(parseFloat(amount))}`
    }, void 0, false, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/Price.tsx",
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
"[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/Label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$icons$2f$LeftArrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/LeftArrow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$theme$2f$ui$2f$Price$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/Price.tsx [app-client] (ecmascript)");
;
;
;
;
const Label = ({ title, amount, currencyCode, page, position = "bottom" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("absolute w-fit px-4 ", {
            "bottom-0  pb-4": position === "center",
            "bottom-0 pb-5 md:pb-4": position === "bottom",
            "bottom-0 left-0  pb-4": position === "left"
        }),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex gap-5 items-center rounded-full px-[3.5rem] py-2 border border-neutral-200 bg-white/70 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white ${page === "category" ? "md:py-2  md:px-4 lg:px-6 lg:py-4" : "md:py-5 md:px-6 "}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: ` line-clamp-2 font-semibold leading-none tracking-tight ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(page === "category" ? "text-sm md:text-xl lg:text-2xl" : "text-sm ")}`,
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/Label.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                page === "category" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    "aria-label": "Go back",
                    className: "cursor-pointer rounded-full bg-blue-600 p-2 sm:p-3 transition-transform duration-300 hover:translate-x-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$icons$2f$LeftArrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeftArrow"], {}, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/Label.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/Label.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$theme$2f$ui$2f$Price$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Price"], {
                    amount: amount,
                    className: "flex-none rounded-full bg-blue-600 p-2 text-sm text-white",
                    currencyCode: currencyCode
                }, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/Label.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/Label.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/Label.tsx",
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
"[project]/Desktop/iwah/Iwah_deals/src/components/common/Shimmer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/common/Shimmer.tsx
__turbopack_context__.s([
    "Shimmer",
    ()=>Shimmer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `
          absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite]
          bg-gradient-to-r from-transparent via-white/30 to-transparent
        `
        }, void 0, false, {
            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/Shimmer.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/Shimmer.tsx",
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
"[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/grid/Tile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GridTileImage",
    ()=>GridTileImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$theme$2f$ui$2f$Label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/Label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$Shimmer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/common/Shimmer.tsx [app-client] (ecmascript)");
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
    const [imgSrc, setImgSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(src);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasError, setHasError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const loadDone = ()=>{
        setTimeout(()=>{
            if (!src) {
                setImgSrc(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOT_IMAGE"]);
            }
        }, 500);
        setIsLoaded(true);
    };
    const handleError = ()=>{
        setHasError(true);
        setImgSrc(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOT_IMAGE"]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("group relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg dark:bg-black", active ? "border-2 border-blue-600" : "border-2 border-transparent", {
            relative: label
        }),
        children: [
            !isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$Shimmer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shimmer"], {
                className: "absolute inset-0 z-0",
                width: "100%",
                height: "100%",
                rounded: "lg"
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/grid/Tile.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this),
            imgSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: imgSrc,
                alt: alt ?? "",
                placeholder: "blur",
                blurDataURL: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOT_IMAGE"],
                onError: handleError,
                onLoad: loadDone,
                ...props,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("duration-700 truncate h-full transition group-hover:scale-105 w-full object-cover ease-in-out", hasError ? "bg-contain!" : "", isLoaded ? "opacity-100" : "opacity-0", className)
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/grid/Tile.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full w-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/grid/Tile.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this),
            label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$theme$2f$ui$2f$Label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                amount: label.amount,
                currencyCode: label.currencyCode,
                page: label.page,
                position: label.position,
                title: label.title
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/grid/Tile.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/grid/Tile.tsx",
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
"[project]/Desktop/iwah/Iwah_deals/src/components/common/slider/HeroCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js [app-client] (ecmascript) <export default as ArrowLeftIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js [app-client] (ecmascript) <export default as ArrowRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$theme$2f$ui$2f$grid$2f$Tile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/grid/Tile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$Shimmer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/common/Shimmer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function HeroCarousel({ images }) {
    _s();
    const [current, setCurrent] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const prevSlide = ()=>{
        setIsLoading(true);
        setCurrent((prev)=>prev === 0 ? images.length - 1 : prev - 1);
    };
    const nextSlide = ()=>{
        setIsLoading(true);
        setCurrent((prev)=>prev === images.length - 1 ? 0 : prev + 1);
    };
    const buttonClassName = "flex h-full cursor-pointer items-center justify-center px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "group relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: 0.6,
                            ease: "easeInOut"
                        },
                        className: "group relative h-full max-h-[738px] w-full overflow-hidden rounded-2xl",
                        style: {
                            aspectRatio: "380/316"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-full w-full",
                            children: [
                                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$Shimmer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shimmer"], {
                                    className: "absolute inset-0 z-10 h-full w-full",
                                    rounded: "lg"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/slider/HeroCarousel.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fill: true,
                                    alt: images[current]?.altText,
                                    className: `h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-105 ${isLoading ? 'opacity-0' : 'opacity-100'}`,
                                    priority: true,
                                    sizes: "(min-width: 1024px) 66vw, 100vw",
                                    src: images[current]?.src,
                                    onLoadingComplete: ()=>setIsLoading(false),
                                    onError: ()=>setIsLoading(false)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/slider/HeroCarousel.tsx",
                                    lineNumber: 52,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/slider/HeroCarousel.tsx",
                            lineNumber: 45,
                            columnNumber: 9
                        }, this)
                    }, current, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/slider/HeroCarousel.tsx",
                        lineNumber: 34,
                        columnNumber: 8
                    }, this),
                    images?.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[5%] flex w-full justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto flex h-11 items-center rounded-full border border-gray-500/70 bg-gray-500/70 text-white/80 backdrop-blur transition-all duration-300 dark:border-black dark:bg-neutral-900/80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "aria-label": "Previous image",
                                    className: buttonClassName,
                                    onClick: prevSlide,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftIcon$3e$__["ArrowLeftIcon"], {
                                        className: "h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/slider/HeroCarousel.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/slider/HeroCarousel.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-1 h-6 w-px bg-white/80"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/slider/HeroCarousel.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "aria-label": "Next image",
                                    className: buttonClassName,
                                    onClick: nextSlide,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
                                        className: "h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/slider/HeroCarousel.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/slider/HeroCarousel.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/slider/HeroCarousel.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/slider/HeroCarousel.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/slider/HeroCarousel.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            images?.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "fade-in my-3 flex flex-nowrap gap-2 overflow-x-auto overflow-y-hidden py-1 sm:my-7 lg:mb-0",
                children: images.map((image, index)=>{
                    const isActive = index === current;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "relative aspect-square w-16 md:w-32 flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "h-full w-full",
                            onClick: ()=>{
                                setCurrent(index);
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$theme$2f$ui$2f$grid$2f$Tile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridTileImage"], {
                                active: isActive,
                                alt: image.altText,
                                fill: true,
                                objectFit: "cover",
                                src: image.src
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/slider/HeroCarousel.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/slider/HeroCarousel.tsx",
                            lineNumber: 100,
                            columnNumber: 9
                        }, this)
                    }, image.src, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/slider/HeroCarousel.tsx",
                        lineNumber: 96,
                        columnNumber: 7
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/slider/HeroCarousel.tsx",
                lineNumber: 91,
                columnNumber: 6
            }, this) : null
        ]
    }, void 0, true);
}
_s(HeroCarousel, "PHgEoKTtCAAH1X82iZLMCUFAT1Q=");
_c = HeroCarousel;
var _c;
__turbopack_context__.k.register(_c, "HeroCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/ShoppingCartIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BasketCartIcon",
    ()=>BasketCartIcon,
    "default",
    ()=>ShoppingCartIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
function ShoppingCartIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("fill-ptimary h-5 w-5 dark:fill-transparent", props.className),
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/ShoppingCartIcon.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/ShoppingCartIcon.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = ShoppingCartIcon;
function BasketCartIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("fill-ptimary h-48 w-48 dark:fill-transparent", props.className),
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/ShoppingCartIcon.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/ShoppingCartIcon.tsx",
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
"[project]/Desktop/iwah/Iwah_deals/src/utils/hooks/useGuestCartToken.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGuestCartToken",
    ()=>useGuestCartToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$fetch$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/fetch-handler.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$jwt$2d$cookie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/jwt-cookie.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/getCartToken.ts [app-client] (ecmascript)");
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
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cartId, setCartId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isResettingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const createGuestToken = async ()=>{
        if (tokenPromise) return tokenPromise;
        tokenPromise = (async ()=>{
            if (tokenCreated) {
                // Return existing raw token from cookie
                const cookieVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNativeCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_CART_TOKEN"]);
                if (cookieVal) {
                    const isGuest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNativeCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_GUEST"]) !== "false";
                    const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$jwt$2d$cookie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeJWT"])(cookieVal, isGuest);
                    return decoded?.sessionToken ?? null;
                }
                return null;
            }
            tokenCreated = true;
            try {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$fetch$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchHandler"])({
                    url: "cart/createGuestToken",
                    method: "POST",
                    contentType: true
                });
                const cart = res?.data?.createCartToken?.cartToken;
                if (!cart) {
                    tokenCreated = false;
                    return null;
                }
                const newToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$jwt$2d$cookie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeJWT"])({
                    sessionToken: cart.sessionToken,
                    cartId: cart.id,
                    isGuest: cart.isGuest
                });
                const newCartId = Number(cart.id);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_CART_TOKEN"], newToken);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_CART_ID"], String(newCartId));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_GUEST"], String(cart?.isGuest));
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_CART_TOKEN"]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_CART_ID"]);
        await createGuestToken();
        isResettingRef.current = false;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGuestCartToken.useEffect": ()=>{
            const cookieToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNativeCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_CART_TOKEN"]);
            if (cookieToken) {
                const isGuest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNativeCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_GUEST"]) !== "false";
                const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$jwt$2d$cookie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeJWT"])(cookieToken, isGuest);
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
        deleteCookie: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCookie"]
    };
};
_s(useGuestCartToken, "VLKxyatSxPGZYiv3gLoWXmTl/cY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/utils/hooks/useAddToCart.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAddProduct",
    ()=>useAddProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/hooks/useToast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$fetch$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/fetch-handler.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$store$2f$slices$2f$cart$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/store/slices/cart-slice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$type$2d$guards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/type-guards.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/getCartToken.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useGuestCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/hooks/useGuestCartToken.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/constants.ts [app-client] (ecmascript)");
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
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { createGuestToken, resetGuestToken } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useGuestCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGuestCartToken"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomToast"])();
    const { mutateAsync, isPending: isCartLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useAddProduct.useMutation": ({ token, ...input })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$fetch$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchHandler"])({
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
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$store$2f$slices$2f$cart$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addItem"])(responseData));
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
        let token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCartToken"])();
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
    const { mutateAsync: removeFromCart, isPending: isRemoveLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useAddProduct.useMutation": ({ token, ...input })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$fetch$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchHandler"])({
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
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$type$2d$guards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(responseData)) {
                    const message = responseData?.message || "Cart item removed successfully";
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$store$2f$slices$2f$cart$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addItem"])(responseData?.removeCartItem));
                    showToast(message, "warning");
                    if (!responseData?.removeCartItem?.itemsQty) {
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$store$2f$slices$2f$cart$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCart"])());
                        const isGuest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_GUEST"]);
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
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCartToken"])();
        await removeFromCart({
            token: token || "",
            cartItemId: parseInt(productId)
        });
    };
    //---------Update Cart Product Quantity--------//
    const { mutateAsync: updateCartItem, isPending: isUpdateLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useAddProduct.useMutation": ({ token, ...input })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$fetch$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchHandler"])({
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
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$type$2d$guards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(responseData)) {
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$store$2f$slices$2f$cart$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addItem"])(responseData));
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
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCartToken"])();
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
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useGuestCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGuestCartToken"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/AddToCartButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddToCartButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$icons$2f$ShoppingCartIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/ShoppingCartIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useAddToCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/hooks/useAddToCart.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$icons$2f$LoadingDots$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/LoadingDots.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/hooks/useToast.ts [app-client] (ecmascript)");
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
    const { isCartLoading, onAddToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useAddToCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAddProduct"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomToast"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
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
    return productType !== "simple" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        "aria-disabled": "true",
        "aria-label": productUrlKey,
        rel: "prefetch",
        prefetch: true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(buttonClasses, {
            "hover:opacity-90": true
        }),
        href: `/product/${productUrlKey}`,
        type: "submit",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$icons$2f$ShoppingCartIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "size-6 -rotate-6 stroke-black stroke-[1.5]"
        }, void 0, false, {
            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/AddToCartButton.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/AddToCartButton.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        "aria-disabled": isCartLoading || !isSaleable || isSaleable === "",
        "aria-label": productUrlKey,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(buttonClasses, {
            "hover:opacity-90": isSaleable && isSaleable !== "",
            [disabledClasses]: isCartLoading || !isSaleable || isSaleable === ""
        }),
        type: "button",
        onClick: handleAddToCart,
        children: isCartLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$icons$2f$LoadingDots$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "bg-black"
        }, void 0, false, {
            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/AddToCartButton.tsx",
            lineNumber: 70,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$icons$2f$ShoppingCartIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "size-6 -rotate-6 stroke-black stroke-[1.5]"
        }, void 0, false, {
            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/AddToCartButton.tsx",
            lineNumber: 72,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/AddToCartButton.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(AddToCartButton, "1zKw8lzoHpl8THE7ttKWC+65sEw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useAddToCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAddProduct"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = AddToCartButton;
var _c;
__turbopack_context__.k.register(_c, "AddToCartButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/components/common/NextImage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NextImage",
    ()=>NextImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$Shimmer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/common/Shimmer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function NextImage({ src, alt, className = "", width, height, sizes = "100vw", priority = false }) {
    _s();
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasError, setHasError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const finalSrc = hasError || !src ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOT_IMAGE"] : src;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative overflow-hidden ${className}`,
        style: {
            width: "100%",
            height: "100%"
        },
        children: [
            !isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$Shimmer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shimmer"], {
                className: "absolute inset-0 z-0",
                width: "100%",
                height: "100%",
                rounded: "lg"
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/NextImage.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/NextImage.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/NextImage.tsx",
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
"[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/StarIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const StarIcon = ({ className = "fill-yellow-300" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: ` ${className}`,
        width: "21",
        height: "20",
        viewBox: "0 0 21 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M9.09131 0.604473C9.43839 -0.20149 10.5811 -0.201491 10.9282 0.604472L13.0195 5.46059C13.1643 5.79677 13.4811 6.02699 13.8456 6.06079L19.1103 6.54908C19.984 6.63012 20.3372 7.71693 19.6779 8.29608L15.7057 11.7856C15.4307 12.0272 15.3097 12.3997 15.3902 12.7568L16.5526 17.9147C16.7456 18.7707 15.8211 19.4424 15.0665 18.9944L10.5203 16.2949C10.2056 16.108 9.81393 16.108 9.49921 16.2949L4.95298 18.9944C4.19845 19.4424 3.27396 18.7707 3.46689 17.9147L4.62938 12.7568C4.70986 12.3997 4.58882 12.0272 4.31384 11.7856L0.34163 8.29608C-0.317633 7.71693 0.0354931 6.63012 0.909265 6.54908L6.17394 6.06079C6.5384 6.02699 6.85528 5.79677 7.00005 5.46059L9.09131 0.604473Z"
        }, void 0, false, {
            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/StarIcon.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/StarIcon.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = StarIcon;
const __TURBOPACK__default__export__ = StarIcon;
var _c;
__turbopack_context__.k.register(_c, "StarIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/components/common/Rating.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Rating",
    ()=>Rating
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$icons$2f$StarIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/StarIcon.tsx [app-client] (ecmascript)");
;
;
;
const Rating = ({ length = 5, star = 0, size = "size-4", className, reviewCount, onReviewClick })=>{
    const rating = star ?? 0;
    const reviewCountToShow = reviewCount ?? star > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex items-center gap-x-2", className),
        children: reviewCountToShow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-x-0.5",
                    children: Array.from({
                        length
                    }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$icons$2f$StarIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(size, index < rating ? "fill-yellow-500 dark:fill-yellow-500" : "fill-black dark:fill-gray-900", "fill-black dark:stroke-white")
                        }, index, false, {
                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/Rating.tsx",
                            lineNumber: 22,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/Rating.tsx",
                    lineNumber: 20,
                    columnNumber: 3
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-gray-600 dark:text-gray-400",
                    children: [
                        "(",
                        reviewCountToShow,
                        " ",
                        reviewCountToShow === 1 ? 'Review' : 'Reviews',
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/Rating.tsx",
                    lineNumber: 34,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-blue-600 underline cursor-pointer",
            onClick: onReviewClick,
            children: "Write a review"
        }, void 0, false, {
            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/Rating.tsx",
            lineNumber: 39,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/Rating.tsx",
        lineNumber: 17,
        columnNumber: 4
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Rating;
var _c;
__turbopack_context__.k.register(_c, "Rating");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/utils/hooks/useVariantInfo.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVariantInfo",
    ()=>getVariantInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/helper.ts [app-client] (ecmascript)");
;
const getVariantInfo = (isConfigurable, params, superAttributes, index)=>{
    if (!isConfigurable) {
        return {
            Instock: false,
            productid: "",
            possibleOptions: {},
            variantAttributes: superAttributes
        };
    }
    const searchParams = new URLSearchParams(params);
    const indexData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParse"])(index) || {};
    const selectedAttributes = {};
    for (const attr of superAttributes){
        const value = searchParams.get(attr.code);
        if (value) {
            selectedAttributes[attr.code] = Number(value);
        }
    }
    const possibleOptions = {};
    for (const attr of superAttributes){
        const otherSelectedAttributes = {
            ...selectedAttributes
        };
        delete otherSelectedAttributes[attr.code];
        const compatibleVariants = Object.entries(indexData).filter(([_, attributes])=>Object.entries(otherSelectedAttributes).every(([code, value])=>attributes[code] === value));
        possibleOptions[attr.code] = [];
        for (const [, attributes] of compatibleVariants){
            const val = attributes[attr.code];
            if (val !== undefined && !possibleOptions[attr.code].includes(val)) {
                possibleOptions[attr.code].push(val);
            }
        }
    }
    const variantAttributes = superAttributes.map((attr)=>{
        const rawOptions = Array.isArray(attr.options) ? attr.options : attr.options?.edges?.map((edge)=>edge.node) || [];
        return {
            ...attr,
            options: rawOptions.map((option)=>({
                    ...option,
                    isValid: (()=>{
                        const otherSelectedAttributes = {
                            ...selectedAttributes
                        };
                        delete otherSelectedAttributes[attr.code];
                        const hasOtherSelections = Object.keys(otherSelectedAttributes).length > 0;
                        return !hasOtherSelections || possibleOptions[attr.code].includes(Number(option.id));
                    })()
                }))
        };
    });
    const allSelected = superAttributes.every((attr)=>selectedAttributes[attr.code] !== undefined);
    const matchingVariants = Object.entries(indexData).filter(([_, attributes])=>Object.entries(selectedAttributes).every(([code, value])=>attributes[code] === value));
    if (allSelected && matchingVariants.length > 0) {
        return {
            productid: matchingVariants[0][0],
            Instock: true,
            possibleOptions,
            variantAttributes
        };
    }
    return {
        productid: "",
        Instock: matchingVariants.length > 0,
        possibleOptions,
        variantAttributes
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/components/cart/AddToCart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddToCart",
    ()=>AddToCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MinusIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/@heroicons/react/24/outline/esm/MinusIcon.js [app-client] (ecmascript) <export default as MinusIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PlusIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/@heroicons/react/24/outline/esm/PlusIcon.js [app-client] (ecmascript) <export default as PlusIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useAddToCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/hooks/useAddToCart.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$icons$2f$LoadingDots$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/LoadingDots.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useVariantInfo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/hooks/useVariantInfo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/helper.ts [app-client] (ecmascript)");
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
;
function SubmitButton({ selectedVariantId, pending, type, isSaleable }) {
    const buttonClasses = "relative flex w-full max-w-[16rem] cursor-pointer h-fit items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white";
    const disabledClasses = "cursor-wait opacity-60";
    if (!isSaleable || isSaleable === "") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            "aria-disabled": true,
            "aria-label": "Out of stock",
            type: "button",
            disabled: true,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(buttonClasses, " opacity-60 !cursor-not-allowed"),
            children: "Out of Stock"
        }, void 0, false, {
            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/cart/AddToCart.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    }
    if (!selectedVariantId && type === "configurable") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            "aria-disabled": true,
            "aria-label": "Please select an option",
            type: "button",
            disabled: !selectedVariantId,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(buttonClasses, " opacity-60 !cursor-not-allowed"),
            children: "Add To Cart"
        }, void 0, false, {
            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/cart/AddToCart.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        "aria-disabled": pending,
        "aria-label": "Add to cart",
        type: "submit",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(buttonClasses, {
            "hover:opacity-90": true,
            [disabledClasses]: pending
        }),
        onClick: (e)=>{
            if (pending) e.preventDefault();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 ml-4",
                children: pending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$icons$2f$LoadingDots$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "mb-3 bg-white"
                }, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/cart/AddToCart.tsx",
                    lineNumber: 70,
                    columnNumber: 20
                }, this) : ""
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/cart/AddToCart.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            "Add To Cart"
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/cart/AddToCart.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c = SubmitButton;
function AddToCart({ productSwatchReview, index, productId, userInteracted }) {
    _s();
    const isSaleable = productSwatchReview?.isSaleable || "";
    const { onAddToCart, isCartLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useAddToCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAddProduct"])();
    const { handleSubmit, setValue, control, register } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            quantity: 1,
            isBuyNow: false
        }
    });
    const quantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "quantity"
    });
    const increment = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setValue("quantity", Number(quantity) + 1);
    };
    const decrement = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setValue("quantity", Math.max(1, Number(quantity) - 1));
    };
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const type = productSwatchReview?.type;
    const superAttributes = productSwatchReview?.superAttributeOptions ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParse"])(productSwatchReview.superAttributeOptions) : productSwatchReview?.superAttributes?.edges?.map((e)=>e.node) || [];
    const isConfigurable = superAttributes.length > 0;
    const { productid: selectedVariantId, Instock: checkStock } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useVariantInfo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVariantInfo"])(isConfigurable, searchParams.toString(), superAttributes, JSON.stringify(index));
    const buttonStatus = !!selectedVariantId;
    const actionWithVariant = async (data)=>{
        const pid = type === "configurable" ? String(selectedVariantId) : String(productId).split("/").pop() ?? "";
        onAddToCart({
            productId: pid,
            quantity: data.quantity
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !checkStock && type === "configurable" && userInteracted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gap-1 px-2 py-1 my-2 font-bold",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "NO STOCK AVAILABLE"
                }, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/cart/AddToCart.tsx",
                    lineNumber: 148,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/cart/AddToCart.tsx",
                lineNumber: 147,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "flex gap-x-4",
                onSubmit: handleSubmit(actionWithVariant),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center rounded-full border-2 border-blue-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "aria-label": "Decrease quantity",
                                    role: "button",
                                    className: "flex h-12 w-12 cursor-pointer items-center justify-center rounded-l-full text-gray-600 transition-colors hover:text-gray-800 dark:text-white hover:dark:text-white/[80%]",
                                    onClick: decrement,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MinusIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusIcon$3e$__["MinusIcon"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/cart/AddToCart.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/cart/AddToCart.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "hidden",
                                    ...register("quantity", {
                                        valueAsNumber: true
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/cart/AddToCart.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-12 min-w-[3rem] items-center justify-center px-4 font-medium text-gray-800 dark:text-white",
                                    children: quantity
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/cart/AddToCart.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "aria-label": "Increase quantity",
                                    role: "button",
                                    className: "flex h-12 w-12 cursor-pointer items-center justify-center rounded-r-full text-gray-600 transition-colors hover:text-gray-800 dark:text-white hover:dark:text-white/[80%]",
                                    onClick: increment,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PlusIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__["PlusIcon"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/cart/AddToCart.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/cart/AddToCart.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/cart/AddToCart.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/cart/AddToCart.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubmitButton, {
                        pending: isCartLoading,
                        selectedVariantId: buttonStatus,
                        type: type || "",
                        isSaleable: isSaleable
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/cart/AddToCart.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/cart/AddToCart.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AddToCart, "Fw3sJ5uQsRfWuJbA2iQbTtCPr4s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useAddToCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAddProduct"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c1 = AddToCart;
var _c, _c1;
__turbopack_context__.k.register(_c, "SubmitButton");
__turbopack_context__.k.register(_c1, "AddToCart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/VariantSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VariantSelector",
    ()=>VariantSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/helper.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function VariantSelector({ variants, setUserInteracted }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    if (!variants?.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: variants.map((option)=>{
            const attributeCode = option.code;
            const _isAlreadySelected = searchParams.has(attributeCode);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                        className: "mb-4 text-sm capitalize tracking-wide",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValidTitle"])(attributeCode)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/VariantSelector.tsx",
                        lineNumber: 28,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                        className: "flex flex-wrap gap-3",
                        children: option.options.map((node)=>{
                            const isActive = searchParams.get(attributeCode) === String(node.id);
                            const isAvailable = node?.isValid;
                            const nextParams = new URLSearchParams(searchParams.toString());
                            nextParams.set(attributeCode, String(node.id));
                            const optionUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUrl"])(pathname, nextParams);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: !isAvailable,
                                onClick: ()=>{
                                    if (!isAvailable) return;
                                    router.replace(optionUrl, {
                                        scroll: false
                                    });
                                    setUserInteracted(true);
                                },
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex min-w-[48px] cursor-pointer items-center justify-center rounded-lg bg-neutral-100 px-3.5 py-2.5 text-sm dark:border-neutral-800 dark:bg-neutral-800", {
                                    "cursor-default ring-2 ring-blue-600 text-blue-600": isActive,
                                    "ring-[0] transition duration-300 ease-in-out hover:scale-110 hover:border-blue-600": !isActive && isAvailable,
                                    "relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700": !isAvailable
                                }),
                                children: node.label || node.adminName
                            }, node.id, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/VariantSelector.tsx",
                                lineNumber: 42,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/VariantSelector.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this)
                ]
            }, option.id, true, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/VariantSelector.tsx",
                lineNumber: 27,
                columnNumber: 11
            }, this);
        })
    }, void 0, false);
}
_s(VariantSelector, "66hrdMMH0WyruZN7frcpeuU7V/k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = VariantSelector;
var _c;
__turbopack_context__.k.register(_c, "VariantSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/components/theme/search/Prose.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
const Prose = ({ html, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        dangerouslySetInnerHTML: {
            __html: html
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("prose mx-auto max-w-6xl lg:px-0 text-base leading-7 prose-headings:mt-8 prose-headings:font-semibold prose-headings:tracking-wide prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-black prose-a:break-all prose-a:underline hover:prose-a:text-neutral-300 prose-strong:text-black prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6 ", className)
    }, void 0, false, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/theme/search/Prose.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Prose;
const __TURBOPACK__default__export__ = Prose;
var _c;
__turbopack_context__.k.register(_c, "Prose");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddRatingStar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddRatingStar",
    ()=>AddRatingStar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StarIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/@heroicons/react/24/solid/esm/StarIcon.js [app-client] (ecmascript) <export default as StarIcon>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const AddRatingStar = ({ length = 5, value, size = "size-6", className, onChange })=>{
    _s();
    const [internalValue, setInternalValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value ?? 0);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddRatingStar.useEffect": ()=>{
            if (value !== undefined) {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setInternalValue(value);
            }
        }
    }["AddRatingStar.useEffect"], [
        value
    ]);
    const currentValue = value ?? internalValue;
    const getFillState = (index)=>{
        if (hovered !== null) return index <= hovered;
        return index <= currentValue;
    };
    const handleClick = (index)=>{
        if (value === undefined) {
            setInternalValue(index);
        }
        onChange?.(index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex items-center gap-x-1 cursor-pointer", className),
        children: Array.from({
            length
        }).map((_, i)=>{
            const index = i + 1;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StarIcon$3e$__["StarIcon"], {
                onClick: ()=>handleClick(index),
                onMouseEnter: ()=>setHovered(index),
                onMouseLeave: ()=>setHovered(null),
                fill: "currentColor",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("fill-current", size || "size-6", getFillState(index) ? "text-yellow-500" : "text-gray-300", "transition-colors")
            }, index, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddRatingStar.tsx",
                lineNumber: 48,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddRatingStar.tsx",
        lineNumber: 44,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AddRatingStar, "1b2aPjUETU0ymMMrFb+PzY8DAjw=");
_c = AddRatingStar;
var _c;
__turbopack_context__.k.register(_c, "AddRatingStar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/components/common/button/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$icons$2f$LoadingDots$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/LoadingDots.tsx [app-client] (ecmascript)");
;
;
;
function Button({ className = "", title, loading = false, disabled = false, type, ...rest }) {
    const buttonClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("relative flex w-full text-lg cursor-pointer font-outfit font-semibold items-center justify-center bg-blue-600 p-3 tracking-wide text-white", "hover:opacity-90", "rounded-[100px] md:rounded-xl", {
        "opacity-50 cursor-wait ": loading || disabled
    }, className);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        "aria-disabled": loading || disabled,
        "aria-label": title,
        className: buttonClasses,
        disabled: loading || disabled,
        type: type ?? "reset",
        ...rest,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-2 flex items-center justify-center gap-2",
            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$icons$2f$LoadingDots$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "bg-white"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/button/Button.tsx",
                        lineNumber: 43,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "loading"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/button/Button.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/button/Button.tsx",
                lineNumber: 47,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/button/Button.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/button/Button.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/utils/hooks/useProductReview.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProductReview",
    ()=>useProductReview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$fetch$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/fetch-handler.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/hooks/useToast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$type$2d$guards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/type-guards.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useProductReview() {
    _s();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomToast"])();
    const { mutateAsync: createProductReview, isPending: isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useProductReview.useMutation": ({ token, ...input })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$fetch$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchHandler"])({
                    url: "review",
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
        }["useProductReview.useMutation"],
        onSuccess: {
            "useProductReview.useMutation": (response)=>{
                const responseData = response?.data?.createProductReview?.productReview;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$type$2d$guards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(responseData)) {
                    showToast("Product review created successfully", "success");
                }
            }
        }["useProductReview.useMutation"],
        onError: {
            "useProductReview.useMutation": (error)=>{
                console.error("Product review creation error:", error);
            }
        }["useProductReview.useMutation"]
    });
    return {
        createProductReview,
        isLoading
    };
}
_s(useProductReview, "iLMDEUOC9C6v+m6gVvYd3/I6qQ4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddProductReview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$WEIB4WXA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__textarea_default__as__Textarea$3e$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/@heroui/input/dist/chunk-WEIB4WXA.mjs [app-client] (ecmascript) <export textarea_default as Textarea>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$catalog$2f$review$2f$AddRatingStar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddRatingStar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/common/button/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/hooks/useToast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useProductReview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/hooks/useProductReview.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/image.js [app-client] (ecmascript)");
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
function AddProductReview({ productId, onClose }) {
    _s();
    const [imageFile, setImageFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [imagePreview, setImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [reviewInfo, setReviewInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        comment: "",
        rating: 0,
        attachments: null
    });
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomToast"])();
    const { createProductReview, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useProductReview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductReview"])();
    const handleImageUpload = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file.name);
            setReviewInfo((prev)=>({
                    ...prev,
                    attachments: file.name
                }));
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const input = {
                productId: Number(productId.split("/").pop()),
                title: reviewInfo.title,
                comment: reviewInfo.comment,
                rating: reviewInfo.rating,
                name: "Guest User",
                email: "guest@mail.com"
            };
            if (imageFile) input.attachments = "";
            const fieldInputs = {
                input: {
                    ...input
                }
            };
            await createProductReview(fieldInputs);
            setReviewInfo({
                title: "",
                comment: "",
                rating: 0,
                attachments: null
            });
            setImageFile(null);
            setImagePreview(null);
        } catch (error) {
            console.error("Error submitting review:", error);
            showToast("Failed to submit review. Please try again.", "danger");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "w-full max-w-4xl mx-auto p-4 md:p-6 rounded-xl relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onClose,
                className: "absolute -top-7 -right-[9px] text-gray-500 hover:text-gray-700 transition-colors",
                "aria-label": "Close review form",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            imagePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-2 border-dashed border-gray-300  rounded-xl p-6 text-center transition-colors hover:border-primary-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: imagePreview,
                                                alt: "Preview",
                                                className: "w-full h-64 object-cover rounded-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                                lineNumber: 109,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setImageFile(null);
                                                    setImagePreview(null);
                                                },
                                                className: "absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-4 w-4",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M6 18L18 6M6 6l12 12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                                lineNumber: 114,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                        lineNumber: 108,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-2 border-dashed border-gray-300  rounded-xl p-6 text-center transition-colors hover:border-primary-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "file-upload",
                                        className: "mx-auto flex cursor-pointer flex-col items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "h-8 w-8 text-gray-400",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                                lineNumber: 147,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-primary-600",
                                                        children: "Upload an image"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs",
                                                        children: "or drag and drop"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                                lineNumber: 163,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "file-upload",
                                                name: "file-upload",
                                                type: "file",
                                                className: "sr-only",
                                                accept: "image/*",
                                                onChange: handleImageUpload
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                                lineNumber: 170,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                        lineNumber: 143,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                    lineNumber: 142,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                lineNumber: 141,
                                columnNumber: 15
                            }, this),
                            imageFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-center",
                                children: imageFile
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium  mb-1",
                                        children: "Your Rating"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$catalog$2f$review$2f$AddRatingStar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddRatingStar"], {
                                        value: reviewInfo.rating,
                                        onChange: (value)=>setReviewInfo((prev)=>({
                                                    ...prev,
                                                    rating: value
                                                })),
                                        size: "size-7",
                                        className: "mt-1"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$WEIB4WXA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__textarea_default__as__Textarea$3e$__["Textarea"], {
                                label: "Title",
                                placeholder: "Enter review title",
                                labelPlacement: "outside",
                                value: reviewInfo.title,
                                onChange: (e)=>setReviewInfo((prev)=>({
                                            ...prev,
                                            title: e.target.value
                                        })),
                                minRows: 1,
                                maxRows: 1,
                                variant: "bordered",
                                classNames: {
                                    input: "text-base",
                                    label: "text-sm font-medium"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$WEIB4WXA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__textarea_default__as__Textarea$3e$__["Textarea"], {
                                label: "Description",
                                placeholder: "Write your detailed review",
                                labelPlacement: "outside",
                                value: reviewInfo.comment,
                                onChange: (e)=>setReviewInfo((prev)=>({
                                            ...prev,
                                            comment: e.target.value
                                        })),
                                minRows: 5,
                                variant: "bordered",
                                classNames: {
                                    input: "text-base",
                                    label: "text-sm font-medium"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                title: isLoading ? "Submitting..." : "Submit Review",
                                type: "submit",
                                disabled: isLoading,
                                className: "w-full mt-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(AddProductReview, "tnPXDeDoIohMS+XvduP/NTWzEoU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useProductReview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductReview"]
    ];
});
_c = AddProductReview;
var _c;
__turbopack_context__.k.register(_c, "AddProductReview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/NoReviewsIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NoReviewIcon",
    ()=>NoReviewIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const NoReviewIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "232",
        height: "220",
        viewBox: "0 0 232 220",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
            fill: "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "12.8438",
                y: "50",
                width: "103.157",
                height: "30.7548",
                rx: "7.04797",
                fill: "#CED4DF"
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/NoReviewsIcon.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 63.125C9 58.1544 13.0294 54.125 18 54.125H103.157C108.127 54.125 112.157 58.1544 112.157 63.125V75.8798C112.157 80.8503 108.127 84.8798 103.157 84.8798H19C13.4772 84.8798 9 80.4026 9 74.8798V63.125Z",
                fill: "#BBC3D1"
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/NoReviewsIcon.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "12.8438",
                y: "50",
                width: "103.157",
                height: "30.7548",
                rx: "7.04797",
                fill: "#CED4DF"
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/NoReviewsIcon.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M30.2083 56.2897C30.4433 55.8135 31.1224 55.8135 31.3574 56.2897L33.6466 60.9282C33.74 61.1173 33.9204 61.2483 34.1291 61.2787L39.2479 62.0225C39.7735 62.0988 39.9833 62.7447 39.603 63.1154L35.899 66.7259C35.748 66.8731 35.6791 67.0852 35.7147 67.293L36.5891 72.3912C36.6789 72.9146 36.1295 73.3138 35.6594 73.0667L31.081 70.6596C30.8943 70.5615 30.6713 70.5615 30.4847 70.6596L25.9062 73.0667C25.4362 73.3138 24.8868 72.9146 24.9766 72.3912L25.851 67.293C25.8866 67.0852 25.8177 66.8731 25.6667 66.7259L21.9627 63.1154C21.5824 62.7447 21.7922 62.0988 22.3178 62.0225L27.4366 61.2787C27.6453 61.2483 27.8257 61.1173 27.919 60.9282L30.2083 56.2897Z",
                fill: "#F3F4F6"
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/NoReviewsIcon.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M52.636 56.2897C52.871 55.8135 53.5501 55.8135 53.7851 56.2897L56.0744 60.9282C56.1677 61.1173 56.3481 61.2483 56.5568 61.2787L61.6757 62.0225C62.2012 62.0988 62.411 62.7447 62.0308 63.1154L58.3267 66.7259C58.1757 66.8731 58.1068 67.0852 58.1424 67.293L59.0168 72.3912C59.1066 72.9146 58.5572 73.3138 58.0872 73.0667L53.5087 70.6596C53.3221 70.5615 53.0991 70.5615 52.9124 70.6596L48.334 73.0667C47.8639 73.3138 47.3145 72.9146 47.4043 72.3912L48.2787 67.293C48.3144 67.0852 48.2454 66.8731 48.0944 66.7259L44.3904 63.1154C44.0101 62.7447 44.22 62.0988 44.7455 62.0225L49.8644 61.2787C50.073 61.2483 50.2535 61.1173 50.3468 60.9282L52.636 56.2897Z",
                fill: "#F3F4F6"
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/NoReviewsIcon.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M75.0598 56.2897C75.2949 55.8135 75.9739 55.8135 76.209 56.2897L78.4982 60.9282C78.5915 61.1173 78.7719 61.2483 78.9806 61.2787L84.0995 62.0225C84.625 62.0988 84.8349 62.7447 84.4546 63.1154L80.7505 66.7259C80.5995 66.8731 80.5306 67.0852 80.5663 67.293L81.4407 72.3912C81.5304 72.9146 80.9811 73.3138 80.511 73.0667L75.9326 70.6596C75.7459 70.5615 75.5229 70.5615 75.3362 70.6596L70.7578 73.0667C70.2877 73.3138 69.7384 72.9146 69.8281 72.3912L70.7025 67.293C70.7382 67.0852 70.6693 66.8731 70.5183 66.7259L66.8142 63.1154C66.4339 62.7447 66.6438 62.0988 67.1693 62.0225L72.2882 61.2787C72.4969 61.2483 72.6773 61.1173 72.7706 60.9282L75.0598 56.2897Z",
                fill: "#F3F4F6"
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/NoReviewsIcon.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M97.4856 56.2897C97.7206 55.8135 98.3997 55.8135 98.6347 56.2897L100.924 60.9282C101.017 61.1173 101.198 61.2483 101.406 61.2787L106.525 62.0225C107.051 62.0988 107.261 62.7447 106.88 63.1154L103.176 66.7259C103.025 66.8731 102.956 67.0852 102.992 67.293L103.866 72.3912C103.956 72.9146 103.407 73.3138 102.937 73.0667L98.3583 70.6596C98.1717 70.5615 97.9487 70.5615 97.762 70.6596L93.1836 73.0667C92.7135 73.3138 92.1641 72.9146 92.2539 72.3912L93.1283 67.293C93.164 67.0852 93.0951 66.8731 92.944 66.7259L89.24 63.1154C88.8597 62.7447 89.0696 62.0988 89.5951 62.0225L94.714 61.2787C94.9227 61.2483 95.1031 61.1173 95.1964 60.9282L97.4856 56.2897Z",
                fill: "#F3F4F6"
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/NoReviewsIcon.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M101.666 194.063C136.301 194.063 165.062 187.678 170.678 179.292C165.062 170.906 136.301 164.521 101.666 164.521C67.0307 164.521 38.2702 170.906 32.6535 179.292C38.2702 187.678 67.0307 194.063 101.666 194.063Z",
                fill: "#3A3D43"
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/NoReviewsIcon.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M101.666 158.521C63.0028 158.521 31.6602 166.478 31.6602 176.292C31.6602 177.315 32.0003 178.317 32.6535 179.292C38.2702 170.906 67.0307 164.521 101.666 164.521C136.301 164.521 165.062 170.906 170.678 179.292C171.332 178.317 171.672 177.315 171.672 176.292C171.672 166.478 140.329 158.521 101.666 158.521Z",
                fill: "#B7BDC8"
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/NoReviewsIcon.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                id: "mask0_4559_9582",
                style: {
                    maskType: "alpha"
                },
                maskUnits: "userSpaceOnUse",
                x: "5",
                y: "4",
                width: "213",
                height: "191",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M106.471 5.50098C115.8 5.50103 127.355 9.18213 139.551 14.998C151.711 20.7971 164.359 28.6447 175.826 36.8154C187.293 44.9856 197.544 53.4528 204.914 60.4707C208.602 63.9828 211.543 67.108 213.549 69.6328C214.553 70.8969 215.299 71.98 215.786 72.8633C216.16 73.5411 216.328 74.0096 216.393 74.2988L169.371 178.547C168.184 180.254 165.68 182.052 161.792 183.769C157.888 185.492 152.789 187.05 146.738 188.359C134.642 190.977 118.903 192.565 101.668 192.565C84.4326 192.565 68.6926 190.977 56.5967 188.359C50.5459 187.05 45.4469 185.492 41.543 183.769C37.6448 182.048 35.1372 180.246 33.9541 178.534C33.9423 178.507 33.9274 178.471 33.9092 178.427C33.8465 178.274 33.7582 178.051 33.6455 177.758C33.421 177.174 33.1088 176.34 32.7197 175.288C31.9419 173.185 30.8649 170.229 29.5898 166.702C27.04 159.65 23.701 150.327 20.3818 141.001C17.0626 131.675 13.764 122.348 11.2959 115.291C10.0617 111.762 9.03574 108.803 8.31934 106.696C7.96085 105.642 7.68178 104.807 7.49316 104.223C7.39844 103.929 7.33007 103.708 7.28613 103.559C7.28352 103.55 7.28066 103.541 7.27832 103.533C7.31443 103.171 7.4792 102.506 7.87598 101.481C8.31239 100.355 8.97124 98.9402 9.84277 97.2695C11.5842 93.9315 14.1297 89.6603 17.3232 84.7832C23.7081 75.0322 32.6327 62.9319 42.7607 51.1357C52.894 39.3336 64.1964 27.8784 75.335 19.3877C86.5287 10.855 97.3198 5.50098 106.471 5.50098Z",
                    fill: "#CED4DF",
                    stroke: "#9096A2",
                    strokeWidth: "3",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/NoReviewsIcon.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/NoReviewsIcon.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                mask: "url(#mask0_4559_9582)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M73.7422 194.262C74.6791 173.882 80.3946 128.859 95.7617 111.805C95.6056 105.636 97.4953 91.2372 106.303 82.9915C117.313 72.6844 120.358 66.5939 120.358 60.5033C120.358 57.249 120.812 48.751 120.66 40.5334C120.999 38.5085 122.758 34.729 127.081 35.8097C131.404 36.8904 140.254 41.7809 140.254 60.5033C140.254 67.8558 135.494 75.4199 137.203 79.0815C139.576 79.251 146.601 79.0205 155.715 76.7421C167.106 73.8942 179.922 74.8096 182.262 85.5911C183.046 89.206 181.12 92.6596 177.671 95.5869C181.557 97.8906 187.916 104.36 182.262 111.805C181.687 112.561 181.018 113.248 180.269 113.873C182.302 116.309 184.984 122.581 179.438 128.179C178.922 128.7 178.329 129.168 177.671 129.588C179.476 131.233 182.004 135.517 177.671 139.492C173.903 142.949 167.116 144.25 162.008 144.144C155.995 147.396 141.589 153.413 132.075 151.455C129.081 154.119 123.589 166.337 125.571 193.9L111.52 203.086L73.7422 194.262Z",
                        fill: "#CED4DF"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/NoReviewsIcon.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M160.309 84.7103C142.914 84.9029 135.002 100.197 146.124 103.478M177.671 95.5869C181.12 92.6596 183.046 89.206 182.262 85.5911C179.922 74.8096 167.106 73.8942 155.715 76.7421C146.601 79.0205 139.576 79.251 137.203 79.0815C135.494 75.4199 140.254 67.8558 140.254 60.5033C140.254 41.7809 131.404 36.8904 127.081 35.8097C122.758 34.729 120.999 38.5085 120.66 40.5334C120.812 48.751 120.358 57.249 120.358 60.5033C120.358 66.5939 117.313 72.6844 106.303 82.9915C97.4953 91.2372 95.6056 105.636 95.7617 111.805C80.3946 128.859 74.6791 173.882 73.7422 194.262L111.52 203.086L125.571 193.9C123.589 166.337 129.081 154.119 132.075 151.455C141.589 153.413 155.995 147.396 162.008 144.144M177.671 95.5869C170.833 101.39 158.008 105.125 148.44 103.946C147.592 103.842 146.82 103.683 146.124 103.478M177.671 95.5869C181.557 97.8906 187.916 104.36 182.262 111.805C181.687 112.561 181.018 113.248 180.269 113.873M146.124 103.478C140.007 110.722 143.773 115.998 147.934 118.04M180.269 113.873C171.795 120.942 153.211 119.964 149.051 118.509C148.68 118.379 148.306 118.222 147.934 118.04M180.269 113.873C182.302 116.309 184.984 122.581 179.438 128.179C178.922 128.7 178.329 129.168 177.671 129.588M147.934 118.04C144.548 120.923 145.23 125.587 148.44 129.151C148.887 129.646 149.674 130.12 150.717 130.55M177.671 129.588C179.476 131.233 182.004 135.517 177.671 139.492C173.903 142.949 167.116 144.25 162.008 144.144M177.671 129.588C170.726 134.02 156.621 132.985 150.717 130.55M150.717 130.55C146.997 137.542 152.724 141.548 156.665 143.261C157.863 143.782 159.775 144.097 162.008 144.144M134.552 92.185C136.418 100.741 133.604 119.955 122.156 129.151",
                        stroke: "#8996AD",
                        strokeWidth: "3",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/NoReviewsIcon.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/NoReviewsIcon.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                opacity: "0.3",
                cx: "55.273",
                cy: "31.2936",
                r: "4.73399",
                fill: "#BBC3D1"
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/NoReviewsIcon.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                opacity: "0.5",
                cx: "204.155",
                cy: "62.7636",
                r: "8.27578",
                fill: "#BBC3D1"
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/NoReviewsIcon.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.5",
                d: "M23.3791 106.465L24.843 113.382L31.6605 114.867L24.843 116.352L23.3791 123.268L21.9151 116.352L15.0977 114.867L21.9151 113.382L23.3791 106.465Z",
                fill: "#BBC3D1"
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/NoReviewsIcon.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.5",
                d: "M202.963 138.912L210.757 137.239L212.431 129.444L214.105 137.239L221.899 138.912L214.105 140.586L212.431 148.38L210.757 140.586L202.963 138.912Z",
                fill: "#BBC3D1"
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/NoReviewsIcon.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/NoReviewsIcon.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = NoReviewIcon;
var _c;
__turbopack_context__.k.register(_c, "NoReviewIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewButton",
    ()=>ReviewButton,
    "default",
    ()=>ReviewSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$catalog$2f$review$2f$AddProductReview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/AddProductReview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/common/button/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$icons$2f$NoReviewsIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/NoReviewsIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/getCartToken.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function ReviewSection({ productId }) {
    _s();
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (showForm) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-4xl mx-auto p-4 rounded-xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$catalog$2f$review$2f$AddProductReview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                productId: productId,
                onClose: ()=>setShowForm(false)
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewSection.tsx",
                lineNumber: 22,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewSection.tsx",
            lineNumber: 21,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl mx-auto p-4 rounded-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$icons$2f$NoReviewsIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoReviewIcon"], {}, void 0, false, {
                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewSection.tsx",
                            lineNumber: 31,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-outfit text-2xl font-semibold tracking-wide mt-4",
                            children: "Ratings"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewSection.tsx",
                            lineNumber: 32,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg mt-2",
                            children: "No reviews yet. Be the first to share your experience"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewSection.tsx",
                            lineNumber: 33,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewSection.tsx",
                    lineNumber: 30,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReviewButton, {
                    setShowForm: setShowForm
                }, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewSection.tsx",
                    lineNumber: 35,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewSection.tsx",
            lineNumber: 29,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewSection.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
_s(ReviewSection, "kaMG6XwWu8g4QBLwMinxod9pp4Q=");
_c = ReviewSection;
const ReviewButton = ({ setShowForm, className })=>{
    _s1();
    const IsGuest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_GUEST"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleAddReview = ()=>{
        if (IsGuest === "true" || IsGuest === null) {
            router.push("/customer/login");
        } else {
            setShowForm(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        title: "Add a Review",
        onClick: handleAddReview,
        className: `relative flex w-full min-w-[18rem] max-w-[20rem] cursor-pointer h-fit items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white mt-6 ${className}`
    }, void 0, false, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewSection.tsx",
        lineNumber: 55,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ReviewButton, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = ReviewButton;
var _c, _c1;
__turbopack_context__.k.register(_c, "ReviewSection");
__turbopack_context__.k.register(_c1, "ReviewButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/ReviewIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewIcon",
    ()=>ReviewIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ReviewIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "120",
        height: "120",
        viewBox: "0 0 200 200",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M73.6415 72.916H33.3124C27.6999 72.916 24.8892 79.7463 28.8578 83.7411L59.8176 114.904C61.0453 116.14 61.7003 117.818 61.6612 119.534C61.6444 120.269 61.3934 120.972 61.102 121.647L42.656 164.38C42.3645 165.055 42.114 165.759 42.0904 166.494C41.9301 171.495 47.6149 174.874 51.964 171.864L96.431 148.309C98.5808 146.821 101.419 146.821 103.569 148.309L148.036 171.864C152.385 174.874 158.07 171.495 157.91 166.494C157.886 165.759 157.635 165.055 157.344 164.38L138.898 121.647C138.607 120.972 138.356 120.269 138.339 119.533C138.3 117.818 138.955 116.14 140.182 114.904L171.142 83.7411C175.111 79.7463 172.3 72.916 166.688 72.916H126.359C123.76 72.916 121.429 71.3106 120.487 68.8732L105.871 31.0428C103.789 25.6524 96.2112 25.6524 94.1286 31.0428L79.5129 68.8732C78.5712 71.3106 76.2396 72.916 73.6415 72.916Z",
                className: "fill-[#060C3B] dark:fill-neutral-300",
                fillOpacity: "0.2"
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/ReviewIcon.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M126.359 72.916H166.688C172.3 72.916 175.111 79.7464 171.142 83.7411L140.182 114.904C138.955 116.14 138.3 117.818 138.339 119.534C138.356 120.269 138.607 120.972 138.898 121.647L157.344 164.38C157.635 165.055 157.886 165.759 157.91 166.494C158.07 171.495 152.385 174.874 148.036 171.864L103.569 148.309C102.494 147.565 101.247 147.193 100 147.193V27C102.415 27 104.83 28.3476 105.871 31.0428L120.487 68.8732C121.429 71.3106 123.76 72.916 126.359 72.916Z",
                className: "fill-[#060C3B] dark:fill-neutral-500",
                fillOpacity: "0.2"
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/ReviewIcon.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/ReviewIcon.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ReviewIcon;
var _c;
__turbopack_context__.k.register(_c, "ReviewIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/common/button/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$Rating$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/common/Rating.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$icons$2f$ReviewIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/common/icons/ReviewIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$theme$2f$ui$2f$grid$2f$Tile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/grid/Tile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/helper.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$type$2d$guards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/type-guards.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroui$2f$avatar$2f$dist$2f$chunk$2d$CV4BWJDJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__avatar_default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/@heroui/avatar/dist/chunk-CV4BWJDJ.mjs [app-client] (ecmascript) <export avatar_default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroui$2f$tooltip$2f$dist$2f$chunk$2d$AUA5GDXN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tooltip_default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/@heroui/tooltip/dist/chunk-AUA5GDXN.mjs [app-client] (ecmascript) <export tooltip_default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$catalog$2f$review$2f$ReviewSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewSection.tsx [app-client] (ecmascript)");
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
;
;
;
const ReviewDetail = ({ reviewDetails, totalReview })=>{
    _s();
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const [_showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!Array.isArray(reviewDetails) || reviewDetails.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center pb-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$icons$2f$ReviewIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReviewIcon"], {}, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-outfit text-xl tracking-wide",
                    children: "No Review found"
                }, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-outfit tracking-wide text-neutral-800 dark:text-white",
                    children: "Be the first to review this product"
                }, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const { reviewAvg, ratingCounts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReviews"])(reviewDetails);
    const visibleReviews = reviewDetails.slice(0, visibleCount);
    return totalReview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col flex-wrap gap-x-5 sm:gap-x-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "my-2 flex w-full flex-col flex-wrap justify-between gap-4 sm:flex-row sm:items-center min-[1350px]:flex-nowrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-x-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$Rating$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rating"], {
                                length: 5,
                                size: "size-5",
                                star: reviewAvg,
                                reviewCount: totalReview
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                            lineNumber: 38,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex w-full max-w-[280px] overflow-hidden rounded-sm",
                            children: Object.entries(ratingCounts).reverse().filter(([_, count])=>count > 0).map(([star, count])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: count
                                    },
                                    className: "min-h-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroui$2f$tooltip$2f$dist$2f$chunk$2d$AUA5GDXN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tooltip_default__as__Tooltip$3e$__["Tooltip"], {
                                        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center",
                                            children: [
                                                star,
                                                " Star ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 35
                                                }, void 0),
                                                " ",
                                                count,
                                                " ",
                                                count >= 2 ? "Reviews" : "Review"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                                            lineNumber: 59,
                                            columnNumber: 21
                                        }, void 0),
                                        placement: "top",
                                        className: "cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("h-full w-full !cursor-pointer", star === "5" ? "bg-green-700" : star === "4" ? "bg-cyan-400" : star === "3" ? "bg-violet-600" : star === "2" ? "bg-yellow-400" : "bg-red-600")
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                                            lineNumber: 67,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, star, false, {
                                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                            lineNumber: 47,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                    lineNumber: 37,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full flex-1 flex-col gap-5 py-2 sm:pt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[380px] overflow-y-auto pr-2    scrollbar-thin scrollbar-track-transparent    scrollbar-thumb-neutral-400 dark:scrollbar-thumb-neutral-600",
                            children: visibleReviews.map(({ name, title, comment, createdAt, rating, images, customer }, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex flex-col gap-y-2 py-3", {
                                        "border-b border-neutral-200 dark:border-neutral-700": visibleReviews.length > 1 && index < visibleReviews.length - 1
                                    }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "font-outfit text-xl font-medium text-black/[80%] dark:text-white",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$Rating$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rating"], {
                                            className: "my-1",
                                            length: 5,
                                            size: "size-5",
                                            star: rating
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-outfit text-base font-normal text-black/[80%] dark:text-white",
                                            children: comment
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex w-full items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroui$2f$avatar$2f$dist$2f$chunk$2d$CV4BWJDJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__avatar_default__as__Avatar$3e$__["Avatar"], {
                                                        className: "h-[56px] min-w-[56px] border border-solid border-black/10 bg-white text-large dark:bg-neutral-900",
                                                        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitials"])(name),
                                                        src: customer?.imageUrl
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "font-outfit text-base font-medium text-black/80 dark:text-white",
                                                                children: name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-base text-black/80 dark:text-white",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(createdAt)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$type$2d$guards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(images) && images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex h-full min-h-[50px] w-full max-w-[60px] flex-wrap gap-2",
                                            children: images.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$theme$2f$ui$2f$grid$2f$Tile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridTileImage"], {
                                                    fill: true,
                                                    alt: `${img.reviewId}-review`,
                                                    className: "rounded-lg",
                                                    src: img.url
                                                }, img.reviewId, false, {
                                                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                                            lineNumber: 141,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                                    lineNumber: 99,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                            lineNumber: 89,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        reviewDetails.length > visibleCount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            title: "Load More",
                            onClick: ()=>setVisibleCount((prev)=>prev + 5),
                            className: "mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                    lineNumber: 87,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$catalog$2f$review$2f$ReviewSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReviewButton"], {
                        setShowForm: setShowForm
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                    lineNumber: 166,
                    columnNumber: 8
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
            lineNumber: 36,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center pb-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$icons$2f$ReviewIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReviewIcon"], {}, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-outfit text-xl tracking-wide",
                children: "No Review found"
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-outfit tracking-wide text-neutral-800 dark:text-white",
                children: "Be the first to review this product"
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ReviewDetail, "tgsulvrdzlhMFpSZHTekx7e8wek=");
_c = ReviewDetail;
const __TURBOPACK__default__export__ = ReviewDetail;
var _c;
__turbopack_context__.k.register(_c, "ReviewDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductMoreDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductMoreDetails",
    ()=>ProductMoreDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$5TAKXEBY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_default__as__Accordion$3e$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/@heroui/accordion/dist/chunk-5TAKXEBY.mjs [app-client] (ecmascript) <export accordion_default as Accordion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$HAJUSXOG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_item_base_default__as__AccordionItem$3e$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/@heroui/accordion/dist/chunk-HAJUSXOG.mjs [app-client] (ecmascript) <export accordion_item_base_default as AccordionItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/@heroicons/react/24/outline/esm/ChevronLeftIcon.js [app-client] (ecmascript) <export default as ChevronLeftIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$theme$2f$search$2f$Prose$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/theme/search/Prose.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$catalog$2f$review$2f$ReviewSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$catalog$2f$review$2f$ReviewDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/catalog/review/ReviewDetail.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const ProductMoreDetails = ({ description, additionalData, reviews, productId, totalReview, expandedKeys, setExpandedKeys })=>{
    const filterAdditionalData = additionalData.filter((item)=>item?.attribute?.isVisibleOnFront == "1");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-7 sm:my-7",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$5TAKXEBY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_default__as__Accordion$3e$__["Accordion"], {
            itemClasses: {
                base: "shadow-none  bg-neutral-100 dark:bg-neutral-800"
            },
            className: "px-0",
            selectionMode: "multiple",
            showDivider: false,
            variant: "splitted",
            selectedKeys: expandedKeys,
            onSelectionChange: (keys)=>setExpandedKeys(keys),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$HAJUSXOG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_item_base_default__as__AccordionItem$3e$__["AccordionItem"], {
                    classNames: {
                        title: "text-start",
                        trigger: "cursor-pointer"
                    },
                    indicator: ({ isOpen })=>isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__["ChevronLeftIcon"], {
                            className: "h-5 w-5 stroke-neutral-800 dark:stroke-white"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductMoreDetail.tsx",
                            lineNumber: 45,
                            columnNumber: 15
                        }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                            className: "h-5 w-5 stroke-neutral-800 dark:stroke-white"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductMoreDetail.tsx",
                            lineNumber: 47,
                            columnNumber: 15
                        }, void 0),
                    "aria-label": "Description",
                    title: "Description",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$theme$2f$search$2f$Prose$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "pb-2",
                        html: description
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductMoreDetail.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, "1", false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductMoreDetail.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                filterAdditionalData.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$HAJUSXOG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_item_base_default__as__AccordionItem$3e$__["AccordionItem"], {
                    classNames: {
                        title: "text-start",
                        trigger: "cursor-pointer"
                    },
                    indicator: ({ isOpen })=>isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__["ChevronLeftIcon"], {
                            className: "h-5 w-5 stroke-neutral-800 dark:stroke-white"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductMoreDetail.tsx",
                            lineNumber: 66,
                            columnNumber: 17
                        }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                            className: "h-5 w-5 stroke-neutral-800 dark:stroke-white"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductMoreDetail.tsx",
                            lineNumber: 68,
                            columnNumber: 17
                        }, void 0),
                    "aria-label": "Additional Information",
                    title: "Additional Information",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid max-w-max grid-cols-[auto_1fr] gap-x-8 gap-y-4 px-1 pb-2",
                        children: filterAdditionalData?.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base font-normal text-selected-black dark:text-white",
                                            children: item?.attribute?.adminName
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductMoreDetail.tsx",
                                            lineNumber: 78,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductMoreDetail.tsx",
                                        lineNumber: 77,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base font-normal text-selected-black dark:text-white",
                                            children: item?.value || "--"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductMoreDetail.tsx",
                                            lineNumber: 83,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductMoreDetail.tsx",
                                        lineNumber: 82,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, item.label, true, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductMoreDetail.tsx",
                                lineNumber: 76,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductMoreDetail.tsx",
                        lineNumber: 74,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, "2", false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductMoreDetail.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$HAJUSXOG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_item_base_default__as__AccordionItem$3e$__["AccordionItem"], {
                    classNames: {
                        title: "text-start",
                        trigger: "cursor-pointer"
                    },
                    indicator: ({ isOpen })=>isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__["ChevronLeftIcon"], {
                            className: "h-5 w-5 stroke-neutral-800 dark:stroke-white"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductMoreDetail.tsx",
                            lineNumber: 101,
                            columnNumber: 15
                        }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                            className: "h-5 w-5 stroke-neutral-800 dark:stroke-white"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductMoreDetail.tsx",
                            lineNumber: 103,
                            columnNumber: 15
                        }, void 0),
                    "aria-label": "Ratings",
                    title: "Ratings",
                    children: totalReview > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$catalog$2f$review$2f$ReviewDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            reviewDetails: reviews,
                            totalReview: totalReview
                        }, void 0, false, {
                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductMoreDetail.tsx",
                            lineNumber: 111,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$catalog$2f$review$2f$ReviewSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        productId: productId
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductMoreDetail.tsx",
                        lineNumber: 117,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, filterAdditionalData.length > 0 ? "3" : "2", false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductMoreDetail.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductMoreDetail.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductMoreDetail.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ProductMoreDetails;
var _c;
__turbopack_context__.k.register(_c, "ProductMoreDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductDescription.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductDescription",
    ()=>ProductDescription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$theme$2f$ui$2f$Price$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/theme/ui/Price.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$Rating$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/common/Rating.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$cart$2f$AddToCart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/cart/AddToCart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$catalog$2f$product$2f$VariantSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/VariantSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$catalog$2f$product$2f$ProductMoreDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductMoreDetail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useVariantInfo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/hooks/useVariantInfo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$theme$2f$search$2f$Prose$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/theme/search/Prose.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/helper.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
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
;
;
;
;
function ProductDescription({ product, reviews, totalReview, productSwatchReview }) {
    _s();
    const priceValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safePriceValue"])(product);
    const currencyCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeCurrencyCode"])(product);
    const configurableProductIndexData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParse"])(productSwatchReview?.combinations) || [];
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [userInteracted, setUserInteracted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const superAttributes = productSwatchReview?.superAttributeOptions ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParse"])(productSwatchReview.superAttributeOptions) : productSwatchReview?.superAttributes?.edges?.map((e)=>e.node) || [];
    const variantInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useVariantInfo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVariantInfo"])(product?.type === "configurable", searchParams.toString(), superAttributes, productSwatchReview?.combinations);
    const additionalData = productSwatchReview?.attributeValues?.edges?.map((e)=>e.node) || [];
    const [expandedKeys, setExpandedKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const handleReviewClick = ()=>{
        setExpandedKeys(new Set([
            "2"
        ]));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex flex-col pb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex flex-col gap-3 shrink-0 mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "w-fit text-sm font-medium text-nowrap relative text-neutral-500 before:absolute before:bottom-0 before:left-0 before:h-px before:w-0 before:bg-current before:transition-all before:duration-300 before:content-[''] hover:text-black hover:before:w-full dark:text-neutral-400 dark:hover:text-neutral-300",
                            children: "Home /"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductDescription.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductDescription.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-outfit text-2xl md:text-3xl lg:text-4xl font-semibold",
                        children: product?.name || ""
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductDescription.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-auto justify-between items-baseline gap-y-2 py-4 xs:flex-row xs:gap-y-0 sm:py-6 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 items-baseline",
                                children: [
                                    product?.type === "configurable" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-gray-600 dark:text-gray-400",
                                        children: "As low as"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductDescription.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    product?.type === "simple" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$theme$2f$ui$2f$Price$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Price"], {
                                            amount: String(product?.minimumPrice),
                                            currencyCode: currencyCode,
                                            className: "font-outfit text-xl md:text-2xl font-semibold"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductDescription.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$theme$2f$ui$2f$Price$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Price"], {
                                        amount: String(priceValue),
                                        currencyCode: currencyCode,
                                        className: "font-outfit text-xl md:text-2xl font-semibold"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductDescription.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductDescription.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$Rating$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rating"], {
                                length: 5,
                                star: reviews[0]?.rating ?? 0,
                                reviewCount: totalReview,
                                className: "mt-2",
                                onReviewClick: handleReviewClick
                            }, void 0, false, {
                                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductDescription.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductDescription.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductDescription.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$catalog$2f$product$2f$VariantSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VariantSelector"], {
                variants: variantInfo?.variantAttributes,
                setUserInteracted: setUserInteracted,
                possibleOptions: variantInfo.possibleOptions
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductDescription.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            product?.shortDescription ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$theme$2f$search$2f$Prose$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "mb-6 text-base text-selected-black dark:text-white font-light",
                html: product.shortDescription
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductDescription.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$cart$2f$AddToCart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddToCart"], {
                index: configurableProductIndexData,
                productId: product?.id || "",
                productSwatchReview: productSwatchReview,
                userInteracted: userInteracted
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductDescription.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$catalog$2f$product$2f$ProductMoreDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductMoreDetails"], {
                additionalData: additionalData,
                description: product?.description ?? "",
                reviews: Array.isArray(reviews) ? reviews : [],
                totalReview: totalReview,
                productId: product?.id ?? "",
                expandedKeys: expandedKeys,
                setExpandedKeys: setExpandedKeys
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/catalog/product/ProductDescription.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ProductDescription, "sOlO73c0xGfIC58YwY7M30T0rm0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = ProductDescription;
var _c;
__turbopack_context__.k.register(_c, "ProductDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/utils/hooks/useMediaQueryHook.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMediaQuery",
    ()=>useMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, getSnapshot, getServerSnapshot);
}
_s(useMediaQuery, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/components/layout/navbar/Search.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Search
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/helper.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js [app-client] (ecmascript) <export default as ArrowLeftIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useMediaQueryHook$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/utils/hooks/useMediaQueryHook.ts [app-client] (ecmascript)");
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
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [searchValue, setSearchValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchParams?.get("q") || "");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
                        router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUrl"])("/search", newParams));
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
            router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUrl"])("/search", newParams));
            onClose?.();
        }
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter") {
            handleSubmit();
        }
    };
    const isDesktop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useMediaQueryHook$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])("(min-width: 1024px)");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${isDesktop ? "max-w-[550px]" : ""} relative w-full mx-auto xl:min-w-[516px] outline-none hover:outline-none`,
        children: [
            setSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setSearch(!search),
                type: "button",
                className: "absolute bottom-0 left-1 top-0 flex w-9 cursor-pointer items-center justify-center border-r border-neutral-200 dark:border-neutral-700 md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftIcon$3e$__["ArrowLeftIcon"], {
                    className: "size-5 stroke-neutral-500"
                }, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/layout/navbar/Search.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/layout/navbar/Search.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/layout/navbar/Search.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: handleSubmit,
                className: "absolute bottom-0 right-1 top-0 flex w-9 cursor-pointer items-center justify-center border-l border-neutral-200 dark:border-neutral-700 md:border-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    className: "size-5 stroke-neutral-500 dark:stroke-white md:stroke-black",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/layout/navbar/Search.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/layout/navbar/Search.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/layout/navbar/Search.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/layout/navbar/Search.tsx",
        lineNumber: 73,
        columnNumber: 3
    }, this);
}
_s(Search, "3EpT8c8URHNAK/QWBiKxYW5ZDoc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$utils$2f$hooks$2f$useMediaQueryHook$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"]
    ];
});
_c = Search;
var _c;
__turbopack_context__.k.register(_c, "Search");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/iwah/Iwah_deals/src/components/cart/OpenCart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OpenCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShoppingCartIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCartIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/@heroicons/react/24/outline/esm/ShoppingCartIcon.js [app-client] (ecmascript) <export default as ShoppingCartIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
;
function OpenCart({ className, quantity }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex  items-center justify-center rounded-md border-0 lg:border border-solid border-neutral-200 dark:border-neutral-700 lg:h-11 lg:w-11",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShoppingCartIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCartIcon$3e$__["ShoppingCartIcon"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("h-5 w-5", className)
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/cart/OpenCart.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            quantity ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-0 -mr-2 margin-t lg:-mt-2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white",
                children: quantity
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/cart/OpenCart.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/cart/OpenCart.tsx",
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
"[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/SearchSkeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchSkeleton",
    ()=>SearchSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js [app-client] (ecmascript) <export default as MagnifyingGlassIcon>");
;
;
const SearchSkeleton = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[550px] relative w-full md:min-w-[386px] xl:min-w-[516px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: "input w-full rounded-lg border border-neutral-200 bg-white py-2 pl-3 pr-10 text-sm text-black outline-none placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400 md:pl-4",
                placeholder: "Search for products..."
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/SearchSkeleton.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 right-1 top-0 flex w-9 items-center justify-center border-l border-neutral-200 dark:border-neutral-700 md:border-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__["MagnifyingGlassIcon"], {
                    className: "size-5 stroke-neutral-500"
                }, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/SearchSkeleton.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/SearchSkeleton.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/SearchSkeleton.tsx",
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
"[project]/Desktop/iwah/Iwah_deals/src/components/layout/navbar/MobileSearch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileSearchBar",
    ()=>MobileSearchBar,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$layout$2f$navbar$2f$Search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/layout/navbar/Search.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$cart$2f$OpenCart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/cart/OpenCart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$skeleton$2f$SearchSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/iwah/Iwah_deals/src/components/common/skeleton/SearchSkeleton.tsx [app-client] (ecmascript)");
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
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$cart$2f$OpenCart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/layout/navbar/MobileSearch.tsx",
                    lineNumber: 12,
                    columnNumber: 27
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setSearch(!search),
                    "aria-label": "Open cart",
                    className: "size-9 lg:size-11 flex cursor-pointer items-center justify-center rounded-sm border border-solid border-neutral-200 dark:border-neutral-700 md:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: "1.5",
                        stroke: "currentColor",
                        className: "size-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/layout/navbar/MobileSearch.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/layout/navbar/MobileSearch.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/layout/navbar/MobileSearch.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/layout/navbar/MobileSearch.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("absolute z-50 left-0 right-0 top-0 flex w-full justify-center bg-neutral-50 dark:bg-neutral-900 p-[15px] transition-all duration-300 md:hidden ", search ? "translate-y-0 opacity-100" : " -translate-y-full opacity-0"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$skeleton$2f$SearchSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchSkeleton"], {}, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/layout/navbar/MobileSearch.tsx",
                        lineNumber: 40,
                        columnNumber: 29
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$layout$2f$navbar$2f$Search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        search: search,
                        setSearch: setSearch
                    }, void 0, false, {
                        fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/layout/navbar/MobileSearch.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/layout/navbar/MobileSearch.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/layout/navbar/MobileSearch.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(MobileSearch, "U++H1Seh0ABbq6ENHr6v/byZWis=");
_c = MobileSearch;
const MobileSearchBar = ({ onClose })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "block w-full justify-center md:hidden px-4 mt-2 z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$common$2f$skeleton$2f$SearchSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchSkeleton"], {}, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/layout/navbar/MobileSearch.tsx",
                    lineNumber: 58,
                    columnNumber: 29
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$iwah$2f$Iwah_deals$2f$src$2f$components$2f$layout$2f$navbar$2f$Search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    search: false,
                    onClose: onClose
                }, void 0, false, {
                    fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/layout/navbar/MobileSearch.tsx",
                    lineNumber: 59,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/layout/navbar/MobileSearch.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/iwah/Iwah_deals/src/components/layout/navbar/MobileSearch.tsx",
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

//# sourceMappingURL=Desktop_iwah_Iwah_deals_src_de21b2fc._.js.map
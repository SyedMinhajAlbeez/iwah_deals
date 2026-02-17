(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/storefront/src/utils/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import { parseCsv } from './helper';
__turbopack_context__.s([
    "BAGISTO_GRAPHQL_API_ENDPOINT",
    ()=>BAGISTO_GRAPHQL_API_ENDPOINT,
    "BAGISTO_SESSION",
    ()=>BAGISTO_SESSION,
    "BASE_SCHEMA_URL",
    ()=>BASE_SCHEMA_URL,
    "BASE_URL",
    ()=>BASE_URL,
    "CACHE_KEY",
    ()=>CACHE_KEY,
    "CHECKOUT",
    ()=>CHECKOUT,
    "DEFAULT_OPTION",
    ()=>DEFAULT_OPTION,
    "EMAIL_REGEX",
    ()=>EMAIL_REGEX,
    "FORGET_PASSWORD_IMG",
    ()=>FORGET_PASSWORD_IMG,
    "GRAPHQL_URL",
    ()=>GRAPHQL_URL,
    "GUEST_CART_ID",
    ()=>GUEST_CART_ID,
    "GUEST_CART_TOKEN",
    ()=>GUEST_CART_TOKEN,
    "HIDDEN_PRODUCT_TAG",
    ()=>HIDDEN_PRODUCT_TAG,
    "IS_GUEST",
    ()=>IS_GUEST,
    "IS_VALID_ADDRESS",
    ()=>IS_VALID_ADDRESS,
    "IS_VALID_INPUT",
    ()=>IS_VALID_INPUT,
    "IS_VALID_PHONE",
    ()=>IS_VALID_PHONE,
    "LIMIT",
    ()=>LIMIT,
    "LOADING",
    ()=>LOADING,
    "NEXTAUTH_SECURE_TOKEN",
    ()=>NEXTAUTH_SECURE_TOKEN,
    "NEXTAUTH_TOKEN",
    ()=>NEXTAUTH_TOKEN,
    "NEXT_AUTH_SECRET",
    ()=>NEXT_AUTH_SECRET,
    "NOT_IMAGE",
    ()=>NOT_IMAGE,
    "ORDER_ID",
    ()=>ORDER_ID,
    "PAGE",
    ()=>PAGE,
    "PRODUCT_OFFER_TYPE",
    ()=>PRODUCT_OFFER_TYPE,
    "PRODUCT_TYPE",
    ()=>PRODUCT_TYPE,
    "QUERY",
    ()=>QUERY,
    "SIGNIN_IMG",
    ()=>SIGNIN_IMG,
    "SIGNUP_IMG",
    ()=>SIGNUP_IMG,
    "SORT",
    ()=>SORT,
    "STOREFRONT_KEY",
    ()=>STOREFRONT_KEY,
    "SortByFields",
    ()=>SortByFields,
    "TAGS",
    ()=>TAGS,
    "TOKEN",
    ()=>TOKEN,
    "baseUrl",
    ()=>baseUrl,
    "configHeader",
    ()=>configHeader,
    "getImageUrl",
    ()=>getImageUrl,
    "imageProtocol",
    ()=>imageProtocol,
    "variants",
    ()=>variants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/storefront/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const CACHE_KEY = {
    homeTheme: "collection-homepage",
    headerMenus: "header-menus",
    footerLink: "footer-link"
};
const TAGS = {
    collections: "collections",
    products: "products",
    cart: "cart",
    carDetail: "carDetail",
    address: "address",
    themeCustomize: "themeCustomize",
    defaultChannel: "channel"
};
const CHECKOUT = {
    shipping: "collections",
    method: "products",
    cart: "cart"
};
const HIDDEN_PRODUCT_TAG = "nextjs-frontend-hidden";
const DEFAULT_OPTION = "Default Title";
const BAGISTO_GRAPHQL_API_ENDPOINT = "/graphql";
const BASE_SCHEMA_URL = "https://schema.org";
const PRODUCT_TYPE = "Product";
const PRODUCT_OFFER_TYPE = "AggregateOffer";
const BAGISTO_SESSION = __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.BAGISTO_SESSION ?? "bagisto_session";
const TOKEN = "token";
const BASE_URL = ("TURBOPACK compile-time value", "http://localhost:3000/");
const baseUrl = ("TURBOPACK compile-time value", "https://iwahdeals.alisonstech-dev.com/Cdn/public");
const GRAPHQL_URL = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `${"TURBOPACK compile-time value", "https://iwahdeals.alisonstech-dev.com/Cdn/public"}`;
const NEXT_AUTH_SECRET = ("TURBOPACK compile-time value", "J8d7f6G5h4j3k2L1m0n9b8v7c6x5z4A");
const STOREFRONT_KEY = ("TURBOPACK compile-time value", "pk_storefront_967bdivQvhit6uchcew4Qehbp8dffiPr") || "";
const PAGE = "page";
const LIMIT = "limit";
const LOADING = "loading";
const QUERY = "q";
const SORT = "sort";
const SIGNUP_IMG = "/image/sign-in.webp";
const SIGNIN_IMG = "/image/login.webp";
const FORGET_PASSWORD_IMG = "/image/forget-password.webp";
const NOT_IMAGE = "/image/placeholder.webp";
const variants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0
    }
};
const configHeader = [
    // Security headers for all routes
    {
        source: "/:path*",
        headers: [
            {
                key: "Referrer-Policy",
                value: "strict-origin-when-cross-origin"
            },
            {
                key: "X-Frame-Options",
                value: "DENY"
            },
            {
                key: "X-Content-Type-Options",
                value: "nosniff"
            },
            {
                key: "X-XSS-Protection",
                value: "1; mode=block"
            },
            {
                key: "Permissions-Policy",
                value: "camera=(), microphone=(), geolocation=(), browsing-topics=()"
            }
        ]
    },
    // Cache dynamic pages - shorter cache for frequently updated content
    {
        source: "/search/:path*",
        headers: [
            {
                key: "Cache-Control",
                value: "public, s-maxage=3600, stale-while-revalidate=86400"
            }
        ]
    },
    {
        source: "/product/:path*",
        headers: [
            {
                key: "Cache-Control",
                value: "public, s-maxage=3600, stale-while-revalidate=86400"
            },
            {
                key: "Vary",
                value: "Accept-Encoding"
            }
        ]
    },
    {
        source: "/checkout/:path*",
        headers: [
            {
                key: "Cache-Control",
                value: "private, no-cache, no-store, must-revalidate"
            }
        ]
    },
    {
        source: "/customer/:path*",
        headers: [
            {
                key: "Cache-Control",
                value: "private, no-cache, no-store, must-revalidate"
            }
        ]
    },
    // Next.js static assets - long cache with immutable
    {
        source: "/_next/static/:path*",
        headers: [
            {
                key: "Cache-Control",
                value: "public, max-age=31536000, immutable"
            }
        ]
    },
    {
        source: "/_next/image/:path*",
        headers: [
            {
                key: "Cache-Control",
                value: "public, max-age=31536000, immutable"
            }
        ]
    },
    // Public folder assets - long cache
    {
        source: "/image/:path*",
        headers: [
            {
                key: "Cache-Control",
                value: "public, max-age=31536000, immutable"
            }
        ]
    },
    {
        source: "/fonts/:path*",
        headers: [
            {
                key: "Cache-Control",
                value: "public, max-age=31536000, immutable"
            }
        ]
    }
];
const imageProtocol = __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_SERVER_MAGENTO_PROTOCOL || "https";
function getImageUrl(url, baseUrl, fallback) {
    if (!url) return fallback;
    if (url.startsWith("http://") || url.startsWith("https://")) {
        return url;
    }
    return `${baseUrl}${url.startsWith("/") ? url : `/${url}`}`;
}
const SortByFields = [
    {
        key: "name-asc",
        title: "From A-Z",
        value: "name-asc",
        sortKey: "TITLE",
        reverse: false
    },
    {
        key: "name-desc",
        title: "From Z-A",
        value: "name-desc",
        sortKey: "TITLE",
        reverse: true
    },
    {
        key: "newest",
        title: "Newest First",
        value: "newest",
        sortKey: "CREATED_AT",
        reverse: true
    },
    {
        key: "oldest",
        title: "Oldest First",
        value: "oldest",
        sortKey: "CREATED_AT",
        reverse: false
    },
    {
        key: "price-asc",
        title: "Cheapest First",
        value: "price-asc",
        sortKey: "PRICE",
        reverse: false
    },
    {
        key: "price-desc",
        title: "Expensive First",
        value: "price-desc",
        sortKey: "PRICE",
        reverse: true
    }
];
const GUEST_CART_TOKEN = "guest_cart_token";
const GUEST_CART_ID = "guest_cart_id";
const IS_GUEST = "is_guest";
const NEXTAUTH_TOKEN = "next-auth.session-token";
const NEXTAUTH_SECURE_TOKEN = "__Secure-next-auth.session-token";
const ORDER_ID = "order_id";
const EMAIL_REGEX = /^(?![.-])(?!.*[.-]@)(?!.*\.\.)[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
const IS_VALID_INPUT = /^[a-zA-Z0-9\s]*$/;
const IS_VALID_ADDRESS = /^[a-zA-Z0-9\s,\/-]*$/;
const IS_VALID_PHONE = /^[0-9]{10}$/;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/lib/apollo-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>initializeApollo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/utils/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$ApolloClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/storefront/node_modules/@apollo/client/core/ApolloClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$HttpLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/@apollo/client/link/http/HttpLink.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$inMemoryCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/@apollo/client/cache/inmemory/inMemoryCache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$from$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/@apollo/client/link/core/from.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$context$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/@apollo/client/link/context/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
;
;
;
;
function initializeApollo() {
    const ssrMode = ("TURBOPACK compile-time value", "object") === "undefined";
    const cache = new __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$inMemoryCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InMemoryCache"]();
    const httpLink = new __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$HttpLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpLink"]({
        uri: __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRAPHQL_URL"],
        credentials: "include"
    });
    const authLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$context$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setContext"])(async (_, { headers })=>{
        const baseHeaders = {
            ...headers,
            "X-Storefront-Key": __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STOREFRONT_KEY"],
            "Content-Type": "application/json"
        };
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSession"])();
        const userToken = session?.user?.accessToken;
        return {
            headers: {
                ...baseHeaders,
                ...userToken && {
                    authorization: `Bearer ${userToken}`
                }
            }
        };
    });
    return new __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$ApolloClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ApolloClient"]({
        ssrMode,
        link: (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$from$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"])([
            authLink,
            httpLink
        ]),
        cache: cache,
        defaultOptions: {
            watchQuery: {
                fetchPolicy: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "cache-first",
                nextFetchPolicy: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "cache-first"
            },
            query: {
                fetchPolicy: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "cache-first"
            }
        }
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/providers/ApolloWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApolloWrapper",
    ()=>ApolloWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$context$2f$ApolloProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/@apollo/client/react/context/ApolloProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$lib$2f$apollo$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/lib/apollo-client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const ApolloWrapper = ({ children })=>{
    _s();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ApolloWrapper.useMemo[client]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$lib$2f$apollo$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()
    }["ApolloWrapper.useMemo[client]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$context$2f$ApolloProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApolloProvider"], {
        client: client,
        children: children
    }, void 0, false, {
        fileName: "[project]/storefront/src/providers/ApolloWrapper.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ApolloWrapper, "/KoUf8dpTovukU4B6fVhiiXXF1g=");
_c = ApolloWrapper;
;
var _c;
__turbopack_context__.k.register(_c, "ApolloWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/store/slices/cart-slice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addItem",
    ()=>addItem,
    "clearBillingAddress",
    ()=>clearBillingAddress,
    "clearCart",
    ()=>clearCart,
    "clearSelectedPayment",
    ()=>clearSelectedPayment,
    "clearSelectedShipping",
    ()=>clearSelectedShipping,
    "clearShippingAddress",
    ()=>clearShippingAddress,
    "default",
    ()=>__TURBOPACK__default__export__,
    "setBillingAddress",
    ()=>setBillingAddress,
    "setCheckoutAddresses",
    ()=>setCheckoutAddresses,
    "setSelectedPayment",
    ()=>setSelectedPayment,
    "setSelectedShippingRate",
    ()=>setSelectedShippingRate,
    "setShippingAddress",
    ()=>setShippingAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/storefront/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
// Initial state for the cart
const initialState = {
    cart: undefined,
    selectedShippingRate: null,
    selectedPayment: null,
    billingAddress: null,
    shippingAddress: null
};
const cartSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "cartDetail",
    initialState,
    reducers: {
        addItem: (state, action)=>{
            state.cart = {
                ...action.payload
            };
        },
        clearCart (state) {
            state.cart = undefined;
            state.billingAddress = null;
            state.shippingAddress = null;
            state.selectedShippingRate = null;
            state.selectedPayment = null;
        },
        /** ADDRESSES */ setBillingAddress (state, action) {
            state.billingAddress = action.payload;
        },
        clearBillingAddress (state) {
            state.billingAddress = null;
        },
        setShippingAddress (state, action) {
            state.shippingAddress = action.payload;
        },
        clearShippingAddress (state) {
            state.shippingAddress = null;
        },
        setCheckoutAddresses (state, action) {
            state.billingAddress = action.payload.billing;
            state.shippingAddress = action.payload.shipping;
        },
        /** SHIPPING */ setSelectedShippingRate (state, action) {
            state.selectedShippingRate = action.payload;
        },
        clearSelectedShipping (state) {
            state.selectedShippingRate = null;
        },
        /** PAYMENT */ setSelectedPayment (state, action) {
            state.selectedPayment = action.payload;
        },
        clearSelectedPayment (state) {
            state.selectedPayment = null;
        }
    }
});
const { addItem, clearCart, setSelectedShippingRate, setSelectedPayment, clearSelectedShipping, clearSelectedPayment, setBillingAddress, clearBillingAddress, setShippingAddress, clearShippingAddress, setCheckoutAddresses } = cartSlice.actions;
const __TURBOPACK__default__export__ = cartSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/store/slices/user-slice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearUser",
    ()=>clearUser,
    "default",
    ()=>__TURBOPACK__default__export__,
    "setUser",
    ()=>setUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/storefront/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    user: null,
    isAuthenticated: false
};
const userSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action)=>{
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        clearUser: (state)=>{
            state.user = null;
            state.isAuthenticated = false;
        }
    }
});
const { setUser, clearUser } = userSlice.actions;
const __TURBOPACK__default__export__ = userSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/store/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/storefront/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$slices$2f$cart$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/store/slices/cart-slice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$slices$2f$user$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/store/slices/user-slice.ts [app-client] (ecmascript)");
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        cartDetail: __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$slices$2f$cart$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        user: __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$slices$2f$user$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/providers/NextAuthProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NextAuthProvider",
    ()=>NextAuthProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
"use client";
;
;
const NextAuthProvider = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/storefront/src/providers/NextAuthProvider.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c = NextAuthProvider;
var _c;
__turbopack_context__.k.register(_c, "NextAuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/store/hooks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppDispatch",
    ()=>useAppDispatch,
    "useAppSelector",
    ()=>useAppSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useAppDispatch = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
};
_s(useAppDispatch, "jI3HA1r1Cumjdbu14H7G+TUj798=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/providers/SessionSync.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SessionSync",
    ()=>SessionSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$slices$2f$user$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/store/slices/user-slice.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const SessionSync = ()=>{
    _s();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SessionSync.useEffect": ()=>{
            if (status === "authenticated" && session?.user) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$slices$2f$user$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setUser"])(session.user));
            } else if (status === "unauthenticated") {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$slices$2f$user$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearUser"])());
            }
        }
    }["SessionSync.useEffect"], [
        session,
        status,
        dispatch
    ]);
    return null;
};
_s(SessionSync, "7wFhtp757xEk6S07TC0Pub2Mk9k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"]
    ];
});
_c = SessionSync;
var _c;
__turbopack_context__.k.register(_c, "SessionSync");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/providers/MainProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainProvider",
    ()=>MainProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$providers$2f$ApolloWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/providers/ApolloWrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/store/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$providers$2f$NextAuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/providers/NextAuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$providers$2f$SessionSync$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/providers/SessionSync.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const MainProvider = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$providers$2f$NextAuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextAuthProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
            store: __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$providers$2f$SessionSync$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionSync"], {}, void 0, false, {
                    fileName: "[project]/storefront/src/providers/MainProvider.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$providers$2f$ApolloWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApolloWrapper"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/storefront/src/providers/MainProvider.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/storefront/src/providers/MainProvider.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/storefront/src/providers/MainProvider.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MainProvider;
;
var _c;
__turbopack_context__.k.register(_c, "MainProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/providers/GlobalContextProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalContextProvider",
    ()=>GlobalContextProvider,
    "useGlobalContext",
    ()=>useGlobalContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const GlobalContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    countryCode: "",
    setCountryCode: ()=>""
});
const GlobalContextProvider = ({ children })=>{
    _s();
    const [countryCode, setCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobalContext.Provider, {
        value: {
            countryCode,
            setCountryCode
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/storefront/src/providers/GlobalContextProvider.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(GlobalContextProvider, "VAdkvDtoQOUQQSFdJ1F3kiViNeY=");
_c = GlobalContextProvider;
const useGlobalContext = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(GlobalContext);
};
_s1(useGlobalContext, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "GlobalContextProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/providers/ReduxProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReduxProvider",
    ()=>ReduxProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/store/store.ts [app-client] (ecmascript)");
"use client";
;
;
;
const ReduxProvider = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/storefront/src/providers/ReduxProvider.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ReduxProvider;
var _c;
__turbopack_context__.k.register(_c, "ReduxProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/providers/TanstackProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TanstackProvider",
    ()=>TanstackProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TanstackProvider({ children }) {
    _s();
    const [queryClient] = __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        "TanstackProvider.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]()
    }["TanstackProvider.useState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: children
    }, void 0, false, {
        fileName: "[project]/storefront/src/providers/TanstackProvider.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(TanstackProvider, "qFhNRSk+4hqflxYLL9+zYF5AcuQ=");
_c = TanstackProvider;
var _c;
__turbopack_context__.k.register(_c, "TanstackProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/providers/ThemeProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$heroui$2f$system$2f$dist$2f$chunk$2d$3KFOFPK7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/@heroui/system/dist/chunk-3KFOFPK7.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ThemeProvider({ children, themeProps }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$heroui$2f$system$2f$dist$2f$chunk$2d$3KFOFPK7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroUIProvider"], {
        navigate: router.push,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
            attribute: "class",
            defaultTheme: "light",
            enableSystem: false,
            ...themeProps,
            children: children
        }, void 0, false, {
            fileName: "[project]/storefront/src/providers/ThemeProvider.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/storefront/src/providers/ThemeProvider.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(ThemeProvider, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/components/theme/toast/Toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$heroui$2f$alert$2f$dist$2f$chunk$2d$VF35X3H6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__alert_default__as__Alert$3e$__ = __turbopack_context__.i("[project]/storefront/node_modules/@heroui/alert/dist/chunk-VF35X3H6.mjs [app-client] (ecmascript) <export alert_default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Toast = ({ toast, onRemove })=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Toast.useEffect": ()=>{
            const timer = setTimeout({
                "Toast.useEffect.timer": ()=>onRemove(toast.id)
            }["Toast.useEffect.timer"], toast.duration || 5000);
            return ({
                "Toast.useEffect": ()=>clearTimeout(timer)
            })["Toast.useEffect"];
        }
    }["Toast.useEffect"], [
        toast,
        onRemove
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        initial: {
            opacity: 0,
            y: 50,
            scale: 0.3
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: 0.5,
            transition: {
                duration: 0.2
            }
        },
        className: "z-10 mt-4 flex w-full items-center dark:backdrop-blur-md dark:bg-[#000000]/30 rounded-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$heroui$2f$alert$2f$dist$2f$chunk$2d$VF35X3H6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__alert_default__as__Alert$3e$__["Alert"], {
            color: toast?.type,
            isVisible: Boolean(toast.id),
            title: toast.message,
            variant: "faded",
            onClose: ()=>onRemove(toast.id)
        }, void 0, false, {
            fileName: "[project]/storefront/src/components/theme/toast/Toast.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/storefront/src/components/theme/toast/Toast.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Toast, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Toast;
var _c;
__turbopack_context__.k.register(_c, "Toast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/components/theme/toast/ToastContainer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastContainer",
    ()=>ToastContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$providers$2f$ToastProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/providers/ToastProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$theme$2f$toast$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/components/theme/toast/Toast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const ToastContainer = ()=>{
    _s();
    const { toasts, removeToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$providers$2f$ToastProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed left-1/2 z-[999] w-[80%] -translate-x-1/2 sm:max-w-md   top-4 bottom-auto   md:bottom-4 md:top-auto",
        children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$theme$2f$toast$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                toast: toast,
                onRemove: removeToast
            }, toast.id, false, {
                fileName: "[project]/storefront/src/components/theme/toast/ToastContainer.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/storefront/src/components/theme/toast/ToastContainer.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ToastContainer, "hDKWezg0iwBHWd7k0YqUAkfEZE4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$providers$2f$ToastProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = ToastContainer;
var _c;
__turbopack_context__.k.register(_c, "ToastContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/providers/ToastProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastProvider",
    ()=>ToastProvider,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$theme$2f$toast$2f$ToastContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/components/theme/toast/ToastContainer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ToastProvider = ({ children })=>{
    _s();
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const addToast = (toast)=>{
        // eslint-disable-next-line react-hooks/purity
        const id = Math.random().toString(36).substr(2, 9);
        const newToast = {
            id,
            ...toast
        };
        setToasts((prev)=>[
                ...prev,
                newToast
            ]);
        setTimeout(()=>{
            removeToast(id);
        }, toast.duration || 5000);
    };
    const removeToast = (id)=>{
        setToasts((prev)=>prev.filter((toast)=>toast.id !== id));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
        value: {
            toasts,
            addToast,
            removeToast
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$components$2f$theme$2f$toast$2f$ToastContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastContainer"], {}, void 0, false, {
                fileName: "[project]/storefront/src/providers/ToastProvider.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/storefront/src/providers/ToastProvider.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ToastProvider, "nD8TBOiFYf9ajstmZpZK2DP4rNo=");
_c = ToastProvider;
const useToast = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};
_s1(useToast, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ToastProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/providers/SessionProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SessionProvider",
    ()=>SessionProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
"use client";
;
;
function SessionProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/storefront/src/providers/SessionProvider.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = SessionProvider;
var _c;
__turbopack_context__.k.register(_c, "SessionProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/utils/jwt-cookie.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeJWT",
    ()=>decodeJWT,
    "encodeJWT",
    ()=>encodeJWT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/utils/constants.ts [app-client] (ecmascript)");
;
const encodeJWT = (payload)=>{
    try {
        const jsonStr = JSON.stringify(payload);
        const encodedPayload = btoa(encodeURIComponent(jsonStr));
        const header = btoa(JSON.stringify({
            alg: "none",
            typ: "JWT"
        }));
        const token = `${header}.${encodedPayload}.${__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NEXT_AUTH_SECRET"]}`;
        return encodeURIComponent(token);
    } catch (e) {
        console.error("Error encoding JWT:", e);
        return "";
    }
};
const decodeJWT = (token, isGuest = true)=>{
    try {
        if (!isGuest) {
            return {
                sessionToken: token
            };
        }
        const decodedToken = decodeURIComponent(token);
        const parts = decodedToken.split(".");
        if (parts.length !== 3) {
            return null;
        }
        const payloadPart = parts[1];
        if (!payloadPart) return null;
        const jsonStr = decodeURIComponent(atob(payloadPart));
        return JSON.parse(jsonStr);
    } catch (e) {
        console.warn("Error decoding JWT:", e);
        return null;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/utils/getCartToken.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteCookie",
    ()=>deleteCookie,
    "getCartToken",
    ()=>getCartToken,
    "getCookie",
    ()=>getCookie,
    "getNativeCookie",
    ()=>getNativeCookie,
    "setCookie",
    ()=>setCookie
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/utils/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$jwt$2d$cookie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/utils/jwt-cookie.ts [app-client] (ecmascript)");
;
;
const getNativeCookie = (name)=>{
    if (typeof document === "undefined") return null;
    const cookies = document.cookie.split("; ").map((c)=>c.trim());
    const found = cookies.find((c)=>c.startsWith(name + "="));
    return found ? decodeURIComponent(found.split("=")[1]) : null;
};
const getCartToken = ()=>{
    const raw = getNativeCookie(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_CART_TOKEN"]);
    if (!raw) return null;
    const isGuest = getNativeCookie(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_GUEST"]) !== "false";
    const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$jwt$2d$cookie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeJWT"])(raw, isGuest);
    return decoded?.sessionToken ?? null;
};
const getCookie = (name)=>{
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? decodeURIComponent(match[2]) : null;
};
const setCookie = (name, value, days = 7)=>{
    if (typeof document === "undefined") return;
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};
const deleteCookie = (name)=>{
    if (typeof document === "undefined") return;
    document.cookie = `${name}=; Max-Age=0; path=/`;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/utils/fetch-handler.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchHandler",
    ()=>fetchHandler
]);
async function fetchHandler({ url, method = "GET", body, headers = {}, contentType = true }) {
    try {
        const defaultHeaders = {
            ...contentType ? {
                "Content-Type": "application/json"
            } : {},
            ...headers
        };
        const response = await fetch(`/api/${url}`, {
            method,
            headers: defaultHeaders,
            body: body ? JSON.stringify(body) : undefined
        });
        const result = await response.json();
        if (!response.ok) {
            return {
                data: null,
                error: {
                    status: response?.status,
                    message: result?.error || "Something went wrong"
                }
            };
        }
        return {
            ...result
        };
    } catch (err) {
        const error = err instanceof Error ? err.message : "Unknown error";
        return {
            data: null,
            error: {
                message: error
            }
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/utils/useAddress.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAddress",
    ()=>useAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/utils/getCartToken.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$fetch$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/src/utils/fetch-handler.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const useAddress = ()=>{
    _s();
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$getCartToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCartToken"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "address",
            token
        ],
        enabled: !!token,
        queryFn: {
            "useAddress.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$src$2f$utils$2f$fetch$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchHandler"])({
                    url: "checkout/saveAddress",
                    method: "POST",
                    contentType: true,
                    body: "",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
        }["useAddress.useQuery"]
    });
};
_s(useAddress, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/providers/ReactQueryProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReactQueryProvider",
    ()=>ReactQueryProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
"use client";
;
;
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]();
function ReactQueryProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: children
    }, void 0, false, {
        fileName: "[project]/storefront/src/providers/ReactQueryProvider.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
_c = ReactQueryProvider;
var _c;
__turbopack_context__.k.register(_c, "ReactQueryProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storefront/src/components/theme/SpeculationRules.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpeculationRules",
    ()=>SpeculationRules
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storefront/node_modules/next/script.js [app-client] (ecmascript)");
'use client';
;
;
function SpeculationRules() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storefront$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: "speculation-rules",
        type: "speculationrules",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify({
                prerender: [
                    {
                        where: {
                            and: [
                                {
                                    href_matches: '.*'
                                },
                                {
                                    not: {
                                        href_matches: '/customer/account/login'
                                    }
                                },
                                {
                                    not: {
                                        href_matches: '/*\\?*(^|&)cart=*'
                                    }
                                },
                                {
                                    not: {
                                        href_matches: '/checkout'
                                    }
                                },
                                {
                                    not: {
                                        selector_matches: '.no-prerender'
                                    }
                                },
                                {
                                    not: {
                                        selector_matches: '[rel~=nofollow]'
                                    }
                                }
                            ]
                        },
                        eagerness: 'moderate'
                    }
                ],
                prefetch: [
                    {
                        urls: [
                            '/'
                        ],
                        requires: [
                            'anonymous-client-ip-when-cross-origin'
                        ],
                        referrer_policy: 'no-referrer'
                    }
                ]
            })
        }
    }, void 0, false, {
        fileName: "[project]/storefront/src/components/theme/SpeculationRules.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = SpeculationRules;
var _c;
__turbopack_context__.k.register(_c, "SpeculationRules");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=storefront_src_898b5e64._.js.map
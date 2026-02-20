import { NextRequest, NextResponse } from "next/server";

const EXTERNAL_GRAPHQL = process.env.NEXT_PUBLIC_BAGISTO_ENDPOINT as string;
const STOREFRONT_KEY = process.env.NEXT_PUBLIC_BAGISTO_STOREFRONT_KEY ?? "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();

    // Forward auth token from incoming request if present
    const authorization = req.headers.get("authorization") ?? undefined;

    const forwardHeaders: HeadersInit = {
      "Content-Type": "application/json",
      "X-Storefront-Key": STOREFRONT_KEY,
      ...(authorization ? { authorization } : {}),
    };

    const response = await fetch(EXTERNAL_GRAPHQL, {
      method: "POST",
      headers: forwardHeaders,
      body,
      // Never cache at fetch level; Next.js caching handles it above
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
      headers: {
        // Allow the browser to call this same-origin proxy without CORS issues
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.error("[GraphQL Proxy] Error:", error);
    return NextResponse.json(
      { errors: [{ message: "Proxy request failed" }] },
      { status: 502 }
    );
  }
}

// Handle pre-flight OPTIONS requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Storefront-Key",
    },
  });
}

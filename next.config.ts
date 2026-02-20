import { configHeader } from '@/utils/constants';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    // Next Image Optimization ON (IMPORTANT)
    formats: ["image/avif", "image/webp"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "iwahdeals.alisonstech-dev.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "admin.iwahdeals.com",
        pathname: "/**",
      },
    ],
  },

  async headers() {
    return configHeader;
  },

  compress: true,

  experimental: {
    optimizePackageImports: ["lodash", "date-fns"],
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

export default nextConfig;
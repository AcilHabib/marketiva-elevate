import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
  },
  experimental: {
    // Allows larger JSON payloads (data-URL media) in Server Actions / some request paths
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
};

export default nextConfig;

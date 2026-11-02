import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Most media uses plain <img> with public/ paths; allow static imports too.
    unoptimized: false,
  },
};

export default nextConfig;

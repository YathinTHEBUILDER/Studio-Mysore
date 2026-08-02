import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Set the explicit workspace root to suppress the multiple-lockfile warning.
   * Next.js was detecting the parent directory's lockfile as the root.
   */
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

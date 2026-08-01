import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Set the explicit workspace root to suppress the multiple-lockfile warning.
   * Next.js was detecting the parent directory's lockfile as the root.
   */
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

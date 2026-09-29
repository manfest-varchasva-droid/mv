import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/events/:file.:ext(png|jpg|jpeg|JPG|PNG)",
          destination: "/_next/image?url=/raw-events/:file.:ext&w=1920&q=75",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;

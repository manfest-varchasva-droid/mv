import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export" as const,
        trailingSlash: true,
      }
    : {}),

  images: isStaticExport
    ? {
        unoptimized: true,
      }
    : {
        minimumCacheTTL: 60 * 60 * 24 * 30,
      },

  ...(isStaticExport
    ? {}
    : {
        async rewrites() {
          return {
            beforeFiles: [
              {
                source: "/events/:file.:ext(png|jpg|jpeg|JPG|PNG)",
                destination:
                  "/_next/image?url=/raw-events/:file.:ext&w=1920&q=75",
              },
            ],
            afterFiles: [],
            fallback: [],
          };
        },
      }),
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        // Subdomain: caitlinbyk.thevaried.co → serve brand guide
        {
          source: "/:path*",
          has: [{ type: "host", value: "caitlinbyk.thevaried.co" }],
          destination: "/caitlin-byk/:path*",
        },
        {
          source: "/",
          has: [{ type: "host", value: "caitlinbyk.thevaried.co" }],
          destination: "/caitlin-byk/index.html",
        },
      ],
      afterFiles: [
        {
          source: "/caitlin-byk",
          destination: "/caitlin-byk/index.html",
        },
      ],
      fallback: [],
    };
  },
  async redirects() {
    return [
      { source: "/blog", destination: "/", permanent: false },
      { source: "/blog/:slug*", destination: "/", permanent: false },
      { source: "/treatments", destination: "/", permanent: false },
      { source: "/treatments/:slug*", destination: "/", permanent: false },
      { source: "/admin", destination: "/", permanent: false },
      { source: "/admin/:path*", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;

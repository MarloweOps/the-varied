import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/caitlin-byk",
        destination: "/caitlin-byk/index.html",
      },
    ];
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

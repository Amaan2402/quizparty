import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nyc.cloud.appwrite.io",
        pathname: "/v1/storage/buckets/**",
      },
    ],
  },
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.quizparty.amaan24.tech/:path*",
      },
    ];
  },
};

export default nextConfig;

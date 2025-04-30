import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        "https://nyc.cloud.appwrite.io/v1/storage/buckets/681203a2000746e35401/files/681205a20008a3daa3d3/view?project=6809910a000e66c57d35&mode=admin"
      ),
      new URL(
        "https://nyc.cloud.appwrite.io/v1/storage/buckets/681203a2000746e35401/files/6812527600111852c237/view?project=6809910a000e66c57d35&mode=admin"
      ),
      new URL(
        "https://nyc.cloud.appwrite.io/v1/storage/buckets/681203a2000746e35401/files/681238780004fee513bf/view?project=6809910a000e66c57d35&mode=admin"
      ),
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skiper-ui.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "assets.lummi.ai",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://skiper-ui.com/**"),
      new URL("https://cdn.pixabay.com/"),
      new URL("https://assets.lummi.ai/"),
      new URL("https://cdn.pixabay.com/"),
    ],
  },
};

export default nextConfig;

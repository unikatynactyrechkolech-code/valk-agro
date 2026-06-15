import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.valk-agro.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

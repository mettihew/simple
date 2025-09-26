import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
        {
        protocol: 'https',
        hostname: 'm.media-amazon.com',  // Add your specific domain
        port: '',  // Optional: Leave empty for default
        pathname: '/**',  // Allow all paths under this hostname
      },
    ]
  }
};

export default nextConfig;
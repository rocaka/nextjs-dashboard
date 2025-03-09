import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    // appDir: true,
  },
};

export default nextConfig;

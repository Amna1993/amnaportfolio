import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    // Disable fs, path, and os for the client (browser-side only)
    if (!isServer) {
      config.resolve.fallback = {
        fs: false, // Disable fs for the browser
        path: false, // Disable path for the browser
        os: false, // Disable os for the browser
      };
    }
    return config;
  },
};

export default nextConfig;

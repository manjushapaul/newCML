/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'picsum.photos', 'avatars.githubusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  webpack: (config, { isServer }) => {
    // Fix for @react-pdf/renderer in Next.js
    if (isServer) {
      config.externals = [...(config.externals || []), 'canvas', 'jsdom']
    }
    // Resolve canvas for client-side if needed
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
    }
    return config
  },
}

module.exports = nextConfig

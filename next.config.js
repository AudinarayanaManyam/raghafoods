// const { optimizeImage } = require('next/dist/server/image-optimizer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' to support dynamic API routes (/api/reviews)
  reactStrictMode: true,
  
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Uncomment the following lines to customize image handling

  // images: {
  //   formats: ['image/avif', 'image/webp'],
  //   deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  //   imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  //   qualities: [25, 50, 75, 85, 100],
  //   dangerouslyAllowSVG: true,
  // },
}

module.exports = nextConfig

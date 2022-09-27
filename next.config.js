/** @type {import("next").NextConfig} */

const nextConfig = {
  env: {
    RAINDROP_COLLECTION_ID: process.env.RAINDROP_COLLECTION_ID,
  },
  reactStrictMode: true,
  images: {
    deviceSizes: [576, 768, 992, 1200],
    domains: ['res.cloudinary.com'],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  eslint: {
    dirs: ['api', 'components', 'hooks', 'pages', 'styles', 'utils'],
  },
};

if (process.env.ANALYZE){
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true
  });
  module.exports = withBundleAnalyzer({ ...nextConfig });
} else {
  module.exports = nextConfig;
}
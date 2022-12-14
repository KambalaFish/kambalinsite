/** @type {import("next").NextConfig} */

const nextConfig = {
  env: {
    RAINDROP_COLLECTION_ID: process.env.RAINDROP_COLLECTION_ID,
  },
  reactStrictMode: true,
  images: {
    deviceSizes: [576, 768, 992, 1200],
    domains: ['res.cloudinary.com'],
    minimumCacheTTL: 259200
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  eslint: {
    dirs: ['api', 'components', 'hooks', 'pages', 'styles', 'utils'],
  },
  poweredByHeader: false
};

const nextConfigProd = {
  ...nextConfig,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compress: false
}

if (process.env.ANALYZE){
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true
  });
  return module.exports = withBundleAnalyzer({ ...nextConfig });
}

if (process.env.isProd==='true') {
  return module.exports = nextConfigProd;
} else {
  return module.exports = nextConfig;
}
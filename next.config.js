/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',

  basePath: '/Personal-Website',
  assetPrefix: '/Personal-Website/',

  images: {
    unoptimized: true,
    domains: ['firebasestorage.googleapis.com'],
  },
};


module.exports = nextConfig;
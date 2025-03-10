/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'vercel.app', 'github.com'],
    unoptimized: true
  },
  i18n: {
    locales: ['en', 'he'],
    defaultLocale: 'en',
    localeDetection: false
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig

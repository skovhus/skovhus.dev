const { withContentlayer } = require('next-contentlayer2')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => [{ source: '/cv', destination: '/about', permanent: true }],
}

module.exports = withContentlayer(nextConfig)

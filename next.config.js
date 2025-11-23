const { withContentlayer } = require('next-contentlayer2')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {},
  redirects: async () => [
    { source: '/cv', destination: '/about', permanent: true },
    { source: '/talks', destination: '/stream', permanent: true },
  ],
}

module.exports = withContentlayer(nextConfig)

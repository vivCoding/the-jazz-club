/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable double rerendering/console logs
  reactStrictMode: false,
  // To be able to 'next export'
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

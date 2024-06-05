/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:slug*',
        destination: 'https://100m-go-production.up.railway.app/:slug*',
      },
    ]
  },
}

export default nextConfig

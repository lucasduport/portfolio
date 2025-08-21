/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'en.wikipedia.org',
      'raw.githubusercontent.com',
      'elfsight.com',
      'r2.erweima.ai',
      'miro.medium.com',
      'pyimagesearch.com',
      'upload.wikimedia.org',
      'media.licdn.com',
      'cdn-assets.inwink.com'
      // add other domains as needed
    ],
  },
}

module.exports = nextConfig

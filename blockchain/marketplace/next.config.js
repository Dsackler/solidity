/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "thrangra.sirv.com" //put all places where images come from. I am only getting images from this place
    ]
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    loader: "default",
    domains: [
      "localhost",
      "openweathermap.org",
      "res.cloudinary.com",
      "cloudinary.com",
    ],
  },
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
};

module.exports = nextConfig;

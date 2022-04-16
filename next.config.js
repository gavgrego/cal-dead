/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    loader: "default",
    domains: ["localhost", "openweathermap.org"],
  },
};

module.exports = nextConfig;

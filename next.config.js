/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "m.media-amazon.com",
      "cdn.myanimelist.net",
      "https://via.placeholder.com/",
      "i.ytimg.com",
    ],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
module.exports = nextConfig;

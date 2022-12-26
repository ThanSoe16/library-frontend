/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  experimental: {
    outputStandalone: true,
    emotion: {
      sourceMap: true,
      autoLabel: "dev-only",
      labelFormat: "my-classname--[local]",
    },
  },
};

module.exports = nextConfig;

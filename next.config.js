/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
module.exports = {
  output: "export",
  basePath: "https://github.com/kudith/calculus2_project", // Ganti dengan nama repo Anda
  images: {
    loader: "akamai",
    path: "",
  },
  trailingSlash: true,
};

module.exports = nextConfig;

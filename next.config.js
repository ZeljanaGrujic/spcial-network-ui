/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "img.favpng.com",
      "thumbs.dreamstime.com",
      "authjs.dev",
      "platform-lookaside.fbsbx.com",
      "www.thebalancemoney.com",
    ],
  },
};

module.exports = nextConfig;

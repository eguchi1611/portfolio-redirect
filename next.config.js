/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://www.eguchi.me/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

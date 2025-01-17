/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/games",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;

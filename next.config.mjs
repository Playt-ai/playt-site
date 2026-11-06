/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // The old /about page duplicated /team; keep old links working.
    return [{ source: '/about', destination: '/team', permanent: true }];
  },
};

export default nextConfig;

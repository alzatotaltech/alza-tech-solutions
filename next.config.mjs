/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: { unoptimized: true },
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;

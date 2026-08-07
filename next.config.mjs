const staticExport = process.env.ALZA_DEPLOY_TARGET === 'static';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  ...(staticExport ? {
    output: 'export',
    images: { unoptimized: true },
  } : {}),
};

export default nextConfig;

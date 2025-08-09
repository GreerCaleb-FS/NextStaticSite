/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/NextStaticSite",
  assetPrefix: "/NextStaticSite/",
};

export default nextConfig;

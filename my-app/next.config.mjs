/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/NextStaticSite",
  assetPrefix: "/NextStaticSite/",
  trailingSlash: true,
};

export default nextConfig;

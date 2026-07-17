import type { NextConfig } from "next";

// GitHub Pages (project page) 用: NEXT_PUBLIC_BASE_PATH="/repo-name" を付けてビルドする
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
};

export default nextConfig;

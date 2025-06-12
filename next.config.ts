import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? "/your-repo-name" : "",
  trailingSlash: true, // important for GitHub Pages
  output: "export",
};

export default nextConfig;

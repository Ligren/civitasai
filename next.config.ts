import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static site on Cloudflare (Workers static assets); no server features used.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;

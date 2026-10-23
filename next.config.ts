import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: build produces plain HTML/CSS/JS in `out/` — no server needed.
  // Note: `cacheComponents`/`partialPrefetching` were intentionally removed because
  // they target a Node runtime with streaming and are not compatible with `output: "export"`.
  output: "export",

  images: {
    // next/image server optimization is unavailable in a static export (see
    // node_modules/next/dist/docs/01-app/02-guides/static-exports.md).
    unoptimized: true,
  },

  // Emit /about/index.html instead of /about.html for clean URLs on any static host.
  trailingSlash: true,

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

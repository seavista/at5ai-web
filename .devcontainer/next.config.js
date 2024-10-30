/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  basePath: '/at5ai-web', // Leading slash is required
  trailingSlash: true, // Ensures paths work correctly on GitHub Pages
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages
  },
};

module.exports = nextConfig;

module.exports = {
  // Use the assetPrefix property to serve the site from the correct directory
  assetPrefix: './',
  // Set up static exports for GitHub Pages deployment
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/gpts': { page: '/gpts' },
      '/top-picks': { page: '/top-picks' },
      '/submit': { page: '/submit' },
      // Define additional paths based on the pages present in the cloned website
    };
  },
  // Include any domains for external images to be used with the Next.js Image component
  images: {
    domains: ['supertools.therundown.ai'],
    unoptimized: true, // Disable the image optimization API
  },
  // Enable source maps for production builds to aid in debugging
  productionBrowserSourceMaps: true,
  // Additional Next.js configuration options can be added here as needed
  // Configure static HTML export
  output: 'standalone',
};

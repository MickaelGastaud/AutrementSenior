// next.config.js
const redirectsMapping = require('./redirects-mapping');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration des redirections
  async redirects() {
    return redirectsMapping;
  },
  
  // Configuration des images
  images: {
    // Autoriser les images locales et de ton ancien WordPress
    domains: ['autrementsenior.fr'],
    // Configuration pour les images optimisées
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Pour les images WordPress
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'autrementsenior.fr',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  
  // Optimisations supplémentaires
  compress: true,
  poweredByHeader: false,
  
  // Trailing slash: uniformiser les URLs (enlève le / à la fin)
  trailingSlash: false,
}

module.exports = nextConfig
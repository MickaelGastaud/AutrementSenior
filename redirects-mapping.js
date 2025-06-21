// redirects-mapping.js
const redirectsMapping = [
    // Redirections principales de ton site
    {
      source: '/solution-accompagnements-aidants',
      destination: '/solution',
      permanent: true
    },
    {
      source: '/presse-autrement-senior',
      destination: '/presse',
      permanent: true
    },
    {
      source: '/notre-podcast-aidants',
      destination: '/podcast',
      permanent: true
    },
    {
      source: '/a-propos',
      destination: '/',
      permanent: true
    },
    {
      source: '/mention-legales',
      destination: '/legal/mentions-legales',
      permanent: true
    },
    {
      source: '/politique-de-confidentialite',
      destination: '/legal/confidentialite',
      permanent: true
    },
    
    // Redirections WordPress communes
    {
      source: '/wp-admin',
      destination: '/',
      permanent: true
    },
    {
      source: '/wp-admin/:path*',
      destination: '/',
      permanent: true
    },
    {
      source: '/wp-login.php',
      destination: '/',
      permanent: true
    },
    {
      source: '/xmlrpc.php',
      destination: '/',
      permanent: true
    },
    {
      source: '/feed',
      destination: '/',
      permanent: true
    },
    {
      source: '/wp-content/:path*',
      destination: '/images/:path*',
      permanent: true
    },
    
    // Gestion des trailing slashes (/) à la fin
    {
      source: '/solution-accompagnements-aidants/',
      destination: '/solution',
      permanent: true
    },
    {
      source: '/presse-autrement-senior/',
      destination: '/presse',
      permanent: true
    },
    {
      source: '/notre-podcast-aidants/',
      destination: '/actualites/podcast',
      permanent: true
    },
    {
      source: '/a-propos/',
      destination: '/',
      permanent: true
    },
    {
      source: '/mention-legales/',
      destination: '/legal/mentions-legales',
      permanent: true
    },
    {
      source: '/politique-de-confidentialite/',
      destination: '/legal/confidentialite',
      permanent: true
    }
  ];
  
  module.exports = redirectsMapping;
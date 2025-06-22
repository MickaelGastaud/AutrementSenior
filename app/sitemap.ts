// app/sitemap.ts
import { MetadataRoute } from 'next'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'

function getRoutes(dir: string, baseRoute = ''): string[] {
  const routes: string[] = []
  
  try {
    const files = readdirSync(dir)
    
    files.forEach(file => {
      const filePath = join(dir, file)
      const stat = statSync(filePath)
      
      if (stat.isDirectory() && 
          !file.startsWith('_') && 
          !file.startsWith('(') && // Ignore les route groups
          file !== 'components' &&
          file !== 'api') {
        
        try {
          const dirContents = readdirSync(filePath)
          
          // Si c'est un dossier avec page.tsx
          if (dirContents.includes('page.tsx') || dirContents.includes('page.jsx')) {
            const route = `${baseRoute}/${file}`.replace(/\/+/g, '/')
            routes.push(route)
          }
          
          // Récursif pour les sous-dossiers
          routes.push(...getRoutes(filePath, `${baseRoute}/${file}`))
        } catch (e) {
          // Ignore les erreurs de lecture de sous-dossiers
        }
      }
    })
  } catch (error) {
    console.error('Erreur lors de la lecture des routes:', error)
  }
  
  return routes.filter(route => route !== '') // Nettoyer les routes vides
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://autrementsenior.fr'
  const appDir = join(process.cwd(), 'app')
  
  // Date de dernière modification
  const lastModified = new Date()
  
  // Récupérer toutes les routes dynamiquement
  const dynamicRoutes = getRoutes(appDir)
  
  // Priorités par type de page
  const getPriority = (url: string): number => {
    if (url === '/') return 1.0
    if (url.includes('/solution')) return 0.9
    if (url.includes('/franchise')) return 0.9
    if (url.includes('/contact')) return 0.8
    if (url.includes('/care-manager')) return 0.8
    if (url.includes('/cesu')) return 0.8
    if (url.includes('/apa')) return 0.8
    if (url.includes('/actualites')) return 0.7
    if (url.includes('/presse')) return 0.7
    if (url.includes('/valeurs')) return 0.6
    if (url.includes('/legal')) return 0.3
    return 0.5
  }
  
  // Fréquence de changement par type
  const getChangeFrequency = (url: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' => {
    if (url === '/') return 'weekly'
    if (url.includes('/actualites')) return 'weekly'
    if (url.includes('/presse')) return 'monthly'
    if (url.includes('/legal')) return 'yearly'
    if (url.includes('/valeurs')) return 'yearly'
    return 'monthly'
  }
  
  // Générer le sitemap
  const routes: MetadataRoute.Sitemap = [
    // Page d'accueil (toujours incluse)
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Pages dynamiques
    ...dynamicRoutes.map(route => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: getChangeFrequency(route),
      priority: getPriority(route),
    }))
  ]
  
  // Log pour debug (tu peux l'enlever en production)
  console.log(`📍 Sitemap généré avec ${routes.length} URLs`)
  
  return routes
}
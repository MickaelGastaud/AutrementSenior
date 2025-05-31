import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Autrement Senior - Care Management et Accompagnement Personnes Âgées',
    template: '%s | Autrement Senior'
  },
  description: 'Autrement Senior propose un accompagnement personnalisé pour vos proches âgés. Coordination soins, auxiliaire de vie, soutien aux aidants familiaux.',
  keywords: ['Care Management', 'accompagnement personnes âgées', 'coordination soins', 'auxiliaire de vie', 'aide à domicile seniors', 'aidants familiaux'],
  authors: [{ name: 'Caroline Gastaud' }],
  creator: 'Autrement Senior',
  publisher: 'Autrement Senior',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Autrement Senior - Care Management et Accompagnement Personnes Âgées',
    description: 'Accompagnement personnalisé pour vos proches âgés. Coordination soins, auxiliaire de vie, soutien aux aidants.',
    url: 'https://autrementsenior.fr',
    siteName: 'Autrement Senior',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autrement Senior - Care Management',
    description: 'Accompagnement personnalisé pour vos proches âgés',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="min-h-screen bg-white antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
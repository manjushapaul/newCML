import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { getOrganizationStructuredData } from '@/lib/structured-data'

// Inter font (display/headings) - modern, clean alternative to Geist
// Only preload critical weights to reduce warnings
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  // Only preload the most critical weight (400) to reduce warnings
  fallback: ['system-ui', 'sans-serif'],
})

// Manrope font (body/text)
// Only preload critical weights to reduce warnings
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  // Only preload the most critical weight (400) to reduce warnings
  fallback: ['system-ui', 'sans-serif'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://code-meld-labs.vercel.app'),
  title: {
    default: 'Code Meld Labs | Full-Stack Experts in Next.js, PHP & AI',
    template: '%s | Code Meld Labs',
  },
  description: '5-star rated freelance agency on Upwork specializing in Next.js, React, PHP, AI automation, and full-stack development. 100% success rate with 10+ reviews.',
  keywords: ['Next.js development', 'PHP development', 'AI automation', 'Full-stack agency', 'React development', 'Tailwind CSS', 'PostgreSQL', 'Upwork freelancers'],
  authors: [{ name: 'Code Meld Labs' }],
  creator: 'Code Meld Labs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://code-meld-labs.vercel.app',
    title: 'Code Meld Labs | Full-Stack Experts in Next.js, PHP & AI',
    description: '5-star rated freelance agency specializing in Next.js, React, PHP, and AI automation.',
    siteName: 'Code Meld Labs',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Code Meld Labs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code Meld Labs | Full-Stack Experts',
    description: '5-star rated freelance agency on Upwork',
    images: ['/og-image.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = getOrganizationStructuredData()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} antialiased bg-white`} suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

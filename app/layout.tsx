import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import GAEvents from '@/components/analytics/GAEvents'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'HostingHub - Find Your Perfect Web Hosting',
    template: '%s | HostingHub'
  },
  description: 'Expert web hosting reviews, comparisons, and guides to help you find the perfect hosting solution for your website.',
  keywords: ['web hosting', 'hosting reviews', 'hosting comparison', 'bluehost', 'hostinger', 'siteground'],
  authors: [{ name: 'HostingHub Team' }],
  creator: 'HostingHub',
  publisher: 'HostingHub',
  verification: {
    google: 'l-g4wLIKrROeA-nAcZkmIL8xWnkfLB_3LQeGM6juwAo',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hostinghub.com',
    title: 'HostingHub - Find Your Perfect Web Hosting',
    description: 'Expert web hosting reviews, comparisons, and guides to help you find the perfect hosting solution for your website.',
    siteName: 'HostingHub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HostingHub - Find Your Perfect Web Hosting',
    description: 'Expert web hosting reviews, comparisons, and guides to help you find the perfect hosting solution for your website.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#2563eb' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <GAEvents />
        </Suspense>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    try {
      ;(window as any).gtag?.('event', 'page_not_found', {
        page_path: window.location.pathname + window.location.search,
      })
    } catch {}
  }, [])

  return (
    <main className="container py-24 text-center">
      <h1 className="text-3xl font-bold mb-4">Page not found</h1>
      <p className="text-gray-600 mb-8">The page you are looking for doesn’t exist or has been moved.</p>
      <Link href="/" className="text-blue-600 hover:underline">Return home</Link>
    </main>
  )
}
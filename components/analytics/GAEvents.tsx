'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const GA_ID = 'G-F52B9Q69B9'

export default function GAEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Track route changes as page_view
  useEffect(() => {
    if (typeof window === 'undefined') return
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '')
    ;(window as any).gtag?.('config', GA_ID, {
      page_path: url,
    })

    // Track site search if common query keys are present
    const q = searchParams?.get('q') || searchParams?.get('query') || searchParams?.get('s')
    if (q) {
      ;(window as any).gtag?.('event', 'view_search_results', {
        search_term: q,
        page_location: url,
      })
    }
  }, [pathname, searchParams])

  // Global click tracking for outbound links, downloads, nav and tag clicks
  useEffect(() => {
    if (typeof window === 'undefined') return

    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null
      const anchor = target?.closest?.('a') as HTMLAnchorElement | null
      if (!anchor) return
      const href = anchor.getAttribute('href') || ''
      if (!href || href.startsWith('#') || anchor.getAttribute('rel') === 'nofollow' || anchor.hasAttribute('data-no-track')) return

      try {
        const url = new URL(href, window.location.href)
        const isExternal = url.origin !== window.location.origin
        const pathname = url.pathname || ''

        // Outbound link
        if (isExternal) {
          ;(window as any).gtag?.('event', 'click_outbound', {
            link_url: url.href,
            link_domain: url.hostname,
            method: 'click',
          })
          return
        }

        // File downloads by extension
        if (/\.(pdf|zip|csv|xlsx?|docx?|pptx?|txt)$/i.test(pathname)) {
          ;(window as any).gtag?.('event', 'file_download', {
            file_name: pathname.split('/').pop(),
            link_url: url.href,
          })
        }

        // Header/Footer menu clicks
        const inHeader = !!anchor.closest('header')
        const inFooter = !!anchor.closest('footer')
        if (inHeader || inFooter) {
          ;(window as any).gtag?.('event', 'menu_click', {
            menu_item: (anchor.textContent || pathname).trim(),
            menu_location: inHeader ? 'header' : 'footer',
          })
        }

        // Tag clicks (generic): if link path includes /tag or /tags, or marked via data-ga-event
        if (/\/(tag|tags)\//i.test(pathname)) {
          ;(window as any).gtag?.('event', 'tag_click', {
            tag: pathname.split('/').pop(),
          })
        }

        const gaEvent = anchor.dataset?.gaEvent
        if (gaEvent) {
          ;(window as any).gtag?.('event', gaEvent, {
            label: anchor.dataset?.gaLabel || (anchor.textContent || '').trim(),
            value: anchor.dataset?.gaValue,
          })
        }
      } catch {
        // ignore URL parse errors
      }
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
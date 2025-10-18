import Link from 'next/link'

type NavItem = { name: string; href: string }
const footerNavigation: Record<'about' | 'quickLinks' | 'legal', NavItem[]> = {
  about: [
    { name: 'Our Story', href: '/about' },
    { name: 'Why Trust Us', href: '/about#trust' },
    { name: 'Contact', href: '/contact' },
  ],
  quickLinks: [
    { name: 'Reviews', href: '/reviews' },
    { name: 'Comparisons', href: '/comparisons' },
    { name: 'Guides', href: '/guides' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              HostingHub
            </Link>
            <p className="text-sm leading-6 text-gray-600">
              Your trusted source for web hosting reviews, comparisons, and expert advice. 
              We help you find the perfect hosting solution for your website.
            </p>
            <p className="text-xs text-gray-500">
              <strong>Commission Disclosure:</strong> We may earn a commission when you purchase 
              hosting through our affiliate links. This helps us keep our content free and up-to-date, 
              but never affects our honest reviews and recommendations.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">About</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.about.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Quick Links</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.quickLinks.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            &copy; 2025 HostingHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link'
import { ArrowRight, Scale, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Web Hosting Comparisons',
  description: 'Side-by-side comparisons of the best web hosting providers. Compare features, pricing, and performance to find your perfect match.',
}

export default function ComparisonsPage() {
  const upcomingComparisons = [
    {
      title: 'Bluehost vs SiteGround vs Hostinger',
      description: 'Compare the three most popular WordPress hosting providers',
      category: 'WordPress Hosting'
    },
    {
      title: 'Best Budget Hosting: Under $5/month',
      description: 'Find the best affordable hosting without compromising quality',
      category: 'Budget Hosting'
    },
    {
      title: 'Premium Hosting Showdown',
      description: 'WP Engine vs Kinsta vs SiteGround for high-traffic sites',
      category: 'Premium Hosting'
    }
  ]

  return (
    <div className="py-12">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Web Hosting Comparisons
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Side-by-side comparisons of the best web hosting providers. 
            We analyze features, pricing, performance, and support to help you choose.
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 mb-12">
            <div className="text-center mb-8">
              <TrendingUp className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Comparisons Coming Soon
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We're working on detailed, side-by-side comparisons of the top hosting providers. 
                Our comparison tool will help you find the perfect hosting match based on your specific needs.
              </p>
            </div>
          </div>

          {/* Upcoming Comparisons */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What We're Working On
            </h3>
            <div className="grid md:grid-cols-1 gap-6">
              {upcomingComparisons.map((comparison, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                      <Scale className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-xl font-semibold text-gray-900">
                          {comparison.title}
                        </h4>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {comparison.category}
                        </span>
                      </div>
                      <p className="text-gray-600">
                        {comparison.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Help Choosing Now?
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                While we work on our comparison tool, check out our detailed reviews 
                to find the hosting provider that's right for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/reviews"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Browse Reviews
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Request Comparison
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

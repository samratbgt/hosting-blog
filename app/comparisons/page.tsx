import Link from 'next/link'
import { ArrowRight, Scale, Clock } from 'lucide-react'
import { getPostsByCategory } from '@/lib/mdx'

export const metadata = {
  title: 'Web Hosting Comparisons',
  description: 'Side-by-side comparisons of the best web hosting providers. Compare features, pricing, and performance to find your perfect match.',
}

export default function ComparisonsPage() {
  const comparisons = getPostsByCategory('comparisons')

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

        {/* Comparison Posts Grid */}
        {comparisons.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {comparisons.map((comparison) => (
              <Link
                key={comparison.slug}
                href={`/comparisons/${comparison.slug}`}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <Scale className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{comparison.readingTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {comparison.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {comparison.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {comparison.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 text-center">
              <Scale className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Comparisons Coming Soon
              </h2>
              <p className="text-gray-700 mb-6">
                We're working on detailed comparisons. Check back soon!
              </p>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need More Help Choosing?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Check out our detailed individual hosting reviews for in-depth analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Browse All Reviews
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
  )
}

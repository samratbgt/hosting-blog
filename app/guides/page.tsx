import Link from 'next/link'
import { ArrowRight, BookOpen, Lightbulb } from 'lucide-react'

export const metadata = {
  title: 'Web Hosting Guides',
  description: 'Expert guides and tutorials to help you understand web hosting, choose the right provider, and optimize your website performance.',
}

export default function GuidesPage() {
  const upcomingGuides = [
    {
      title: 'Complete Beginner\'s Guide to Web Hosting',
      description: 'Everything you need to know about web hosting, from basics to advanced concepts',
      category: 'Beginner',
      topics: ['What is web hosting?', 'Types of hosting', 'How to choose', 'Getting started']
    },
    {
      title: 'WordPress Hosting Optimization Guide',
      description: 'How to choose and optimize WordPress hosting for maximum performance',
      category: 'WordPress',
      topics: ['WordPress requirements', 'Performance optimization', 'Security tips', 'Plugin recommendations']
    },
    {
      title: 'E-commerce Hosting Requirements',
      description: 'Essential hosting features and requirements for online stores',
      category: 'E-commerce',
      topics: ['SSL certificates', 'Payment processing', 'Security features', 'Scalability planning']
    },
    {
      title: 'Website Migration Guide',
      description: 'Step-by-step guide to migrating your website to a new hosting provider',
      category: 'Technical',
      topics: ['Pre-migration checklist', 'Migration process', 'DNS changes', 'Post-migration testing']
    }
  ]

  return (
    <div className="py-12">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Web Hosting Guides
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert guides and tutorials to help you understand web hosting, 
            make informed decisions, and get the most out of your hosting provider.
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 mb-12">
            <div className="text-center mb-8">
              <BookOpen className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Guides Coming Soon
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We're creating detailed, step-by-step guides to help you navigate the world of web hosting. 
                From beginner basics to advanced optimization techniques.
              </p>
            </div>
          </div>

          {/* Upcoming Guides */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Guides We're Working On
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingGuides.map((guide, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                      <Lightbulb className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {guide.category}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {guide.title}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        {guide.description}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 mb-2">What we'll cover:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {guide.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Tips Section */}
          <div className="bg-blue-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Quick Hosting Tips
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">💡 Choosing Your First Host</h4>
                <p className="text-gray-700 text-sm">
                  Start with shared hosting if you're new to websites. It's affordable and perfect for learning. 
                  You can always upgrade later as your site grows.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">⚡ Performance Matters</h4>
                <p className="text-gray-700 text-sm">
                  Website speed affects both user experience and SEO rankings. Look for hosts with SSD storage 
                  and CDN integration for better performance.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">🔒 Security First</h4>
                <p className="text-gray-700 text-sm">
                  Always choose a host that includes SSL certificates, regular backups, and malware protection. 
                  Your website's security is crucial.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">📞 Support Quality</h4>
                <p className="text-gray-700 text-sm">
                  24/7 support isn't just about availability - it's about expertise. Look for hosts with 
                  knowledgeable support teams, not just chat bots.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Hosting Help Right Now?
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                While we work on our comprehensive guides, check out our detailed reviews 
                or get in touch with specific questions.
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
                  Ask a Question
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

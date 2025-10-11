import { Mail, Clock, MessageCircle } from 'lucide-react'

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the HostingHub team. We\'re here to help with your web hosting questions and suggestions.',
}

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Have questions about our reviews or suggestions for hosting providers to test? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-700 mb-2">
                    For general inquiries, review suggestions, or partnership opportunities:
                  </p>
                  <a 
                    href="mailto:bhagatpaaji@gmail.com"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    bhagatpaaji@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-gray-700">
                    We typically respond to emails within 24-48 hours during business days. 
                    For urgent matters, please mention "URGENT" in your subject line.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What We'd Love to Hear</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Questions about our reviews</li>
                    <li>• Hosting provider suggestions</li>
                    <li>• Your hosting experiences</li>
                    <li>• Partnership opportunities</li>
                    <li>• Feedback on our content</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Questions?</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How do you test hosting providers?</h3>
                  <p className="text-gray-700 text-sm">
                    We sign up for real accounts, test performance over months, and evaluate features, 
                    support, and value. Check our <a href="/about" className="text-blue-600 hover:text-blue-800">About page</a> for details.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Do you accept review requests?</h3>
                  <p className="text-gray-700 text-sm">
                    Yes! We're always looking for new hosting providers to review. Email us with your suggestion, 
                    and we'll consider it for our testing queue.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Are your reviews sponsored?</h3>
                  <p className="text-gray-700 text-sm">
                    No. While we may earn affiliate commissions, our reviews are never influenced by potential earnings. 
                    We maintain editorial independence in all our content.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How often do you update reviews?</h3>
                  <p className="text-gray-700 text-sm">
                    We review and update our content regularly, typically every 6-12 months or when 
                    significant changes occur with hosting providers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Looking for Hosting Recommendations?
            </h3>
            <p className="text-gray-700 mb-6">
              Browse our comprehensive reviews and comparisons to find the perfect hosting solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/reviews"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Browse Reviews
              </a>
              <a
                href="/comparisons"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Compare Hosts
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

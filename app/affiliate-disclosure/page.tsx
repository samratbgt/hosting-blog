import { AlertCircle, DollarSign, Shield } from 'lucide-react'

export const metadata = {
  title: 'Affiliate Disclosure',
  description: 'HostingHub\'s affiliate disclosure policy. Learn about how we earn commissions and maintain editorial independence.',
}

export default function AffiliateDisclosurePage() {
  return (
    <div className="py-12">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Affiliate Disclosure
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Transparency is important to us. Here's how we earn money and maintain our editorial independence.
          </p>
        </div>

        <div className="prose max-w-none">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Important Notice</h3>
                <p className="text-blue-800">
                  HostingHub participates in affiliate marketing programs. When you click on certain links 
                  and make a purchase, we may earn a commission at no additional cost to you.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Affiliate Marketing Works</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When you click on an affiliate link on our website and make a purchase from a hosting provider, 
              we may receive a commission. This commission comes from the hosting company, not from you - 
              you don't pay any extra for using our links.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              These commissions help us cover the costs of running HostingHub, including:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
              <li>Purchasing hosting accounts for testing and review purposes</li>
              <li>Website hosting and maintenance costs</li>
              <li>Tools and software for performance testing</li>
              <li>Time spent researching and writing comprehensive reviews</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What This Means For You</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Extra Cost</h3>
                  <p className="text-gray-700">
                    Using our affiliate links doesn't cost you anything extra. You pay the same price 
                    whether you use our link or go directly to the hosting provider.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sometimes Better Deals</h3>
                  <p className="text-gray-700">
                    In many cases, our affiliate links provide access to exclusive discounts and 
                    special offers that aren't available elsewhere.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Editorial Independence</h2>
            <div className="bg-gray-50 rounded-xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Most importantly:</strong> Our reviews and recommendations are never influenced 
                by potential affiliate earnings. We maintain strict editorial independence and always 
                provide honest, unbiased opinions.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  We test hosting providers with our own money before writing reviews
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  We highlight both pros and cons in every review
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  We don't recommend hosting providers solely based on commission rates
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  We regularly update reviews to reflect current performance and features
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Transparency in Action</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We believe in complete transparency about our affiliate relationships:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>All affiliate links are clearly marked</li>
              <li>We disclose our affiliate relationships in relevant content</li>
              <li>We provide this comprehensive disclosure page</li>
              <li>We're always available to answer questions about our practices</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you have any questions about our affiliate relationships or how we maintain editorial 
              independence, please don't hesitate to <a href="/contact" className="text-blue-600 hover:text-blue-800 underline">contact us</a>. 
              We're committed to transparency and are happy to discuss our practices.
            </p>
          </section>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Thank You for Your Support
            </h3>
            <p className="text-gray-700 leading-relaxed">
              By using our affiliate links, you're helping us continue to provide free, comprehensive 
              hosting reviews and guides. We appreciate your support and trust in our recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

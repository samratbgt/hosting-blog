export const metadata = {
  title: 'About HostingHub',
  description: 'Learn about HostingHub - your trusted source for honest web hosting reviews and comparisons.',
}

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About HostingHub
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your trusted source for web hosting reviews and comparisons.
          </p>
        </div>

        <div className="prose max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              HostingHub helps you find the right web hosting provider. We provide honest reviews 
              and comparisons to make your decision easier.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We test and review popular web hosting providers, comparing their:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
              <li>Performance and speed</li>
              <li>Pricing and value</li>
              <li>Features and tools</li>
              <li>Customer support</li>
              <li>Uptime and reliability</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Honest Reviews</h3>
                <p className="text-gray-700">
                  We provide unbiased reviews based on real testing and experience.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Up-to-Date Information</h3>
                <p className="text-gray-700">
                  We regularly update our reviews to reflect current pricing and features.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Comparisons</h3>
                <p className="text-gray-700">
                  Compare multiple hosting providers side-by-side to find the best option for your needs.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Have questions or suggestions? 
              <a href="/contact" className="text-blue-600 hover:text-blue-800 underline ml-1">
                Get in touch with us
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

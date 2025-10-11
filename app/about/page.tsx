import { CheckCircle, Users, Award, Clock } from 'lucide-react'

export const metadata = {
  title: 'About HostingHub',
  description: 'Learn about HostingHub\'s mission to help you find the perfect web hosting solution through expert reviews and honest comparisons.',
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
            Your trusted source for web hosting reviews, comparisons, and expert advice.
          </p>
        </div>

        <div className="prose max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At HostingHub, we believe that choosing the right web hosting provider shouldn't be overwhelming. 
              With hundreds of hosting companies making bold claims, it can be difficult to separate fact from fiction. 
              That's where we come in.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is simple: to provide honest, comprehensive, and up-to-date reviews of web hosting providers 
              to help you make informed decisions for your website. We cut through the marketing noise to give you 
              the real facts about performance, features, support, and value.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Trust Us?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Hands-On Testing</h3>
                  <p className="text-gray-700">
                    We don't just read marketing materials. Our team actually signs up for hosting accounts, 
                    builds websites, and tests performance, support, and features firsthand.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-gray-700">
                    Our reviewers have years of experience in web development, system administration, 
                    and digital marketing. We know what makes hosting great.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Unbiased Reviews</h3>
                  <p className="text-gray-700">
                    While we may earn commissions from affiliate links, our reviews are never influenced 
                    by potential earnings. We tell you the truth, even when it's not flattering.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Regular Updates</h3>
                  <p className="text-gray-700">
                    The hosting industry changes rapidly. We regularly revisit our reviews to ensure 
                    they reflect current performance, features, and pricing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Review Process</h2>
            <div className="bg-gray-50 rounded-xl p-8">
              <ol className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Account Setup</h4>
                    <p className="text-gray-700">We sign up for real hosting accounts using our own credit cards.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Performance Testing</h4>
                    <p className="text-gray-700">We test website loading speeds, uptime, and server response times over several months.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Feature Analysis</h4>
                    <p className="text-gray-700">We explore control panels, test backup systems, and evaluate security features.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    4
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Support Evaluation</h4>
                    <p className="text-gray-700">We contact customer support multiple times to test response times and solution quality.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    5
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Comprehensive Review</h4>
                    <p className="text-gray-700">We compile our findings into detailed, honest reviews with clear pros and cons.</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Have questions about our reviews? Want to suggest a hosting provider for us to test? 
              We'd love to hear from you.
            </p>
            <p className="text-lg text-gray-700">
              <a href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                Contact us
              </a> and we'll get back to you as soon as possible.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

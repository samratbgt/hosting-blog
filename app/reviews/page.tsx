import Link from 'next/link'
import Image from 'next/image'
import { Star, Clock, User, Calendar } from 'lucide-react'
import { getPostsByCategory } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'

export const metadata = {
  title: 'Web Hosting Reviews',
  description: 'Comprehensive reviews of the best web hosting providers. Find honest, expert opinions on performance, features, and pricing.',
}

export default function ReviewsPage() {
  const reviews = getPostsByCategory('reviews')

  return (
    <div className="py-12">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Web Hosting Reviews
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In-depth, unbiased reviews of the top web hosting providers. 
            We test performance, features, support, and value to help you make the right choice.
          </p>
        </div>

        {reviews.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No reviews available yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <article
                key={review.slug}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Feature Image or Fallback */}
                {review.image ? (
                  <div className="aspect-video rounded-t-xl overflow-hidden">
                    <Image
                      src={review.image}
                      alt={review.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-600 rounded-t-xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-3xl font-bold mb-2">
                        {review.title.split(' ')[0]}
                      </div>
                      <div className="text-blue-100">Web Hosting</div>
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Review
                    </span>
                    {review.rating && (
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-700">
                          {review.rating}/5
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link 
                      href={`/reviews/${review.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {review.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {review.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{review.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{review.readingTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(review.date)}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {review.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/reviews/${review.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Read Full Review →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

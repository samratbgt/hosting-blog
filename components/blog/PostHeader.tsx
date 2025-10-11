import { User, Calendar, Clock, Star } from 'lucide-react'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

interface PostHeaderProps {
  title: string
  description: string
  author: string
  date: string
  readingTime: string
  rating?: number
  image?: string
}

export default function PostHeader({
  title,
  description,
  author,
  date,
  readingTime,
  rating,
  image
}: PostHeaderProps) {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <Star className="h-5 w-5 fill-yellow-400/50 text-yellow-400" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={i + fullStars} className="h-5 w-5 text-gray-300" />
        ))}
        <span className="ml-2 text-sm font-medium text-gray-700">
          {rating}/5
        </span>
      </div>
    )
  }

  return (
    <div className="border-b border-gray-200 pb-8 mb-8">
      {/* Feature Image */}
      {image && (
        <div className="mb-8 rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={800}
            height={400}
            className="w-full h-64 md:h-80 object-cover"
            priority
          />
        </div>
      )}
      
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h1>
      
      <p className="text-xl text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>{author}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(date)}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>{readingTime}</span>
        </div>
        
        {rating && (
          <div className="flex items-center">
            {renderStars(rating)}
          </div>
        )}
      </div>
    </div>
  )
}

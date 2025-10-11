'use client'

import { ExternalLink } from 'lucide-react'

interface AffiliateButtonProps {
  hostName: string
  hostId: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function AffiliateButton({ 
  hostName, 
  hostId, 
  className = '',
  size = 'md'
}: AffiliateButtonProps) {
  const handleClick = () => {
    // Track the click and redirect through our API
    window.open(`/api/go/${hostId}`, '_blank', 'noopener,noreferrer')
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <button
      onClick={handleClick}
      className={`
        inline-flex items-center gap-2 
        bg-blue-600 hover:bg-blue-700 
        text-white font-semibold rounded-lg 
        transition-all duration-200 
        hover:shadow-lg hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${sizeClasses[size]}
        ${className}
      `}
    >
      Visit {hostName}
      <ExternalLink className="h-4 w-4" />
    </button>
  )
}

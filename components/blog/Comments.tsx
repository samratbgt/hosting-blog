'use client'

import { useState } from 'react'
import { MessageCircle, ThumbsUp, Reply, Flag, User } from 'lucide-react'

interface Comment {
  id: string
  author: string
  email: string
  content: string
  timestamp: string
  likes: number
  replies?: Comment[]
  isVerified?: boolean
}

interface CommentsProps {
  postSlug: string
  initialComments?: Comment[]
}

export default function Comments({ postSlug, initialComments = [] }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [newComment, setNewComment] = useState({
    author: '',
    email: '',
    content: ''
  })
  const [replyTo, setReplyTo] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.author || !newComment.email || !newComment.content) return

    setIsSubmitting(true)
    
    // Simulate API call
    const comment: Comment = {
      id: Date.now().toString(),
      author: newComment.author,
      email: newComment.email,
      content: newComment.content,
      timestamp: new Date().toISOString(),
      likes: 0,
      replies: []
    }

    setComments(prev => [comment, ...prev])
    setNewComment({ author: '', email: '', content: '' })
    setIsSubmitting(false)
  }

  const handleLike = (commentId: string) => {
    setComments(prev => prev.map(comment => 
      comment.id === commentId 
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ))
  }

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4">
      {/* Comments Header */}
      <div className="flex items-center gap-3 mb-8">
        <MessageCircle className="h-6 w-6 text-blue-600" />
        <h3 className="text-2xl font-bold text-gray-900">
          Comments ({comments.length})
        </h3>
      </div>

      {/* Comment Form */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8 shadow-sm">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Leave a Comment</h4>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                value={newComment.author}
                onChange={(e) => setNewComment(prev => ({ ...prev, author: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                value={newComment.email}
                onChange={(e) => setNewComment(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Comment *
            </label>
            <textarea
              value={newComment.content}
              onChange={(e) => setNewComment(prev => ({ ...prev, content: e.target.value }))}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Share your thoughts about this hosting provider..."
              required
            />
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Your email won't be published. Required fields are marked *
            </p>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Posting...' : 'Post Comment'}
            </button>
          </div>
        </form>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <div className="text-center py-12">
            <MessageCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-500 mb-2">No comments yet</h4>
            <p className="text-gray-400">Be the first to share your experience!</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              {/* Comment Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2">
                      <h5 className="font-semibold text-gray-900">{comment.author}</h5>
                      {comment.isVerified && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{formatDate(comment.timestamp)}</p>
                  </div>
                </div>
                
                <button className="text-gray-400 hover:text-gray-600">
                  <Flag className="h-4 w-4" />
                </button>
              </div>
              
              {/* Comment Content */}
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed">{comment.content}</p>
              </div>
              
              {/* Comment Actions */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleLike(comment.id)}
                  className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <ThumbsUp className="h-4 w-4" />
                  <span className="text-sm">{comment.likes}</span>
                </button>
                
                <button
                  onClick={() => setReplyTo(comment.id)}
                  className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <Reply className="h-4 w-4" />
                  <span className="text-sm">Reply</span>
                </button>
              </div>
              
              {/* Replies */}
              {comment.replies && comment.replies.length > 0 && (
                <div className="mt-6 pl-6 border-l-2 border-gray-100 space-y-4">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <h6 className="font-medium text-gray-900">{reply.author}</h6>
                          <p className="text-xs text-gray-500">{formatDate(reply.timestamp)}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm">{reply.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Comment Guidelines */}
      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="font-semibold text-blue-900 mb-3">💬 Comment Guidelines</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Share your genuine experience with hosting providers</li>
          <li>• Be respectful and constructive in your feedback</li>
          <li>• Avoid spam, promotional content, or affiliate links</li>
          <li>• Comments are moderated and may take time to appear</li>
        </ul>
      </div>
    </div>
  )
}

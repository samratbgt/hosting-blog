'use client'

import { useState } from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage('Please enter your email address')
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    
    try {
      // Get EmailJS credentials from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      // Check if credentials are configured
      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS not configured:', { serviceId: !!serviceId, templateId: !!templateId, publicKey: !!publicKey })
        setStatus('error')
        setMessage('Newsletter service is not configured. Please contact the administrator.')
        return
      }

      // Check for placeholder values
      if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        console.error('EmailJS credentials are placeholder values')
        setStatus('error')
        setMessage('Newsletter service is not properly configured.')
        return
      }

      console.log('Sending email with EmailJS...')
      
      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          user_email: email,
          to_email: email, // Send to subscriber
          from_name: 'HostingHub',
        },
        publicKey
      )

      console.log('EmailJS response:', result)

      setStatus('success')
      setMessage('Thank you for subscribing! Check your email for confirmation.')
      setEmail('')
    } catch (error: any) {
      console.error('EmailJS error:', error)
      
      // Provide more specific error messages
      let errorMessage = 'Something went wrong. Please try again.'
      
      if (error?.text) {
        errorMessage = `Error: ${error.text}`
      } else if (error?.message) {
        errorMessage = error.message
      }
      
      setStatus('error')
      setMessage(errorMessage)
    }
  }

  return (
    <section className="bg-blue-600 py-16">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="h-12 w-12 text-blue-200 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Hosting News
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Get the latest hosting reviews, deals, and expert tips delivered to your inbox weekly.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          
          {message && (
            <div className={`mt-4 flex items-center justify-center gap-2 text-sm ${
              status === 'success' ? 'text-green-200' : 'text-red-200'
            }`}>
              {status === 'success' ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              {message}
            </div>
          )}
          
          <p className="text-blue-200 text-sm mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}

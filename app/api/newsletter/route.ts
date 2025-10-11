import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Please enter a valid email address' },
        { status: 400 }
      )
    }
    
    // Log the subscription (in a real app, you'd integrate with an email service)
    console.log('Newsletter subscription:', {
      email,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
    })
    
    // Here you would typically:
    // 1. Add the email to your email service (Mailchimp, ConvertKit, etc.)
    // 2. Send a confirmation email
    // 3. Store in database
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    return NextResponse.json(
      { 
        message: 'Successfully subscribed! Check your email for confirmation.',
        success: true 
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

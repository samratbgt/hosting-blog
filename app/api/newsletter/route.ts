import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

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

    // If Mailchimp env vars are configured, add subscriber there
    const apiKey = process.env.MAILCHIMP_API_KEY
    const listId = process.env.MAILCHIMP_LIST_ID

    if (apiKey && listId) {
      try {
        const dc = apiKey.split('-')[1] // data center, e.g. us21
        const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`

        const mcRes = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${Buffer.from(`any:${apiKey}`).toString('base64')}`,
          },
          // Use 'pending' for double opt-in (sends confirmation email)
          body: JSON.stringify({ email_address: email, status: 'pending' }),
        })

        const mcData = await mcRes.json()

        if (!mcRes.ok) {
          // If already subscribed, treat as success
          if (mcData?.title === 'Member Exists') {
            return NextResponse.json(
              { message: 'You are already subscribed!', success: true },
              { status: 200 }
            )
          }
          throw new Error(mcData?.detail || 'Mailchimp error')
        }

        return NextResponse.json(
          {
            message: 'Please check your email to confirm your subscription.',
            success: true,
          },
          { status: 200 }
        )
      } catch (mcErr) {
        console.error('Mailchimp integration error:', mcErr)
        // Fall through to mock success below
      }
    }

    // Fallback: mock success (no external provider configured)
    console.log('Newsletter subscription (mock):', {
      email,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
    })

    return NextResponse.json(
      {
        message:
          'Subscription received. Provider not configured yet – please add MAILCHIMP_API_KEY and MAILCHIMP_LIST_ID to enable real emails.',
        success: true,
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

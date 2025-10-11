import { NextRequest, NextResponse } from 'next/server'
import { getAffiliateHost } from '@/lib/affiliates'

interface RouteParams {
  params: {
    host: string
  }
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  const { host } = params
  
  try {
    // Get affiliate host information
    const affiliateHost = getAffiliateHost(host)
    
    if (!affiliateHost) {
      return NextResponse.json(
        { error: 'Host not found' },
        { status: 404 }
      )
    }
    
    // Log the click for analytics
    const clickData = {
      hostId: host,
      hostName: affiliateHost.name,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      referer: request.headers.get('referer'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
    }
    
    console.log('Affiliate click tracked:', clickData)
    
    // In a real application, you would:
    // 1. Store this data in your analytics database
    // 2. Track conversion rates
    // 3. Generate reports for affiliate performance
    
    // Redirect to the affiliate URL
    return NextResponse.redirect(affiliateHost.url, 302)
    
  } catch (error) {
    console.error('Affiliate redirect error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

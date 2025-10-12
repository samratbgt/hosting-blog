import { NextResponse } from 'next/server'

export async function GET() {
  const config = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    // Check if they exist (boolean)
    hasServiceId: Boolean(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID),
    hasTemplateId: Boolean(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID),
    hasPublicKey: Boolean(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY),
    // Show partial values for debugging (first 5 chars)
    serviceIdPreview: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.substring(0, 10) + '...',
    templateIdPreview: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.substring(0, 10) + '...',
    publicKeyPreview: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.substring(0, 10) + '...',
    allConfigured: Boolean(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
  }

  return NextResponse.json(config)
}

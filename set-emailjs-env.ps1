# EmailJS Environment Variables Setup for Vercel
# Run this script to automatically set environment variables

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  EmailJS Vercel Setup Script" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Prompt for EmailJS credentials
Write-Host "Please enter your EmailJS credentials:" -ForegroundColor Yellow
Write-Host "(Get these from https://dashboard.emailjs.com/)" -ForegroundColor Gray
Write-Host ""

$serviceId = Read-Host "Service ID (e.g., service_abc1234)"
$templateId = Read-Host "Template ID (e.g., template_xyz5678)"
$publicKey = Read-Host "Public Key (e.g., AbCdEf123456)"

Write-Host ""
Write-Host "Setting up environment variables..." -ForegroundColor Green

# Check if vercel CLI is installed
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue

if (-not $vercelInstalled) {
    Write-Host ""
    Write-Host "⚠️  Vercel CLI not found. Installing..." -ForegroundColor Yellow
    npm install -g vercel
}

# Set environment variables using Vercel CLI
Write-Host ""
Write-Host "Adding NEXT_PUBLIC_EMAILJS_SERVICE_ID..." -ForegroundColor Cyan
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID production

Write-Host ""
Write-Host "Adding NEXT_PUBLIC_EMAILJS_TEMPLATE_ID..." -ForegroundColor Cyan  
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID production

Write-Host ""
Write-Host "Adding NEXT_PUBLIC_EMAILJS_PUBLIC_KEY..." -ForegroundColor Cyan
vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY production

Write-Host ""
Write-Host "✅ Environment variables added!" -ForegroundColor Green
Write-Host ""
Write-Host "Now triggering a new deployment..." -ForegroundColor Yellow
vercel --prod

Write-Host ""
Write-Host "✅ Done! Wait 2-3 minutes for deployment to complete." -ForegroundColor Green
Write-Host ""
Write-Host "Then test: https://hostinghub.vercel.app/api/emailjs-check" -ForegroundColor Cyan

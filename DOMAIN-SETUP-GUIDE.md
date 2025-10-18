# Custom Domain Setup Guide for HostingHub

## Step 1: Buy a Domain
- Namecheap, GoDaddy, Hostinger, or Porkbun
- Example: `hostinghub.com`

## Step 2: Add Domain to Vercel

1. Go to Vercel Dashboard: https://vercel.com/dashboard
2. Select your `hosting-blog` project
3. Go to **Settings** → **Domains**
4. Click **Add Domain**
5. Enter your domain: `hostinghub.com`
6. Click **Add**

Vercel will show you DNS records to add.

## Step 3: Add DNS Records to Your Domain Provider

### For Root Domain (hostinghub.com):
```
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto
```

### For WWW Subdomain (www.hostinghub.com):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto
```

## Step 4: Wait for DNS Propagation
- Usually takes 5-30 minutes
- Can take up to 48 hours
- Vercel will show "Valid Configuration" when done

## Step 5: Set Up Email with Zoho/ImprovMX/Cloudflare

### Zoho Mail DNS Records (Free - 5 users):

Add these MX records:
```
Type: MX
Priority: 10
Value: mx.zoho.com

Type: MX
Priority: 20
Value: mx2.zoho.com

Type: MX
Priority: 50
Value: mx3.zoho.com
```

Add TXT record for verification:
```
Type: TXT
Name: @
Value: (Zoho will provide this)
```

### ImprovMX DNS Records (Free - Email Forwarding):

```
Type: MX
Priority: 10
Value: mx1.improvmx.com

Type: MX
Priority: 20
Value: mx2.improvmx.com
```

### Cloudflare Email Routing (Free):

If your domain is on Cloudflare:
1. Go to Email → Email Routing
2. Click "Enable Email Routing"
3. Cloudflare will automatically add DNS records
4. Add destination email (your Gmail)
5. Create custom addresses

## Professional Email Addresses You Can Create:

- contact@hostinghub.com
- support@hostinghub.com
- admin@hostinghub.com
- hello@hostinghub.com
- info@hostinghub.com

## Testing:

After DNS propagation:
1. Visit your domain: https://hostinghub.com
2. Should show your blog
3. Test email by sending to your new address
4. Check if it forwards to your Gmail (if using ImprovMX/Cloudflare)
5. Or login to Zoho Mail to check inbox

## Updating Contact Page:

Once email is working, update the contact page email:
```tsx
// In app/contact/page.tsx
<a href="mailto:contact@hostinghub.com">
  contact@hostinghub.com
</a>
```

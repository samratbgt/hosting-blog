# HostingHub Setup Guide

This guide will walk you through setting up your complete Next.js 14 web hosting affiliate blog.

## 🚀 Quick Start

1. **Navigate to the project directory**
   ```bash
   cd hosting-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the setup script (optional)**
   ```bash
   node scripts/setup.js
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure Overview

```
hosting-blog/
├── 📱 app/                    # Next.js 14 App Router
│   ├── layout.tsx            # Root layout with Inter font
│   ├── page.tsx              # Homepage with hero section
│   ├── globals.css           # Tailwind CSS styles
│   ├── 📝 reviews/           # Review pages
│   │   ├── page.tsx          # Reviews listing
│   │   └── [slug]/page.tsx   # Individual review pages
│   ├── 🔄 comparisons/       # Comparison pages
│   ├── 📚 guides/            # Guide pages
│   ├── ℹ️ about/             # About page
│   ├── 📞 contact/           # Contact page
│   ├── 📋 affiliate-disclosure/ # Legal disclosure
│   └── 🔌 api/               # API routes
│       ├── newsletter/       # Newsletter signup
│       └── go/[host]/        # Affiliate link tracking
├── 🧩 components/
│   ├── layout/               # Header & Footer
│   └── blog/                 # Blog components
├── 📄 content/               # MDX content files
│   ├── reviews/              # Review MDX files
│   ├── comparisons/          # Comparison MDX files
│   └── guides/               # Guide MDX files
├── 🛠️ lib/                   # Utility functions
│   ├── mdx.ts               # MDX processing
│   ├── affiliates.ts        # Affiliate configuration
│   └── utils.ts             # General utilities
└── 🖼️ public/
    └── images/              # Static images and logos
```

## 🎨 Customization Guide

### 1. Brand Customization

**Update Site Name and Colors:**
- Edit `app/layout.tsx` for site metadata
- Modify `components/layout/Header.tsx` for logo text
- Customize colors in `tailwind.config.ts`

**Example - Change Primary Color:**
```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      primary: {
        600: '#059669', // Change to green
        // ... other shades
      }
    }
  }
}
```

### 2. Affiliate Configuration

**Add New Hosting Providers:**
```typescript
// lib/affiliates.ts
export const affiliateHosts = {
  'your-host': {
    name: 'Your Host Name',
    url: 'https://your-affiliate-link.com',
    logo: '/images/logos/your-host.png',
    description: 'Your host description'
  }
}
```

### 3. Content Management

**Adding New Reviews:**
1. Create `content/reviews/host-name.mdx`
2. Add frontmatter:
   ```yaml
   ---
   title: "Host Review 2025"
   description: "Review description"
   date: "2025-01-01"
   author: "Your Team"
   category: "reviews"
   tags: ["hosting", "review"]
   featured: true
   rating: 4.5
   ---
   ```
3. Write your content using MDX syntax

**Using Custom Components:**
```mdx
<ProsConsList 
  pros={["Fast loading", "Great support"]}
  cons={["Higher price", "Limited storage"]}
/>

<AffiliateButton hostName="Bluehost" hostId="bluehost" />
```

## 🔧 Environment Configuration

**Create `.env.local`:**
```bash
# Copy from example
cp .env.example .env.local
```

**Essential Variables:**
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=YourSiteName
```

## 📊 Analytics & Tracking

### Google Analytics Setup
1. Add your GA4 measurement ID to `.env.local`
2. Install Google Analytics package:
   ```bash
   npm install @next/third-parties
   ```
3. Add to `app/layout.tsx`:
   ```tsx
   import { GoogleAnalytics } from '@next/third-parties/google'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
         </body>
       </html>
     )
   }
   ```

### Affiliate Click Tracking
The built-in tracking system logs:
- Click timestamps
- Referrer information
- User agent data
- Host performance metrics

Extend tracking in `app/api/go/[host]/route.ts` for your analytics platform.

## 🖼️ Image Management

**Add Hosting Provider Logos:**
1. Add logo files to `public/images/logos/`
2. Use format: `host-name.png` (matches affiliate host ID)
3. Recommended size: 200x100px
4. Optimize images for web (use tools like TinyPNG)

**Image Optimization:**
```tsx
import Image from 'next/image'

<Image
  src="/images/logos/bluehost.png"
  alt="Bluehost Logo"
  width={200}
  height={100}
  className="object-contain"
/>
```

## 📧 Newsletter Integration

### Mailchimp Integration
1. Get your Mailchimp API key and List ID
2. Add to `.env.local`:
   ```env
   MAILCHIMP_API_KEY=your_api_key
   MAILCHIMP_LIST_ID=your_list_id
   ```
3. Update `app/api/newsletter/route.ts` with Mailchimp API calls

### ConvertKit Integration
```typescript
// app/api/newsletter/route.ts
const response = await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    api_key: process.env.CONVERTKIT_API_KEY,
    email: email,
  }),
})
```

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically
4. Add environment variables in Vercel dashboard

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables
4. Enable form handling for newsletter

### Railway
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

## 🔍 SEO Optimization

**Built-in SEO Features:**
- Dynamic metadata generation
- Open Graph tags
- Twitter Card support
- Structured data for reviews
- XML sitemap generation
- Robots.txt configuration

**Additional SEO Tips:**
1. Add schema markup for reviews
2. Optimize images with alt text
3. Use descriptive URLs
4. Add internal linking
5. Monitor Core Web Vitals

## 🛡️ Security Best Practices

**Implemented Security:**
- Content Security Policy headers
- XSS protection
- CSRF protection for forms
- Secure affiliate link handling

**Additional Security:**
1. Regular dependency updates
2. Environment variable protection
3. Rate limiting for API routes
4. Input validation and sanitization

## 📈 Performance Optimization

**Built-in Optimizations:**
- Next.js Image optimization
- Static generation for blog posts
- Component lazy loading
- Tailwind CSS purging

**Performance Monitoring:**
1. Use Lighthouse for audits
2. Monitor Core Web Vitals
3. Optimize images regularly
4. Minimize JavaScript bundles

## 🐛 Troubleshooting

**Common Issues:**

1. **MDX files not loading**
   - Check file extension is `.mdx`
   - Verify frontmatter format
   - Ensure content directory structure

2. **Affiliate links not working**
   - Verify host ID matches in `lib/affiliates.ts`
   - Check API route configuration
   - Test redirect functionality

3. **Styling issues**
   - Run `npm run build` to check for CSS conflicts
   - Verify Tailwind configuration
   - Check component class names

4. **Build errors**
   - Check TypeScript errors: `npm run lint`
   - Verify all imports are correct
   - Ensure all required dependencies are installed

## 📞 Support

**Getting Help:**
1. Check the README.md for detailed documentation
2. Review the code comments for implementation details
3. Test locally before deploying
4. Use browser dev tools for debugging

**Useful Commands:**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
```

## 🎯 Next Steps

After setup, consider:
1. Adding more hosting provider reviews
2. Creating comparison pages
3. Writing helpful guides
4. Setting up email marketing
5. Implementing advanced analytics
6. Adding user comments/reviews
7. Creating a mobile app version

---

**Congratulations!** 🎉 Your hosting affiliate blog is now ready to help users find their perfect web hosting solution while generating affiliate revenue.

Remember to always disclose affiliate relationships and provide honest, valuable reviews to build trust with your audience.

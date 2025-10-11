# HostingHub - Web Hosting Affiliate Blog

A complete Next.js 14 web hosting affiliate blog with expert reviews, comparisons, and guides.

## Features

- 🚀 **Next.js 14** with App Router
- 📝 **MDX Content** for blog posts with gray-matter frontmatter
- 🎨 **Tailwind CSS** for styling
- 📱 **Responsive Design** mobile-first approach
- 🔗 **Affiliate Link Tracking** with analytics
- 📧 **Newsletter Signup** with API integration
- ⭐ **Review System** with ratings and pros/cons
- 🖼️ **Feature Images** for all blog posts with optimization
- 🔍 **SEO Optimized** with proper metadata
- 📊 **Performance Focused** with optimized components

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
hosting-blog/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Homepage with hero and featured posts
│   ├── reviews/           # Review pages
│   ├── comparisons/       # Comparison pages
│   ├── guides/            # Guide pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── affiliate-disclosure/ # Affiliate disclosure
│   └── api/               # API routes
│       ├── newsletter/    # Newsletter signup
│       └── go/[host]/     # Affiliate link tracking
├── components/
│   ├── layout/            # Header and Footer components
│   └── blog/              # Blog-specific components
├── content/               # MDX content files
│   ├── reviews/           # Review MDX files
│   ├── comparisons/       # Comparison MDX files
│   └── guides/            # Guide MDX files
├── lib/                   # Utility functions
│   ├── mdx.ts            # MDX processing functions
│   ├── affiliates.ts     # Affiliate host configuration
│   └── utils.ts          # General utilities
└── public/
    └── images/           # Static images and logos
```

## Content Management

### Adding New Reviews

1. Create a new MDX file in `content/reviews/[slug].mdx`
2. Add frontmatter with required fields:
   ```yaml
   ---
   title: "Your Review Title"
   description: "Review description"
   date: "2025-01-01"
   author: "HostingHub Team"
   category: "reviews"
   tags: ["tag1", "tag2"]
   featured: true
   image: "/images/host-review.jpg"  # Feature image for the post
   rating: 4.5
   ---
   ```
3. Write your review content using MDX syntax
4. Use custom components like `<ProsConsList>` and `<AffiliateButton>`

### Affiliate Configuration

Edit `lib/affiliates.ts` to add new hosting providers:

```typescript
export const affiliateHosts = {
  'host-id': {
    name: 'Host Name',
    url: 'https://affiliate-link.com',
    logo: '/images/logos/host.png',
    description: 'Host description'
  }
}
```

## Custom Components

### ProsConsList
```jsx
<ProsConsList 
  pros={["Pro 1", "Pro 2"]}
  cons={["Con 1", "Con 2"]}
/>
```

### AffiliateButton
```jsx
<AffiliateButton 
  hostName="Bluehost" 
  hostId="bluehost" 
  size="lg" 
/>
```

## API Routes

### Newsletter Signup
- **Endpoint**: `POST /api/newsletter`
- **Body**: `{ email: string }`
- **Response**: Success/error message

### Affiliate Tracking
- **Endpoint**: `GET /api/go/[host]`
- **Function**: Logs click data and redirects to affiliate URL
- **Analytics**: Tracks clicks for performance monitoring

## Styling

The project uses Tailwind CSS with custom components:

- **Primary Color**: Blue (blue-600)
- **Typography**: Inter font from Google Fonts
- **Components**: Custom utility classes in `globals.css`
- **Responsive**: Mobile-first design approach

## SEO Features

- Dynamic metadata generation
- Open Graph tags
- Twitter Card support
- Structured data for reviews
- Semantic HTML structure
- Optimized images and performance

## Development

### Adding New Pages
1. Create page component in appropriate `app/` directory
2. Add navigation links in `components/layout/Header.tsx`
3. Update footer links if needed

### Customizing Styles
- Edit `tailwind.config.ts` for theme customization
- Add custom CSS in `app/globals.css`
- Use Tailwind utility classes for component styling

### Environment Variables
Create `.env.local` for environment-specific configuration:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
# Add other environment variables as needed
```

## Deployment

The project is ready for deployment on platforms like:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **DigitalOcean App Platform**

### Build Commands
```bash
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Performance Optimization

- Server-side rendering for better SEO
- Static generation for blog posts
- Optimized images with Next.js Image component
- Tailwind CSS purging for smaller bundle size
- Component lazy loading where appropriate

## Analytics & Tracking

The affiliate tracking system logs:
- Click timestamps
- Referrer information
- User agent data
- Host performance metrics

Extend the tracking in `app/api/go/[host]/route.ts` to integrate with your analytics platform.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support:
- Check the documentation
- Review existing issues
- Create a new issue with detailed information

---

Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS.

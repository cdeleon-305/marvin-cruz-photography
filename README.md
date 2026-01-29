# Photography Portfolio Website

A modern, SEO-optimized photography portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Designed specifically for photographers to showcase their work in sports, engagements, and personal shoots.

## Features

- **SEO Optimized**: Server-side rendering, structured data, sitemap, and optimized metadata
- **Performance**: Next.js Image optimization, lazy loading, code splitting
- **Responsive Design**: Mobile-first, works beautifully on all devices
- **Portfolio Gallery**: Filterable gallery with lightbox view
- **Contact Form**: Integrated contact form with email/SMS capabilities
- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons (Feather Icons)
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Add your images**

Place your photography images in the `public/images/` directory. See [public/IMAGES_README.md](public/IMAGES_README.md) for detailed image requirements.

3. **Configure environment variables**

Copy `.env.example` to `.env.local` and update with your information:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual details.

4. **Customize content**

Update the following files with your information:

- `app/layout.tsx` - Site metadata and SEO
- `components/Navigation.tsx` - Your name/brand
- `components/Footer.tsx` - Contact information
- `components/StructuredData.tsx` - Business details for SEO
- `app/sitemap.ts` - Your domain URL
- `app/robots.ts` - Your domain URL

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build

Build for production:

```bash
npm run build
npm run start
```

## Project Structure

```
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── portfolio/           # Portfolio page
│   ├── contact/             # Contact page
│   ├── api/contact/         # Contact form API route
│   ├── sitemap.ts           # Auto-generated sitemap
│   └── robots.ts            # Robots.txt configuration
├── components/              # React components
│   ├── Navigation.tsx       # Header navigation
│   ├── Footer.tsx           # Footer
│   ├── Hero.tsx             # Homepage hero section
│   ├── Services.tsx         # Services showcase
│   ├── FeaturedWork.tsx     # Featured images grid
│   ├── CallToAction.tsx     # CTA section
│   ├── PortfolioGallery.tsx # Portfolio with filtering
│   ├── ContactForm.tsx      # Contact form
│   ├── ContactInfo.tsx      # Contact information
│   └── StructuredData.tsx   # SEO structured data
├── public/                  # Static assets
│   └── images/              # Your photography images
└── tailwind.config.ts       # Tailwind configuration
```

## Customization Guide

### 1. Personal Information

**Navigation & Footer** ([components/Navigation.tsx](components/Navigation.tsx), [components/Footer.tsx](components/Footer.tsx))
- Replace "Your Name" with your actual name
- Update email: `your.email@example.com`
- Update phone: `(123) 456-7890`
- Add your social media links

### 2. Content

**Homepage** ([app/page.tsx](app/page.tsx))
- Edit hero text in `components/Hero.tsx`
- Update service descriptions in `components/Services.tsx`
- Customize featured work in `components/FeaturedWork.tsx`

**Portfolio** ([components/PortfolioGallery.tsx](components/PortfolioGallery.tsx))
- Update the `portfolioImages` array with your actual images
- Add/remove categories as needed
- Adjust grid layout if desired

### 3. SEO & Metadata

**Root Layout** ([app/layout.tsx](app/layout.tsx))
```typescript
export const metadata: Metadata = {
  title: "Your Name Photography",
  description: "Update with your description",
  // Update Open Graph images, Twitter cards, etc.
}
```

**Structured Data** ([components/StructuredData.tsx](components/StructuredData.tsx))
- Add your actual business address
- Update coordinates for local SEO
- Add actual social media URLs
- Update business hours

**Sitemap** ([app/sitemap.ts](app/sitemap.ts))
- Replace `https://yoursite.com` with your actual domain

### 4. Contact Form Integration

The contact form currently logs submissions to the console. To actually send emails, choose one of these options:

#### Option 1: Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Install: `npm install resend`
3. Update `app/api/contact/route.ts` with the Resend code (commented in file)
4. Add `RESEND_API_KEY` to `.env.local`

#### Option 2: Formspree

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update form action in `components/ContactForm.tsx`

#### Option 3: SendGrid / Mailgun

1. Sign up for service
2. Install SDK
3. Update API route handler

### 5. Styling

**Colors** ([tailwind.config.ts](tailwind.config.ts))
- Modify color scheme to match your brand
- Current theme uses black/white/gray

**Fonts** ([app/layout.tsx](app/layout.tsx))
- Currently using Inter (body) and Playfair Display (headings)
- Replace with your preferred Google Fonts

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Import your repository at [vercel.com](https://vercel.com)

3. Vercel will auto-detect Next.js and configure:
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. Add environment variables in Vercel dashboard

5. Deploy!

Your site will be live with:
- Automatic HTTPS
- Global CDN
- Image optimization
- Zero configuration

### Deploy to Other Platforms

This Next.js app can also be deployed to:
- **Netlify**: Use the Next.js runtime
- **AWS Amplify**: Supports Next.js SSR
- **Self-hosted**: Use `npm run build && npm run start`

## Performance Optimization Checklist

- [x] Next.js Image component for automatic optimization
- [x] Lazy loading images below the fold
- [x] Font optimization with `next/font`
- [x] Automatic code splitting
- [x] Static generation where possible
- [ ] Add your actual optimized images
- [ ] Configure analytics (Vercel Analytics, Google Analytics, etc.)
- [ ] Test with Lighthouse (aim for 90+ scores)
- [ ] Compress images before uploading

## SEO Checklist

- [x] Semantic HTML structure
- [x] Meta tags configured
- [x] Open Graph tags for social sharing
- [x] Twitter Card tags
- [x] Structured data (JSON-LD)
- [x] Sitemap.xml generation
- [x] Robots.txt configuration
- [ ] Submit sitemap to Google Search Console
- [ ] Add alt text for all your images
- [ ] Set up Google Business Profile
- [ ] Build backlinks and local citations

## Post-Launch Checklist

1. **Replace all placeholder content**
   - [ ] Update "Your Name" throughout
   - [ ] Add actual contact information
   - [ ] Upload real photography images
   - [ ] Write unique descriptions for services

2. **Set up email service**
   - [ ] Choose email provider (Resend, Formspree, etc.)
   - [ ] Configure contact form
   - [ ] Test form submissions

3. **Configure analytics**
   - [ ] Add Google Analytics or Vercel Analytics
   - [ ] Set up conversion tracking
   - [ ] Monitor page performance

4. **SEO Setup**
   - [ ] Submit sitemap to Google Search Console
   - [ ] Submit to Bing Webmaster Tools
   - [ ] Create Google Business Profile
   - [ ] Set up local SEO citations

5. **Performance**
   - [ ] Run Lighthouse audit
   - [ ] Test on multiple devices
   - [ ] Check page load times
   - [ ] Optimize images if needed

6. **Legal**
   - [ ] Add privacy policy (if collecting emails)
   - [ ] Add terms of service
   - [ ] GDPR compliance (if serving EU)

## Support & Customization

Need help customizing or have questions? Feel free to:
- Review Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Review Tailwind CSS docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## License

This is a custom-built template. Feel free to use and modify for your photography business.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

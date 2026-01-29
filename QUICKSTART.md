# Quick Start Guide

Get your photography portfolio up and running in minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Add Your Images

Create an `images` folder inside `public/` and add these images:

**Required images:**
- `hero.jpg` - Main homepage background (1920x1080px)
- `sports-preview.jpg`, `engagement-preview.jpg`, `personal-preview.jpg` (800x600px)
- `featured-1.jpg` through `featured-6.jpg` (800x800px)
- `sports-1.jpg` through `sports-4.jpg` (1200x1200px)
- `engagement-1.jpg` through `engagement-4.jpg` (1200x1200px)
- `personal-1.jpg` through `personal-4.jpg` (1200x1200px)

Plus: `og-image.jpg` (1200x630px) in the root `public/` folder

## Step 3: Update Your Information

### Quick Replacements (Find & Replace in your editor)

1. **Your Name**: Replace "Your Name" throughout the project
2. **Email**: Replace `your.email@example.com` with your actual email
3. **Phone**: Replace `(123) 456-7890` and `+11234567890` with your number
4. **Domain**: Replace `https://yoursite.com` with your actual domain

### Key Files to Update:

1. **[app/layout.tsx](app/layout.tsx)** - Lines 21, 26-27, 31
2. **[components/Navigation.tsx](components/Navigation.tsx)** - Line 24
3. **[components/Footer.tsx](components/Footer.tsx)** - Lines 40, 48
4. **[components/ContactInfo.tsx](components/ContactInfo.tsx)** - Lines 17, 28, 43
5. **[components/StructuredData.tsx](components/StructuredData.tsx)** - Lines 5-8, 12-18
6. **[app/sitemap.ts](app/sitemap.ts)** - Line 4
7. **[app/robots.ts](app/robots.ts)** - Line 4

## Step 4: Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Step 5: Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your site is live!

## Optional: Set Up Contact Form

The contact form currently logs to console. To receive actual emails:

### Using Resend (Easiest):

```bash
npm install resend
```

1. Sign up at [resend.com](https://resend.com) and get API key
2. Add to `.env.local`: `RESEND_API_KEY=your_key`
3. Uncomment Resend code in [app/api/contact/route.ts](app/api/contact/route.ts:14-26)
4. Add API key to Vercel environment variables

### Using Formspree (No Code):

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint URL
3. Update form action in [components/ContactForm.tsx](components/ContactForm.tsx)

## Testing Checklist

- [ ] Homepage loads with hero image
- [ ] Navigation works between pages
- [ ] Portfolio filtering works
- [ ] Lightbox opens when clicking portfolio images
- [ ] Contact form submits (check console if email not configured)
- [ ] Mobile responsive (test on phone)
- [ ] All links work
- [ ] Social media links point to your profiles

## Performance Check

After deploying, test your site:

1. **Lighthouse Audit**: Open DevTools > Lighthouse > Generate Report
   - Target: 90+ for all categories
2. **Mobile Test**: [search.google.com/test/mobile-friendly](https://search.google.com/test/mobile-friendly)
3. **Page Speed**: [pagespeed.web.dev](https://pagespeed.web.dev)

## SEO Setup (After Launch)

1. **Google Search Console**
   - Add your site
   - Submit sitemap: `yoursite.com/sitemap.xml`

2. **Google Business Profile**
   - Create/claim your business listing
   - Add photos, hours, contact info

3. **Social Media**
   - Share your portfolio
   - Add website link to Instagram/Facebook bio

## Need Help?

- Full documentation: [README.md](README.md)
- Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Deployment help: [vercel.com/docs](https://vercel.com/docs)

---

**That's it! You're ready to showcase your photography to the world! 📸**

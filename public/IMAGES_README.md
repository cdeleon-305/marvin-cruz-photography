# Image Asset Guide

This folder should contain all your photography portfolio images.

## Required Images

### Hero Image
- **File**: `images/hero.jpg`
- **Recommended size**: 1920x1080px or larger
- **Description**: Main hero image for homepage

### Service Preview Images
- `images/sports-preview.jpg` - Sports photography preview
- `images/engagement-preview.jpg` - Engagement photography preview
- `images/personal-preview.jpg` - Personal shoots preview
- **Recommended size**: 800x600px

### Featured Work (Home Page)
- `images/featured-1.jpg` through `images/featured-6.jpg`
- **Recommended size**: 800x800px (square format)

### Portfolio Gallery Images
- `images/sports-1.jpg` through `images/sports-4.jpg`
- `images/engagement-1.jpg` through `images/engagement-4.jpg`
- `images/personal-1.jpg` through `images/personal-4.jpg`
- **Recommended size**: 1200x1200px (square format)

### SEO Images
- `og-image.jpg` - Open Graph image for social sharing (1200x630px)
- `favicon.ico` - Browser favicon

## Image Optimization Tips

1. **Format**: Use JPEG for photos, PNG for graphics with transparency
2. **Compression**: Compress images to reduce file size (use tools like TinyPNG)
3. **Next.js automatic optimization**: Next.js will automatically optimize images, but starting with reasonably sized images helps
4. **Alt text**: All images have alt text in the code - update descriptions to match your actual images

## Folder Structure

```
public/
├── images/
│   ├── hero.jpg
│   ├── sports-preview.jpg
│   ├── engagement-preview.jpg
│   ├── personal-preview.jpg
│   ├── featured-1.jpg to featured-6.jpg
│   ├── sports-1.jpg to sports-4.jpg
│   ├── engagement-1.jpg to engagement-4.jpg
│   └── personal-1.jpg to personal-4.jpg
├── og-image.jpg
└── favicon.ico
```

## Adding More Images

To add more portfolio images, edit the `portfolioImages` array in:
- `/components/PortfolioGallery.tsx`

Follow the existing pattern and add your new images to the appropriate category.

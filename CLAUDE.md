# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Photography portfolio website for Marvin Cruz, a Miami-based photographer. Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS. Deployed on Vercel.

## Commands

- `npm run dev` — Start dev server with Turbopack (http://localhost:3000)
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npm run start` — Serve production build

## Architecture

**Next.js App Router** with three pages:
- `/` (home) — Hero, Services, AboutMe, CallToAction sections
- `/portfolio` — Filterable gallery with lightbox (PortfolioGallery component)
- `/contact` — ContactForm + ContactInfo, posts to `/api/contact`

**Middleware (`middleware.ts`)** — Password-based site protection. Checks `SITE_PASSWORD` env var against a `site-auth` cookie or `?password=` query param. Renders an inline HTML auth page for unauthenticated visitors. Skips `/api`, `/_next`, and `/images` paths.

**Contact API (`app/api/contact/route.ts`)** — POST endpoint that validates form fields and sends email via Resend SDK. Requires `RESEND_API_KEY` and `CONTACT_FORM_EMAIL` env vars.

**Layout (`app/layout.tsx`)** — Root layout with Navigation and Footer rendered on every page. Loads Inter (body) and Playfair Display (headings) via `next/font`. Contains all SEO metadata, Open Graph, and Twitter Card config.

**Styling** — Tailwind CSS with custom brand color (`#083528` dark green) and font family CSS variables (`--font-inter`, `--font-playfair`). The `font-display` utility maps to Playfair Display. All components use Tailwind utility classes directly.

**Path aliases** — `@/*` maps to project root (tsconfig paths).

## Environment Variables

Copy `.env.example` to `.env.local`. Key variables:
- `SITE_PASSWORD` — Required for middleware auth gate
- `RESEND_API_KEY` — For contact form email delivery
- `CONTACT_FORM_EMAIL` — Recipient for contact submissions
- `NEXT_PUBLIC_SITE_URL` — Canonical site URL

## Images

All images in `public/images/`. See `public/IMAGES_README.md` for required filenames and dimensions. `next/Image` used throughout with webp/avif optimization configured in `next.config.js`.

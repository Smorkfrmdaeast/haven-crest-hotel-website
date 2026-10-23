# HAVEN CREST HOTEL & SUITES — ENUGU, NIGERIA
### Luxury Five-Star Boutique Hotel & Suites Prototype

> **Portfolio Demo by SMORK'S TECH**  
> *Hotel information, room descriptions, prices, and availability are illustrative demonstrations and not real booking offers.*

---

## Overview

Haven Crest Hotel & Suites is an ultra-luxury boutique hotel website concept designed and engineered by **SMORK'S TECH** to pitch bespoke web development, digital branding, and online reservation services to luxury hotels, suites, and private resorts in Enugu and Eastern Nigeria.

### Highlights & Aesthetics
- **Color Palette:**
  - Charcoal (`#1C1C1E`)
  - Deep Charcoal (`#121214`)
  - Warm Cream (`#F7F2E9`)
  - Champagne Gold (`#C9A96E`)
  - Soft Stone (`#E8E0D2`)
  - Muted Text (`#6B665E`)
- **Typography:**
  - Headings: *Cormorant Garamond* (light, elegant, editorial serif)
  - Body & UI: *Plus Jakarta Sans* / *Jost* (clean, legibility-focused, with uppercase tracking on labels)
- **Zero-Pill Discipline:** Subtle corner rounding (2–4px max) to maintain architectural restraint and five-star poise.
- **Fail-Safe Photography:** Centralized image registry (`src/config/images.ts`) with automatic fallback to an inline gold-crest charcoal SVG so no broken images ever appear.
- **Accessible & Honest Enquiry Flow:** Fully validated demonstration booking form with explicit honesty labels stating that no real booking or payment was processed.

---

## Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Routing:** React Router v7 (`react-router-dom`)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) with custom `@theme`
- **SEO & Meta:** `react-helmet-async`, Open Graph tags, Twitter cards, Schema.org Hotel JSON-LD, sitemap.xml, and robots.txt
- **Hosting Target:** Vercel (SPA rewrites configured in `vercel.json`), Netlify, or Cloud Run

---

## Getting Started

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Development Server
Start the local Vite development server:
```bash
npm run dev
```
Open your browser to `http://localhost:3000`.

### 3. Production Build
Verify TypeScript types and bundle the production assets:
```bash
npm run build
```
The compiled output will be generated in `/dist`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## Project Structure

```
├── public/
│   ├── favicon.svg             # Gold crest monogram on charcoal SVG
│   ├── manifest.webmanifest    # Web App Manifest for mobile installability
│   ├── robots.txt              # Search engine crawler permissions
│   └── sitemap.xml             # XML sitemap with all active routes
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx          # Zero-pill luxury button variants
│   │   │   ├── CrestLogo.tsx       # SVG crest icon and wordmark
│   │   │   ├── DemoBanner.tsx      # Persistent demo disclaimer bar
│   │   │   ├── FAQ.tsx             # Gold-bordered accordion FAQ component
│   │   │   ├── Lightbox.tsx        # Keyboard-navigable image preview modal
│   │   │   ├── Modal.tsx           # Accessible dialog with focus trap
│   │   │   ├── RoomCard.tsx        # Room card with sample price badge & specs
│   │   │   ├── RoomModal.tsx       # Full room specifications & photo carousel
│   │   │   ├── SafeImage.tsx       # Image loader with shimmer & SVG fallback
│   │   │   ├── SectionHeading.tsx  # Editorial section heading
│   │   │   ├── SEOHead.tsx         # Helmet meta tags & canonical URL manager
│   │   │   └── StayEnquiryBar.tsx  # Interactive quick date & guest inquiry bar
│   │   └── layout/
│   │       ├── Header.tsx          # Scroll-sensitive transparent-to-solid header
│   │       ├── Footer.tsx          # 4-column footer, disclaimer, & WhatsApp button
│   │       └── Newsletter.tsx      # Gold-bordered email subscription component
│   ├── config/
│   │   ├── hotelData.ts        # Rooms, amenities, facilities, offers, testimonials
│   │   └── images.ts           # Central photography registry & SVG fallback URI
│   ├── pages/
│   │   ├── Home.tsx                # Hero, editorial intro, amenities, signature rituals
│   │   ├── Rooms.tsx               # 5 room tiers, filters, specs, & enquiry modal
│   │   ├── DiningFacilities.tsx    # 9 dining & facility editorial features
│   │   ├── Gallery.tsx             # 16-photo category masonry grid + Lightbox
│   │   ├── SpecialOffers.tsx       # 5 curated sample stay packages
│   │   ├── About.tsx               # Brand story, core values, & team roles
│   │   ├── ContactReservations.tsx # Validated enquiry form & honesty states
│   │   └── NotFound.tsx            # Styled 404 recovery page
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── App.tsx                 # Route declarations & Suspense code-splitting
│   ├── index.css               # Tailwind v4 theme, fonts, and hairline utilities
│   └── main.tsx                # React entry point
├── vercel.json                 # Vercel SPA rewrite configuration
├── metadata.json               # Application metadata
└── package.json
```

---

## How to Customize for a Live Client

### 1. Replacing Images with Client Photography
All image assets are controlled in a single file: `src/config/images.ts`.  
To replace them with high-resolution photography supplied by the hotel:
1. Open `src/config/images.ts`.
2. Replace the URLs in the `IMAGES` object with your Cloudinary, AWS S3, or local CDN URLs.
3. Every component (`SafeImage`) automatically uses these references. If an image link ever breaks, the built-in SVG gold-crest placeholder renders automatically.

### 2. Updating Hotel Information & Text Copy
Open `src/config/hotelData.ts`:
- Change `HOTEL_INFO.name`, `HOTEL_INFO.fullAddress`, and `HOTEL_INFO.phoneDisplay`.
- Adjust room types, actual room dimensions, bedding configurations, and real prices in `ROOM_CATEGORIES`.
- Edit restaurant opening hours, conference capacities, and spa treatments in `FACILITIES`.

### 3. Changing the WhatsApp Number
In `src/config/hotelData.ts`:
```typescript
export const HOTEL_INFO = {
  // Replace with the client's actual international number without '+' or spaces:
  whatsappNumber: '2348012345678',
  whatsappDisplay: '+234 801 234 5678',
  ...
};
```
The WhatsApp button on the Contact page and Footer will automatically update its `https://wa.me/` destination.

---

## Vercel Deployment Guide

### Step 1: Push Repository to GitHub
Push this codebase to a private or public GitHub repository.

### Step 2: Import into Vercel
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **Add New** → **Project**.
3. Import your GitHub repository.
4. Vercel will automatically detect **Vite** as the framework preset:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**.

### Step 3: Verify SPA Rewrites
The project includes a `vercel.json` file in the root directory:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
This ensures that deep links like `/rooms`, `/dining-facilities`, and `/contact-reservations` route seamlessly without 404 errors on browser refresh.

### Step 4: Custom Domain Configuration (e.g. `havencresthotel.com` or `havencrest.ng`)
1. In your Vercel Project Dashboard, navigate to **Settings** → **Domains**.
2. Enter your domain (e.g., `havencrest.ng` or `havencresthotel.com`) and click **Add**.
3. In your domain registrar (e.g., Whois, Namecheap, Whogohost, or Google Domains):
   - **Apex Domain (`havencrest.ng`):** Add an **A Record** pointing to `76.76.21.21`.
   - **Subdomain (`www.havencrest.ng`):** Add a **CNAME Record** pointing to `cname.vercel-dns.com`.
4. Vercel automatically provisions and renews a free **Let's Encrypt SSL/TLS Certificate**.

---

## Pre-Launch Client Conversion Checklist

When converting this pitch demonstration into a live client website for Haven Crest Hotel:

- [ ] **Professional Photography:** Commission an on-site architectural and lifestyle photoshoot in Enugu to replace the Unsplash imagery in `src/config/images.ts`.
- [ ] **Real Booking Engine Integration:**
  - Replace the demo enquiry form in `src/pages/ContactReservations.tsx` with the hotel's Property Management System (PMS) booking engine (e.g., Cloudbeds, SiteMinder, Hotelogix, or a custom Supabase/PostgreSQL backend).
  - Alternatively, connect the form to SendGrid / Resend / EmailJS to dispatch real-time email inquiries to the reservations desk.
- [ ] **Remove Demo Disclaimers:** Remove `<DemoBanner />` from `src/App.tsx` and adjust the demo notice in `src/components/layout/Footer.tsx`.
- [ ] **Payment Gateway (Optional):** Integrate Paystack or Flutterwave for direct online card and bank transfer deposits in Nigerian Naira (NGN).
- [ ] **Live WhatsApp & Telephone:** Verify that the front desk team has direct access to the official WhatsApp Business phone number.
- [ ] **Analytics & Tracking:** Add Google Analytics 4 (GA4) or Plausible script in `index.html`.
- [ ] **Legal Policies:** Replace sample policy placeholders with legal counsel-reviewed Privacy Policy, Cancellation Terms, and Hotel Rules of Residence.
- [ ] **Google Business Profile:** Claim and verify the Google Maps location for Haven Crest Hotel & Suites in Independence Layout, Enugu.

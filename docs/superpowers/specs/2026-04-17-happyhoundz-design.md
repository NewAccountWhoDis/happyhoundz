# Heather's Happy Houndz — Website Design Spec
**Date:** 2026-04-17  
**Status:** Approved — Ready for Implementation  
**Deploying to:** Netlify  
**Tech Stack:** Next.js, Tailwind CSS, Framer Motion

---

## Business Overview

| Field | Detail |
|---|---|
| Business Name | Heather's Happy Houndz LLC |
| Owner | Heather (Certified Dog Groomer) |
| Location | Cohoes, NY |
| Type | Physical salon (not mobile) |
| Established | January 2026 |
| Social | @heathershappyhoundz (Facebook + Instagram) |
| Key Tagline | "All-inclusive, one-on-one appointments to give the best possible experience!" |

### Core Differentiators (from real reviews)
1. **One-on-one appointments only** — never rushed, never shared
2. **Anxious/nervous dog specialist** — dogs that hate grooming elsewhere thrive here
3. **Certified groomer** — professional, not a hobby shop
4. **Clean, welcoming salon** — "cute and clean place" per reviews
5. **Amazing results** — owners regularly get asked where they take their dog

---

## Visual Identity

### Design Direction
**Fiesta** — Bold, vibrant, high-energy. The most distinctive look in the Albany/Cohoes market. Local competitors are bland and dated; this site stands out immediately.

### Color Palette
| Role | Color | Hex |
|---|---|---|
| Primary | Hot Coral | `#FF6B35` |
| Secondary | Sunshine Yellow | `#FFD23F` |
| Dark | Near Black | `#1A1A1A` |
| Light | Warm White | `#FFF9F0` |
| Accent | White | `#FFFFFF` |

### Typography
| Role | Font | Source |
|---|---|---|
| Display / Headlines | Space Grotesk (Bold 700/900) | Google Fonts |
| Body | Nunito (Regular 400, SemiBold 600) | Google Fonts |

### Personality
Bold, warm, playful. Feels like a party for your dog. NOT corporate, NOT clinical. Every visual choice should feel like Heather made it herself — with energy and love.

### Motion Principles
- Headline words animate in one by one on page load (Framer Motion)
- Floating paw prints drift upward in hero backgrounds
- Cards stagger-fade in as user scrolls (IntersectionObserver + Framer)
- CTA buttons pulse gently on idle
- Form fields animate in sequence on /book page
- Paw print confetti on booking form success
- Respect `prefers-reduced-motion` — all animations disabled for users who prefer it

---

## Site Architecture — 5 Pages

### Page 1: `/` — Home
**Purpose:** Energy, first impressions, trust-building, routing hub.

**Sections:**
1. **Hero** — Full-viewport. Bold animated headline: *"Where Every Pup Gets the Royal Treatment 🐾"*. Subheadline: *"All-inclusive, one-on-one grooming in Cohoes, NY."* Two CTAs: `Book Appointment` (→ /book) + `See Services` (→ /services). Floating animated paw prints. Stock hero dog photo.
2. **Trust Bar** — Scrolling marquee (infinite loop): `🐾 Certified Groomer · ⭐ 5-Star Reviews · 🐕 One-on-One Appointments · 📍 Cohoes, NY · 💛 Anxious Dogs Welcome`
3. **Services Preview** — 3-card teaser (Bath & Brush, Full Groom, Nail Trim). "See all services →" link to /services.
4. **Why Heather** — 4 bold feature blocks with icons: One-on-One Only · Anxious Dog Specialist · Certified Groomer · Clean Welcoming Salon. Copy pulled from real review themes.
5. **Reviews Snippet** — 3 cherry-picked quotes (Emily Wightman, Shauna Davis, Torey Nicole Goncalves). Star ratings. Dog names included.
6. **CTA Banner** — Full-width coral strip: *"Ready for a Happy Houndz Glow-Up?"* → Book Now button.

---

### Page 2: `/services` — Services & Pricing
**Purpose:** Full service menu with placeholder pricing.

**Hero:** Coral background, scissors + paw icon, headline: *"All-Inclusive Grooming Services 🐾"*

**Service Categories (card grid):**

| Category | Services |
|---|---|
| Baths | Bath & Brush, De-shedding Treatment |
| Full Grooms | Breed Standard Cut, Custom Cut, Puppy's First Groom |
| A La Carte | Nail Trim, Teeth Brushing, Ear Cleaning, Paw Balm |
| Add-ons | Bandana/Bow, Blueberry Facial, Cologne Spritz |

Each card: icon · service name · 1-line description · `Starting at $XX` placeholder badge.

**Layout:** Responsive grid (1 col mobile → 2 col tablet → 3 col desktop). Sticky category tab filter on desktop.

**Animation:** Cards stagger-animate in on scroll. Price badge bounces on hover.

---

### Page 3: `/gallery` — The Houndz Gallery
**Purpose:** Show results and build trust through photos.

**Hero:** Sunshine yellow background. Headline: *"Meet the Happy Houndz 🐾"*

**Section 1 — Dog Photos**
Masonry grid of groomed dog photos. Stock placeholders on build — swap with Heather's real Facebook photos before launch. Optional captions with dog names from reviews: Nova, Kahlo, Remi, Louie, Gunner, Truffles, Chuckles, Daisy. Lightbox on click with next/prev navigation.

**Section 2 — The Salon**
Separate sub-section: *"A clean, stress-free space your pup will love."* 3–4 photos of the shop interior. Stock placeholders — replace with Heather's actual salon photos. Slightly different grid layout (wider cards, 2-col max) to visually distinguish from dog photos.

**Animation:** Photos fade + scale in on scroll. Lightbox slides between images.

---

### Page 4: `/about` — Meet Heather
**Purpose:** Personal connection, trust, full reviews.

**Hero:** Near-black background (makes coral/yellow pop hard). Headline: *"Hi, I'm Heather 🐾"*

**Sections:**
1. **Split Layout** — Photo of Heather (placeholder) left · Bio right. Bio tone: warm, personal, not corporate. Emphasizes: certified groomer, one-on-one philosophy, love for nervous dogs, Cohoes community pride.
2. **The Happy Houndz Promise** — 4 differentiators expanded into full paragraphs (not just icon bullets). Coral card backgrounds.
3. **All Reviews** — Full carousel with all 7 real review quotes:
   - Charles Geddes (Truffles & Chuckles)
   - Emily Wightman (Nova)
   - Lisa Marie
   - Torey Nicole Goncalves (Kahlo & Remi)
   - Robert McCrea (Austrian Shepherds)
   - Meredith Breault Rivet (anxious pup)
   - Cathy Robinson McCrea (Gunner)
   - Shauna Davis (Louie the Westie)
   - Paige Ryan (senior German Shepherd)

**Animation:** Photo slides in from left on load. Text reveals word-by-word. Reviews auto-scroll carousel.

---

### Page 5: `/book` — Book an Appointment
**Purpose:** Convert visitors to clients.

**Hero:** Coral banner. Headline: *"Ready for a Happy Houndz Glow-Up? 🐾"*

**Two-Column Layout:**

**Left — Contact Info:**
- Big bold phone number (placeholder: `(518) XXX-XXXX`)
- Hours (placeholder: Mon–Sat, X:XX AM – X:XX PM)
- Address: Cohoes, NY (full address placeholder)
- Facebook + Instagram links

**Right — Contact Form:**
- Name
- Phone Number
- Dog's Name
- Breed
- Service Requested (dropdown)
- Preferred Date
- Preferred Time
- Additional Notes (textarea)
- Submit button: `Request Appointment 🐾`

**Success State:** Animated paw print confetti + message: *"Woof! We'll be in touch soon!"*

**Note:** Form is a placeholder contact/email form for now. Built to be swapped for MoeGo, StyleSeat, or Acuity later without redesigning the page.

**Animation:** Form fields animate in on load in sequence. Submit button wiggles on hover. Confetti on success.

---

## Navigation (All Pages)

**Desktop:** Sticky top nav — Logo (paw + wordmark) left · `Home · Services · Gallery · About` links center/right · `Book Now` bold yellow pill CTA far right.

**Mobile:** Hamburger menu — slides in from right, coral background, large text links, `Book Now` CTA at bottom.

**Active state:** Current page link gets a yellow underline or dot indicator.

---

## Photos & Assets

| Asset | Status | Source |
|---|---|---|
| Dog photos (gallery) | Stock placeholder | Replace with Facebook photos pre-launch |
| Salon photos | Stock placeholder | Replace with Heather's actual salon photos |
| Heather photo (about) | Stock placeholder | Replace pre-launch |
| Hero dog photo (home) | Stock placeholder | Replace pre-launch |
| Logo | Build from scratch | Paw print icon + "Heather's Happy Houndz" wordmark in Space Grotesk |

---

## Technical Notes

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Deployment:** Netlify (static export or SSR — confirm before build)
- **Form handling:** Netlify Forms (free, built-in, no backend needed)
- **Image optimization:** Next.js `<Image>` component
- **Fonts:** Google Fonts via `next/font`
- **Stock photos:** Unsplash (dogs, salon interior)
- **Accessibility:** Semantic HTML, alt text on all images, `prefers-reduced-motion` respected
- **Mobile-first:** All layouts designed mobile → tablet → desktop

---

## Competitive Context

| Competitor | Weakness | Our Edge |
|---|---|---|
| Barking Boutique NY | Dated minimal design, no personality | Bold, distinctive, instantly memorable |
| Animal House Cohoes | B&W generic, lacks warmth | Full color, warmth built in |
| Pet Spas Pamper & Play | Professional but cookie-cutter | Real personality, real reviews front and center |

**Bottom line:** No dog groomer in the Albany/Cohoes area looks like this. Heather's site will immediately stand out.

---

## Open Items (Resolve Before Launch)

- [ ] Heather's actual phone number
- [ ] Full salon address
- [ ] Business hours
- [ ] Real photos (download from Facebook/Instagram before launch)
- [ ] Heather's photo for About page
- [ ] Confirm actual service pricing with Heather
- [ ] Email address for form submissions (Netlify Forms config)

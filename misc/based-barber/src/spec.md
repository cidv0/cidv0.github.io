# Based Barber Co (West Chester, PA) — Codex Website Starter Spec

Use this as the starting “product spec” + content outline for a modern, high-converting barbershop website. It’s written so you can paste sections into a Codex project as prompts / tickets.

---

## 1) Goal

Drive **local visitors → booked appointments (or walk-ins)** with a modern, fast, mobile-first site.

**Primary conversion actions**

* Book appointment
* Call
* Get directions

**Secondary actions**

* View services/pricing
* View gallery
* Read reviews

---

## 2) Recommended design direction

### Default: “Book-first modern”

Clean, minimal, bold typography, strong photography, high contrast CTAs.

**Why**: highest conversion for a new barbershop brand, easiest to ship quickly, great on mobile.

---

## 3) Tech assumptions (edit as needed)

* Framework: Next.js (App Router)
* Styling: Tailwind
* Deploy: Vercel
* Content: hardcoded JSON to start (move to CMS later)
* Booking: external link (or embedded widget when you decide provider)

---

## 4) Site map

**Required**

1. Home (/)
2. Services & Pricing (/services)
3. Gallery (/gallery)
4. About (/about)
5. Location & Contact (/contact)
6. Book (/book) — can be a redirect or embedded widget

**Optional (SEO + ads)**

* /barber-west-chester-pa
* /fade-west-chester-pa
* /beard-trim-west-chester-pa

---

## 5) Brand kit starter (placeholder)

### Visual style

* Background: light neutral or deep charcoal
* Accent: one bold brand color for CTAs
* Photos: real cuts, close crops, consistent lighting

### Typography

* Headings: modern sans (e.g., Inter / Sora)
* Body: simple sans (Inter)

### Tone

Confident, clean, local.

---

## 6) Homepage wireframe (conversion-first)

### A) Header (sticky)

* Logo / wordmark (Based Barber Co)
* Nav: Services, Gallery, About, Contact
* CTA button: **Book Now**

### B) Hero (above the fold)

* Headline: “Modern barbering in West Chester, PA.”
* Subhead: “Clean fades, sharp lineups, and precision beard work.”
* CTAs: **Book Now** (primary), **Get Directions** (secondary)
* Trust strip: “⭐ 4.8+ rating” (placeholder), “Walk-ins welcome” (if true), “West Chester, PA”

### C) Services preview

* 6 cards max with duration + starting price (if provided)
* Button: “View full menu”

### D) Results gallery (curated)

* 9–12 images grid
* Button: “See more”

### E) Reviews

* Overall rating + 6 short quotes (placeholder)
* Button: “Read all reviews” (links to Google/Yelp)

### F) About preview

* Barber portrait
* 3–5 sentences story + specialties
* Button: “About”

### G) Location

* Map embed
* Address, hours, parking note
* Buttons: Call, Directions

### H) Footer

* Hours
* Address
* Phone
* Social links
* Small print

### Mobile conversion feature

* Sticky bottom bar: **Book • Call • Directions**

---

## 7) Services page spec

### Layout

* Title + short intro
* Service categories: Haircuts, Fades, Beard, Kids, Combos, Add-ons
* Each service: name, short description, duration, price
* CTA module repeated 2–3x: “Book now”

### FAQ (schedule protection)

* Late policy
* No-show policy
* Payment types
* Walk-ins vs appointments

---

## 8) Gallery spec

* Filter (optional): Haircut / Fade / Beard
* Masonry grid
* Lightbox
* “Book now” callout every ~2 screens

---

## 9) About page spec

* Photo + bio
* What to expect (short bullets)
* Cleanliness / comfort statement
* CTA: book

---

## 10) Contact / location spec

* Map embed
* Address, hours
* Phone (tap-to-call)
* “How to find us” / parking note
* Booking button

---

## 11) Content placeholders (copy you can start with)

### Hero headline options

1. “Fresh cuts. Clean fades. West Chester.”
2. “Your new go-to barber in West Chester, PA.”
3. “Precision barbering, done right.”

### Value props (pick 3)

* Detail-focused fades and lineups
* Consistent results
* Easy online booking
* Comfortable, professional vibe

### CTA labels

* Book Appointment
* Call Now
* Get Directions

---

## 12) Assets you need from the barber (minimum)

1. Logo (SVG/PNG)
2. 12–24 best haircut photos
3. 1–2 portrait photos
4. Address + parking note
5. Hours
6. Phone
7. Booking link / provider
8. Price list (even if approximate)
9. Review links (Google/Yelp/booking platform)

---

## 13) Codex task list (copy into issues)

### Project setup

* [ ] Create Next.js app (App Router)
* [ ] Add Tailwind
* [ ] Add basic layout components: Header, Footer, MobileStickyBar

### Pages

* [ ] Home page per wireframe
* [ ] Services page with menu data
* [ ] Gallery page with lightbox
* [ ] About page
* [ ] Contact page with map + contact blocks
* [ ] Book page (redirect or embed)

### UX + conversion

* [ ] Sticky header CTA
* [ ] Sticky mobile bottom bar
* [ ] Reusable CTA sections

### SEO + local

* [ ] Title/description per page
* [ ] LocalBusiness JSON-LD (address/phone/hours)
* [ ] Sitemap + robots

### Performance

* [ ] Image optimization (Next/Image)
* [ ] Lighthouse pass (mobile)

---

## 14) Photography strategy (placeholders + performance)

A lot of barbershop sites are photo-driven. You can launch fast without waiting for real photos by using **text-first structure** plus **safe placeholders** that can be swapped later.

### A) Principle: don’t make the site depend on photos

The site should still convert even if images are missing.

* Strong hero headline + subhead + **Book / Call / Directions**
* Services + pricing cards (text-first)
* Reviews (text-first)
* Location + hours (text-first)
* Gallery section that gracefully handles placeholders until real photos arrive

### B) AI placeholders: what’s safe vs risky

**Safe placeholder uses (recommended)**

* Background textures / patterns / gradients
* Abstract brand visuals (razor silhouette, clipper outline)
* Generic interior “vibe” shots that do **not** represent the real shop
* Generic model-style barber imagery used as “style inspiration,” not portfolio proof

**Avoid (trust risk)**

* AI images that imply “this is his work” (portfolio/results)
* AI photos that look like the actual shop or a specific location
* Anything that could create a “this isn’t you” moment for customers

**Copy safety tip**: if using any generic model cuts, label as “Sample styles / inspiration — client results coming soon.” Alternatively, omit gallery until real photos are available.

### C) Placeholder system in code (swap-ready)

Treat images as content slots so they can be replaced without redesign:

* heroImage
* aboutPortrait
* sectionImages[] (optional)
* galleryImages[] (optional)

Store these in a `content` file (JSON/TS object) so replacing assets is a single edit.

### D) Performance requirements (mobile-first)

Even with images, keep the site fast:

* Use WebP/AVIF
* Keep images ~1200px wide max for full-bleed; smaller for cards
* Lazy-load all images below the fold
* Prefer one hero image over sliders
* Use Next/Image optimization
* Use blur placeholders (LQIP) where possible

### E) Recommended launch approach (best compromise)

* Launch with **text-first** conversion layout
* Use **one tasteful AI-generated hero background** (abstract / non-misleading)
* Delay the portfolio-style gallery until real client photos are available (or clearly label as inspiration)

---

## 15) Assets needed from the barber (minimum)

1. Logo (SVG/PNG)
2. 12–24 best haircut photos (real work)
3. 1–2 portrait photos
4. Address + parking note
5. Hours
6. Phone
7. Booking link / provider
8. Price list (even approximate)
9. Review links (Google/Yelp/booking platform)

---

## 16) Codex task list (copy into issues)

### Project setup

* [ ] Create Next.js app (App Router)
* [ ] Add Tailwind
* [ ] Add basic layout components: Header, Footer, MobileStickyBar

### Pages

* [ ] Home page per wireframe
* [ ] Services page with menu data
* [ ] Gallery page with lightbox (optional until real photos)
* [ ] About page
* [ ] Contact page with map + contact blocks
* [ ] Book page (redirect or embed)

### UX + conversion

* [ ] Sticky header CTA
* [ ] Sticky mobile bottom bar
* [ ] Reusable CTA sections

### SEO + local

* [ ] Title/description per page
* [ ] LocalBusiness JSON-LD (address/phone/hours)
* [ ] Sitemap + robots

### Performance

* [ ] Image optimization (Next/Image)
* [ ] Lazy-load below fold
* [ ] Lighthouse pass (mobile)

---

## 17) Next steps

* Decide: appointment-only vs walk-ins
* Confirm booking provider (link or embed)
* Get price list + hours + address
* Choose 1 visual direction (light modern vs dark premium)
* Decide placeholder approach (abstract hero vs no images until real photos)

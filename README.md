# WITS Academy Secondary School — Landing Page

A modern, mobile-first landing page for **WITS Academy Secondary School** (Baudha,
Kathmandu · est. 1999 · _Education for Civilization_), built with Next.js 16, the
App Router, Tailwind CSS v4 and Framer Motion.

Design cues were drawn from findrealestate.com (aspirational hero, image cards,
generous whitespace) and istemlab.ai (bold type, trust strip, stat callouts,
bento gallery), reinterpreted in the school's green / royal-blue / gold crest palette.

## Run it

```bash
npm install      # if not already installed
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build && npm run start
```

## Sections

Navbar (sticky, glass on scroll, mobile slide-down menu) · Hero (animated image
collage + floating stat cards) · Animated stats counters · Achievements marquee ·
About / crest pillars · Academics program cards · Why-WITS feature grid · Campus
life bento gallery · Testimonials · Admissions CTA with enquiry form · Footer.

## Notes

- Logo: `public/schoollogo.jpg` (the school crest).
- Photography uses Unsplash placeholders — swap in real campus photos when available
  (see the `image` / `src` fields in `app/components/*`).
- Contact details (phone, email) in `CtaContact.tsx` and `Footer.tsx` are placeholders.
- Fully responsive and mobile-first; respects `prefers-reduced-motion`.

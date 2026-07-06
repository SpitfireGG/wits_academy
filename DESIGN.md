---
name: WITS Academy
description: Editorial, restrained landing page for a 25-year-old Kathmandu secondary school — warm paper, near-black ink, one forest-green accent.
colors:
  paper: "#f4f2ec"
  paper-2: "#eceae1"
  ink: "#16191a"
  ink-soft: "#575d5b"
  line: "#dedbd0"
  forest-400: "#4f8a5f"
  forest-500: "#2f7443"
  forest-600: "#1f5c33"
  forest-700: "#184a2a"
  forest-800: "#123a21"
  gold-500: "#cf9422"
  clay: "#b8654a"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Times New Roman, serif"
    fontSize: "clamp(2.6rem, 6vw, 4.6rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque, serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  oversized:
    fontFamily: "Bricolage Grotesque, serif"
    fontSize: "clamp(3.4rem, 9vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter Tight, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Inter Tight, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.18em"
rounded:
  editorial: "4px"
  card: "6px"
  chip: "16px"
  pill: "999px"
spacing:
  gutter: "1.25rem"
  section-y: "7rem"
  block: "2.5rem"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.7rem"
  button-ink-hover:
    backgroundColor: "#000000"
    textColor: "{colors.paper}"
  button-ghost:
    backgroundColor: "#00000000"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.7rem"
  input-underline:
    backgroundColor: "#00000000"
    textColor: "{colors.ink}"
    rounded: "0px"
    padding: "0.7rem 0.1rem"
  card-editorial:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "1.75rem"
---

# Design System: WITS Academy

## 1. Overview

**Creative North Star: "The School Prospectus, Reimagined"**

This is the print prospectus of a school that has nothing to prove — reset for the screen. It carries itself like a well-set piece of editorial: a warm paper stock, ink-black setting, wide margins, and a single considered accent of school green. Confidence is expressed through restraint and typography, never through decoration. The register is **brand** (design *is* the product), and the voice is *Editorial · Refined · Understated* — a twenty-five-year-old institution that reassures protective parents and inspires students without raising its voice.

Density is deliberately low. Whitespace and hairline rules (1px, `#dedbd0`) do the structural work that borders and boxes would do in a busier design. Photography is treated as editorial imagery — often lightly desaturated at rest, resolving to full color on interaction — not as decorative filler. The one place the system permits spectacle is *earned dimensionality*: the 3D mouse-tilt hero and the glossy silver "approach" ring, both of which reward attention and both of which degrade to calm, legible defaults.

This system explicitly rejects the generic "AI-generated" look that a first draft fell into: rainbow mesh-gradient backgrounds, decorative glassmorphism, gradient text, purple/blue "tech" gradients, identical icon-card grids, and gradient-accented hero-metric templates. It also rejects clip-arty school-website clichés — garish primary-color blocks, stock "students pointing at a laptop," and clutter.

**Key Characteristics:**
- Warm paper canvas (`#f4f2ec`), near-black ink (`#16191a`), **one** green accent used sparingly.
- Editorial hierarchy: characterful grotesque display over a clean humanist body; size and weight carry it.
- Near-square corners (4–6px) as the default; the pill radius is reserved for buttons and small chips.
- Depth from hairlines, generous negative space, and a very small set of earned 3D moments.
- Motion is intentional and reduced-motion safe; nothing moves without reason.

## 2. Colors

A warm-neutral editorial base with a single deep-green accent and rare metallic/earth secondaries.

### Primary
- **Forest Green** (`#1f5c33`, `forest-600`): The school's crest green, and the only saturated color allowed to carry meaning. Used for the accent word in headings, links, small emphasis marks, and iconography — never as large fills on light surfaces. On dark (ink) surfaces its lighter sibling **Meadow** (`#4f8a5f`, `forest-400`) takes over for links and icons so contrast holds.

### Secondary
- **Gold** (`#cf9422`, `gold-500`): Strictly decorative and rare — star rating glyphs only. Never body text, never a fill behind text.
- **Clay** (`#b8654a`, `clay`): Reserved warm accent for future editorial flourishes; unused on the current page by design.

### Neutral
- **Paper** (`#f4f2ec`): The body background. A warm off-white that reads as paper stock, not "cream card."
- **Paper-2** (`#eceae1`): The alternating section background and the punched-hole center of the approach ring. Creates rhythm between sections without a hard color change.
- **Ink** (`#16191a`): Primary text on light; also the full background of the dark break sections (BigType, Campus, Contact, Footer).
- **Ink-Soft** (`#575d5b`): Secondary/body prose and captions on light surfaces. Verified ≥4.5:1 on paper.
- **Line** (`#dedbd0`): Every hairline — dividers, card edges, input underlines, the divided grids.

### Named Rules
**The One Green Rule.** Forest green appears on ≤10% of any screen. It is an accent of *meaning* (the emphasized word, the active link, the crest), never a background wash. If green is filling a large area on a light surface, it's wrong.

**The Ink-and-Paper Rule.** Every dark section is true ink (`#16191a`), every light section is paper or paper-2. There is no third "surface color." Depth comes from the ink/paper alternation and hairlines, not from tinted card stacks.

## 3. Typography

**Display Font:** Bricolage Grotesque (fallback: Times New Roman, serif)
**Body Font:** Inter Tight (fallback: ui-sans-serif, system-ui)

**Character:** A deliberate contrast pairing — Bricolage is a warm, slightly idiosyncratic grotesque with real personality in its display weights; Inter Tight is a clean, condensed humanist sans that stays quiet under long prose. The two never compete: one sets, the other reads.

### Hierarchy
- **Display** (700, `clamp(2.6rem, 6vw, 4.6rem)`, lh 0.98, tracking -0.03em): The hero headline only. `text-wrap: balance`.
- **Oversized** (700, up to 6rem, lh 0.9): The stacked editorial words in the dark "Learn / Grow / Lead" break. Ceiling held at 6rem — the page states, never shouts.
- **Headline** (700, `clamp(2.25rem, 4vw, 3rem)`, lh 1.05): Section titles.
- **Body** (400, 1.0625rem, lh 1.6): Prose in `ink-soft`. Capped at ~65–75ch via `max-w-*` containers.
- **Label** (600, 0.72rem, tracking 0.18em, uppercase): The section kicker / eyebrow.

### Named Rules
**The 6rem Ceiling Rule.** No type exceeds 6rem. Display maxes at 4.6rem, the one oversized moment at 6rem. Anything larger is shouting.

**The Sparing Kicker Rule.** The uppercase tracked label is a real brand element, but it is *not* mandatory scaffolding above every section. Where a section can carry itself on its headline alone, drop the kicker. (Current tension: the kicker currently appears on most sections — trim it toward alternating cadence.)

## 4. Elevation

Predominantly flat. Depth is carried by the ink/paper alternation, hairlines, and negative space — not by a shadow stack. Shadows appear in exactly two roles: (1) subtle lift on the few floating editorial cards, and (2) the specular, sculpted shadows that make the two 3D moments read as physical objects.

### Shadow Vocabulary
- **Card** (`0 1px 2px rgba(22,25,26,0.04), 0 12px 30px -18px rgba(22,25,26,0.28)`): The floating crest/stat chips and the About overlay card. Soft, low, ambient.
- **Lift** (`0 30px 60px -30px rgba(22,25,26,0.45)`): The mobile nav sheet and large lifted surfaces.
- **3D** (`0 2px 4px …, 0 8px 16px -6px …, 0 30px 60px -24px rgba(22,25,26,0.3)`): Layered, three-stop shadow for the hero's depth cards so they sit convincingly in perspective space.
- **Ring / Sphere (specular)**: Inset light + outer drop on the approach ring (`ring-3d`) and its numbered spheres (`sphere-3d`) — the glossy silver look. This is the only intentionally "material" surface in the system.

### Named Rules
**The Flat-Paper Rule.** Light sections are flat by default. A shadow on a light surface must justify itself as *physical lift* (a floating chip, a 3D object) — never as decoration around a static card.

## 5. Components

### Buttons
- **Shape:** Fully pill (`999px`). The one place roundness is allowed.
- **Primary (Ink):** Ink fill (`#16191a`), paper text, `0.95rem 1.7rem` padding. Hover deepens to pure black and lifts `translateY(-2px)`.
- **Ghost:** Transparent with a 1px `line` border and ink text. Hover darkens the border to ink and lifts. Used as the secondary hero action.

### Cards / Containers
- **Corner Style:** Near-square — `4px` (editorial imagery, tiles) to `6px` (content cards). The square corner is the signature; it reads as print, not app.
- **Background:** Paper on light sections; ink with `border-white/10` hairlines on dark sections.
- **Border:** 1px `line`. Grids are built as `gap-px` over a `line` background so cells are separated by true hairlines, not gutters.
- **Shadow Strategy:** Flat by default (see Elevation). Only floating chips carry `card`.
- **The No-Card Default.** Prefer hairline-divided rows and open editorial blocks. Reach for a bordered card only when grouping genuinely needs a boundary. Nested cards are forbidden.

### Inputs / Fields
- **Style:** Underline only — no box. Transparent background, 1px `line` bottom border, generous vertical padding. This keeps forms feeling like a printed form, not a web widget.
- **Focus:** Bottom border shifts to ink (`#16191a`). Placeholder text must clear 4.5:1 (current placeholder is a known contrast risk — see audit).
- **Labels:** Small uppercase `ink-soft` above each field; every input is labelled.

### Navigation
- **Style:** Transparent over the hero, resolving to `paper/85` + backdrop-blur + a `line` bottom border once scrolled past 12px. Crest + wordmark left, text links center-right, one ink pill CTA.
- **States:** Links are `ink-soft` → `ink` on hover, with a green underline that grows from the left.
- **Mobile:** Hamburger opens a paper sheet of oversized display links + a full-width ink CTA; body scroll locks while open.

### The Approach Ring (signature component)
A glossy silver 3D torus (`ring-3d`) with a paper-2 punched center, five dark numbered spheres (`sphere-3d`) placed evenly around it, and five floating `node-card`s connected by dashed hairlines. It is the one deliberately spectacular element and it *is* a real sequence (the 5-stage student journey), which earns the numbering. Below `xl` it collapses to a clean vertical numbered stepper — never a cramped circle.

## 6. Do's and Don'ts

### Do:
- **Do** keep the body on warm paper (`#f4f2ec`) and text in ink (`#16191a`) / ink-soft (`#575d5b`); verify ink-soft clears 4.5:1 on whichever paper it sits on.
- **Do** use forest green (`#1f5c33`) as a rare accent of meaning — the emphasized word, the link, the crest — on ≤10% of any screen; switch to `forest-400` for green on ink.
- **Do** carry hierarchy with Bricolage display weight and scale; cap all type at 6rem.
- **Do** default to hairline-divided rows and open blocks; use `gap-px` over a `line` background for grids.
- **Do** keep corners near-square (4–6px); reserve the pill only for buttons and chips.
- **Do** give every animation — the hero tilt, reveals, count-ups, the marquee — a `prefers-reduced-motion` fallback.
- **Do** trim the uppercase kicker toward an alternating cadence rather than stamping it on every section.

### Don't:
- **Don't** reintroduce the AI-slop tells this redesign exists to kill: rainbow **mesh-gradient backgrounds**, decorative **glassmorphism**, **gradient text** (`background-clip: text`), purple/blue **tech gradients**, **identical icon-card grids**, or the **hero-metric template**.
- **Don't** use clip-arty school clichés: garish primary-color blocks, stock "students pointing at a laptop," or clutter.
- **Don't** fill large light areas with green — that breaks The One Green Rule.
- **Don't** introduce a third surface color; every section is ink or paper/paper-2.
- **Don't** put gray text on the green or gold — use paper/white or a transparency of ink instead.
- **Don't** use a colored side-stripe border, nested cards, or bounce/elastic easing.
- **Don't** let a heading word overflow its container at any breakpoint; reduce the clamp max or rewrite the copy.

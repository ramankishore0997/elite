# Design Brief

## Direction

Elite Market Community — Premium luxury fintech landing page with dark mode glassmorphism, gold accents, and refined typography for high-trust financial education.

## Tone

Luxury minimalist — refined, wealthy, exclusive, high-trust. Black + gold + white evokes premium wealth management platforms. Anti-generic fintech.

## Differentiation

Glassmorphism cards with semi-transparent white overlays and backdrop blur create visual depth and premium feel; vibrant gold accent buttons and borders pop against deep charcoal, signaling actionable CTAs and community prestige.

## Color Palette

| Token      | OKLCH           | Role                          |
| ---------- | --------------- | ----------------------------- |
| background | 0.13 0.01 280   | Deep charcoal, near black     |
| foreground | 0.95 0.01 280   | Cream white, high contrast    |
| card       | 0.16 0.02 280   | Slightly lighter card surface |
| primary    | 0.65 0.18 50    | Vibrant gold accent           |
| accent     | 0.65 0.18 50    | Gold for highlights, CTAs     |
| muted      | 0.22 0.02 280   | Subtle dividers, borders      |
| border     | 0.25 0.015 280  | Soft-edge transparency        |

## Typography

- Display: Space Grotesk — geometric, modern, premium headlines
- Body: General Sans — clean, refined, readable UI text
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-4xl font-bold`, label `text-sm font-semibold tracking-widest`, body `text-base leading-relaxed`

## Elevation & Depth

Glassmorphism with 0.8 opacity cards, 16px backdrop blur, subtle 0.3 opacity borders. Shadow hierarchy: subtle (2px 8px), glass (8px 32px), elevated (20px 60px). No flat surfaces; every zone has deliberate layering.

## Structural Zones

| Zone    | Background                     | Border                    | Notes                                      |
| ------- | ------------------------------ | ------------------------- | ------------------------------------------ |
| Header  | bg-background with subtle blur | border-b border-border/30 | Sticky nav, premium spacing                |
| Hero    | bg-background with decoration  | —                         | Large headline, gold CTA, decorative icons |
| Content | bg-background, alternating     | —                         | Card grid sections, smooth spacing        |
| Cards   | glass-card (glassmorphism)     | border-border/30          | 12px radius, 0.8 opacity, hover elevation |
| Footer  | bg-card/50 with border-t       | border-t border-border    | Disclaimer, secondary CTA, premium spacing |

## Spacing & Rhythm

Mobile-first 24px (1.5rem) section gaps, 16px card internal padding, 12px component spacing. Alternating content sections with 2px divider borders. Generous whitespace reinforces luxury; no cramping.

## Component Patterns

- Buttons: gold (primary) or muted-outline, 12px radius, smooth 0.3s hover scale/shadow elevation
- Cards: glassmorphic with 0.8 opacity, 12px radius, border-border/30, hover: scale 1.02 + shadow-elevated transition
- Badges: muted background, foreground text, 6px radius, inline
- Icons: Lucide (24px standard, 32px hero), gold accent on interactive

## Motion

- Entrance: fade-in 0.4s ease-out, slide-up 0.5s cubic-bezier(0.4,0,0.2,1), staggered children 0.1s delay
- Hover: scale 1.02 with shadow-elevated 0.3s smooth, color accent gold on interactive elements
- Decorative: subtle background blur, card reflections via gradient overlays

## Constraints

- No investment advice, profit guarantees, or misleading risk minimization in copy
- No email newsletter form (out of scope)
- No live member count API (static placeholder stats only)
- Mobile-first: responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
- Fast loading: optimize image sizes, defer non-critical animations
- Accessibility: AA+ contrast (gold on dark = 4.1:1+), semantic HTML, focus states

## Signature Detail

Glassmorphic cards with soft gold accent borders and semi-transparent overlays create a signature premium fintech aesthetic — visual depth and luxury without skeuomorphism or cliché.

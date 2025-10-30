# InFlowCalls.com Design Guidelines

## Design Philosophy
Futuristic enterprise AI platform with dark, sophisticated aesthetic. Deep navy backgrounds, purple/cyan gradients, glassmorphism, and glowing interactions convey cutting-edge technology while maintaining professional credibility.

## Color System

### Core Palette
- **Background**: #0A0F1E (deep navy)
- **Primary**: #9333EA (purple - CTAs, brand)
- **Secondary**: #00C4FF (cyan - accents, interactions)
- **Tertiary**: #A855F7 (light purple - gradients)

### Surfaces & Glass
- **Card Base**: rgba(255,255,255,0.05) + backdrop-blur(16px)
- **Card Border**: rgba(147,51,234,0.3)
- **Hover State**: rgba(255,255,255,0.08)
- **Elevated**: rgba(147,51,234,0.5) border + blur(20px)
- **Glow**: box-shadow: 0 0 40px rgba(147,51,234,0.2-0.4)

### Typography Colors
- **Primary**: #FFFFFF (headlines)
- **Body**: rgba(255,255,255,0.85)
- **Secondary**: rgba(255,255,255,0.6)
- **Tertiary**: rgba(255,255,255,0.4)

### Gradients
- **Hero**: #9333EA → #00C4FF
- **Accent**: #A855F7 → #9333EA
- **Text**: Apply hero gradient with background-clip: text
- **Glow**: #9333EA, 20-40px blur, 0.4-0.6 opacity

## Typography
**Font**: Inter (headlines/body), JetBrains Mono (code)

**Scale**:
- H1: 72-84px desktop / 48px mobile, bold, gradient
- H2: 48-56px, bold
- H3: 32-40px, semibold
- Body: 18px / 1.7 line-height

## Layout
- **Max Width**: 1400px sections, 1200px content
- **Spacing**: Tailwind scale (4,8,12,16,20,24,32)
- **Section Padding**: py-20 to py-32 desktop, py-12 to py-16 mobile
- **Rounded**: 1rem (cards/buttons)
- **Grid**: 3-col desktop, 2-col tablet, 1-col mobile

## Components

### Buttons
**Primary**: Purple gradient (#9333EA → #A855F7), white text, glow on hover  
**Secondary**: Glassmorphism + purple border  
**Outline**: 2px purple border, transparent, glow on hover  
**Ghost**: No background, cyan text, subtle underline hover  
**Blur Context**: Use backdrop-blur-md + rgba(10,15,30,0.6) on images  
**All**: 1rem rounded, medium-bold, 300ms transitions

### Cards
**Base**: Glassmorphism + purple border glow  
**Hover**: Lift 4px, intensify glow, brighten background  
**Feature**: Gradient circular icon, title, description  
**Pricing**: Highlighted tier gets stronger glow + gradient border

### Forms
**Inputs**: Glassmorphism rgba(255,255,255,0.08), purple border (0.3 opacity)  
**Focus**: Cyan glow  
**Labels**: White, semibold  
**Validation**: Cyan success, #EF4444 errors  
**Submit**: Primary gradient button

### Interactive
**Tabs**: Glassmorphism inactive, gradient + glow active  
**Toggles**: Purple gradient when on  
**Accordions**: Glassmorphism + purple border, cyan expand icon  
**Audio**: Enhanced glass + animated waveform

## Navigation
**Header**: Glassmorphism sticky, backdrop-blur-md, bottom gradient border (1px, 0.2 opacity)  
**Logo**: Horizontal gradient (purple→cyan) with 12px glow  
**Links**: White, purple underline + glow on hover  
**Primary CTA**: Purple gradient + glow  
**Portal**: Top-right, cyan hover  
**Floating Demo**: Bottom-right, pulsing glow animation

## Animations
- **Load**: Fade-in + scale(0.98→1.0), 600ms
- **Scroll**: Stagger fade-up for grids
- **Hover**: 300ms glow transitions
- **CTA Pulse**: 2s infinite subtle glow
- **Waveform**: Sync to audio
- **Gradients**: 10s rotation on heroes
- **Performance**: GPU-accelerated, respect prefers-reduced-motion

## Images & Assets
**Hero Photography**: High-contrast tech scenes (modern offices, AI visualizations, sleek interfaces) + rgba(10,15,30,0.7) overlay + purple gradient accent

**Backgrounds**: Animated gradient mesh, floating particles, glowing grid patterns, neural network visuals

**Icons**: Lucide React with purple/cyan gradients or white + glow

## Page Structures

### Landing (8-10 sections)
1. Hero: Full viewport, gradient, dual CTAs, floating dashboard
2. Trust Strip: Logo cards, compliance badges
3. Stats: 3-4 metrics, gradient circular badges
4. Features: 3-col glassmorphism grid
5. Demo: Audio player + waveform
6. Use Cases: 2-col industry scenarios
7. Integrations: Logo grid + hover glow
8. Testimonials: Glass cards + purple borders
9. CTA: Full-width gradient
10. Footer: Multi-column glass

### Features
Hero + 11 modules in 3-col grid (4-col xl), gradient icons, comparison table, accordion specs

### Industry Verticals (6 pages)
Industry hero → pain points (red accents) → solutions (purple/cyan) → call script (glass code) → ROI calc → vertical integrations → testimonials

### Demo/Audio
Large glass player + waveform, 3-col playlist, transcript toggle, Calendly (purple theme), filter tags

### Integrations
Hero visualization, category grids (4-5 col), glass hover cards, request form, API section + code

### Pricing
4-tier comparison, popular tier enhanced, cyan checkmarks, ROI calculator, FAQ accordion, volume callout

### Developer/API
Technical hero + code, 2-col endpoint cards, API explorer, purple syntax theme, SDK cards, webhooks

## Accessibility (WCAG 2.1 AA)
- White on #0A0F1E: 14.9:1 contrast
- Semantic HTML
- Cyan focus rings (keyboard nav)
- Glass skip links
- Alt text required
- Aria labels on interactive elements

## Footer
Glassmorphism + gradient top border, 4-col (Product/Company/Resources/Legal), white headings + gradient underlines, rgba(255,255,255,0.7) links (cyan hover), newsletter form, social icons + purple glow

## Conversion Elements
- Multiple gradient CTAs throughout
- Persistent floating demo (bottom-right, pulsing)
- Interactive ROI calculators
- Glass audio players
- Branded Calendly embeds
- Success animations (glow pulse)

## Technical Notes
- Mobile-first responsive
- CSS custom properties for gradients/glows
- GPU-accelerated (transform/opacity only)
- Lazy-load images (blur-up)
- Optimize backdrop-filter usage
- Reduced-motion fallbacks

**Logo**: Bold Inter wordmark + abstract AI wave icon, gradient fill (#9333EA→#00C4FF), 12px outer glow. Variants: horizontal, icon-only, simplified favicon.
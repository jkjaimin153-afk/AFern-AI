# InFlowCalls.com Design Guidelines

## Design Approach
Premium, high-converting enterprise website with approachable, bright aesthetic. Light, welcoming color palette with energetic accents that feels professional yet friendly. Emphasize clarity, modern sophistication, and visual interest through gradients, subtle effects, and strategic accent placement.

## Color Palette

### Primary Colors
- **Primary Teal**: #137C8B (trustworthy, professional - use for buttons, headlines, key actions)
- **Accent Coral**: #FF7A59 (energetic, warm - use for highlights, hover states, CTAs)
- **Saffron Yellow**: #FFC857 (optimistic - use sparingly for ROI stats, success indicators)

### Neutral Base
- **Background**: #F5F7FA (light, soft neutral - main page background)
- **Surface White**: #FFFFFF (cards, elevated surfaces)
- **Text Primary**: #2C3E50 (dark charcoal for headlines)
- **Text Secondary**: #4A4F5A (soft gray for body copy)
- **Text Tertiary**: #8B95A5 (light gray for supporting text)

### Gradients
- **Hero Gradient**: Teal (#137C8B) → Aqua (#00C4CC) - use behind CTAs and hero sections
- **Accent Gradient**: Coral (#FF7A59) → Peach (#FFB199) - use for highlights and interactive elements
- **Logo Gradient**: Teal (#137C8B) → Bright Aqua (#4DD9E8) - metallic effect with subtle glow

### Theme
- **Default**: Light mode (bright, approachable)
- **Dark Mode**: Available as toggle - charcoal (#1A1F2E) background with teal (#137C8B) accents

## Typography
- **Headlines**: Playfair Display SC (refined serif with wide kerning for premium feel)
  - Hero H1: 60-72px desktop, bold weight
  - H2: 40-48px, semibold
  - H3: 28-32px, semibold
  - Color: Primary teal (#137C8B) for main headlines
- **Body Copy**: Inter (clean, readable sans-serif)
  - Base: 16px / 1.6 line-height
  - Color: #4A4F5A (soft gray)
- **Tone**: Confident yet friendly, clear, approachable for SMB pages; professional for enterprise/technical pages

## Layout System
- **Max Content Width**: 1200-1400px
- **Gutter**: 24px
- **Grid**: Responsive grid-based layout
- **Spacing**: Strategic use of whitespace with visual accents to prevent "too simple" feel
- **Cards**: 
  - Rounded corners (12-16px)
  - Soft shadows with subtle teal/coral border accents
  - Hover: lift effect with enhanced shadow + accent border glow
- **Visual Accents**: 
  - Gradient washes behind hero CTAs
  - Corner ribbons or pill badges for ROI stats
  - Dotted connector lines in feature grids
  - Glassmorphism overlays for audio players
  - Subtle border accents in teal/coral on interactive elements

## Logo Design

### Premium InFlowCalls Logo
- **Wordmark**: Playfair Display SC with increased kerning, bold weight
- **Emblem**: Circular badge featuring:
  - Abstract call-wave glyph (flowing sine wave merging with phone icon)
  - Metallic gradient: Teal (#137C8B) → Bright Aqua (#4DD9E8)
  - Faint inner glow for premium depth
  - Gold accent ring for luxury touch
- **Variants**: 
  - Horizontal: Logo + wordmark side-by-side
  - Stacked: Logo above wordmark (for mobile)
  - Monochrome: Single-color version for special uses
  - Favicon: Simplified emblem only

## Navigation & Header
- **Sticky Navigation**: Light background (#FFFFFF) with subtle shadow, teal accent border bottom
- **Primary CTA**: Teal button with gradient on hover
- **Premium Logo**: Horizontal variant with gradient emblem
- **Customer Portal Login**: Top-right, coral accent on hover
- **Floating Demo Button**: Persistent bottom-right, coral gradient with pulse animation
- **Structure**: 8-10 main navigation items with teal active state

## Component Design

### Buttons
- **Primary**: Teal (#137C8B) with gradient overlay on hover, white text
- **Secondary**: Coral (#FF7A59) with gradient overlay on hover, white text
- **Outline**: Teal border with teal text, gradient background on hover
- **Accent**: Saffron yellow for special CTAs (limited use)
- **All buttons**: Rounded (8px), medium font weight, subtle shadow

### Cards
- **Background**: White (#FFFFFF) on light background
- **Border**: 1px solid light gray with teal accent on left/top edge
- **Shadow**: Soft, multi-layer shadow
- **Hover**: Lift effect (translateY -4px) + enhanced shadow + accent border glow
- **Special Cards**: Glassmorphism effect for audio players (frosted glass with backdrop blur)

### Forms
- **Inputs**: White background, light gray border, teal focus ring
- **Labels**: Soft gray (#4A4F5A), clear hierarchy
- **Validation**: Coral for errors, teal for success
- **Spacing**: Generous padding for breathing room

### Visual Accents
- **ROI Stats**: Circular badges with saffron gradient backgrounds
- **Feature Icons**: Teal/coral gradient circles with white icons
- **Section Dividers**: Dotted lines with gradient fade
- **Highlight Boxes**: Light teal/coral background tints (5-10% opacity)

## Animation & Interactions
- **Hero**: Fade + subtle parallax, gradient animation
- **Cards**: Lift on hover (translateY -4px) + glow effect
- **CTAs**: Pulse animation on floating button, gradient shift on hover
- **Audio Players**: Waveform animation, glassmorphism fade-in
- **Performance**: Respect prefers-reduced-motion
- **Philosophy**: Smooth, purposeful animations that add delight without distraction

## Images & Visual Assets
- **Hero Sections**: High-quality lifestyle photography with gradient overlays
  - People on phones in bright, modern offices
  - Boutique hotels with natural lighting
  - Small business storefronts
  - Field technicians in action
  - Salon/spa environments with warm tones
  - Law firm/professional settings
- **Background Art**: Abstract AI waveforms with teal/coral gradients
- **Product Assets**: Animated waveform demo with gradient play button
- **Icons**: Lucide React icons with teal/coral gradient fills
- **Premium Emblem**: Call-wave glyph with metallic gradient

## Page-Specific Requirements

### Home/Landing Page
- Large hero with gradient background overlay (teal→aqua)
- Animated waveform demo with coral play button
- Dual CTAs with gradient backgrounds and hover effects
- Trust strip with integration logos + HIPAA/SOC2 badges on light background
- KPI band with saffron gradient circular badges
- Three hero variations for A/B testing

### Product/Features Page
- 11 feature modules with gradient icon backgrounds
- Dotted connector lines between features
- Accent borders on feature cards
- Screenshot mocks with subtle shadows

### Industry Vertical Pages (6 pages)
- Industry-specific hero with gradient overlay
- Pain points in coral-accented boxes
- Solutions in teal-accented boxes
- Sample call script with glassmorphism container
- Integration logos with hover effects
- ROI calculator with saffron accent badges

### Demo & Audio Library
- Interactive audio player with glassmorphism effect
- Gradient play buttons (coral)
- Transcript toggles with accent highlights
- Embedded calendar widget with teal theme

### Integrations Page
- Logo grid with subtle shadow cards
- Hover: accent border glow (teal)
- Category headers with gradient underlines
- "Request an integration" form with coral submit button

### Pricing Page
- 4-tier comparison table with teal header
- Popular tier: coral accent border and badge
- Calculator widget with gradient result badges
- Billing FAQ with expandable sections (teal icons)

### Developer/API Page
- Code snippet examples with teal syntax highlighting
- Endpoint cards with accent left borders
- Technical but still visually appealing with strategic gradients

## Accessibility
- WCAG 2.1 AA compliance
- Semantic HTML throughout
- Sufficient color contrast (all text meets 4.5:1 minimum)
- Keyboard navigation support
- Skip-to-content link
- Alt text for all images
- Aria labels for all interactive elements
- Focus indicators with teal rings

## Footer
- Light background (#FFFFFF) with subtle top border
- Multi-column layout with teal headings
- Quick links with teal hover states
- Social icons with gradient on hover
- Newsletter form with coral submit button
- Privacy, terms, accessibility links

## Conversion Elements
- Multiple form types with consistent teal/coral theming
- Calendar integration with brand colors
- Gradient CTAs strategically placed throughout
- Audio demo with glassmorphism player
- Interactive calculators with saffron result badges
- Floating demo button with pulse animation

## Technical Notes
- Responsive design for all viewports
- Lazy-load offscreen images
- Optimized image formats
- Smooth gradient transitions
- Fast loading while maintaining premium visual effects
- CSS custom properties for easy theme adjustments

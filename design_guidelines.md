# InFlowCalls.com Design Guidelines

## Design Approach
Premium, high-converting enterprise website with corporate-luxury aesthetic. Navy-blue + black primary palette with bright electric cyan accents. Emphasize negative space, elegance, and modern professionalism.

## Color Palette
- **Primary Navy**: #0b2340
- **Rich Black**: #000000
- **Accent Cyan**: #00e0ff (for CTAs and highlights)
- **Neutral Greys**: For body text and secondary elements

## Typography
- **Headlines**: Playfair Display (or elegant serif alternative)
  - Hero H1: 60-72px desktop
  - Clear hierarchy with H1/H2/H3 throughout
- **Body Copy**: Inter or Montserrat (clean geometric sans-serif)
- **Tone**: Confident, clear, slightly conversational for SMB pages; more formal for enterprise/technical pages

## Layout System
- **Max Content Width**: 1200-1400px
- **Gutter**: 24px
- **Grid**: Responsive grid-based layout
- **Spacing**: Generous negative space throughout
- **Cards**: 2xl rounded corners with soft shadows
- **Theme**: Default to dark/navy theme with light/dark toggle option

## Navigation & Header
- **Sticky Navigation**: 8-10px shadow
- **Primary CTA**: Right-aligned in header
- **Customer Portal Login**: Top-right
- **Floating Demo Button**: Persistent bottom-right throughout site
- **Structure**: 8-10 main navigation items

## Component Design
- **Buttons**: 
  - Primary: Bright cyan (#00e0ff) background
  - Secondary: Outline style
  - Buttons on images: Blurred backgrounds, no hover/active interactions (Button component handles its own states)
- **Cards**: 2xl rounded, soft shadows, hover state with scale 1.02
- **Forms**: Clean, spacious with clear labels and validation
- **Modals**: For audio demo players and calendar widgets

## Animation & Interactions
- **Hero**: Fade + parallax effect
- **Cards**: Subtle hover scale (1.02)
- **CTAs**: Micro-shake on hover
- **Performance**: Respect prefers-reduced-motion
- **Philosophy**: Performant, subtle, purposeful animations only

## Images & Visual Assets
- **Hero Sections**: High-quality lifestyle photography
  - People on phones
  - Boutique hotels
  - Small business storefronts
  - Field technicians
  - Salon/spa environments
  - Law firm/professional settings
- **Background Art**: Abstract AI waveforms and stylized phone icons
- **Product Assets**: Animated 12-15s waveform demo with play button
- **Icons**: Use Heroicons or similar modern icon library
- **Logo**: Premium wordmark + minimal icon (phone waveform + incoming arrow), navy/black variants

## Page-Specific Requirements

### Home/Landing Page
- Large hero with animated waveform demo and play button
- Dual CTAs (primary "Request 5-Min Demo", secondary "Listen to demo call")
- Trust strip with 6 integration logos + HIPAA/SOC2 badges
- KPI band with 3 stats (use 0 as placeholder numbers)
- Three hero variations for A/B testing: product-led, industry-led, ROI-led

### Product/Features Page
- 11 feature modules, each with icon, description, benefit bullets, screenshot mock
- Organized sections with clear visual hierarchy

### Industry Vertical Pages (6 pages)
- Industry-specific hero imagery
- Pain points section (3 bullets)
- Solutions section (3 bullets)
- Sample call script dialogue (6-10 lines)
- Integration logos
- ROI calculator with placeholder metrics

### Demo & Audio Library
- Interactive audio player with 4 scenarios
- Transcript toggles and annotations
- Embedded calendar widget for demo requests

### Integrations Page
- Logo grid organized by category
- One-line explanations per integration
- "Request an integration" form

### Pricing Page
- 4-tier comparison table (Starter, Growth, Pro, Enterprise)
- Per-call/per-seat calculator widget (functional UI, zeroed rates)
- Billing FAQ section

### Developer/API Page
- Code snippet examples (Node.js, Python)
- Endpoint documentation with request/response schemas
- Technical, developer-focused aesthetic

## Accessibility
- WCAG 2.1 AA compliance
- Semantic HTML throughout
- Keyboard navigation support
- Skip-to-content link
- Alt text for all images
- Aria labels for all buttons and forms

## Footer
- Multi-column layout
- Quick links, contact info, social icons
- Privacy, terms, accessibility statement
- Newsletter sign-up form
- Comprehensive yet organized

## Conversion Elements
- Multiple form types: demo request, contact, newsletter, integration request
- Calendar integration (Calendly/Google Calendar)
- Lead scoring indicators for sales
- Multiple CTAs throughout each page
- Audio demo accessibility (users can hear AI in action)

## Technical Notes
- Responsive design for all viewports
- Lazy-load offscreen images with srcset
- Optimized image formats
- Fast loading, premium feel maintained across devices
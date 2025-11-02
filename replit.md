# Afern AI - AI Receptionist & Calling Platform

## Overview

Afern AI is a premium, enterprise-grade AI receptionist and outbound calling platform designed for SMBs and mid-market customers. The application provides automated call answering, appointment booking, payment processing, and CRM integration to help businesses capture revenue from missed calls and automate customer communications 24/7.

The platform features a marketing website with industry-specific landing pages, product demonstrations, integration showcases, and lead capture forms. The design emphasizes a modern, futuristic aesthetic with professional credibility, featuring a premium fern-themed logo (Leaf icon). Targets service-based businesses across hospitality, home services, healthcare, legal, salons, and e-commerce sectors.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Rendering**: React with TypeScript in single-page application (SPA) mode using Wouter for client-side routing. Vite serves as the build tool and development server with HMR (Hot Module Replacement) support.

**UI Component System**: Radix UI primitives with shadcn/ui patterns, styled using Tailwind CSS with a custom design system. Components follow the "new-york" style variant with extensive use of CSS variables for theming.

**Design System**:
- **Color Palette**: Futuristic dark mode with purple/cyan gradient accents (#0A0F1E background, #9333EA primary purple, #00C4FF cyan, #A855F7 accent purple)
- **Visual Style**: Corporate AI aesthetic inspired by vapi.ai and fin.ai - glassmorphism effects, gradient backgrounds, glowing interactions, modern rounded corners
- **Typography**: Inter for all text (modern, clean sans-serif), large bold headlines with gradient text effects
- **Effects**: Backdrop blur, purple glow on interactive elements, gradient mesh backgrounds, smooth transitions
- **Custom CSS Variables**: HSL-based color system with purple/cyan gradients, glow utilities, glassmorphism utilities
- **Responsive Design**: Mobile-first approach with breakpoint at 768px, max content width 1200-1400px

**State Management**: TanStack Query (React Query) for server state with custom query client configuration. No global client state management library - relies on React hooks and component state.

**Form Handling**: React Hook Form with Zod schema validation for type-safe form submissions.

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js in ESM (ECMAScript Modules) mode.

**API Design**: RESTful API with JSON request/response bodies. Endpoints focused on lead capture:
- `POST /api/demo-requests` - Demo request submissions
- `POST /api/contact` - General contact form submissions  
- `POST /api/newsletter` - Newsletter signups
- `POST /api/integration-requests` - Integration feature requests

**Validation**: Zod schemas shared between client and server via the `@shared` directory for consistent validation rules.

**Development Mode**: Vite middleware integration for development with SSR template injection. Production mode serves static built assets.

**Logging**: Custom request/response logging middleware with duration tracking for API routes.

### Data Storage

**Database**: PostgreSQL (configured via Drizzle ORM with Neon serverless driver)

**ORM**: Drizzle ORM with schema-first approach defined in `shared/schema.ts`

**Schema Design**:
- `users` - User authentication (username/password)
- `demo_requests` - Demo request leads with business context
- `contact_submissions` - General contact form data
- `newsletter_signups` - Email list with unique constraint
- `integration_requests` - Feature/integration requests with priority

**Migrations**: Drizzle Kit for schema migrations stored in `/migrations` directory

**Fallback Storage**: In-memory storage implementation (`MemStorage`) for development/testing without database dependency

### External Dependencies

**UI Component Library**: 
- Radix UI primitives (@radix-ui/* packages) for accessible, unstyled components
- shadcn/ui configuration for styled component variants

**Styling**:
- Tailwind CSS with PostCSS for utility-first styling
- Custom CSS variables for theme system
- Autoprefixer for browser compatibility

**Database & ORM**:
- PostgreSQL via @neondatabase/serverless connector
- Drizzle ORM (v0.39.1) for type-safe database operations
- Drizzle Zod for schema-to-validation conversion

**Analytics**:
- Google Analytics 4 (GA4) via gtag.js
- Custom React hook for automatic page view tracking
- Event tracking utilities for conversion optimization

**Build & Development**:
- Vite for fast development and optimized production builds
- TSX for TypeScript execution in development
- esbuild for server-side bundling

**Fonts**:
- Google Fonts: Playfair Display (serif headings) and Inter (body text)
- Preconnect optimization for font loading

**Development Tools**:
- Replit-specific plugins: runtime error overlay, cartographer, dev banner
- TypeScript strict mode with path aliases (@/, @shared/, @assets/)

**Form & Validation**:
- React Hook Form for performant form state
- Zod for runtime type validation and schema definitions
- @hookform/resolvers for integration

**Routing**: Wouter for lightweight client-side routing (React Router alternative)

**Date Handling**: date-fns for date manipulation and formatting

**Utility Libraries**:
- clsx + tailwind-merge (via cn utility) for conditional class names
- class-variance-authority for component variant styling
- cmdk for command palette/search functionality
- embla-carousel-react for carousels

**Session Management**: connect-pg-simple for PostgreSQL-backed sessions (configured but not actively used in current implementation)
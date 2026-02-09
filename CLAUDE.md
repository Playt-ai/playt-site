# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 15 marketing website for Playt, an AI-powered inventory management and supply chain optimization platform for restaurants. Uses React 19, Tailwind CSS, Framer Motion for animations, and AWS services for authentication and notifications.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build production bundle
npm start        # Run production server
npm run lint     # Run Next.js linting
```

## Architecture

**Next.js App Router structure in `src/app/`:**

- `page.js` - Main landing page with hero, features, mockups, waitlist signup
- `components/` - Reusable components (Header, WaitlistForm)
- `components/animations/` - Animation wrappers (AnimatedSection, StaggerChildren)
- `components/layout/` - Layout components (Footer)
- `components/mockups/` - Interactive product mockups for marketing
- `api/` - Backend API routes for registration and user creation
- `actions.js` - Server actions for form handling
- Marketing pages: `pricing/`, `team/`, `careers/`, `about/`, `privacy/`, `eula/`

**Path Aliases:**
- `@/*` maps to `./src/*` (configured in jsconfig.json)

**Styling:**
- Tailwind CSS with custom colors: `playt-purple` (#6C63FF), `playt-yellow` (#FFDA63)
- Extended color scales (50-900) for both brand colors
- Custom fonts: Inter (sans), Poppins
- Custom shadows: `shadow-soft`, `shadow-soft-lg`, `shadow-glow-purple`
- Custom animations defined in tailwind.config.js
- Framer Motion for scroll-triggered and interactive animations

**Backend Integration:**
- AWS Cognito for user authentication
- AWS Lambda for waitlist management (via environment variables)
- Nodemailer with Gmail SMTP for email notifications
- Separate Django backend for user data

## Environment Variables

Required variables (see `.env`):
- AWS Cognito: `COGNITO_USER_POOL_ID`, `COGNITO_APP_CLIENT_ID`, `COGNITO_APP_CLIENT_SECRET`
- SMTP: `SMTP_USER`, `SMTP_PASS`, `NOTIFY_EMAIL`
- API endpoints: `WAITLIST_LAMBDA_URL`, `BACKEND_API_URL`

## Reference: playt-new-vibe

The `../playt-new-vibe/playt-new-vibe` directory contains functional TypeScript/React components that represent the actual product functionality. These were used as reference for creating marketing mockups:

- `InventoryDashboard.tsx` - Real-time inventory tracking with charts, alerts, stock levels
- `BuildOrders.tsx` - AI-powered order builder with quantity suggestions and vendor assignment
- `VendorChoice.tsx` - Vendor management with price comparison and order sending

The marketing site uses simplified mockup versions of these components in `src/app/components/mockups/` to showcase the product's capabilities without the full backend integration.

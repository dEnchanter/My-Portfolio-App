# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. The portfolio showcases professional experience, skills, projects, and contact information through a single-page application with smooth scroll navigation.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Architecture

### Application Structure

The app follows Next.js Pages Router architecture:

- **`pages/index.tsx`**: Main entry point that composes all portfolio sections in vertical scroll layout
- **`pages/_app.tsx`**: Global app wrapper that imports global styles
- **`components/`**: Reusable React components for each portfolio section
- **`styles/globals.css`**: Global Tailwind CSS with custom component classes

### Scroll Section Architecture

The portfolio uses a **snap-scroll single-page layout** defined in `pages/index.tsx:14-16`:
- Container uses `snap-y snap-mandatory overflow-y-scroll` for vertical snap scrolling
- Each section has snap alignment: `snap-start`, `snap-center`, or `snap-end`
- Section IDs (`#hero`, `#about`, `#experience`, `#skills`, `#projects`, `#contact`) are used for navigation anchors

Sections render in this order:
1. Header (sticky navigation)
2. Hero (typewriter intro + navigation buttons)
3. About (background information)
4. WorkExperience (career timeline)
5. Skills (technology proficiency)
6. Projects (portfolio work)
7. ContactMe (contact form)

### Component Patterns

Components follow consistent patterns:

**Type Props Pattern**: All components use TypeScript with `type Props = {}` declaration even when empty, providing extensibility for future props.

**Framer Motion Animations**: Most components use `framer-motion` for scroll-triggered animations:
- `initial`: Starting state (often with opacity: 0 and offset positions)
- `whileInView` or `animate`: Target state when in viewport
- `transition`: Animation duration and easing
- `viewport={{ once: true }}`: Prevents re-animation on scroll

Example from `components/About.tsx:6-9`:
```tsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1.5 }}
>
```

### Styling System

Uses Tailwind CSS with custom components defined in `styles/globals.css`:

- **`heroButton`**: Reusable button style with border, hover effects, and accent color `#F7AB0A`
- **`contactInput`**: Form input style with focus states

Theme colors:
- Primary background: `rgb(36,36,36)` (dark gray)
- Accent color: `#F7AB0A` (orange/yellow)
- Text: white and gray variations

Custom scrollbar styling via `tailwind-scrollbar` plugin configured in `tailwind.config.js:10-12`.

### Key Dependencies

- **next**: Latest version, using Pages Router (not App Router)
- **framer-motion**: v7.5.3 for animations
- **react-simple-typewriter**: v4.0.5 for Hero typewriter effect
- **react-social-icons**: v5.15.0 for social media icons in Header
- **@heroicons/react**: v2.0.13 for UI icons
- **react-hook-form**: v7.41.1 for ContactMe form handling

## Working with Components

When creating or modifying components:

1. Place components in `/components` directory as `.tsx` files
2. Import and use in section elements within `pages/index.tsx`
3. Use TypeScript with `type Props = {}` pattern
4. Apply Framer Motion for consistent scroll animations
5. Use Tailwind utility classes for styling
6. Reference accent color `#F7AB0A` for interactive elements
7. Ensure responsive design with Tailwind breakpoints (`md:`, `lg:`, `xl:`)

## Configuration Files

- **`tsconfig.json`**: TypeScript configured with strict mode, ES5 target
- **`next.config.js`**: Minimal config with React strict mode enabled
- **`tailwind.config.js`**: Scans `pages/**` and `components/**` for class names, includes scrollbar plugin
- **`postcss.config.js`**: Standard PostCSS setup for Tailwind

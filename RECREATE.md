# 🔁 How to Recreate This Website

A complete guide of prompts, architecture decisions, and instructions for an AI coding assistant (like Antigravity / Claude / GPT-4o) to recreate this scrollytelling personal portfolio from scratch.

---

## 📐 Overview

This is a **dark, premium personal portfolio** with:
- A cinematic scrollytelling hero section (image sequence on canvas, synced to scroll)
- 3D-tilting interactive cards with liquid glow effects
- A contact page with a functional mailto form
- A dedicated projects gallery
- A footer with live IST clock and all social links

---

## 🚀 Step 1 — Bootstrap the Project

```
AI Prompt:
"Create a new Next.js 14 app using App Router (TypeScript + Tailwind CSS) in the current directory.
Use npx create-next-app@latest ./ --ts --tailwind --app --eslint --no-src-dir --import-alias '@/*'.
Then install additional dependencies: framer-motion lucide-react."
```

---

## 🎨 Step 2 — Global Design System

```
AI Prompt:
"Set up a dark premium design system in globals.css and tailwind.config.ts.
Background: #121212. Use Inter font from Google Fonts via next/font.
Body: bg-[#121212], text-white, antialiased, selection:bg-white/20.
Add CSS variables for foreground, background, and card surface colors."
```

---

## 🖼 Step 3 — Scrollytelling Canvas Hero

```
AI Prompt:
"Build a ScrollyCanvas component in Next.js using Framer Motion's useScroll and useTransform.
It should:
- Occupy 500vh of scroll space with a sticky inner container at 100vh
- Render an HTML5 canvas element that draws images from an array (/frame_001.jpg to /frame_120.jpg)
- Use requestAnimationFrame to interpolate the image index based on scrollYProgress
- Preload all images on mount for smooth performance
- Overlay an <Overlay> component that animates 3 text sections based on scroll progress
Inside Overlay.tsx, create three motion.div sections staggered at 0–20%, 25–45%, 55–80% of scroll:
  Section 1: Centered — name (Panger Lkr) + subtitle
  Section 2: Left-aligned — 'Securing the digital frontier.' heading linking to /projects
  Section 3: Right-aligned — 'Bridging innovation and defense.' heading linking to /projects
Use useTransform on each section's opacity to set pointerEvents ('auto' when visible, 'none' when not) to prevent phantom clicks."
```

---

## 🃏 Step 4 — 3D Interactive Card Component

```
AI Prompt:
"Build a reusable TiltCard component using Framer Motion.
It should:
- Use useMotionValue for x, y mouse tracking
- Use useSpring for smooth spring-based rotation (stiffness: 300, damping: 30)
- Use useTransform to map mouse position to rotateX and rotateY (±10–14 degrees)
- Apply transformStyle: 'preserve-3d' and perspective: 1000–1400
- Inner content should use translateZ(30–80px) for depth layering
- On hover: fade in a mix-blend-overlay gradient (liquid sheen effect)
- On hover: an ambient glow div at translateZ(-30 to -60px) blooms behind the card
- Gracefully reset to 0 on mouseLeave"
```

---

## 📂 Step 5 — Selected Work Section (Home)

```
AI Prompt:
"Create a Projects.tsx component for the homepage Selected Work section.
Use the TiltCard / ProjectCard pattern described above.
Each card should have:
- An aspect-[4/3] image using next/image with a translateZ(60px) wrapper
- A liquid sheen overlay (mix-blend-overlay gradient, fades in on group-hover)
- Image zoom on hover (scale-[1.12], 1000ms ease-out)
- Text content (category in emerald, bold title) at translateZ(40px)
- An ArrowUpRight button that inverts on hover (white bg → black icon)
- A behind-card ambient glow at translateZ(-60px)
Each project should have its own accent gradient color.
Add subtle background ambient glows in the section behind the grid."
```

---

## 📄 Step 6 — Projects Gallery Page (`/projects`)

```
AI Prompt:
"Create src/app/projects/page.tsx — a dedicated projects page.
Header: pulsing badge, large gradient headline, subtitle.
Grid: 2-column responsive grid of project cards using the same 3D TiltCard pattern.
Each card: gradient badge number, title, description, tag chips, icon buttons.
Use staggered motion.div entrance animation (whileInView, staggerChildren).
Add background ambient glows (emerald + blue) for depth."
```

---

## 📬 Step 7 — Contact Page (`/contact`)

```
AI Prompt:
"Create src/app/contact/page.tsx with a 2-column layout.
Left column: heading, subtitle, and 3 info cards (email, phone, location) using TiltCard.
  - Email: mailto:contact@pangerlkr.link (clickable)
  - Phone: tel:+918132872135 (clickable)
  - Location: Kohima, Nagaland 797001, India
Right column: a contact form card (also TiltCard) with:
  - Name, Email inputs (side by side), Message textarea
  - On submit: opens mailto: link with pre-filled subject + body from form state
  - Submit button with gradient hover effect
Use Framer Motion containerVariants/itemVariants for staggered entrance."
```

---

## 🧭 Step 8 — Navigation

```
AI Prompt:
"Create a sticky Navigation component with Framer Motion slide-in from top.
Links: Home (/), Projects (/projects), Contact (/contact).
On scroll > 50px: add glassmorphism background (bg-[#121212]/80 backdrop-blur-md + border-b).
Active route: animated underline using Framer Motion layoutId='nav-indicator'.
Logo: 2-letter monogram in a white box + site name.
CTA button (right side): border pill linking to /contact."
```

---

## 🦶 Step 9 — Footer

```
AI Prompt:
"Create a Footer component styled with bg-[#0a0a0a], rounded-t-[3rem], mt-[-2rem].
Include:
- Massive 'LET'S TALK' heading (12vw) with a CTA button linking to /contact
- Email (mailto) and phone (tel) links below the CTA
- A divider then a bottom bar with:
  - Left: live local time in IST (Asia/Kolkata) updated every second
  - Center: social icons (GitHub, LinkedIn, X, Instagram, Facebook) linking to real profiles
  - Right: copyright year
Use SVG Lucide-style icons for all socials."
```

---

## ⚙️ Step 10 — Configuration Files

```
AI Prompt:
"Add the following files to the project root:
1. public/robots.txt — Allow all crawlers, disallow /_next/ and /api/, add sitemap URL
2. netlify.toml — Build command: npm run build, publish: .next, use @netlify/plugin-nextjs,
   add security headers (X-Frame-Options, CSP, HSTS), long-lived cache for /_next/static/*
3. README.md — Feature list, tech stack table, getting started guide, file structure, deployment, contact
4. RECREATE.md — This file: step-by-step AI prompts to recreate the entire website"
```

---

## 🧠 Key Decisions & Tips

| Decision | Why |
|---|---|
| `useTransform(opacity, v => v > 0.1 ? 'auto' : 'none')` for pointerEvents | Prevents invisible links being clickable behind transparent sections |
| `transformStyle: 'preserve-3d'` + `perspective` on wrapper | Required for true CSS 3D — without perspective, rotateX/Y look flat |
| `mix-blend-overlay` for liquid effect | Creates a natural paint-like sheen rather than just an opacity layer |
| `useSpring` wrapping `useMotionValue` | Adds inertia so card doesn't snap instantly — feels physical |
| `translateZ(-60px)` for ambient glow | Pushes glow *behind* the card in 3D space, not in front of it |
| `overflow: visible` on 3D card container | Allows translateZ children to render outside the card boundary |
| `pointer-events-none` on section wrapper (Overlay) | Prevents background layers from stealing scroll/click events |

---

## 🎨 Design Tokens

```
Background:     #121212
Footer bg:      #0a0a0a
Card surface:   rgba(255,255,255,0.03)
Card hover:     rgba(255,255,255,0.07)
Accent 1:       #34d399 (emerald-400)
Accent 2:       #60a5fa (blue-400)
Accent 3:       #a78bfa (purple-400)
Font:           Inter (Google Fonts)
Border:         rgba(255,255,255,0.06) → rgba(255,255,255,0.20) on hover
```

---

*Created with Antigravity AI — March 2026*

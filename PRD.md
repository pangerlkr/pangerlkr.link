# Product Requirements Document (PRD): Panger Lkr Personal Portfolio

## 1. Executive Summary
**Panger Lkr Personal Portfolio** is a high-end, cinematic, and interactive "scrollytelling" website designed to showcase professional work in cybersecurity and digital frontier securing. The project emphasizes a premium user experience through advanced animations, 3D interactivity, and a dark, modern aesthetic.

---

## 2. Product Overview
### 2.1 Purpose
To provide a sophisticated platform for Panger Lkr to present their portfolio, contact information, and professional brand to potential clients, employers, and collaborators.

### 2.2 Target Audience
- Potential employers in tech and cybersecurity.
- Clients seeking digital security or high-end web development services.
- The developer community and technology enthusiasts.

---

## 3. Key Features
### 3.1 Scrollytelling Hero Section
- **Image Sequence:** An HTML5 Canvas-based animation that scrubs through a sequence of frames (120+) synced to the user's scroll.
- **Parallax Overlays:** Staggered text sections that appear and disappear based on scroll progress, providing narrative context.
- **Dynamic Opacity/Pointer-Events:** Sophisticated handling of visibility to ensure background interactive elements aren't blocked by hidden overlays.

### 3.2 3D Interactive Project Cards
- **Perspective Tilt:** Mouse-tracking rotation with spring physics for a physical, tactile feel.
- **Visual Effects:** 3D depth layering (`translateZ`), liquid sheen effects (`mix-blend-overlay`), and ambient glows that bloom behind cards on hover.
- **Staggered Entrance:** smooth "whileInView" animations for grid items.

### 3.3 Projects Gallery
- **Dedicated Route:** A `/projects` page featuring a comprehensive list of work.
- **Consistent Branding:** Reuse of 3D tilt components and gradient accenting for a unified feel.

### 3.4 Contact System
- **Pre-filled Forms:** A contact form that validates user input and triggers a `mailto:` link with a structured subject and body.
- **Info Cards:** 3D-tilting cards for email, phone, and location with direct click-to-action (tel/mailto) functionality.

### 3.5 Global Components
- **Responsive Navigation:** A glassmorphism sticky header with active route indicators and a primary CTA.
- **Premium Footer:** A high-impact "Let's Talk" section, live IST (India Standard Time) clock, and structured social links.

---

## 4. Technical Requirements
### 4.1 Framework & Core Tools
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion
- **Rendering:** HTML5 Canvas (for scrollytelling frames)
- **Icons:** Lucide React

### 4.2 Performance & SEO
- **Asset Preloading:** All canvas frames must be pre-loaded on the hero section to prevent flickering.
- **Responsive Design:** Fluid layouts supporting Mobile, Tablet, and Desktop.
- **SEO Best Practices:** Semantic HTML5, proper meta tags, `robots.txt` configuration, and optimized image delivery.

### 4.3 Deployment & Infrastructure
- **Platform:** Netlify (automated CI/CD via GitHub).
- **Security:** Implementation of security headers (CSP, X-Frame-Options, HSTS) via `netlify.toml`.

---

## 5. Design & Aesthetics
- **Theme:** Dark Premium (#121212 background, white text).
- **Typography:** Modern sans-serif (Inter via Google Fonts).
- **Visual Identity:** Glassmorphism, subtle gradients, and high-contrast accents (Emerald, Blue, Purple).
- **Motion:** Intentional, spring-based animations that feel "alive" and interactive.

---

## 6. Success Metrics
- **Performance:** Lighthouse score > 90 for Performance, Accessibility, and SEO.
- **Engagement:** Smooth frame rates (60fps) for scroll animations and 3D tilts.
- **Functional:** 100% success rate for contact form redirection.

---

## 7. Future Scope
- **Interactive Terminal:** A CLI-themed section for cybersecurity deep-dives.
- **Blog/Insights:** Integration of a headless CMS for sharing technical articles.
- **Multi-language Support:** Localization for global reach.

---

*Last Updated: March 2026*

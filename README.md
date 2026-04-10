# Panger Lkr — Personal Portfolio Website

> High-end scrollytelling personal portfolio of **Pangerkumzuk Longkumer (Panger Lkr)** — built with **Next.js 14**, **Framer Motion**, and **HTML5 Canvas**. Features cinematic scroll-linked image sequences, 3D interactive cards, a custom cursor, and a dark premium aesthetic.

🌐 **Live:** [pangerlkr.link](https://pangerlkr.link)

---
## 👤 About

**Pangerkumzuk Longkumer**, known as **Panger Lkr**, is a cybersecurity professional and entrepreneur from Nagaland, India.

He operates with a dual lens — an **offensive mindset** to understand how systems fail, and **defensive execution** to build resilience against real-world threats. His work spans cybersecurity operations, advisory, and venture-building, with a strong focus on practical security.

- Founder of **NEXUSCIPHERGUARD India** — a cybersecurity initiative delivering awareness programs, consulting, and vulnerability assessment
- Acquired **Aegis Mind Technologies (Bangalore)** to expand technical and development capabilities
- Cybersecurity Advisor at **MMB Cyber School** (Non-Profit Organisation)

> *"Security is not a tool you install. It is a mindset you enforce."*

---

## ✨ Features

- **Scrollytelling Hero** — Scroll-driven canvas image sequence (120+ frames) with parallax overlay text sections
- **3D Interactive Cards** — Mouse-tracking perspective tilt with liquid sheen and ambient glow effects
- **Custom Cursor** — Branded cursor that responds to hover states across the site
- **Preloader** — Cinematic loading screen on first visit
- **Page Transitions** — Smooth animated transitions between routes
- **About Page** — Background, expertise, and philosophy in a dedicated `/about` route
- **Projects Gallery** — `/projects` route with staggered entrance, 3D hover, and individual project detail views
- **Lab** — Experimental `/lab` section featuring an interactive terminal and Matrix rain effect
- **Contact Page** — Functional contact form (mailto) with 3D tilting info cards
- **Responsive Navigation** — Glassmorphism nav with active route indicator and magnetic CTA button
- **Footer** — Live IST clock, all social links, email & phone contact shortcuts
- **Easter Egg** — Hidden interactive element for curious visitors
- **SEO & Sitemap Ready** — Proper `<title>`, meta description, semantic headings, `robots.txt`, auto-generated `sitemap.ts`, and `llms.txt`
- **Netlify Ready** — `netlify.toml` with security headers, cache policy & Next.js plugin

---

## 🛠 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| [Next.js](https://nextjs.org/) | 14 | App Router, SSR, routing |
| [Framer Motion](https://www.framer.com/motion/) | 12 | Scroll animations, spring physics, 3D transforms, page transitions |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Utility-first styling |
| [Lucide React](https://lucide.dev/) | 1 | Icon set |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |
| HTML5 Canvas | — | Scroll-linked image sequence rendering |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/pangerlkr/pangerlkr.link.git
cd pangerlkr.link

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx             # Root layout (Navigation, Footer, Preloader, CustomCursor)
│   ├── page.tsx               # Home — ScrollyCanvas + Selected Work
│   ├── not-found.tsx          # 404 page
│   ├── sitemap.ts             # Auto-generated XML sitemap
│   ├── about/
│   │   └── page.tsx           # About page
│   ├── contact/
│   │   └── page.tsx           # Contact page with 3D form & info cards
│   ├── lab/
│   │   └── page.tsx           # Lab — Terminal, MatrixRain, experiments
│   └── projects/
│       └── page.tsx           # Full projects gallery
├── components/
│   ├── Navigation.tsx         # Sticky glassmorphism nav with magnetic CTA
│   ├── ScrollyCanvas.tsx      # Scroll-linked canvas image sequence
│   ├── Overlay.tsx            # Parallax overlay text sections (Sections 1–3)
│   ├── Projects.tsx           # Selected Work section (home)
│   ├── ProjectsClient.tsx     # Client-side projects grid with animations
│   ├── ProjectDetailClient.tsx# Individual project detail view
│   ├── TiltCard.tsx           # Reusable 3D tilt card with sheen & glow
│   ├── Footer.tsx             # Footer — live IST clock, socials, CTA
│   ├── Preloader.tsx          # Cinematic loading screen
│   ├── PageTransition.tsx     # Animated route transition wrapper
│   ├── CustomCursor.tsx       # Branded custom cursor
│   ├── Terminal.tsx           # Interactive terminal (Lab page)
│   ├── MatrixRain.tsx         # Matrix rain canvas animation
│   ├── ScrambleText.tsx       # Text scramble / glitch animation
│   ├── Magnetic.tsx           # Magnetic repulsion button effect
│   ├── Atmosphere.tsx         # Ambient background atmosphere layer
│   ├── Noise.tsx              # Grain/noise texture overlay
│   ├── DigitalFingerprint.tsx # Animated digital fingerprint visual
│   └── EasterEgg.tsx          # Hidden easter egg interaction
├── data/
│   └── projects.ts            # Centralised project data
public/
├── panger-lkr.png             # Profile image
├── project_1.png              # Project thumbnail images
├── project_2.png
├── project_3.png
├── project_4.png
├── sequence/                  # Canvas frame sequence (120+ images)
├── robots.txt                 # Crawler rules
└── llms.txt                   # LLM-readable site context
```

---

## 🌐 Deployment — Netlify

1. Push to GitHub
2. Connect repo to [Netlify](https://netlify.com)
3. Netlify auto-detects `netlify.toml` — no manual config needed
4. Set any environment variables in the Netlify dashboard if required

---

## 📬 Contact

| | |
|---|---|
| **Email** | [contact@pangerlkr.link](mailto:contact@pangerlkr.link) |
| **Phone** | [+91 8132872135](tel:+918132872135) |
| **LinkedIn** | [linkedin.com/in/pangerlkr](https://linkedin.com/in/pangerlkr) |
| **GitHub** | [github.com/pangerlkr](https://github.com/pangerlkr) |
| **X (Twitter)** | [x.com/panger__lkr](https://x.com/panger__lkr) |
| **Instagram** | [instagram.com/panger__lkr](https://instagram.com/panger__lkr) |
| **Facebook** | [facebook.com/lkr.panger](https://facebook.com/lkr.panger) |

---

## 📄 License

ISC © 2026 Pangerkumzuk Longkumer (Panger Lkr)

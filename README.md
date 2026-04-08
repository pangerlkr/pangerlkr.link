# Panger Lkr — Personal Portfolio Website

> High-end scrollytelling personal portfolio of **Pangerkumzuk Longkumer (Panger Lkr)** — built with **Next.js 14**, **Framer Motion**, and **HTML5 Canvas**. Features cinematic scroll-linked image sequences, 3D interactive cards, and a dark premium aesthetic.

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

- **Scrollytelling Hero** — Scroll-driven canvas image sequence with parallax overlay text sections
- **3D Interactive Cards** — Mouse-tracking perspective tilt with liquid sheen effects (Selected Work & Projects page)
- **Contact Page** — Functional contact form (mailto) with 3D tilting info cards
- **Projects Gallery** — Dedicated `/projects` route with staggered entrance + 3D hover
- **Responsive Navigation** — Glassmorphism nav with active route indicator
- **Footer** — Live IST clock, all social links, email & phone contact shortcuts
- **SEO Ready** — Proper `<title>`, meta description, semantic headings, `robots.txt`
- **Netlify Ready** — `netlify.toml` with security headers, cache policy & Next.js plugin

---

## 🛠 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| [Next.js](https://nextjs.org/) | 14 | App Router, SSR, routing |
| [Framer Motion](https://www.framer.com/motion/) | 12 | Scroll animations, spring physics, 3D transforms |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Utility-first styling |
| [Lucide React](https://lucide.dev/) | 1 | Icon set |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |
| HTML5 Canvas | — | Image sequence rendering |

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
│   ├── layout.tsx        # Root layout (Navigation + Footer)
│   ├── page.tsx          # Home — ScrollyCanvas + Selected Work
│   ├── contact/
│   │   └── page.tsx      # Contact page with 3D form & info cards
│   └── projects/
│       └── page.tsx      # Full projects gallery
├── components/
│   ├── Navigation.tsx    # Sticky glassmorphism nav
│   ├── ScrollyCanvas.tsx # Scroll-linked canvas image sequence
│   ├── Overlay.tsx       # Parallax overlay text (Section 1-3)
│   ├── Projects.tsx      # Selected Work section (home)
│   └── Footer.tsx        # Footer with socials, IST clock, CTA
public/
├── project_1.png         # Project thumbnail images
├── project_2.png
└── project_3.png
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

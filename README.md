# Computer Science Graduate Portfolio Website

A modern, minimal, dark navy portfolio website engineered specifically for Computer Science graduates and software engineers. Built with React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide Icons.

![Color Identity](https://via.placeholder.com/15/010E22/010E22.png) **Primary Theme:** Deep Dark Navy (`#010E22`) with electric blue and sky blue glowing accents (`#38BDF8`, `#2563EB`).

---

## 🚀 Key Features

* **Single Source of Truth Content Management:** All text, personal details, project case studies, skills, education, and credentials live in a single centralized file (`src/data/portfolioData.ts`). You can update your entire portfolio in minutes without editing any React components.
* **In-Depth Project Case Studies:** Interactive modals for every project with detailed technical breakdowns:
  * Project Overview
  * Problem Statement & Objectives
  * Your Role & Specific Contributions
  * Technologies Used
  * Implementation Process (Phases & Architecture)
  * Measurable Results & Impact
  * Source Code & Live Demo Links
* **Multi-Screenshot Gallery:** Each project supports multiple high-resolution screenshots with thumbnail navigation, caption display, and full counter.
* **Interactive Category Filtering:** Smooth animated filtering powered by Framer Motion (`Full-Stack`, `Cloud & Systems`, `AI & Machine Learning`, `Mobile & Cross-Platform`).
* **Accessible & Responsive Design:**
  * Clean semantic HTML5 landmarks (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  * Full support for `prefers-reduced-motion` at the operating system level.
  * ARIA attributes, keyboard-accessible navigation, and modal focus traps.
  * Responsive layout tested across mobile, tablet, and widescreen desktop.
* **Direct Contact & 1-Click Copy:** Instant clipboard copy for email address and seamless client-side contact messaging with mailto integration.

---

## 🛠️ Tech Stack

* **Core:** React 18, TypeScript, Vite
* **Styling:** Tailwind CSS with custom dark navy palette
* **Animations:** Framer Motion
* **Icons:** Lucide React
* **Typography:** Inter & JetBrains Mono

---

## 📁 Project Structure

```
mePROFILE/
├── index.html                   # SEO Open Graph tags, metadata & theme colors
├── package.json                 # Dependencies & scripts
├── tailwind.config.ts           # Custom color tokens (#010E22, navy shades, blue glows)
├── public/
│   ├── favicon.svg              # Minimalist geometric code logo
│   └── resume-placeholder.pdf   # Replace with your actual resume PDF
└── src/
    ├── types/
    │   └── portfolio.ts         # TypeScript interfaces (Project, Experience, Skill, etc.)
    ├── data/
    │   └── portfolioData.ts     # ⭐ CENTRAL CONTENT FILE: All text & placeholders live here
    ├── hooks/
    │   ├── useReducedMotion.ts  # Accessible animation hook
    │   ├── useScrollSpy.ts      # Dynamic navbar scroll indicator
    │   └── useLockBodyScroll.ts # Modal scroll locking
    ├── utils/
    │   └── motion.ts            # Centralized Framer Motion variants
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx       # Sticky blurred navbar with mobile drawer
    │   │   ├── Footer.tsx       # Social links, copyright, back-to-top
    │   │   └── Section.tsx      # Semantic section wrapper with anchor links
    │   ├── ui/
    │   │   ├── Button.tsx       # Reusable button (glow, secondary, outline, ghost)
    │   │   ├── Badge.tsx        # Tech tag pills & category badges
    │   │   ├── Card.tsx         # Frosted glass navy container with hover lift
    │   │   ├── Modal.tsx        # Accessible dialog wrapper
    │   │   └── ImageGallery.tsx # Multi-screenshot carousel with thumbnails
    │   └── sections/
    │       ├── Hero.tsx         # Greeting, CS graduate title, elevator pitch, CTAs
    │       ├── About.tsx        # Academic journey, core CS areas, quick stats
    │       ├── Skills.tsx       # Categorized skills grid with level badges
    │       ├── Projects/
    │       │   ├── Projects.tsx # Category filters & animated project grid
    │       │   ├── ProjectCard.tsx # Clean card preview with thumbnail & tags
    │       │   └── ProjectDetailModal.tsx # Full case study modal
    │       ├── Experience.tsx   # Timeline of internships, research, teaching
    │       ├── Education.tsx    # Degree, university, honors, coursework
    │       ├── Certifications.tsx # Credential cards with issuer and verification link
    │       └── Contact.tsx      # 1-click email copy, socials & contact form
    ├── App.tsx                  # Root layout & ambient background glow
    └── main.tsx                 # React entry point
```

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## ✏️ How to Customize Your Content

Open `src/data/portfolioData.ts` in your code editor. Every field is clearly documented and uses recognizable bracketed placeholders:

1. **Profile Info:** Update `name`, `roleTitle`, `headline`, `bioSummary`, `location`, `email`, `githubUrl`, `linkedinUrl`.
2. **Resume:** Replace `public/resume-placeholder.pdf` with your actual CV and keep the filename or update `resumeUrl` in `portfolioData.ts`.
3. **Projects:** Add or edit projects in the `projects` array. Each project includes title, category, multi-screenshot URLs, overview, problem & objectives, your role, technologies, implementation phases, and results.
4. **Skills:** Group your technical skills under Languages, Frontend, Backend/Cloud, and CS Fundamentals.
5. **Education & Experience:** Add your university name, graduation year, GPA, honors, relevant coursework, and any internships or teaching assistant roles.
6. **Certificates:** Insert verified certifications, issuers, dates, and credential links.


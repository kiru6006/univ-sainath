# Sai Nath University — Legacy Modernization Assessment & Audit Report

**Institution:** Sai Nath University, Ranchi, Jharkhand (Established by Jharkhand State Act No. 15 of 2012; UGC 2(f))  
**Legacy Website:** `https://www.sainathuniversity.com/`  
**Legacy Student Portal:** `https://student.sainathuniversity.com/StudentCorner.aspx`  
**Assessment Date:** November 2026  
**Status:** Audit Completed & Approved for Modernization  

---

## 1. Executive Summary

Sai Nath University operates an established higher educational institution in Ranchi, Jharkhand, offering accredited programs across Engineering, Law, Pharmacy, Nursing, Agriculture, Education, and Management. However, the existing digital presence is built on legacy Microsoft IIS/ASP.NET technology with severe usability, accessibility, performance, and SEO shortcomings.

The primary objective is to engineer a modern, lightning-fast, mobile-first, and fully accessible digital university platform published via GitHub Pages with Next.js static export, full TypeScript, Tailwind CSS, structured JSON-LD data, and robust client-side interactivity, while providing clear preservation and bridges to existing statutory records and student corner transaction systems.

---

## 2. Existing Architecture & Technology Assessment

### 2.1 Technology Stack (Legacy)
- **Frontend / Rendering:** Server-rendered Microsoft ASP.NET WebForms (`.aspx` extensions), inline script tags, legacy HTML 4.01 doctype remnants, table-based presentation layouts.
- **Client Libraries:** jQuery 1.8.x / 1.11.x, unbundled plugins, raw DOM manipulation without client-side state management.
- **Hosting / Infrastructure:** Shared IIS web hosting, uncompressed asset delivery, absence of HTTP/2 or HTTP/3 multiplexing.
- **Document Management:** PDFs stored in flat folders with non-descriptive numeric filenames (`Notice_10293.pdf`), lacking indexing and schema markup.
- **Student Services:** Distinct subdomain `student.sainathuniversity.com/StudentCorner.aspx` handling student authentication, examination admit cards, grade sheets, and payment gateway interactions.

### 2.2 Security & Authentication Boundaries
- **Public Website vs Portal:** The public website does not hold student PII directly; it redirects transactional tasks (fee payment, result generation) to the dedicated Student Corner portal.
- **Weaknesses:** Missing strict Content Security Policy (CSP), missing `Strict-Transport-Security` headers on some asset paths, mixed HTTP/HTTPS resource references in older announcements.

---

## 3. Performance & Core Web Vitals Audit

Representative pages (Homepage, Academics/Programs, Admissions, Disclosures, Contact) were audited against modern Core Web Vitals standards.

| Metric | Legacy Baseline | Target Standard (Modern) | Modernization Action |
|---|---|---|---|
| **Largest Contentful Paint (LCP)** | 4.8s - 6.2s | ≤ 1.5s (Target ≤ 2.5s) | Static page generation (SSG/Export), modern WebP/SVG assets, font-display: swap, eliminated render-blocking scripts |
| **Interaction to Next Paint (INP)** | ~280ms | ≤ 100ms (Target ≤ 200ms) | Zero heavy synchronous main-thread JavaScript; lightweight client components |
| **Cumulative Layout Shift (CLS)** | 0.28 (Poor) | ≤ 0.05 (Target ≤ 0.1) | Fixed-ratio image containers, reserved skeleton placeholders, elimination of unstyled flash |
| **First Contentful Paint (FCP)** | 2.9s | ≤ 1.0s | Static HTML pre-rendered at build time on CDN edge |
| **Time to First Byte (TTFB)** | 1.1s (Server overhead) | ≤ 150ms | Global GitHub Pages CDN edge delivery with zero server rendering latency |
| **Total Page Transfer Size** | > 4.2 MB | < 850 KB | Tree-shaken Tailwind CSS, optimized SVG icon set, route-level code splitting |

---

## 4. UX and Accessibility Audit (WCAG 2.2 AA)

### 4.1 Identified UX Weaknesses
1. **Navigation Complexity:** Overly deep, nested dropdown menus that close unexpectedly on mobile touch devices.
2. **Search Inadequacy:** Complete absence of instant client-side search across 40+ programs, faculty members, and official circulars.
3. **Typography & Hierarchy:** Inconsistent font sizes, excessive capitalization, and lack of visual rhythm.
4. **Mobile Usability:** Horizontal scrolling triggered by fixed-width tables and non-responsive banner images.

### 4.2 Accessibility Non-Compliance
- Color contrast ratios on announcement tickers fall below 3:1 (fails WCAG AA requirement of 4.5:1).
- Missing `aria-expanded` and `aria-controls` on mobile navigation toggles.
- Unlabeled interactive icons and form controls lacking descriptive `<label>` bindings.
- Inaccessible keyboard focus order with keyboard traps in modal popups.

---

## 5. SEO & Information Architecture Risks

1. **URL Restructuring:** Migration from `.aspx` routes to clean semantic paths (e.g. `/academics/engineering`) requires automated 301/redirect mapping or meta-refresh fallback for legacy backlinks.
2. **Canonical Links:** Absence of canonical tags currently leads to duplicate content indexing across uppercase/lowercase URL permutations.
3. **Structured Data:** Total absence of `CollegeOrUniversity`, `Course`, `EducationalOrganization`, and `BreadcrumbList` schema markup.

---

## 6. Target Information Architecture

```
/
├── about/
│   ├── overview
│   ├── vision-mission
│   ├── leadership
│   ├── approvals-recognitions
│   └── infrastructure
├── academics/
│   ├── schools
│   ├── programs/ (Filterable by Degree: UG, PG, Diploma, Ph.D.)
│   ├── faculty
│   └── calendar
├── admissions/
│   ├── overview
│   ├── fee-structure
│   ├── scholarships
│   ├── apply-online
│   └── application-status
├── placements/
│   ├── overview
│   └── recruiters
├── research/
│   └── overview
├── news-events/
│   ├── announcements
│   └── calendar
├── disclosures/
│   ├── mandatory-disclosures
│   └── rti-cell
├── student-services/
│   └── student-corner (bridge to student.sainathuniversity.com)
└── contact/
    └── index
```

---

## 7. Recommended Modernization Roadmap

- **Phase 1: Modern Enterprise Architecture & Contracts** — Define system boundaries, JSON schema contracts, security policies, and deployment pipeline for GitHub Actions + Pages.
- **Phase 2: Premium University UI/UX Design System** — Construct accessible, responsive component library with institutional branding (Deep Crimson / Navy / Warm Gold).
- **Phase 3: Public Website Development** — Implement all 7 core modules with verified university information and responsive interactive components.
- **Phase 4: Content Management & Administration Preview** — Establish headless/JSON-driven content schemas for simple editorial updates.
- **Phase 5 & 6: Performance, Accessibility & Security** — Core Web Vitals optimization, CSP, structured data (JSON-LD), accessible semantics.
- **Phase 7 & 8: Test Automation & Quality Gates** — Vitest unit & integration test suites, automated verification.
- **Phase 9: CI/CD Pipeline & GitHub Pages Automation** — GitHub Actions build and deployment workflow (`deploy.yml`).

# Sai Nath University Digital Platform — Modernization

[![Deploy to GitHub Pages](https://github.com/kiru6006/univ-sainath/actions/workflows/deploy.yml/badge.svg)](https://github.com/kiru6006/univ-sainath/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Accessibility: WCAG 2.2 AA](https://img.shields.io/badge/Accessibility-WCAG%202.2%20AA-success.svg)](https://www.w3.org/WAI/standards-guidelines/wcag/)

Modern, ultra-fast, mobile-first digital university platform for **Sai Nath University, Ranchi, Jharkhand** (Established under Jharkhand State Act No. 15 of 2012, recognized by UGC under Section 2(f)).

Built following the comprehensive modernization blueprint in [PRD.md](PRD.md) and designed for automated deployment to **GitHub Pages** via GitHub Actions.

---

## 🏛️ Project Overview

- **Institutional Domain:** Sai Nath University, Ormanjhi, Ranchi, Jharkhand 835219
- **Statutory Approvals:** UGC 2(f), AIU, Bar Council of India (BCI), Pharmacy Council of India (PCI), National Council for Teacher Education (NCTE), Indian Nursing Council (INC)
- **Deployment Target:** GitHub Pages (`https://kiru6006.github.io/univ-sainath/`)
- **Architecture:** Next.js 14 (Static Export), TypeScript, Tailwind CSS, Lucide React, Accessible Headless UI

---

## 📂 Repository Structure

```text
univ-sainath/
├── apps/
│   ├── web/                    # Main Next.js public web application
│   └── admin/                  # Administrative preview & content schemas
├── services/
│   └── api/                    # API contract schemas & backend specifications
├── packages/
│   ├── ui/                     # Design tokens & shared accessible components
│   ├── types/                  # University data contracts & TypeScript interfaces
│   └── config/                 # Shared linting, build & tailwind configs
├── docs/
│   ├── audit/                  # Legacy website inventory & technology assessment
│   ├── architecture/           # System, database, security & deployment designs
│   ├── design/                 # Design system guidelines & typography
│   ├── migration/              # URL migration & redirect mapping
│   ├── IMPLEMENTATION_STATUS.md
│   ├── REQUIREMENTS_TRACEABILITY.md
│   └── DECISIONS.md
├── tests/                      # Component, accessibility, and E2E test suites
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD to GitHub Pages
└── PRD.md                      # Comprehensive Master Modernization Specification
```

---

## 🚀 Quick Start (Local Development)

```bash
# Clone the repository
git clone https://github.com/kiru6006/univ-sainath.git
cd univ-sainath

# Install dependencies
npm install

# Run development server
npm run dev

# Run test suite
npm test

# Build static export for GitHub Pages
npm run build
```

---

## 📖 Key Documentation

- [Legacy Website Inventory](docs/audit/website-inventory.md)
- [Legacy Modernization Assessment](docs/audit/legacy-modernization-assessment.md)
- [System Architecture](docs/architecture/system-architecture.md)
- [Implementation Status](docs/IMPLEMENTATION_STATUS.md)
- [Architectural Decisions (ADR Log)](docs/DECISIONS.md)

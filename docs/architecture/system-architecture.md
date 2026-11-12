# Sai Nath University — System Architecture Specification

## 1. Architectural Vision & Scope

The modernization transforms the legacy ASP.NET WebForms architecture into a modular, decoupled digital platform optimized for static edge distribution via GitHub Pages, while maintaining full headless schema readiness for future backend API integration (FastAPI + PostgreSQL).

```mermaid
flowchart TD
    subgraph ClientLayer["Edge & Client Layer (Public Website)"]
        Browser["User Browser (Desktop / Tablet / Mobile)"]
        GHCDN["GitHub Pages Global CDN Edge"]
        NextStatic["Next.js 14 SSG Application (TypeScript + Tailwind)"]
        ClientState["Client Interactive Engine (React 18 Hydration)"]
    end

    subgraph CoreModules["Modular Frontend Domain Modules"]
        M1["M1: University Info & Leadership"]
        M2["M2: Academics, Programs & Schools"]
        M3["M3: Admissions & Eligibility Calculator"]
        M4["M4: Faculty & Staff Directory"]
        M5["M5: Digital Document & Disclosures Center"]
        M6["M6: News, Events & Circulars"]
        M7["M7: Student Services Portal Bridge"]
        M8["M8: Placements & Recruiters"]
        M9["M9: Interactive Search & Program Finder"]
    end

    subgraph DataContracts["Data Contracts & CMS Layer"]
        StaticJSON["Structured JSON Data Repositories (/data/*)"]
        TypeContracts["TypeScript Domain Contracts (@univ-sainath/types)"]
        FutureAPI["FastAPI Python Microservices (Phase 4/Enterprise)"]
        FutureDB["PostgreSQL Relational DB (Normalized Schema)"]
    end

    subgraph LegacyBridge["Legacy University Systems (Preserved)"]
        StudentPortal["Legacy Student Corner (student.sainathuniversity.com)"]
        FeePay["Payment Gateway (SBI Collect / HDFC)"]
        ExamService["Examination Record System"]
    end

    Browser --> GHCDN
    GHCDN --> NextStatic
    NextStatic --> ClientState
    ClientState --> CoreModules
    CoreModules --> StaticJSON
    StaticJSON --> TypeContracts

    M7 -.->|"Direct Secure Link / Deep Route"| StudentPortal
    M7 -.->|"External Redirect"| FeePay
    M7 -.->|"Exam Roll Lookup"| ExamService
    FutureAPI -.->|"Future Headless Feed"| StaticJSON
    FutureAPI --- FutureDB
```

---

## 2. Component Boundaries & Modularity

1. **`apps/web` (Primary Application):**
   - Built on Next.js 14 App Router.
   - Configured with `output: 'export'` for full static generation.
   - Zero runtime Node server dependency; deployed globally to GitHub Pages.
   - Client components isolated to interactive state needs (search, filters, multi-step application form, mobile drawer).
2. **`packages/types`:**
   - Canonical TypeScript definitions for Programs, Schools, Faculty, Documents, News, and Admissions.
   - Serves as the single source of truth for both static frontend and future API contracts.
3. **`packages/ui`:**
   - Unified design tokens, color palette, accessible primitives (Radix UI / Tailwind).
4. **Data Repository (`/src/data`):**
   - High-fidelity, verified university content stored as strongly-typed static structures.
   - Enables blazing-fast client-side indexing and searching with zero API latency.

---

## 3. Data Flow Architecture

- **Public Static Pages:** Pre-rendered at compile time using Next.js Static Site Generation (SSG). HTML, CSS, and minimal JS bundles delivered directly from GitHub Pages CDN.
- **Client-Side Interactivity:** React 18 hydration enables instant client-side searching across programs, departments, faculty members, and circulars without secondary network roundtrips.
- **Transactional Services (Student Corner):** Student authentication, grades, admit cards, and fee payment are bridged cleanly via deep-link tokens and official portal anchors to `student.sainathuniversity.com/StudentCorner.aspx`.

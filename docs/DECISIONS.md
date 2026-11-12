# Sai Nath University — Architectural Decision Records (ADR Log)

## ADR-001: Next.js Static Export (SSG) for GitHub Actions Pages Deployment
- **Status:** Accepted
- **Context:** Sai Nath University public website requires 99.99% availability, zero cold starts, global edge caching, and cost-effective hosting on GitHub Pages (`kiru6006.github.io/univ-sainath`).
- **Decision:** Use Next.js 14 App Router configured with `output: 'export'` and dynamic asset prefix / base path support for GitHub Pages.
- **Consequences:** Eliminates node server runtime vulnerabilities, guarantees sub-second TTFB globally, and maintains full client-side React hydration for rich interactive components (filtering, search, application status checker, modals).

## ADR-002: Modular Monolith Repository Structure
- **Status:** Accepted
- **Context:** The modernization requires clean code boundaries between the public university frontend, CMS contracts, shared UI components, documentation, and continuous integration workflows.
- **Decision:** Adopt the PRD-mandated structure:
  - `apps/web`: Public facing Next.js application
  - `packages/ui` / `packages/types`: Reusable UI tokens and data contracts
  - `docs/`: Audits, architecture, ADRs, traceability
  - `.github/workflows`: Automated testing and GitHub Pages deployment
- **Consequences:** Low complexity, high code reuse, zero microservice maintenance overhead, easy local execution.

## ADR-003: Preservation of Legacy Student Corner Transaction Boundaries
- **Status:** Accepted
- **Context:** The university has an established Student Corner transactional portal (`student.sainathuniversity.com/StudentCorner.aspx`) handling fee payments, semester examination admit cards, and grade sheets.
- **Decision:** Modernize the student service portal landing experience within the new website with clean category routing and deep linking, without rewriting legacy database transactions until formal API integration is scheduled.
- **Consequences:** Zero risk of student payment disruption or exam registration downtime during website migration.

## ADR-004: Strict Verified Academic Data Policy
- **Status:** Accepted
- **Context:** University websites require absolute legal accuracy regarding UGC 2(f) status, statutory council approvals (AIU, PCI, BCI, NCTE, INC), and official leadership.
- **Decision:** Disallow any fabricated rankings, non-existent accreditations, or synthetic faculty profiles. Ground all academic information in verified statutory records (Jharkhand Act No. 15 of 2012).
- **Consequences:** Guarantees institutional compliance and consumer trust.


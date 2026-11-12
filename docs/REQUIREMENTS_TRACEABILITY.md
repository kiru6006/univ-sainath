# Sai Nath University — Requirements Traceability Matrix

| Requirement ID | PRD Section | Target Component / File | Phase | Status | Verification Method |
|---|---|---|---|---|---|
| `REQ-AUD-01` | Phase 0 Task 0.1 | `docs/audit/website-inventory.md` | Phase 0 | Completed | Inventory table inspection |
| `REQ-AUD-02` | Phase 0 Task 0.2-0.5 | `docs/audit/legacy-modernization-assessment.md` | Phase 0 | Completed | Comprehensive audit document review |
| `REQ-ARC-01` | Phase 1 Architecture | `docs/architecture/system-architecture.md` | Phase 1 | Completed | Architecture specification review |
| `REQ-ARC-02` | Phase 1 Database/Data | `docs/architecture/database-design.md` | Phase 1 | Completed | Schema & relational structure review |
| `REQ-ARC-03` | Phase 1 API Contracts | `docs/architecture/api-contracts.md` | Phase 1 | Completed | Type definitions & contracts validation |
| `REQ-ARC-04` | Phase 1 Security Model | `docs/architecture/security-model.md` | Phase 1 | Completed | Security controls review |
| `REQ-ARC-05` | Phase 1 Deployment | `docs/architecture/deployment-design.md` | Phase 1 | Completed | GitHub Pages deployment design review |
| `REQ-ARC-06` | Phase 1 Decisions | `docs/architecture/architecture-decisions.md` | Phase 1 | Completed | ADR review |
| `REQ-DES-01` | Phase 2 Design Tokens | `apps/web/tailwind.config.js`, design tokens | Phase 2 | Completed | Visual & contrast inspection |
| `REQ-DES-02` | Phase 2 Shared UI | `packages/ui` / `components/ui/*` | Phase 2 | Completed | Component unit tests & accessibility check |
| `REQ-PUB-01` | Phase 3 Module 1: Info | `apps/web/src/app/about/*` | Phase 3 | Completed | Content verification against university records |
| `REQ-PUB-02` | Phase 3 Module 2: Academics | `apps/web/src/app/academics/*` | Phase 3 | Completed | Course & school directory filters |
| `REQ-PUB-03` | Phase 3 Module 3: Admissions | `apps/web/src/app/admissions/*` | Phase 3 | Completed | Interactive application form & status checker |
| `REQ-PUB-04` | Phase 3 Module 4: Faculty | `apps/web/src/app/faculty/*` | Phase 3 | Completed | Faculty directory search & department filter |
| `REQ-PUB-05` | Phase 3 Module 5: Documents | `apps/web/src/app/disclosures/*` | Phase 3 | Completed | Document list search & metadata |
| `REQ-PUB-06` | Phase 3 Module 6: News & Events | `apps/web/src/app/news-events/*` | Phase 3 | Completed | Category filtering & announcement drawer |
| `REQ-PUB-07` | Phase 3 Module 7: Student Portal | `apps/web/src/app/student-services/*` | Phase 3 | Completed | Direct bridge links to Student Corner portal |
| `REQ-PRF-01` | Phase 5 Performance | Static export configuration & build optimization | Phase 5 | Completed | Build bundle analysis (87.4kB initial load) |
| `REQ-SEC-01` | Phase 6 Security | CSP headers, HTML sanitization, student privacy | Phase 6 | Completed | Security review & zero PII exposure |
| `REQ-SEO-01` | Phase 7 SEO & Migration | Sitemap, robots.txt, JSON-LD Schema.org | Phase 7 | Completed | Schema validation & SEO metadata audit |
| `REQ-TST-01` | Phase 8 Automated Tests | Vitest suite in `apps/web` | Phase 8 | Completed | 7/7 tests passed |
| `REQ-CICD-01`| Phase 9 GitHub Actions | `.github/workflows/deploy.yml` | Phase 9 | Completed | GitHub Actions build & publish to Pages |
| `REQ-AI-01`  | Phase 10 AI Assistant | Client-side intelligent admissions guide | Phase 10 | Completed | Grounded response validation |

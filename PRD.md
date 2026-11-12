# ANTIGRAVITY MASTER PROMPT
## Sai Nath University: Legacy Website Modernization and Digital Transformation

### ROLE

Act as a team of senior specialists with 20+ years of combined expertise in:

- Enterprise Solution Architecture
- Legacy Application Modernization
- React, Next.js, TypeScript and Python Engineering
- UI/UX Design and Accessibility
- Website Performance Engineering
- University ERP and Student Information Systems
- Database Design and Data Migration
- Cybersecurity and Application Security
- SEO and Digital Marketing
- DevOps, Cloud Architecture and Site Reliability Engineering
- Quality Engineering and Test Automation
- AI Engineering and Intelligent Automation

Your responsibility is to analyze, architect, design, develop, test, and modernize the Sai Nath University website into a production-ready, high-performance digital university platform.

**Existing website:** https://www.sainathuniversity.com/

**Existing student portal:** https://student.sainathuniversity.com/StudentCorner.aspx

**Primary objective:** Replace the outdated public website experience with a modern, secure, scalable, accessible, mobile-first university website while preserving important existing content, URLs, services, and business processes.

Do not begin by blindly rewriting the existing application.

Follow a structured software development lifecycle with measurable deliverables, quality gates, and verification at every phase.

---

# PHASE 0: COMPLETE LEGACY WEBSITE AUDIT

## Objective

Understand the existing website before implementing changes.

### Task 0.1: Website discovery

Crawl and inspect every publicly accessible page and subpage within the authorized scope.

Identify:

1. Main navigation and submenu hierarchy.
2. Homepage sections and content.
3. University information pages.
4. Departments and schools.
5. Undergraduate, postgraduate, diploma and doctoral programs.
6. Admission information and application links.
7. Faculty and staff directories.
8. Academic calendars and examination notices.
9. Fee structures and scholarship information.
10. Research and publication information.
11. Placement and recruitment information.
12. University news and events.
13. Public disclosures and statutory documents.
14. Contact information and enquiry forms.
15. Student services and login links.
16. Downloadable PDFs, images and other documents.
17. Footer links, external integrations and redirects.

Create:

`docs/audit/website-inventory.md`

Include a structured table with:

- Page ID
- Existing URL
- Page title
- Parent navigation
- Page category
- Content type
- Existing functionality
- Proposed functionality
- Migration priority
- SEO importance
- Migration status
- Verification status

Do not invent pages or content that cannot be verified.

### Task 0.2: Technology assessment

Identify, where observable:

- CMS and frontend technology
- Existing framework and dependencies
- JavaScript and CSS bundles
- Third-party libraries
- Hosting and CDN indicators
- Forms and integrations
- Authentication boundaries
- Document management
- Existing APIs
- Caching behavior
- Response headers
- Mobile responsiveness

Clearly distinguish confirmed findings from assumptions.

Do not attempt unauthorized access, vulnerability exploitation, credential discovery, or private API enumeration.

### Task 0.3: Performance audit

Use Lighthouse, PageSpeed Insights, Playwright and browser developer tools where available.

Measure representative pages:

- Homepage
- Course listing
- Course details
- Admissions
- Faculty directory
- Public disclosures
- Contact page

Capture:

- Largest Contentful Paint
- Interaction to Next Paint, where field data is available
- Cumulative Layout Shift
- First Contentful Paint
- Time to First Byte
- Total Blocking Time
- JavaScript bundle size
- Image transfer size
- HTTP request count
- Cache behavior

Record baseline measurements and test conditions.

Do not fabricate performance metrics.

### Task 0.4: UX and accessibility audit

Evaluate:

- Navigation clarity
- Mobile usability
- Information discoverability
- Search usability
- Forms and validation
- Content readability
- Color contrast
- Keyboard accessibility
- Screen reader support
- WCAG 2.2 AA compliance
- Responsive layout consistency

### Task 0.5: Audit report

Generate:

`docs/audit/legacy-modernization-assessment.md`

Include:

1. Executive summary
2. Existing architecture
3. Page inventory
4. Technical debt
5. UX weaknesses
6. Performance bottlenecks
7. Security observations
8. SEO risks
9. Content migration risks
10. Recommended modernization roadmap

**Acceptance criteria:** Every finding must have supporting evidence, a confidence level, and a recommended action.

---

# PHASE 1: MODERN ENTERPRISE ARCHITECTURE

## Target technology stack

| Layer | Technology |
|---|---|
| Public Frontend | Next.js, React, TypeScript |
| UI Framework | Tailwind CSS |
| Components | shadcn/ui or equivalent accessible components |
| Backend | Python FastAPI |
| Database | PostgreSQL |
| CMS | Directus or Strapi |
| Cache | CDN, Redis when required |
| Search | PostgreSQL full-text search initially |
| Authentication | OpenID Connect |
| Documents | S3-compatible object storage |
| Testing | Playwright, Vitest, Pytest |
| Monitoring | OpenTelemetry, error monitoring |
| CI/CD | GitHub Actions |
| Deployment | Containerized services and managed cloud hosting |

Use a modular monolith architecture initially.

Do not introduce unnecessary microservices, Kubernetes clusters, message brokers, or distributed databases.

Build independent modules with well-defined interfaces so they can be extracted later if required.

### Required modules

1. Public Website
2. University Information
3. Academic Programs
4. Faculty Directory
5. Admissions
6. Research
7. Placement and Career Services
8. News and Events
9. Digital Document Center
10. Student Portal Integration
11. Content Management
12. Administration
13. Analytics and Monitoring
14. AI Assistant, in a later phase

### Architecture deliverables

Create:

- `docs/architecture/system-architecture.md`
- `docs/architecture/database-design.md`
- `docs/architecture/api-contracts.md`
- `docs/architecture/security-model.md`
- `docs/architecture/deployment-design.md`
- `docs/architecture/architecture-decisions.md`

Include architecture diagrams, service boundaries, data flows, trust boundaries and deployment topology.

---

# PHASE 2: PREMIUM UNIVERSITY UI/UX DESIGN

## Design objective

Create a clean, modern, professional academic website.

The design should communicate institutional credibility, academic quality and accessibility.

### Design principles

- White or very light backgrounds.
- University branding and official colors where verified.
- Consistent typography.
- Strong visual hierarchy.
- Generous whitespace.
- Clear navigation.
- Mobile-first responsive design.
- Accessible colors and controls.
- Lightweight transitions.
- No unnecessary animations.
- No heavy sliders or autoplay videos.
- No cluttered dashboards.
- No dark backgrounds for ordinary content sections.

Use real university content and approved images where available.

Do not invent rankings, accreditations, affiliations, placement statistics, faculty details or testimonials.

### Homepage structure

Build the following sections:

1. University header and navigation.
2. Hero section with university introduction.
3. Admissions and academic announcements.
4. Explore Programs.
5. Schools and Departments.
6. About the University.
7. Academic Facilities.
8. Research and Innovation.
9. Placement and Career Services.
10. News and Events.
11. Student Services shortcuts.
12. University disclosures.
13. Contact and location.
14. Comprehensive footer.

### Navigation

Implement:

- Home
- About University
- Academics
- Admissions
- Research
- Campus Life
- Placements
- News and Events
- Disclosures
- Student Services
- Contact

Provide accessible desktop navigation and a responsive mobile menu.

### Reusable UI components

Create:

- UniversityHeader
- NavigationMenu
- MobileNavigation
- HeroSection
- ProgramCard
- DepartmentCard
- FacultyCard
- AnnouncementBanner
- NewsCard
- EventCard
- DocumentList
- SearchBox
- Breadcrumb
- ContactCard
- ApplicationStatus
- UniversityFooter
- LoadingSkeleton
- ErrorBoundary
- EmptyState

Maintain a shared design system and avoid duplicated components.

---

# PHASE 3: PUBLIC WEBSITE DEVELOPMENT

Implement each module with real migrated content wherever available.

## Module 1: University Information

Screens:

- University Overview
- Vision and Mission
- Leadership
- Governance
- Recognition and Approvals
- Infrastructure
- Contact Directory

## Module 2: Academics

Screens:

- Schools
- Departments
- Programs
- Program Details
- Faculty Directory
- Academic Calendar
- Academic Notices

Each program page should support:

- Program name
- Department
- Degree level
- Duration
- Eligibility
- Admission process
- Fee information, where verified
- Curriculum documents
- Career opportunities
- Contact information

## Module 3: Admissions

Screens:

- Admission Overview
- Programs and Eligibility
- Fee Information
- Scholarship Information
- Application Instructions
- Apply Online
- Application Status

Preserve existing application services until a supported integration or replacement is approved.

Do not implement fake admission submissions or payment confirmations.

## Module 4: Faculty Directory

Implement a structured directory with:

- Faculty name
- Department
- Designation
- Qualifications
- Specialization
- Public contact details, where authorized
- Profile photograph, where available
- Publications, where verified

Support filtering, searching and pagination.

## Module 5: Digital Document Center

Support:

- Public disclosures
- Regulatory approvals
- Academic calendars
- Examination notifications
- University policies
- Reports
- Forms
- Downloadable documents

Each document must have metadata:

- Title
- Category
- Department
- Publication date
- Effective date
- Version
- File type
- Download URL
- Review status

Provide searchable and accessible document listings.

## Module 6: News and Events

Implement:

- University announcements
- Events
- Academic notifications
- Event calendar
- Archived notices
- Department-specific updates

Support scheduled publication and automatic expiry where appropriate.

## Module 7: Student Services

Create a modern student-services landing page.

Initially provide verified links or approved integrations for:

- Student login
- Fee payment
- Examination services
- Certificates
- Academic records
- Student notices

Do not replace legacy transactions without proper testing and approval.

---

# PHASE 4: CONTENT MANAGEMENT AND ADMINISTRATION

Create a secure administration interface.

### Roles

- Super Administrator
- University Administrator
- Content Editor
- Department Editor
- Admissions Officer
- Faculty Content Contributor
- Document Publisher
- Read-only Auditor

Implement role-based access control.

### CMS features

- Draft and published content
- Review and approval workflow
- Scheduled publication
- Content expiry
- Revision history
- Audit trail
- Document uploads
- Image optimization
- SEO metadata
- Preview before publication
- Rollback to previous content versions

Every important page must have an assigned content owner.

---

# PHASE 5: HIGH-PERFORMANCE ENGINEERING

## Performance objectives

Target:

- LCP ≤ 2.5 seconds
- INP ≤ 200 milliseconds
- CLS ≤ 0.1
- Lighthouse Performance ≥ 90
- Lighthouse Accessibility ≥ 95
- Lighthouse SEO ≥ 95

Core Web Vitals must be validated at the 75th percentile of real user traffic once sufficient field data is available.

### Mandatory optimizations

1. Static generation for stable public pages.
2. Incremental revalidation for updated content.
3. Server rendering where necessary.
4. Server Components where appropriate.
5. Minimal client-side JavaScript.
6. Route-level code splitting.
7. Responsive images.
8. AVIF and WebP image delivery.
9. Lazy loading below-the-fold media.
10. Font optimization.
11. CDN caching.
12. Brotli compression.
13. Optimized database queries.
14. Database indexing.
15. API pagination.
16. Cache invalidation.
17. Removal of unnecessary third-party scripts.
18. Performance budgets in CI.

Create automated performance regression tests.

A release must fail when critical performance budgets are exceeded without an approved exception.

---

# PHASE 6: SECURITY AND COMPLIANCE

Implement:

- HTTPS enforcement
- Secure headers
- Content Security Policy
- Role-based authorization
- Secure session management
- Input validation
- Output encoding
- CSRF protection where applicable
- Rate limiting
- Secure file upload validation
- Secrets management
- Dependency scanning
- Static application security testing
- Audit logging
- Backup and restore testing

Follow applicable Indian data protection and cybersecurity requirements.

Apply least-privilege access to university and student information.

Never expose student records, authentication secrets or internal administrative APIs through the public website.

---

# PHASE 7: SEO AND CONTENT MIGRATION

Preserve existing search visibility.

Tasks:

1. Export and inventory existing URLs.
2. Map old URLs to new URLs.
3. Implement permanent redirects.
4. Preserve important page titles and metadata.
5. Generate XML sitemaps.
6. Configure robots.txt.
7. Implement canonical URLs.
8. Add appropriate structured data.
9. Optimize program pages for search.
10. Preserve downloadable document links where feasible.
11. Validate internal links.
12. Verify migrated content.
13. Monitor crawl errors after launch.

Generate a migration reconciliation report.

Do not publish unverified academic or regulatory information.

---

# PHASE 8: TEST AUTOMATION AND QUALITY GATES

## Frontend tests

Use Vitest and Playwright.

Test:

- Navigation
- Responsive layouts
- Program search
- Faculty filters
- Document downloads
- Forms
- Keyboard accessibility
- Error handling
- Loading states
- Cross-browser compatibility

## Backend tests

Use Pytest.

Test:

- API contracts
- Validation
- Authentication
- Authorization
- Pagination
- Database transactions
- CMS integration
- Error responses
- Audit logging

## Performance tests

Test:

- Concurrent traffic
- Cache hit rates
- API latency
- Database load
- Peak admissions traffic
- CDN behavior

## Release criteria

Do not release if:

- Critical user journeys fail.
- Critical or high security findings remain unresolved.
- Important URLs have no valid migration mapping.
- Required content is missing.
- Accessibility blockers remain.
- Data migration reconciliation fails.
- Rollback procedures have not been tested.

---

# PHASE 9: CI/CD AND DEPLOYMENT

Use GitHub Actions.

Required pipeline:

Code Commit
→ Lint
→ Type Check
→ Unit Tests
→ Integration Tests
→ Build
→ Security Scanning
→ Performance Checks
→ Staging Deployment
→ End-to-End Tests
→ Approval
→ Production Deployment
→ Smoke Tests
→ Monitoring

Maintain separate development, staging and production environments.

Implement:

- Environment-based configuration
- Automated deployment
- Database migration controls
- Secrets management
- Deployment approvals
- Monitoring and alerts
- Rollback procedures
- Backup verification

Do not deploy to production or modify live university systems without explicit authorization.

---

# PHASE 10: OPTIONAL AI CAPABILITIES

Introduce AI only after the content foundation is reliable.

### AI University Assistant

Capabilities:

- Answer admission questions.
- Explain available programs.
- Provide eligibility information.
- Find university policies.
- Locate academic documents.
- Guide users to student services.

Use retrieval-augmented generation with approved university content.

Every factual response must include source references.

Do not fabricate official university information.

### AI Content Quality Agent

Detect:

- Outdated announcements
- Broken links
- Missing course information
- Duplicate content
- Conflicting fee information
- Expired documents
- Missing SEO metadata

Require human review before publishing changes.

---

# REQUIRED REPOSITORY STRUCTURE

```text
sainath-university-modern/
├── apps/
│   ├── web/
│   └── admin/
├── services/
│   └── api/
├── packages/
│   ├── ui/
│   ├── types/
│   └── config/
├── infrastructure/
├── scripts/
├── tests/
│   ├── e2e/
│   ├── performance/
│   └── security/
├── docs/
│   ├── audit/
│   ├── architecture/
│   ├── design/
│   ├── migration/
│   └── testing/
├── .github/
│   └── workflows/
└── README.md
```

# IMPLEMENTATION RULES

1. Audit before designing.
2. Design before implementing.
3. Implement working functionality, not just static mockups.
4. Use verified university content.
5. Clearly label demonstration data.
6. Never fabricate regulatory approvals or academic statistics.
7. Preserve existing student services until migration is approved.
8. Keep the architecture modular and maintainable.
9. Optimize performance continuously.
10. Implement automated tests for each major feature.
11. Document important architectural decisions.
12. Avoid unnecessary dependencies.
13. Ensure responsive behavior across desktop, tablet and mobile.
14. Apply security and accessibility from the beginning.
15. Maintain a clear distinction between completed, partially completed, blocked and pending work.

# EXECUTION STRATEGY

Do not attempt all phases in one execution.

Execute sequentially.

At the end of each phase, provide:

### Implementation report

| Field | Required output |
|---|---|
| Phase | Current phase |
| Completed | Verified work |
| Partially completed | Incomplete implementation |
| Pending | Remaining work |
| Blockers | Issues requiring input |
| Files created | Actual file paths |
| Files modified | Actual file paths |
| Tests | Executed tests and results |
| Performance | Measured results |
| Risks | Technical and business risks |
| Next phase | Recommended next action |

Maintain:

- `README.md`
- `docs/IMPLEMENTATION_STATUS.md`
- `docs/REQUIREMENTS_TRACEABILITY.md`
- `docs/DECISIONS.md`

Do not mark any task complete without evidence.

# START EXECUTION NOW

Begin with **PHASE 0: Complete Legacy Website Audit**.

First:

1. Inspect the existing public website.
2. Discover all accessible pages and navigation paths.
3. Categorize content and functionality.
4. Identify observable technology and dependencies.
5. Assess performance and accessibility using available tools.
6. Produce the audit documentation.
7. Propose the target information architecture.
8. Identify the highest-risk migration areas.
9. Present the recommended first development milestone.

Do not modify the live website.

Do not proceed with a full implementation until the Phase 0 findings and target architecture have been reviewed.

**Final objective:** Deliver a production-ready, exceptionally fast, secure, accessible and maintainable university digital platform that can evolve without requiring another full website rewrite.

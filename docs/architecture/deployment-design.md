# Sai Nath University — Deployment Architecture (GitHub Actions Pages)

## 1. Automated Continuous Delivery Pipeline

The deployment pipeline is fully orchestrated via `.github/workflows/deploy.yml`.

```mermaid
sequenceDiagram
    autonumber
    actor Developer
    participant Git as GitHub Repository
    participant Runner as GitHub Actions Runner
    participant Build as Next.js SSG Export
    participant Pages as GitHub Pages Edge CDN
    actor Student as Global Users

    Developer->>Git: git push origin main
    Git->>Runner: Trigger workflow (on: push to main)
    Runner->>Runner: Checkout code & setup Node.js 20
    Runner->>Runner: npm ci (clean dependency installation)
    Runner->>Runner: npm test (execute Vitest test suite)
    Runner->>Build: npm run build (Next.js output: 'export')
    Build-->>Runner: Generated static assets in out/ directory
    Runner->>Pages: actions/upload-pages-artifact
    Runner->>Pages: actions/deploy-pages
    Pages-->>Student: Serve cached static assets with sub-150ms TTFB
```

## 2. Environment Configuration
- **Base Path Resolution:** `NEXT_PUBLIC_BASE_PATH` configured to `/univ-sainath` on GitHub Pages builds and empty `""` for local development or custom apex domain.
- **Asset Optimization:** Images unoptimized at export time (`unoptimized: true` in `next.config.js`) to guarantee compatibility with static web servers without requiring Node image resizing microservices.


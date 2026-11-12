# Sai Nath University — Database & Data Domain Design

## 1. Domain Entities & Relational Schema (PostgreSQL Target)

```mermaid
erDiagram
    SCHOOL ||--o{ DEPARTMENT : contains
    DEPARTMENT ||--o{ PROGRAM : offers
    DEPARTMENT ||--o{ FACULTY : employs
    PROGRAM ||--o{ ADMISSION_CRITERIA : defines
    PROGRAM ||--o{ CURRICULUM_SEMESTER : structures
    CATEGORY ||--o{ DOCUMENT : classifies
    CATEGORY ||--o{ NEWS_EVENT : classifies

    SCHOOL {
        uuid id PK
        string code UK
        string name
        text description
        string dean_name
    }

    DEPARTMENT {
        uuid id PK
        uuid school_id FK
        string code UK
        string name
        string hod_name
        string contact_email
    }

    PROGRAM {
        uuid id PK
        uuid department_id FK
        string code UK
        string name
        enum degree_level
        int duration_years
        string eligibility
        numeric annual_fee
        boolean is_active
    }

    FACULTY {
        uuid id PK
        uuid department_id FK
        string full_name
        string designation
        string highest_qualification
        string specialization
        string email
        boolean is_hod
    }

    DOCUMENT {
        uuid id PK
        uuid category_id FK
        string title
        string document_number
        date issue_date
        string file_path
        string file_type
        int file_size_bytes
    }

    NEWS_EVENT {
        uuid id PK
        uuid category_id FK
        string title
        text content_summary
        date published_date
        date event_date
        boolean is_pinned
        boolean is_urgent
    }
```

---

## 2. Headless Static JSON Equivalents (SSG Mode)

For zero-latency GitHub Pages static hosting, domain data models are exported as strongly-typed static structures under `apps/web/src/data/`:
- `programs.ts`: Complete catalog of B.Tech, M.Tech, MBA, LL.B, B.Pharm, D.Pharm, B.Sc Nursing, Agriculture, etc.
- `schools.ts`: 7 academic schools and their constituent departments.
- `faculty.ts`: Faculty directory entries with designations, credentials, and subjects.
- `documents.ts`: Public disclosures, UGC 2(f) gazettes, BCI/PCI orders, examination notifications.
- `news.ts`: Announcements, circulars, upcoming events, academic calendar.


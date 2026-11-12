# Sai Nath University — API Contracts & TypeScript Interfaces

## 1. Core TypeScript Interface Definitions

```typescript
// packages/types/src/index.ts

export type DegreeLevel = 'Diploma' | 'Undergraduate' | 'Postgraduate' | 'Doctoral' | 'Certificate';

export interface School {
  id: string;
  code: string;
  name: string;
  slug: string;
  description: string;
  departments: string[];
  icon: string;
}

export interface Program {
  id: string;
  code: string;
  name: string;
  slug: string;
  schoolId: string;
  departmentName: string;
  degreeLevel: DegreeLevel;
  durationYears: number;
  eligibility: string;
  annualFee?: string;
  approvedBy: string[]; // e.g. ['UGC', 'AICTE', 'BCI', 'PCI']
  description: string;
  careerOpportunities: string[];
  syllabusPdfUrl?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  specialization: string;
  email?: string;
  experienceYears?: number;
}

export interface UniversityDocument {
  id: string;
  title: string;
  category: 'Approval' | 'Disclosure' | 'Examination' | 'Calendar' | 'Policy' | 'Form';
  documentNumber?: string;
  publishedDate: string;
  fileType: 'PDF' | 'DOCX';
  fileSize: string;
  downloadUrl: string;
}

export interface Announcement {
  id: string;
  title: string;
  category: 'Academic' | 'Examination' | 'Admission' | 'Event' | 'General';
  publishedDate: string;
  isUrgent?: boolean;
  content: string;
  externalLink?: string;
}
```

---

## 2. Future RESTful Endpoints (FastAPI Specification)

- `GET /api/v1/programs` — Search and filter academic programs.
- `GET /api/v1/programs/{slug}` — Retrieve granular program details & curriculum.
- `GET /api/v1/faculty` — Filter faculty members by department and designation.
- `GET /api/v1/documents` — Search public disclosures and official orders.
- `GET /api/v1/announcements` — List active circulars and notices.
- `POST /api/v1/admissions/enquiry` — Submit admission enquiry and lead capture.
- `GET /api/v1/admissions/status/{applicationId}` — Inquire real-time application processing stage.

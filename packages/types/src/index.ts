export type DegreeLevel = 'Diploma' | 'Undergraduate' | 'Postgraduate' | 'Doctoral' | 'Certificate';

export interface School {
  id: string;
  code: string;
  name: string;
  slug: string;
  description: string;
  departments: string[];
  icon: string;
  deanName?: string;
}

export interface Program {
  id: string;
  code: string;
  name: string;
  slug: string;
  schoolId: string;
  schoolName: string;
  departmentName: string;
  degreeLevel: DegreeLevel;
  durationYears: number;
  eligibility: string;
  annualFee?: string;
  approvedBy: string[];
  description: string;
  careerOpportunities: string[];
  curriculumHighlights: string[];
  syllabusPdfUrl?: string;
  isPopular?: boolean;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  schoolId: string;
  qualification: string;
  specialization: string;
  experienceYears: number;
  email: string;
  phone?: string;
  publicationsCount?: number;
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
  description?: string;
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

export interface PlacementPartner {
  id: string;
  name: string;
  sector: string;
  logoPlaceholder: string;
}

export interface LeadershipProfile {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  message?: string;
  honoraryTitles?: string[];
  imagePlaceholder?: string;
}


import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  ExternalLink,
  Award,
  BookOpen,
  FileText,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

export default function UniversityFooter() {
  return (
    <footer className="bg-navy-900 text-slate-300 border-t-4 border-primary">
      {/* Statutory Credential Banner */}
      <div className="bg-navy-950/80 border-b border-navy-800 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
            <span className="font-semibold text-white">
              Statutory Recognition & Approvals:
            </span>
            <span className="text-slate-300">
              Jharkhand Act No. 15 of 2012 • UGC Recognized u/s 2(f) • AIU Member • BCI • PCI • NCTE • INC Approved
            </span>
          </div>
          <div className="flex items-center gap-4 text-gold">
            <Link href="/disclosures" className="hover:underline flex items-center gap-1">
              <span>Mandatory Disclosures</span>
            </Link>
            <span>•</span>
            <Link href="/disclosures" className="hover:underline flex items-center gap-1">
              <span>RTI Cell</span>
            </Link>
            <span>•</span>
            <Link href="/disclosures" className="hover:underline flex items-center gap-1">
              <span>Anti-Ragging Squad</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: University Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-serif font-black text-xl border-2 border-gold shadow-md">
                SNU
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-white tracking-wide">
                  SAI NATH UNIVERSITY
                </h3>
                <p className="text-xs text-gold font-medium">
                  Ranchi, Jharkhand, India
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              Sai Nath University was established under the Sai Nath University, Jharkhand Act, 2012 (Jharkhand Government Act No. 15 of 2012) and recognized by the University Grants Commission (UGC) under Section 2(f). Nurturing professional excellence across engineering, law, pharmacy, nursing, agriculture, and management.
            </p>

            <div className="space-y-2 text-xs pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>
                  Jirawar, Chandway-Kuchu Road, Ormanjhi, Ranchi, Jharkhand - 835219
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>Admission Helpline: +91-7970408015, +91-6204313818</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>sainathuniversity@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Academic Programs */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-primary/60 pb-1.5 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-gold" /> Academic Programs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/academics/programs" className="hover:text-gold transition-colors">
                  B.Tech Engineering & Mining
                </Link>
              </li>
              <li>
                <Link href="/academics/programs" className="hover:text-gold transition-colors">
                  Bachelor of Laws (LL.B. & B.A. LL.B.)
                </Link>
              </li>
              <li>
                <Link href="/academics/programs" className="hover:text-gold transition-colors">
                  Pharmacy (B.Pharm & D.Pharm)
                </Link>
              </li>
              <li>
                <Link href="/academics/programs" className="hover:text-gold transition-colors">
                  Nursing (B.Sc Nursing & GNM)
                </Link>
              </li>
              <li>
                <Link href="/academics/programs" className="hover:text-gold transition-colors">
                  B.Sc (Hons) Agriculture
                </Link>
              </li>
              <li>
                <Link href="/academics/programs" className="hover:text-gold transition-colors">
                  Management (MBA & BBA)
                </Link>
              </li>
              <li>
                <Link href="/academics/programs" className="hover:text-gold transition-colors">
                  Education (B.Ed & D.El.Ed)
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-gold transition-colors">
                  Doctoral Research (Ph.D.)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Admissions & Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-primary/60 pb-1.5 flex items-center gap-2">
              <Award className="w-4 h-4 text-gold" /> Admissions 2026
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/admissions" className="hover:text-gold transition-colors">
                  Admission Procedure
                </Link>
              </li>
              <li>
                <Link href="/admissions/fee-structure" className="hover:text-gold transition-colors">
                  Course Fee Schedules
                </Link>
              </li>
              <li>
                <Link href="/admissions/scholarships" className="hover:text-gold transition-colors">
                  Scholarships & Tribal Aid
                </Link>
              </li>
              <li>
                <Link href="/admissions/apply-online" className="text-gold font-semibold hover:underline">
                  Online Application Form
                </Link>
              </li>
              <li>
                <Link href="/admissions/application-status" className="hover:text-gold transition-colors">
                  Check Application Status
                </Link>
              </li>
              <li>
                <Link href="/placements" className="hover:text-gold transition-colors">
                  Placement Cell & Recruiters
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="hover:text-gold transition-colors">
                  Faculty Roster
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Student Corner & Governance */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-primary/60 pb-1.5 flex items-center gap-2">
              <FileText className="w-4 h-4 text-gold" /> Student Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/student-services/student-corner"
                  className="inline-flex items-center gap-1 font-semibold text-gold hover:underline"
                >
                  <span>Student Corner Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link href="/academics/calendar" className="hover:text-gold transition-colors">
                  Semester Academic Calendar
                </Link>
              </li>
              <li>
                <Link href="/news-events" className="hover:text-gold transition-colors">
                  Exam Notices & Circulars
                </Link>
              </li>
              <li>
                <Link href="/disclosures" className="hover:text-gold transition-colors">
                  Statutory Disclosures
                </Link>
              </li>
              <li>
                <Link href="/disclosures" className="hover:text-gold transition-colors">
                  Internal Complaints Committee (ICC)
                </Link>
              </li>
              <li>
                <Link href="/disclosures" className="hover:text-gold transition-colors">
                  Grievance Redressal Cell
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Campus Location & Helpline
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal Disclaimer */}
        <div className="mt-12 pt-6 border-t border-navy-800 text-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <p>
            © {new Date().getFullYear()} Sai Nath University. All Rights Reserved. Established by Jharkhand State Act No. 15 of 2012.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/disclosures" className="hover:underline">Privacy Policy</Link>
            <span>•</span>
            <Link href="/disclosures" className="hover:underline">Terms of Use</Link>
            <span>•</span>
            <Link href="/disclosures" className="hover:underline">Hyperlinking Policy</Link>
            <span>•</span>
            <Link href="/disclosures" className="hover:underline">Accessibility Statement (WCAG 2.2 AA)</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


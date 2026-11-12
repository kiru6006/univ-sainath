import React from 'react';
import Link from 'next/link';
import { Calendar, Download, Clock, AlertCircle } from 'lucide-react';
import { documentsData } from '@/data/documents';

export const metadata = {
  title: 'Academic Calendar 2026-27 | Sai Nath University Ranchi',
  description: 'Official academic calendar for odd and even semesters, examination dates, registration schedules, and holidays at Sai Nath University.',
};

export default function CalendarPage() {
  const calDoc = documentsData.find((d) => d.category === 'Calendar') || documentsData[0];

  const scheduleEvents = [
    { period: 'July 15 - July 30, 2026', title: 'Odd Semester Academic Registration & Fee Submission', type: 'Registration' },
    { period: 'August 01, 2026', title: 'Commencement of Classes (All Odd Semesters)', type: 'Academics' },
    { period: 'October 10 - 15, 2026', title: 'Mid-Semester Examinations / Internal Assessments', type: 'Examination' },
    { period: 'November 20 - 25, 2026', title: 'Admit Card Generation on Student Corner Portal', type: 'Portal' },
    { period: 'December 01 - 20, 2026', title: 'Odd Semester End-Term Theory & Practical Examinations', type: 'Examination' },
    { period: 'January 05, 2027', title: 'Commencement of Even Semester Classes', type: 'Academics' },
    { period: 'March 15 - 20, 2027', title: 'Even Semester Mid-Term Evaluation', type: 'Examination' },
    { period: 'May 05 - 25, 2027', title: 'Even Semester Final Examinations', type: 'Examination' },
  ];

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      <div className="border-b border-slate-200 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Academic Operations
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight mt-1">
            Academic Calendar 2026-2027
          </h1>
          <p className="text-xs sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Approved semester milestones, assessment schedules, vacation windows, and examination timelines.
          </p>
        </div>

        <Link
          href="/disclosures"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-primary text-white font-bold text-xs rounded-md shadow hover:bg-primary-dark transition-colors shrink-0"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download PDF Calendar</span>
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
        {scheduleEvents.map((ev, idx) => (
          <div key={ev.title} className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-500 shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {ev.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span className="font-semibold text-primary">{ev.period}</span>
                </div>
              </div>
            </div>

            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-100 text-slate-700">
              {ev.type}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <strong>Examination Notice:</strong> Exact practical and viva examination dates are announced separately by department notice boards and updated on the{' '}
          <Link href="/student-services/student-corner" className="underline font-bold text-amber-950">
            Student Corner
          </Link>.
        </div>
      </div>
    </div>
  );
}

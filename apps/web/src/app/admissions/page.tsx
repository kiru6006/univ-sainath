import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileText, Phone, Award, ShieldCheck, DollarSign } from 'lucide-react';

export const metadata = {
  title: 'Admissions 2026-27 | Sai Nath University Ranchi',
  description: 'Admission Guidelines, Eligibility, Application Procedures, and Fee Information for Academic Session 2026-27 at Sai Nath University.',
};

export default function AdmissionsPage() {
  const admissionSteps = [
    {
      step: '01',
      title: 'Program Selection & Eligibility Review',
      desc: 'Browse programs in Engineering, Law, Pharmacy, Nursing, Agriculture, Management, or Education and ensure you satisfy the minimum qualification marks.',
    },
    {
      step: '02',
      title: 'Submit Online Application Form',
      desc: 'Complete the multi-step online application with your demographic information, contact numbers, and 10th/12th academic percentage.',
    },
    {
      step: '03',
      title: 'Document Verification',
      desc: 'Submit self-attested copies of marksheets, transfer certificate, caste/tribal domicile certificates (if applying for state scholarship), and ID proof.',
    },
    {
      step: '04',
      title: 'Provisional Seat Allotment & Enrollment',
      desc: 'Receive your provisional admission offer letter, pay the initial semester tuition fee, and obtain your official student roll number and ERP login.',
    },
  ];

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Enrollment 2026-27
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight mt-1">
            Sai Nath University Admissions
          </h1>
          <p className="text-xs sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Transparent, merit-based admission process adhering to UGC and national statutory council guidelines.
          </p>
        </div>

        <Link
          href="/admissions/apply-online"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold text-xs sm:text-sm rounded-md shadow hover:bg-primary-dark transition-colors shrink-0"
        >
          <span>Apply Online 2026-27</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Admission Steps */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
            Admission Roadmap: 4 Simple Steps
          </h2>
          <p className="text-xs text-slate-500 mt-1">Follow the guided process to secure your enrollment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {admissionSteps.map((s) => (
            <div key={s.step} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-3 relative group hover:border-primary/40 transition-colors">
              <div className="text-3xl font-black font-serif text-slate-200 group-hover:text-primary/20 transition-colors">
                {s.step}
              </div>
              <h3 className="text-sm font-bold text-slate-900 leading-snug">
                {s.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/admissions/fee-structure"
          className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl p-6 transition-all group"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
            <DollarSign className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
            Course Fee Structure
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Review detailed annual tuition fees across all undergraduate and postgraduate degrees.
          </p>
        </Link>

        <Link
          href="/admissions/scholarships"
          className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl p-6 transition-all group"
        >
          <div className="w-10 h-10 rounded-lg bg-navy-50 text-navy flex items-center justify-center mb-3 border border-navy-border">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900 group-hover:text-navy transition-colors">
            Scholarships & Financial Aid
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Information on merit waivers and Jharkhand Government e-Kalyan post-matric tribal assistance.
          </p>
        </Link>

        <Link
          href="/admissions/application-status"
          className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl p-6 transition-all group"
        >
          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 border border-emerald-200">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
            Track Application Status
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Check the verification and document processing progress of your submitted application.
          </p>
        </Link>
      </section>

      {/* Admission Helpline Section */}
      <section className="bg-navy-900 text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-gold">
            Direct Counseling Desk
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold mt-1">
            Have Questions Regarding Eligibility or Seats?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Call our Admissions Counselors: <strong>+91-7970408015, +91-6204313818</strong>
          </p>
        </div>
        <Link
          href="/admissions/apply-online"
          className="px-6 py-3 bg-gold hover:bg-gold-light text-navy-dark font-bold text-xs sm:text-sm rounded-md shadow transition-colors shrink-0"
        >
          Begin Online Application
        </Link>
      </section>
    </div>
  );
}


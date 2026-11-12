import React from 'react';
import Link from 'next/link';
import { Award, ShieldCheck, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Scholarships & Financial Aid | Sai Nath University Ranchi',
  description: 'Merit scholarships and Jharkhand Government e-Kalyan post-matric financial assistance for SC, ST, and OBC students at Sai Nath University.',
};

export default function ScholarshipsPage() {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      <div className="border-b border-slate-200 pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Financial Support
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight mt-1">
          Scholarships & Financial Assistance
        </h1>
        <p className="text-xs sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          Sai Nath University is deeply dedicated to educational equity, enabling meritorious and economically underprivileged students to pursue professional degrees without financial impediments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* State Govt e-Kalyan Scheme */}
        <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-serif font-bold text-slate-900">
              Jharkhand State Post-Matric Scholarship (e-Kalyan)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Domicile students of Jharkhand belonging to Scheduled Tribe (ST), Scheduled Caste (SC), and Other Backward Classes (OBC) categories can avail full or substantial tuition fee reimbursements under the Welfare Department, Government of Jharkhand e-Kalyan portal scheme.
            </p>
            <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-lg">
              <p className="font-bold text-slate-900">Key Eligibility Criteria:</p>
              <ul className="space-y-1">
                <li>• Permanent resident/domicile of Jharkhand State.</li>
                <li>• Family income below statutory ceiling (ST/SC: ₹2.5 Lakhs/year; BC/OBC: ₹1.5 Lakhs/year).</li>
                <li>• Admission in approved university degree/diploma courses.</li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">Facilitated by University Scholarship Cell</span>
            <a
              href="https://ekalyan.cgg.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
            >
              <span>e-Kalyan Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Institutional Merit Scholarships */}
        <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy flex items-center justify-center border border-navy-border">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-serif font-bold text-slate-900">
              Sai Nath University Merit Scholarship Scheme
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Awarded annually to top-performing students based on their qualifying examination aggregate percentage to reward scholastic diligence and academic excellence.
            </p>
            <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-lg">
              <p className="font-bold text-slate-900">Merit Fee Concession Tiers:</p>
              <ul className="space-y-1">
                <li>• <strong>90% and above in 10+2 / Graduation:</strong> 25% Tuition Fee Waiver</li>
                <li>• <strong>80% to 89.9% in Qualifying Exam:</strong> 15% Tuition Fee Waiver</li>
                <li>• <strong>Special Concession:</strong> Single girl child and wards of armed forces personnel.</li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <Link
              href="/admissions/apply-online"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-primary transition-colors"
            >
              <span>Apply & Claim Scholarship</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

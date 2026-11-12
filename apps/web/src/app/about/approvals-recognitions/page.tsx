import React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { documentsData } from '@/data/documents';

export const metadata = {
  title: 'Approvals & Statutory Recognitions | Sai Nath University Ranchi',
  description: 'Verified statutory approvals for Sai Nath University: Jharkhand Act No. 15 of 2012, UGC Section 2(f), AIU, BCI, PCI, NCTE, and INC.',
};

export default function ApprovalsRecognitionsPage() {
  const approvalDocs = documentsData.filter((d) => d.category === 'Approval');

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      <div className="border-b border-slate-200 pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Statutory Compliance
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight mt-1">
          Approvals, Accreditations & Recognitions
        </h1>
        <p className="text-xs sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          Sai Nath University operates with full legal sanctity and statutory clearances granted by the State Legislature of Jharkhand, University Grants Commission, and national regulatory bodies.
        </p>
      </div>

      {/* Approvals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xs uppercase px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
              State Legislature
            </span>
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-base font-bold text-slate-900">
            Jharkhand Act No. 15 of 2012
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Established under the Sai Nath University, Jharkhand Act, 2012 by the Legislative Assembly of Jharkhand, granting full statutory status as a degree-awarding state private university.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xs uppercase px-2.5 py-0.5 rounded bg-navy-50 text-navy-800 border border-navy-border">
              Central Regulatory
            </span>
            <ShieldCheck className="w-5 h-5 text-navy" />
          </div>
          <h2 className="text-base font-bold text-slate-900">
            UGC Recognized u/s 2(f)
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Recognized and maintained under Section 2(f) of the University Grants Commission Act, 1956, authorizing the conferment of degrees in accordance with UGC norms.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xs uppercase px-2.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
              National Association
            </span>
            <ShieldCheck className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-base font-bold text-slate-900">
            AIU Membership
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Member of the Association of Indian Universities (AIU), New Delhi, ensuring equivalence and national/international recognition of university degrees.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xs uppercase px-2.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
              Legal Education
            </span>
            <ShieldCheck className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-base font-bold text-slate-900">
            Bar Council of India (BCI)
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Approved by the Bar Council of India, New Delhi for conducting professional law degrees (LL.B., 5-Year Integrated B.A. LL.B., and LL.M.).
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xs uppercase px-2.5 py-0.5 rounded bg-purple-50 text-purple-800 border border-purple-200">
              Pharmacy Education
            </span>
            <ShieldCheck className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-base font-bold text-slate-900">
            Pharmacy Council of India (PCI)
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Approved by the Pharmacy Council of India, New Delhi for conducting Bachelor of Pharmacy (B.Pharm) and Diploma in Pharmacy (D.Pharm) programs.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xs uppercase px-2.5 py-0.5 rounded bg-rose-50 text-rose-800 border border-rose-200">
              Nursing & Health
            </span>
            <ShieldCheck className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-base font-bold text-slate-900">
            Indian Nursing Council (INC)
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Approved by the Indian Nursing Council (INC) and Jharkhand State Nursing Registration Council for B.Sc. Nursing, GNM, and ANM courses.
          </p>
        </div>
      </div>

      {/* Official Order Documents */}
      <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
        <h3 className="text-lg font-serif font-bold text-slate-900">
          Official Statutory Orders & Gazette Downloads
        </h3>
        <div className="divide-y divide-slate-200">
          {approvalDocs.map((doc) => (
            <div key={doc.id} className="py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-primary shrink-0" />
                <span className="font-semibold text-slate-800">{doc.title}</span>
                {doc.documentNumber && (
                  <span className="text-[11px] text-slate-500 font-mono">({doc.documentNumber})</span>
                )}
              </div>
              <Link
                href="/disclosures"
                className="font-bold text-primary hover:underline shrink-0"
              >
                View in Disclosures Repository
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


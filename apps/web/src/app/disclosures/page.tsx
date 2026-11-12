import React from 'react';
import DocumentList from '@/components/ui/DocumentList';
import { documentsData } from '@/data/documents';
import { ShieldCheck, FileText, AlertTriangle, Scale } from 'lucide-react';

export const metadata = {
  title: 'Mandatory Public Disclosures & Statutory Orders | Sai Nath University',
  description: 'Public disclosures, UGC 2(f) orders, BCI, PCI, INC approvals, RTI cell, and Anti-Ragging committee documents for Sai Nath University Ranchi.',
};

export default function DisclosuresPage() {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      <div className="border-b border-slate-200 pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Regulatory Compliance
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight mt-1">
          Mandatory Public Disclosures & Document Center
        </h1>
        <p className="text-xs sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          In compliance with University Grants Commission (UGC) regulations, statutory council mandates, and the Right to Information (RTI) Act, official orders, committee rosters, and annual reports are published below for public inspection.
        </p>
      </div>

      {/* Statutory Committees Notice Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
          <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" /> Anti-Ragging Cell
          </div>
          <h3 className="text-sm font-bold text-slate-900">Zero Tolerance Policy</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Ragging is strictly prohibited. National Anti-Ragging Helpline: <strong>1800-180-5522</strong>. University Anti-Ragging Squad mobile: <strong>+91-8709233171</strong>.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
          <div className="flex items-center gap-2 text-navy font-bold text-xs uppercase tracking-wider">
            <Scale className="w-4 h-4 text-gold" /> Right to Information (RTI)
          </div>
          <h3 className="text-sm font-bold text-slate-900">Public Information Officer</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Applications under the RTI Act, 2005 may be submitted to the Central Registrar Office, Sai Nath University, Ormanjhi, Ranchi.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" /> Internal Complaints (ICC)
          </div>
          <h3 className="text-sm font-bold text-slate-900">Gender Harassment Redressal</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Constituted under the POSH Act to investigate and ensure a safe, dignified campus environment for female students and staff members.
          </p>
        </div>
      </div>

      {/* Searchable Document Repository */}
      <section className="space-y-6 pt-4">
        <div>
          <h2 className="text-xl font-serif font-bold text-slate-900">
            Downloadable Statutory Documents & Gazettes
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Search or filter by Category: Approvals, Disclosures, Calendars, or Policies.
          </p>
        </div>

        <DocumentList documents={documentsData} />
      </section>
    </div>
  );
}

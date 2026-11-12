import React from 'react';
import Link from 'next/link';
import { BookOpen, Award, ArrowRight, FileCheck2, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Research & Doctoral Studies (Ph.D.) | Sai Nath University Ranchi',
  description: 'Doctoral research guidelines, Ph.D. regulations, approved research areas, and R&D cell at Sai Nath University Ranchi.',
};

export default function ResearchPage() {
  const researchTracks = [
    { name: 'Computer Science & Artificial Intelligence', desc: 'Machine learning for agriculture, mineral resource mapping, intelligent systems.' },
    { name: 'Mining Engineering & Environmental Safety', desc: 'Sustainable mining methods, rock mechanics, pit slope stability, mine water mitigation.' },
    { name: 'Pharmaceutical Formulation & Drug Delivery', desc: 'Phytochemical therapeutics, targeted drug delivery, pharmacokinetics of indigenous medicinal flora.' },
    { name: 'Agronomy & Soil Health Enhancement', desc: 'Organic farming protocols, watershed management, crop disease resistance in eastern plateau soils.' },
    { name: 'Jurisprudence & Constitutional Rights', desc: 'Tribal customary law rights, environmental law jurisprudence, human rights protection.' },
    { name: 'Executive Management & Financial Systems', desc: 'Rural entrepreneurship models, MSME financing, sustainable supply chains in emerging markets.' },
  ];

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      <div className="border-b border-slate-200 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            R&D Innovation Cell
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight mt-1">
            Research & Doctoral Studies (Ph.D.)
          </h1>
          <p className="text-xs sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Fostering interdisciplinary doctoral scholarship in accordance with UGC Ph.D. Minimum Standards and Regulations.
          </p>
        </div>

        <Link
          href="/admissions/apply-online?program=PHD-ALL"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold text-xs rounded-md shadow hover:bg-primary-dark transition-colors shrink-0"
        >
          <span>Apply for Ph.D. Entrance</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* UGC Compliance Banner */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex items-start gap-4">
        <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs">
          <h3 className="font-bold text-slate-900 text-sm">
            Statutory UGC Ph.D. Regulation Compliance
          </h3>
          <p className="text-slate-600 leading-relaxed">
            All doctoral scholars undergo mandatory pre-Ph.D. coursework in Research Methodology & Ethics, periodic Research Advisory Committee (RAC) evaluations, and publish peer-reviewed papers in UGC-CARE indexed journals prior to final thesis submission.
          </p>
        </div>
      </div>

      {/* Research Areas */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-serif font-bold text-slate-900">
            Active Research Disciplines & Supervisor Domains
          </h2>
          <p className="text-xs text-slate-500 mt-1">Specialized investigation tracks for doctoral candidates.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchTracks.map((trk) => (
            <div key={trk.name} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-2">
              <h3 className="text-sm font-bold text-slate-900 leading-snug">
                {trk.name}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {trk.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


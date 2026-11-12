import React from 'react';
import { leadershipData } from '@/data/leadership';
import { facultyData } from '@/data/faculty';
import { Award, ShieldCheck, Mail, Phone } from 'lucide-react';

export const metadata = {
  title: 'Leadership & Governance | Sai Nath University Ranchi',
  description: 'Profiles of Chancellor Dr. C.P. Agarwal, Vice-Chancellor Prof. (Dr.) S.P. Agarwal, and University Governing Officers.',
};

export default function LeadershipPage() {
  const officers = facultyData.slice(0, 4);

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      <div className="border-b border-slate-200 pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          About University
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight mt-1">
          University Leadership & Governance
        </h1>
        <p className="text-xs sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          Guiding visionaries and executive officers overseeing institutional excellence, statutory compliance, and academic rigor.
        </p>
      </div>

      {/* Leadership Biographies */}
      <div className="space-y-8">
        {leadershipData.map((leader) => (
          <div
            key={leader.id}
            className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start gap-8"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-slate-100 border-2 border-primary/20 flex items-center justify-center text-primary font-serif font-black text-2xl sm:text-3xl shrink-0 shadow-sm">
              {leader.name.split(' ').map((n) => n[0]).filter(Boolean).slice(0, 3).join('')}
            </div>

            <div className="space-y-4 flex-1">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded">
                  {leader.role}
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-1">
                  {leader.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">{leader.title}</p>
              </div>

              {leader.honoraryTitles && (
                <div className="flex flex-wrap gap-2">
                  {leader.honoraryTitles.map((t) => (
                    <span key={t} className="text-[11px] font-semibold text-navy bg-navy-50 px-2.5 py-0.5 rounded border border-navy-border flex items-center gap-1">
                      <Award className="w-3 h-3 text-gold" />
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {leader.bio}
              </p>

              {leader.message && (
                <div className="p-4 bg-slate-50 border-l-4 border-primary rounded-r-lg text-xs sm:text-sm text-slate-800 italic">
                  &ldquo;{leader.message}&rdquo;
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Executive University Officers */}
      <div className="space-y-6 pt-6 border-t border-slate-200">
        <h3 className="text-xl font-serif font-bold text-slate-900">
          Executive Administrative Officers
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {officers.map((officer) => (
            <div key={officer.id} className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
              <div>
                <h4 className="text-sm font-bold text-slate-900 leading-tight">
                  {officer.name}
                </h4>
                <p className="text-xs text-primary font-semibold mt-0.5">{officer.designation}</p>
                <p className="text-[11px] text-slate-500">{officer.department}</p>
              </div>
              <div className="pt-2 border-t border-slate-200 text-xs space-y-1">
                <p className="text-[11px] text-slate-600 truncate">
                  <strong>Qual:</strong> {officer.qualification}
                </p>
                {officer.email && (
                  <a href={`mailto:${officer.email}`} className="text-navy hover:underline block truncate">
                    {officer.email}
                  </a>
                )}
                {officer.phone && (
                  <p className="text-slate-600 font-mono">{officer.phone}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


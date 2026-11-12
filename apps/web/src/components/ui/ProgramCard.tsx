import React from 'react';
import Link from 'next/link';
import { Program } from '@sainath-univ/types';
import { Clock, GraduationCap, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group hover:border-primary/40">
      <div className="p-5">
        {/* Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-navy-50 text-navy-800 border border-navy-border">
            {program.degreeLevel}
          </span>
          {program.isPopular && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gold-light text-gold-dark border border-gold/40">
              Popular Program
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug mb-2">
          {program.name}
        </h3>

        {/* School Name */}
        <p className="text-xs text-slate-500 font-medium mb-3">
          {program.schoolName}
        </p>

        {/* Description */}
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
          {program.description}
        </p>

        {/* Key Specs */}
        <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>Duration: <strong className="text-slate-800">{program.durationYears} Years</strong></span>
          </div>
          <div className="flex items-start gap-2">
            <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <span className="line-clamp-1">Eligibility: <span className="text-slate-800">{program.eligibility}</span></span>
          </div>
          {program.annualFee && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-primary">Fee:</span>
              <span className="font-bold text-slate-900">{program.annualFee}</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="bg-slate-50 px-5 py-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          {program.approvedBy.join(' • ')}
        </span>
        <Link
          href={`/admissions/apply-online?program=${encodeURIComponent(program.code)}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-dark transition-colors"
        >
          <span>Apply Now</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}


import React from 'react';
import { FacultyMember } from '@sainath-univ/types';
import { Mail, Phone, BookCheck, Briefcase, GraduationCap } from 'lucide-react';

interface FacultyCardProps {
  faculty: FacultyMember;
}

export default function FacultyCard({ faculty }: FacultyCardProps) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:border-navy/40">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="w-12 h-12 rounded-full bg-navy-50 text-navy-800 font-bold font-serif text-lg flex items-center justify-center border border-navy-border shrink-0">
            {faculty.name.split(' ').map((n) => n[0]).filter(Boolean).slice(0, 2).join('')}
          </div>
          <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded">
            {faculty.experienceYears}+ Yrs Exp
          </span>
        </div>

        <h3 className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">
          {faculty.name}
        </h3>
        <p className="text-xs font-semibold text-primary mt-0.5 mb-2">
          {faculty.designation}
        </p>

        <p className="text-xs text-slate-600 font-medium mb-3">
          {faculty.department}
        </p>

        <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
          <div className="flex items-start gap-2">
            <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <span className="text-slate-800 font-medium">{faculty.qualification}</span>
          </div>
          <div className="flex items-start gap-2">
            <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <span className="text-slate-600 italic">{faculty.specialization}</span>
          </div>
          {faculty.publicationsCount !== undefined && (
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <BookCheck className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>{faculty.publicationsCount} Research Publications</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <a
          href={`mailto:${faculty.email}`}
          className="inline-flex items-center gap-1.5 text-navy hover:text-primary transition-colors font-medium truncate"
        >
          <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
          <span className="truncate">{faculty.email}</span>
        </a>
      </div>
    </div>
  );
}


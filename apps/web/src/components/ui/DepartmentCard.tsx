import React from 'react';
import Link from 'next/link';
import { School } from '@sainath-univ/types';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';

interface DepartmentCardProps {
  school: School;
}

export default function DepartmentCard({ school }: DepartmentCardProps) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between group hover:border-primary/40">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
            {school.code}
          </span>
          {school.deanName && (
            <span className="text-xs text-slate-500 font-medium">
              Dean: {school.deanName}
            </span>
          )}
        </div>

        <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
          {school.name}
        </h3>

        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          {school.description}
        </p>

        {/* Departments List */}
        <div className="space-y-1 mb-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1">
            <Layers className="w-3 h-3 text-gold" /> Departments:
          </p>
          <ul className="space-y-1 text-xs text-slate-700">
            {school.departments.map((dept) => (
              <li key={dept} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                <span className="truncate">{dept}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/academics/programs?school=${encodeURIComponent(school.id)}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-primary transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5 text-gold" />
          <span>View Programs</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}


import React, { Suspense } from 'react';
import ProgramFinder from '@/components/ui/ProgramFinder';

export const metadata = {
  title: 'Academic Programs & Degrees | Sai Nath University Ranchi',
  description: 'Search and filter degree programs at Sai Nath University Ranchi: B.Tech, M.Tech, LL.B, B.Pharm, D.Pharm, B.Sc Nursing, Agriculture, MBA, and B.Ed.',
};

export default function ProgramsPage() {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      <div className="border-b border-slate-200 pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Academic Offerings
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight mt-1">
          Explore Academic Degree & Diploma Programs
        </h1>
        <p className="text-xs sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          Filter programs by degree level, academic school, duration, and career opportunities. All courses comply with UGC and respective national statutory council directives.
        </p>
      </div>

      <Suspense fallback={<div className="p-12 text-center text-xs text-slate-500">Loading Academic Programs...</div>}>
        <ProgramFinder />
      </Suspense>
    </div>
  );
}


import React, { Suspense } from 'react';
import ApplyOnlineForm from '@/components/ui/ApplyOnlineForm';

export const metadata = {
  title: 'Apply Online 2026-27 | Sai Nath University Ranchi',
  description: 'Online Admission Application Form for Session 2026-27 at Sai Nath University Ranchi. Fast multi-step registration for all courses.',
};

export default function ApplyOnlinePage() {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Academic Session 2026-27
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight mt-1">
          Online Admission Application
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-2">
          Complete the official enrollment form below. Our Central Admissions Office will contact you for counseling and verification.
        </p>
      </div>

      <Suspense fallback={<div className="p-12 text-center text-xs text-slate-500">Loading Application Form...</div>}>
        <ApplyOnlineForm />
      </Suspense>
    </div>
  );
}

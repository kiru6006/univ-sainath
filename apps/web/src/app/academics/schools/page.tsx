import React from 'react';
import DepartmentCard from '@/components/ui/DepartmentCard';
import { schoolsData } from '@/data/schools';

export const metadata = {
  title: 'Schools & Faculties | Sai Nath University Ranchi',
  description: '7 Specialized Academic Faculties: Engineering, Law, Pharmacy, Nursing, Agriculture, Management, and Education.',
};

export default function SchoolsPage() {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      <div className="border-b border-slate-200 pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Academic Organization
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight mt-1">
          Faculties & Academic Departments
        </h1>
        <p className="text-xs sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          Structured academic departments offering approved undergraduate, postgraduate, and diploma curriculums under dedicated decanal leadership.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schoolsData.map((school) => (
          <DepartmentCard key={school.id} school={school} />
        ))}
      </div>
    </div>
  );
}


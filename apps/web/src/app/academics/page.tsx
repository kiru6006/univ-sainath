import React from 'react';
import Link from 'next/link';
import DepartmentCard from '@/components/ui/DepartmentCard';
import ProgramFinder from '@/components/ui/ProgramFinder';
import { schoolsData } from '@/data/schools';
import { BookOpen, Award, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Academics | Schools & Programs | Sai Nath University Ranchi',
  description: 'Explore academic programs, constituent schools, and faculties at Sai Nath University Ranchi across Engineering, Law, Pharmacy, Nursing, and Agriculture.',
};

export default function AcademicsPage() {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
      <div className="border-b border-slate-200 pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Academic Structure
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight mt-1">
          Schools, Faculties & Programs
        </h1>
        <p className="text-xs sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          Comprehensive multidisciplinary learning fostering deep conceptual mastery, practical craftsmanship, and professional readiness.
        </p>
      </div>

      {/* Program Finder Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
            Find Your Program
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Search across 40+ degree and polytechnic diploma courses.
          </p>
        </div>
        <ProgramFinder />
      </section>

      {/* Schools & Faculties Grid */}
      <section className="space-y-8 pt-8 border-t border-slate-200">
        <div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
            Constituent Academic Schools
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Explore faculties and their specialized departments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schoolsData.map((school) => (
            <DepartmentCard key={school.id} school={school} />
          ))}
        </div>
      </section>
    </div>
  );
}

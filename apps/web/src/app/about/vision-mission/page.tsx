import React from 'react';
import Link from 'next/link';
import { Target, Compass, Award, HeartHandshake, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Vision & Mission | Sai Nath University Ranchi',
  description: 'Vision, Mission, and Core Academic Values of Sai Nath University, Ranchi, Jharkhand.',
};

export default function VisionMissionPage() {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      <div className="border-b border-slate-200 pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          About University
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight mt-1">
          Vision, Mission & Core Values
        </h1>
        <p className="text-xs sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          Guiding principles for transforming human potential and serving society through quality higher education.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <Compass className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Our Vision
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            To emerge as a premier multidisciplinary university of national distinction, recognized for providing transformative education, nurturing ethical leadership, fostering indigenous innovation, and empowering students from all socioeconomic strata, particularly the regional and tribal communities of Jharkhand.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy flex items-center justify-center border border-navy-border">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Our Mission
          </h2>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
              <span>Deliver rigorous, market-aligned academic curricula across engineering, law, pharmacy, nursing, agriculture, and management.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
              <span>Provide experiential learning through advanced laboratory research, clinical hospital rotations, and agricultural field trials.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
              <span>Cultivate critical thinking, moral values, environmental consciousness, and dedication to national development.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Core Values Strip */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-6">
        <h3 className="text-lg font-serif font-bold text-slate-900 text-center">
          Institutional Core Values
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="text-base font-bold text-primary mb-1">Academic Integrity</div>
            <p className="text-xs text-slate-500">Uncompromising commitment to honesty, merit, and high ethical standards.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="text-base font-bold text-navy mb-1">Social Inclusivity</div>
            <p className="text-xs text-slate-500">Active empowerment of underprivileged and tribal youth through education.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="text-base font-bold text-gold-dark mb-1">Practical Rigor</div>
            <p className="text-xs text-slate-500">Industry-aligned experiential skill development and laboratory competence.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="text-base font-bold text-emerald-700 mb-1">Nation Building</div>
            <p className="text-xs text-slate-500">Instilling civic responsibility, discipline, and patriotic service.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


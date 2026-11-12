import React from 'react';
import Link from 'next/link';
import { recruitersData } from '@/data/leadership';
import { facultyData } from '@/data/faculty';
import { Briefcase, Award, TrendingUp, Users, CheckCircle2, Phone, Mail, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Training & Placements | Sai Nath University Ranchi',
  description: 'Career Services, Campus Recruitment Partners, and Placement Statistics at Sai Nath University Ranchi.',
};

export default function PlacementsPage() {
  const placementHead = facultyData.find((f) => f.department.includes('Placement')) || facultyData[3];

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
      <div className="border-b border-slate-200 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Corporate Relations
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight mt-1">
            Training & Placement Cell
          </h1>
          <p className="text-xs sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Bridging campus talent with premier corporate and healthcare recruiters across India.
          </p>
        </div>

        <Link
          href="/admissions/apply-online"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold text-xs rounded-md shadow hover:bg-primary-dark transition-colors shrink-0"
        >
          <span>Enroll Today</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Key Metric Strips */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <div className="text-2xl sm:text-3xl font-black text-primary font-serif">85%+</div>
          <p className="text-xs text-slate-600 font-semibold mt-1">Placement Assistance Rate</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <div className="text-2xl sm:text-3xl font-black text-navy font-serif">120+</div>
          <p className="text-xs text-slate-600 font-semibold mt-1">Active Corporate Partners</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <div className="text-2xl sm:text-3xl font-black text-gold-dark font-serif">100%</div>
          <p className="text-xs text-slate-600 font-semibold mt-1">Hospital Internship for Nursing</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <div className="text-2xl sm:text-3xl font-black text-emerald-700 font-serif">₹8.5 LPA</div>
          <p className="text-xs text-slate-600 font-semibold mt-1">Highest Package Recorded</p>
        </div>
      </div>

      {/* Top Recruiters Grid */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
            Prominent Hiring Partners
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Industry giants actively recruiting from Engineering, Law, Pharmacy, Nursing, Management, and Agriculture.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {recruitersData.map((rec) => (
            <div key={rec.id} className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-navy-50 text-navy font-black text-sm flex items-center justify-center mx-auto mb-2 border border-navy-border">
                {rec.logoPlaceholder}
              </div>
              <h3 className="text-xs font-bold text-slate-900 truncate">{rec.name}</h3>
              <p className="text-[10px] text-slate-500 truncate mt-0.5">{rec.sector}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Placement Cell Officers */}
      <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-3">
          <h3 className="text-base font-bold text-slate-900">
            Corporate Relations & Placement Directorate
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our placement team conducts pre-placement aptitude bootcamps, technical interview mocks, soft skills coaching, and industrial visits starting in the third year of study.
          </p>
          <div className="space-y-1.5 text-xs text-slate-700 pt-1">
            <p>• <strong>Head, T&P Cell:</strong> Dr. Birendra Kumar Goswami (+91-9709231415)</p>
            <p>• <strong>Placement Officer:</strong> Mr. Subodh Kumar Sinha (+91-7903500505)</p>
            <p>• <strong>Email:</strong> placement@sainathuniversity.com</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3 text-xs">
          <h4 className="font-bold text-slate-900">Are You an Employer?</h4>
          <p className="text-slate-600 leading-relaxed">
            We welcome corporate, healthcare, legal, and mining organizations to conduct on-campus hiring drives and internship interviews.
          </p>
          <a
            href="mailto:placement@sainathuniversity.com?subject=Campus%20Recruitment%20Invitation"
            className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Invite University for Campus Drives</span>
          </a>
        </div>
      </div>
    </div>
  );
}


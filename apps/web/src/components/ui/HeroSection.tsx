import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Award,
  Users,
  Compass,
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-navy-900 via-navy-800 to-navy-950 text-white overflow-hidden py-16 sm:py-24 border-b-4 border-gold">
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C89D3C_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-6">
            {/* Regulatory Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-gold/30 text-gold text-xs sm:text-sm font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>Established under Jharkhand State Act No. 15 of 2012 • UGC 2(f)</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-tight text-white">
              Shaping Tomorrow Through <span className="text-gold">Academic Excellence</span> & Innovation
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-3xl font-normal">
              Sai Nath University, Ranchi is premier institution of higher learning in Jharkhand. Offering accredited professional degree and diploma programs in Engineering, Law, Pharmacy, Nursing, Agriculture, Management, and Education.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/admissions/apply-online"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold text-sm sm:text-base rounded-md shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-0.5 border border-primary-light/30"
              >
                <span>Apply for Admission 2026-27</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/academics/programs"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base rounded-md border border-white/20 backdrop-blur transition-all"
              >
                <Compass className="w-4 h-4 text-gold" />
                <span>Explore 40+ Programs</span>
              </Link>
              <Link
                href="/student-services/student-corner"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-slate-300 hover:text-gold text-sm font-semibold transition-colors underline decoration-gold/40 underline-offset-4"
              >
                <GraduationCap className="w-4 h-4 text-gold" />
                <span>Student Corner Portal</span>
              </Link>
            </div>
          </div>

          {/* Hero Quick Highlights Card */}
          <div className="lg:col-span-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <h2 className="text-base font-bold text-gold uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-3">
              <Award className="w-5 h-5 text-gold" /> Institutional Highlights
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Recognized Statutory Approvals</h3>
                  <p className="text-xs text-slate-300 mt-0.5">UGC 2(f), AIU Member, BCI, PCI, NCTE, and INC approved degrees.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/40 flex items-center justify-center text-primary-light shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Diverse Academic Disciplines</h3>
                  <p className="text-xs text-slate-300 mt-0.5">Engineering, Law, Nursing, Pharmacy, Agriculture, Management & B.Ed.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Active Placement Cell</h3>
                  <p className="text-xs text-slate-300 mt-0.5">Direct hiring partnerships with Tata Motors, L&T, Sun Pharma, Wipro & Apollo.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10">
              <Link
                href="/admissions"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-navy-dark bg-gold hover:bg-gold-light rounded-md transition-colors"
              >
                <span>Admission Guidelines & Eligibility</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Metric Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-gold font-serif">40+</div>
            <p className="text-xs text-slate-300 font-medium mt-1">Accredited Programs</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white font-serif">7+</div>
            <p className="text-xs text-slate-300 font-medium mt-1">Academic Faculties</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-gold font-serif">2012</div>
            <p className="text-xs text-slate-300 font-medium mt-1">Established by State Act</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white font-serif">30+ Acres</div>
            <p className="text-xs text-slate-300 font-medium mt-1">Green Campus in Ormanjhi</p>
          </div>
        </div>
      </div>
    </section>
  );
}


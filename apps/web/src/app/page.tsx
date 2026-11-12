import React from 'react';
import Link from 'next/link';
import HeroSection from '@/components/ui/HeroSection';
import ProgramFinder from '@/components/ui/ProgramFinder';
import DepartmentCard from '@/components/ui/DepartmentCard';
import { schoolsData } from '@/data/schools';
import { newsAnnouncementsData } from '@/data/news';
import { leadershipData, recruitersData } from '@/data/leadership';
import {
  ShieldCheck,
  BookOpen,
  GraduationCap,
  Award,
  Users,
  Building,
  Calendar,
  ExternalLink,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  FileCheck2,
} from 'lucide-react';
import { formatDate } from '@/lib/utils';

export default function HomePage() {
  const chancellor = leadershipData.find((l) => l.role === 'Chancellor') || leadershipData[0];
  const vc = leadershipData.find((l) => l.role === 'Vice-Chancellor') || leadershipData[1];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Urgent Announcements & Ticker Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-primary/10 text-primary rounded-lg font-bold text-xs uppercase shrink-0">
              Latest Circulars
            </span>
            <div className="text-xs sm:text-sm font-semibold text-slate-800 line-clamp-1">
              {newsAnnouncementsData[0].title}
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 text-xs">
            <Link
              href="/news-events"
              className="font-bold text-primary hover:text-primary-dark transition-colors flex items-center gap-1"
            >
              <span>View All Circulars</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Program Finder & Academic Courses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" /> Course Catalog 2026-27
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-slate-900 tracking-tight">
            Explore Accredited Academic Programs
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Filter over 40 undergraduate, postgraduate, polytechnic diploma, and doctoral programs across engineering, law, healthcare, agriculture, and business.
          </p>
        </div>

        <ProgramFinder />
      </section>

      {/* 4. Schools & Faculties Grid */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Faculties of Study
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-slate-900 tracking-tight mt-1">
                7 Specialized Academic Schools
              </h2>
            </div>
            <Link
              href="/academics/schools"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-navy hover:text-primary transition-colors"
            >
              <span>Explore All Departments</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolsData.map((school) => (
              <DepartmentCard key={school.id} school={school} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Institutional Leadership & Authority */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-dark bg-gold-light px-3 py-1 rounded-full border border-gold/40">
            Institutional Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-slate-900 tracking-tight mt-2">
            Guiding Academic Vision & Governance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Chancellor Card */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {chancellor.role}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">
                    {chancellor.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">{chancellor.title}</p>
                </div>
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary font-serif font-black text-xl flex items-center justify-center shrink-0 border border-primary/20">
                  CPA
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic bg-slate-50 p-4 rounded-lg border-l-4 border-primary">
                &ldquo;{chancellor.message}&rdquo;
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {chancellor.bio}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Founder Chancellor • Sai Nath University Act, 2012</span>
            </div>
          </div>

          {/* Vice-Chancellor Card */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-navy">
                    {vc.role}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">
                    {vc.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">{vc.title}</p>
                </div>
                <div className="w-14 h-14 rounded-full bg-navy-50 text-navy font-serif font-black text-xl flex items-center justify-center shrink-0 border border-navy-border">
                  SPA
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic bg-slate-50 p-4 rounded-lg border-l-4 border-navy">
                &ldquo;{vc.message}&rdquo;
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {vc.bio}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500 font-medium">
              <Award className="w-4 h-4 text-gold" />
              <span>Honorary Rank of Colonel (NCC / Govt of India)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Training & Placement Cell Recruiters */}
      <section className="bg-navy-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-gold">
              Career & Industry Partnerships
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-white tracking-tight mt-1">
              Top Corporate Recruiters
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Our graduates are employed by premier organizations across engineering, healthcare, pharmaceuticals, banking, and technology.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {recruitersData.map((rec) => (
              <div
                key={rec.id}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 text-center transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/10 font-bold text-sm flex items-center justify-center mx-auto mb-2 text-gold group-hover:scale-105 transition-transform">
                  {rec.logoPlaceholder}
                </div>
                <div className="text-xs font-bold text-white truncate">{rec.name}</div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">{rec.sector}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/placements"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-navy-dark font-bold text-xs rounded-md shadow hover:bg-gold-light transition-colors"
            >
              <span>Explore Training & Placement Cell</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Student Corner Services Bridge */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-primary-dark via-primary to-primary-800 text-white rounded-2xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold text-white">
                <GraduationCap className="w-4 h-4 text-gold" />
                <span>Enrolled Student Portal</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black">
                Sai Nath University Student Corner
              </h2>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-2xl">
                Access your semester examination admit cards, grade sheets, fee receipt verification, and transcript requests directly through the secure university Student Corner.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/student-services/student-corner"
                  className="px-6 py-3 bg-white text-primary-dark font-bold text-xs sm:text-sm rounded-md shadow hover:bg-slate-100 transition-colors flex items-center gap-1.5"
                >
                  <span>Access Student Corner Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/academics/calendar"
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-md border border-white/20 transition-colors"
                >
                  Academic Calendar
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20 space-y-3 text-xs">
              <div className="font-bold text-gold uppercase tracking-wider text-[11px]">
                Quick Student Links
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Download Odd/Even Semester Admit Cards</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Semester Examination Results & Grade Cards</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Online Semester Fee Payment Direct Link</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Provisional Certificate & Migration Requests</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Campus Contact & Location */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Visit Campus
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-slate-900 tracking-tight">
              Ormanjhi Campus, Ranchi
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Situated in a serene 30-acre academic environment in Ormanjhi, Ranchi, equipped with advanced engineering laboratories, moot courts, digital libraries, agricultural experimental plots, and sports arenas.
            </p>

            <div className="space-y-2 text-xs text-slate-700 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Jirawar, Chandway-Kuchu Road, Ormanjhi, Ranchi, Jharkhand - 835219</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>Central Admissions Desk: +91-7970408015, +91-6204313818</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>sainathuniversity@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 text-center">
            <h3 className="text-base font-bold text-slate-900">
              Need Admission Guidance?
            </h3>
            <p className="text-xs text-slate-500">
              Speak with our senior academic counselors regarding eligibility, scholarships, and seat availability.
            </p>
            <div className="space-y-2 pt-2">
              <Link
                href="/admissions/apply-online"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-white bg-primary hover:bg-primary-dark rounded-md shadow transition-colors"
              >
                <span>Submit Online Application</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
              >
                View Department Directory
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


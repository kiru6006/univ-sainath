'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Phone,
  Mail,
  GraduationCap,
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
  Search,
  ExternalLink,
  BookOpen,
  Building2,
  FileText,
  Users,
  Award,
} from 'lucide-react';
import AnnouncementBanner from '@/components/ui/AnnouncementBanner';

interface NavItem {
  title: string;
  href: string;
  subItems?: { title: string; href: string; desc?: string }[];
}

const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  {
    title: 'About University',
    href: '/about',
    subItems: [
      { title: 'Overview & History', href: '/about', desc: 'Jharkhand Act No. 15 of 2012' },
      { title: 'Vision & Mission', href: '/about/vision-mission', desc: 'Core institutional values' },
      { title: 'Leadership & Chancellor', href: '/about/leadership', desc: 'Executive governance' },
      { title: 'Approvals & Recognitions', href: '/about/approvals-recognitions', desc: 'UGC 2(f), AIU, BCI, PCI, INC' },
      { title: 'Campus Infrastructure', href: '/about/infrastructure', desc: 'Labs, library, hostels' },
    ],
  },
  {
    title: 'Academics',
    href: '/academics',
    subItems: [
      { title: 'All Academic Programs', href: '/academics/programs', desc: 'Undergraduate, PG, Diploma, Ph.D.' },
      { title: 'Schools & Faculties', href: '/academics/schools', desc: 'Engineering, Law, Pharmacy, Nursing, Agri' },
      { title: 'Faculty Directory', href: '/faculty', desc: 'Distinguished professors & researchers' },
      { title: 'Academic Calendar', href: '/academics/calendar', desc: 'Semester schedules & examination dates' },
    ],
  },
  {
    title: 'Admissions',
    href: '/admissions',
    subItems: [
      { title: 'Admission Overview 2026-27', href: '/admissions', desc: 'Eligibility, process & guidelines' },
      { title: 'Fee Structure', href: '/admissions/fee-structure', desc: 'Transparent semester course fees' },
      { title: 'Scholarships & e-Kalyan', href: '/admissions/scholarships', desc: 'Merit & state tribal assistance' },
      { title: 'Apply Online', href: '/admissions/apply-online', desc: 'Fast online enrollment application' },
      { title: 'Application Status Tracker', href: '/admissions/application-status', desc: 'Track admission status' },
    ],
  },
  { title: 'Placements', href: '/placements' },
  { title: 'Research & Ph.D.', href: '/research' },
  { title: 'Disclosures', href: '/disclosures' },
  { title: 'News & Circulars', href: '/news-events' },
  { title: 'Contact', href: '/contact' },
];

export default function UniversityHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* 1. Announcement Banner */}
      <AnnouncementBanner />

      {/* 2. Top Statutory & Utility Bar */}
      <div className="bg-navy-900 text-slate-200 text-xs border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 flex flex-wrap items-center justify-between gap-2">
          {/* Statutory Credential Badges */}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-gold font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              <span>Jharkhand Govt. Act No. 15 of 2012</span>
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300">
              UGC Recognized u/s 2(f) • AIU • BCI • PCI • NCTE • INC Approved
            </span>
          </div>

          {/* Quick Contact & Student Corner Link */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+917970408015"
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-gold" />
              <span className="hidden sm:inline">+91-7970408015</span>
            </a>
            <a
              href="mailto:sainathuniversity@gmail.com"
              className="hidden lg:flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-gold" />
              <span>sainathuniversity@gmail.com</span>
            </a>
            <Link
              href="/student-services/student-corner"
              className="inline-flex items-center gap-1 bg-primary text-white font-semibold px-2.5 py-0.5 rounded hover:bg-primary-dark transition-colors"
            >
              <GraduationCap className="w-3 h-3" />
              <span>Student Corner</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Main Brand & Identity Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          {/* University Seal & Name */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary flex items-center justify-center text-white font-serif font-bold text-xl sm:text-2xl shadow-md border-2 border-gold group-hover:scale-105 transition-transform">
              SNU
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl md:text-3xl font-serif font-black tracking-tight text-primary-dark group-hover:text-primary transition-colors">
                  SAI NATH UNIVERSITY
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-medium text-slate-600 tracking-wide">
                Ranchi, Jharkhand • Estd. Under Jharkhand Act 15 of 2012
              </p>
            </div>
          </Link>

          {/* Header Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/admissions/apply-online"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white bg-primary rounded-md shadow hover:bg-primary-dark transition-all transform hover:-translate-y-0.5"
            >
              Apply Online 2026-27
            </Link>
            <Link
              href="/admissions/application-status"
              className="inline-flex items-center justify-center px-3.5 py-2 text-sm font-semibold text-navy bg-navy-50 rounded-md border border-navy-border hover:bg-navy-100 transition-colors"
            >
              Track Application
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/admissions/apply-online"
              className="px-3 py-1.5 text-xs font-bold text-white bg-primary rounded shadow"
            >
              Apply Now
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Desktop Navigation Bar */}
      <nav aria-label="Main Navigation" className="hidden lg:block bg-navy-800 text-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ul className="flex items-center justify-between">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              const hasSub = item.subItems && item.subItems.length > 0;

              return (
                <li
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => hasSub && setActiveDropdown(item.title)}
                  onMouseLeave={() => hasSub && setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 px-3 py-3 text-xs md:text-sm font-semibold tracking-wide transition-colors border-b-2 ${
                      isActive
                        ? 'border-gold text-gold-light bg-navy-900/60'
                        : 'border-transparent text-slate-100 hover:text-gold hover:border-gold/50'
                    }`}
                  >
                    <span>{item.title}</span>
                    {hasSub && <ChevronDown className="w-3.5 h-3.5 opacity-75 group-hover:rotate-180 transition-transform" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasSub && (
                    <div
                      className={`absolute left-0 top-full w-72 bg-white text-slate-800 rounded-b-md shadow-xl border-t-2 border-primary py-2 z-50 transition-all duration-200 ${
                        activeDropdown === item.title ? 'block opacity-100 visible' : 'hidden opacity-0 invisible'
                      }`}
                    >
                      {item.subItems!.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          className="block px-4 py-2 hover:bg-slate-50 transition-colors group/sub"
                        >
                          <div className="text-xs font-bold text-navy-800 group-hover/sub:text-primary transition-colors">
                            {sub.title}
                          </div>
                          {sub.desc && (
                            <div className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                              {sub.desc}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* 5. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[110px] z-40 bg-black/50 backdrop-blur-sm">
          <div className="bg-white w-full max-h-[calc(100vh-110px)] overflow-y-auto p-4 shadow-2xl border-t border-slate-200">
            <div className="space-y-1">
              {navItems.map((item) => {
                const hasSub = item.subItems && item.subItems.length > 0;
                const isExpanded = activeDropdown === item.title;

                return (
                  <div key={item.title} className="border-b border-slate-100 pb-1">
                    {hasSub ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.title)}
                          className="w-full flex items-center justify-between py-2.5 px-3 text-sm font-bold text-slate-800 hover:text-primary"
                        >
                          <span>{item.title}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180 text-primary' : ''}`}
                          />
                        </button>
                        {isExpanded && (
                          <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-md">
                            {item.subItems!.map((sub) => (
                              <Link
                                key={sub.title}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-2 px-3 text-xs font-medium text-slate-700 hover:text-primary hover:bg-white rounded transition-colors"
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2.5 px-3 text-sm font-bold text-slate-800 hover:text-primary"
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 space-y-2">
              <Link
                href="/admissions/apply-online"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-2.5 text-sm font-bold text-white bg-primary rounded-md shadow"
              >
                Apply Online 2026-27
              </Link>
              <Link
                href="/student-services/student-corner"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-2.5 text-sm font-bold text-navy bg-navy-50 border border-navy-border rounded-md"
              >
                Student Corner Portal
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


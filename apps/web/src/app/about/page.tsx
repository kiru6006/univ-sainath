import React from 'react';
import Link from 'next/link';
import { ShieldCheck, BookOpen, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About Sai Nath University | Overview & History',
  description: 'Sai Nath University was established under Jharkhand State Act No. 15 of 2012 and recognized by UGC under Section 2(f). Learn about our history and campus in Ormanjhi, Ranchi.',
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          About University
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight mt-1">
          Sai Nath University, Ranchi
        </h1>
        <p className="text-xs sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          Established under the Sai Nath University, Jharkhand Act, 2012 (Jharkhand Act No. 15 of 2012) and recognized by the University Grants Commission (UGC) under Section 2(f).
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-slate-900">
              Institutional Heritage & Inception
            </h2>
            <p>
              Sai Nath University was founded with a solemn mission to advance quality education in Jharkhand and eastern India. Conceived as a multidisciplinary institution of excellence, the university offers diverse academic programs that blend intellectual rigor with practical industry training.
            </p>
            <p>
              Located in a sprawling 30-acre campus in Ormanjhi, Ranchi, the university provides an ideal academic sanctuary surrounded by lush greenery and equipped with modern laboratories, computing centers, moot courts, nursing clinical wards, and agricultural research stations.
            </p>
          </div>

          {/* Statutory Approvals Highlights */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Statutory Recognitions & Approvals
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Jharkhand Act No. 15 of 2012:</strong> Statutory state private university enactment.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>UGC Section 2(f):</strong> Recognized and listed by the University Grants Commission, New Delhi.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Bar Council of India (BCI):</strong> Approved for LL.B., B.A. LL.B., and LL.M.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Pharmacy Council of India (PCI):</strong> Approved for B.Pharm and D.Pharm.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Indian Nursing Council (INC):</strong> Approved for B.Sc Nursing, GNM, and ANM.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>NCTE:</strong> Eastern Regional Committee approval for B.Ed & teacher training.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-slate-900">
              Campus Environment & Student Life
            </h2>
            <p>
              Our academic environment is characterized by interactive pedagogy, guest lectures by eminent scientists and industry professionals, cultural festivals, sports tournaments, and rural development camps. We take immense pride in fostering student talent and developing socially responsible citizens.
            </p>
          </div>
        </div>

        {/* Sidebar Nav */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              About University Sections
            </h3>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/about" className="block py-2 px-3 rounded bg-primary text-white font-bold">
                  Overview & History
                </Link>
              </li>
              <li>
                <Link href="/about/vision-mission" className="block py-2 px-3 rounded hover:bg-slate-200 text-slate-700 font-medium">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link href="/about/leadership" className="block py-2 px-3 rounded hover:bg-slate-200 text-slate-700 font-medium">
                  Leadership & Governance
                </Link>
              </li>
              <li>
                <Link href="/about/approvals-recognitions" className="block py-2 px-3 rounded hover:bg-slate-200 text-slate-700 font-medium">
                  Approvals & Recognitions
                </Link>
              </li>
              <li>
                <Link href="/about/infrastructure" className="block py-2 px-3 rounded hover:bg-slate-200 text-slate-700 font-medium">
                  Campus Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-primary-50 border border-primary/20 rounded-xl p-6 text-center space-y-3">
            <h4 className="text-sm font-bold text-primary-dark">
              Admissions 2026-27 Open
            </h4>
            <p className="text-xs text-slate-600">
              Join over 40+ accredited programs. Apply online or visit our admissions desk.
            </p>
            <Link
              href="/admissions/apply-online"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-white font-bold text-xs rounded-md shadow hover:bg-primary-dark transition-colors"
            >
              <span>Apply Online</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


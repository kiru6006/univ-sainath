import React from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  ExternalLink,
  ShieldCheck,
  CreditCard,
  FileText,
  Award,
  CheckCircle2,
  AlertCircle,
  Phone,
  HelpCircle,
} from 'lucide-react';

export const metadata = {
  title: 'Student Corner Portal | Sai Nath University Ranchi',
  description: 'Access the official Sai Nath University Student Corner for admit cards, examination results, fee payment, and certificate services.',
};

export default function StudentCornerPage() {
  const portalFeatures = [
    {
      title: 'Examination Admit Cards',
      icon: FileText,
      desc: 'Download semester theory and practical examination admit cards with your university roll number.',
    },
    {
      title: 'Online Semester Fee Payment',
      icon: CreditCard,
      desc: 'Secure payment gateway integration for tuition, examination, and hostel semester dues.',
    },
    {
      title: 'Semester Results & Grade Cards',
      icon: Award,
      desc: 'Check published semester examination marks, SGPA/CGPA cards, and re-evaluation requests.',
    },
    {
      title: 'Certificates & Transcripts',
      icon: GraduationCap,
      desc: 'Submit online requests for Provisional Certificates, Migration, Character Certificates, and Transcripts.',
    },
  ];

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Student Services Hub
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight mt-1">
          Sai Nath University Student Corner
        </h1>
        <p className="text-xs sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          The centralized transactional portal for all enrolled undergraduate, postgraduate, polytechnic, and doctoral students.
        </p>
      </div>

      {/* Primary Action Hero Card */}
      <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-950 text-white rounded-2xl p-8 sm:p-12 shadow-xl border-b-4 border-gold relative overflow-hidden">
        <div className="max-w-2xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-gold text-xs font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Official University Student Portal</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold">
            Enter Student Corner Portal
          </h2>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Click below to open the dedicated secure portal at <code className="bg-black/30 px-1.5 py-0.5 rounded text-gold">student.sainathuniversity.com</code> to access your student records, pay fees, or print forms.
          </p>

          <div className="pt-2">
            <a
              href="https://student.sainathuniversity.com/StudentCorner.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold text-sm sm:text-base rounded-md shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-0.5"
            >
              <span>Launch Student Corner</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Key Services Grid */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-serif font-bold text-slate-900">
            Available Online Student Services
          </h2>
          <p className="text-xs text-slate-500 mt-1">Directly accessible via the Student Corner login portal.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portalFeatures.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-lg bg-navy-50 text-navy flex items-center justify-center border border-navy-border">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {f.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Student Helpline & Support Guidance */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" /> Need Help With Portal Access?
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            If you are unable to login, have lost your student enrollment credentials, or require fee receipt verification, contact the examination controller or registrar desk:
          </p>
          <div className="text-xs text-slate-700 space-y-1 pt-1">
            <p>• <strong>Examination Cell:</strong> Dr. Santosh Kumar (+91-7004814030) / Dr. Poonam Bala (+91-9113763430)</p>
            <p>• <strong>Registrar Office:</strong> Dr. Rakesh Kumar David (+91-8709233171)</p>
            <p>• <strong>Email Support:</strong> sainathuniversity@gmail.com</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3 text-xs">
          <h4 className="font-bold text-slate-900">Academic Calendar Note</h4>
          <p className="text-slate-600 leading-relaxed">
            Admit cards for upcoming term examinations are typically made active 10 days prior to the examination date. Please ensure no library or fee clearance holds exist on your student account.
          </p>
          <Link href="/academics/calendar" className="inline-flex items-center gap-1 font-bold text-primary hover:underline">
            <span>View Full Academic Calendar</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import { programsData } from '@/data/programs';
import { DollarSign, ShieldCheck, ArrowRight, Download, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Fee Structure 2026-27 | Sai Nath University Ranchi',
  description: 'Annual tuition fee schedules, installment guidelines, and examination fee structure for degree programs at Sai Nath University Ranchi.',
};

export default function FeeStructurePage() {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      <div className="border-b border-slate-200 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Financial Transparency
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight mt-1">
            Course Fee Structure (Academic Session 2026-27)
          </h1>
          <p className="text-xs sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Standard tuition fees for degree and polytechnic diploma programs. No hidden charges.
          </p>
        </div>

        <Link
          href="/admissions/apply-online"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold text-xs rounded-md shadow hover:bg-primary-dark transition-colors shrink-0"
        >
          <span>Apply Online</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Fee Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
              <th className="p-4">Program Code</th>
              <th className="p-4">Course Name</th>
              <th className="p-4">Degree Level</th>
              <th className="p-4">Duration</th>
              <th className="p-4">Annual Tuition Fee</th>
              <th className="p-4">Approval Authority</th>
              <th className="p-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {programsData.map((prog) => (
              <tr key={prog.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="p-4 font-mono font-semibold text-slate-900">
                  {prog.code}
                </td>
                <td className="p-4 font-bold text-slate-900 max-w-xs">
                  {prog.name}
                  <div className="text-[11px] font-normal text-slate-500">{prog.schoolName}</div>
                </td>
                <td className="p-4">
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold text-[10px]">
                    {prog.degreeLevel}
                  </span>
                </td>
                <td className="p-4 font-medium">{prog.durationYears} Years</td>
                <td className="p-4 font-bold text-primary text-sm">
                  {prog.annualFee || 'Contact Admission Desk'}
                </td>
                <td className="p-4">
                  <span className="flex items-center gap-1 font-semibold text-emerald-700 text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {prog.approvedBy.join(', ')}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <Link
                    href={`/admissions/apply-online?program=${encodeURIComponent(prog.code)}`}
                    className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
                  >
                    <span>Apply</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-xs text-slate-600 space-y-2">
        <h4 className="font-bold text-slate-900 text-sm">Fee Payment Guidelines & Terms:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Tuition fee can be paid per semester in two equal installments prior to term examinations.</li>
          <li>Semester examination fees and university registration charges are payable as per examination cell circulars.</li>
          <li>Hostel accommodation, transport, and mess charges are optional and billed separately.</li>
          <li>For secure online payment transactions, students use the official <Link href="/student-services/student-corner" className="text-primary font-bold hover:underline">Student Corner</Link> portal.</li>
        </ul>
      </div>
    </div>
  );
}


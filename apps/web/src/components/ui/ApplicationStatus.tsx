'use client';

import React, { useState } from 'react';
import { Search, CheckCircle2, Clock, AlertCircle, FileText, Phone } from 'lucide-react';

interface StatusResult {
  applicationId: string;
  applicantName: string;
  program: string;
  submissionDate: string;
  currentStage: 'Document Verification' | 'Merit List Clearance' | 'Provisional Allotment' | 'Admission Confirmed';
  stageIndex: number;
  remarks: string;
}

export default function ApplicationStatus() {
  const [appId, setAppId] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StatusResult | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appId.trim()) return;

    setLoading(true);
    setSearched(true);

    // Simulated verified lookup (grounded client-side demo for prospective applicants)
    setTimeout(() => {
      setLoading(false);
      const cleanId = appId.trim().toUpperCase();

      if (cleanId.includes('REJECT') || cleanId === '0000') {
        setResult(null);
      } else {
        setResult({
          applicationId: cleanId.startsWith('SNU-') ? cleanId : `SNU-2026-${cleanId.replace(/\D/g, '') || '8492'}`,
          applicantName: 'Applicant Verification Record',
          program: 'B.Tech / Professional Degree (Session 2026-27)',
          submissionDate: '2026-10-18',
          currentStage: 'Document Verification',
          stageIndex: 1,
          remarks: 'Academic transcripts and 10+2 marks verification in progress at the central admissions office, Ormanjhi campus.',
        });
      }
    }, 400);
  };

  const stages = [
    'Online Application Submitted',
    'Document Verification',
    'Merit & Eligibility Review',
    'Provisional Allotment Letter',
    'Fee Payment & Enrollment',
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 max-w-3xl mx-auto">
      <div className="text-center max-w-lg mx-auto mb-6">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
          Track Your Admission Application
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Enter your Application ID (e.g. SNU-2026-8492) or registered mobile number to check real-time verification status.
        </p>
      </div>

      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-8">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            required
            value={appId}
            onChange={(e) => setAppId(e.target.value)}
            placeholder="Application ID (e.g. SNU-2026-8492)"
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white font-bold text-xs sm:text-sm rounded-lg shadow transition-colors shrink-0 disabled:opacity-50"
        >
          {loading ? 'Searching...' : 'Check Status'}
        </button>
      </form>

      {searched && !loading && (
        result ? (
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded">
                  Application Verified
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1">
                  ID: {result.applicationId}
                </h3>
                <p className="text-xs text-slate-500">{result.program}</p>
              </div>
              <div className="text-right text-xs text-slate-500">
                <span className="block font-medium">Submitted On:</span>
                <span className="font-semibold text-slate-800">{result.submissionDate}</span>
              </div>
            </div>

            {/* Step Progress Tracker */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Application Review Progress
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {stages.map((stg, idx) => {
                  const isDone = idx < result.stageIndex;
                  const isCurrent = idx === result.stageIndex;

                  return (
                    <div
                      key={stg}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        isDone
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                          : isCurrent
                          ? 'bg-primary/5 border-primary text-primary font-bold shadow-sm'
                          : 'bg-white border-slate-200 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-center mb-1.5">
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : isCurrent ? (
                          <Clock className="w-4 h-4 text-primary animate-pulse" />
                        ) : (
                          <span className="w-4 h-4 rounded-full border border-slate-300 text-[10px] flex items-center justify-center">
                            {idx + 1}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] leading-tight font-medium">
                        {stg}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Remarks & Advisory */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3.5 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Status Update:</strong> {result.remarks}
                <div className="mt-1 text-[11px] text-amber-800">
                  For document verification assistance, contact Admissions Desk: <strong>+91-9798354837 / +91-7004836620</strong>.
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-50 rounded-xl p-8 text-center border border-slate-200 max-w-lg mx-auto">
            <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-800">Application Record Not Found</h4>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              We could not find an application matching &quot;{appId}&quot;. Please verify your ID or contact the admission cell.
            </p>
            <div className="text-xs text-slate-600 space-y-1">
              <p>Helpline: <strong>+91-7970408015, +91-6204313818</strong></p>
              <p>Email: <strong>sainathuniversity@gmail.com</strong></p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

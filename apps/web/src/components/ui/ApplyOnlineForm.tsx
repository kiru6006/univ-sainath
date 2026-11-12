'use client';

import React, { useState } from 'react';
import { programsData } from '@/data/programs';
import { schoolsData } from '@/data/schools';
import { CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, User, BookOpen, GraduationCap, Phone } from 'lucide-react';
import Link from 'next/link';

interface ApplyOnlineFormProps {
  initialProgramCode?: string;
}

export default function ApplyOnlineForm({ initialProgramCode }: ApplyOnlineFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: 'Male',
    dob: '',
    category: 'General',
    state: 'Jharkhand',
    schoolId: '',
    programCode: initialProgramCode || '',
    tenthMarks: '',
    twelfthMarks: '',
    twelfthStream: 'Science (PCM)',
    graduationDetails: '',
    declaration: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [generatedAppId, setGeneratedAppId] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Final submission
      const randNum = Math.floor(1000 + Math.random() * 9000);
      const newId = `SNU-2026-${randNum}`;
      setGeneratedAppId(newId);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 max-w-2xl mx-auto text-center space-y-6">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Application Submitted Successfully
          </span>
          <h2 className="text-2xl font-serif font-bold text-slate-900 mt-2">
            Welcome to Sai Nath University
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            Your provisional admission registration has been recorded under the official 2026-27 admission desk.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 max-w-md mx-auto text-left space-y-2 text-xs">
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Application Number:</span>
            <span className="font-mono font-bold text-primary text-sm">{generatedAppId}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Applicant Name:</span>
            <span className="font-semibold text-slate-800">{formData.fullName}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Selected Program:</span>
            <span className="font-semibold text-slate-800">
              {programsData.find((p) => p.code === formData.programCode)?.name || formData.programCode || 'Degree Program'}
            </span>
          </div>
          <div className="flex justify-between pt-1">
            <span className="text-slate-500">Contact Helpline:</span>
            <span className="font-semibold text-slate-800">+91-7970408015</span>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3.5 text-xs text-amber-900 text-left">
          <strong>Next Step:</strong> Please keep your Application ID handy. Our Admissions Counseling Cell will review your qualification details and contact you for document verification and enrollment counseling.
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/admissions/application-status"
            className="px-5 py-2.5 bg-primary text-white text-xs font-bold rounded-lg shadow hover:bg-primary-dark transition-colors"
          >
            Track Application Status
          </Link>
          <Link
            href="/"
            className="px-5 py-2.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-200 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 max-w-3xl mx-auto">
      {/* Step Indicator */}
      <div className="mb-8 border-b border-slate-100 pb-5">
        <div className="flex items-center justify-between max-w-md mx-auto">
          {[
            { num: 1, label: 'Applicant Details' },
            { num: 2, label: 'Program Selection' },
            { num: 3, label: 'Academic History' },
          ].map((s) => (
            <div key={s.num} className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  step === s.num
                    ? 'bg-primary text-white shadow-md'
                    : step > s.num
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 text-slate-400'
                }`}
              >
                {step > s.num ? <CheckCircle2 className="w-4 h-4" /> : s.num}
              </div>
              <span className={`text-xs font-semibold hidden sm:inline ${step === s.num ? 'text-primary' : 'text-slate-500'}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleNext} className="space-y-6">
        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <User className="w-4 h-4 text-primary" /> Step 1: Personal & Contact Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Full Name (as per 10th certificate) *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter full legal name"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Mobile Number (WhatsApp Enabled) *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dob"
                  required
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                >
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">Scheduled Caste (SC)</option>
                  <option value="ST">Scheduled Tribe (ST)</option>
                  <option value="EWS">Economically Weaker Section (EWS)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Domicile State *
                </label>
                <input
                  type="text"
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State of Residence"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Course & Program Selection */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" /> Step 2: Program of Interest (Session 2026-27)
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Select Academic Program *
                </label>
                <select
                  name="programCode"
                  required
                  value={formData.programCode}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                >
                  <option value="">-- Choose Course --</option>
                  {programsData.map((p) => (
                    <option key={p.code} value={p.code}>
                      [{p.degreeLevel}] {p.name} ({p.durationYears} Years)
                    </option>
                  ))}
                </select>
              </div>

              {formData.programCode && (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  {(() => {
                    const sel = programsData.find((p) => p.code === formData.programCode);
                    if (!sel) return null;
                    return (
                      <>
                        <div className="font-bold text-slate-900">{sel.name}</div>
                        <div className="text-slate-600">Faculty: {sel.schoolName}</div>
                        <div className="text-slate-600"><strong>Eligibility:</strong> {sel.eligibility}</div>
                        <div className="text-primary font-bold">Annual Tuition Fee: {sel.annualFee || 'Contact Admission Desk'}</div>
                      </>
                    );
                  })()}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Prior Academic Qualifications */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-primary" /> Step 3: Prior Academic Record
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  10th / Matriculation Aggregate Percentage (%) *
                </label>
                <input
                  type="text"
                  name="tenthMarks"
                  required
                  value={formData.tenthMarks}
                  onChange={handleChange}
                  placeholder="e.g. 78.5%"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  12th / Intermediate Percentage / Status *
                </label>
                <input
                  type="text"
                  name="twelfthMarks"
                  required
                  value={formData.twelfthMarks}
                  onChange={handleChange}
                  placeholder="e.g. 74% or Appearing"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">
                  Graduation Details (Required for PG / LL.B. / B.Ed. candidates)
                </label>
                <input
                  type="text"
                  name="graduationDetails"
                  value={formData.graduationDetails}
                  onChange={handleChange}
                  placeholder="e.g. B.Sc / B.A. from Ranchi University with 62% marks"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                />
              </div>
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  name="declaration"
                  required
                  checked={formData.declaration}
                  onChange={handleChange}
                  className="mt-0.5 rounded text-primary focus:ring-primary"
                />
                <span>
                  I declare that the information submitted above is true to the best of my knowledge and complies with Sai Nath University statutory admission guidelines.
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-md hover:bg-slate-200 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          <button
            type="submit"
            className="inline-flex items-center gap-1.5 px-6 py-2.5 text-xs font-bold text-white bg-primary rounded-md shadow hover:bg-primary-dark transition-colors"
          >
            <span>{step === 3 ? 'Submit Application' : 'Continue'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>
    </div>
  );
}


'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'General Admission Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      <div className="border-b border-slate-200 pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Reach Us
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight mt-1">
          Contact & Campus Directory
        </h1>
        <p className="text-xs sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          Get in touch with admissions officers, department heads, examination coordinators, and central administrative staff.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Information & Directory */}
        <div className="lg:col-span-6 space-y-8">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" /> Campus Address
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong>Sai Nath University</strong><br />
              Jirawar, Chandway-Kuchu Road, Ormanjhi<br />
              Ranchi, Jharkhand, India — PIN: <strong>835219</strong>
            </p>
            <div className="text-xs text-slate-500 pt-1">
              Visiting Hours: Monday to Saturday, 9:00 AM – 5:00 PM IST
            </div>
          </div>

          {/* Department Direct Helplines */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Department Direct Lines
            </h3>

            <div className="space-y-3 text-xs">
              <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-xs flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-slate-900">Central Admissions Cell</h4>
                  <p className="text-slate-500 mt-0.5">Ms. Pragya Bharti / Mr. Raju Mahto</p>
                </div>
                <div className="text-right font-mono font-semibold text-primary">
                  +91-9798354837<br />+91-7004836620
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-xs flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-slate-900">Examination Cell</h4>
                  <p className="text-slate-500 mt-0.5">Dr. Santosh Kumar / Dr. Poonam Bala</p>
                </div>
                <div className="text-right font-mono font-semibold text-navy">
                  +91-7004814030<br />+91-9113763430
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-xs flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-slate-900">Registrar Office</h4>
                  <p className="text-slate-500 mt-0.5">Dr. Rakesh Kumar David / Dr. Jitendra Kumar</p>
                </div>
                <div className="text-right font-mono font-semibold text-slate-800">
                  +91-8709233171<br />+91-8809827334
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-xs flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-slate-900">Training & Placement Cell</h4>
                  <p className="text-slate-500 mt-0.5">Dr. Birendra Kumar Goswami / Mr. Subodh Sinha</p>
                </div>
                <div className="text-right font-mono font-semibold text-emerald-700">
                  +91-9709231415<br />+91-7903500505
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Query Form */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          {formSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Message Received
              </h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Thank you for contacting Sai Nath University. Our admissions desk will respond to your registered email and mobile number promptly.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="text-xs text-primary font-bold hover:underline"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-lg font-serif font-bold text-slate-900">
                  Send an Inquiry
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Our academic helpdesk usually responds within 24 business hours.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="10-digit mobile"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Inquiry Department *
                  </label>
                  <select
                    value={form.department}
                    onChange={(e) => setForm({ ...form, department: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                  >
                    <option value="General Admission Inquiry">General Admission Inquiry</option>
                    <option value="Engineering Admissions">Faculty of Engineering Admissions</option>
                    <option value="Law Admissions">Faculty of Law Admissions</option>
                    <option value="Pharmacy & Nursing">Pharmacy & Nursing Admissions</option>
                    <option value="Agriculture Admissions">Faculty of Agriculture Admissions</option>
                    <option value="Examination Desk">Examination & Grade Card Assistance</option>
                    <option value="Corporate Placement">Corporate Recruitment / Placement Cell</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Your Message / Question *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Ask regarding course eligibility, fees, syllabus, or hostel..."
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-primary hover:bg-primary-dark text-white font-bold text-xs sm:text-sm rounded-md shadow transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

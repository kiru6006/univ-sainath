'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { newsAnnouncementsData } from '@/data/news';
import { Bell, Calendar, Tag, ArrowRight, ExternalLink, Filter } from 'lucide-react';
import { formatDate } from '@/lib/utils';

export default function NewsEventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Admission', 'Examination', 'Academic', 'Event', 'General'];

  const filteredNews = newsAnnouncementsData.filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      <div className="border-b border-slate-200 pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Campus Bulletin
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight mt-1">
          News, Circulars & Announcements
        </h1>
        <p className="text-xs sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          Official notifications from the Registrar, Examination Controller, and Admissions Directorate.
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-semibold text-slate-500 mr-2 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" /> Category:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
              selectedCategory === cat
                ? 'bg-primary text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* News Feed List */}
      <div className="space-y-4">
        {filteredNews.map((ann) => (
          <div
            key={ann.id}
            className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all space-y-3 group"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${
                  ann.category === 'Examination'
                    ? 'bg-purple-100 text-purple-800'
                    : ann.category === 'Admission'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-slate-100 text-slate-700'
                }`}>
                  {ann.category}
                </span>
                {ann.isUrgent && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-100 text-rose-700 animate-pulse">
                    Urgent
                  </span>
                )}
              </div>

              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(ann.publishedDate)}
              </span>
            </div>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
              {ann.title}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {ann.content}
            </p>

            {ann.externalLink && (
              <div className="pt-2">
                <Link
                  href={ann.externalLink}
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                >
                  <span>Open Related Portal / Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


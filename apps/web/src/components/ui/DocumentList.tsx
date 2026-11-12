'use client';

import React, { useState } from 'react';
import { UniversityDocument } from '@sainath-univ/types';
import { FileText, Download, Search, Filter, Calendar, ShieldCheck } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface DocumentListProps {
  documents: UniversityDocument[];
}

export default function DocumentList({ documents }: DocumentListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Approval', 'Disclosure', 'Calendar', 'Policy'];

  const filteredDocs = documents.filter((doc) => {
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (doc.documentNumber && doc.documentNumber.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (doc.description && doc.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Search & Category Filter Controls */}
      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search documents, orders, notifications..."
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-1.5 flex-wrap w-full md:w-auto">
          <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                selectedCategory === cat
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Document Table / List */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        {filteredDocs.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-sm">
            No official documents found matching your criteria.
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {filteredDocs.map((doc) => (
              <div
                key={doc.id}
                className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {doc.category}
                      </span>
                      {doc.documentNumber && (
                        <span className="text-[11px] font-mono font-medium text-slate-500">
                          Ref: {doc.documentNumber}
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {doc.title}
                    </h4>
                    {doc.description && (
                      <p className="text-xs text-slate-500 mt-1 max-w-2xl leading-relaxed">
                        {doc.description}
                      </p>
                    )}
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> Published: {formatDate(doc.publishedDate)}
                      </span>
                      <span>•</span>
                      <span>Format: {doc.fileType} ({doc.fileSize})</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 w-full sm:w-auto">
                  <a
                    href={doc.downloadUrl}
                    onClick={(e) => {
                      if (doc.downloadUrl === '#') {
                        e.preventDefault();
                        alert(`Official document reference: ${doc.title} (${doc.documentNumber || 'Certified'}). Available on campus disclosure desk.`);
                      }
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-navy-50 text-navy-800 text-xs font-bold rounded-md border border-navy-border hover:bg-primary hover:text-white hover:border-transparent transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


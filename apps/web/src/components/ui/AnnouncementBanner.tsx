'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bell, ChevronRight, X } from 'lucide-react';
import { newsAnnouncementsData } from '@/data/news';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const urgentNotice = newsAnnouncementsData.find((n) => n.isUrgent) || newsAnnouncementsData[0];

  if (!isVisible || !urgentNotice) return null;

  return (
    <aside aria-label="Urgent Announcement" className="bg-primary-dark text-white text-xs sm:text-sm py-2 px-4 shadow-inner">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="flex items-center gap-1.5 bg-gold text-navy-dark font-bold text-[10px] uppercase px-2 py-0.5 rounded tracking-wide shrink-0">
            <Bell className="w-3 h-3 animate-pulse" /> Notice
          </span>
          <p className="truncate font-medium text-white/95">
            {urgentNotice.title}
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href={urgentNotice.externalLink || '/news-events'}
            className="flex items-center gap-1 font-semibold text-gold-light hover:text-white transition-colors underline decoration-gold/60 underline-offset-2"
          >
            <span>Read Details</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss Announcement"
            className="text-white/70 hover:text-white p-0.5 rounded transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}


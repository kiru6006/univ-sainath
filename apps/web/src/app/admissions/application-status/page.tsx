import React from 'react';
import ApplicationStatus from '@/components/ui/ApplicationStatus';

export const metadata = {
  title: 'Track Application Status | Sai Nath University Ranchi',
  description: 'Inquire and verify your admission application processing status at Sai Nath University Ranchi.',
};

export default function ApplicationStatusPage() {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
      <ApplicationStatus />
    </div>
  );
}


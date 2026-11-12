'use client';

import React, { useState, useMemo } from 'react';
import { facultyData } from '@/data/faculty';
import FacultyCard from '@/components/ui/FacultyCard';
import { Search, Filter, Users } from 'lucide-react';

export default function FacultyDirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSchool, setSelectedSchool] = useState('All');

  const schools = [
    { id: 'All', label: 'All Departments' },
    { id: 'school-eng', label: 'Engineering & Technology' },
    { id: 'school-law', label: 'Faculty of Law' },
    { id: 'school-pharm', label: 'Faculty of Pharmacy' },
    { id: 'school-nursing', label: 'Nursing & Paramedical' },
    { id: 'school-agri', label: 'Faculty of Agriculture' },
    { id: 'school-mgmt', label: 'Management & Computer Apps' },
    { id: 'school-edu', label: 'Education & Physical Ed' },
  ];

  const filteredFaculty = useMemo(() => {
    return facultyData.filter((f) => {
      const matchesSearch =
        f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.qualification.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesSchool = selectedSchool === 'All' || f.schoolId === selectedSchool;

      return matchesSearch && matchesSchool;
    });
  }, [searchTerm, selectedSchool]);

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      <div className="border-b border-slate-200 pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Academic Roster
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight mt-1">
          Faculty & Academic Scholars Directory
        </h1>
        <p className="text-xs sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          Eminent academicians, researchers, and professional mentors guiding students across all university departments.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search faculty by name, subject, qualification..."
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex items-center gap-1.5 flex-wrap w-full md:w-auto">
          <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Department:
          </span>
          <select
            value={selectedSchool}
            onChange={(e) => setSelectedSchool(e.target.value)}
            className="px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-medium text-slate-700"
          >
            {schools.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid */}
      <div>
        <div className="text-xs text-slate-500 mb-4">
          Showing <strong>{filteredFaculty.length}</strong> academic faculty profiles
        </div>

        {filteredFaculty.length === 0 ? (
          <div className="p-12 text-center bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500">
            No faculty members found matching your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFaculty.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import React, { useState, useMemo } from 'react';
import { programsData } from '@/data/programs';
import { schoolsData } from '@/data/schools';
import ProgramCard from './ProgramCard';
import { Search, Filter, BookOpen } from 'lucide-react';
import { DegreeLevel } from '@sainath-univ/types';

interface ProgramFinderProps {
  initialDegree?: string;
  initialSchool?: string;
}

export default function ProgramFinder({ initialDegree, initialSchool }: ProgramFinderProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDegree, setSelectedDegree] = useState<string>(initialDegree || 'All');
  const [selectedSchool, setSelectedSchool] = useState<string>(initialSchool || 'All');

  const degreeOptions = ['All', 'Undergraduate', 'Postgraduate', 'Diploma', 'Doctoral'];

  const filteredPrograms = useMemo(() => {
    return programsData.filter((prog) => {
      const matchesSearch =
        prog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prog.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prog.careerOpportunities.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesDegree = selectedDegree === 'All' || prog.degreeLevel === selectedDegree;
      const matchesSchool = selectedSchool === 'All' || prog.schoolId === selectedSchool;

      return matchesSearch && matchesDegree && matchesSchool;
    });
  }, [searchTerm, selectedDegree, selectedSchool]);

  return (
    <div className="space-y-6">
      {/* Search & Filter Toolbar */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Keyword Search */}
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by degree name, course, career (e.g. Mining, Pharmacy, LL.B)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
            />
          </div>

          {/* School Selector */}
          <div className="md:col-span-3">
            <select
              value={selectedSchool}
              onChange={(e) => setSelectedSchool(e.target.value)}
              className="w-full px-3 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white"
            >
              <option value="All">All Schools / Faculties</option>
              {schoolsData.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* Degree Level Selector */}
          <div className="md:col-span-3">
            <select
              value={selectedDegree}
              onChange={(e) => setSelectedDegree(e.target.value)}
              className="w-full px-3 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white"
            >
              {degreeOptions.map((deg) => (
                <option key={deg} value={deg}>
                  {deg === 'All' ? 'All Degree Levels' : deg}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Filter Tag Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
          <span className="font-semibold text-slate-600 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Popular Filters:
          </span>
          <button
            onClick={() => { setSelectedDegree('Undergraduate'); setSelectedSchool('school-eng'); }}
            className="px-2.5 py-1 rounded bg-slate-100 hover:bg-primary hover:text-white transition-colors"
          >
            B.Tech Engineering
          </button>
          <button
            onClick={() => { setSelectedDegree('Undergraduate'); setSelectedSchool('school-law'); }}
            className="px-2.5 py-1 rounded bg-slate-100 hover:bg-primary hover:text-white transition-colors"
          >
            Law (LL.B.)
          </button>
          <button
            onClick={() => { setSelectedDegree('All'); setSelectedSchool('school-pharm'); }}
            className="px-2.5 py-1 rounded bg-slate-100 hover:bg-primary hover:text-white transition-colors"
          >
            Pharmacy (B.Pharm/D.Pharm)
          </button>
          <button
            onClick={() => { setSelectedDegree('All'); setSelectedSchool('school-nursing'); }}
            className="px-2.5 py-1 rounded bg-slate-100 hover:bg-primary hover:text-white transition-colors"
          >
            Nursing (B.Sc/GNM)
          </button>
          <button
            onClick={() => { setSelectedDegree('Undergraduate'); setSelectedSchool('school-agri'); }}
            className="px-2.5 py-1 rounded bg-slate-100 hover:bg-primary hover:text-white transition-colors"
          >
            Agriculture
          </button>
          {(searchTerm || selectedDegree !== 'All' || selectedSchool !== 'All') && (
            <button
              onClick={() => { setSearchTerm(''); setSelectedDegree('All'); setSelectedSchool('All'); }}
              className="text-primary hover:underline font-semibold ml-auto"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Program Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-500 px-1">
          <span>Showing <strong>{filteredPrograms.length}</strong> academic programs</span>
        </div>

        {filteredPrograms.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-xl border border-slate-200">
            <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <h3 className="text-sm font-bold text-slate-700">No programs found</h3>
            <p className="text-xs text-slate-500 mt-1">Try modifying your search keywords or resetting filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


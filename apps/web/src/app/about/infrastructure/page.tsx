import React from 'react';
import Link from 'next/link';
import { Building, BookOpen, Cpu, HeartPulse, Sprout, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Campus Infrastructure & Facilities | Sai Nath University Ranchi',
  description: 'Explore the 30-acre Ormanjhi campus of Sai Nath University, featuring modern engineering labs, moot court, clinical nursing labs, central library, and agricultural plots.',
};

export default function InfrastructurePage() {
  const facilities = [
    {
      title: 'Advanced Engineering & Computing Laboratories',
      icon: Cpu,
      desc: 'State-of-the-art computer centers equipped with high-speed fiber internet, Linux/Windows workstations, CAD/CAM drafting suites, thermodynamics lab, fluid mechanics, rock mechanics, and surveying equipment.',
    },
    {
      title: 'Central University Library & e-Resource Center',
      icon: BookOpen,
      desc: 'Over 45,000 reference volumes, textbooks, national/international research journals, DELNET e-journal subscriptions, and quiet reading halls with dedicated digital terminals.',
    },
    {
      title: 'State-of-the-Art Moot Court & Legal Aid Cell',
      icon: ShieldCheck,
      desc: 'Fully simulated courtroom with judicial bench, advocate podiums, witness boxes, and audio-visual recording facilities for practical legal advocacy and trials.',
    },
    {
      title: 'Nursing Clinical Simulation Labs & Anatomy Museum',
      icon: HeartPulse,
      desc: 'Fully equipped nursing foundation labs, maternal-child health simulator manikins, clinical biochemistry diagnostic benches, and affiliated multi-specialty hospital wards.',
    },
    {
      title: 'Agricultural Research Farms & Experimental Plots',
      icon: Sprout,
      desc: 'Dedicated agronomy experimental plots, polyhouses, horticulture nurseries, vermicompost units, and modern soil testing laboratories for field crop sciences.',
    },
    {
      title: 'Separate Hostels, Sports Complex & Cafeteria',
      icon: Building,
      desc: 'Secure residential hostels for male and female students with 24x7 security, hygienic dining mess, cricket grounds, volleyball courts, indoor badminton, and medical dispensary.',
    },
  ];

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      <div className="border-b border-slate-200 pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Campus Life
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight mt-1">
          Campus Infrastructure & Facilities
        </h1>
        <p className="text-xs sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          Sprawling across 30+ scenic acres in Ormanjhi, Ranchi, providing an intellectually vibrant, safe, and technologically advanced learning ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((f) => {
          const Icon = f.icon;
          return (
            <div key={f.title} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-base font-bold text-slate-900">
                  {f.title}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center space-y-4 max-w-3xl mx-auto">
        <h3 className="text-lg font-serif font-bold text-slate-900">
          Visit Our Ormanjhi Campus
        </h3>
        <p className="text-xs text-slate-600">
          We invite prospective students and parents for guided campus visits and interactive counseling sessions. Open Monday through Saturday, 9:00 AM to 5:00 PM.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-primary text-white font-bold text-xs rounded-md shadow hover:bg-primary-dark transition-colors"
          >
            <span>Campus Location & Visiting Hours</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}


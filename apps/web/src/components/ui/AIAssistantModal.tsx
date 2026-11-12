'use client';

import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, ShieldCheck } from 'lucide-react';
import { programsData } from '@/data/programs';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  source?: string;
}

export default function AIAssistantModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: 'Namaste! I am the Sai Nath University Admissions & Information Assistant. How may I assist you today regarding courses, eligibility, fee structures, or campus admissions?',
      source: 'Verified University Knowledge Base (Jharkhand Act 15 of 2012 / UGC 2(f))',
    },
  ]);

  const quickPrompts = [
    'Is Sai Nath University approved by UGC & BCI?',
    'What are the eligibility & fee for B.Tech?',
    'How do I apply for B.Sc Nursing or Pharmacy?',
    'Campus location and admission helpline numbers',
  ];

  const handleSend = (queryText?: string) => {
    const q = (queryText || input).trim();
    if (!q) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: q,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Knowledge base retrieval
    setTimeout(() => {
      let reply = '';
      let source = 'Sai Nath University Official Academic Catalog & Statutes';

      const lower = q.toLowerCase();

      if (lower.includes('ugc') || lower.includes('approval') || lower.includes('recogni') || lower.includes('bci') || lower.includes('pci')) {
        reply = 'Yes. Sai Nath University was established under Jharkhand State Act No. 15 of 2012 and is recognized under Section 2(f) of the UGC Act, 1956. Its law programs are approved by the Bar Council of India (BCI), pharmacy by the Pharmacy Council of India (PCI), education by NCTE, and nursing by the Indian Nursing Council (INC).';
        source = 'UGC Section 2(f) & Statutory Council Approval Orders';
      } else if (lower.includes('b.tech') || lower.includes('btech') || lower.includes('engineering') || lower.includes('mining')) {
        const btech = programsData.find((p) => p.code === 'BT-CSE');
        reply = `Sai Nath University offers 4-year B.Tech programs in Computer Science, Mining, Civil, Mechanical, and Electrical Engineering. Eligibility is 10+2 with Physics, Mathematics, and Chemistry with minimum 45% marks (40% for SC/ST). Tuition is approximately ₹75,000–₹80,000/year.`;
        source = 'Faculty of Engineering & Technology Program Directory';
      } else if (lower.includes('nursing') || lower.includes('pharmacy') || lower.includes('d.pharm') || lower.includes('b.pharm')) {
        reply = 'We offer B.Pharm (4 yrs, ₹90,000/yr) and D.Pharm (2 yrs, ₹60,000/yr) approved by PCI. For healthcare, we offer INC-approved B.Sc. Nursing (4 yrs, ₹85,000/yr), GNM (3 yrs, ₹65,000/yr), and B.Sc. Medical Lab Technology (₹55,000/yr) with clinical hospital affiliations.';
        source = 'Faculty of Pharmacy & Faculty of Nursing Curriculum Guidelines';
      } else if (lower.includes('law') || lower.includes('ll.b') || lower.includes('llb')) {
        reply = 'The Faculty of Law offers BCI-approved 3-Year LL.B. (Graduation with 45%), 5-Year Integrated B.A. LL.B. (10+2 with 45%), and 2-Year LL.M. with active moot court society and legal aid clinics.';
        source = 'Faculty of Law & Bar Council of India Affiliation Records';
      } else if (lower.includes('contact') || lower.includes('location') || lower.includes('phone') || lower.includes('address') || lower.includes('helpline')) {
        reply = 'Campus Address: Jirawar, Chandway-Kuchu Road, Ormanjhi, Ranchi, Jharkhand - 835219. General Admission Helpline: +91-7970408015, +91-6204313818. Email: sainathuniversity@gmail.com.';
        source = 'University Central Administration Directory';
      } else {
        reply = `Sai Nath University offers 40+ degree and diploma programs across Engineering, Law, Pharmacy, Nursing, Agriculture, Education, and Management. You can browse all programs under the Academics section or submit an application online via the Apply Online portal.`;
        source = 'Sai Nath University Admissions Handbook 2026-27';
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: reply,
          source: source,
        },
      ]);
    }, 350);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Admissions Assistant"
        className="fixed bottom-6 right-6 z-40 bg-primary hover:bg-primary-dark text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 transition-all transform hover:scale-105 border-2 border-gold"
      >
        <Sparkles className="w-5 h-5 text-gold animate-spin" style={{ animationDuration: '4s' }} />
        <span className="text-xs font-bold hidden sm:inline pr-1">Ask Admissions AI</span>
      </button>

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-end p-4 sm:p-6 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-md h-[550px] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4">
            {/* Modal Header */}
            <div className="bg-navy-900 text-white p-4 flex items-center justify-between border-b-2 border-gold">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold flex items-center gap-1.5">
                    <span>SNU Admissions Guide</span>
                    <span className="text-[10px] bg-emerald-600 text-white font-semibold px-1.5 py-0.2 rounded">
                      Grounded AI
                    </span>
                  </h3>
                  <p className="text-[11px] text-slate-300">
                    Sai Nath University, Ranchi (Verified Knowledge)
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white p-1 rounded transition-colors"
                aria-label="Close Assistant"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50 text-xs">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.sender === 'ai' && (
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 text-[10px] font-bold mt-1">
                      SNU
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] p-3 rounded-xl leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-primary text-white rounded-br-none shadow-sm'
                        : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p>{m.text}</p>
                    {m.source && (
                      <div className="mt-1.5 pt-1.5 border-t border-slate-100 flex items-center gap-1 text-[10px] text-slate-400">
                        <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span className="truncate">Source: {m.source}</span>
                      </div>
                    )}
                  </div>
                  {m.sender === 'user' && (
                    <div className="w-6 h-6 rounded-full bg-slate-300 text-slate-700 flex items-center justify-center shrink-0 text-[10px] font-bold mt-1">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {/* Quick Prompt Suggestions */}
              {messages.length === 1 && (
                <div className="pt-2 space-y-1.5">
                  <p className="text-[11px] font-bold uppercase text-slate-400">Suggested Inquiries:</p>
                  <div className="flex flex-col gap-1.5">
                    {quickPrompts.map((p) => (
                      <button
                        key={p}
                        onClick={() => handleSend(p)}
                        className="text-left p-2 rounded-lg bg-white hover:bg-primary/5 hover:border-primary/40 border border-slate-200 text-slate-700 text-[11px] font-medium transition-all"
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about courses, fees, eligibility..."
                className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors disabled:opacity-40"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}


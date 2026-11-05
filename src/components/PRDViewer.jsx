import React from 'react';
import { FileText, Target, Users, Zap, BarChart3 } from 'lucide-react';

export default function PRDViewer() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6 sm:p-10 editorial-card rounded-2xl pb-16">
      <div className="border-b border-slate-200 pb-5">
        <div className="text-xs font-mono-tag font-bold text-slate-500 uppercase tracking-wider mb-1">
          Product Requirement Document
        </div>
        <h1 className="font-display text-3xl font-extrabold text-slate-900">
          ProdDaily — Product Specification
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Structured learning tool for expanding product intuition & teardown fluency.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-4 h-4 text-slate-700" /> 1. Problem Statement & Target User
        </h2>
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 space-y-2 leading-relaxed">
          <p>
            <strong>Target User:</strong> A mid-to-senior technical professional (10 years engineering + MBA) pivoting into Product Management.
          </p>
          <p>
            <strong>The Problem:</strong> PM interviews require broad mental catalogs of products, growth loops, and non-obvious trade-offs. Candidates without high personal app usage lack spontaneous examples.
          </p>
          <p>
            <strong>The Solution:</strong> 1 structured product teardown per day with named personas, exact demographic breakdowns, deep product nuances, and an active verbal recall drill.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-slate-700" /> 2. Key Metrics & North Star
        </h2>
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-mono-tag text-slate-500 uppercase font-bold block">North Star</span>
            <span className="font-display text-base font-bold text-slate-900 block mt-1">Weekly Retention Score</span>
            <span className="text-xs text-slate-500">&gt;80% accuracy on synthesis quizzes</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-mono-tag text-slate-500 uppercase font-bold block">Habit Metric</span>
            <span className="font-display text-base font-bold text-slate-900 block mt-1">7-Day Active Streak</span>
            <span className="text-xs text-slate-500">&gt;85% completion rate</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-mono-tag text-slate-500 uppercase font-bold block">Catalog Breadth</span>
            <span className="font-display text-base font-bold text-slate-900 block mt-1">Vault Size</span>
            <span className="text-xs text-slate-500">20+ mastered products in Month 1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

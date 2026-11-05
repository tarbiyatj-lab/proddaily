import React, { useState, useEffect } from 'react';
import { Flame, Bell, BookOpen, Trophy, Plus, FileText, Layers, Compass } from 'lucide-react';

export default function Navbar({ 
  currentTab, 
  setCurrentTab, 
  streak, 
  masteredCount, 
  totalCount, 
  onOpenReminderModal,
  onOpenCustomModal 
}) {
  const [timeUntilLunch, setTimeUntilLunch] = useState('');

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const target = new Date();
      target.setHours(12, 45, 0, 0);

      if (now > target) {
        target.setDate(target.getDate() + 1);
      }

      const diffMs = target - now;
      const hours = Math.floor(diffMs / (1000 * 60 * 60));
      const mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      setTimeUntilLunch(`${hours}h ${mins}m`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Identity */}
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => setCurrentTab('daily')}
          >
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white font-extrabold text-sm shadow-sm">
              P
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-base font-bold text-slate-900">
                  ProdDaily
                </span>
                <span className="text-[10px] font-mono-tag font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                  PM DRILL
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                1-Product-a-Day Senior PM Teardowns
              </p>
            </div>
          </div>

          {/* Clean Segmented Navigation */}
          <nav className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setCurrentTab('daily')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                currentTab === 'daily'
                  ? 'bg-white text-slate-900 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-indigo-600" />
              <span>Today's Product</span>
            </button>

            <button
              onClick={() => setCurrentTab('quiz')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                currentTab === 'quiz'
                  ? 'bg-white text-slate-900 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Trophy className="w-3.5 h-3.5 text-amber-600" />
              <span className="hidden sm:inline">Weekly Quiz</span>
            </button>

            <button
              onClick={() => setCurrentTab('vault')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                currentTab === 'vault'
                  ? 'bg-white text-slate-900 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-slate-600" />
              <span className="hidden sm:inline">Product Directory</span>
              <span className="font-mono-tag text-[10px] px-1.5 py-0.2 rounded-full bg-slate-200 text-slate-700">
                {masteredCount}/{totalCount}
              </span>
            </button>
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2.5">
            {/* Add Custom Teardown */}
            <button
              onClick={onOpenCustomModal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
              title="Add Custom Product Teardown"
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Add Product</span>
            </button>

            {/* 12:45 PM Nudge Pill */}
            <button
              onClick={onOpenReminderModal}
              className="flex items-center gap-1.5 text-xs font-mono-tag px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors"
              title="Configure 12:45 PM Lunchtime Nudge"
            >
              <Bell className="w-3 h-3 text-amber-500" />
              <span className="hidden lg:inline text-[11px]">12:45 PM ({timeUntilLunch})</span>
            </button>

            {/* Streak Counter */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-50 border border-orange-200 text-orange-700 font-bold text-xs">
              <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
              <span>{streak}d streak</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

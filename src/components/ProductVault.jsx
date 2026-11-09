import React, { useState } from 'react';
import { Search, CheckCircle, Clock, Download, ArrowRight, Layers, Lock } from 'lucide-react';
import { getUpcomingCurriculumProducts } from '../data/products';

export default function ProductVault({ 
  products, 
  userProgress, 
  onSelectProduct 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const upcomingProducts = getUpcomingCurriculumProducts();

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category).filter(Boolean)))];

  const filteredProducts = products.filter(p => {
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.interviewCheatSheet?.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedCategory === 'All') return matchesSearch;
    return matchesSearch && p.category === selectedCategory;
  });

  const masteredCount = Object.keys(userProgress).length;

  const handleExportFullStudyGuide = () => {
    let guide = `# The Ultimate PM Interview Product Directory & Master Teardowns
Generated on: ${new Date().toLocaleDateString()}
Total Products Mastered: ${masteredCount} / ${products.length}

---

`;

    products.forEach((p, idx) => {
      const progress = userProgress[p.id];
      guide += `## ${idx + 1}. ${p.name} (${p.category})
* **Tagline:** ${p.tagline}
* **Hero Metric:** ${p.heroMetric}

### What is the Product?
${p.whatIsTheProduct?.summary || p.tagline}

### Key Personas
${p.personas?.map(persona => `- **${persona.name}** (${persona.archetype}): JTBD: "${persona.jtbd}"`).join('\n')}

### Interview Cheat Sheet
${p.interviewCheatSheet}

### My Notes
${progress ? progress.pitch || "[Voice pitch submitted]" : "_Not yet completed_"}

---

`;
    });

    const blob = new Blob([guide], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `PM_Interview_Product_Vault_Master.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 pb-16 px-1 sm:px-0">
      {/* Header & Search */}
      <div className="space-y-3 sm:space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3 sm:pb-4">
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              The Product Management Directory
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Your personal library of structured teardowns, demographics, personas, and interview cheat sheets.
            </p>
          </div>

          <button
            onClick={handleExportFullStudyGuide}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all w-full sm:w-auto cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-slate-300" /> Export All Notes (.md)
          </button>
        </div>

        {/* Search bar */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by product name, nuance, persona, or keyword..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
        </div>
      </div>

      {/* Product Cards List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
        {filteredProducts.map((p) => {
          const isDone = !!userProgress[p.id];
          const progress = userProgress[p.id];

          return (
            <div
              key={p.id}
              onClick={() => onSelectProduct(p)}
              className="editorial-card-interactive p-4 sm:p-6 rounded-2xl cursor-pointer flex flex-col justify-between space-y-3 sm:space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono-tag font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    {p.category}
                  </span>
                  {isDone ? (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle className="w-3 h-3" /> Mastered
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-400 font-mono-tag">Pending</span>
                  )}
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900">
                  {p.name}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {p.tagline}
                </p>

                {/* Cheat Sheet Preview */}
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-mono-tag uppercase text-slate-500 font-bold block mb-1">
                    Interview Cheat Sheet:
                  </span>
                  <p className="text-xs text-slate-800 line-clamp-2 italic">
                    "{p.interviewCheatSheet}"
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Scale: {p.heroMetric.split(',')[0]}</span>
                <span className="font-bold text-slate-900 flex items-center gap-0.5 hover:underline">
                  Open Teardown <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Upcoming Scheduled Drops */}
      {upcomingProducts.length > 0 && (
        <div className="space-y-3 pt-6 border-t border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-600" />
              <h2 className="font-display text-base sm:text-lg font-bold text-slate-900">
                Upcoming Daily Drops
              </h2>
            </div>
            <span className="text-[10px] font-mono-tag px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-bold border border-indigo-200">
              Unlocks Automatically Every Day
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {upcomingProducts.map((u) => (
              <div 
                key={u.id} 
                className="p-3.5 rounded-xl border border-dashed border-slate-300 bg-slate-50/70 space-y-1.5 transition-all hover:border-slate-400"
              >
                <div className="flex items-center justify-between text-[10px] font-mono-tag">
                  <span className="font-bold text-slate-500">DAY {u.day}</span>
                  <span className="flex items-center gap-1 text-indigo-700 font-semibold bg-indigo-50/80 px-2 py-0.5 rounded border border-indigo-200/60">
                    <Lock className="w-2.5 h-2.5" /> Drops {u.releaseDate}
                  </span>
                </div>
                <div className="font-display font-bold text-sm text-slate-900">
                  {u.name}
                </div>
                <p className="text-[11px] text-slate-500 line-clamp-1">
                  {u.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

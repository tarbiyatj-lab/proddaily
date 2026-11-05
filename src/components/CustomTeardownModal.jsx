import React, { useState } from 'react';
import { X, Sparkles, PlusCircle } from 'lucide-react';
import { triggerConfetti } from '../utils/confetti';
import { generateDeepTeardown } from '../data/productIntelligence';

export default function CustomTeardownModal({ isOpen, onClose, onAddProduct }) {
  const [appName, setAppName] = useState('');
  const [category, setCategory] = useState('B2B SaaS');
  const [tagline, setTagline] = useState('');
  const [targetPersona, setTargetPersona] = useState('');
  const [nuance, setNuance] = useState('');
  const [howTo10x, setHowTo10x] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const handleGenerateAndSave = (e) => {
    e.preventDefault();
    if (!appName.trim()) return;

    setIsGenerating(true);

    const trimmedName = appName.trim();
    // Retrieve intelligent prebuilt knowledge base or generate deep synthesis
    const deepIntelligence = generateDeepTeardown(trimmedName, category);

    const newProduct = {
      id: `custom_${trimmedName.toLowerCase().replace(/[^a-z0-9]/g, '_')}`,
      week: 5,
      day: 1,
      name: deepIntelligence.name || trimmedName,
      category: deepIntelligence.category || category,
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      iconColor: "text-indigo-600",
      tagline: tagline.trim() || deepIntelligence.tagline,
      heroMetric: deepIntelligence.heroMetric,
      
      // 1. What is the Product
      whatIsTheProduct: deepIntelligence.whatIsTheProduct,

      // 2. Demographics & Scale
      demographics: deepIntelligence.demographics,

      // 3. 3 Distinct Named Personas with Goals, Pain Points, and JTBD
      personas: deepIntelligence.personas,

      // 4. Critical PM Nuances
      nuances: nuance.trim() ? [
        {
          title: "User-Specified Architectural Focus",
          insight: nuance.trim()
        },
        ...deepIntelligence.nuances
      ] : deepIntelligence.nuances,

      // 5. 10x Proposal & Critique
      critiqueAnd10x: howTo10x.trim() ? {
        proposal: howTo10x.trim(),
        tradeoffs: deepIntelligence.critiqueAnd10x?.tradeoffs || "Balancing operational complexity with development velocity."
      } : deepIntelligence.critiqueAnd10x,

      // 6. Interview Cheat Sheet
      interviewCheatSheet: deepIntelligence.interviewCheatSheet,
      prompt60s: deepIntelligence.prompt60s || `In 60 seconds: Explain why ${trimmedName} is differentiated from competitors, its core architecture nuance, and propose 1 strategic PM improvement.`,
      benchmarkBullets: deepIntelligence.benchmarkBullets || [
        `Target user & core JTBD identified for ${trimmedName}`,
        "Clear articulation of business model & growth flywheel",
        "Deep dive on architectural or UX secret sauce",
        "Strategic improvement proposal with acknowledged risks/trade-offs"
      ]
    };

    onAddProduct(newProduct);
    triggerConfetti();
    setIsGenerating(false);
    onClose();

    // Reset form
    setAppName('');
    setTagline('');
    setTargetPersona('');
    setNuance('');
    setHowTo10x('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-md">
      <div className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-xl p-5 sm:p-8 relative space-y-5 border border-slate-200 shadow-2xl max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-xl hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-indigo-600 font-mono-tag text-xs font-bold uppercase tracking-wider mb-1">
          <Sparkles className="w-4 h-4" /> Deep AI Teardown Generator
        </div>
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
            Teardown Any Product
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Interviewing with <strong>Culture Amp, Google, Canva, Miro, Brex, or Figma</strong>? Enter it here to generate a comprehensive 6-section PM teardown with real personas and interview cheat sheets.
          </p>
        </div>

        <form onSubmit={handleGenerateAndSave} className="space-y-4">
          <div>
            <label className="text-xs font-mono-tag font-bold text-slate-700 block mb-1">
              COMPANY / PRODUCT NAME *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Culture Amp, Google Apps, Canva, Brex, Miro"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 font-sans"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="text-xs font-mono-tag font-bold text-slate-700 block mb-1">CATEGORY</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 font-sans"
              >
                <option value="B2B SaaS">B2B SaaS / Productivity</option>
                <option value="HR Tech & People Analytics">HR Tech & People Analytics</option>
                <option value="Consumer">Consumer App</option>
                <option value="Two-Sided Marketplace">Two-Sided Marketplace</option>
                <option value="Fintech">Fintech & Payments</option>
                <option value="DevTools & AI">DevTools & AI</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-mono-tag font-bold text-slate-700 block mb-1">TAGLINE (OPTIONAL)</label>
              <input
                type="text"
                placeholder="Leave blank to auto-generate"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 font-sans"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-mono-tag font-bold text-slate-700 block mb-1">
              SPECIFIC PM NUANCE OR TOPIC TO FOCUS ON (OPTIONAL)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Focus on their enterprise retention model or minimum reporting group anonymity threshold..."
              value={nuance}
              onChange={(e) => setNuance(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 font-sans"
            />
          </div>

          <div className="pt-2 flex flex-col-reverse sm:flex-row sm:justify-end gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isGenerating}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{isGenerating ? "Synthesizing Teardown..." : "Generate Deep Teardown"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

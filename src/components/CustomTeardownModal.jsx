import React, { useState, useMemo } from 'react';
import { X, Sparkles, Check, ArrowRight, Layers, Users, Lightbulb, Rocket, Target, CheckCircle2 } from 'lucide-react';
import { triggerConfetti } from '../utils/confetti';
import { generateDeepTeardown, detectProductCategory } from '../data/productIntelligence';

const POPULAR_APPS = [
  "Culture Amp",
  "Google Apps",
  "Linear",
  "Airbnb",
  "Stripe",
  "Canva",
  "Spotify"
];

const CATEGORY_OPTIONS = [
  "HR Tech & People Analytics",
  "Enterprise Cloud & Productivity",
  "High-Velocity Issue Tracking & DevTools",
  "Two-Sided Travel & Hospitality Marketplace",
  "Fintech & Global Payments Infrastructure",
  "Accessible Visual Design & Media Creation",
  "Audio Streaming & Creator Marketplace",
  "B2B SaaS / Productivity",
  "Consumer & Mobile App",
  "DevTools & Cloud Infrastructure"
];

export default function CustomTeardownModal({ isOpen, onClose, onAddProduct }) {
  const [appName, setAppName] = useState('');
  const [customCategory, setCustomCategory] = useState('');
  const [showCategoryOverride, setShowCategoryOverride] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatingStep, setGeneratingStep] = useState(0);

  // Live real-time category auto-detection as the user types
  const autoDetectedCategory = useMemo(() => {
    if (!appName.trim()) return 'B2B SaaS / Productivity';
    return detectProductCategory(appName.trim());
  }, [appName]);

  const activeCategory = (showCategoryOverride && customCategory) 
    ? customCategory 
    : autoDetectedCategory;

  if (!isOpen) return null;

  const handleGenerateAndSave = (e) => {
    e.preventDefault();
    if (!appName.trim()) return;

    setIsGenerating(true);
    setGeneratingStep(1);

    const trimmedName = appName.trim();

    setTimeout(() => {
      setGeneratingStep(2);
    }, 250);

    setTimeout(() => {
      setGeneratingStep(3);
    }, 500);

    setTimeout(() => {
      // Retrieve intelligent prebuilt knowledge base or synthesize deep breakdown
      const deepIntelligence = generateDeepTeardown(trimmedName, activeCategory);

      const newProduct = {
        id: `custom_${trimmedName.toLowerCase().replace(/[^a-z0-9]/g, '_')}`,
        week: 5,
        day: 1,
        name: deepIntelligence.name || trimmedName,
        category: deepIntelligence.category || activeCategory,
        badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
        iconColor: "text-indigo-600",
        tagline: deepIntelligence.tagline,
        heroMetric: deepIntelligence.heroMetric,
        
        // 1. What is the Product (with 4 distinct surfaces)
        whatIsTheProduct: deepIntelligence.whatIsTheProduct,

        // 2. Demographics & Scale (Real numbers & benchmarks)
        demographics: deepIntelligence.demographics,

        // 3. 3 Distinct Named Personas with Goals, Pain Points, and JTBD
        personas: deepIntelligence.personas,

        // 4. Critical PM Nuances & Moat Analysis
        nuances: deepIntelligence.nuances,

        // 5. 10x Proposal & Critique
        critiqueAnd10x: deepIntelligence.critiqueAnd10x,

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
      setGeneratingStep(0);
      onClose();

      // Reset form
      setAppName('');
      setCustomCategory('');
      setShowCategoryOverride(false);
    }, 750);
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

        {/* Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-indigo-600 font-mono-tag text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Autonomous PM Teardown Engine</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Add Any Product or App
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Just enter the product name. Our engine <strong>automatically identifies the category</strong> and synthesizes a complete, interview-grade 6-section PM teardown.
          </p>
        </div>

        {/* Quick Pick Chips */}
        <div className="space-y-1.5 pt-1">
          <span className="text-[10px] sm:text-[11px] font-mono-tag font-bold text-slate-500 uppercase tracking-wider">
            Popular PM Interview Targets:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {POPULAR_APPS.map((quickApp) => (
              <button
                key={quickApp}
                type="button"
                onClick={() => {
                  setAppName(quickApp);
                  setShowCategoryOverride(false);
                }}
                className={`text-xs font-medium px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                  appName.toLowerCase() === quickApp.toLowerCase()
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                    : 'bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 text-slate-700 border-slate-200'
                }`}
              >
                + {quickApp}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleGenerateAndSave} className="space-y-4">
          {/* Product Name Input */}
          <div>
            <label className="text-xs font-mono-tag font-bold text-slate-700 block mb-1">
              COMPANY / PRODUCT NAME *
            </label>
            <input
              type="text"
              required
              autoFocus
              placeholder="e.g. Culture Amp, Google Apps, Linear, Airbnb, Stripe"
              value={appName}
              onChange={(e) => {
                setAppName(e.target.value);
                if (showCategoryOverride && !customCategory) {
                  setCustomCategory('');
                }
              }}
              className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-300 text-base font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 font-sans transition-all"
            />
          </div>

          {/* Automatic Category Detection Card */}
          {appName.trim() && (
            <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-200 space-y-2 animate-fadeIn transition-all">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-slate-600 font-medium">Auto-Detected Category:</span>
                  <span className="font-bold text-indigo-950 font-mono-tag text-xs sm:text-sm">
                    {activeCategory}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (!showCategoryOverride) {
                      setCustomCategory(activeCategory);
                    }
                    setShowCategoryOverride(!showCategoryOverride);
                  }}
                  className="text-[11px] font-semibold text-indigo-700 hover:text-indigo-900 underline cursor-pointer shrink-0"
                >
                  {showCategoryOverride ? "Use Auto" : "Change"}
                </button>
              </div>

              {showCategoryOverride && (
                <div className="pt-2 border-t border-indigo-200/60">
                  <label className="text-[11px] font-mono-tag font-bold text-indigo-900 block mb-1">
                    SELECT CUSTOM CATEGORY:
                  </label>
                  <select
                    value={customCategory || autoDetectedCategory}
                    onChange={(e) => setCustomCategory(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-white border border-indigo-300 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-600 font-sans"
                  >
                    {CATEGORY_OPTIONS.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          )}

          {/* What Will Be Generated (Autonomous Intelligence Preview) */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-[11px] font-mono-tag font-bold text-slate-500 uppercase tracking-wider">
                Autonomous 6-Section Synthesis Includes:
              </span>
              <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                100% Automated
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <div className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>4 Core Surfaces:</strong> Core engine, admin/ops, mobile & APIs</span>
              </div>
              <div className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>3 Named Personas:</strong> Buyer, operator & skeptic with JTBD</span>
              </div>
              <div className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>3 PM Nuances:</strong> Moats, retention game theory & PLG mechanics</span>
              </div>
              <div className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Interview Cheat Sheet:</strong> 60s pitch + 10x feature proposal</span>
              </div>
            </div>
          </div>

          {/* Generating Loading State */}
          {isGenerating && (
            <div className="p-4 rounded-xl bg-indigo-600 text-white space-y-2 animate-pulse">
              <div className="flex items-center gap-2 font-display font-bold text-sm">
                <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
                <span>Generating Deep PM Teardown for {appName.trim()}...</span>
              </div>
              <p className="text-xs text-indigo-100 font-mono-tag">
                {generatingStep === 1 && "• Mapping user segmentations, JTBD & acute pain points..."}
                {generatingStep === 2 && "• Formulating architectural trade-offs & defensible moats..."}
                {generatingStep === 3 && "• Assembling 60-second PM interview cheat sheet..."}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col-reverse sm:flex-row sm:justify-end gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={isGenerating}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isGenerating || !appName.trim()}
              className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold shadow-md transition-all cursor-pointer ${
                isGenerating || !appName.trim()
                  ? 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/25 active:scale-98'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{isGenerating ? "Synthesizing..." : "Generate Deep Teardown"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

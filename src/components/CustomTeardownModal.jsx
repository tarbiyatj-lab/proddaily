import React, { useState } from 'react';
import { X, Sparkles, PlusCircle } from 'lucide-react';
import { triggerConfetti } from '../utils/confetti';

export default function CustomTeardownModal({ isOpen, onClose, onAddProduct }) {
  const [appName, setAppName] = useState('');
  const [category, setCategory] = useState('B2B SaaS');
  const [tagline, setTagline] = useState('');
  const [targetPersona, setTargetPersona] = useState('');
  const [nuance, setNuance] = useState('');
  const [howTo10x, setHowTo10x] = useState('');

  if (!isOpen) return null;

  const handleGenerateAndSave = (e) => {
    e.preventDefault();
    if (!appName.trim()) return;

    const trimmedName = appName.trim();
    const trimmedTagline = tagline.trim() || `${trimmedName} — high-growth modern product teardown.`;
    const trimmedPersona = targetPersona.trim() || "Target users & high-intent customers for this vertical.";
    const trimmedNuance = nuance.trim() || "Core competitive moat lies in opinionated workflow design, superior API latency, and reduced onboarding friction compared to legacy incumbents.";
    const trimmed10x = howTo10x.trim() || "Build native generative AI workflow synthesis to automate repetitive multi-step actions.";

    const newProduct = {
      id: `custom_${trimmedName.toLowerCase().replace(/[^a-z0-9]/g, '_')}`,
      week: 5,
      day: 1,
      name: trimmedName,
      category: category,
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      iconColor: "text-indigo-600",
      tagline: trimmedTagline,
      heroMetric: "Self-curated interview teardown",
      
      // 1. What is the Product
      whatIsTheProduct: {
        summary: `${trimmedName} is a high-impact ${category} product designed to solve critical workflow and friction points with modern UX craft and scalable architecture.`,
        coreSurfaces: [
          {
            name: "Core Workflow Surface",
            detail: `The primary workspace where users interact with ${trimmedName}'s daily execution mechanics.`
          },
          {
            name: "Data & Collaboration Layer",
            detail: "Enables seamless sharing, multi-user collaboration, and asynchronous team visibility."
          }
        ]
      },

      // 2. Demographics & Scale
      demographics: {
        geography: "Global adoption across high-growth tech hubs, remote teams, and enterprise markets.",
        motivation: "Users seeking modern, low-friction alternatives to legacy tools with immediate time-to-value.",
        ageDistribution: "Core demographic: 22-45 professionals and decision-makers in digital industries.",
        retentionBenchmark: "Strong product stickiness driven by high switching costs and habitual workflows."
      },

      // 3. Personas
      personas: [
        {
          name: `Core ICP — "${trimmedPersona.slice(0, 30)}"`,
          archetype: "High-Intent Primary User",
          goal: `Maximize productivity and achieve reliable results using ${trimmedName}.`,
          painPoint: "Legacy workflows are slow, fragmented, and lack modern collaborative design.",
          jtbd: `Help me complete core ${category} workflows faster so my team can move with higher velocity.`,
          behavior: "Frequent daily opens, high engagement with keyboard shortcuts and core features."
        }
      ],

      // 4. Nuances
      nuances: [
        {
          title: "The Core Nuance & Architectural Moat",
          insight: trimmedNuance
        }
      ],

      // 5. 10x Proposal & Critique
      critiqueAnd10x: {
        proposal: trimmed10x,
        tradeoffs: "Balancing infrastructure/AI compute costs with user willingness-to-pay and system latency."
      },

      // 6. Interview Cheat Sheet
      interviewCheatSheet: `${trimmedName} is a differentiated ${category} platform. Its moat stems from: ${trimmedNuance.slice(0, 140)}. To 10x it: ${trimmed10x.slice(0, 100)}.`,
      prompt60s: `In 60 seconds: Explain why ${trimmedName} is differentiated from competitors, its core architecture nuance, and propose 1 strategic PM improvement.`,
      benchmarkBullets: [
        `Target user & core JTBD identified for ${trimmedName}`,
        "Clear articulation of business model & growth flywheel",
        "Deep dive on architectural or UX secret sauce",
        "Strategic improvement proposal with acknowledged risks/trade-offs"
      ]
    };

    onAddProduct(newProduct);
    triggerConfetti();
    onClose();

    // Reset form
    setAppName('');
    setTagline('');
    setTargetPersona('');
    setNuance('');
    setHowTo10x('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="glass-panel-elevated rounded-3xl w-full max-w-xl p-7 sm:p-9 relative space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-indigo-400 font-mono-tag text-xs font-bold uppercase tracking-wider mb-1">
          <Sparkles className="w-3.5 h-3.5" /> Interview On-Demand
        </div>
        <div>
          <h2 className="font-display text-2xl font-extrabold text-white">
            Teardown Any Product
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Interviewing with Canva, Miro, Brex, or Perplexity? Add it here to generate an interview teardown card.
          </p>
        </div>

        <form onSubmit={handleGenerateAndSave} className="space-y-4">
          <div>
            <label className="text-xs font-mono-tag font-bold text-slate-300 block mb-1">PRODUCT NAME *</label>
            <input
              type="text"
              required
              placeholder="e.g. Canva, Brex, Miro, Perplexity"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
              className="w-full p-3 rounded-xl bg-black/50 border border-white/[0.08] text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-mono"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono-tag font-bold text-slate-300 block mb-1">CATEGORY</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 rounded-xl bg-black/50 border border-white/[0.08] text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-mono"
              >
                <option value="B2B SaaS">B2B SaaS</option>
                <option value="Consumer">Consumer App</option>
                <option value="Two-Sided Marketplace">Two-Sided Marketplace</option>
                <option value="Fintech">Fintech</option>
                <option value="DevTools & AI">DevTools & AI</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-mono-tag font-bold text-slate-300 block mb-1">ONE-LINE TAGLINE</label>
              <input
                type="text"
                placeholder="e.g. Collaborative visual whiteboard"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                className="w-full p-3 rounded-xl bg-black/50 border border-white/[0.08] text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-mono"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-mono-tag font-bold text-slate-300 block mb-1">
              SECRET SAUCE / NUANCE (OPTIONAL)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. What is their non-obvious engineering or behavioral retention choice?"
              value={nuance}
              onChange={(e) => setNuance(e.target.value)}
              className="w-full p-3 rounded-xl bg-black/50 border border-white/[0.08] text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-mono"
            />
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 text-xs font-bold transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-display font-bold shadow-lg shadow-indigo-500/20 transition-all hover:scale-105"
            >
              <PlusCircle className="w-4 h-4" /> Add to Vault
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

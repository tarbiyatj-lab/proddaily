import React, { useState, useRef, useEffect } from 'react';
import { 
  Users, 
  Globe, 
  Lightbulb, 
  Wrench, 
  CheckCircle, 
  ChevronRight, 
  ChevronLeft, 
  Download, 
  Mic, 
  Square, 
  Play, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  Bookmark,
  Layers,
  HelpCircle,
  FileCheck2
} from 'lucide-react';
import { triggerConfetti } from '../utils/confetti';

export default function DailyDrop({ 
  product, 
  onNextProduct, 
  onPrevProduct, 
  hasPrev, 
  hasNext, 
  userProgress, 
  onSaveProgress 
}) {
  const [pitchMode, setPitchMode] = useState('text'); // 'text' | 'voice'
  const [textPitch, setTextPitch] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioUrl, setAudioUrl] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selfRating, setSelfRating] = useState(null);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);

  useEffect(() => {
    const existing = userProgress[product.id];
    if (existing) {
      setTextPitch(existing.pitch || '');
      setSelfRating(existing.rating || 5);
      setIsSubmitted(true);
      if (existing.audioUrl) {
        setAudioUrl(existing.audioUrl);
      }
    } else {
      setTextPitch('');
      setAudioUrl(null);
      setIsSubmitted(false);
      setSelfRating(null);
    }
  }, [product.id, userProgress]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      setRecordingTime(0);

      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } catch (err) {
      alert("Microphone permission was denied. You can type your pitch instead!");
      setPitchMode('text');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      clearInterval(timerRef.current);
    }
  };

  const handleSubmit = (rating = 4) => {
    setIsSubmitted(true);
    setSelfRating(rating);
    triggerConfetti();

    onSaveProgress(product.id, {
      completedAt: new Date().toISOString(),
      pitch: textPitch,
      audioUrl: audioUrl,
      rating: rating,
      productName: product.name,
      category: product.category
    });
  };

  const handleDownloadMarkdown = () => {
    const content = `# PM Teardown: ${product.name}
**Date:** ${new Date().toLocaleDateString()}
**Category:** ${product.category}
**Tagline:** ${product.tagline}
**Hero Metric:** ${product.heroMetric}

---

## 1. What is the Product?
${product.whatIsTheProduct?.summary || product.tagline}

## 2. Demographics & Scale
${JSON.stringify(product.demographics, null, 2)}

## 3. User Personas
${product.personas?.map(p => `### ${p.name}\n* Archetype: ${p.archetype}\n* Goal: ${p.goal}\n* JTBD: ${p.jtbd}\n`).join('\n')}

## 4. Key Nuances
${product.nuances?.map(n => `### ${n.title}\n${n.insight}\n`).join('\n')}

## 5. Interview Cheat Sheet
${product.interviewCheatSheet}
`;

    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${product.id}_pm_master_teardown.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const isMastered = !!userProgress[product.id];

  return (
    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 pb-16 px-1 sm:px-0">
      {/* Top Header & Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3 sm:pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] sm:text-xs font-mono-tag font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
            DAY {product.day} • {product.category.toUpperCase()}
          </span>
          {isMastered && (
            <span className="flex items-center gap-1 text-[11px] sm:text-xs font-bold text-emerald-700 bg-emerald-50 px-2 sm:px-2.5 py-0.5 rounded-full border border-emerald-200">
              <CheckCircle className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> Mastered
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={onPrevProduct}
            disabled={!hasPrev}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              hasPrev 
                ? 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300 shadow-sm' 
                : 'opacity-40 cursor-not-allowed bg-slate-50 text-slate-400 border-slate-200'
            }`}
          >
            <ChevronLeft className="w-3.5 h-3.5" /> Previous
          </button>
          <button
            onClick={onNextProduct}
            disabled={!hasNext}
            className={`flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              hasNext 
                ? 'bg-slate-900 hover:bg-slate-800 text-white border-slate-900 shadow-sm' 
                : 'opacity-40 cursor-not-allowed bg-slate-50 text-slate-400 border-slate-200'
            }`}
          >
            Next Product <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Product Hero Header */}
      <div className="space-y-2.5 sm:space-y-3">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {product.name}
          </h1>
          <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
            {product.category}
          </span>
        </div>
        <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed">
          {product.tagline}
        </p>
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-[11px] sm:text-xs font-mono-tag text-slate-700 font-semibold">
          <span>Active Scale:</span>
          <span className="text-slate-900 font-bold">{product.heroMetric}</span>
        </div>
      </div>

      {/* ======================================================== */}
      {/* SECTION 1: WHAT ACTUALLY IS THE PRODUCT?                */}
      {/* ======================================================== */}
      <section className="editorial-card rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
        <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-base sm:text-lg border-b border-slate-100 pb-2.5 sm:pb-3">
          <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
          <span>1. What Actually is the Product? (Surfaces & Mechanics)</span>
        </div>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
          {product.whatIsTheProduct?.summary}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {product.whatIsTheProduct?.coreSurfaces?.map((surface, idx) => (
            <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <h3 className="font-display font-bold text-xs sm:text-sm text-slate-900">
                {surface.name}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                {surface.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 2: DEMOGRAPHICS & USER SCALE                    */}
      {/* ======================================================== */}
      <section className="editorial-card rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
        <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-base sm:text-lg border-b border-slate-100 pb-2.5 sm:pb-3">
          <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
          <span>2. Demographics & User Breakdown (The Real Numbers)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 text-xs sm:text-sm">
          <div className="space-y-1 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] sm:text-xs font-mono-tag font-bold text-slate-500 uppercase">Geographic Distribution</span>
            <p className="text-slate-800 leading-relaxed text-xs">
              {product.demographics?.geography}
            </p>
          </div>

          <div className="space-y-1 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] sm:text-xs font-mono-tag font-bold text-slate-500 uppercase">Core Motivation</span>
            <p className="text-slate-800 leading-relaxed text-xs">
              {product.demographics?.motivation}
            </p>
          </div>

          <div className="space-y-1 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] sm:text-xs font-mono-tag font-bold text-slate-500 uppercase">Age Distribution</span>
            <p className="text-slate-800 leading-relaxed text-xs">
              {product.demographics?.ageDistribution}
            </p>
          </div>

          <div className="space-y-1 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] sm:text-xs font-mono-tag font-bold text-slate-500 uppercase">Retention Benchmark</span>
            <p className="text-slate-800 leading-relaxed text-xs">
              {product.demographics?.retentionBenchmark}
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 3: NAMED, MEMORABLE USER PERSONAS                */}
      {/* ======================================================== */}
      <section className="editorial-card rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
        <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-base sm:text-lg border-b border-slate-100 pb-2.5 sm:pb-3">
          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
          <span>3. User Segmentation & Named Personas</span>
        </div>

        <div className="space-y-3.5 sm:space-y-5">
          {product.personas?.map((p, idx) => (
            <div key={idx} className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2.5 sm:space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-100 pb-2">
                <span className="font-display font-bold text-sm sm:text-base text-slate-900">
                  {p.name}
                </span>
                <span className="text-[10px] sm:text-xs font-mono-tag font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 w-fit">
                  {p.archetype}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs text-slate-700">
                <div>
                  <strong className="text-slate-900 block mb-0.5">Core Goal:</strong>
                  <span>{p.goal}</span>
                </div>
                <div>
                  <strong className="text-rose-600 block mb-0.5">Primary Pain Point:</strong>
                  <span>{p.painPoint}</span>
                </div>
              </div>

              <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                <strong className="text-slate-900">Jobs-To-Be-Done (JTBD):</strong>
                <p className="italic text-slate-700 mt-0.5">"{p.jtbd}"</p>
              </div>

              <div className="text-[11px] sm:text-xs text-slate-500">
                <strong className="text-slate-700">In-App Behavior:</strong> {p.behavior}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 4: THE REAL PRODUCT NUANCES                     */}
      {/* ======================================================== */}
      <section className="editorial-card rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
        <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-base sm:text-lg border-b border-slate-100 pb-2.5 sm:pb-3">
          <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
          <span>4. Deep Product Nuances (What 99% of Candidates Miss)</span>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {product.nuances?.map((nuance, idx) => (
            <div key={idx} className="p-3.5 sm:p-5 rounded-xl bg-amber-50/50 border border-amber-200/60 space-y-1.5 sm:space-y-2">
              <h3 className="font-display font-bold text-xs sm:text-sm text-amber-950 flex items-center gap-1.5">
                <span>⚡</span> {nuance.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                {nuance.insight}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 5: CRITIQUE & "HOW TO 10X IT"                    */}
      {/* ======================================================== */}
      <section className="editorial-card rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5">
        <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-base sm:text-lg border-b border-slate-100 pb-2.5 sm:pb-3">
          <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
          <span>5. PM Critique & Strategic "How to 10x It"</span>
        </div>

        <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 sm:space-y-2">
          <span className="text-[10px] sm:text-xs font-mono-tag font-bold text-indigo-700 uppercase">Strategic Proposal</span>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
            {product.critiqueAnd10x?.proposal}
          </p>
        </div>

        <div className="p-3.5 sm:p-4 rounded-xl bg-rose-50 border border-rose-200 space-y-1 sm:space-y-2">
          <span className="text-[10px] sm:text-xs font-mono-tag font-bold text-rose-700 uppercase">Trade-offs & Potential Risks</span>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
            {product.critiqueAnd10x?.tradeoffs}
          </p>
        </div>
      </section>
      {/* ======================================================== */}
      {/* SECTION 6: INTERVIEW CHEAT SHEET & ACTIVE RECALL DRILL  */}
      {/* ======================================================== */}
      <section className="editorial-card-elevated rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 border-slate-300">
        <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-base sm:text-lg border-b border-slate-200 pb-2.5 sm:pb-3">
          <FileCheck2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
          <span>6. The Interview Cheat Sheet & 60-Second Active Recall Drill</span>
        </div>

        {/* The 3-Sentence Cheat Sheet */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white space-y-2">
          <span className="text-[10px] sm:text-xs font-mono-tag text-emerald-400 font-bold uppercase tracking-wider block">
            Memorize for PM Interviews:
          </span>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
            "{product.interviewCheatSheet}"
          </p>
        </div>

        {/* The Active Recall Arena */}
        <div className="pt-2 sm:pt-4 space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
            <div>
              <h3 className="font-display font-bold text-sm sm:text-base text-slate-900">
                The 60-Second Verbal Elevator Teardown
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500">
                Practicing delivery out-loud builds spontaneous interview confidence.
              </p>
            </div>

            <div className="flex items-center p-1 rounded-lg bg-slate-100 border border-slate-200 self-start sm:self-auto">
              <button
                onClick={() => setPitchMode('text')}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                  pitchMode === 'text' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
                }`}
              >
                Type Bullets
              </button>
              <button
                onClick={() => setPitchMode('voice')}
                className={`flex items-center gap-1 px-3 py-1 rounded-md text-xs font-bold transition-all ${
                  pitchMode === 'voice' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
                }`}
              >
                <Mic className="w-3 h-3 text-rose-500" />
                <span>Voice Record</span>
              </button>
            </div>
          </div>

          {/* Interactive Voice or Text Input */}
          {pitchMode === 'voice' ? (
            <div className="p-4 sm:p-6 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-3 sm:space-y-4">
              <div className="flex justify-center">
                {!isRecording ? (
                  <button
                    onClick={startRecording}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow transition-all cursor-pointer"
                  >
                    <Mic className="w-4 h-4" /> Start 60-Second Verbal Pitch
                  </button>
                ) : (
                  <button
                    onClick={stopRecording}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-rose-500 text-rose-600 font-bold text-xs shadow animate-pulse cursor-pointer"
                  >
                    <Square className="w-4 h-4 fill-rose-600" /> Stop Recording ({recordingTime}s / 60s)
                  </button>
                )}
              </div>

              {audioUrl && (
                <div className="pt-2 flex flex-col items-center gap-2">
                  <span className="text-xs text-slate-500">Your Recorded Audio:</span>
                  <audio controls src={audioUrl} className="w-full max-w-sm h-8" />
                </div>
              )}
            </div>
          ) : (
            <textarea
              rows={4}
              value={textPitch}
              onChange={(e) => setTextPitch(e.target.value)}
              placeholder="In 60 seconds: Outline target user, why this product wins, the core nuance, and 1 trade-off..."
              className="w-full p-3 sm:p-4 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 font-mono"
            />
          )}

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            <button
              onClick={() => handleSubmit(5)}
              disabled={pitchMode === 'text' && !textPitch.trim() && !audioUrl}
              className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
                (pitchMode === 'text' && textPitch.trim()) || audioUrl
                  ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm cursor-pointer'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
              }`}
            >
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>{isSubmitted ? 'Update & Re-grade' : 'Submit Pitch & Save to Vault'}</span>
            </button>

            {isSubmitted && (
              <button
                onClick={handleDownloadMarkdown}
                className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-slate-500" /> Export Full Teardown (.md)
              </button>
            )}
          </div>
        </div>

        {/* Side-by-Side Review if Submitted */}
        {isSubmitted && (
          <div className="mt-6 pt-6 border-t border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-800 uppercase">
                ✓ Recorded in your personal PM Vault
              </span>
              <div className="flex items-center gap-1">
                <span className="text-xs text-slate-500 mr-2">Rate your delivery:</span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleSubmit(star)}
                    className={`text-base ${
                      star <= (selfRating || 4) ? 'text-amber-500' : 'text-slate-300'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
              <strong>Your Summary Notes:</strong>
              <p className="whitespace-pre-wrap font-mono text-slate-800">
                {textPitch || (audioUrl ? "Audio pitch saved in player above." : "No written notes.")}
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

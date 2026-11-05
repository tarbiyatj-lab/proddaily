# ProdDaily 🚀 — 1 Product a Day PM Interview Accelerator

> A gamified, interactive daily learning tool designed for transitioning from Engineering + MBA into Product Management. Built to eliminate the "product breadth & intuition" deficit through bite-sized, structured daily teardowns, active recall testing, and weekly synthesis quizzes.

---

## 🌟 Live Demo & Quick Start
The local development server is running at:
```bash
http://localhost:3000
```

To run manually in terminal:
```bash
cd /Users/tarbiyajamil/Downloads/PM
npm run dev
```

---

## 🎯 The Core User Problem
* **The Candidate:** 10 years in engineering + MBA. Strong analytical, technical feasibility, and business fundamentals.
* **The Deficit:** Low day-to-day consumer & SaaS app usage leads to hesitation during spontaneous PM interview drills (*"What is your favorite product and how would you 10x it?", "Compare Notion vs Linear", "Why did Duolingo prioritize streaks over grammar?"*).
* **The Solution:** 
  1. **Daily Drop:** 1 Curated Product/Day (5-minute teardown).
  2. **The Non-Obvious Nuance:** Deep dive into the architectural, psychological, or business subtlety that senior PM interviewers look for.
  3. **The 60-Second Active Recall Drill:** Audio voice recording or bullet pitch with side-by-side benchmark comparison.
  4. **The Weekly Boss Quiz:** Spaced-repetition test on Sundays testing cross-product trade-offs.
  5. **The PM Product Vault:** Searchable second brain with 1-click Markdown export.
  6. **12:45 PM Lunchtime Nudge:** Habit trigger timed for cognitive midday transitions.

---

## 📚 Curriculum Structure (Seeded Tracks)
* **Week 1: Consumer Habit Formation & Retention Kings** (Duolingo, Strava, Spotify, TikTok, BeReal)
* **Week 2: Product-Led Growth (PLG) & Modern B2B SaaS** (Linear, Notion, Figma, Loom, Slack)
* **Week 3: Two-Sided Marketplaces & Platforms** (Airbnb, Uber, DoorDash, Substack, Etsy)
* **Week 4: FinTech, APIs & Developer Infrastructure** (Stripe, Plaid, Supabase, Postman, Retool)
* **+ On-Demand Teardown:** Add and analyze any app (Canva, Brex, Miro, Perplexity) before an upcoming interview!

---

## 🛠️ Tech Stack & Architecture
* **Frontend:** React 19 + Vite 8 + Tailwind CSS v4 + Lucide Icons + Canvas Confetti.
* **Audio Engine:** Browser `MediaRecorder` API with live microphone capture and in-browser playback.
* **Persistence:** Local-first storage (`localStorage`) + One-click Markdown export (`.md`).
* **Design Philosophy:** Vibrant, playful, Duolingo/Linear-inspired dark UI.

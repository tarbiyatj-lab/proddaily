# Product Requirement Document (PRD)
## ProdDaily: 1-Product-a-Day PM Interview Accelerator

---

### 1. Executive Summary & Problem Statement
* **Target User:** Mid-to-senior technical professionals (e.g., 10-year engineering background + MBA) pivoting into Product Management (PM).
* **The Problem:** In PM interviews, candidates are tested heavily on **Product Sense, Execution, and Strategic Vision** through questions like:
  * *"What is your favorite product and how would you 10x it?"*
  * *"Why did [App X] beat [App Y] despite having fewer features?"*
  * *"How would you design monetization for [App Z] without hurting retention?"*
  Candidates who do not naturally use 50+ apps lack spontaneous product breadth, non-obvious nuance, and architectural appreciation of modern consumer & B2B SaaS apps.
* **The Solution:** A gamified, interactive daily learning tool that curates **one software product per day**, delivers a 5-minute structured PM teardown, prompts active verbal/textual recall, tests cross-product retention via weekly quizzes, and builds an evergreen personal interview directory.

---

### 2. User Persona & Jobs-To-Be-Done (JTBD)
* **Primary Persona:** *The Experienced Pivot* (Engineering Vet + MBA).
  * **Strengths:** System architecture, feasibility, analytical rigor, business fundamentals.
  * **Blindspots:** UX delight mechanics, consumer growth loops, competitive nuance across varied app categories (FinTech, Marketplaces, PLG SaaS, AI).
* **Core JTBD:**
  > *"When I have 10 minutes during lunch (12:30–1:00 PM), I want to analyze one real software product through a structured PM framework, so that when I get asked unexpected product questions in interviews, I have a deep mental catalog of examples and trade-offs ready to reference."*

---

### 3. Key Feature Specifications

#### F1. The Daily Drop (1 Product / Day)
* **Cadence:** Unlocks 1 new product every 24 hours.
* **Lunchtime Trigger:** Nudge at **12:45 PM** (local time) via Web Notification.
* **Content Framework:**
  1. **Value Proposition & ICP (Ideal Customer Profile):** Who uses it, who buys it, and the core JTBD.
  2. **Core Flywheel & Monetization:** Acquisition loop, activation hook, and revenue model.
  3. **The Secret Sauce / Nuance:** The non-obvious technical, psychological, or architectural subtlety (e.g. Superhuman's 100ms rule & offline SQLite; Figma's WebGL canvas).
  4. **The "10x Improvement & Trade-offs":** Concrete feature proposal + edge cases + risks.

#### F2. Active Recall & 60-Second PM Pitch Challenge
* **Interaction:** In-browser audio recording (MediaRecorder API) or timed text entry.
* **Prompt:** *"In 60 seconds, pitch this product's core differentiator and propose 1 strategic improvement."*
* **Benchmark Comparison:** Immediately compares candidate submission against the Gold Standard PM teardown.

#### F3. Weekly Retention & Synthesis Quiz (Sundays)
* **Format:** 5 cross-cutting questions testing synthesis across that week's 5 products.
* **Question Types:**
  * Flywheel comparisons (e.g. *Duolingo streak loss-aversion vs. Strava social fitness*).
  * Architecture trade-offs (e.g. *Notion modular blocks vs. Linear opinionated workflows*).
* **Rewards:** Unlocks Weekly Mastery Badge + updates retention score.

#### F4. The PM Vault (Personal Second Brain)
* **Search & Filter:** Filter by Category (Consumer, B2B PLG, Marketplace, FinTech, DevTools, AI), Monetization model, or Mastery level.
* **Local Persistence:** Local-first storage (`localStorage`) + One-click export to Markdown for interview day prep.

#### F5. "On-Demand Teardown" Generator
* Ability to input *any* company name (e.g. Canva, Retool, Miro) to instantly generate and save an interview-grade teardown card for upcoming interviews.

---

### 4. Metrics & Measurement

| Metric Type | Metric Name | Definition & Target |
| :--- | :--- | :--- |
| **North Star** | **Product Fluency Retention Score** | % of benchmark concepts accurately identified across weekly quizzes (Target: >80%) |
| **Habit / Engagement** | **7-Day Active Streak Rate** | % of weeks where all 5 weekday drops + Sunday quiz are completed (Target: >85%) |
| **Depth** | **Active Recall Pitch Rate** | % of daily drops where user records an audio or text pitch (Target: >75%) |
| **Catalog Breadth** | **Vault Size** | Cumulative number of mastered products in user vault (>25 products by Month 1) |

---

### 5. Product Roadmap
* **v1.0 (MVP):** 20 Seeded iconic products across 4 thematic weeks, Daily Drop UI, in-browser audio recorder, side-by-side benchmark, Weekly Boss Quiz, Lunchtime nudge system, and Markdown export.
* **v1.1:** Audio transcription & automated AI grading against PM rubric.
* **v1.2:** Spaced-repetition flashcard drills for quick 2-minute revision on mobile.

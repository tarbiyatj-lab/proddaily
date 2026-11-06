export const SEED_PRODUCTS = [
  {
    id: "tiktok",
    week: 1,
    day: 3,
    name: "TikTok",
    category: "Consumer Attention & Algorithmic Media",
    badgeColor: "bg-neutral-900 text-white border-neutral-700",
    iconColor: "text-rose-500",
    tagline: "The interest-graph short-form video engine that dethroned the social graph",
    heroMetric: "1.5B+ MAU, 95+ mins daily average watch time, >$16B ad revenue",
    whatIsTheProduct: {
      summary: "A mobile-first video platform that presents an endless, full-screen vertical feed of algorithmic video recommendations, stripping away the requirement for a social network graph in favor of pure, machine-learned viewer interest signals.",
      coreSurfaces: [
        {
          name: "The 'For You Page' (FYP) Zero-Friction Feed",
          detail: "Opens directly to full-screen video with sound on. Zero navigation or follow requirement. Loops indefinitely based on micro-interactions (watch time, rewatches, skip velocity)."
        },
        {
          name: "In-App Creation Studio & Audio Memes",
          detail: "Built-in video editor with synchronized music tracks, AR filters, green screen, and 'Duet/Stitch' features allowing users to riff on existing cultural memes."
        },
        {
          name: "TikTok Shop (Embedded Social Commerce)",
          detail: "Direct in-video product tags, live shopping streams, and integrated checkout that turns entertainment into impulse purchases without leaving the feed."
        },
        {
          name: "Direct Messaging & Shared Video Triggers",
          detail: "High-velocity sharing loop where users forward funny clips to peer threads, driving notification wakeups and external app re-engagement."
        }
      ]
    },
    demographics: {
      geography: "Global footprint across 150+ countries. Massive presence in US, Southeast Asia, Middle East, and Latin America.",
      motivation: "Instant, low-effort dopamine entertainment and trend discovery.",
      ageDistribution: "Over 60% Gen Z and young Millennials (ages 13-34), increasingly capturing older demographics via cooking, DIY, and news content.",
      retentionBenchmark: "Daily time spent exceeds 95 minutes per active user, outperforming YouTube and Instagram in session engagement density."
    },
    personas: [
      {
        name: "Zoe (19, Austin) — 'The Passive Scroller'",
        archetype: "High-Dopamine Consumer",
        goal: "Decompress after college classes with funny, relatable micro-videos.",
        painPoint: "Instagram shows too many friends' polished baby pictures and ads; YouTube videos take 15 minutes.",
        jtbd: "Give me instant, tailored humor in 30-second bursts without requiring me to choose what to watch.",
        behavior: "Never posts videos, watches 2+ hours in bed, shares 15 TikTok links a day with friends over iMessage."
      },
      {
        name: "Marcus (26, London) — 'The Breakout Creator'",
        archetype: "Algorithmic Growth Hustler",
        goal: "Grow an audience from 0 to 100K followers and land brand sponsorships without paying for ad placement.",
        painPoint: "YouTube and Instagram require years of established subscriber followings to get any algorithmic distribution.",
        jtbd: "Give my videos an equal shot at going viral purely based on content quality and watch retention curves.",
        behavior: "Analyzes retention drop-off graphs at second 3, hops on trending audio within 4 hours of emergence."
      },
      {
        name: "Clara (41, Chicago) — 'The TikTok Shop Merchant'",
        archetype: "Direct-to-Consumer Brand Founder",
        goal: "Sell out inventory for her organic skincare serum directly inside video feeds.",
        painPoint: "Customer Acquisition Cost (CAC) on Meta and Google has doubled over the past 3 years.",
        jtbd: "Let impulse buyers purchase my product in 2 taps without bouncing to an external Shopify checkout.",
        behavior: "Partners with micro-affiliate creators, hosts weekly live selling streams, monitors GMV conversion in TikTok Seller Center."
      }
    ],
    nuances: [
      {
        title: "The Death of the Social Graph: Interest > Follower Count",
        insight: "Facebook and Instagram required you to follow friends or accounts, creating a cold-start problem where new creators couldn't get views. TikTok decoupled distribution from followers: an account with 0 followers can get 5M views on day one if the video's retention curve is strong. This gave birth to meritocratic algorithmic distribution."
      },
      {
        title: "Audio as a Canonical Index Key",
        insight: "On YouTube and Twitter, text is the search index. On TikTok, the audio track is the primary meme metadata. Clicking a song opens every video that ever used that sound, turning music into viral reusable templates."
      },
      {
        title: "The Zero-Click UX: Eliminating Choice Friction",
        insight: "Netflix and YouTube require you to browse thumbnails, read titles, and decide what to click—creating decision fatigue. TikTok eliminated the menu entirely: you open the app and content is already playing. Removing the choice barrier increased time-to-first-dopamine to under 500 milliseconds."
      }
    ],
    critiqueAnd10x: {
      proposal: "Algorithmic 'Dopamine Detox & Sleep Guardian': Dynamic pacing algorithms that gradually transition late-night feeds from hyper-stimulating content into calming educational or long-form ambient audio after midnight.",
      tradeoffs: "Directly conflicts with short-term ad impression maximization metrics and executive engagement KPIs."
    },
    interviewCheatSheet: "TikTok replaced the Social Graph (who you follow) with the Interest Graph (what captures your attention in 2 seconds). Its defensibility is pure machine-learning feedback loops on full-screen consumption telemetry. In PM interviews, cite its audio-as-index innovation and frictionless cold-start creator incentives."
  },
  {
    "id": "notion",
    "week": 2,
    "day": 2,
    "name": "Notion",
    "category": "B2B SaaS / Productivity",
    "badgeColor": "bg-stone-100 text-stone-800 border-stone-300",
    "tagline": "The modular workspace that turned documents into relational databases and spawned an organic template economy",
    "heroMetric": "100M+ users, >$350M ARR, $10B valuation, 90%+ organic template distribution",
    "whatIsTheProduct": {
      "summary": "A modular, all-in-one productivity workspace where pages are composed of typed, movable 'blocks' (text, media, embeds, relational database views) that can be linked, transformed, and shared collaboratively across personal and enterprise teams.",
      "coreSurfaces": [
        {
          "name": "The Atomic Block Canvas & Slash Commands (`/`)",
          "detail": "Every element on a page (paragraph, bullet, toggle list, callout, image) is an independent database object with a unique UUID. Typing '/' triggers instant insertion of over 50 block primitives without touching formatting toolbars."
        },
        {
          "name": "Polymorphic Relational Database Views",
          "detail": "The same underlying dataset can be toggled instantaneously between Table, Kanban Board, Timeline/Gantt, Calendar, Gallery, and List views. Supports multi-way relations and 'Rollup' calculations across tables."
        },
        {
          "name": "Notion AI & Semantic Q&A Agent",
          "detail": "Embedded generative AI and retrieval-augmented generation (RAG) that indexes team wikis, allowing employees to ask natural-language questions (e.g. 'What is our Q4 parental leave policy?') and receive cited answers in seconds."
        },
        {
          "name": "Global Template Gallery & Creator Economy",
          "detail": "A self-serve marketplace enabling any user to publish or monetize functional workspace layouts (Life OS, Startup PRD Stack, CRM), turning power users into viral distributed marketing hubs."
        }
      ]
    },
    "demographics": {
      "geography": "Over 80% of active users are outside the United States. Massive grassroots adoption across Japan, South Korea, France, Germany, and the UK.",
      "motivation": "Knowledge workers, founders, and students desperate to consolidate 5 disjointed tools (Google Docs, Trello, Evernote, Airtable, and Confluence) into a single cohesive operating system.",
      "ageDistribution": "Core adoption is 18-35 (heavy university student and startup operator demographic driven by Reddit, Twitter, and TikTok aesthetic desk setups).",
      "retentionBenchmark": "Net Revenue Retention (NRR) exceeds 120% among paying business workspaces, driven by bottom-up expansion from individual note-takers to full company wikis."
    },
    "personas": [
      {
        "name": "Kenji (27, Tokyo) — 'The Second-Brain Architect'",
        "archetype": "Obsessive Personal Knowledge Organizer",
        "goal": "Build an interconnected digital second brain connecting reading notes, habit trackers, and personal projects.",
        "painPoint": "Apple Notes is too flat; traditional databases require SQL and look ugly.",
        "jtbd": "Give me an aesthetic, infinitely malleable canvas so I can organize my entire life and thoughts in one place.",
        "behavior": "Spends 6 hours on weekends fine-tuning database relation properties, buys $30 community templates on Gumroad."
      },
      {
        "name": "Sarah (34, London) — 'The Async Scale-Up COO'",
        "archetype": "Cross-Functional Documentation Leader",
        "goal": "Standardize company-wide onboarding, meeting notes, and engineering RFCs without paying $20/seat for bloated legacy Atlassian Confluence.",
        "painPoint": "Company documents rot in Google Drive folders where no one can find anything after 2 weeks.",
        "jtbd": "Create a central, searchable company wiki where new hires can self-serve knowledge on day one without asking on Slack.",
        "behavior": "Champions enterprise Team Plan upgrade, restricts edit permissions on core HR wikis, sets up weekly team sprint boards."
      },
      {
        "name": "Marco (21, Milan) — 'The University Student Power-User'",
        "archetype": "Free-Tier Academic Crusader",
        "goal": "Organize university lecture notes, coursework deadlines, and exam revision guides with embedded flashcards and aesthetic icons.",
        "painPoint": "Carrying 4 separate notebooks and losing track of exam syllabus deliverables across fragmented PDFs.",
        "jtbd": "Help me ace my university exams with organized, color-coded study schedules accessible on laptop and phone.",
        "behavior": "Uses free student plan, shares public page links with study groups, posts Notion desk setup aesthetic reels on TikTok."
      }
    ],
    "nuances": [
      {
        "title": "The Near-Death Pivot: Rebuilding from Scratch in Kyoto (2015)",
        "insight": "In 2015, Notion's initial prototype constantly crashed and ran out of cash. Instead of tweaking it, Ivan Zhao and Simon Last fired their staff, sublet their San Francisco office, and moved to Kyoto, Japan. They rewrote the entire architecture from scratch on a unified 'Block' paradigm. This radical willingness to scrap a flawed codebase and isolate themselves for deep craft created the rock-solid data model that powers 100M users today."
      },
      {
        "title": "The Zero-CAC Template Flywheel: Monetizing User Obsession",
        "insight": "Traditional B2B SaaS companies hire expensive SDRs to outbound enterprise accounts. Notion realized their users enjoyed showing off their complex productivity setups. By making templates 1-click shareable, thousands of creators built lucrative businesses selling Notion templates ($10K-$100K/mo). These creators effectively became Notion's unpaid, incentivized global marketing army."
      },
      {
        "title": "The Performance Bottleneck & The SQLite SQLite Migration",
        "insight": "Notion's greatest strength (everything is an interconnected block object) became its greatest engineering liability. Loading a page with 1,000 blocks required hundreds of React DOM renders and client-side memory overhead, leading to widespread complaints of sluggish mobile performance. Notion had to re-architect its client data layer using an embedded local SQLite engine to achieve instant local cache reads."
      }
    ],
    "critiqueAnd10x": {
      "proposal": "Automated 'Doc Freshness & Stale Wiki Janitor': AI continuously monitors workspace document view frequency, edits, and Slack discussions, automatically flagging deprecated policies and prompting document owners to verify or archive obsolete pages.",
      "tradeoffs": "Risk of false-positive archive warnings annoying team leads; requires deep background scanning compute across millions of enterprise blocks."
    },
    "interviewCheatSheet": "Notion democratized relational databases by wrapping them in an aesthetic, modular block canvas. Its growth engine is an unprecedented community template ecosystem that drives zero-CAC bottom-up adoption. Its strategic challenge is balancing infinite consumer flexibility with the permissions, speed, and governance demanded by Fortune 500 enterprises."
  },
  // ==========================================
  // WEEK 1: Consumer Retention & Habit Formation
  // ==========================================
  {
    id: "duolingo",
    week: 1,
    day: 1,
    name: "Duolingo",
    category: "Consumer EdTech",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    tagline: "Gamified micro-learning built on behavioral psychology & streak loss-aversion",
    heroMetric: "500M+ total users, 100M+ MAU, 30M+ DAU (>60% DAU/MAU)",
    
    // 1. WHAT ACTUALLY IS THE PRODUCT?
    whatIsTheProduct: {
      summary: "A mobile-first language and learning platform that turns 300+ hours of academic language curricula into 3-minute bite-sized multiple-choice puzzles, backed by an in-app game economy.",
      coreSurfaces: [
        {
          name: "The Linear Learning Path (The 'Snake' UI)",
          detail: "A single, unbranching vertical path of colorful circular stepping stones. Every lesson mixes speaking, listening, translation, and matching. Users cannot skip ahead unless they pass a checkpoint test."
        },
        {
          name: "The Game Economy (Hearts, Gems, Streak Society)",
          detail: "Free users have 5 'Hearts' that deplete with wrong answers, refilling slowly over hours or instantly by watching ads. Gems are spent on 'Streak Freezes' ($2.99 equivalent). Passing 365 days unlocks exclusive 'Streak Society' app icons and VIP perks."
        },
        {
          name: "Duolingo English Test (DET) — The B2B Disrupter",
          detail: "A \$59 computer-adaptive test taken at home via webcam with AI-driven proctoring, certified by over 4,500 universities (including Yale and Columbia) as a full replacement for the \$250 TOEFL/IELTS exam."
        },
        {
          name: "Duolingo Max (Generative AI Tier)",
          detail: "A premium \$30/month tier powered by OpenAI GPT-4 providing 'Explain My Answer' (instant grammar diagnosis) and 'Roleplay' (conversational voice simulations with characters like Lily and Oscar)."
        }
      ]
    },

    // 2. REAL DEMOGRAPHICS & USER SCALE
    demographics: {
      geography: "74% of users are outside North America. Fastest growing regions: Latin America, India, and Southeast Asia. However, the US, UK, and Western Europe generate >65% of paid subscription revenue.",
      motivation: "Over 50% of global users are learning English (for university admission, visas, or career promotion). Only in wealthy Western markets is language learning a hobby for vacation tourism.",
      ageDistribution: "45%+ under 25 years old (heavy Gen Z & student skew, accelerated by Duo's unhinged 12M-follower TikTok presence).",
      retentionBenchmark: "DAU/MAU ratio exceeds 60% among users with >7-day streaks (rivaling Instagram and WhatsApp in daily open habits)."
    },

    // 3. NAMED, MEMORABLE USER PERSONAS
    personas: [
      {
        name: "Rajesh (23, Mumbai) — 'The Visa Aspirant'",
        archetype: "High-Stakes Economic Mobility",
        goal: "Wants to pass the Duolingo English Test (DET) to qualify for a Canadian graduate visa.",
        painPoint: "Traditional TOEFL classes cost \$300+ and test centers are a 4-hour train ride away.",
        jtbd: "Help me certify my English proficiency at home for \$59 so I can unlock a foreign university degree.",
        behavior: "High completion, practices 45 mins/day, zero interest in fun cartoon animations—values test simulation rigor."
      },
      {
        name: "Emma (28, London) — 'The Guilt-Free Scroller'",
        archetype: "Casual Dopamine Replacement",
        goal: "Wants to learn conversational Italian before a 4-day Amalfi holiday, but mostly wants to stop doomscrolling TikTok on the Tube.",
        painPoint: "Language textbooks are boring and grammar charts cause immediate cognitive exhaustion after a 9-hour workday.",
        jtbd: "Give me a 3-minute feeling of virtuous productivity while commuting so I don't feel guilty about screen time.",
        behavior: "Strictly opens app at 8:30 AM on the train, panics if streak is at risk, relies on Streak Freezes on weekends."
      },
      {
        name: "Mateo (34, Chicago) — 'The Heritage Reconnector'",
        archetype: "Identity & Emotional Belonging",
        goal: "Second-generation immigrant who wants to speak conversational Spanish with his grandmother without feeling embarrassed.",
        painPoint: "Shame and imposter syndrome when speaking with native family members.",
        jtbd: "Build my confidence and basic vocabulary in private without fear of judgment before family gatherings.",
        behavior: "Uses voice-listening exercises, sensitive to pronunciation corrections, highly loyal long-term subscriber."
      }
    ],

    // 4. CRITICAL PM NUANCES (What top interviewers look for)
    nuances: [
      {
        title: "The 'Snake UI' Redesign (2022): Why Killing User Choice Boosted Retention",
        insight: "In 2022, Duolingo killed its iconic branching 'Tree' (where users picked what to study next) and forced everyone into a single linear path. Users revolted online with petitions. Why did Duolingo do it? Data showed that choice-paralysis was the #1 cause of silent churn: users spent 4 minutes wondering whether to do 'Food' or 'Travel', felt decision fatigue, and closed the app. The linear snake removed decision fatigue completely, lifting D30 retention by 14%."
      },
      {
        title: "The 23.5-Hour Notification Timing Secret",
        insight: "Duolingo does NOT send daily reminders at 24.0 hours. They time push alerts at exactly 23.5 hours after your previous session. Why? If you practiced yesterday at 8:00 AM on the bus, a reminder at 7:30 AM catches you right as you sit down for your commute, catching you in the exact same psychological context before your day gets busy."
      },
      {
        title: "The B2B Trojan Horse: Disrupting TOEFL with Webcams",
        insight: "While consumer competitors (Babbel, Rosetta Stone) fought over \$10/mo hobbyists, Duolingo attacked the \$2B standardized testing monopoly. By building computer vision algorithms that track eye-movements and typing rhythms through a laptop webcam, they created the Duolingo English Test (DET). It generates pure 90%+ gross margin revenue and locks in universities."
      },
      {
        title: "The Mascot Shift: Abandoning EdTech for Unhinged TikTok Culture",
        insight: "Duolingo's marketing team stopped posting tips on verb conjugations. Instead, they bought a 7-foot green owl suit and turned Duo into an unhinged, aggressive corporate menace on TikTok, obsessing over pop stars like Dua Lipa. CAC dropped to near-zero as Gen Z organically downloaded the app to join the cultural meme."
      }
    ],

    // 5. CRITIQUE & "HOW TO 10X IT"
    critiqueAnd10x: {
      proposal: "Dynamic AI Voice Phone-Call Simulation: Instead of multiple-choice tapping, users receive simulated 2-minute phone calls from realistic characters (e.g., ordering a taxi in Madrid or checking into a hotel in Paris) with dynamic latency and emotional feedback.",
      tradeoffs: "High inference cost of real-time voice-to-voice LLMs vs freemium margins; introduces conversational performance anxiety for shy casual users who prefer low-stress tapping."
    },

    // 6. INTERVIEW CHEAT SHEET (Memorize for PM loops)
    interviewCheatSheet: "Duolingo is a retention engine disguised as an education company. It trades academic rigor for dopamine loops (loss-aversion streaks, 23.5h notification windows, and the forced-linear Snake UI to eliminate choice paralysis). It monetizes via high-margin streak preservation (Super) and its B2B testing disruption (DET)."
  },

  {
    id: "strava",
    week: 1,
    day: 2,
    name: "Strava",
    category: "Social Fitness",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
    tagline: "The athlete's social network turning solitary telemetry into high-status social proof",
    heroMetric: "120M+ athletes, 40B+ activities uploaded, 10M+ weekly activities",

    whatIsTheProduct: {
      summary: "A mobile and smartwatch fitness tracker combined with an asynchronous social network, where athletes record GPS activities, compete on crowdsourced route stretches ('Segments'), and exchange social validation ('Kudos').",
      coreSurfaces: [
        {
          name: "Crowdsourced 'Segments' & Digital Leaderboards",
          detail: "Any user can designate a stretch of road (e.g. a 0.5-mile hill climb) as a 'Segment'. Every runner or cyclist who ever passes through that GPS box is automatically ranked on an all-time and annual leaderboard. The #1 man earns King of the Mountain (KOM), #1 woman earns Queen of the Mountain (QOM)."
        },
        {
          name: "The Kudos Social Feed & Activity Detail",
          detail: "An Instagram-style feed displaying route GPS maps, elevation profiles, pace splits, heart-rate zones, and photos. Users interact via 'Kudos' (likes) and comments."
        },
        {
          name: "Hardware-Agnostic Bluetooth & Sensor Aggregation",
          detail: "Syncs seamlessly with Garmin, Apple Watch, Wahoo, Polar, Suunto, and Peloton. Strava acts as the universal social layer on top of fragmented hardware devices."
        },
        {
          name: "Strava Metro (Urban Planning Data Engine)",
          detail: "Aggregates and de-identifies billions of bike and pedestrian GPS traces, selling analytics to city departments of transportation to design safer bike lanes and pedestrian zones."
        }
      ]
    },

    demographics: {
      geography: "Strongest in Europe (UK, France, Spain, Germany) and the US, with massive growth in Latin America and Australia. Cycling skew historically, now evenly split between running, trail running, and cycling.",
      motivation: "Affluent, performance-driven fitness enthusiasts with high disposable income. Average Strava subscriber income exceeds \$90,000/year (spending on \$1,500+ bikes, running shoes, and GPS gear).",
      ageDistribution: "Core demographic is 25-45 years old (working professionals balancing fitness with social validation).",
      retentionBenchmark: "Weekly active retention exceeds 70% during peak outdoor training seasons (spring to autumn)."
    },

    personas: [
      {
        name: "Julian (36, Munich) — 'The Amateur Racer'",
        archetype: "Status-Driven Competitive Athlete",
        goal: "Wants to claim the local KOM crown on the steepest hill climb in his district and track training load.",
        painPoint: "Garmin Connect provides deep telemetry but has zero social clout; none of his friends look at it.",
        jtbd: "Give me public recognition and proof that I am the fastest cyclist in my local neighborhood.",
        behavior: "Subscribed to paid Strava Summit, obsessively checks segment split seconds, tracks bike component mileage."
      },
      {
        name: "Chloe (29, San Francisco) — 'The Weekend Run-Clubber'",
        archetype: "Community & Identity Builder",
        goal: "Wants to train for a half-marathon with her local running club and feel connected to peers.",
        painPoint: "Running alone at 6:00 AM in the fog feels painful and lonely without accountability.",
        jtbd: "Validate the effort of my morning workout with instant Kudos from friends so I feel part of an athletic tribe.",
        behavior: "Takes photos of sunrise runs, posts weekly summaries on Instagram Stories, gives Kudos generously."
      },
      {
        name: "David (45, Austin) — 'The Urban Commuter'",
        archetype: "Utility & Health Habit",
        goal: "Logs his daily 8-mile bike commute to work to monitor calorie expenditure and heart health.",
        painPoint: "Forgets to record rides manually or loses data when switching between Apple Watch and bike sensors.",
        jtbd: "Silently log my physical activity across devices and show me my annual mileage totals without hassle.",
        behavior: "Set-it-and-forget-it user; rarely comments, but values the end-of-year 'Year in Sport' graphic."
      }
    ],

    nuances: [
      {
        title: "The 'Segment' Genius: Micro-Territorial Warfare",
        insight: "Strava didn't just build a social network; they created asynchronous digital real estate. A hill 2 blocks from your house is a competitive arena. You can race your neighbor without ever coordinating schedules or running at the same hour. This crowdsourced game loop generates endless free content and competitive tension."
      },
      {
        title: "Hardware Independence as a Defensive Moat",
        insight: "Garmin, Apple, and Wahoo have billion-dollar hardware budgets. If Strava tried to make a smartwatch, they would have died. Instead, Strava positioned itself as the open Switzerland of fitness: no matter what watch, heart-rate strap, or power meter you buy, Strava is where the data lives. Hardware companies are commoditized; Strava owns the social layer."
      },
      {
        title: "The Paywall Gamble: Moving Leaderboards Behind Subscription (2020)",
        insight: "In 2020, Strava was burning venture capital. In a daring PM move, they took full Segment leaderboards (previously free for 10 years) and locked them behind an \$11.99/mo paywall. Reddit exploded with outrage. The result? Subscriptions surged by 400%, turning Strava cash-flow positive and proving that athletes will pay real money for competitive status."
      }
    ],

    critiqueAnd10x: {
      proposal: "Safety & Air-Quality Dynamic Route Orchestrator: Real-time rerouting around high-traffic roads, wildfire smoke, or unsafe unlit trails based on aggregate Strava community telemetry.",
      tradeoffs: "High liability risks if an athlete gets injured on a recommended route; background route computation accelerates smartphone battery drain."
    },

    interviewCheatSheet: "Strava is the digital locker room for athletes. Its moat is crowdsourced 'Segments' (asynchronous local competition) and hardware-agnostic data aggregation (Garmin/Apple Watch). It monetizes via high-status peer recognition, leaderboard subscriptions, and B2B urban planning telemetry (Strava Metro)."
  },

  {
    id: "linear",
    week: 2,
    day: 1,
    name: "Linear",
    category: "B2B SaaS / Project Management",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    tagline: "The opinionated, keyboard-first issue tracker that proved software craft is a competitive moat",
    heroMetric: ">$35M ARR, >10,000 paying tech startups (OpenAI, Vercel, Ramp, Cash App)",

    whatIsTheProduct: {
      summary: "A high-performance project management and issue-tracking tool built specifically for high-velocity software engineering teams, designed with sub-50ms latency, keyboard navigation, and opinionated sprint cycles.",
      coreSurfaces: [
        {
          name: "Sub-50ms Issue Creation & Command Menu (`Cmd+K`)",
          detail: "Pressing `C` instantly opens a lightweight issue composer. Pressing `Cmd+K` opens a global command palette allowing any status update, assignee change, or project transition in 2 keystrokes without touching a mouse."
        },
        {
          name: "Opinionated Engineering Workflows (Cycles & Triage)",
          detail: "Unlike Jira's infinite blank configurations, Linear enforces modern engineering disciplines: automatic 1-to-2 week 'Cycles', a mandatory 'Triage' inbox for customer bug intake, and an auto-archiving backlog that prevents stale tickets from lingering."
        },
        {
          name: "Local-First Realtime Synchronization Engine",
          detail: "Built on an offline-first architecture with in-browser SQLite/IndexedDB. Edits are recorded instantly against local state, and merged asynchronously in the background via operational transforms."
        },
        {
          name: "Git & Pull Request Deep Integration",
          detail: "Branches named `username/issue-123` link automatically. Opening a GitHub PR moves the ticket to 'In Review'; merging the PR automatically marks the issue 'Done' and posts the commit link."
        }
      ]
    },

    demographics: {
      geography: "Global tech startup hubs (San Francisco, New York, London, Berlin, Bengaluru). Over 70% of venture-backed Y Combinator startups now default to Linear over Jira.",
      customerSize: "Sweet spot is high-growth software teams from 5 to 500 engineers. Rapidly expanding into mid-market and enterprise tech orgs (OpenAI, Scale AI).",
      userPersonas: "Software engineers, tech leads, engineering managers, and technical PMs who despise administrative bureaucratic overhead.",
      retentionBenchmark: "Net Revenue Retention (NRR) exceeds 135%, driven by organic team expansion from engineering into design and product tiers."
    },

    personas: [
      {
        name: "Alex (31, San Francisco) — 'The Flow-State Staff Engineer'",
        archetype: "Efficiency-Obsessed Builder",
        goal: "Wants to track sprint deliverables and link pull requests without breaking his coding flow state.",
        painPoint: "Hates Jira because opening a ticket takes 4 seconds of loading spinners and requires 8 mandatory dropdown clicks.",
        jtbd: "Let me log bugs and close tickets using only keyboard shortcuts in under 3 seconds so I can get back to writing code.",
        behavior: "Never touches the mouse, advocates fiercely for Linear during startup tooling migrations."
      },
      {
        name: "Maya (34, New York) — 'The High-Velocity Product Manager'",
        archetype: "Roadmap & Cross-Functional Orchestrator",
        goal: "Needs clear visibility into engineering progress, sprint velocity, and customer bug triage without running micromanaged daily standups.",
        painPoint: "Tickets in legacy tools get stale; backlogs turn into 800-ticket graveyards where nothing ever gets deleted.",
        jtbd: "Give me an automated view of sprint progress and auto-archive dead issues so my roadmap stays honest and fresh.",
        behavior: "Lives in the Project Roadmap view, relies on Linear's Slack bot for automated release notifications."
      },
      {
        name: "Siddharth (40, Austin) — 'The VP of Engineering'",
        archetype: "Enterprise Scaling & Velocity Leader",
        goal: "Wants to accelerate engineering cycle time and attract top talent who refuse to work in bloated corporate software.",
        painPoint: "Company-wide velocity slows down as Jira consultants add 40 custom fields and complicated approval stages.",
        jtbd: "Standardize our 120-person engineering organization on a modern, opinionated workflow that eliminates sprint planning arguments.",
        behavior: "Authorizes the company-wide credit card upgrade; values SOC2 compliance, SAML SSO, and GitHub integrations."
      }
    ],

    nuances: [
      {
        title: "The Anti-Jira Moat: Opinionated Defaults Over Customization",
        insight: "Jira's sales pitch was: 'You can configure anything!' This led to corporate bureaucracy where every department added mandatory form fields, making tickets take 5 minutes to submit. Linear's radical insight was that constraints liberate: by offering ONLY Backlog, Todo, In Progress, Done, and Canceled, they eliminated tooling debates and restored engineering velocity."
      },
      {
        title: "The Architecture Secret: Local-First Synchronization",
        insight: "Linear does not wait for a cloud HTTP response before rendering state on your screen. Everything writes to an in-browser SQLite database in 5ms. A background web-worker syncs mutations to the cloud. This 'Local-First' architecture makes the app feel like native desktop software, completely eliminating click-latency."
      },
      {
        title: "Bottom-Up Developer Adoration as a Sales Force",
        insight: "Linear doesn't employ a traditional army of aggressive outbound enterprise SDRs. Instead, engineers use it at home or in hackathons, fall in love with the speed, and demand it when they join their next company. It is the purest example of Product-Led Growth (PLG) in enterprise devtools."
      }
    ],

    critiqueAnd10x: {
      proposal: "Automated PR-to-Spec Bidirectional Sync: AI analyzes merged code diffs and automatically updates the high-level PRD and documentation in Linear without PMs writing manual release notes.",
      tradeoffs: "Risk of inaccurate automated summaries misleading QA testers or non-technical business stakeholders."
    },

    interviewCheatSheet: "Linear proved that software craft, sub-50ms speed, and opinionated constraints beat infinite enterprise customization (Jira). Built on a local-first client database with keyboard-driven ergonomics, it wins bottoms-up with engineers before expanding across product, design, and executive tiers."
  },

  {
    id: "spotify",
    week: 1,
    day: 3,
    name: "Spotify",
    category: "Consumer Media & Streaming",
    badgeColor: "bg-green-50 text-green-700 border-green-200",
    tagline: "Algorithmic serendipity that transitioned music from an ownership commodity into a personalized utility",
    heroMetric: "600M+ MAU, 230M+ Premium Subscribers across 180+ markets",

    whatIsTheProduct: {
      summary: "A global audio streaming platform that converted a pirated music industry into a frictionless freemium streaming utility, powered by vector recommendation algorithms and ubiquitous hardware handoff.",
      coreSurfaces: [
        {
          name: "Sub-200ms Instant Audio Playback",
          detail: "Proprietary streaming buffer technology that starts audio playback in under 200ms anywhere in the world, creating the psychological illusion that the entire 100M-song global catalog lives on your local device."
        },
        {
          name: "Personalized Algorithmic Feeds (Discover Weekly, Daily Mix)",
          detail: "Collaborative filtering, raw audio acoustic analysis (spectrograms), and NLP blog scraping that drops bespoke 30-song playlists into user libraries every Monday morning."
        },
        {
          name: "Spotify Connect (Universal Hardware Handshake)",
          detail: "A proprietary device discovery protocol allowing seamless audio handoff between smartphones, desktop computers, smart speakers, car dashboards, and game consoles without Bluetooth pairing friction."
        },
        {
          name: "Spotify Wrapped (Viral Annual Social Campaign)",
          detail: "An end-of-year data visualization turning private listening telemetry into high-status, shareable social media stories, generating billions of organic impressions each December."
        }
      ]
    },

    demographics: {
      geography: "Global footprint across 180+ countries. Europe and North America drive ~60% of subscribers; Latin America and Southeast Asia are fastest growing volume markets.",
      userSplit: "Broad cross-generational appeal: 65% under 35 (heavy Millennial & Gen Z music fans), but expanding into older demographics via podcasts and audiobooks.",
      businessMarginCeiling: "Gross margins are structurally squeezed at ~26-28% because ~70% of every streaming dollar is paid out directly in royalties to major record labels (Universal, Sony, Warner).",
      retentionBenchmark: "Monthly subscriber churn is remarkably low at ~3.5-3.8%, driven by irreplaceable personal playlist libraries."
    },

    personas: [
      {
        name: "Liam (22, Toronto) — 'The Genre-Fluid Music Explorer'",
        archetype: "Discovery & Cultural Identity",
        goal: "Find niche indie and underground electronic tracks to define his musical aesthetic.",
        painPoint: "Radio and traditional charts only play mainstream top-40 pop; manual searching is tedious.",
        jtbd: "Surprise me every week with obscure songs I love so I can curate my identity with zero effort.",
        behavior: "Saves 10+ tracks from Discover Weekly, shares Spotify Wrapped on Instagram Stories, listens 4+ hours/day."
      },
      {
        name: "Sarah (38, Chicago) — 'The Frictionless Backgrounder'",
        archetype: "Daily Utility & Multi-Device Convenience",
        goal: "Wants calming background audio while working, driving, or cooking dinner for her kids.",
        painPoint: "Fumbling with Bluetooth disconnects and manual playlist curation.",
        jtbd: "Give me instant background sound that transfers from my car to my kitchen smart speaker with one tap.",
        behavior: "Family Plan subscriber; uses Spotify Connect constantly; relies heavily on curated mood mixes ('Focus', 'Chill Hits')."
      },
      {
        name: "Marcus (32, London) — 'The Long-Form Commuter'",
        archetype: "Information & Talk Audio Consumer",
        goal: "Listens to deep-dive business, tech, and true-crime podcasts during his 45-minute subway commute.",
        painPoint: "Managing separate podcast and music apps with clunky chapter navigation.",
        jtbd: "Unify my talk audio and morning music in a single offline-capable app with smart resume.",
        behavior: "Listens at 1.5x speed, downloads episodes offline, represents high-margin ad inventory for Spotify."
      }
    ],

    nuances: [
      {
        title: "The 26% Gross Margin Trap & The Podcast Pivot",
        insight: "Unlike traditional software companies with 85% gross margins, Spotify is economically hamstrung by the 'Big Three' music labels (Universal, Sony, Warner), who extract ~70% of music royalties. Every time Spotify signs up 10M more music listeners, labels get richer. To survive, Spotify spent \$1B+ acquiring podcast studios (Joe Rogan, Gimlet, Bill Simmons) because podcasts have fixed costs: once produced, streaming them to 50M users carries zero music royalty costs, unlocking lucrative dynamic audio advertising."
      },
      {
        title: "The Sub-200ms Rule: Why Speed Beat Piracy",
        insight: "Daniel Ek understood that you cannot beat free with price—you can only beat free with convenience and speed. Pirate sites (LimeWire, Pirate Bay) took 10 minutes to download a song and were filled with viruses. Spotify mandated that audio must start in under 200ms—instantaneous to the human ear. That speed created the psychological feeling that you already owned every song on earth."
      },
      {
        title: "Spotify Wrapped: The Greatest Zero-CAC Marketing Campaign",
        insight: "In December, Spotify doesn't buy expensive Super Bowl ads. Instead, they package your own personal data into beautiful, colorful story slides ('You listened to 48,000 minutes; you are in the top 1% of Drake fans'). Users proudly screenshot and post it to Instagram, Facebook, and Twitter, turning 200M+ users into unpaid brand ambassadors for 2 weeks straight."
      }
    ],

    critiqueAnd10x: {
      proposal: "Superfan Direct-to-Artist Monetization: Enable artists to sell exclusive pre-release demos, VIP concert tickets, and virtual backstage Q&As directly inside the 'Now Playing' screen.",
      tradeoffs: "Record labels demand contractual cuts of all ancillary artist monetization; risks cluttering the minimalist listening UI."
    },

    interviewCheatSheet: "Spotify conquered music piracy by making streaming sub-200ms fast. Its competitive moats are Spotify Connect (seamless cross-device hardware handoff) and viral cultural loops like Spotify Wrapped. Its existential challenge is label royalties (~70% payout), forcing its high-margin diversification into podcasts and audiobooks."
  },

  {
    id: "airbnb",
    week: 1,
    day: 4,
    name: "Airbnb",
    category: "Two-Sided Marketplaces",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    tagline: "The bilateral trust architecture and category engine that turned residential real estate into liquid global hospitality",
    heroMetric: ">8M active listings, >1.5B guest arrivals, 90%+ organic/direct traffic, ~$11B revenue",

    // 1. WHAT ACTUALLY IS THE PRODUCT?
    whatIsTheProduct: {
      summary: "A global two-sided accommodation and experience marketplace connecting property hosts with travelers across 220+ countries, transforming private residential real estate into a liquid, searchable hospitality network underpinned by bilateral identity verification, dynamic geospatial discovery, institutional damage insurance, and algorithmic pricing.",
      coreSurfaces: [
        {
          name: "Dynamic Map & Airbnb Category Search",
          detail: "Replaced the traditional destination/date search box with 60+ algorithmic categories (e.g. 'OMG!', 'Cabins', 'Design', 'Mansions') powered by computer vision curation. Coupled with a sub-second bounding-box map rendering engine that clusters millions of listings dynamically as users pan across geographic regions."
        },
        {
          name: "The Bilateral Trust & Identity System",
          detail: "Multi-factor identity verification pairing government ID scans with real-time biometric facial recognition and automated risk scoring (evaluating reservation lead time, distance from home, and guest age to proactively block unauthorized house parties before booking)."
        },
        {
          name: "AirCover for Hosts (Embedded Insurance Architecture)",
          detail: "Comprehensive protection embedded into every listing at zero marginal cost: $3M in property damage protection (including art, valuables, and pet damage), $1M in host liability insurance, income loss coverage during repairs, and a 24-hour safety line, effectively removing the #1 objection preventing residential homeowners from listing."
        },
        {
          name: "Smart Pricing & Dynamic Revenue Management Engine",
          detail: "An automated algorithmic pricing model that adjusts nightly rates in real time based on 70+ signals including local market search spikes, airport flight arrivals, seasonal demand patterns, competitor occupancy, lead-time elasticity, and host-configured minimum/maximum price boundaries."
        }
      ]
    },

    // 2. REAL DEMOGRAPHICS & USER SCALE
    demographics: {
      geography: ">8M active listings across 100,000+ cities in 220+ countries and regions. While North America and Western Europe account for ~65% of Gross Booking Value (GBV), Latin America (Brazil, Mexico) and Asia-Pacific represent the fastest-growing supply and demand corridors.",
      motivation: "Guests seek authentic local neighborhood immersion, multi-bedroom spaces with full kitchens for group/family economics, or 30-90 day remote-work flexibility. Hosts (>85% individual homeowners) list spare rooms or primary residences to offset rising mortgages and combat inflation.",
      ageDistribution: "Over 60% of guests are Millennials and Gen Z (ages 18-40), driving high mobile app adoption and flexible non-urban booking patterns. Senior hosts (60+) represent the fastest-growing and highest-rated host demographic.",
      retentionBenchmark: "Over 90% of global web and app traffic is direct or unpaid organic—an unmatched brand moat in travel. Repeat guest booking rate exceeds 65% within 24 months, with an implied platform take-rate of ~13.5-14% on ~$73B+ in annual Gross Booking Value (GBV)."
    },

    // 3. NAMED, MEMORABLE USER PERSONAS
    personas: [
      {
        name: "Elena (29, Lisbon) — 'The Digital Nomad Remote Worker'",
        archetype: "Extended-Stay Global Remote Worker",
        goal: "Book verified 30-to-90 day work-ready sanctuaries with certified 100+ Mbps WiFi, dedicated ergonomic desks, and full kitchen facilities.",
        painPoint: "Deceptive listing photos, unstable internet cutting out during client presentations, surprise utility bills, and astronomical cleaning fees.",
        jtbd: "Give me a certified, work-ready home anywhere in the world for 1–3 months with verified internet speeds and transparent monthly discounts so I can live friction-free without a long-term lease.",
        behavior: "Filters strictly by 'Dedicated Workspace' and 'Fast WiFi' (checking the in-app M-Lab speed test badge), books 28+ night increments to trigger 20-30% monthly discounts, and messages hosts to inspect chair ergonomics."
      },
      {
        name: "Marcus (42, Denver) — 'The Mortgage-Offset Host'",
        archetype: "Suburban Side-Income Micro-Entrepreneur",
        goal: "Monetize a renovated basement suite or second home to reliably cover a $3,200 monthly mortgage while retaining property control.",
        painPoint: "Anxiety over rowdy party guests trashing his property, complex municipal short-term rental licensing, and the operational headache of coordinating turnover cleanings between 11 AM checkout and 3 PM check-in.",
        jtbd: "Turn my extra real estate into passive, insured income without risking property destruction or consuming 20 hours a week in hotelier operations.",
        behavior: "Mandates verified government IDs and prior 5-star guest reviews before approving reservations; activates AirCover damage protection; sets strict Smart Pricing floors; uses automated smart locks synced to the Airbnb API."
      },
      {
        name: "Priya (38, London) — 'The Family Reunion Organizer'",
        archetype: "High-Stakes Group Logistics Planner",
        goal: "Coordinate a memorable week-long retreat for 10 people (grandparents, siblings, toddlers) in a countryside villa with communal cooking and a child-safe fenced yard.",
        painPoint: "Hotel room blocks isolate the family across impersonal corridors and cost 3x more; surprise checkout chore lists ('wash linens, vacuum rugs, take trash to dumpster') despite paying a $300 cleaning fee.",
        jtbd: "Bring my multi-generational family together under a single welcoming roof with shared living spaces so grandparents and grandchildren can bond comfortably.",
        behavior: "Curates Collaborative Wishlists with voting pins for relatives, inspects crib/highchair amenities, scrutinizes 1-star reviews for safety warnings or cleanliness red flags, and books 6–9 months in advance."
      }
    ],

    // 4. CRITICAL PM NUANCES (What top interviewers look for)
    nuances: [
      {
        title: "The Craigslist Cold-Start Hack (2009–2010): The Reverse-Engineered Growth Loop",
        insight: "When Airbnb had zero brand awareness and negligible marketing capital, they engineered a dual-sided technical exploit against Craigslist. First, they built a seamless reverse-engineered form automation: when a host listed on Airbnb, a one-click prompt cross-posted to Craigslist with professional photos and HTML formatting, with inbound links pointing back to Airbnb. Second, automated scripts messaged Craigslist vacation rental posters alerting them to Airbnb. This piggybacked on Craigslist's massive supply-demand liquidity without spending a single dollar on performance marketing, solving the cold-start problem in key gateway cities (NYC, SF)."
      },
      {
        title: "The Double-Blind Simultaneous Review System: Eliminating Stranger-Danger & Retaliation Bias",
        insight: "In a standard sequential review architecture (like legacy eBay), guests who experienced a subpar or dirty stay hesitated to leave an honest review because hosts could retaliate with a 1-star guest review ('guest was loud and broke house rules'), destroying the guest's reputation. This resulted in artificial review inflation where everything was rated 5 stars. Airbnb solved this with a strict 14-day double-blind reveal mechanism: neither guest nor host can view the other's review until both parties have submitted their text or the 14-day post-checkout window expires. This structural game-theoretic fix unlocked authentic feedback, restored mutual trust, and kept review credibility high."
      },
      {
        title: "Why 90% Direct Traffic Insulates Airbnb from Google's 'Travel Ad Tax'",
        insight: "Online travel aggregators (OTAs) like Booking Holdings and Expedia are structurally subservient to Google, funneling $5B+ annually (often 30-45% of total revenue) into Google Travel / AdWords to bid on commoditized hotel keywords ('hotels in Miami'). In March 2020, facing pandemic collapse, Brian Chesky made the bold product gamble to slash performance marketing by nearly 90% and re-center the company around product innovation, PR, and brand design. Today, over 90% of Airbnb's traffic is direct or organic. Because guests think 'I want to Airbnb a cabin' rather than 'search accommodation on Google', Airbnb maintains a 35%+ Free Cash Flow margin and pricing power that traditional OTAs cannot match."
      },
      {
        title: "The 'Airbnb Rooms' Pivot (2023): Defusing Consumer Price Fatigue with the 'Host Passport'",
        insight: "By 2022, guest backlash against hidden cleaning fees, exorbitant cleaning chore lists, and soaring nightly rates threatened Airbnb's core brand promise ('Airbnb is more expensive than a Marriott'). Chesky responded with 'Airbnb Rooms'—re-anchoring the platform to its affordable couch-surfing origins with private rooms averaging $67/night. The critical product challenge wasn't pricing; it was the psychological dread of sharing a bathroom with an unknown host. Airbnb engineered the 'Host Passport': an intimate profile card displaying the host's employer, alma mater, musical preferences, fun facts, and guest interaction style, lowering social friction and humanizing strangers through relatable affinity data."
      }
    ],

    // 5. CRITIQUE & 'HOW TO 10X IT'
    critiqueAnd10x: {
      proposal: "Turnkey Co-Host Operating System & Standardized Housekeeping Protocol: Transform Airbnb from an asset listing board into an automated distributed hotel network by algorithmically pairing passive property owners with vetted local Super-Co-Hosts (for a 15-20% fee split) and offering an in-app standardized housekeeping certification with photo-verified turnover checklists, guaranteeing zero checkout chore lists for guests.",
      tradeoffs: "Elevates marketplace liability and operational overhead; risks alienating independent boutique hosts who value bespoke control; introduces potential municipal regulatory scrutiny and labor classification risks for dispatched turnover service workers."
    },

    // 6. INTERVIEW CHEAT SHEET (Memorize for PM loops)
    interviewCheatSheet: "Airbnb is a two-sided marketplace whose foundational moat is institutional trust between strangers (double-blind review game theory, AirCover, and ID verification) reinforced by unprecedented 90%+ organic brand traffic that insulates it from Google's performance marketing ad tax. Unlike OTAs competing on commoditized hotel room pricing, Airbnb dominates via unique, proprietary supply liquidity (>8M listings across 100,000 cities). In PM loops, highlight how brand-led category curation and bilateral risk mitigation beat performance-marketing dependency."
  }
];

export const WEEKLY_QUIZZES = [
  // Keeping quizzes clean and validated
  {
    week: 1,
    title: "Week 1 Boss Quiz: Consumer Habits, Retention & Marketplace Trust",
    productsCovered: ["Duolingo", "Strava", "Spotify", "Airbnb"],
    badgeName: "Consumer & Marketplace Master",
    questions: [
      {
        id: "w1_q1",
        question: "Why did Duolingo kill its branching 'Tree' UI in 2022 and force a single linear 'Snake' path?",
        options: [
          "To cut server costs on graphics rendering",
          "Because choice-paralysis was the #1 cause of silent churn; removing decision fatigue lifted D30 retention by 14%",
          "Apple App Store mandated all education apps have linear progression",
          "They ran out of lesson material for branching paths"
        ],
        correctIndex: 1,
        explanation: "Data proved that giving users choices caused decision fatigue. Removing choice and forcing a single linear path eliminated friction and lifted D30 retention."
      },
      {
        id: "w1_q2",
        question: "What is Spotify's primary structural margin challenge compared to traditional B2B SaaS?",
        options: [
          "High cloud server bandwidth costs",
          "Record labels (Universal, Sony, Warner) take ~70% of music royalties, capping gross margins at ~26-28%",
          "Users refuse to listen to audio on smartphones",
          "Credit card processing fees take 40% of subscription revenue"
        ],
        correctIndex: 1,
        explanation: "Music royalties are variable marginal costs paid out to labels, which is why Spotify invested $1B+ in podcasts to build a fixed-cost audio asset."
      },
      {
        id: "w1_q3",
        question: "What strategic choice allows Strava to beat Apple and Garmin's proprietary software?",
        options: [
          "Strava manufactures its own smartwatches",
          "It acts as an open, hardware-agnostic social layer and introduced crowdsourced 'Segments' for asynchronous competition",
          "It bans all runners from using Garmin sensors",
          "It pays users cash rewards for every mile run"
        ],
        correctIndex: 1,
        explanation: "Strava refuses to be tied to one hardware vendor, letting all athletes compete on crowdsourced Segments regardless of what watch they wear."
      },
      {
        id: "w1_q4",
        question: "Why did Airbnb implement a 14-day 'Double-Blind' simultaneous review release system?",
        options: [
          "To comply with EU data retention regulations",
          "To eliminate retaliation bias and fear of negative counter-reviews, restoring authentic ratings and trust between strangers",
          "To give hosts extra time to dispute credit card chargebacks",
          "To prevent guests from editing photos uploaded to their reviews"
        ],
        correctIndex: 1,
        explanation: "In single-sided review systems, guests feared leaving truthful reviews because hosts would retaliate with a 1-star guest review. Double-blind simultaneous release eliminated retaliation bias."
      },
      {
        id: "w1_q5",
        question: "What strategic advantage allows Airbnb to generate ~35%+ Free Cash Flow margins compared to Booking.com or Expedia?",
        options: [
          "Airbnb charges hosts a 50% commission on every booking",
          "Over 90% of Airbnb's traffic is direct/organic, insulating them from spending billions on Google Travel search ads",
          "Airbnb owns all underlying real estate and depreciates it",
          "Airbnb only accepts non-refundable cryptocurrency payments"
        ],
        correctIndex: 1,
        explanation: "While traditional OTAs spend 30-45% of revenue re-acquiring customers via Google AdWords, Airbnb's brand power drives >90% direct traffic, protecting high operating margins."
      }
    ]
  }
];

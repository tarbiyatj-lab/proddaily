// ProdDaily Master PM Interview Curriculum Catalog
// Curated 1-Product-a-Day Senior & Staff PM Teardowns
// Designed for 10y Engineering + Top-Tier MBA Product Leadership

export const CURRICULUM_START_DATE = '2026-11-04';

export function getCurriculumDay() {
  const start = new Date('2026-11-04T00:00:00');
  const now = new Date();
  const diffTime = now.getTime() - start.getTime();
  const diffDays = Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)));
  return diffDays + 1;
}

export const ALL_CURRICULUM_PRODUCTS = [
  // ========================================================
  // DAY 6 (TODAY - NOV 9): FIGMA
  // ========================================================
  {
    id: "figma",
    week: 2,
    day: 6,
    releaseDate: "2026-11-09",
    name: "Figma",
    category: "Collaborative Design & Systems",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
    iconColor: "text-purple-600",
    tagline: "The browser-first WebGL multiplayer design tool that turned design into a team sport",
    heroMetric: "4M+ active designers, $20B Adobe buyout valuation offer, >150% enterprise NRR",
    whatIsTheProduct: {
      summary: "A browser-based vector graphics and UI prototyping tool built on C++ compiled to WebAssembly (Wasm) and WebGL, allowing cross-functional teams to design, prototype, and inspect production design systems collaboratively in real time.",
      coreSurfaces: [
        {
          name: "Multiplayer WebAssembly Vector Engine",
          detail: "Renders complex multi-screen canvas layouts at 60 FPS directly inside Chrome/Safari using custom WebGL shaders and sub-50ms multiplayer cursor synchronization."
        },
        {
          name: "Auto Layout & Component Variant Architecture",
          detail: "Mirrors CSS Flexbox logic so design components behave dynamically like real production code rather than static artboards."
        },
        {
          name: "Dev Mode & Design Tokens Inspection",
          detail: "Dedicated developer-first interface that translates design specs into production-ready Tailwind, CSS, SwiftUI, and Jetpack Compose code snippets."
        },
        {
          name: "FigJam (Asynchronous Team Brainstorming Canvas)",
          detail: "Lightweight, collaborative whiteboarding surface with sticky notes, voting widgets, and timers for sprint kickoffs and cross-functional design sprints."
        }
      ]
    },
    demographics: {
      geography: "Ubiquitous global adoption across North America, Western Europe, and Asia-Pacific. Standardized tool across 95% of top tech startups.",
      motivation: "Product designers, PMs, and software engineers needing a single source of truth without exporting PNGs and emailing zip files.",
      ageDistribution: "Core demographic: 22-45 digital product designers, frontend engineers, and product leaders.",
      retentionBenchmark: "World-class enterprise net retention (>150% NRR) driven by non-designers (PMs, engineers, marketers) creating view/comment seats."
    },
    personas: [
      {
        name: "Elena (30, San Francisco) — 'The Lead Product Designer'",
        archetype: "Design Systems Champion",
        goal: "Build scalable UI component libraries with Auto Layout variants that engineering can implement with zero pixel confusion.",
        painPoint: "Sketch required local file saving and Abstract version control syncs that constantly suffered merge conflicts.",
        jtbd: "Give me a single collaborative URL where PMs and engineers can comment directly on live prototypes without saving files.",
        behavior: "Lives in Figma 7 hours a day, publishes weekly UI kits, manages component documentation in FigJam."
      },
      {
        name: "Vikram (36, Seattle) — 'The Frontend Engineering Lead'",
        archetype: "Production Implementation Gatekeeper",
        goal: "Inspect spacing, padding tokens, and typography styles without asking designers for redline asset exports.",
        painPoint: "Opening heavy design files on slow laptops just to see the hex code for a button hover state.",
        jtbd: "Give me exact CSS flexbox padding, token variables, and SVG exports in 1 click so I can build frontend components quickly.",
        behavior: "Switches exclusively to Dev Mode, copies code snippets directly into VS Code."
      },
      {
        name: "Chloe (33, New York) — 'The Cross-Functional Product Manager'",
        archetype: "Spec & Requirements Orchestrator",
        goal: "Walk through end-to-end user flows with executive stakeholders and link user stories directly to design frames.",
        painPoint: "Designers working in isolation for 3 weeks and presenting finished screens that miss fundamental business constraints.",
        jtbd: "Let me drop comments directly on in-progress wireframes so product requirements and visual designs evolve together.",
        behavior: "Pins comments on prototype frames, embeds Figma links in Linear and Notion PRDs."
      }
    ],
    nuances: [
      {
        title: "The WebGL & WebAssembly Architecture Asymmetry",
        insight: "In 2012, everyone believed serious graphics software had to be a native desktop C++ executable (Photoshop, Sketch). Dylan Field and Evan Wallace gambled on WebGL and compiled C++ to WebAssembly in the browser. When Sketch users were still saving .sketch files to Dropbox, Figma users were sharing a single URL. This technological breakthrough redefined creative software distribution."
      },
      {
        title: "Expanding Beyond Designers: The 3:1 Non-Designer Seat Ratio",
        insight: "Figma's secret growth engine is that for every 1 paid designer license, there are 3 non-designers (PMs, QA testers, copywriters, developers, executives) viewing and commenting on the canvas. Monetizing these stakeholders created an unstoppable expansion loop that traditional designer-only tools could never match."
      },
      {
        title: "Design Systems as an Enterprise Lock-In Moat",
        insight: "Once a 5,000-person tech company encodes its color tokens, typography, and interactive component libraries into Figma, the switching cost becomes virtually insurmountable. Migrating an enterprise design system to an alternative tool takes 12–18 months of engineering effort."
      }
    ],
    critiqueAnd10x: {
      proposal: "Automated Bi-Directional Production Code Sync: An AI agent that inspects real-world React/SwiftUI code repos and warns designers in Figma when their design deviates from existing production design tokens.",
      tradeoffs: "High friction requiring git repository access and deep build pipeline integrations."
    },
    interviewCheatSheet: "Figma conquered the design industry by betting early on in-browser WebGL/Wasm performance and real-time multiplayer collaboration. Its moat is the organizational design system and the 3:1 ratio of non-designer seats that embed Figma into company-wide product development workflows."
  },

  // ========================================================
  // DAY 5 (NOV 8): AIRBNB
  // ========================================================
  {
    id: "airbnb",
    week: 1,
    day: 5,
    releaseDate: "2026-11-08",
    name: "Airbnb",
    category: "Two-Sided Marketplace & Hospitality",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    iconColor: "text-rose-600",
    tagline: "The peer-to-peer trust engine that turned spare bedrooms into a global travel powerhouse",
    heroMetric: "8M+ active listings, 450M+ guest arrivals/year across 100,000 cities, ~$10B annual revenue",
    whatIsTheProduct: {
      summary: "A global two-sided peer-to-peer travel accommodation platform connecting residential property hosts with travelers, underpinned by escrow payments, identity verification, and bilateral reputation loops.",
      coreSurfaces: [
        {
          name: "Search & Algorithmic Category Discovery",
          detail: "Spatial map search and intent-driven categories (OMG!, Design, Skiing, Cabins) that redistribute travel demand away from over-indexed tourist capitals to rural regions."
        },
        {
          name: "Host Management Operating System",
          detail: "Smart Pricing algorithms, multi-calendar synchronization, automated messaging playbooks, and instant payout rails for property owners."
        },
        {
          name: "AirCover (Bilateral Trust Architecture)",
          detail: "$3M damage protection, identity verification, and 24/7 rebooking protection that de-risks home sharing for conservative homeowners."
        },
        {
          name: "Guest-Host Real-Time Communication Hub",
          detail: "Integrated multilingual translation, keyless lock keypad codes, and dispute mediation workflows."
        }
      ]
    },
    demographics: {
      geography: "Present in over 100,000 cities across 220 countries and regions worldwide.",
      motivation: "Guests seek unique, spacious, cost-effective stays with kitchens; hosts seek passive rental income to pay mortgages.",
      ageDistribution: "Core guests: 20-45 leisure travelers, digital nomads, and family vacationers; hosts average 35-65 property owners.",
      retentionBenchmark: "Exceptional organic brand affinity (90%+ of traffic is direct or unpaid). High repeat booking frequency among family and long-term stay travelers."
    },
    personas: [
      {
        name: "Elena (31, Paris) — 'The Remote Working Digital Nomad'",
        archetype: "Long-Term Extended Stay Traveler",
        goal: "Book a comfortable, high-aesthetic apartment for 1 month with verified high-speed Wi-Fi and a dedicated workspace.",
        painPoint: "Hotels lack kitchens and laundry facilities; hosts misrepresent Wi-Fi speeds in descriptions.",
        jtbd: "Find a verified, fully equipped apartment in Lisbon for 4 weeks so I can live like a local while working my tech job remotely.",
        behavior: "Filters strictly by 'Fast Wi-Fi', reads the last 10 host reviews thoroughly, books 28+ day monthly stays for discounts."
      },
      {
        name: "Brian & Maria (48, Denver) — 'The Mountain Cabin Superhosts'",
        archetype: "Professional Micro-Hospitality Operators",
        goal: "Maximize occupancy and nightly RevPAR on their second property while avoiding difficult guests who party and damage amenities.",
        painPoint: "Managing cleaning turnaround schedules and worrying about guest noise complaints from neighbors.",
        jtbd: "Automate booking approvals and guest messaging while maintaining Superhost status and 4.9+ star ratings.",
        behavior: "Uses Smart Pricing, syncs cleaning calendars with TurnoverBnB, messages guests 24 hours prior to check-in."
      },
      {
        name: "Marcus (39, Chicago) — 'The Family Vacation Planner'",
        archetype: "Group Leisure Coordinator",
        goal: "Organize an annual reunion for 8 family members with enough bedrooms, a private pool, and child-safe amenities.",
        painPoint: "Hidden cleaning and service fees appearing at final checkout screen that blow the family budget.",
        jtbd: "Give me transparent total pricing for a 4-bedroom house with a fenced backyard so our family can relax without booking 3 cramped hotel rooms.",
        behavior: "Shares Airbnb wishlists with family members via WhatsApp to vote on candidate listings."
      }
    ],
    nuances: [
      {
        title: "Bilateral Trust as the Primary Barrier to Entry",
        insight: "Anyone can build a real estate listing website. Airbnb's moat is solving the acute psychological fear of letting a stranger sleep in your master bedroom. By building dual-blind reviews (neither party sees the other's feedback until both submit), verified government IDs, and $3M AirCover insurance, Airbnb turned an unthinkable taboo into a global habit."
      },
      {
        title: "Why 90% Direct Traffic Insulates Airbnb from Google's 'Travel Ad Tax'",
        insight: "Traditional online travel aggregators (Booking.com, Expedia) spend 30–45% of total revenue bidding on Google search keywords ('hotels in Miami'). In 2020, Brian Chesky slashed performance marketing by 90% and focused on product PR and brand design. Today, >90% of Airbnb's traffic is direct or organic, unlocking 35%+ Free Cash Flow margins."
      },
      {
        title: "The Category Pivot: Moving Demand from 'Where' to 'What'",
        insight: "Traditional travel sites start with: 'Where are you going and on what dates?'. Airbnb realized travelers often don't care about the specific city—they want an experience. Categories (Treehouses, Design, Beach) allowed Airbnb to redistribute booking demand to rural hosts and lower customer acquisition costs."
      }
    ],
    critiqueAnd10x: {
      proposal: "Turnkey Co-Host Operating System & Standardized Housekeeping Protocol: Transform Airbnb into an automated distributed hotel network by algorithmically pairing passive property owners with vetted local Super-Co-Hosts for a 15-20% fee split.",
      tradeoffs: "Elevates marketplace liability and operational overhead; risks alienating independent boutique hosts who value bespoke control."
    },
    interviewCheatSheet: "Airbnb is a two-sided marketplace whose foundational moat is institutional trust between strangers (double-blind review game theory, AirCover, and ID verification) reinforced by unprecedented 90%+ organic brand traffic that insulates it from Google's performance marketing ad tax."
  },

  // ========================================================
  // DAY 4 (NOV 7): LINEAR
  // ========================================================
  {
    id: "linear",
    week: 1,
    day: 4,
    releaseDate: "2026-11-07",
    name: "Linear",
    category: "B2B SaaS / Project Management",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    iconColor: "text-indigo-600",
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
        goal: "Stay in code flow without getting blocked by heavy, bloated project management software.",
        painPoint: "Jira takes 4 seconds to load a ticket, requires 8 mandatory fields, and interrupts deep work.",
        jtbd: "Let me log bugs and link PRs in 2 seconds from my keyboard so I can get back to writing software.",
        behavior: "Only interacts with Linear via hotkeys (`Cmd+K`, `C`) and git commit messages (`fix ENG-204`)."
      },
      {
        name: "Maya (34, London) — 'The High-Tempo VP of Product'",
        archetype: "Delivery & Velocity Champion",
        goal: "Track cross-team project roadmaps and customer bug escalations across 6 distributed squads.",
        painPoint: "Engineers refuse to update Jira tickets, meaning executive roadmaps are constantly out of date.",
        jtbd: "Give my engineering team a tool they actually love using so ticket status updates happen automatically.",
        behavior: "Reviews Linear Insights burn-up charts during Monday executive meetings; manages customer intake via Linear Asks."
      },
      {
        name: "David (28, Berlin) — 'The Design-Engineering Hybrid'",
        archetype: "Craft & Detail Advocate",
        goal: "Bridge visual design specs in Figma with actionable engineering issues.",
        painPoint: "Having to copy-paste screenshots and requirements into 3 disconnected tools.",
        jtbd: "Embed interactive Figma previews directly in engineering issues with auto-syncing status.",
        behavior: "Attaches Figma frames to Linear tickets; uses Triage to review incoming UI debt."
      }
    ],
    nuances: [
      {
        title: "Optimistic Local Cache as an Moat: Sub-50ms Interaction",
        insight: "Linear does not make a round-trip network request every time you change a ticket's status. It writes mutations to an in-memory IndexedDB client store instantly, updating the UI in <16ms, and syncs asynchronously in the background. This psychological speed difference creates an addictive user experience that makes web competitors feel broken."
      },
      {
        title: "The Opinionated Workflow vs The Jira Customization Trap",
        insight: "Jira's fatal flaw is allowing enterprise admins to add 50 mandatory custom fields to every issue. Linear intentionally restricts customization, enforcing streamlined states (Backlog, Todo, In Progress, Done). By defending engineering simplicity against corporate bureaucracy, Linear became the tool of choice for the world's most productive startups."
      },
      {
        title: "The 'Linear Method' as a Brand & Growth Philosophy",
        insight: "Linear did not just sell software; they published the 'Linear Method'—an opinionated manifesto arguing that sprints are theater, story points are waste, and high-trust autonomous teams ship faster without micromanagement. This intellectual alignment turned users into vocal product evangelists."
      }
    ],
    critiqueAnd10x: {
      proposal: "Automated PR Scope Decomposition Agent: When an engineer opens a massive 1,500-line Pull Request, an AI bot analyzes git diffs, automatically generates atomic sub-tickets, and flags regression test risks to reviewers.",
      tradeoffs: "Risk of noise if AI over-segments small refactors; requires deep static code analysis and access to proprietary codebases."
    },
    interviewCheatSheet: "Linear won the developer tool market by weaponizing extreme client-side speed (local SQLite/IndexedDB sync) and opinionated minimalism against Jira's bloated configuration complexity. It expands bottom-up through engineering squads and defends itself via extreme user loyalty and superior software craft."
  },

  // ========================================================
  // DAY 3 (NOV 6): TIKTOK
  // ========================================================
  {
    id: "tiktok",
    week: 1,
    day: 3,
    releaseDate: "2026-11-06",
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

  // ========================================================
  // DAY 2 (NOV 5): NOTION
  // ========================================================
  {
    id: "notion",
    week: 1,
    day: 2,
    releaseDate: "2026-11-05",
    name: "Notion",
    category: "B2B SaaS / Productivity",
    badgeColor: "bg-stone-100 text-stone-800 border-stone-300",
    iconColor: "text-stone-800",
    tagline: "The modular workspace that turned documents into relational databases and spawned an organic template economy",
    heroMetric: "100M+ users, >$350M ARR, $10B valuation, 90%+ organic template distribution",
    whatIsTheProduct: {
      summary: "A modular, all-in-one productivity workspace where pages are composed of typed, movable 'blocks' (text, media, embeds, relational database views) that can be linked, transformed, and shared collaboratively across personal and enterprise teams.",
      coreSurfaces: [
        {
          name: "The Atomic Block Canvas & Slash Commands (`/`)",
          detail: "Every element on a page (paragraph, bullet, toggle list, callout, image) is an independent database object with a unique UUID. Typing '/' triggers instant insertion of over 50 block primitives without touching formatting toolbars."
        },
        {
          name: "Polymorphic Relational Database Views",
          detail: "The same underlying dataset can be toggled instantaneously between Table, Kanban Board, Timeline/Gantt, Calendar, Gallery, and List views. Supports multi-way relations and 'Rollup' calculations across tables."
        },
        {
          name: "Notion AI & Semantic Q&A Agent",
          detail: "Embedded generative AI and retrieval-augmented generation (RAG) that indexes team wikis, allowing employees to ask natural-language questions (e.g. 'What is our Q4 parental leave policy?') and receive cited answers in seconds."
        },
        {
          name: "Global Template Gallery & Creator Economy",
          detail: "A self-serve marketplace enabling any user to publish or monetize functional workspace layouts (Life OS, Startup PRD Stack, CRM), turning power users into viral distributed marketing hubs."
        }
      ]
    },
    demographics: {
      geography: "Over 80% of active users are outside the United States. Massive grassroots adoption across Japan, South Korea, France, Germany, and the UK.",
      motivation: "Knowledge workers, founders, and students desperate to consolidate 5 disjointed tools (Google Docs, Trello, Evernote, Airtable, and Confluence) into a single cohesive operating system.",
      ageDistribution: "Core adoption is 18-35 (heavy university student and startup operator demographic driven by Reddit, Twitter, and TikTok aesthetic desk setups).",
      retentionBenchmark: "Net Revenue Retention (NRR) exceeds 120% among paying business workspaces, driven by bottom-up expansion from individual note-takers to full company wikis."
    },
    personas: [
      {
        name: "Kenji (27, Tokyo) — 'The Second-Brain Architect'",
        archetype: "Obsessive Personal Knowledge Organizer",
        goal: "Build an interconnected digital second brain connecting reading notes, habit trackers, and personal projects.",
        painPoint: "Apple Notes is too flat; traditional databases require SQL and look ugly.",
        jtbd: "Give me an aesthetic, infinitely malleable canvas so I can organize my entire life and thoughts in one place.",
        behavior: "Spends 6 hours on weekends fine-tuning database relation properties, buys $30 community templates on Gumroad."
      },
      {
        name: "Sarah (34, London) — 'The Async Scale-Up COO'",
        archetype: "Cross-Functional Documentation Leader",
        goal: "Standardize company-wide onboarding, meeting notes, and engineering RFCs without paying $20/seat for bloated legacy Atlassian Confluence.",
        painPoint: "Company documents rot in Google Drive folders where no one can find anything after 2 weeks.",
        jtbd: "Create a central, searchable company wiki where new hires can self-serve knowledge on day one without asking on Slack.",
        behavior: "Champions enterprise Team Plan upgrade, restricts edit permissions on core HR wikis, sets up weekly team sprint boards."
      },
      {
        name: "Marco (21, Milan) — 'The University Student Power-User'",
        archetype: "Free-Tier Academic Crusader",
        goal: "Organize university lecture notes, coursework deadlines, and exam revision guides with embedded flashcards and aesthetic icons.",
        painPoint: "Carrying 4 separate notebooks and losing track of exam syllabus deliverables across fragmented PDFs.",
        jtbd: "Help me ace my university exams with organized, color-coded study schedules accessible on laptop and phone.",
        behavior: "Uses free student plan, shares public page links with study groups, posts Notion desk setup aesthetic reels on TikTok."
      }
    ],
    nuances: [
      {
        title: "The Near-Death Pivot: Rebuilding from Scratch in Kyoto (2015)",
        insight: "In 2015, Notion's initial prototype constantly crashed and ran out of cash. Instead of tweaking it, Ivan Zhao and Simon Last fired their staff, sublet their San Francisco office, and moved to Kyoto, Japan. They rewrote the entire architecture from scratch on a unified 'Block' paradigm. This radical willingness to scrap a flawed codebase and isolate themselves for deep craft created the rock-solid data model that powers 100M users today."
      },
      {
        title: "The Zero-CAC Template Flywheel: Monetizing User Obsession",
        insight: "Traditional B2B SaaS companies hire expensive SDRs to outbound enterprise accounts. Notion realized their users enjoyed showing off their complex productivity setups. By making templates 1-click shareable, thousands of creators built lucrative businesses selling Notion templates ($10K-$100K/mo). These creators effectively became Notion's unpaid, incentivized global marketing army."
      },
      {
        title: "The Performance Bottleneck & The SQLite Migration",
        insight: "Notion's greatest strength (everything is an interconnected block object) became its greatest engineering liability. Loading a page with 1,000 blocks required hundreds of React DOM renders and client-side memory overhead, leading to widespread complaints of sluggish mobile performance. Notion had to re-architect its client data layer using an embedded local SQLite engine to achieve instant local cache reads."
      }
    ],
    critiqueAnd10x: {
      proposal: "Automated 'Doc Freshness & Stale Wiki Janitor': AI continuously monitors workspace document view frequency, edits, and Slack discussions, automatically flagging deprecated policies and prompting document owners to verify or archive obsolete pages.",
      tradeoffs: "Risk of false-positive archive warnings annoying team leads; requires deep background scanning compute across millions of enterprise blocks."
    },
    interviewCheatSheet: "Notion democratized relational databases by wrapping them in an aesthetic, modular block canvas. Its growth engine is an unprecedented community template ecosystem that drives zero-CAC bottom-up adoption. Its strategic challenge is balancing infinite consumer flexibility with the permissions, speed, and governance demanded by Fortune 500 enterprises."
  },

  // ========================================================
  // DAY 1 (NOV 4): SPOTIFY
  // ========================================================
  {
    id: "spotify",
    week: 1,
    day: 1,
    releaseDate: "2026-11-04",
    name: "Spotify",
    category: "Consumer Media & Streaming",
    badgeColor: "bg-green-50 text-green-700 border-green-200",
    iconColor: "text-emerald-600",
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
      motivation: "Users seek instant, unlimited access to global audio without piracy friction, supported by personalized discovery algorithms.",
      ageDistribution: "65% under 35 (heavy Millennial & Gen Z music fans), expanding into older demographics via podcasts and audiobooks.",
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
        insight: "Unlike traditional software companies with 85% gross margins, Spotify is economically hamstrung by the 'Big Three' music labels (Universal, Sony, Warner), who extract ~70% of music royalties. Every time Spotify signs up 10M more music listeners, labels get richer. To survive, Spotify spent $1B+ acquiring podcast studios because podcasts carry zero label royalty costs, unlocking dynamic audio advertising."
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

  // ========================================================
  // UPCOMING QUEUED DROPS (UNLOCKED AUTOMATICALLY BY DATE)
  // ========================================================
  {
    id: "uber",
    week: 2,
    day: 7,
    releaseDate: "2026-11-10",
    name: "Uber",
    category: "Two-Sided Mobility & Logistics Marketplace",
    badgeColor: "bg-slate-900 text-white border-slate-700",
    iconColor: "text-slate-900",
    tagline: "The real-time geospatial marketplace coordinating physical mobility and delivery supply with dynamic algorithmic pricing",
    heroMetric: "150M+ monthly active platform consumers, >$130B Gross Bookings, 30M+ daily trips",
    whatIsTheProduct: {
      summary: "A global on-demand mobility and logistics network that matches rider transportation demand with flexible driver vehicle capacity using predictive ETAs, geospatial hexagonal grids (H3), and dynamic pricing algorithms.",
      coreSurfaces: [
        {
          name: "Geospatial Matching & ETA Prediction Engine",
          detail: "Hexagonal spatial indexing (Uber H3) partitioning cities into localized supply-demand cells to dispatch the optimal driver within sub-second thresholds."
        },
        {
          name: "Dynamic Surge Pricing & Marketplace Balance Loop",
          detail: "Real-time pricing multiplier that throttles excessive demand during rain or concerts while incentivizing idle drivers to reposition toward high-demand zones."
        },
        {
          name: "Driver Partner Super-App & Earnings Telemetry",
          detail: "Turn-by-turn routing, heatmaps, upfront fare transparency, and instant payout rails (Uber Pro Card) to minimize driver churn."
        },
        {
          name: "Uber One Cross-Platform Subscription",
          detail: "Multi-product loyalty bundle unlocking $0 delivery fees on Uber Eats and 5% discounts on rides, driving cross-surface frequency."
        }
      ]
    },
    demographics: {
      geography: "Present in over 10,000 cities across 70 countries worldwide. Ubiquitous across urban metro corridors.",
      motivation: "Riders want reliable point-to-point transportation with guaranteed pickup times; drivers seek flexible, immediate cash earnings.",
      ageDistribution: "Riders: 18-55 across all urban income brackets; drivers average 25-60.",
      retentionBenchmark: "Uber One members spend 3.4x more annually and have 50% lower churn than non-member riders."
    },
    personas: [
      {
        name: "Daniel (32, Manhattan) — 'The Time-Starved Business Commuter'",
        archetype: "High-Willingness-to-Pay Professional",
        goal: "Arrive at client meetings and airport terminals reliably without waiting in rain for street taxis.",
        painPoint: "Public subway delays and uncertain street taxi availability when rushing to JFK airport.",
        jtbd: "Get a car outside my apartment within 4 minutes with guaranteed arrival time so I never miss a flight.",
        behavior: "Uber Reserve power user, expenses rides to corporate card, indifferent to surge pricing."
      },
      {
        name: "Rashid (44, Chicago) — 'The Full-Time Flexibility Driver'",
        archetype: "Micro-Entrepreneur Driver Partner",
        goal: "Earn $1,500/week after gas and vehicle depreciation while having flexibility to pick his kids up from school.",
        painPoint: "High vehicle maintenance costs and sitting unpaid in traffic without knowing trip destinations.",
        jtbd: "Maximize earnings per active hour by directing me to surge zones and showing trip earnings before accepting rides.",
        behavior: "Drives 35 hours a week, analyzes weekly promotions, withdraws earnings daily."
      }
    ],
    nuances: [
      {
        title: "The Local Liquidity Network Effect: City-by-City Cold Start",
        insight: "Unlike Airbnb or Facebook, Uber's network effects are strictly hyperlocal. Having 100,000 drivers in London provides zero utility to a rider in Boston. Uber has to reconstruct two-sided marketplace liquidity city by city. The primary retention metric is ETAs: if pickup time drops from 10 minutes to 3 minutes, rider conversion jumps dramatically."
      },
      {
        title: "Surge Pricing as Supply Allocator, Not Revenue Gouger",
        insight: "Public riders hate surge pricing, viewing it as corporate greed. But senior marketplace PMs know surge pricing is primarily an allocation mechanism: it rations scarce seats to riders who value the trip most urgently while incentivizing sleeping drivers to get into their cars and restore marketplace equilibrium."
      }
    ],
    critiqueAnd10x: {
      proposal: "Intermodal City Transit Orchestrator: Dynamic routing that combines an Uber scooter to the express train station, followed by an Uber car at the destination, booking all legs seamlessly in 1 ticket for 40% less cost.",
      tradeoffs: "Requires complex public municipal transit API integrations and high customer support liability for third-party train delays."
    },
    interviewCheatSheet: "Uber is a two-sided geospatial marketplace that monetizes via take rates (~20-28% net revenue). Its competitive moat is local driver liquidity density (which yields lower ETAs and higher driver utilization) and cross-selling synergies between Rides and Eats via the Uber One subscription flywheel."
  },
  {
    id: "stripe",
    week: 2,
    day: 8,
    releaseDate: "2026-11-11",
    name: "Stripe",
    category: "Fintech & Developer Infrastructure",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    iconColor: "text-blue-600",
    tagline: "The 7 lines of code that abstracted global banking infrastructure and built the internet economy",
    heroMetric: ">$1 Trillion in annual payment volume (1% of global GDP), >$14B revenue",
    whatIsTheProduct: {
      summary: "A global programmatic financial infrastructure suite enabling businesses of all sizes from startups to Amazon to accept online payments, manage subscription billing, prevent fraud, and issue physical/virtual cards via developer-first REST APIs.",
      coreSurfaces: [
        {
          name: "Stripe Elements & Checkout (Optimized Payment UX)",
          detail: "Pre-built, localized checkout interfaces supporting Apple Pay, Google Pay, and 100+ local payment methods (Klarna, iDEAL, Pix) with 1-click Link autofill."
        },
        {
          name: "Stripe Billing & Revenue Recognition",
          detail: "Recurring subscription engine supporting complex usage-based pricing, seat tiers, automated dunning, and GAAP-compliant accounting ledgers."
        },
        {
          name: "Radar (Machine Learning Fraud Prevention)",
          detail: "Algorithmic defense network trained on billions of global card transactions to block stolen cards in <100ms with zero checkout friction."
        },
        {
          name: "Stripe Connect (Multi-Party Marketplace Payouts)",
          detail: "API rails powering two-sided platforms (Shopify, DoorDash, Substack) to split transaction revenues and disburse compliant payouts to millions of sub-merchants."
        }
      ]
    },
    demographics: {
      geography: "Supports payment processing across 46+ countries and 135+ currencies.",
      motivation: "Developers and CFOs needing compliant, high-reliability payment processing without spending 6 months integrating legacy merchant banks.",
      ageDistribution: "Core buyers: CTOs, CFOs, and full-stack software engineers.",
      retentionBenchmark: "Ultra-low churn (<1% gross logo churn in enterprise tier) due to deep API architectural entanglement and risk of revenue disruption."
    },
    personas: [
      {
        name: "Devon (29, San Francisco) — 'The Solo SaaS Hacker'",
        archetype: "Developer Velocity Champion",
        goal: "Accept credit card subscriptions for his micro-SaaS with under 2 hours of coding.",
        painPoint: "Traditional merchant processors require 3 weeks of underwriting paperwork and fax machines.",
        jtbd: "Give me clean copy-paste API documentation and test mode keys so I can bill customers before launch.",
        behavior: "Reads Stripe API docs, uses Stripe Checkout webhooks, lives in the Developer Dashboard."
      },
      {
        name: "Helena (47, London) — 'The Marketplace VP of Finance'",
        archetype: "Compliance & Risk Executive",
        goal: "Route transactions to 10,000 independent sellers while complying with cross-border tax withholding and KYC regulations.",
        painPoint: "Opening bank accounts in 20 European jurisdictions and handling VAT compliance manually.",
        jtbd: "Automate identity verification, tax calculations, and 1099/DAC7 reporting across our international seller base.",
        behavior: "Relies on Stripe Connect and Stripe Tax to reconcile multi-currency balances."
      }
    ],
    nuances: [
      {
        title: "Developer Experience (DX) as a Customer Acquisition Channel",
        insight: "In 2010, enterprise software was sold over steak dinners to CIOs. Patrick and John Collison realized that engineers were the real gatekeepers of software architecture. By building elegant documentation, instant API keys, and copy-paste code snippets, Stripe turned engineers into internal champions who demanded their CFOs sign with Stripe."
      },
      {
        title: "The Radar Network Effect: Shared Global Fraud Telemetry",
        insight: "A fraudster using a stolen credit card to buy sneakers on a small Shopify store is instantly detected by Stripe Radar because that same card was flagged 2 minutes earlier on a food delivery app in London. By pooling transaction signals across 1% of global GDP, Stripe delivers lower chargeback rates than any standalone merchant could ever achieve."
      }
    ],
    critiqueAnd10x: {
      proposal: "Universal Cross-Platform Merchant Vault: A portable, self-sovereign customer identity token allowing consumers to checkout across ANY Stripe-powered merchant globally in 1 tap without passwords or credit card entry.",
      tradeoffs: "Anti-trust scrutiny if competitors allege Stripe is building an anti-competitive consumer checkout monopoly."
    },
    interviewCheatSheet: "Stripe abstracted legacy banking rails into 7 lines of code. Its competitive moat is developer love (pristine documentation and APIs), high switching costs (deep codebase and billing logic integration), and shared global fraud telemetry (Radar)."
  },
  {
    id: "culture_amp",
    week: 2,
    day: 9,
    releaseDate: "2026-11-12",
    name: "Culture Amp",
    category: "HR Tech & People Analytics",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    iconColor: "text-emerald-700",
    tagline: "The employee experience platform turning workforce sentiment into executive retention strategy",
    heroMetric: "6,500+ global enterprises, >$150M ARR, 25M+ survey responses, $1.5B+ valuation",
    whatIsTheProduct: {
      summary: "A unified employee experience and people intelligence platform that replaces annual paper HR reviews with continuous pulse surveys, 360-degree performance evaluations, and machine-learning turnover prediction models.",
      coreSurfaces: [
        {
          name: "Engagement Pulse Engine & Benchmark Comparisons",
          detail: "Surveys measuring psychological safety, eNPS, and inclusion with normalized scores benchmarked against 1,000+ industry peers."
        },
        {
          name: "Continuous Performance & 360° Multi-Rater Reviews",
          detail: "Replaces annual reviews with continuous 1-on-1 agendas, OKR tracking, and structured peer feedback loops to eliminate evaluation bias."
        },
        {
          name: "Predictive Flight-Risk & Retention Analytics",
          detail: "NLP algorithms scanning thousands of employee comments to identify department turnover risks months before resignations."
        },
        {
          name: "Manager Action Frameworks & In-App Playbooks",
          detail: "Translates macro engagement survey data into personalized micro-actions for first-time engineering and product managers."
        }
      ]
    },
    demographics: {
      geography: "Global enterprise customer base with headquarters in Melbourne, San Francisco, London, and New York.",
      motivation: "Chief People Officers needing objective data to prove to CEOs that company culture correlates with retention and EBITDA.",
      ageDistribution: "Buyers: 35-55 (VPs of HR); end users: 22-50 across client companies.",
      retentionBenchmark: "Net Revenue Retention ~115-120% with high multi-year contract renewals."
    },
    personas: [
      {
        name: "Claire (44, London) — 'The Board-Reporting CPO'",
        archetype: "Enterprise Executive Buyer",
        goal: "Present defensible workforce retention metrics at quarterly Board meetings.",
        painPoint: "CEOs view HR as a cost center; Google Forms lack statistical credibility.",
        jtbd: "Give me board-ready benchmark data comparing our engineering turnover against top-tier tech competitors.",
        behavior: "Logs in quarterly for executive summaries, exports heatmaps to PowerPoint."
      },
      {
        name: "Devon (32, Austin) — 'The First-Time Engineering Manager'",
        archetype: "Operational People Manager",
        goal: "Understand why senior engineers in his squad seem disengaged without awkward confrontation.",
        painPoint: "Traditional performance reviews are tedious paperwork exercises taking 20 hours.",
        jtbd: "Tell me the 2 specific management habits I need to adjust this quarter so my developers don't quit.",
        behavior: "Relies on automated 1-on-1 agenda templates in Slack."
      }
    ],
    nuances: [
      {
        title: "The 'Minimum Reporting Group' Trust Architecture",
        insight: "Culture Amp's foundational moat is trust game theory. If a manager has 3 direct reports, Culture Amp strictly suppresses individual scores to protect anonymity. Scores only unlock if at least 5 people respond. Without this constraint, employees give fake polite answers, destroying data integrity."
      },
      {
        title: "Industry Benchmark Normalization as a Switching Moat",
        insight: "A raw score of 72% on 'Manager Feedback' means nothing in isolation. Culture Amp's secret sauce is its proprietary database of 25M+ survey responses across 6,500 companies, showing that 72% is in the 90th percentile for Seed-to-Series B fintech startups."
      }
    ],
    critiqueAnd10x: {
      proposal: "Automated Slack/Teams Micro-Pulse Agent: An AI bot asks 1 situational question per week directly in Slack, synthesizing real-time sentiment with zero survey fatigue.",
      tradeoffs: "Employee paranoia regarding workplace surveillance; requires strict SOC2 data de-identification."
    },
    interviewCheatSheet: "Culture Amp is an enterprise people analytics platform whose moat is psychological trust architecture (minimum reporting thresholds) combined with unmatched global industry benchmark datasets (25M+ responses)."
  },
  {
    id: "google_workspace",
    week: 2,
    day: 10,
    releaseDate: "2026-11-13",
    name: "Google Workspace",
    category: "Enterprise Cloud Productivity",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    iconColor: "text-amber-600",
    tagline: "The cloud-native collaborative operating system that displaced desktop office software with real-time multiplayer editing",
    heroMetric: "3B+ global users, 10M+ paying business organizations, ~$10B+ run-rate revenue",
    whatIsTheProduct: {
      summary: "A cloud-first suite of communication and collaboration tools (Docs, Sheets, Slides, Drive, Meet, Gmail) built on real-time operational transformation, eliminating file attachments and versioning chaos in favor of a universal browser URL.",
      coreSurfaces: [
        {
          name: "Real-Time Operational Transformation (OT) Engine",
          detail: "The algorithmic backbone powering Docs and Sheets, allowing dozens of users to edit the exact same document simultaneously with sub-100ms character sync."
        },
        {
          name: "The 'Smart Canvas' (@ Mentions & Interactive Chips)",
          detail: "Transforms static documents into interactive workspaces by typing '@' to embed calendar events, people chips, interactive dropdowns, and file previews."
        },
        {
          name: "Centralized Google Drive & Universal Search",
          detail: "Replaces local file directories with a cloud index powered by predictive 'Priority' file suggestions based on calendar meetings."
        },
        {
          name: "Gemini Workspace Assistant (Enterprise AI)",
          detail: "Integrated sidecar AI that drafts executive emails in Gmail, generates contextual formulas in Sheets, and synthesizes meeting notes in Meet."
        }
      ]
    },
    demographics: {
      geography: "Ubiquitous global footprint across 190+ countries. Dominates consumer and startup sectors globally.",
      motivation: "Enterprises wanting zero-maintenance cloud infrastructure, frictionless browser access, and real-time collaboration.",
      ageDistribution: "Near 100% penetration among Gen Z and Millennials who grew up on Google Classroom.",
      retentionBenchmark: "Ultra-low churn (<2% annually in core enterprise accounts) because email addresses serve as the company identity."
    },
    personas: [
      {
        name: "Arun (38, San Francisco) — 'The High-Velocity Founder'",
        archetype: "Product-Led Startup Operator",
        goal: "Scale his 40-person startup with zero IT overhead and ensure team members can brainstorm together in live documents.",
        painPoint: "Microsoft Office requires desktop license keys, version conflicts (v1_final_final.docx), and email attachments.",
        jtbd: "Give my distributed team instant collaborative workspaces where sharing a link grants immediate editing access.",
        behavior: "Shares Google Doc links in Slack, relies heavily on inline comments and '@' action assignments."
      },
      {
        name: "Patricia (52, Chicago) — 'The Enterprise CIO'",
        archetype: "Enterprise IT & Governance Buyer",
        goal: "Protect sensitive corporate data and ensure SOC2, HIPAA, and GDPR compliance while managing 15,000 corporate laptops.",
        painPoint: "Employees using rogue third-party tools causing corporate data leaks and compliance audit failures.",
        jtbd: "Provide an all-in-one suite with single sign-on (SSO), DLP, and centralized e-discovery.",
        behavior: "Manages permissions via Google Admin Console, sets strict external file-sharing restrictions."
      }
    ],
    nuances: [
      {
        title: "The URL as a Competitive Weapon vs Microsoft's Desktop Moat",
        insight: "Microsoft's moat was the desktop `.docx` file format. Google didn't try to out-feature Word; they transformed files into URLs (`docs.google.com/document/d/...`). A URL can be dropped in a chat message, bookmarked, opened on an iPad without installing software, and edited simultaneously. By changing the unit of work to a web URL, Google redefined workplace collaboration."
      },
      {
        title: "The 'K-12 Trojan Horse': Capturing the Next Generation for Free",
        insight: "Google gave Google Classroom, Docs, and Chromebooks to public schools worldwide virtually for free. Millions of students spent 10 years writing every essay on Google Docs. When these students graduated and entered tech companies, they refused to use desktop Microsoft Word, forcing enterprise CTOs to adopt Google Workspace."
      }
    ],
    critiqueAnd10x: {
      proposal: "Universal Semantic Cross-App Context Engine: An AI that automatically links your 10:00 AM calendar meeting to the relevant Figma spec, previous Slack thread, and project Google Doc in a single pre-meeting brief chip on the Drive homepage.",
      tradeoffs: "High privacy concerns regarding cross-application data synthesis; heavy indexing latency across petabytes of enterprise file repositories."
    },
    interviewCheatSheet: "Google Workspace's disruptive innovation was converting files into collaborative web URLs backed by real-time operational transformation. Its long-term moat is consumer habituation via educational dominance (Classroom) and centralized identity (Gmail)."
  },
  {
    id: "canva",
    week: 2,
    day: 11,
    releaseDate: "2026-11-14",
    name: "Canva",
    category: "Visual Economy & Creator Templates",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
    iconColor: "text-teal-600",
    tagline: "The democratic visual communications suite empowering 170M+ non-designers with modular templates and brand autonomy",
    heroMetric: "170M+ MAU, >$2B ARR, 85%+ Fortune 500 adoption, profitable for 7+ consecutive years",
    whatIsTheProduct: {
      summary: "A cloud-first drag-and-drop graphic design, video editing, and presentation platform that removes the high technical friction of Adobe Creative Suite through millions of curated, ready-to-use professional templates.",
      coreSurfaces: [
        {
          name: "The Drag-and-Drop Canvas & Template Library",
          detail: "A browser-based WYSIWYG canvas powered by HTML5/WebGL with over 100M stock photos, vectors, audio clips, and responsive templates tailored to exact social platform aspect ratios."
        },
        {
          name: "Magic Studio (Generative Design AI)",
          detail: "Suite of AI tools including Magic Switch (1-click conversion from a whiteboard brainstorm into a full pitch deck), Magic Expand, and instant background removal."
        },
        {
          name: "Canva for Enterprise & Brand Kits",
          detail: "Centralized brand governance locking corporate fonts, hex color codes, and logos so non-designer sales and marketing reps can generate collateral without breaking brand guidelines."
        },
        {
          name: "Print-on-Demand & Physical Merchandise Fulfillment",
          detail: "Integrated global printing and logistics network allowing users to design and receive physical business cards, posters, and apparel with 2-day delivery."
        }
      ]
    },
    demographics: {
      geography: "Massive worldwide footprint across 190 countries in over 100 languages. Strongest in US, Brazil, India, UK, and Southeast Asia.",
      motivation: "Small business owners, teachers, marketers, and students who need polished visual assets in 10 minutes without learning Photoshop.",
      ageDistribution: "Broad cross-generational appeal: 16-55 (from high school presentation makers to real estate agents and corporate communications teams).",
      retentionBenchmark: "Outstanding organic word-of-mouth with freemium conversion rate ~5-7%, driving over $2B in highly recurring subscription ARR."
    },
    personas: [
      {
        name: "Carlos (36, Miami) — 'The Local Real Estate Broker'",
        archetype: "Small Business Entrepreneur",
        goal: "Create eye-catching Instagram Reels, flyers, and Open House brochures for new luxury listings in under 15 minutes.",
        painPoint: "Hiring a professional graphic designer costs $100/hour and takes 3 days; Adobe Photoshop has a 40-hour learning curve.",
        jtbd: "Give me stunning, pre-formatted real estate templates so I can post professional property listings before my competitors do.",
        behavior: "Canva Pro subscriber, uses Background Remover constantly, orders physical yard signs via Canva Print."
      },
      {
        name: "Hannah (29, Sydney) — 'The Growth Marketing Manager'",
        archetype: "Corporate Multi-Channel Marketer",
        goal: "Produce 40 variations of LinkedIn and Meta ad creatives each week to A/B test campaign conversion rates.",
        painPoint: "The internal design team has a 3-week backlog for simple social banner revisions.",
        jtbd: "Enable my marketing squad to resize and iterate on ad creatives independently without waiting for agency designers.",
        behavior: "Uses Brand Kits, Magic Resize, and Canva Teams collaboration to share review drafts with leadership."
      }
    ],
    nuances: [
      {
        title: "The 'Template-First' Asymmetry vs Adobe's 'Blank Canvas'",
        insight: "Adobe Photoshop opens to a terrifying blank white rectangle and 80 technical tools. Canva realized that 95% of people do not want to design from scratch; they want to edit an existing, beautiful layout. By indexing over 1M templates by exact intent ('Menu for Italian Restaurant', 'Tech Podcast Cover'), Canva eliminated creative paralysis and won the mass market."
      },
      {
        title: "The Two-Sided Creator Marketplace as an Unfair Moat",
        insight: "Canva doesn't pay an internal team to design 100M templates. They established the Canva Creator Program, paying royalties to thousands of independent designers worldwide whenever users use their assets. This crowdsourced flywheel generates localized, culturally relevant designs in 100+ languages faster than any centralized competitor."
      }
    ],
    critiqueAnd10x: {
      proposal: "Programmatic Live Ad Performance Sync: Connect Canva directly to Meta and Google Ads APIs, automatically generating variations of top-performing ad creatives based on real-time ROAS (Return on Ad Spend) data.",
      tradeoffs: "Drives Canva into complex ad-tech analytics territory; requires maintaining complex third-party ad network API connections."
    },
    interviewCheatSheet: "Canva disrupted Adobe by replacing the blank canvas with intent-driven templates and in-browser drag-and-drop simplicity. Its moat is a decentralized creator marketplace producing millions of culturally tailored templates, combined with a bottoms-up enterprise expansion model powered by Brand Kits."
  },
  {
    id: "ramp",
    week: 2,
    day: 12,
    releaseDate: "2026-11-15",
    name: "Ramp",
    category: "Fintech & Spend Management",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    iconColor: "text-emerald-700",
    tagline: "The corporate card that wins by promising to save companies money rather than maximizing debt",
    heroMetric: "25,000+ businesses, >$30B annualized transaction volume, $7.6B valuation",
    whatIsTheProduct: {
      summary: "A modern corporate charge card and automated spend management platform that unifies corporate cards, expense reimbursements, accounts payable (bill pay), vendor contract negotiations, and travel booking into a single software platform designed to cut corporate waste.",
      coreSurfaces: [
        {
          name: "Zero-Touch Receipt Matching & SMS Submission",
          detail: "Employees swipe their card and receive an instant SMS; texting back a photo of the receipt matches it to the transaction in <5 seconds using OCR, eliminating end-of-month expense reports."
        },
        {
          name: "Algorithmic Price Intelligence & SaaS Negotiation",
          detail: "Benchmarks corporate software contracts against thousands of anonymized company invoices, notifying CFOs when they are overpaying for tools like Datadog or Slack."
        },
        {
          name: "Programmable Corporate Cards & Real-Time Spend Controls",
          detail: "Dynamic category restrictions (e.g., $100/day strictly for rideshare while traveling in London), locking cards automatically if transactions deviate from company policy."
        },
        {
          name: "Automated AP & Invoice Processing (Bill Pay)",
          detail: "AI-extracted line-item invoices, automated two-way accounting sync to NetSuite/QuickBooks, and batch ACH/wire disbursements in 1 click."
        }
      ]
    },
    demographics: {
      geography: "Dominates US tech startups, mid-market enterprises, and scaling scale-ups. Rapidly expanding into traditional brick-and-mortar sectors (retail, healthcare, construction).",
      motivation: "CFOs and controllers seeking automated accounting reconciliation and strict spend governance without 40-hour monthly manual auditing.",
      ageDistribution: "Core buyers: 30-55 CFOs, VPs of Finance, and operations leaders.",
      retentionBenchmark: "Negative net churn (>130% NRR) as client headcounts grow and transaction volumes scale."
    },
    personas: [
      {
        name: "Hannah (39, New York) — 'The Ruthless Startup Controller'",
        archetype: "Financial Hygiene & Compliance Champion",
        goal: "Close company monthly accounting books in 2 days instead of 2 weeks without chasing employees for missing receipts.",
        painPoint: "Employees submitting unreadable paper receipts 45 days late with zero explanation of business purpose.",
        jtbd: "Automate receipt capture and NetSuite categorization at the moment of swipe so our finance team never audits lunch receipts.",
        behavior: "Enforces zero-tolerance receipt rules via Ramp's auto-lock feature; reviews SaaS contract savings weekly."
      },
      {
        name: "Tyler (26, Austin) — 'The Field Sales Representative'",
        archetype: "Friction-Sensitive Frontline Employee",
        goal: "Take prospective enterprise clients out to dinner without carrying \$3,000 of personal credit card debt.",
        painPoint: "Traditional expense tools (Concur, Expensify) requiring 25 clicks, manual form filling, and waiting 3 weeks for reimbursement.",
        jtbd: "Let me snap a receipt photo on my phone and have my expense approved instantly without filing paperwork.",
        behavior: "Swipes physical Ramp card, replies to SMS notifications with photos, books flights via Ramp Travel."
      }
    ],
    nuances: [
      {
        title: "The Counter-Intuitive Business Model: 'We Help You Spend Less'",
        insight: "Traditional credit card companies (Amex) profit when companies spend more money or carry revolving debt. Ramp flipped this incentive on its head by positioning as the anti-spend card: 'Our mission is to help companies spend LESS money and save hours of time.' By building software that identifies redundant SaaS subscriptions and negotiates lower pricing, Ramp built unmatched trust with CFOs."
      },
      {
        title: "The Interchange Arbitrage & Free Software Flywheel",
        insight: "Ramp gives its spend management software away virtually for free because it monetizes on backend interchange fees (~1.5-2.0% paid by merchants on card swipes). By using high-margin card interchange to subsidize world-class accounting software, Ramp disarmed standalone expense competitors (Expensify, Bill.com) who relied on charging \$15/seat monthly software fees."
      }
    ],
    critiqueAnd10x: {
      proposal: "Autonomous Vendor Contract Renegotiator: Ambient AI agents that continuously monitor vendor contract expiration dates, draft negotiation emails based on industry benchmark pricing, and counter-propose optimized multi-year terms automatically.",
      tradeoffs: "Risk of damaging sensitive vendor relationships if automated negotiations lack nuanced executive context."
    },
    interviewCheatSheet: "Ramp disrupted corporate finance by monetizing card interchange to subsidize free, automated spend management software. Its moat is deep ERP accounting integration (NetSuite/QuickBooks), proprietary price benchmark data across 25,000+ businesses, and an aligned business model that saves CFOs time and capital."
  }
];


// Active products: Dynamically unlocked up to today's date, with today's drop at index 0!
export function getAvailableCurriculumProducts() {
  const todayStr = new Date().toISOString().slice(0, 10);
  
  // Products whose releaseDate <= todayStr are unlocked, with latest drop first
  const unlocked = ALL_CURRICULUM_PRODUCTS
    .filter(p => !p.releaseDate || p.releaseDate <= todayStr)
    .sort((a, b) => b.day - a.day);

  return unlocked.length > 0 ? unlocked : ALL_CURRICULUM_PRODUCTS.slice(0, 6);
}

export function getUpcomingCurriculumProducts() {
  const todayStr = new Date().toISOString().slice(0, 10);
  return ALL_CURRICULUM_PRODUCTS
    .filter(p => p.releaseDate && p.releaseDate > todayStr)
    .sort((a, b) => a.day - b.day);
}

export const SEED_PRODUCTS = getAvailableCurriculumProducts();

export const WEEKLY_QUIZZES = [
  {
    week: 1,
    title: "Week 1 Boss Quiz: Consumer Habits, Retention & Marketplace Trust",
    productsCovered: ["Spotify", "Notion", "TikTok", "Linear", "Airbnb"],
    badgeName: "Consumer & Marketplace Master",
    questions: [
      {
        id: "w1_q1",
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
        question: "Why did Linear choose an offline-first architecture with in-memory IndexedDB over standard REST calls?",
        options: [
          "To avoid paying for AWS backend databases",
          "To deliver sub-50ms optimistic UI updates that create a flow-state experience for engineers",
          "Because web browsers no longer allow network connections",
          "To prevent software developers from using GitHub"
        ],
        correctIndex: 1,
        explanation: "Linear records mutations instantly in local memory (<16ms) and syncs asynchronously, eliminating server round-trip latency and making the app feel like a native desktop tool."
      },
      {
        id: "w1_q4",
        question: "How did TikTok disrupt the incumbent Social Graph model used by Facebook and Instagram?",
        options: [
          "By charging users a monthly membership subscription",
          "By decoupling distribution from follower count and using an Interest Graph that ranks content purely on micro-retention telemetry",
          "By banning influencers from earning advertising revenue",
          "By only allowing 10-second black-and-white videos"
        ],
        correctIndex: 1,
        explanation: "TikTok replaced the Social Graph (who you follow) with the Interest Graph (what captures your attention in 2 seconds), allowing an account with 0 followers to get 5M views on day one."
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
  },
  {
    week: 2,
    title: "Week 2 Boss Quiz: Developer Craft, Product-Led Growth & B2B Moats",
    productsCovered: ["Figma", "Uber", "Stripe", "Culture Amp"],
    badgeName: "B2B SaaS & Platform Strategist",
    questions: [
      {
        id: "w2_q1",
        question: "What core architectural gamble enabled Figma to displace native desktop design software like Sketch?",
        options: [
          "Building on Adobe Flash Player",
          "Compiling C++ to WebAssembly (Wasm) and rendering directly on WebGL in the browser to enable real-time URL multiplayer",
          "Selling software on physical USB keys in Apple Stores",
          "Restricting files to single-user offline editing"
        ],
        correctIndex: 1,
        explanation: "Figma proved that heavy graphics applications could render at 60 FPS in a web browser using WebAssembly and WebGL, transforming design files into shared URLs."
      },
      {
        id: "w2_q2",
        question: "Why does Figma boast an extraordinary 3:1 non-designer to designer paid seat ratio?",
        options: [
          "Because non-designers are forced to pay double",
          "Because PMs, developers, copywriters, and executives participate directly on the canvas for specs, copy, and dev inspection",
          "Because designers share accounts illegally",
          "Because Figma gives free accounts to executives"
        ],
        correctIndex: 1,
        explanation: "Figma turned design into a cross-functional team sport. Non-designers (PMs, engineers) use Dev Mode and comments, creating massive viral seat expansion."
      },
      {
        id: "w2_q3",
        question: "What is the primary economic purpose of Uber's Surge Pricing algorithm?",
        options: [
          "To maximize executive quarterly bonuses during bad weather",
          "To act as a marketplace supply allocator by rationing rides to high-intent users while incentivizing idle drivers to reposition toward high-demand zones",
          "To punish riders for traveling at rush hour",
          "To pay municipal city taxes"
        ],
        correctIndex: 1,
        explanation: "Surge pricing is an economic balancing loop: it dampens excess demand while drawing driver supply into underserved areas to restore liquidity."
      },
      {
        id: "w2_q4",
        question: "Why is Culture Amp's 'Minimum Reporting Group' considered its foundational psychological moat?",
        options: [
          "It saves database storage costs by grouping responses",
          "It suppresses individual team scores unless at least 5 people respond, guaranteeing anonymity so employees give authentic feedback rather than fake polite praise",
          "It prevents employees from rating their managers",
          "It is required by Australian labor laws"
        ],
        correctIndex: 1,
        explanation: "Without strict group privacy thresholds, employees fear retaliation and provide misleading positive answers, destroying the data credibility that enterprise buyers pay for."
      }
    ]
  },
  {
    id: "google_workspace",
    week: 2,
    day: 10,
    releaseDate: "2026-11-13",
    name: "Google Workspace",
    category: "Enterprise Cloud Productivity",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    iconColor: "text-amber-600",
    tagline: "The cloud-native collaborative operating system that displaced desktop office software with real-time multiplayer editing",
    heroMetric: "3B+ global users, 10M+ paying business organizations, ~$10B+ run-rate revenue",
    whatIsTheProduct: {
      summary: "A cloud-first suite of communication and collaboration tools (Docs, Sheets, Slides, Drive, Meet, Gmail) built on real-time operational transformation, eliminating file attachments and versioning chaos in favor of a universal browser URL.",
      coreSurfaces: [
        {
          name: "Real-Time Operational Transformation (OT) Engine",
          detail: "The algorithmic backbone powering Docs and Sheets, allowing dozens of users to edit the exact same document simultaneously with sub-100ms character sync."
        },
        {
          name: "The 'Smart Canvas' (@ Mentions & Interactive Chips)",
          detail: "Transforms static documents into interactive workspaces by typing '@' to embed calendar events, people chips, interactive dropdowns, and file previews."
        },
        {
          name: "Centralized Google Drive & Universal Search",
          detail: "Replaces local file directories with a cloud index powered by predictive 'Priority' file suggestions based on calendar meetings."
        },
        {
          name: "Gemini Workspace Assistant (Enterprise AI)",
          detail: "Integrated sidecar AI that drafts executive emails in Gmail, generates contextual formulas in Sheets, and synthesizes meeting notes in Meet."
        }
      ]
    },
    demographics: {
      geography: "Ubiquitous global footprint across 190+ countries. Dominates consumer and startup sectors globally.",
      motivation: "Enterprises wanting zero-maintenance cloud infrastructure, frictionless browser access, and real-time collaboration.",
      ageDistribution: "Near 100% penetration among Gen Z and Millennials who grew up on Google Classroom.",
      retentionBenchmark: "Ultra-low churn (<2% annually in core enterprise accounts) because email addresses serve as the company identity."
    },
    personas: [
      {
        name: "Arun (38, San Francisco) — 'The High-Velocity Founder'",
        archetype: "Product-Led Startup Operator",
        goal: "Scale his 40-person startup with zero IT overhead and ensure team members can brainstorm together in live documents.",
        painPoint: "Microsoft Office requires desktop license keys, version conflicts (v1_final_final.docx), and email attachments.",
        jtbd: "Give my distributed team instant collaborative workspaces where sharing a link grants immediate editing access.",
        behavior: "Shares Google Doc links in Slack, relies heavily on inline comments and '@' action assignments."
      },
      {
        name: "Patricia (52, Chicago) — 'The Enterprise CIO'",
        archetype: "Enterprise IT & Governance Buyer",
        goal: "Protect sensitive corporate data and ensure SOC2, HIPAA, and GDPR compliance while managing 15,000 corporate laptops.",
        painPoint: "Employees using rogue third-party tools causing corporate data leaks and compliance audit failures.",
        jtbd: "Provide an all-in-one suite with single sign-on (SSO), DLP, and centralized e-discovery.",
        behavior: "Manages permissions via Google Admin Console, sets strict external file-sharing restrictions."
      }
    ],
    nuances: [
      {
        title: "The URL as a Competitive Weapon vs Microsoft's Desktop Moat",
        insight: "Microsoft's moat was the desktop `.docx` file format. Google didn't try to out-feature Word; they transformed files into URLs (`docs.google.com/document/d/...`). A URL can be dropped in a chat message, bookmarked, opened on an iPad without installing software, and edited simultaneously. By changing the unit of work to a web URL, Google redefined workplace collaboration."
      },
      {
        title: "The 'K-12 Trojan Horse': Capturing the Next Generation for Free",
        insight: "Google gave Google Classroom, Docs, and Chromebooks to public schools worldwide virtually for free. Millions of students spent 10 years writing every essay on Google Docs. When these students graduated and entered tech companies, they refused to use desktop Microsoft Word, forcing enterprise CTOs to adopt Google Workspace."
      }
    ],
    critiqueAnd10x: {
      proposal: "Universal Semantic Cross-App Context Engine: An AI that automatically links your 10:00 AM calendar meeting to the relevant Figma spec, previous Slack thread, and project Google Doc in a single pre-meeting brief chip on the Drive homepage.",
      tradeoffs: "High privacy concerns regarding cross-application data synthesis; heavy indexing latency across petabytes of enterprise file repositories."
    },
    interviewCheatSheet: "Google Workspace's disruptive innovation was converting files into collaborative web URLs backed by real-time operational transformation. Its long-term moat is consumer habituation via educational dominance (Classroom) and centralized identity (Gmail)."
  },
  {
    id: "canva",
    week: 2,
    day: 11,
    releaseDate: "2026-11-14",
    name: "Canva",
    category: "Visual Economy & Creator Templates",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
    iconColor: "text-teal-600",
    tagline: "The democratic visual communications suite empowering 170M+ non-designers with modular templates and brand autonomy",
    heroMetric: "170M+ MAU, >$2B ARR, 85%+ Fortune 500 adoption, profitable for 7+ consecutive years",
    whatIsTheProduct: {
      summary: "A cloud-first drag-and-drop graphic design, video editing, and presentation platform that removes the high technical friction of Adobe Creative Suite through millions of curated, ready-to-use professional templates.",
      coreSurfaces: [
        {
          name: "The Drag-and-Drop Canvas & Template Library",
          detail: "A browser-based WYSIWYG canvas powered by HTML5/WebGL with over 100M stock photos, vectors, audio clips, and responsive templates tailored to exact social platform aspect ratios."
        },
        {
          name: "Magic Studio (Generative Design AI)",
          detail: "Suite of AI tools including Magic Switch (1-click conversion from a whiteboard brainstorm into a full pitch deck), Magic Expand, and instant background removal."
        },
        {
          name: "Canva for Enterprise & Brand Kits",
          detail: "Centralized brand governance locking corporate fonts, hex color codes, and logos so non-designer sales and marketing reps can generate collateral without breaking brand guidelines."
        },
        {
          name: "Print-on-Demand & Physical Merchandise Fulfillment",
          detail: "Integrated global printing and logistics network allowing users to design and receive physical business cards, posters, and apparel with 2-day delivery."
        }
      ]
    },
    demographics: {
      geography: "Massive worldwide footprint across 190 countries in over 100 languages. Strongest in US, Brazil, India, UK, and Southeast Asia.",
      motivation: "Small business owners, teachers, marketers, and students who need polished visual assets in 10 minutes without learning Photoshop.",
      ageDistribution: "Broad cross-generational appeal: 16-55 (from high school presentation makers to real estate agents and corporate communications teams).",
      retentionBenchmark: "Outstanding organic word-of-mouth with freemium conversion rate ~5-7%, driving over $2B in highly recurring subscription ARR."
    },
    personas: [
      {
        name: "Carlos (36, Miami) — 'The Local Real Estate Broker'",
        archetype: "Small Business Entrepreneur",
        goal: "Create eye-catching Instagram Reels, flyers, and Open House brochures for new luxury listings in under 15 minutes.",
        painPoint: "Hiring a professional graphic designer costs $100/hour and takes 3 days; Adobe Photoshop has a 40-hour learning curve.",
        jtbd: "Give me stunning, pre-formatted real estate templates so I can post professional property listings before my competitors do.",
        behavior: "Canva Pro subscriber, uses Background Remover constantly, orders physical yard signs via Canva Print."
      },
      {
        name: "Hannah (29, Sydney) — 'The Growth Marketing Manager'",
        archetype: "Corporate Multi-Channel Marketer",
        goal: "Produce 40 variations of LinkedIn and Meta ad creatives each week to A/B test campaign conversion rates.",
        painPoint: "The internal design team has a 3-week backlog for simple social banner revisions.",
        jtbd: "Enable my marketing squad to resize and iterate on ad creatives independently without waiting for agency designers.",
        behavior: "Uses Brand Kits, Magic Resize, and Canva Teams collaboration to share review drafts with leadership."
      }
    ],
    nuances: [
      {
        title: "The 'Template-First' Asymmetry vs Adobe's 'Blank Canvas'",
        insight: "Adobe Photoshop opens to a terrifying blank white rectangle and 80 technical tools. Canva realized that 95% of people do not want to design from scratch; they want to edit an existing, beautiful layout. By indexing over 1M templates by exact intent ('Menu for Italian Restaurant', 'Tech Podcast Cover'), Canva eliminated creative paralysis and won the mass market."
      },
      {
        title: "The Two-Sided Creator Marketplace as an Unfair Moat",
        insight: "Canva doesn't pay an internal team to design 100M templates. They established the Canva Creator Program, paying royalties to thousands of independent designers worldwide whenever users use their assets. This crowdsourced flywheel generates localized, culturally relevant designs in 100+ languages faster than any centralized competitor."
      }
    ],
    critiqueAnd10x: {
      proposal: "Programmatic Live Ad Performance Sync: Connect Canva directly to Meta and Google Ads APIs, automatically generating variations of top-performing ad creatives based on real-time ROAS (Return on Ad Spend) data.",
      tradeoffs: "Drives Canva into complex ad-tech analytics territory; requires maintaining complex third-party ad network API connections."
    },
    interviewCheatSheet: "Canva disrupted Adobe by replacing the blank canvas with intent-driven templates and in-browser drag-and-drop simplicity. Its moat is a decentralized creator marketplace producing millions of culturally tailored templates, combined with a bottoms-up enterprise expansion model powered by Brand Kits."
  },
  {
    id: "ramp",
    week: 2,
    day: 12,
    releaseDate: "2026-11-15",
    name: "Ramp",
    category: "Fintech & Spend Management",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    iconColor: "text-emerald-700",
    tagline: "The corporate card that wins by promising to save companies money rather than maximizing debt",
    heroMetric: "25,000+ businesses, >$30B annualized transaction volume, $7.6B valuation",
    whatIsTheProduct: {
      summary: "A modern corporate charge card and automated spend management platform that unifies corporate cards, expense reimbursements, accounts payable (bill pay), vendor contract negotiations, and travel booking into a single software platform designed to cut corporate waste.",
      coreSurfaces: [
        {
          name: "Zero-Touch Receipt Matching & SMS Submission",
          detail: "Employees swipe their card and receive an instant SMS; texting back a photo of the receipt matches it to the transaction in <5 seconds using OCR, eliminating end-of-month expense reports."
        },
        {
          name: "Algorithmic Price Intelligence & SaaS Negotiation",
          detail: "Benchmarks corporate software contracts against thousands of anonymized company invoices, notifying CFOs when they are overpaying for tools like Datadog or Slack."
        },
        {
          name: "Programmable Corporate Cards & Real-Time Spend Controls",
          detail: "Dynamic category restrictions (e.g., $100/day strictly for rideshare while traveling in London), locking cards automatically if transactions deviate from company policy."
        },
        {
          name: "Automated AP & Invoice Processing (Bill Pay)",
          detail: "AI-extracted line-item invoices, automated two-way accounting sync to NetSuite/QuickBooks, and batch ACH/wire disbursements in 1 click."
        }
      ]
    },
    demographics: {
      geography: "Dominates US tech startups, mid-market enterprises, and scaling scale-ups. Rapidly expanding into traditional brick-and-mortar sectors (retail, healthcare, construction).",
      motivation: "CFOs and controllers seeking automated accounting reconciliation and strict spend governance without 40-hour monthly manual auditing.",
      ageDistribution: "Core buyers: 30-55 CFOs, VPs of Finance, and operations leaders.",
      retentionBenchmark: "Negative net churn (>130% NRR) as client headcounts grow and transaction volumes scale."
    },
    personas: [
      {
        name: "Hannah (39, New York) — 'The Ruthless Startup Controller'",
        archetype: "Financial Hygiene & Compliance Champion",
        goal: "Close company monthly accounting books in 2 days instead of 2 weeks without chasing employees for missing receipts.",
        painPoint: "Employees submitting unreadable paper receipts 45 days late with zero explanation of business purpose.",
        jtbd: "Automate receipt capture and NetSuite categorization at the moment of swipe so our finance team never audits lunch receipts.",
        behavior: "Enforces zero-tolerance receipt rules via Ramp's auto-lock feature; reviews SaaS contract savings weekly."
      },
      {
        name: "Tyler (26, Austin) — 'The Field Sales Representative'",
        archetype: "Friction-Sensitive Frontline Employee",
        goal: "Take prospective enterprise clients out to dinner without carrying \$3,000 of personal credit card debt.",
        painPoint: "Traditional expense tools (Concur, Expensify) requiring 25 clicks, manual form filling, and waiting 3 weeks for reimbursement.",
        jtbd: "Let me snap a receipt photo on my phone and have my expense approved instantly without filing paperwork.",
        behavior: "Swipes physical Ramp card, replies to SMS notifications with photos, books flights via Ramp Travel."
      }
    ],
    nuances: [
      {
        title: "The Counter-Intuitive Business Model: 'We Help You Spend Less'",
        insight: "Traditional credit card companies (Amex) profit when companies spend more money or carry revolving debt. Ramp flipped this incentive on its head by positioning as the anti-spend card: 'Our mission is to help companies spend LESS money and save hours of time.' By building software that identifies redundant SaaS subscriptions and negotiates lower pricing, Ramp built unmatched trust with CFOs."
      },
      {
        title: "The Interchange Arbitrage & Free Software Flywheel",
        insight: "Ramp gives its spend management software away virtually for free because it monetizes on backend interchange fees (~1.5-2.0% paid by merchants on card swipes). By using high-margin card interchange to subsidize world-class accounting software, Ramp disarmed standalone expense competitors (Expensify, Bill.com) who relied on charging \$15/seat monthly software fees."
      }
    ],
    critiqueAnd10x: {
      proposal: "Autonomous Vendor Contract Renegotiator: Ambient AI agents that continuously monitor vendor contract expiration dates, draft negotiation emails based on industry benchmark pricing, and counter-propose optimized multi-year terms automatically.",
      tradeoffs: "Risk of damaging sensitive vendor relationships if automated negotiations lack nuanced executive context."
    },
    interviewCheatSheet: "Ramp disrupted corporate finance by monetizing card interchange to subsidize free, automated spend management software. Its moat is deep ERP accounting integration (NetSuite/QuickBooks), proprietary price benchmark data across 25,000+ businesses, and an aligned business model that saves CFOs time and capital."
  }
];


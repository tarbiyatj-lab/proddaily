// Deep Product Intelligence Catalog & Dynamic AI Teardown Generator for ProdDaily
// Provides instant, interview-grade 6-section PM breakdowns for any product added by the user.

export function detectProductCategory(appName) {
  if (!appName) return "B2B SaaS / Productivity";
  const lower = appName.toLowerCase().trim();

  // 1. Direct company / platform mapping
  const DIRECT_MAP = {
    // HR Tech & People Analytics
    "culture amp": "HR Tech & People Analytics",
    "cultureamp": "HR Tech & People Analytics",
    "culture": "HR Tech & People Analytics",
    "lattice": "HR Tech & People Analytics",
    "gusto": "HR Tech & Payroll Automation",
    "rippling": "Unified Workforce & IT Management",
    "deel": "Global Payroll & Contractor Compliance",
    "workday": "Enterprise HCM & Financial Management",
    "bamboohr": "SMB People Operations & HRIS",
    "charthop": "People Analytics & Org Chart Planning",
    "15five": "Performance Management & Employee Engagement",
    "greenhouse": "Recruitment & Applicant Tracking System",
    "lever": "Talent Acquisition & CRM",

    // Enterprise Cloud & Productivity
    "google apps": "Enterprise Cloud & Productivity",
    "google workspace": "Enterprise Cloud & Productivity",
    "gsuite": "Enterprise Cloud & Productivity",
    "google docs": "Collaborative Cloud Documents",
    "google drive": "Cloud Storage & Enterprise Collaboration",
    "google": "Enterprise Cloud & Search Platforms",
    "microsoft 365": "Enterprise Productivity Suite",
    "office 365": "Enterprise Productivity Suite",
    "slack": "Enterprise Workplace Messaging & Huddles",
    "notion": "Connected Workspace & Modular Knowledge Base",
    "linear": "High-Velocity Issue Tracking & Sprint Execution",
    "jira": "Enterprise Agile Project Tracking",
    "asana": "Work Management & Cross-Functional Orchestration",
    "monday": "Work OS & Workflow Automation",
    "clickup": "All-in-One Productivity & Tasks",
    "coda": "All-in-One Collaborative Docs & Canvas",
    "airtable": "Low-Code Relational Database & Workflows",
    "miro": "Visual Collaboration & Distributed Whiteboarding",
    "figma": "Collaborative Interface Design & Systems",
    "canva": "Accessible Visual Design & Media Creation",
    "loom": "Asynchronous Video Screen Messaging",
    "zoom": "Enterprise Unified Communications & Video",

    // Fintech & Payments
    "stripe": "Fintech & Global Payments Infrastructure",
    "ramp": "Corporate Cards & Automated Spend Management",
    "brex": "Corporate Spend & Venture Banking",
    "plaid": "Open Banking & Financial Data APIs",
    "revolut": "Global Digital Banking & Wealth Super-App",
    "robinhood": "Retail Investment & Wealth Trading",
    "mercury": "Startup Banking & Financial Workflows",
    "wise": "Cross-Border FX & International Money Transfer",
    "coinbase": "Cryptocurrency & Web3 Asset Exchange",
    "square": "Merchant POS & Commerce Ecosystem",
    "paypal": "Digital Payments & Consumer Digital Wallet",
    "klarna": "Buy Now Pay Later (BNPL) & Consumer Finance",
    "affirm": "Point-of-Sale Consumer Installment Credit",

    // Two-Sided Marketplaces & On-Demand
    "airbnb": "Two-Sided Travel & Hospitality Marketplace",
    "uber": "On-Demand Mobility & Logistics Platform",
    "lyft": "Ride-Hailing & Urban Transit Network",
    "doordash": "On-Demand Food Delivery & Local Logistics",
    "instacart": "Grocery Delivery & Retail Marketplace",
    "etsy": "Artisan & Peer-to-Peer E-Commerce",
    "fiverr": "Freelance Services Marketplace",
    "upwork": "Enterprise Talent & Freelance Marketplace",
    "opentable": "Restaurant Reservations & Hospitality SaaS",

    // Consumer, Streaming & Social
    "spotify": "Audio Streaming & Creator Marketplace",
    "netflix": "Subscription Video On Demand (SVOD)",
    "duolingo": "Gamified EdTech & Language Learning",
    "tiktok": "Short-Form Algorithmic Video & Social",
    "instagram": "Visual Social Network & Creator Commerce",
    "tinder": "Location-Based Dating & Matchmaking",
    "hinge": "Intentional Dating & Long-Term Matchmaking",
    "strava": "Connected Fitness & Athletic Social Network",
    "substack": "Creator Publishing & Subscription Newsletters",
    "reddit": "Community-Driven Discussion & Content Aggregation",
    "pinterest": "Visual Discovery & Visual Search Engine",
    "discord": "Voice, Video & Community Spaces",

    // DevTools & Cloud Infrastructure
    "vercel": "Frontend Cloud & Serverless Deployment",
    "github": "Code Hosting & Collaborative Software Development",
    "postman": "API Development & Testing Workspace",
    "supabase": "Open-Source Backend-as-a-Service (BaaS)",
    "datadog": "Cloud Observability & Security Monitoring",
    "snowflake": "Cloud Data Warehouse & Analytics Engine",
    "openai": "Frontier AI & Enterprise LLM Ecosystem",
    "anthropic": "Frontier AI & Claude API Platform"
  };

  for (const [key, category] of Object.entries(DIRECT_MAP)) {
    if (lower === key || lower.includes(key) || key.includes(lower)) {
      return category;
    }
  }

  // 2. High-precision keyword inference
  if (/hr|people|talent|employee|culture|survey|staff|payroll|recruit|hire/.test(lower)) {
    return "HR Tech & People Analytics";
  }
  if (/pay|bank|card|fintech|invest|crypto|wallet|lend|credit|money|checkout|spend|finance/.test(lower)) {
    return "Fintech & Payments";
  }
  if (/market|travel|hotel|stay|flight|booking|ride|cab|mobility|food|delivery|grocery/.test(lower)) {
    return "Two-Sided Marketplace";
  }
  if (/music|stream|video|social|dating|photo|creator|audio|game|fitness|run|athletic/.test(lower)) {
    return "Consumer & Mobile App";
  }
  if (/dev|api|code|cloud|data|database|deploy|git|infra|monitor|ai|llm|backend|docker/.test(lower)) {
    return "DevTools & Cloud Infrastructure";
  }
  if (/shop|store|cart|commerce|retail|buy|checkout/.test(lower)) {
    return "E-Commerce & Digital Commerce";
  }
  if (/learn|course|study|edu|tutor|school|language/.test(lower)) {
    return "EdTech & Learning";
  }
  if (/health|med|care|clinic|doctor|patient|pharma/.test(lower)) {
    return "Digital Health & Biotech";
  }

  return "B2B SaaS / Productivity";
}

export const PREBUILT_KNOWLEDGE_BASE = {
  "culture amp": {
    name: "Culture Amp",
    category: "HR Tech & People Analytics",
    tagline: "The employee experience and analytics platform turning workforce sentiment into executive retention strategy",
    heroMetric: "6,500+ global enterprises, >$150M ARR, 25M+ survey responses, $1.5B+ valuation",
    whatIsTheProduct: {
      summary: "A unified employee experience and people intelligence platform that replaces annual paper HR reviews with continuous pulse surveys, 360-degree performance evaluations, and machine-learning turnover prediction models.",
      coreSurfaces: [
        {
          name: "Engagement Pulse Engine & Benchmark Comparisons",
          detail: "Automated surveys measuring psychological safety, eNPS, and inclusion with statistically validated question sets. Critically, benchmark scores are normalized against 1,000+ peer companies in the same industry and growth stage."
        },
        {
          name: "Continuous Performance & 360° Multi-Rater Reviews",
          detail: "Replaces high-stress annual reviews with continuous 1-on-1 agendas, goal tracking (OKRs), and structured peer feedback loops designed to eliminate recency bias and gender/personality evaluation skew."
        },
        {
          name: "Predictive Flight-Risk & Retention Analytics",
          detail: "Natural Language Processing (NLP) and sentiment classification algorithms that scan thousands of free-text comments to identify team attrition risks months before employees resign."
        },
        {
          name: "Manager Action Frameworks & In-App Playbooks",
          detail: "Translates macro engagement survey data into personalized micro-actions for first-time engineering and product managers (e.g. 'Your team scores low on recognition—here is a 5-minute team habit to fix it')."
        }
      ]
    },
    demographics: {
      geography: "Global enterprise customer base with headquarters in Melbourne, San Francisco, London, and New York. Strongest in tech, finance, professional services, and scaling scale-ups.",
      motivation: "Chief People Officers and HR Leaders needing objective data to prove to CEOs and Boards that company culture directly correlates with EBITDA, retention, and productivity.",
      ageDistribution: "Core enterprise buyers are 35-55 (VPs of HR, Chief People Officers); daily end-users are 22-50 across all departments in client companies.",
      retentionBenchmark: "Net Revenue Retention (NRR) ~115-120%. Annual contract values (ACV) scale from $5,000 (100 seats) to $250,000+ (enterprise-wide multi-year agreements)."
    },
    personas: [
      {
        name: "Claire (44, London) — 'The Board-Reporting Chief People Officer'",
        archetype: "Enterprise Executive & Strategy Buyer",
        goal: "Present defensible workforce retention and sentiment metrics at quarterly Board meetings to justify compensation and DEI budgets.",
        painPoint: "CEOs view HR as a cost center; Google Forms surveys lack statistical validity and peer industry benchmark credibility.",
        jtbd: "Give me board-ready benchmark data comparing our engineering turnover and sentiment against top-tier tech competitors so I can secure leadership investment.",
        behavior: "Logs in quarterly for executive summaries, exports heatmaps to PowerPoint, delegates operational survey administration to HRBPs."
      },
      {
        name: "Devon (32, Austin) — 'The First-Time Engineering Manager'",
        archetype: "Operational People Manager",
        goal: "Understand why 2 senior engineers in his squad seem disengaged and conduct actionable 1-on-1s without awkward confrontation.",
        painPoint: "Traditional performance reviews are tedious paperwork exercises that take 20 hours of administrative typing without improving team velocity.",
        jtbd: "Tell me the 2 specific management habits I need to adjust this quarter so my best developers don't quit during sprint crunch periods.",
        behavior: "Reviews squad heatmap scores, relies heavily on Culture Amp's automated 1-on-1 agenda templates in Slack."
      },
      {
        name: "Amira (26, San Francisco) — 'The Anxious Frontline Contributor'",
        archetype: "Psychological Safety Skeptic",
        goal: "Give honest, critical feedback about burnout and executive compensation without fear of retaliation from her manager.",
        painPoint: "Companies claim surveys are 'anonymous', but employees fear HR can cross-reference department and tenure to identify respondents.",
        jtbd: "Let me share candid workplace truths safely so our executive team actually fixes broken sprint processes without putting my promotion at risk.",
        behavior: "Only completes surveys if the 'Minimum Reporting Group' privacy guarantee (e.g. min 5 respondents) is clearly shown."
      }
    ],
    nuances: [
      {
        title: "The 'Minimum Reporting Group' Trust Architecture",
        insight: "Culture Amp's foundational product moat is not surveys—it is trust game theory. If a manager has 3 direct reports, Culture Amp strictly suppresses individual scores to protect anonymity. Scores only unlock if at least 5 people respond. Without this technical constraint, employees give polite, fake answers, which destroys data integrity and makes the platform worthless to executives."
      },
      {
        title: "Industry Benchmark Normalization as a Switching Moat",
        insight: "A raw score of 72% on 'Manager Feedback' means nothing in isolation. Culture Amp's secret sauce is its proprietary database of 25M+ survey responses across 6,500 companies. Showing that '72% is in the 90th percentile for Seed-to-Series B fintech startups' provides indispensable context that free tools like Typeform or Google Forms cannot replicate."
      },
      {
        title: "The B2B SaaS Churn Trap: Survey Fatigue",
        insight: "The biggest threat to Culture Amp is not competitors like Lattice—it is employee survey exhaustion. If leadership conducts 4 surveys a year but takes zero visible action, response rates plummet from 85% to 35%, leading CFOs to cancel the subscription. Culture Amp solved this by building 'Action Frameworks' that force managers to commit to 1 micro-change within 14 days of survey closing."
      }
    ],
    critiqueAnd10x: {
      proposal: "Automated Slack/Teams Micro-Pulse Agent: Instead of 40-question quarterly surveys, an AI bot asks 1 situational question per week directly in Slack (e.g. 'How smooth was yesterday's code release?'), synthesizing continuous real-time sentiment with zero survey fatigue.",
      tradeoffs: "Risk of employee paranoia regarding continuous workplace surveillance; requires strict SOC2 data partitioning and algorithmic de-identification."
    },
    interviewCheatSheet: "Culture Amp is an enterprise people analytics platform whose moat is psychological trust architecture (minimum reporting thresholds) combined with unmatched global industry benchmark datasets (25M+ responses). It monetizes via high-margin per-seat annual enterprise contracts, winning on statistical credibility over generic survey forms."
  },

  "google apps": {
    name: "Google Workspace (Google Apps)",
    category: "Enterprise Cloud & Productivity",
    tagline: "The cloud-native collaborative operating system that displaced desktop office software with real-time multiplayer editing",
    heroMetric: "3B+ global users, 10M+ paying business organizations, ~$10B+ run-rate revenue",
    whatIsTheProduct: {
      summary: "A cloud-first suite of communication and collaboration tools (Docs, Sheets, Slides, Drive, Meet, Gmail) built on real-time operational transformation, eliminating file attachments and versioning chaos in favor of a universal browser URL.",
      coreSurfaces: [
        {
          name: "Real-Time Operational Transformation (OT) Engine",
          detail: "The algorithmic backbone powering Docs and Sheets, allowing dozens of users to edit the exact same document simultaneously with sub-100ms character sync and zero document locking."
        },
        {
          name: "The 'Smart Canvas' (@ Mentions & Interactive Chips)",
          detail: "Transforms static documents into interactive workspaces by typing '@' to embed calendar events, people chips, interactive dropdowns, project trackers, and file previews directly into text."
        },
        {
          name: "Centralized Google Drive & Universal Search",
          detail: "Replaces local file directories with a cloud file index powered by Google's proprietary search algorithms and predictive 'Priority' file suggestions based on calendar meetings."
        },
        {
          name: "Gemini Workspace Assistant (Multimodal Enterprise AI)",
          detail: "Integrated sidecar AI that drafts executive emails in Gmail, generates contextual formulas in Sheets, synthesizes meeting notes in Meet, and summarizes 50-page Drive folders."
        }
      ]
    },
    demographics: {
      geography: "Ubiquitous global footprint across 190+ countries. Dominates consumer and startup sectors globally, while competing fiercely with Microsoft 365 in legacy enterprise and government sectors.",
      motivation: "Startups and enterprises wanting zero-maintenance cloud infrastructure, frictionless browser access, and real-time collaboration without IT desktop deployments.",
      ageDistribution: "Near 100% penetration among Gen Z and Millennials who grew up on Google Classroom and Chromebooks in K-12 education.",
      retentionBenchmark: "Ultra-low churn (<2% annually in core enterprise accounts) because email addresses and Google Drive repositories serve as the immutable primary identity of the company."
    },
    personas: [
      {
        name: "Arun (38, San Francisco) — 'The High-Velocity Tech Founder'",
        archetype: "Product-Led Startup Operator",
        goal: "Scale his 40-person startup with zero IT overhead and ensure team members can brainstorm together asynchronously in live documents.",
        painPoint: "Microsoft Office requires desktop license keys, version conflicts (v1_final_final.docx), and email attachments.",
        jtbd: "Give my distributed team instant collaborative workspaces where sharing a link grants immediate editing access without software installation.",
        behavior: "Shares Google Doc links in Slack, relies heavily on inline comments and '@' action assignments to run sprint planning."
      },
      {
        name: "Patricia (52, Chicago) — 'The Risk-Averse Enterprise CIO'",
        archetype: "Enterprise IT & Governance Buyer",
        goal: "Protect sensitive corporate data and ensure SOC2, HIPAA, and GDPR compliance while managing provisioning across 15,000 corporate laptops.",
        painPoint: "Employees using rogue third-party tools (Notion, Dropbox, WhatsApp) causing corporate data leaks and compliance audit failures.",
        jtbd: "Provide an all-in-one suite with single sign-on (SSO), data loss prevention (DLP), and centralized e-discovery so my company never fails a regulatory audit.",
        behavior: "Manages permissions via Google Admin Console, sets strict external file-sharing restrictions, mandates 2-factor authentication."
      },
      {
        name: "Jessica (24, New York) — 'The Multitasking Strategy Analyst'",
        archetype: "Daily Core Knowledge Worker",
        goal: "Synthesize customer interview transcripts, model financial projections, and build investor pitch presentations with minimal friction.",
        painPoint: "Struggling to remember complex Excel formulas and wasting hours manually formatting slides before client presentations.",
        jtbd: "Help me write complex formulas and draft clean executive decks quickly so I can deliver strategic insights before my deadline.",
        behavior: "Lives in Sheets and Slides, uses 'Version History' to revert mistakes, embeds live Sheets tables inside Docs."
      }
    ],
    nuances: [
      {
        title: "The URL as a Competitive Weapon vs Microsoft's Desktop Moat",
        insight: "Microsoft's moat was the desktop `.docx` and `.xlsx` file format. Google didn't try to out-feature Excel; they transformed files into URLs (`docs.google.com/document/d/...`). A URL can be dropped in a chat message, bookmarked, opened on an iPad without installing software, and edited simultaneously. By changing the unit of work from a static desktop file to a web URL, Google redefined workplace collaboration."
      },
      {
        title: "The 'K-12 Trojan Horse': Capturing the Next Generation for Free",
        insight: "Google gave Google Classroom, Docs, and Chromebooks to public schools worldwide virtually for free. Millions of students spent 10 years writing every essay on Google Docs. When these students graduated and entered tech companies, they refused to use desktop Microsoft Word, forcing enterprise CTOs to adopt Google Workspace."
      },
      {
        title: "The Sheets vs Excel Asymmetry: Real-Time vs Computation Ceiling",
        insight: "Google Sheets deliberately trades heavy financial computation (Excel can handle 1M+ rows with advanced VBA macros) for collaborative velocity and web API integrations (`=GOOGLEFINANCE()`, `=IMPORTRANGE()`). Senior PMs recognize that Google Sheets is not a calculator—it is a collaborative lightweight database for agile startups."
      }
    ],
    critiqueAnd10x: {
      proposal: "Universal Semantic Cross-App Context Engine: An AI that automatically links your 10:00 AM calendar meeting to the relevant Figma spec, previous Slack thread, and project Google Doc in a single pre-meeting brief chip on the Drive homepage.",
      tradeoffs: "High privacy concerns regarding cross-application data synthesis; heavy indexing latency across petabytes of enterprise file repositories."
    },
    interviewCheatSheet: "Google Workspace's disruptive innovation was converting files into collaborative web URLs backed by real-time operational transformation. Its long-term moat is consumer habituation via educational dominance (Classroom) and centralized identity (Gmail). In interviews, contrast its browser agility against Microsoft's deep enterprise legacy moats."
  },

  "linear": {
    name: "Linear",
    category: "High-Velocity Issue Tracking & DevTools",
    tagline: "The purpose-built, keyboard-first issue tracking tool restoring speed and craft to modern product teams",
    heroMetric: "Tens of thousands of top tech teams (Vercel, Ramp, Cash App, OpenAI), $400M+ valuation, world-class organic viral adoption",
    whatIsTheProduct: {
      summary: "A lightning-fast, opinionated project and issue tracking tool designed specifically for high-performance software and product teams. It prioritizes sub-50ms local synchronization and keyboard ergonomics over Jira's bloated configuration menus.",
      coreSurfaces: [
        {
          name: "Keyboard-First Command Palette & Issue Grid",
          detail: "Every action is mapped to hotkeys (e.g., 'C' to create issue, 'S' for status, 'Cmd+K' command menu). Local optimistic cache guarantees instantaneous UI feedback."
        },
        {
          name: "Automated Cycles & Continuous Roadmaps",
          detail: "Replaces painful 2-hour Scrum planning rituals with automated, rolling 2-week Cycles that auto-archive completed issues and roll unfinished scope forward."
        },
        {
          name: "Linear Asks (Triage & Slack Ingestion)",
          detail: "Converts customer requests and internal Slack messages directly into actionable engineering tickets without leaving the conversation."
        },
        {
          name: "Git & Pull Request Bi-Directional Synchronization",
          detail: "Issues automatically transition from 'In Progress' to 'In Review' and 'Done' as GitHub PRs are opened and merged."
        }
      ]
    },
    demographics: {
      geography: "Strongest in Silicon Valley, New York, London, Berlin, and remote-first engineering cultures worldwide.",
      motivation: "Founders, PMs, and software engineers disgusted by Jira's 5-second page load times and complex administration.",
      ageDistribution: "Core users: 22-42 engineers, designers, and high-tempo product managers.",
      retentionBenchmark: "Extraordinary logo retention (>95%). Once an engineering team standardizes on Linear, switching back to Jira feels like a severe productivity penalty."
    },
    personas: [
      {
        name: "Karri (34, San Francisco) — 'The Craft-Obsessed Head of Product'",
        archetype: "Design-Driven Product Leader",
        goal: "Maintain high team shipping tempo with minimal administrative overhead and zero ticket-grooming bureaucracy.",
        painPoint: "Jira requires 6 mandatory custom fields before an engineer can even save an idea.",
        jtbd: "Give my team an ultra-fast issue tracker that feels like a precision instrument so engineers actually enjoy logging their tasks.",
        behavior: "Triages bugs with keyboard shortcuts every morning in under 5 minutes."
      },
      {
        name: "Tomas (27, Stockholm) — 'The Full-Stack Senior Developer'",
        archetype: "Flow-State Software Engineer",
        goal: "Stay in flow state writing code without being interrupted by complex project management forms.",
        painPoint: "Having to leave VS Code to click through 10 dropdown menus in Jira just to close a completed task.",
        jtbd: "Let me link git branches to ticket IDs so moving code to production automatically updates project status without manual tracking.",
        behavior: "Only interacts with Linear via git commit messages (`fix LINE-104`) and GitHub PR approvals."
      },
      {
        name: "Sophie (40, New York) — 'The Enterprise VP of Engineering'",
        archetype: "Resource & Velocity Executive",
        goal: "Track engineering throughput, cycle lead time, and cross-team dependencies across 8 distributed squads.",
        painPoint: "Executives lack visibility into whether critical product launches are on track for Q4.",
        jtbd: "Provide high-level milestone progress bars and roadmap rollups without burdening engineers with manual time-tracking reports.",
        behavior: "Reviews Linear Insights charts and Cycle burn-up metrics during Monday executive staff meetings."
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

  "airbnb": {
    name: "Airbnb",
    category: "Two-Sided Travel & Hospitality Marketplace",
    tagline: "The global two-sided hospitality platform that institutionalized peer-to-peer home sharing through trust architecture",
    heroMetric: "450M+ guest arrivals annually, >$10B annual revenue, 5M+ active hosts, >$80B market cap",
    whatIsTheProduct: {
      summary: "A global peer-to-peer marketplace connecting travelers seeking unique, local accommodations with property hosts monetizing extra space, supported by payments escrow, dynamic pricing, and bilateral trust systems.",
      coreSurfaces: [
        {
          name: "Guest Search & Algorithmic Category Discovery",
          detail: "Map-based spatial search and 'Airbnb Categories' (Castles, Off-the-Grid, National Parks) designed to inspire travel when users don't have a rigid destination."
        },
        {
          name: "Host Management Console & Smart Pricing",
          detail: "Calendar synchronization, dynamic price recommendations based on local supply/demand surges, messaging auto-responders, and revenue analytics."
        },
        {
          name: "AirCover (Bilateral Insurance & Trust Infrastructure)",
          detail: "Guaranteed $3M damage protection, identity verification, and 24/7 guest rebooking protection that de-risks home sharing for conservative property owners."
        },
        {
          name: "Guest-Host Messaging & In-App Support Hub",
          detail: "Real-time multilingual messaging with automated translation, check-in instructions, door keypad integration, and dispute resolution workflows."
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
        title: "The Category Pivot: Moving Demand from 'Where' to 'What'",
        insight: "Traditional travel sites (Expedia, Booking.com) start with a rigid search box: 'Where are you going and on what dates?'. Airbnb realized that travelers often don't care about the exact city—they want an experience. Introducing 'Airbnb Categories' (Design, Cabins, Treehouses) allowed Airbnb to redistribute booking demand to rural hosts and lower customer acquisition costs."
      },
      {
        title: "The Total Price Display & Regulatory Transparency Balancing Act",
        insight: "Airbnb historically hid cleaning fees until the checkout screen, boosting top-of-funnel click-through rates but creating intense guest dissatisfaction at the point of purchase. Brian Chesky's product decision to roll out 'Display Total Price Before Taxes' traded a slight drop in initial booking conversions for massive long-term brand trust and repeat retention."
      }
    ],
    critiqueAnd10x: {
      proposal: "Curated Group Trip Splitting & Shared Itinerary OS: In-app split payment where each family member pays their individual share directly within 24 hours, combined with an interactive collaborative itinerary mapping local activities.",
      tradeoffs: "Risk of holding host calendars if 1 guest in a group fails to pay before the expiration window; requires complex fractional escrow transactions."
    },
    interviewCheatSheet: "Airbnb is a two-sided marketplace whose competitive moat is brand ubiquity (90% organic direct traffic) and psychological trust architecture (AirCover, dual-blind reviews). Monetization is take-rate based (~14% guest fee + 3% host fee). In PM interviews, emphasize supply-side host acquisition and the strategic shift toward flexible category discovery."
  }
};

// Aliases for fast matching
PREBUILT_KNOWLEDGE_BASE["cultureamp"] = PREBUILT_KNOWLEDGE_BASE["culture amp"];
PREBUILT_KNOWLEDGE_BASE["culture"] = PREBUILT_KNOWLEDGE_BASE["culture amp"];
PREBUILT_KNOWLEDGE_BASE["google"] = PREBUILT_KNOWLEDGE_BASE["google apps"];
PREBUILT_KNOWLEDGE_BASE["google workspace"] = PREBUILT_KNOWLEDGE_BASE["google apps"];
PREBUILT_KNOWLEDGE_BASE["google docs"] = PREBUILT_KNOWLEDGE_BASE["google apps"];
PREBUILT_KNOWLEDGE_BASE["gsuite"] = PREBUILT_KNOWLEDGE_BASE["google apps"];

// Intelligent Algorithmic Teardown Synthesizer for ANY Unrecognized App
export function generateDeepTeardown(appName, userCategory = null) {
  const cleanName = (appName || "Product").trim();
  const normalizedKey = cleanName.toLowerCase();
  
  // 1. Check exact or partial match in prebuilt knowledge base
  for (const [key, data] of Object.entries(PREBUILT_KNOWLEDGE_BASE)) {
    if (normalizedKey === key || normalizedKey.includes(key) || (key.length > 3 && key.includes(normalizedKey))) {
      return {
        ...data,
        name: cleanName // preserve exact user capitalization
      };
    }
  }

  // 2. Automatically infer category if not supplied or default
  const category = (userCategory && userCategory !== "B2B SaaS") 
    ? userCategory 
    : detectProductCategory(cleanName);

  // Dynamic High-Fidelity Synthesizer tailored to product category
  const isConsumer = category.toLowerCase().includes("consumer") || category.toLowerCase().includes("social") || category.toLowerCase().includes("mobile");
  const isFintech = category.toLowerCase().includes("fintech") || category.toLowerCase().includes("payment") || category.toLowerCase().includes("bank");
  const isMarketplace = category.toLowerCase().includes("marketplace") || category.toLowerCase().includes("travel") || category.toLowerCase().includes("transit");
  const isHR = category.toLowerCase().includes("hr") || category.toLowerCase().includes("people") || category.toLowerCase().includes("workforce");
  const isDevTools = category.toLowerCase().includes("dev") || category.toLowerCase().includes("cloud") || category.toLowerCase().includes("api") || category.toLowerCase().includes("data");

  const heroMetric = isConsumer
    ? "50M+ global active users, high DAU/MAU daily habit loop, viral organic K-factor > 1.2"
    : isFintech
    ? "$20B+ annual gross payment volume (GPV), 99.999% uptime SLA, PCI-DSS Level 1 certified"
    : isMarketplace
    ? "Hundreds of thousands of active supply nodes, millions of annual completed transactions, resilient geographic liquidity"
    : isHR
    ? "15,000+ scaling companies, >120% Net Revenue Retention, millions of employee engagement touchpoints"
    : "10,000+ scaling enterprise teams, >$50M ARR, >125% Net Revenue Retention (NRR)";

  return {
    name: cleanName,
    category: category,
    tagline: `The modern ${category} platform designed to eliminate operational friction and accelerate high-velocity user outcomes`,
    heroMetric: heroMetric,
    
    whatIsTheProduct: {
      summary: `${cleanName} is an industry-defining ${category} platform that unifies fragmented workflows into a high-performance, collaborative interface with low cognitive friction and real-time execution.`,
      coreSurfaces: [
        {
          name: "The Primary Workflow Engine & Execution Canvas",
          detail: `The core daily interface where users execute primary ${cleanName} interactions, designed with low-latency responsiveness, modular views, and keyboard shortcuts.`
        },
        {
          name: "Real-Time Collaboration & Synchronization Layer",
          detail: "Enables multi-user presence, asynchronous team comments, activity feeds, and shared project state without file locking or manual reloads."
        },
        {
          name: "Analytics & Telemetry Dashboard",
          detail: "Comprehensive data visualizations, exportable CSV/PDF reports, and executive summary metrics displaying operational health and ROI."
        },
        {
          name: "Extensibility, Webhooks & Enterprise API Gateway",
          detail: "Bidirectional integrations with Slack, Google Workspace, CRM, and cloud databases to automate multi-step trigger-action sequences."
        }
      ]
    },

    demographics: {
      geography: "High penetration across North America, Western Europe, and rapidly scaling tech hubs in Latin America and Asia-Pacific.",
      motivation: isConsumer 
        ? "Users seeking instant gratification, dopamine-positive productivity, and community validation without steep learning curves."
        : "Forward-thinking operators and department heads replacing legacy, bloated corporate tools with modern software craft.",
      ageDistribution: "Core user demographic: 22-45 digital natives, knowledge workers, and technical decision-makers.",
      retentionBenchmark: isConsumer ? "D30 retention exceeding 40% with high organic viral coefficient (K-factor > 1.1)." : "Net Revenue Retention (NRR) > 120%, with low annual gross logo churn (<5%)."
    },

    personas: [
      {
        name: `Jordan (35, San Francisco) — 'The High-Leverage Champion'`,
        archetype: isConsumer ? "Power Consumer Advocate" : "Strategic Department Champion",
        goal: `Streamline team operations and eliminate 8 hours of manual overhead per week using ${cleanName}.`,
        painPoint: "Existing tools are rigid, slow to load, and require 12 clicks to perform standard tasks.",
        jtbd: `Help me and my team execute our core ${category} workflows with speed and clarity so we can hit our quarterly targets.`,
        behavior: "Daily active power-user, configures custom dashboards, fiercely advocates for company-wide licensing."
      },
      {
        name: `Priya (28, London) — 'The Friction-Sensitive Operator'`,
        archetype: "Execution-Focused End User",
        goal: `Complete daily assignments accurately without getting blocked by confusing UI layouts or permission errors.`,
        painPoint: "Having to toggle between 4 disconnected browser tabs and re-entering the same data manually.",
        jtbd: `Give me a clean, intuitive surface that does not overwhelm me with unnecessary enterprise complexity.`,
        behavior: "Heavy keyboard shortcut user, submits bug reports, highly sensitive to app latency and unexpected bugs."
      },
      {
        name: `Marcus (46, New York) — 'The ROI & Governance Executive'`,
        archetype: "Budget & Security Approver",
        goal: `Ensure team compliance, data confidentiality, and measurable productivity lift before signing renewal contracts.`,
        painPoint: "Paying $100K/year for software seats that team members abandon after the first 3 months.",
        jtbd: `Provide clear audit logs, enterprise SSO, and quantifiable business outcomes to prove this investment is justified.`,
        behavior: "Reviews quarterly adoption analytics, manages billing seats, requires SOC2 compliance."
      }
    ],

    nuances: [
      {
        title: "The Opinionated Defaults Moat: Why Constraints Beat Customization",
        insight: `While legacy competitors boast about infinite customization, ${cleanName}'s key competitive advantage is opinionated design. By enforcing clean, standardized workflow primitives, ${cleanName} eliminates decision paralysis and reduces user onboarding time from weeks to minutes.`
      },
      {
        title: "Product-Led Growth (PLG) & Bottom-Up Expansion",
        insight: `${cleanName} avoids relying solely on top-down enterprise sales reps. Instead, individual practitioners adopt the tool independently for high-impact use cases, building irreversible switching costs before expanding organically across team and department tiers.`
      },
      {
        title: "The Speed as a Feature Imperative",
        insight: `In ${category}, responsiveness is not a technical detail—it is the core user retention driver. By minimizing client-side rendering latency and caching state locally, ${cleanName} creates a flow-state experience that makes alternative legacy tools feel sluggish.`
      }
    ],

    critiqueAnd10x: {
      proposal: `AI-Powered Autonomous Workflow Synthesis: Implement ambient LLM agents that proactively observe user actions and draft high-context recommendations before users manually configure dashboards.`,
      tradeoffs: `Risk of hallucinated recommendations frustrating advanced operators; requires balancing inference compute unit economics against tier margins.`
    },

    interviewCheatSheet: `${cleanName} wins in the ${category} space by prioritizing speed, opinionated simplicity, and seamless collaboration over legacy feature bloat. Its moat is driven by viral bottom-up adoption (PLG) and high switching costs created by deep team workflow integration.`
  };
}

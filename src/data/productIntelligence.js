// Deep Product Intelligence Catalog & Dynamic AI Teardown Generator for ProdDaily
// Provides instant, interview-grade 6-section PM breakdowns for any product added by the user.

export const PREBUILT_KNOWLEDGE_BASE = {
  "culture amp": {
    name: "Culture Amp",
    category: "B2B SaaS / HR Tech & People Analytics",
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
    category: "B2B SaaS / Enterprise Collaboration & Cloud Productivity",
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

  "canva": {
    name: "Canva",
    category: "Design & Creative Media / Visual Economy",
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
      },
      {
        name: "Liam (19, Toronto) — 'The Student Club President'",
        archetype: "Non-Technical Community Organizer",
        goal: "Design event posters and sponsor pitch decks for an upcoming university tech hackathon.",
        painPoint: "Zero budget for design software and no formal graphic design training.",
        jtbd: "Make my campus club look like an established, professional organization with clean, modern visual templates.",
        behavior: "Uses Canva Free tier, collaborates synchronously with other club organizers on shared pitch slides."
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
      },
      {
        title: "Bottom-Up Enterprise Trojan Horse: Bypassing the Creative Director",
        insight: "Traditional enterprise design software was purchased exclusively by Creative Directors. Canva entered through sales reps, HR managers, and teachers on free accounts. Today, enterprise CFOs discover that 5,000 employees are already using Canva on expense cards, compelling leadership to sign enterprise-wide Brand Kit agreements."
      }
    ],
    critiqueAnd10x: {
      proposal: "Programmatic Live Ad Performance Sync: Connect Canva directly to Meta and Google Ads APIs, automatically generating variations of top-performing ad creatives based on real-time ROAS (Return on Ad Spend) data.",
      tradeoffs: "Drives Canva into complex ad-tech analytics territory; requires maintaining complex third-party ad network API connections."
    },
    interviewCheatSheet: "Canva disrupted Adobe by replacing the blank canvas with intent-driven templates and in-browser drag-and-drop simplicity. Its moat is a decentralized creator marketplace producing millions of culturally tailored templates, combined with a bottoms-up enterprise expansion model powered by Brand Kits."
  }
};

// Intelligent Algorithmic Teardown Synthesizer for ANY Unrecognized App
export function generateDeepTeardown(appName, category = "B2B SaaS") {
  const normalizedKey = appName.toLowerCase().trim();
  
  // Check exact or partial match in prebuilt knowledge base
  for (const [key, data] of Object.entries(PREBUILT_KNOWLEDGE_BASE)) {
    if (normalizedKey.includes(key) || key.includes(normalizedKey)) {
      return data;
    }
  }

  // Dynamic High-Fidelity Synthesizer tailored to product category
  const isConsumer = category.toLowerCase().includes("consumer") || category.toLowerCase().includes("social") || category.toLowerCase().includes("media");
  const isFintech = category.toLowerCase().includes("fintech") || category.toLowerCase().includes("payment") || category.toLowerCase().includes("bank");
  const isMarketplace = category.toLowerCase().includes("marketplace") || category.toLowerCase().includes("platform");

  const cleanName = appName.trim();
  
  return {
    name: cleanName,
    category: category,
    tagline: `The modern ${category} platform designed to eliminate operational friction and accelerate high-velocity user outcomes`,
    heroMetric: isConsumer ? "50M+ global users, high DAU/MAU habit loop, viral organic acquisition" : "10,000+ scaling teams, >$50M ARR, >125% Net Revenue Retention (NRR)",
    
    whatIsTheProduct: {
      summary: `${cleanName} is an industry-defining ${category} platform that unifies fragmented workflows into a high-performance, collaborative interface with low cognitive friction and real-time execution.`,
      coreSurfaces: [
        {
          name: "The Primary Workflow Engine & Execution Canvas",
          detail: `The core daily interface where users manage primary ${cleanName} interactions, designed with low-latency responsiveness, modular views, and keyboard shortcuts.`
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
        name: `Jordan (35, San Francisco) — 'The High-Leverage Lead'`,
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

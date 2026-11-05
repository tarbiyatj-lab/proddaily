import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const productsFile = path.join(projectRoot, 'src', 'data', 'products.js');

// Queue of high-impact senior PM interview teardowns ready to drop
export const UPCOMING_TEARDOWNS = [
  {
    id: "notion",
    week: 2,
    day: 2,
    name: "Notion",
    category: "B2B SaaS / Productivity",
    badgeColor: "bg-stone-100 text-stone-800 border-stone-300",
    tagline: "The modular workspace that turned documents into relational databases and spawned an organic template economy",
    heroMetric: "100M+ users, >$350M ARR, $10B valuation, 90%+ organic template distribution",
    
    // 1. WHAT ACTUALLY IS THE PRODUCT?
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

    // 2. REAL DEMOGRAPHICS & USER SCALE
    demographics: {
      geography: "Over 80% of active users are outside the United States. Massive grassroots adoption across Japan, South Korea, France, Germany, and the UK.",
      motivation: "Knowledge workers, founders, and students desperate to consolidate 5 disjointed tools (Google Docs, Trello, Evernote, Airtable, and Confluence) into a single cohesive operating system.",
      ageDistribution: "Core adoption is 18-35 (heavy university student and startup operator demographic driven by Reddit, Twitter, and TikTok aesthetic desk setups).",
      retentionBenchmark: "Net Revenue Retention (NRR) exceeds 120% among paying business workspaces, driven by bottom-up expansion from individual note-takers to full company wikis."
    },

    // 3. NAMED, MEMORABLE USER PERSONAS
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

    // 4. CRITICAL PM NUANCES
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
        title: "The Performance Bottleneck & The SQLite SQLite Migration",
        insight: "Notion's greatest strength (everything is an interconnected block object) became its greatest engineering liability. Loading a page with 1,000 blocks required hundreds of React DOM renders and client-side memory overhead, leading to widespread complaints of sluggish mobile performance. Notion had to re-architect its client data layer using an embedded local SQLite engine to achieve instant local cache reads."
      }
    ],

    // 5. CRITIQUE & "HOW TO 10X IT"
    critiqueAnd10x: {
      proposal: "Automated 'Doc Freshness & Stale Wiki Janitor': AI continuously monitors workspace document view frequency, edits, and Slack discussions, automatically flagging deprecated policies and prompting document owners to verify or archive obsolete pages.",
      tradeoffs: "Risk of false-positive archive warnings annoying team leads; requires deep background scanning compute across millions of enterprise blocks."
    },

    // 6. INTERVIEW CHEAT SHEET
    interviewCheatSheet: "Notion democratized relational databases by wrapping them in an aesthetic, modular block canvas. Its growth engine is an unprecedented community template ecosystem that drives zero-CAC bottom-up adoption. Its strategic challenge is balancing infinite consumer flexibility with the permissions, speed, and governance demanded by Fortune 500 enterprises."
  },
  {
    id: "tiktok",
    week: 1,
    day: 5,
    name: "TikTok",
    category: "Consumer Attention & Algorithmic Media",
    badgeColor: "bg-neutral-900 text-white border-neutral-700",
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
      }
    ],
    critiqueAnd10x: {
      proposal: "Algorithmic 'Dopamine Detox & Sleep Guardian': Dynamic pacing algorithms that gradually transition late-night feeds from hyper-stimulating content into calming educational or long-form ambient audio after midnight.",
      tradeoffs: "Directly conflicts with short-term ad impression maximization metrics and executive engagement KPIs."
    },
    interviewCheatSheet: "TikTok replaced the Social Graph (who you follow) with the Interest Graph (what captures your attention in 2 seconds). Its defensibility is pure machine-learning feedback loops on full-screen consumption telemetry. In PM interviews, cite its audio-as-index innovation and frictionless cold-start creator incentives."
  }
];

export function runDailyUpdate() {
  console.log("🚀 Starting ProdDaily Automated Update Pipeline...");

  // 1. Read existing products
  const content = fs.readFileSync(productsFile, 'utf-8');
  
  // Find which upcoming teardown is not yet in SEED_PRODUCTS
  let teardownToAdd = null;
  for (const td of UPCOMING_TEARDOWNS) {
    if (!content.includes(`id: "${td.id}"`)) {
      teardownToAdd = td;
      break;
    }
  }

  if (!teardownToAdd) {
    console.log("ℹ️ All queue teardowns are already deployed!");
    return;
  }

  console.log(`📦 Adding new product teardown: ${teardownToAdd.name} (${teardownToAdd.category})...`);

  // Format object as clean JS
  const objectString = "  " + JSON.stringify(teardownToAdd, null, 2).replace(/\n/g, "\n  ") + ",\n";

  // Insert right after `export const SEED_PRODUCTS = [\n`
  const target = "export const SEED_PRODUCTS = [\n";
  const updatedContent = content.replace(target, target + objectString);

  fs.writeFileSync(productsFile, updatedContent, 'utf-8');
  console.log(`✅ ${teardownToAdd.name} added to src/data/products.js!`);

  // 2. Build for production
  console.log("🔨 Running production build (npm run build)...");
  execSync('npm run build', { cwd: projectRoot, stdio: 'inherit' });

  // 3. Deploy to Vercel production
  console.log("🚀 Deploying to Vercel production (https://proddaily.vercel.app)...");
  execSync('npx --yes vercel deploy --prod --yes', { cwd: projectRoot, stdio: 'inherit' });

  console.log(`\n🎉 SUCCESS! ${teardownToAdd.name} is now LIVE on https://proddaily.vercel.app!`);
}

// Run if called directly
runDailyUpdate();

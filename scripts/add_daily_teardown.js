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
    id: "figma",
    week: 1,
    day: 4,
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
      }
    ],
    critiqueAnd10x: {
      proposal: "Automated Bi-Directional Production Code Sync: An AI agent that inspects real-world React/SwiftUI code repos and warns designers in Figma when their design deviates from existing production design tokens.",
      tradeoffs: "High friction requiring git repository access and deep build pipeline integrations."
    },
    interviewCheatSheet: "Figma conquered the design industry by betting early on in-browser WebGL/Wasm performance and real-time multiplayer collaboration. Its moat is the organizational design system and the 3:1 ratio of non-designer seats that embed Figma into company-wide product development workflows."
  },
  {
    id: "uber",
    week: 1,
    day: 5,
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
  }
];

export function runDailyUpdate() {
  console.log("🚀 Starting ProdDaily Automated Update Pipeline...");

  // 1. Read existing products
  const content = fs.readFileSync(productsFile, 'utf-8');
  
  // Find which upcoming teardown is not yet in SEED_PRODUCTS
  let teardownToAdd = null;
  for (const td of UPCOMING_TEARDOWNS) {
    const hasId = content.includes(`id: "${td.id}"`) || 
                  content.includes(`"id": "${td.id}"`) || 
                  content.includes(`'${td.id}'`);
    if (!hasId) {
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

  // 2. Commit and push to GitHub (which triggers Vercel automatic deployment)
  console.log("📦 Committing and pushing to GitHub (https://github.com/tarbiyatj-lab/proddaily)...");
  try {
    execSync('git add src/data/products.js && git commit -m "feat(curriculum): add ' + teardownToAdd.name + ' PM teardown" && git push', { cwd: projectRoot, stdio: 'inherit' });
    console.log("✅ Pushed to GitHub! Vercel auto-deploy initiated.");
  } catch (err) {
    console.log("ℹ️ Git push skipped or failed; deploying directly via Vercel CLI...");
  }

  // 3. Deploy to Vercel production
  console.log("🚀 Deploying to Vercel production (https://proddaily.vercel.app)...");
  execSync('npx --yes vercel deploy --prod --yes', { cwd: projectRoot, stdio: 'inherit' });

  console.log(`\n🎉 SUCCESS! ${teardownToAdd.name} is now LIVE on https://proddaily.vercel.app!`);
}

// Run if called directly
runDailyUpdate();

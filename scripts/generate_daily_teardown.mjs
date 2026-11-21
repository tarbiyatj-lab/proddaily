import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const productsFile = path.join(projectRoot, 'src', 'data', 'products.js');

const COLOR_PALETTES = [
  { badgeColor: 'bg-purple-100 text-purple-800 border-purple-300', iconColor: 'text-purple-600' },
  { badgeColor: 'bg-blue-100 text-blue-800 border-blue-300', iconColor: 'text-blue-600' },
  { badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300', iconColor: 'text-emerald-600' },
  { badgeColor: 'bg-amber-50 text-amber-800 border-amber-200', iconColor: 'text-amber-600' },
  { badgeColor: 'bg-rose-100 text-rose-800 border-rose-300', iconColor: 'text-rose-600' },
  { badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300', iconColor: 'text-indigo-600' }
];

function getTodayParis() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Paris',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date());
}

async function callGemini(apiKey, prompt) {
  const models = ['gemini-2.5-flash', 'gemini-2.0-flash'];
  let lastError = null;

  for (const model of models) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: 'application/json',
          temperature: 0.75
        }
      })
    });

    if (!res.ok) {
      const errText = await res.text();
      lastError = new Error(`Model ${model} failed (${res.status}): ${errText.slice(0, 300)}`);
      console.warn(lastError.message);
      continue;
    }

    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      lastError = new Error(`Model ${model} returned empty content`);
      continue;
    }
    return JSON.parse(text);
  }

  throw lastError || new Error('All Gemini models failed');
}

function validateProduct(p, existingIds) {
  const requiredStrings = ['id', 'name', 'category', 'tagline', 'heroMetric', 'interviewCheatSheet'];
  for (const k of requiredStrings) {
    if (typeof p[k] !== 'string' || !p[k].trim()) {
      throw new Error(`Missing or invalid string field: ${k}`);
    }
  }
  p.id = p.id.toLowerCase().replace(/[^a-z0-9_]+/g, '_').replace(/^_|_$/g, '');
  if (existingIds.has(p.id)) {
    throw new Error(`Generated duplicate product id: ${p.id}`);
  }
  if (!p.whatIsTheProduct?.summary || !Array.isArray(p.whatIsTheProduct?.coreSurfaces) || p.whatIsTheProduct.coreSurfaces.length < 3) {
    throw new Error('Invalid whatIsTheProduct structure');
  }
  if (!p.demographics?.geography || !p.demographics?.motivation || !p.demographics?.ageDistribution || !p.demographics?.retentionBenchmark) {
    throw new Error('Invalid demographics structure');
  }
  if (!Array.isArray(p.personas) || p.personas.length < 2) {
    throw new Error('Invalid personas structure');
  }
  if (!Array.isArray(p.nuances) || p.nuances.length < 2) {
    throw new Error('Invalid nuances structure');
  }
  if (!p.critiqueAnd10x?.proposal || !p.critiqueAnd10x?.tradeoffs) {
    throw new Error('Invalid critiqueAnd10x structure');
  }
  return p;
}

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is not set.');
  }

  const content = fs.readFileSync(productsFile, 'utf-8');
  const splitIdx = content.indexOf('export function getAvailableCurriculumProducts');
  if (splitIdx === -1) {
    throw new Error('Could not find getAvailableCurriculumProducts in src/data/products.js');
  }

  const curriculumSection = content.slice(0, splitIdx);
  const existingIds = new Set([...curriculumSection.matchAll(/id:\s*["']([^"']+)["']/g)].map(m => m[1]));
  const existingNames = [...curriculumSection.matchAll(/name:\s*["']([^"']+)["']/g)].map(m => m[1]);
  const existingDays = [...curriculumSection.matchAll(/day:\s*(\d+)/g)].map(m => Number(m[1]));
  const existingDates = new Set([...curriculumSection.matchAll(/releaseDate:\s*["']([^"']+)["']/g)].map(m => m[1]));

  const todayStr = getTodayParis();
  const forceAdd = process.env.FORCE_ADD === 'true';

  if (existingDates.has(todayStr) && !forceAdd) {
    console.log(`Already have a product scheduled for ${todayStr}. Skipping.`);
    return;
  }

  const nextDay = (existingDays.length ? Math.max(...existingDays) : 0) + 1;
  const nextWeek = Math.ceil(nextDay / 5);
  const palette = COLOR_PALETTES[nextDay % COLOR_PALETTES.length];

  const prompt = `You are a Principal Product Manager writing a sharp, senior-PM interview teardown for ProdDaily.
Pick ONE iconic, real-world tech product that is NOT in this already-covered list: ${existingNames.join(', ')}.
Choose across diverse categories (AI tools, developer tools, fintech, consumer apps, B2B SaaS, marketplaces, climate/energy tech, cloud infra) such as Duolingo, Slack, Shopify, Discord, Revolut, Wise, Perplexity, Cursor, Databricks, Cloudflare, Loom, Miro, Airtable, Strava, DoorDash, Booking.com, Rippling, Brex, Supabase, Vercel, GitHub Copilot, Netflix, WhatsApp, or HubSpot.

Return ONLY a valid JSON object matching this exact schema (no markdown fences, no extra keys):
{
  "id": "lowercase_snake_case_id",
  "name": "Product Name",
  "category": "Short 2-4 Word Category",
  "tagline": "One crisp sentence capturing the core product thesis",
  "heroMetric": "Real-world scale, revenue, or retention headline metrics",
  "whatIsTheProduct": {
    "summary": "2-3 sentence architectural and product overview",
    "coreSurfaces": [
      { "name": "Surface 1", "detail": "Concrete product mechanics" },
      { "name": "Surface 2", "detail": "Concrete product mechanics" },
      { "name": "Surface 3", "detail": "Concrete product mechanics" },
      { "name": "Surface 4", "detail": "Concrete product mechanics" }
    ]
  },
  "demographics": {
    "geography": "Key markets and geographic footprint",
    "motivation": "Core user/buyer motivation",
    "ageDistribution": "Primary user/buyer profile",
    "retentionBenchmark": "Concrete retention or NRR moat"
  },
  "personas": [
    {
      "name": "FirstName (Age, City) — 'Persona Nickname'",
      "archetype": "Short Archetype",
      "goal": "Primary goal",
      "painPoint": "Main friction before this product",
      "jtbd": "Jobs-to-be-done quote",
      "behavior": "Weekly usage pattern"
    },
    {
      "name": "FirstName (Age, City) — 'Persona Nickname'",
      "archetype": "Short Archetype",
      "goal": "Primary goal",
      "painPoint": "Main friction before this product",
      "jtbd": "Jobs-to-be-done quote",
      "behavior": "Weekly usage pattern"
    }
  ],
  "nuances": [
    { "title": "Strategic Nuance 1", "insight": "Deep PM insight on monetization, growth loop, or moat" },
    { "title": "Strategic Nuance 2", "insight": "Deep PM insight on product tradeoff or distribution" }
  ],
  "critiqueAnd10x": {
    "proposal": "Bold 10x product improvement proposal",
    "tradeoffs": "Key execution, business, or UX risks"
  },
  "interviewCheatSheet": "2-3 sentence senior PM interview soundbite summarizing business model, moat, and strategic edge."
}`;

  console.log(`Generating Day ${nextDay} (${todayStr}) teardown via Gemini...`);
  const generated = await callGemini(apiKey, prompt);
  const validated = validateProduct(generated, existingIds);

  const finalProduct = {
    id: validated.id,
    week: nextWeek,
    day: nextDay,
    releaseDate: todayStr,
    name: validated.name,
    category: validated.category,
    badgeColor: palette.badgeColor,
    iconColor: palette.iconColor,
    tagline: validated.tagline,
    heroMetric: validated.heroMetric,
    whatIsTheProduct: validated.whatIsTheProduct,
    demographics: validated.demographics,
    personas: validated.personas,
    nuances: validated.nuances,
    critiqueAnd10x: validated.critiqueAnd10x,
    interviewCheatSheet: validated.interviewCheatSheet
  };

  const target = 'export const ALL_CURRICULUM_PRODUCTS = [\n';
  if (!content.includes(target)) {
    throw new Error('Could not find ALL_CURRICULUM_PRODUCTS array start');
  }

  const banner = `  // ========================================================\n  // DAY ${nextDay} (${todayStr}): ${finalProduct.name.toUpperCase()}\n  // ========================================================\n`;
  const objectString = '  ' + JSON.stringify(finalProduct, null, 2).replace(/\n/g, '\n  ') + ',\n';
  const updatedContent = content.replace(target, target + banner + objectString);

  fs.writeFileSync(productsFile, updatedContent, 'utf-8');
  console.log(`Added Day ${nextDay}: ${finalProduct.name} (${finalProduct.id}) for ${todayStr}`);
}

main().catch(err => {
  console.error('Daily teardown generation failed:', err);
  process.exit(1);
});

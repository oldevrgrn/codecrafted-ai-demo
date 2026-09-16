# CodeCrafted AI Demo

A mobile-first, three-demo sales tool for pitching AI automation to local Southern Utah businesses. Recreated from the original Abacus.ai build so it can live in GitHub + Vercel and be edited directly.

## Demos

- **Missed Call Auto Text-Back** (`/demos/missed-call`) — simulates an instant SMS reply to a missed sales call.
- **AI Quote Generator** (`/demos/quote-generator`) — turns a job description into a formatted line-item quote.
- **Review Response Bot** (`/demos/review-bot`) — drafts a reply to a Google review, with real star ratings (1–5) shown on presets and a clickable star picker for pasted reviews.
- **Sloppy Note → Clean Memo** (`/demos/note-scanner`) — photograph a handwritten job note and get back a clean, filed-ready memo. **This one calls a real AI model** (Claude, via `/api/scan-note`) since OCR/handwriting recognition can't be faked with a template — see setup below.
- **Instant Website Chat** (`/demos/chat-widget`) — a simulated website chat widget that answers common questions (hours, pricing, service area, emergencies) instantly.
- **Quote Follow-Up Sequence** (`/demos/follow-up`) — generates a 3-touch (Day 1 / 3 / 7) follow-up text sequence for a quote that's gone cold.

Five of the six demos run **instantly, client-side, with no API key or backend cost** — the content is generated from realistic templates in `lib/`, not a live LLM call. This was a deliberate choice for reliability during in-person pitches (no dependency on cell signal or an API being up).

The **note-scanner is the one exception** — it needs a real photo transcribed, so it calls the Anthropic API server-side:

1. Get an API key at [console.anthropic.com](https://console.anthropic.com)
2. In Vercel: Project → Settings → Environment Variables → add `ANTHROPIC_API_KEY`
3. Redeploy (or it'll pick it up on the next push)
4. For local dev, add the same key to a `.env.local` file (already gitignored) as `ANTHROPIC_API_KEY=sk-ant-...`

Without the key, that one demo will show a clear error message — the other five are unaffected.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Editing

- **Copy / phone number:** `lib/site.ts`
- **Missed-call scenarios:** `lib/missedCallScenarios.ts`
- **Quote templates & pricing:** `lib/quoteData.ts`
- **Review templates & star ratings:** `lib/reviewData.ts`
- **Note-scanner prompt/model:** `app/api/scan-note/route.ts`
- **Chat widget FAQ answers:** `lib/chatWidgetData.ts`
- **Follow-up sequence copy:** `lib/followUpData.ts`
- **Colors / theme:** CSS variables in `app/globals.css`, Tailwind config in `tailwind.config.ts`

## Deploying to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the `codecrafted-ai-demo` GitHub repo
3. Leave all settings as default (Vercel auto-detects Next.js) and click **Deploy**

Every push to `main` will auto-redeploy.

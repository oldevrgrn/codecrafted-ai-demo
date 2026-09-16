# CodeCrafted AI Demo

A mobile-first, three-demo sales tool for pitching AI automation to local Southern Utah businesses. Recreated from the original Abacus.ai build so it can live in GitHub + Vercel and be edited directly.

## Demos

- **Missed Call Auto Text-Back** (`/demos/missed-call`) — simulates an instant SMS reply to a missed sales call.
- **AI Quote Generator** (`/demos/quote-generator`) — turns a job description into a formatted line-item quote.
- **Review Response Bot** (`/demos/review-bot`) — drafts a reply to a Google review, with real star ratings (1–5) shown on presets and a clickable star picker for pasted reviews.
- **Voicemail → Dispatch Ticket** (`/demos/dispatch-ticket`) — a rambling voicemail transcript becomes a clean dispatch ticket (caller name, callback number, urgency, suggested action) instantly.
- **Instant Website Chat** (`/demos/chat-widget`) — a simulated website chat widget that answers common questions (hours, pricing, service area, emergencies) instantly.
- **Quote Follow-Up Sequence** (`/demos/follow-up`) — generates a 3-touch (Day 1 / 3 / 7) follow-up text sequence for a quote that's gone cold.

All six demos run **instantly, client-side, with no API key or backend cost** — the content is generated from realistic templates and lightweight text parsing in `lib/`, not a live LLM call. This was a deliberate choice for reliability during in-person pitches (no dependency on cell signal, an API key, or a third-party service being up).

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
- **Voicemail samples & ticket extraction:** `lib/voicemailData.ts`
- **Chat widget FAQ answers:** `lib/chatWidgetData.ts`
- **Follow-up sequence copy:** `lib/followUpData.ts`
- **Colors / theme:** CSS variables in `app/globals.css`, Tailwind config in `tailwind.config.ts`

## Deploying to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the `codecrafted-ai-demo` GitHub repo
3. Leave all settings as default (Vercel auto-detects Next.js) and click **Deploy**

Every push to `main` will auto-redeploy.

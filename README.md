# CodeCrafted AI Demo

A mobile-first, three-demo sales tool for pitching AI automation to local Southern Utah businesses. Recreated from the original Abacus.ai build so it can live in GitHub + Vercel and be edited directly.

## Demos

- **Missed Call Auto Text-Back** (`/demos/missed-call`) — simulates an instant SMS reply to a missed sales call.
- **AI Quote Generator** (`/demos/quote-generator`) — turns a job description into a formatted line-item quote.
- **Review Response Bot** (`/demos/review-bot`) — drafts a reply to a Google review (positive, neutral, or negative).

All three run **instantly, client-side, with no API key or backend cost** — the content is generated from realistic templates in `lib/`, not a live LLM call. This was a deliberate choice for reliability during in-person pitches (no dependency on cell signal or an API being up). If you ever want it wired to a real LLM instead, the three demo pages are the only files that would need an API route swapped in.

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
- **Review templates:** `lib/reviewData.ts`
- **Colors / theme:** CSS variables in `app/globals.css`, Tailwind config in `tailwind.config.ts`

## Deploying to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the `codecrafted-ai-demo` GitHub repo
3. Leave all settings as default (Vercel auto-detects Next.js) and click **Deploy**

Every push to `main` will auto-redeploy.

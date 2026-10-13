# South Oxhey Directory

Neighbour-recommended local services for South Oxhey, Watford — trades, legal help, events, photography, and day-to-day work.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Hardcoded seed data in `src/data/` accessed only via `src/lib/directory.ts` (swap this layer for a DB later)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

- `/` — search, categories, featured + all listings
- `/categories/[slug]` — listings in a category
- `/listings/[slug]` — listing detail with contact actions
- `/suggest` — suggest a business (UI only in v1)

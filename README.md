# STRATOSPHERE

A Phil Stringer Program. Marketing site for The Stratosphere, the 12-month
elite AI cohort. Built with **Next.js** (App Router) + TypeScript, ported
faithfully from the design reference (`stratosphere-landing.html`).

## Running it locally

You need [Node.js](https://nodejs.org) 18.18+ installed. Then, in this folder:

```bash
npm install      # one time, installs dependencies
npm run dev      # start the dev server
```

Open http://localhost:3000 in your browser. The page reloads as you edit.

Other commands:

```bash
npm run build    # production build (also catches errors)
npm run start    # serve the production build
npm run lint     # check code style
```

## How it is organized

- `app/page.tsx` — the landing page. It just stacks the sections in order.
- `app/apply/page.tsx` — placeholder Apply page that every Apply button links to.
- `app/layout.tsx` — page shell, fonts (Anton + Hanken Grotesk), and SEO/share metadata.
- `app/globals.css` — **the design system**. All brand colors and fonts live in
  the `:root` token block at the top. Change a color once there and the whole
  site follows.
- `components/` — one file per section: `Nav`, `Hero`, `Creds`, `Premise`,
  `Inside`, `Ascent`, `Phil`, `FinalCTA`, `Footer`, plus the decorative
  `Clouds`, `Stars`, `MarbleVeins` and a `MobileApplyBar`.

The text copy lives inside each section component as plain arrays/strings, so
it is easy to edit without touching layout.

## Still to provide (search the code for `TODO(asset)`)

- Real **logomark** SVG (`components/Logomark.tsx`) — used in nav and footer.
- **Phil's photo** for the About section (`components/Phil.tsx`).
- Real **media logos** (FOX, CBS, NBC, ...) (`components/Creds.tsx`).
- **Favicon** and an Open Graph **share image**.
- The real **Apply** destination (form, Calendly, or Typeform) — currently the
  buttons go to the `/apply` placeholder page (`app/apply/page.tsx`).
- A licensed **headline font**, if not staying on Anton (swap in `app/layout.tsx`).

## Brand rules baked in

- True black base, lime `#CBFB44` as the only accent.
- No em-dashes in copy.
- "Investment" rather than price or cost.
- Motion (drifting clouds, twinkling stars, scroll reveals) automatically
  turns off for visitors who set "reduce motion" in their OS.

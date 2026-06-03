# STRATOSPHERE — Build Brief

A Phil Stringer Program. Marketing site for The Stratosphere, his 12-month elite AI cohort. This brief is the handoff for building the production site in Claude Code. The design reference is `stratosphere-landing.html` (open it in a browser to see motion, clouds, and load behavior).

---

## 1. What this is

A single high-conversion landing page (with room to grow into a multi-page site). Goal: get qualified people to apply for the next cohort. Tone is confident and premium, never apologetic, no filler.

Hero line: **RISE ABOVE THE NOISE.**
Subhead: **AI training that actually moves the needle.**

---

## 2. Design system (port these exactly)

Drop this token block in first. Everything in the reference file is driven by it, so colors and fonts change in one place.

```css
:root{
  /* base */
  --black:#040404;
  --black-2:#0A0A0B;
  --panel:#0C0D0E;
  --panel-2:#101113;
  --line:rgba(255,255,255,0.09);
  --line-strong:rgba(255,255,255,0.18);

  /* brand accent */
  --lime:#CBFB44;        /* THE Phil Stringer accent */
  --lime-bright:#DBFF6B;
  --lime-deep:#A6D62E;

  /* text */
  --white:#FFFFFF;
  --ink:#F4F5F2;
  --muted:#AFB3AC;
  --muted-dim:#71746C;

  /* type */
  --display:'Anton',sans-serif;        /* swap for the real licensed headline font */
  --body:'Hanken Grotesk',sans-serif;
}
```

**Color rules**
- True black is the base. Lime is the only accent. White and grey carry the text. Do not introduce a second accent color.
- Lime is used sparingly and intentionally: logomark, section kickers, one keyword per headline, stat numbers, primary buttons, and the card hover line. Lime on black, black text on lime buttons.
- Headlines are white with a single lime keyword (the PHIL / STRINGER lockup logic). Some section titles can go fully lime (matching the "A BIT ABOUT PHIL" treatment).

**Typography**
- Display: heavy condensed uppercase. The reference uses **Anton** (free, Google Fonts) as the closest match. If Phil has a licensed headline face, swap `--display` and keep everything else.
- Body: **Hanken Grotesk** (free, Google Fonts). Clean, neutral, readable on black.
- Headlines are uppercase, tight line-height (around 0.86 to 0.92), letter-spacing near 0.01em.

---

## 3. Page structure (top to bottom)

1. **Fixed nav** — logomark + STRATOSPHERE wordmark + "By Phil Stringer", links, lime Apply button. Transparent at top, blurs to near-black on scroll.
2. **Hero** — black marble + faint stars (high) + drifting wispy clouds (lower band) + lime horizon glow. Eyebrow, headline, subhead, primary + ghost CTA. Altitude rail on the right marking STRATOSPHERE.
3. **As Seen In** — FOX, CBS, NBC, ABC, NPR, CNN, PEOPLE (currently text, swap for real logo SVGs).
4. **The Premise** — "Most people use AI. Stratosphere members operate it." plus stats (5M+, 5,000+, 1,000+, 23).
5. **What's Inside** — six cards mapped to the real program: 12-month cohort, 100+ live calls, on-demand training, certification, private community, evolving prompt library.
6. **The Ascent** — the year as three altitude phases: Liftoff (months 1-4), Climb (5-8), Stratosphere (9-12).
7. **A Bit About Phil** — bio from his real about copy, with endorsement line.
8. **Final CTA** — "Rise Above The Noise" with clouds + lime glow, apply button, application note.
9. **Footer** — logomark, links, copyright.

---

## 4. Motion and the cloud system

The clouds are the signature element, so keep them. Implementation in the reference:
- Soft radial-gradient blobs, heavy CSS blur (around 48px), low opacity, drifting left to right on long random durations (42 to 88 seconds). Most are cool white, roughly 1 in 3 is lime-tinted.
- They sit in the lower band of the hero and the final CTA, with clear black "sky" above, so the page reads as being above the cloud layer. That visual is the whole "rise above the noise" idea, do not let clouds cover the headline.
- Other motion: nav blur on scroll, staggered reveal on scroll (IntersectionObserver), card lift + lime top-line on hover, ghost-button arrow nudge, altitude band slide on hover.

If you move to React, rebuild the clouds with the Motion library and respect `prefers-reduced-motion`.

---

## 5. Assets to provide

- [ ] **Real logomark** (SVG). The reference uses a hand-drawn infinity placeholder. Replace both instances (nav + footer).
- [ ] **Phil photo** (the black-marble headshot, transparent or matched background) for the About section. Reference has a placeholder box.
- [ ] **Licensed headline font** if not using Anton.
- [ ] **Media logos** (FOX, CBS, NBC, ABC, NPR, CNN, PEOPLE) as white/mono SVGs.
- [ ] **Favicon** and social share image (Open Graph) for STRATOSPHERE.
- [ ] **Apply destination** — link the buttons to the real application form or Calendly.

---

## 6. Copy and brand rules (non-negotiable)

- No em-dashes anywhere. Use commas, periods, parentheses, or restructure.
- Use "investment" rather than price or cost in any client-facing copy.
- Confident and warm, never apologetic, no AI-sounding filler.
- Headlines uppercase. Keep the punchy short lines.

---

## 7. Recommended stack

For a fast marketing site that is easy to expand into multiple pages: **Astro** with Tailwind, or **Next.js** if you want it inside an existing app. The reference is plain HTML/CSS/JS, so it ports cleanly into either. Keep the token block as CSS variables (or map them to Tailwind theme values).

---

## 8. Kickoff prompt for Claude Code

Paste this in Claude Code once you are in the repo, with `stratosphere-landing.html` and this brief in the folder:

> Build a production marketing site for STRATOSPHERE (a Phil Stringer program) using Astro + Tailwind. Use `stratosphere-landing.html` as the exact design reference and `STRATOSPHERE-build-brief.md` as the spec. Match the design system precisely: true black base, lime #CBFB44 as the only accent, Anton for condensed uppercase headlines, Hanken Grotesk for body. Recreate the hero with the drifting wispy cloud layer below clear black sky, the altitude rail, and all sections in the brief. Componentize sections (Nav, Hero, Creds, Premise, Inside, Ascent, Phil, FinalCTA, Footer). Make it fully responsive, add prefers-reduced-motion support, and wire the Apply buttons to a placeholder /apply route. No em-dashes in any copy. Start by scaffolding the project and the token/Tailwind config, then build section by section.

---

## 9. Open questions to settle before/while building

- Is this one landing page, or the first page of a fuller STRATOSPHERE site (Curriculum, Pricing/Apply, FAQ, Login to the community)?
- Does the application go to a form, Calendly, or a typeform?
- Do we want a sticky Apply bar on mobile?
- Same system rolled across Phil's other web properties, or Stratosphere only for now?

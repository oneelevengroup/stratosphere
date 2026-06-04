/**
 * Fixed, full-viewport cloud layers for the hero "dive" transition. Two
 * pre-baked cloud textures (raster PNGs, so scaling them is GPU-cheap) sit as
 * a fixed overlay. Their scale + opacity are driven entirely by CSS
 * scroll-driven animations (see globals.css) so the motion stays perfectly in
 * sync with native scrolling — no JS, no pinning. They're invisible at the top
 * of the page and swell up to envelop the screen as you scroll past the hero,
 * then clear to reveal the section below.
 */
export default function DiveClouds() {
  return (
    <div className="dive-clouds" aria-hidden="true">
      <div className="dive-cloud far" />
      <div className="dive-cloud mid" />
      <div className="dive-cloud near" />
    </div>
  );
}

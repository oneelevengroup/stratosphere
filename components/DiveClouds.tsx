/**
 * Volumetric cloud planes for the hero "dive" transition. Each layer is an
 * SVG fractal-noise field masked into a soft cloud shape (white flood comped
 * through a high-contrast noise alpha). The layers scale up at different rates
 * as the dive progresses (driven by --p in CSS), so you appear to fly forward
 * through stacked cloud depths. Hidden at the top of the hero (opacity 0) and
 * only materialize as you scroll into the dive.
 */
const LAYERS = [
  { cls: "far", freq: 0.024, seed: 21, color: "#d7e2ef" },
  { cls: "mid", freq: 0.015, seed: 7, color: "#e8f0f8" },
  { cls: "near", freq: 0.0095, seed: 33, color: "#f5f9fd" },
];

export default function DiveClouds() {
  return (
    <div className="dive-clouds" aria-hidden="true">
      {LAYERS.map((l, i) => (
        <svg
          key={l.cls}
          className={`dive-cloud ${l.cls}`}
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 800 800"
        >
          <filter id={`dc${i}`} x="-40%" y="-40%" width="180%" height="180%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={l.freq}
              numOctaves={5}
              seed={l.seed}
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix
              in="noise"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1.7 -0.5"
              result="mask"
            />
            <feFlood floodColor={l.color} result="tint" />
            <feComposite in="tint" in2="mask" operator="in" />
          </filter>
          <rect width="100%" height="100%" filter={`url(#dc${i})`} />
        </svg>
      ))}
    </div>
  );
}

import type { CSSProperties } from "react";
import { seededRandom } from "@/lib/prng";

/**
 * The sea of clouds below the viewer — the "flying above the stratosphere"
 * deck. Three parallax layers anchored to the bottom of the hero: far haze
 * near the horizon (small, very blurred, slow, faint), a mid deck, and near
 * cloud tops closest to the viewer (large, brighter, faster). The drift is the
 * shared `drift` CSS animation (reduced-motion stops it); the scatter is
 * seeded so server and client render identically.
 *
 * `bottom` places each puff vertically within the deck: higher % = farther up
 * toward the horizon, lower (and negative) % = closest, bleeding off-screen.
 */
type Layer = {
  count: number;
  bottom: [number, number]; // % within the deck
  size: [number, number]; // px width
  flatten: [number, number]; // height = width * this (flat cloud tops)
  blur: number; // px
  opacity: [number, number];
  duration: [number, number]; // seconds for one drift pass
  limeChance: number;
};

const LAYERS: Layer[] = [
  // far — horizon haze
  {
    count: 11,
    bottom: [48, 84],
    size: [170, 320],
    flatten: [0.32, 0.46],
    blur: 30,
    opacity: [0.08, 0.2],
    duration: [95, 135],
    limeChance: 0.18,
  },
  // mid deck
  {
    count: 9,
    bottom: [22, 58],
    size: [320, 520],
    flatten: [0.4, 0.56],
    blur: 42,
    opacity: [0.16, 0.32],
    duration: [70, 110],
    limeChance: 0.24,
  },
  // near — billowing tops closest to the viewer
  {
    count: 7,
    bottom: [-8, 24],
    size: [460, 760],
    flatten: [0.46, 0.64],
    blur: 50,
    opacity: [0.28, 0.5],
    duration: [50, 84],
    limeChance: 0.3,
  },
];

function lerp(rand: () => number, [min, max]: [number, number]) {
  return min + rand() * (max - min);
}

export default function CloudDeck() {
  const rand = seededRandom(80808);
  const puffs: CSSProperties[] = [];

  LAYERS.forEach((layer) => {
    for (let i = 0; i < layer.count; i++) {
      const w = lerp(rand, layer.size);
      const h = w * lerp(rand, layer.flatten);
      const lime = rand() < layer.limeChance;
      const tone = lime ? "rgba(203,251,68," : "rgba(222,230,240,";
      const core = lime ? 0.6 : 0.85; // inner alpha multiplier
      const dur = lerp(rand, layer.duration);
      puffs.push({
        width: `${w}px`,
        height: `${h}px`,
        left: `${(lerp(rand, [-8, 96])).toFixed(1)}%`,
        bottom: `${lerp(rand, layer.bottom)}%`,
        filter: `blur(${layer.blur}px)`,
        background: `radial-gradient(closest-side, ${tone}${(
          lerp(rand, layer.opacity) * core
        ).toFixed(3)}), rgba(255,255,255,0) 74%)`,
        opacity: Number(lerp(rand, layer.opacity).toFixed(2)),
        animationDuration: `${dur.toFixed(1)}s`,
        animationDelay: `${(-rand() * dur).toFixed(1)}s`,
      });
    }
  });

  return (
    <div className="cloud-deck" aria-hidden="true">
      {puffs.map((style, i) => (
        <div key={i} className="cloud" style={style} />
      ))}
    </div>
  );
}

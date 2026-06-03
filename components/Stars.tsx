import type { CSSProperties } from "react";
import { seededRandom } from "@/lib/prng";

// Faint twinkling stars high in the hero sky. Seeded scatter for stable
// hydration; the twinkle is a CSS animation that reduced-motion disables.
export default function Stars() {
  const rand = seededRandom(20260603);
  const stars: CSSProperties[] = [];
  for (let i = 0; i < 40; i++) {
    stars.push({
      left: `${rand() * 100}%`,
      top: `${rand() * 100}%`,
      animationDelay: `${rand() * 5}s`,
      opacity: rand() * 0.6 + 0.2,
    });
  }

  return (
    <div className="stars" aria-hidden="true">
      {stars.map((style, i) => (
        <i key={i} style={style} />
      ))}
    </div>
  );
}

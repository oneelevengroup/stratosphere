import type { CSSProperties } from "react";
import { seededRandom } from "@/lib/prng";

// Faint marble veins behind the hero. Seeded scatter for stable hydration.
export default function MarbleVeins() {
  const rand = seededRandom(404404);
  const veins: CSSProperties[] = [];
  for (let i = 0; i < 7; i++) {
    const w = 30 + rand() * 45;
    veins.push({
      width: `${w}vw`,
      left: `${rand() * 80}%`,
      top: `${rand() * 100}%`,
      transform: `rotate(${rand() * 60 - 30}deg)`,
    });
  }

  return (
    <div className="veins" aria-hidden="true">
      {veins.map((style, i) => (
        <span key={i} style={style} />
      ))}
    </div>
  );
}

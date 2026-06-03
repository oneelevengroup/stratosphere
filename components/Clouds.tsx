import type { CSSProperties } from "react";
import { seededRandom } from "@/lib/prng";

/**
 * Drifting wispy cloud layer — the signature element. Soft radial-gradient
 * blobs, heavy blur, low opacity, drifting left to right on long random
 * durations. Roughly 1 in 3 is lime-tinted. The scatter is seeded so it is
 * identical on server and client (no hydration mismatch); the drift itself is
 * a CSS animation that respects prefers-reduced-motion.
 */
export default function Clouds({
  count,
  band,
  id,
  seed = 1,
}: {
  count: number;
  band: [number, number];
  id?: string;
  seed?: number;
}) {
  const rand = seededRandom(seed * 7919 + count);
  const clouds: CSSProperties[] = [];
  for (let i = 0; i < count; i++) {
    const w = 240 + rand() * 360;
    const h = w * (0.32 + rand() * 0.18);
    const tone = rand() > 0.7 ? "rgba(203,251,68,.18)" : "rgba(220,228,235,.30)";
    const dur = 42 + rand() * 46;
    clouds.push({
      width: `${w}px`,
      height: `${h}px`,
      background: `radial-gradient(closest-side, ${tone}, rgba(255,255,255,0) 72%)`,
      top: `${band[0] + rand() * (band[1] - band[0])}%`,
      animationDuration: `${dur}s`,
      animationDelay: `${-rand() * dur}s`,
      opacity: Number((0.5 + rand() * 0.5).toFixed(2)),
    });
  }

  return (
    <div className="clouds" id={id} aria-hidden="true">
      {clouds.map((style, i) => (
        <div key={i} className="cloud" style={style} />
      ))}
    </div>
  );
}

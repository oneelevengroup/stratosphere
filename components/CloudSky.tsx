/**
 * Air.inc-style animated sky: soft white cumulus drifting across a pale-blue
 * gradient. Three depth bands (far/mid/near) each scroll a doubled track of
 * cloud sprites at a different speed for parallax, looping seamlessly. Purely
 * decorative; the drift is GPU-cheap (transform only).
 */
type Cfg = { i: number; left: number; top: number; w: number; op: number };

const BANDS: Record<"far" | "mid" | "near", Cfg[]> = {
  far: [
    { i: 1, left: 6, top: 16, w: 15, op: 0.5 },
    { i: 3, left: 44, top: 3, w: 13, op: 0.45 },
    { i: 2, left: 73, top: 20, w: 17, op: 0.55 },
  ],
  mid: [
    { i: 4, left: 14, top: 26, w: 23, op: 0.8 },
    { i: 1, left: 56, top: 10, w: 21, op: 0.72 },
    { i: 3, left: 85, top: 32, w: 25, op: 0.82 },
  ],
  near: [
    { i: 2, left: -2, top: 36, w: 34, op: 1 },
    { i: 4, left: 36, top: 20, w: 39, op: 1 },
    { i: 1, left: 72, top: 42, w: 36, op: 1 },
  ],
};

const RATIO = 360 / 640; // cloud sprite aspect

function Half({ clouds }: { clouds: Cfg[] }) {
  return (
    <div className="cloud-half">
      {clouds.map((c, idx) => (
        <div
          key={idx}
          className="cloud"
          style={{
            left: `${c.left}%`,
            top: `${c.top}%`,
            width: `${c.w}vw`,
            height: `${c.w * RATIO}vw`,
            opacity: c.op,
            backgroundImage: `url(/cloud-puff-${c.i}.png)`,
          }}
        />
      ))}
    </div>
  );
}

export default function CloudSky({ className }: { className?: string }) {
  return (
    <div className={`cloud-sky${className ? ` ${className}` : ""}`} aria-hidden="true">
      {(["far", "mid", "near"] as const).map((name) => (
        <div key={name} className={`cloud-band ${name}`}>
          <div className="cloud-track">
            <Half clouds={BANDS[name]} />
            <Half clouds={BANDS[name]} />
          </div>
        </div>
      ))}
    </div>
  );
}

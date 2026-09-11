import Link from "next/link";

export default function Hero() {
  return (
    <header className="hero">
      <div className="alt-rail" aria-hidden="true">
        <span>80 KM</span>
        <span>50 KM</span>
        <span className="on">STRATOSPHERE</span>
        <span>20 KM</span>
        <span>SEA LEVEL</span>
      </div>

      <div className="hero-zoom">
        <div className="wrap hero-inner">
          <span className="eyebrow reveal">Phil Stringer Presents The Stratosphere</span>
          <h1 className="reveal">
            Rise <span className="lime">Above</span>
            <br />
            The Noise.
          </h1>
          <p className="lede reveal">
            AI training that actually moves the needle.{" "}
            <b>Live coaching, certification, and a private room of operators</b> who
            treat AI as leverage, not a novelty.
          </p>
          <div className="cta-row reveal">
            <Link href="/apply" className="btn-primary">
              Join The Next Ascent
            </Link>
            <a href="#phil" className="btn-ghost">
              Who Is Phil Stringer
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

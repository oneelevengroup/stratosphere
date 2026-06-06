import Link from "next/link";
import Clouds from "./Clouds";
import CloudDeck from "./CloudDeck";
import Stars from "./Stars";
import MarbleVeins from "./MarbleVeins";

export default function Hero() {
  return (
    <header className="hero">
      {/* Static cloudscape fallback — shown while the video loads and for
          visitors with reduced motion (the video is hidden by CSS then). */}
      <MarbleVeins />
      <Stars />
      <div className="horizon" />
      <Clouds id="clouds" count={4} band={[8, 30]} />
      <CloudDeck />

      {/* Real footage: flying above the cloud deck. */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      {/* Scrim keeps the headline readable over bright footage. */}
      <div className="hero-scrim" aria-hidden="true" />

      <div className="alt-rail" aria-hidden="true">
        <span>80 KM</span>
        <span>50 KM</span>
        <span className="on">STRATOSPHERE</span>
        <span>20 KM</span>
        <span>SEA LEVEL</span>
      </div>

      <div className="wrap hero-inner">
        <span className="eyebrow reveal">A Phil Stringer Program</span>
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
            Apply for the next cohort
          </Link>
          <a href="#premise" className="btn-ghost">
            <span className="ico">&#9658;</span> Watch the overview
          </a>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import Clouds from "./Clouds";
import Stars from "./Stars";
import MarbleVeins from "./MarbleVeins";

export default function Hero() {
  return (
    <header className="hero">
      <MarbleVeins />
      <Stars />
      <div className="horizon" />
      <Clouds id="clouds" count={7} band={[42, 86]} />

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

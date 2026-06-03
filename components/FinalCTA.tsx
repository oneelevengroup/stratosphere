import Link from "next/link";
import Clouds from "./Clouds";

export default function FinalCTA() {
  return (
    <section className="final" id="apply">
      <div className="horizon" />
      <Clouds id="clouds2" count={5} band={[30, 80]} seed={2} />
      <div className="wrap">
        <div className="kicker reveal" style={{ justifyContent: "center" }}>
          Next cohort enrolling now
        </div>
        <h2 className="reveal">
          Rise Above
          <br />
          The <span className="lime">Noise.</span>
        </h2>
        <p className="reveal">
          Spots are limited and the cohort moves together, so enrollment closes
          when it fills. Apply now to hold your seat for the next ascent.
        </p>
        <Link href="/apply" className="btn-primary reveal">
          Apply for the next cohort
        </Link>
        <div className="note reveal">
          Application based &middot; Limited seats &middot; Investment shared on
          the call
        </div>
      </div>
    </section>
  );
}

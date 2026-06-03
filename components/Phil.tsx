export default function Phil() {
  return (
    <section className="block phil" id="phil">
      <div className="wrap">
        {/* TODO(asset): replace placeholder box with Phil's black-marble headshot. */}
        <div className="reveal photo">[ Phil Stringer photo ]</div>
        <div className="reveal">
          <div className="kicker">Who&apos;s leading it</div>
          <h2>
            A Bit <span className="lime">About Phil.</span>
          </h2>
          <p>
            Phil built a six-figure online business in high school, then became
            the number one sales agent worldwide at General Electric in his first
            year, closing at more than 11 times the company average.
          </p>
          <p>
            Today he is{" "}
            <b>
              Founder and CEO of Stratus Global and creator of The Stratosphere.
            </b>{" "}
            He has served more than 5,000 clients worldwide and completed over
            1,000 events across real estate, finance, healthcare, legal, and
            entrepreneurship. His content reaches more than 5 million people, with
            features on FOX, CBS, NBC, ABC, NPR, Good Morning America, and The
            Today Show.
          </p>
          <div className="endorse">
            Trusted by leaders including{" "}
            <b>
              Jenna Kutcher, Chris Voss, Heather Monahan, Ricky Carruth, and
              Krista Mashore.
            </b>
          </div>
        </div>
      </div>
    </section>
  );
}

const STATS = [
  { num: "5M+", cap: "Reached" },
  { num: "5,000+", cap: "Clients" },
  { num: "1,000+", cap: "Events" },
  { num: "23", cap: "Countries" },
];

export default function Premise() {
  return (
    <section className="block premise" id="premise">
      <div className="wrap">
        <div className="reveal">
          <div className="kicker">The premise</div>
          <div className="big">
            Most people <em>use</em> AI.
            <br />
            Stratosphere members <em>operate</em> it.
          </div>
        </div>
        <div className="reveal">
          <p>
            The gap is not closing on its own. Every quarter, the people who
            actually build with AI pull further ahead of the people still
            watching tutorials. Stratosphere exists to put you in the first group
            and keep you there for a full year.
          </p>
          <p>
            This is not a course you finish and forget. It is a room you stay in,
            with the calls, the systems, and the people that compound over twelve
            months.
          </p>
          <div className="stats">
            {STATS.map((s) => (
              <div className="stat" key={s.cap}>
                <div className="num">{s.num}</div>
                <div className="cap">{s.cap}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

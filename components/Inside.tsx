const CARDS = [
  {
    no: "01",
    title: "12-Month Cohort",
    body: "A full year of structured progress with a group that starts together and levels up together. No drifting, no losing momentum.",
  },
  {
    no: "02",
    title: "100+ Live Calls",
    body: "Over one hundred live group sessions across the year. Real implementation, live problem solving, direct access to answers.",
  },
  {
    no: "03",
    title: "On-Demand Training",
    body: "The complete library, ready the moment you need it. Learn the foundations on your schedule, then bring questions to the calls.",
  },
  {
    no: "04",
    title: "Certification",
    body: "Finish with proof. A Stratosphere certification that signals you operate at a level most professionals have not reached.",
  },
  {
    no: "05",
    title: "Private Community",
    body: "A closed room of operators sharing what works right now. The connections here are often worth more than the curriculum.",
  },
  {
    no: "06",
    title: "Evolving Prompt Library",
    body: "A living library that grows as the tools do. You are never working off last year's playbook in a field that changes monthly.",
  },
];

export default function Inside() {
  return (
    <section className="block inside" id="inside">
      <div className="wrap">
        <div className="head reveal">
          <div>
            <div className="kicker">What&apos;s inside</div>
            <h2>
              Everything to stay
              <br />
              <span className="lime">in front.</span>
            </h2>
          </div>
          <p>
            Six systems working together for twelve months. Built to move you
            from learning AI to leading with it.
          </p>
        </div>
        <div className="grid">
          {CARDS.map((c) => (
            <div className="card reveal" key={c.no}>
              <div className="no">{c.no}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

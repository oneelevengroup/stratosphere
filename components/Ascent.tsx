const BANDS = [
  {
    km: "01",
    title: "Liftoff",
    body: "Foundations locked in. You stop reacting to AI and start running it, with the core systems set up in your business from week one.",
    tag: "Months 1–4",
  },
  {
    km: "02",
    title: "Climb",
    body: "You build the workflows, agents, and automations that quietly do the work. This is where the leverage starts showing up in your numbers.",
    tag: "Months 5–8",
  },
  {
    km: "03",
    title: "Stratosphere",
    body: "You operate above the noise. Certified, systemized, and connected to a room of people moving at the same altitude.",
    tag: "Months 9–12",
  },
];

export default function Ascent() {
  return (
    <section className="block ascent" id="ascent">
      <div className="wrap">
        <div className="reveal">
          <div className="kicker">The ascent</div>
          <h2>
            Twelve months,
            <br />
            three <span className="lime">altitudes.</span>
          </h2>
        </div>
        <div className="bands">
          {BANDS.map((b) => (
            <div className="band reveal" key={b.km}>
              <div className="km">{b.km}</div>
              <div>
                <h4>{b.title}</h4>
                <p>{b.body}</p>
              </div>
              <div className="tag">{b.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

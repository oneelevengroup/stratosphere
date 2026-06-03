// As Seen In strip.
// TODO(asset): swap these text wordmarks for real white/mono logo SVGs.
const OUTLETS = ["FOX", "CBS", "NBC", "ABC", "NPR", "CNN", "PEOPLE"];

export default function Creds() {
  return (
    <div className="creds">
      <div className="wrap creds-inner">
        <span className="label">As seen in</span>
        {OUTLETS.map((name) => (
          <span className="logo" key={name}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

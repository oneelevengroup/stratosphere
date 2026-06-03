import Logomark from "./Logomark";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div className="fb">
          <Logomark />
          <span className="mark">Stratosphere</span>
        </div>
        <div className="links">
          <a href="#premise">Program</a>
          <a href="#inside">Inside</a>
          <a href="#phil">Phil</a>
          <a href="#apply">Apply</a>
        </div>
        <span className="copy">
          &copy; Phil Stringer 2026. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

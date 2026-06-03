"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logomark from "./Logomark";

// Fixed nav. Transparent at top, blurs to near-black once scrolled.
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : undefined}>
      <Link href="/" className="brand">
        <Logomark className="logomark" />
        <span className="txt">
          <span className="mark">Stratosphere</span>
          <span className="by">By Phil Stringer</span>
        </span>
      </Link>
      <div className="nav-links">
        <a href="#premise">The Program</a>
        <a href="#inside">What&apos;s Inside</a>
        <a href="#ascent">The Ascent</a>
        <a href="#phil">Phil</a>
        <Link href="/apply" className="nav-cta">
          Apply
        </Link>
      </div>
    </nav>
  );
}

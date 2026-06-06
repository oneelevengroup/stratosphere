"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logomark from "./Logomark";

// Fixed nav. Transparent at top, blurs to near-black once scrolled.
// `light` renders dark text/logo at the top (for the light/airy hero); once
// scrolled the dark blurred bar takes over and the light treatment drops.
export default function Nav({ light = false }: { light?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${scrolled ? "scrolled" : ""}${light ? " light" : ""}`.trim() || undefined}>
      <Link href="/" className="brand">
        <Logomark className="logomark" />
        <span className="txt">
          <span className="mark">Stratosphere</span>
          <span className="by">By Phil Stringer</span>
        </span>
      </Link>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <a href="#inside">What&apos;s Included</a>
        <a href="#phil">About Phil</a>
        <Link href="/apply" className="nav-cta">
          Join The Next Ascent
        </Link>
      </div>
    </nav>
  );
}

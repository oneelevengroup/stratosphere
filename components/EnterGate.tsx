"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Full-screen "Enter Site" intro. Shows the welcome text over the hero video;
 * on Enter it plays the dive transition (accelerating video/text zoom →
 * clouds → white-out flash) then fades away to reveal the main site beneath.
 * The transition is time-based (not scroll-driven) so it plays on its own.
 */
const ENTER_MS = 2800;

export default function EnterGate() {
  const [entering, setEntering] = useState(false);
  const [done, setDone] = useState(false);

  // lock scrolling while the gate is up; pin to the top so the reveal lands
  // on the hero
  useEffect(() => {
    if (done) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [done]);

  const enter = useCallback(() => {
    if (entering) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDone(true);
      return;
    }
    setEntering(true);
    window.setTimeout(() => setDone(true), ENTER_MS);
  }, [entering]);

  if (done) return null;

  return (
    <div className={`enter-gate${entering ? " entering" : ""}`}>
      <div className="enter-bg" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="auto">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="enter-clouds" aria-hidden="true">
        <div className="enter-cloud far" />
        <div className="enter-cloud mid" />
        <div className="enter-cloud near" />
      </div>
      <div className="enter-flash" aria-hidden="true" />

      <div className="enter-content">
        <span className="enter-eyebrow">Phil Stringer Presents</span>
        <h1>
          Welcome to
          <br />
          The Stratosphere
        </h1>
        <button type="button" className="enter-btn" onClick={enter}>
          Enter Site
        </button>
      </div>
    </div>
  );
}

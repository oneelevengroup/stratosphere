"use client";

import { useCallback, useEffect, useState } from "react";
import Logomark from "./Logomark";

/**
 * Full-screen "Welcome" intro. You enter the site by scrolling (wheel / touch /
 * arrow keys) — or by clicking the scroll cue. That plays the dive transition
 * (accelerating video/text zoom → clouds → white-out flash) then fades away to
 * reveal the main site beneath. The transition is time-based so it plays on its
 * own once triggered.
 */
const ENTER_MS = 2800;

export default function EnterGate() {
  const [entering, setEntering] = useState(false);
  const [done, setDone] = useState(false);

  // lock scrolling while the gate is up; pin to the top so the reveal lands on
  // the hero
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

  // any scroll intent enters the site
  useEffect(() => {
    if (done || entering) return;
    const onWheel = () => enter();
    const onTouch = () => enter();
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", "End", " ", "Spacebar", "Enter"].includes(e.key)) {
        e.preventDefault();
        enter();
      }
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("keydown", onKey);
    };
  }, [done, entering, enter]);

  if (done) return null;

  return (
    <div className={`enter-gate${entering ? " entering" : ""}`}>
      <div className="enter-flash" aria-hidden="true" />

      <div className="enter-content">
        <span className="enter-eyebrow">Phil Stringer Presents</span>
        <h1>
          <span className="enter-pre">Welcome to</span>
          <span className="enter-big">The Stratosphere</span>
        </h1>
      </div>

      <button type="button" className="enter-scroll" onClick={enter} aria-label="Scroll to enter the site">
        <span>Scroll to Enter</span>
        <Logomark className="enter-swoosh" />
      </button>
    </div>
  );
}

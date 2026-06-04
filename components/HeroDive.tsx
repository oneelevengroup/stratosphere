"use client";

import { useEffect } from "react";

/**
 * Scroll-scrubbed "dive into the clouds" driver for the hero. Writes a 0→1
 * progress value to `--p` on `.hero-stage` as the pinned hero is scrolled
 * through; all the actual motion (text zooming toward the viewer, the cloud
 * deck rushing up, the cloud veil) is CSS `calc()` off that variable.
 * Respects prefers-reduced-motion by leaving --p at its CSS default of 0.
 */
export default function HeroDive() {
  useEffect(() => {
    const stage = document.querySelector<HTMLElement>(".hero-stage");
    if (!stage) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = stage.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const p = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;
      stage.style.setProperty("--p", p.toFixed(4));
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}

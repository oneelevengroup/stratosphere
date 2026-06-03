"use client";

import { useEffect } from "react";

/**
 * Staggered reveal-on-scroll. Mounted once; observes every `.reveal` element
 * and adds `.in` when it enters the viewport. Respects prefers-reduced-motion
 * (the CSS already forces `.reveal` visible in that case, so we just no-op).
 */
export default function RevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            window.setTimeout(() => el.classList.add("in"), i * 70);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.14 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}

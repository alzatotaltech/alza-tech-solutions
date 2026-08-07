"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";

/**
 * Build 73 performance-first experience layer.
 * Desktop keeps premium depth without large animated blur/filter surfaces.
 */
export function ExperienceLayer() {
  const prefersReduced = useReducedMotion();
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px)");
    const sync = () => setDesktop(mq.matches);
    sync();
    mq.addEventListener?.("change", sync);
    return () => mq.removeEventListener?.("change", sync);
  }, []);

  const reduce = Boolean(prefersReduced && !desktop);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.18,
  });

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="alza-scroll-progress-v54"
        style={{ scaleX: reduce ? 0 : progress }}
      />
      <div aria-hidden="true" className="experience-grid-v54" />

      {/* Desktop: one static composited ambient field. No moving blurred layers. */}
      {desktop && !reduce && (
        <div aria-hidden="true" className="desktop-rich-field-v73" />
      )}

      {/* Mobile/tablet preserve the richer existing ambient treatment. */}
      {!desktop && !reduce && (
        <div aria-hidden="true" className="experience-ambient-v54">
          <span className="experience-orb-v54 experience-orb-one-v54" />
          <span className="experience-orb-v54 experience-orb-two-v54" />
        </div>
      )}
    </>
  );
}

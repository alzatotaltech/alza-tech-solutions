"use client";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

/**
 * Persistent premium motion layer.
 * Purely decorative and pointer-events:none, so it cannot block site controls.
 */
export function ExperienceLayer() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.22 });
  const orbOneY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const orbTwoY = useTransform(scrollYProgress, [0, 1], [0, -140]);

  return <>
    <motion.div
      aria-hidden="true"
      className="alza-scroll-progress-v54"
      style={{ scaleX: reduce ? 0 : progress }}
    />
    <div aria-hidden="true" className="experience-grid-v54" />
    {!reduce && <div aria-hidden="true" className="experience-ambient-v54">
      <motion.span
        className="experience-orb-v54 experience-orb-one-v54"
        style={{ y: orbOneY }}
        animate={{ x: [0, 34, -18, 0], scale: [1, 1.08, 0.98, 1], opacity: [.22, .34, .24, .22] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="experience-orb-v54 experience-orb-two-v54"
        style={{ y: orbTwoY }}
        animate={{ x: [0, -28, 22, 0], scale: [1, .94, 1.1, 1], opacity: [.18, .28, .20, .18] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
    </div>}
  </>;
}

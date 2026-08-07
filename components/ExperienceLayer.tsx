"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

/**
 * Persistent premium motion layer.
 * Decorative only and pointer-events:none, so it never blocks site controls.
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
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.22 });
  const orbOneY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const orbTwoY = useTransform(scrollYProgress, [0, 1], [0, -140]);

  // Desktop pointer glow. Use any-pointer/any-hover rather than pointer/hover so
  // touch-enabled Windows laptops still get desktop effects when a mouse/trackpad
  // is available.
  const pointerX = useMotionValue(-700);
  const pointerY = useMotionValue(-700);
  const smoothX = useSpring(pointerX, { stiffness: 150, damping: 30, mass: 0.22 });
  const smoothY = useSpring(pointerY, { stiffness: 150, damping: 30, mass: 0.22 });

  useEffect(() => {
    if (reduce) return;
    const mq = window.matchMedia("(min-width: 901px) and (any-hover: hover) and (any-pointer: fine)");
    const move = (event: PointerEvent) => {
      if (!mq.matches) return;
      pointerX.set(event.clientX - 270);
      pointerY.set(event.clientY - 270);
    };
    const leave = () => {
      pointerX.set(-700);
      pointerY.set(-700);
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [pointerX, pointerY, reduce]);

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

      {/* Desktop-only ambient layers make glass/motion visible even before hover. */}
      <motion.span
        className="experience-beam-v67 experience-beam-one-v67"
        animate={{ x: [0, 120, -45, 0], rotate: [-8, -2, -11, -8], opacity: [.16, .29, .18, .16] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="experience-beam-v67 experience-beam-two-v67"
        animate={{ x: [0, -90, 55, 0], rotate: [9, 4, 12, 9], opacity: [.12, .24, .15, .12] }}
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
      />
      <motion.span
        className="experience-pointer-glow-v67"
        style={{ x: smoothX, y: smoothY }}
      />

      {/* Build 72: desktop-at-rest depth. Hidden completely below 901px. */}
      <div aria-hidden="true" className="desktop-rich-field-v72">
        <motion.span
          className="desktop-aurora-v72 desktop-aurora-one-v72"
          animate={{ x: [0, 90, 18, 0], y: [0, -34, 42, 0], scale: [1, 1.12, .96, 1], opacity: [.22, .38, .25, .22] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="desktop-aurora-v72 desktop-aurora-two-v72"
          animate={{ x: [0, -78, 36, 0], y: [0, 48, -18, 0], scale: [1, .94, 1.1, 1], opacity: [.16, .31, .20, .16] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
        />
        <motion.span
          className="desktop-ribbon-v72 desktop-ribbon-one-v72"
          animate={{ x: ["-8%", "9%", "-2%", "-8%"], rotate: [-12, -7, -15, -12], opacity: [.12, .24, .15, .12] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="desktop-ribbon-v72 desktop-ribbon-two-v72"
          animate={{ x: ["8%", "-10%", "3%", "8%"], rotate: [11, 7, 14, 11], opacity: [.10, .20, .13, .10] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
    </div>}
  </>;
}

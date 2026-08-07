"use client";
import { ReactNode, useRef } from "react";
import { motion } from "motion/react";
import { usePageRuntime } from "./PageRuntime";
import { useLead } from "./LeadProvider";

export function PageExperience({ bodyClass, children }: { bodyClass: string; children: ReactNode }) {
  const contentRef=useRef<HTMLElement>(null);
  const {openLead}=useLead();
  usePageRuntime(contentRef,openLead);
  return <motion.main
    id="main"
    ref={contentRef}
    className={bodyClass}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: .42, ease: [.22, 1, .36, 1] }}
  >{children}</motion.main>;
}

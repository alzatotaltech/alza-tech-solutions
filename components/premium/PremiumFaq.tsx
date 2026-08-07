"use client";

import { motion, useReducedMotion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const items = [
  {
    q: "Does ALZA store or relay migration content in its cloud?",
    a: "The architecture is designed so migration content moves from the authorized source tenant to the target tenant through customer-managed workers. ALZA cloud services are separated as a licensing and operational control plane, not a content staging layer.",
  },
  {
    q: "When does Delta skip unchanged items?",
    a: "Delta skips unchanged items when verified through supported hashes or metadata. Where a workload or Microsoft API does not provide reliable verification, the system uses a controlled comparison or reconciliation pass.",
  },
  {
    q: "How does the platform minimize cutover downtime?",
    a: "Pre-stage and delta passes move eligible content before the final window. This minimizes cutover downtime, but the actual interruption depends on tenant condition, workload, Microsoft service behavior, network capacity, and cutover design.",
  },
  {
    q: "How is Teams history handled?",
    a: "Supported historical Teams chat can be exported to searchable HTML archives stored in destination OneDrive. The currently published scope is limited to HTML archival.",
  },
  {
    q: "Is the production installer available now?",
    a: "Not yet. The download page remains inactive until ALZA publishes a verified EXE or MSI with version, checksum, file size, release notes, signing information, and tested system requirements.",
  },
] as const;

export function PremiumFaq() {
  const reduce = useReducedMotion();
  return (
    <section className="b57-faq-section relative overflow-hidden border-y border-white/[.04] py-20 sm:py-24" aria-labelledby="faq-b57-title">
      <div className="container relative z-[1] grid gap-10 lg:grid-cols-[minmax(260px,.58fr)_minmax(0,1fr)] lg:gap-16">
        <motion.div initial={reduce ? false : {opacity:0,y:24}} whileInView={reduce ? undefined : {opacity:1,y:0}} viewport={{once:true,amount:.3}} transition={{duration:.5,ease:[.22,1,.36,1]}}>
          <Badge className="mb-4">Common questions</Badge>
          <h2 id="faq-b57-title" className="m-0 text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[1] tracking-[-.045em] text-alza-text">Resolve the objections early.</h2>
          <p className="mt-5 max-w-[500px] text-[15px] leading-7 text-alza-muted">These answers set realistic expectations before a sales conversation.</p>
        </motion.div>
        <motion.div initial={reduce ? false : {opacity:0,y:28}} whileInView={reduce ? undefined : {opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.55,delay:.08,ease:[.22,1,.36,1]}}>
          <Accordion type="single" collapsible className="grid gap-3">
            {items.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={item.q}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

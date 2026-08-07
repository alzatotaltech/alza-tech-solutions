"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  CloudCog,
  HardDrive,
  HousePlug,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Home & Office IT Setup",
    description: "End-to-end device, Wi-Fi, printing, collaboration and workplace technology setup for homes, offices and new sites.",
    href: "/solutions/",
    cta: "Explore setup services",
    icon: HousePlug,
    span: "lg:col-span-2",
    accent: "from-cyan-400/18 via-blue-500/8 to-transparent",
  },
  {
    title: "Networks & Infrastructure",
    description: "Structured networking, wireless coverage, firewalls, switches, servers, storage, backup and resilient infrastructure.",
    href: "/services/",
    cta: "Infrastructure services",
    icon: Network,
    span: "lg:col-span-2",
    accent: "from-blue-500/16 via-indigo-500/7 to-transparent",
  },
  {
    title: "Cloud & Microsoft 365",
    description: "Microsoft 365, cloud adoption, tenant configuration, identity, collaboration and cloud operational support.",
    href: "/solutions/#cloud",
    cta: "Cloud solutions",
    icon: CloudCog,
    span: "lg:col-span-2",
    accent: "from-violet-500/16 via-blue-500/7 to-transparent",
  },
  {
    title: "Cybersecurity",
    description: "Practical identity, endpoint and network security controls sized for modern business environments.",
    href: "/services/",
    cta: "Security services",
    icon: ShieldCheck,
    span: "lg:col-span-2",
    accent: "from-emerald-400/12 via-cyan-500/6 to-transparent",
  },
  {
    title: "Managed IT Services",
    description: "Remote and onsite support, monitoring, maintenance and technology help delivered as an accountable operating service.",
    href: "/services/",
    cta: "Managed support",
    icon: HardDrive,
    span: "lg:col-span-2",
    accent: "from-sky-400/14 via-cyan-500/6 to-transparent",
  },
  {
    title: "ALZA M365 Migration Suite",
    description: "Customer-hosted Microsoft 365 migration software for Email, OneDrive, SharePoint and Teams workloads.",
    href: "/products/",
    cta: "Explore flagship software",
    icon: Workflow,
    span: "lg:col-span-2",
    accent: "from-cyan-300/20 via-violet-500/10 to-transparent",
    flagship: true,
  },
] as const;

/**
 * ALZA-specific bento implementation.
 * Design research workflow uses the 21st.dev registry for reference discovery;
 * this component is original project code and does not require a 21st runtime.
 */
export function ServiceBentoGrid() {
  const reduce = useReducedMotion();

  return (
    <section className="b57-service-section relative overflow-hidden border-y border-white/[.045] py-20 sm:py-24" aria-labelledby="services-b57-title">
      <div aria-hidden="true" className="b57-premium-grid pointer-events-none absolute inset-0 opacity-35" />
      <div className="container relative z-[1]">
        <div className="mb-10 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,.65fr)] lg:items-end">
          <div>
            <Badge className="mb-4">What we do</Badge>
            <h2 id="services-b57-title" className="m-0 max-w-[780px] text-[clamp(2rem,4vw,4rem)] font-semibold leading-[.98] tracking-[-.045em] text-alza-text">
              From physical infrastructure to cloud and proprietary software.
            </h2>
          </div>
          <p className="m-0 max-w-[580px] text-[15px] leading-7 text-alza-muted lg:justify-self-end">
            ALZA combines practical IT consulting and implementation with a proprietary Microsoft 365 migration platform—one accountable partner from site setup to cloud operations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className={service.span}
                initial={reduce ? false : { opacity: 0, y: 28, scale: 0.985 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.52, delay: index * 0.055, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className={cn(
                  "b57-premium-card group relative h-full min-h-[260px] overflow-hidden border-white/[.08] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:shadow-[0_24px_90px_rgba(0,118,255,.15)]",
                  service.flagship && "md:min-h-[280px]"
                )}>
                  <div aria-hidden="true" className={cn("absolute inset-0 bg-gradient-to-br opacity-80 transition-opacity duration-300 group-hover:opacity-100", service.accent)} />
                  <div aria-hidden="true" className="absolute -right-14 -top-16 size-44 rounded-full bg-cyan-300/8 blur-3xl transition-transform duration-500 group-hover:scale-125" />
                  <CardContent className="relative flex h-full flex-col p-6 sm:p-7">
                    <div className="mb-9 flex items-center justify-between">
                      <span className="grid size-11 place-items-center rounded-xl border border-cyan-300/18 bg-cyan-300/8 text-alza-cyan shadow-[inset_0_1px_0_rgba(255,255,255,.08)]">
                        <Icon className="size-[19px]" strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      {service.flagship && <Badge className="border-violet-300/20 bg-violet-400/8 text-violet-200">Flagship</Badge>}
                    </div>
                    <h3 className="m-0 text-[19px] font-semibold tracking-[-.025em] text-alza-text">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-alza-muted">{service.description}</p>
                    <Link className="b57-focus-ring mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-semibold text-alza-cyan transition hover:text-white" href={service.href}>
                      {service.cta}<ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

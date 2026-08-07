import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("inline-flex items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/8 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[.16em] text-alza-cyan", className)} {...props} />;
}

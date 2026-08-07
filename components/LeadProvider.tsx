"use client";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { LeadModal } from "./LeadModal";

type LeadContextValue = { openLead: () => void; closeLead: () => void };
const LeadContext = createContext<LeadContextValue | null>(null);

export function LeadProvider({ children }: { children: React.ReactNode }) {
  const [open,setOpen]=useState(false);
  const openLead=useCallback(()=>setOpen(true),[]);
  const closeLead=useCallback(()=>setOpen(false),[]);
  const value=useMemo(()=>({openLead,closeLead}),[openLead,closeLead]);
  return <LeadContext.Provider value={value}>{children}<LeadModal open={open} onClose={closeLead}/></LeadContext.Provider>;
}

export function useLead(){
  const value=useContext(LeadContext);
  if(!value) throw new Error("useLead must be used inside LeadProvider");
  return value;
}

"use client";
import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { routeBodyClass } from "@/lib/routes";

export function RouteBodyClass() {
  const pathname = usePathname();
  useLayoutEffect(() => {
    const key = (pathname || "/").replace(/\/+$/, "") || "/";
    document.body.className = routeBodyClass[key] || "enterprise-theme";
  }, [pathname]);
  return null;
}

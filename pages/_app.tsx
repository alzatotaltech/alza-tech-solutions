import type { AppProps } from "next/app";
import { MotionConfig } from "motion/react";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const bodyClass = (Component as any).bodyClass || "enterprise-theme";
  useEffect(() => {
    document.body.className = bodyClass;
  }, [bodyClass]);
  return <MotionConfig reducedMotion="user"><Component {...pageProps}/></MotionConfig>;
}

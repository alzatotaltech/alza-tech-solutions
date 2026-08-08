import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { MotionConfigProvider } from "@/components/MotionConfigProvider";
import { GlobalSheenRuntime } from "@/components/GlobalSheenRuntime";
import { RouteBodyClass } from "@/components/RouteBodyClass";
import { routeBodyClass } from "@/lib/routes";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-alza",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alzatotaltech.com"),
  applicationName: "ALZA Total Tech Solutions",
  creator: "ALZA Total Tech Solutions FZ-LLC",
  publisher: "ALZA Total Tech Solutions FZ-LLC",
  icons: { icon: [{ url: "/favicon.ico" }, { url: "/favicon.svg", type: "image/svg+xml" }] },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#020a18",
  colorScheme: "dark",
};

const bootstrap = `(function(){try{var t=localStorage.getItem("alza-theme-v55");document.documentElement.dataset.theme=t==="dark-saas"?"dark-saas":"alza-blue";}catch(e){document.documentElement.dataset.theme="alza-blue";}try{var p=location.pathname.replace(/\/+$/,"")||"/";var m=${JSON.stringify(routeBodyClass)};document.body.className=m[p]||"enterprise-theme";}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="alza-blue" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem("alza-theme-v55");document.documentElement.dataset.theme=t==="dark-saas"?"dark-saas":"alza-blue";}catch(e){document.documentElement.dataset.theme="alza-blue";}})();` }} />
        <link rel="stylesheet" href="/assets/css/master.css?v=61" />
        <link rel="stylesheet" href="/assets/css/responsive-v49.css?v=61" />
        <link rel="stylesheet" href="/assets/css/motion-v50.css?v=61" />
        <link rel="stylesheet" href="/assets/css/premium-v51.css?v=61" />
        <link rel="stylesheet" href="/assets/css/next-react-v52.css?v=61" />
        <link rel="stylesheet" href="/assets/css/experience-v54.css?v=69" />
        <link rel="stylesheet" href="/assets/css/theme-v55.css?v=61" />
        <link rel="stylesheet" href="/assets/css/clarity-v61.css?v=71" />
        <link rel="stylesheet" href="/assets/css/desktop-rich-v73.css?v=73" />
        <link rel="stylesheet" href="/assets/css/brand-buttons-v74.css?v=74" />
        <link rel="stylesheet" href="/assets/css/performance-v75.css?v=75" />
        <link rel="stylesheet" href="/assets/css/brand-static-v76.css?v=76" />
        <link rel="stylesheet" href="/assets/css/motion-split-v83.css?v=83" />
      </head>
      <body className="enterprise-theme">
        <script dangerouslySetInnerHTML={{ __html: bootstrap }} />
        <MotionConfigProvider>
          <GlobalSheenRuntime />
          <RouteBodyClass />
          {children}
        </MotionConfigProvider>
      </body>
    </html>
  );
}

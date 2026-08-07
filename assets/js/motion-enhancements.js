import { animate } from "https://cdn.jsdelivr.net/npm/motion@12.43.0/+esm";

const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
const finePointer = window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches ?? false;
const mqDesktop = window.matchMedia?.("(min-width: 901px)");

function safeAnimate(target, keyframes, options = {}) {
  try { return animate(target, keyframes, options); } catch { return null; }
}

function heroEntrance() {
  const selectors = [
    ".hero-copy .eyebrow, .hero-copy .kicker",
    ".hero-copy h1",
    ".hero-copy .lead",
    ".hero-copy .actions",
    ".page-hero .breadcrumbs",
    ".page-hero .kicker",
    ".page-hero h1",
    ".page-hero .lead"
  ];
  const seen = new Set();
  const nodes = selectors.flatMap((s) => [...document.querySelectorAll(s)]).filter((el) => {
    if (seen.has(el)) return false;
    seen.add(el);
    return true;
  });
  nodes.forEach((el, i) => {
    if (reduced) {
      safeAnimate(el, { opacity: [0.75, 1] }, { duration: 0.22, delay: i * 0.025 });
    } else {
      safeAnimate(el, { opacity: [0, 1], transform: ["translateY(16px)", "translateY(0px)"] }, {
        duration: 0.48,
        delay: Math.min(i * 0.07, 0.42),
        easing: [0.22, 1, 0.36, 1]
      });
    }
  });
}

function revealGroups() {
  const groupSelectors = [
    ".cards", ".plan-grid", ".proof-grid", ".feature-grid", ".footer-grid",
    ".architecture-benefits", ".execution-cards", ".process-grid", ".app-tabs"
  ];
  const groups = [...document.querySelectorAll(groupSelectors.join(","))];
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const group = entry.target;
      const children = [...group.children].filter((el) => el.nodeType === 1);
      children.forEach((el, i) => {
        if (el.dataset.motionDone === "1") return;
        el.dataset.motionDone = "1";
        if (reduced) {
          safeAnimate(el, { opacity: [0.82, 1] }, { duration: 0.18, delay: i * 0.015 });
        } else {
          safeAnimate(el, { opacity: [0, 1], transform: ["translateY(12px)", "translateY(0px)"] }, {
            duration: 0.38,
            delay: Math.min(i * 0.045, 0.32),
            easing: [0.22, 1, 0.36, 1]
          });
        }
      });
      observer.unobserve(group);
    }
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
  groups.forEach((g) => observer.observe(g));
}

function interactiveSurfaces() {
  const surfaces = document.querySelectorAll(".card, .plan-card, .proof-strip, .cta-band, .faq-item, .app-tab, .btn");
  surfaces.forEach((el) => {
    el.classList.add("motion-surface");
    if (!finePointer || reduced) return;
    el.addEventListener("pointerenter", () => {
      if (el.matches(".btn,.app-tab")) {
        safeAnimate(el, { transform: ["translateY(0px)", "translateY(-2px)"] }, { duration: 0.2, easing: "ease-out" });
      } else {
        safeAnimate(el, { transform: ["translateY(0px) scale(1)", "translateY(-4px) scale(1.006)"] }, { duration: 0.24, easing: "ease-out" });
      }
    });
    el.addEventListener("pointerleave", () => {
      safeAnimate(el, { transform: "translateY(0px) scale(1)" }, { duration: 0.24, easing: "ease-out" });
    });
  });

  document.querySelectorAll(".card, .plan-card, .cta-band").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      if (!finePointer) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
      el.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
    }, { passive: true });
  });
}

function scrollProgress() {
  const bar = document.createElement("div");
  bar.className = "alza-scroll-progress";
  bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);
  let ticking = false;
  const update = () => {
    ticking = false;
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const p = Math.min(1, Math.max(0, window.scrollY / max));
    bar.style.transform = `scaleX(${p})`;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  update();
}

function tabsMotion() {
  document.querySelectorAll('[role="tab"], .app-tab').forEach((tab) => {
    tab.addEventListener("click", () => {
      requestAnimationFrame(() => {
        const activePanels = document.querySelectorAll('[role="tabpanel"]:not([hidden]), .workload-panel.active, .app-panel.active');
        activePanels.forEach((panel) => {
          if (reduced) safeAnimate(panel, { opacity: [0.85, 1] }, { duration: 0.18 });
          else safeAnimate(panel, { opacity: [0, 1], transform: ["translateY(8px)", "translateY(0px)"] }, { duration: 0.32, easing: [0.22,1,0.36,1] });
        });
      });
    });
  });
}

function desktopParallax() {
  if (!mqDesktop?.matches || reduced) return;
  const art = document.querySelector(".home-hero-animation-desktop, .page-hero::before");
  const hero = document.querySelector(".hero-branded, .cloud-page-hero");
  if (!hero) return;
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const y = Math.min(18, Math.max(-18, window.scrollY * 0.025));
      hero.style.setProperty("--hero-parallax", `${y}px`);
      if (art instanceof HTMLElement) art.style.transform = `translate3d(0, ${y}px, 0)`;
    });
  }, { passive: true });
}

window.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("motion-enhanced");
  heroEntrance();
  revealGroups();
  interactiveSurfaces();
  scrollProgress();
  tabsMotion();
  desktopParallax();
});

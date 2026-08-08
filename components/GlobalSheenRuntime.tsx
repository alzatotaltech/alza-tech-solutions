"use client";

import { useEffect } from "react";

const HOST_SELECTOR = ".hero-copy .eyebrow, .page-hero .kicker, .btn";
const SHEEN_CLASS = "alza-live-sheen-v81";

function hasDirectSheen(host: HTMLElement) {
  return Array.from(host.children).some(
    (child) => child instanceof HTMLElement && child.classList.contains(SHEEN_CLASS),
  );
}

function decorateHost(host: HTMLElement) {
  if (host.matches("input, textarea, select")) return;

  const isButton = host.matches(".btn");
  host.classList.add("alza-sheen-host-v81");
  host.dataset.alzaSheenV81 = "1";
  host.classList.toggle("alza-button-sheen-host-v81", isButton);
  host.classList.toggle("alza-pill-sheen-host-v81", !isButton);

  if (hasDirectSheen(host)) return;

  const sheen = document.createElement("span");
  sheen.className = SHEEN_CLASS;
  sheen.setAttribute("aria-hidden", "true");
  host.appendChild(sheen);
}

function decorateWithin(root: ParentNode) {
  if (root instanceof HTMLElement && root.matches(HOST_SELECTOR)) {
    decorateHost(root);
  }
  root.querySelectorAll<HTMLElement>(HOST_SELECTOR).forEach(decorateHost);
}

export function GlobalSheenRuntime() {
  useEffect(() => {
    decorateWithin(document);

    const observer = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of Array.from(record.addedNodes)) {
          if (node instanceof HTMLElement) decorateWithin(node);
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}

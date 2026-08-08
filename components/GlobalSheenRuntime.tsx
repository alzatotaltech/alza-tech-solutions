"use client";

import { useEffect } from "react";

const PILL_SELECTOR = ".hero-copy .eyebrow, .page-hero .kicker";
const BUTTON_SELECTOR = ".btn";
const LEGACY_SHEEN_CLASS = "alza-live-sheen-v81";
const PILL_LAYER_CLASS = "alza-pill-glass-v83";
const BUTTON_LAYER_CLASS = "alza-button-color-v83";

function removeDirectChildrenByClass(host: HTMLElement, className: string) {
  Array.from(host.children).forEach((child) => {
    if (child instanceof HTMLElement && child.classList.contains(className)) {
      child.remove();
    }
  });
}

function ensureDirectLayer(host: HTMLElement, className: string) {
  const existing = Array.from(host.children).find(
    (child) => child instanceof HTMLElement && child.classList.contains(className),
  );
  if (existing) return;

  const layer = document.createElement("span");
  layer.className = className;
  layer.setAttribute("aria-hidden", "true");
  host.appendChild(layer);
}

function decoratePill(host: HTMLElement) {
  if (host.matches("input, textarea, select")) return;

  removeDirectChildrenByClass(host, LEGACY_SHEEN_CLASS);
  removeDirectChildrenByClass(host, BUTTON_LAYER_CLASS);

  host.classList.remove(
    "alza-sheen-host-v81",
    "alza-button-sheen-host-v81",
    "alza-pill-sheen-host-v81",
    "alza-button-color-host-v83",
  );
  host.classList.add("alza-pill-glass-host-v83");
  delete host.dataset.alzaSheenV81;
  host.dataset.alzaPillGlassV83 = "1";

  ensureDirectLayer(host, PILL_LAYER_CLASS);
}

function decorateButton(host: HTMLElement) {
  if (host.matches("input, textarea, select")) return;

  /* Buttons must never inherit the Build 81/82 travelling glass strip. */
  removeDirectChildrenByClass(host, LEGACY_SHEEN_CLASS);
  removeDirectChildrenByClass(host, PILL_LAYER_CLASS);

  host.classList.remove(
    "alza-sheen-host-v81",
    "alza-button-sheen-host-v81",
    "alza-pill-sheen-host-v81",
    "alza-pill-glass-host-v83",
  );
  host.classList.add("alza-button-color-host-v83");
  delete host.dataset.alzaSheenV81;
  host.dataset.alzaButtonColorV83 = "1";

  ensureDirectLayer(host, BUTTON_LAYER_CLASS);
}

function decorateWithin(root: ParentNode) {
  if (root instanceof HTMLElement) {
    if (root.matches(PILL_SELECTOR)) decoratePill(root);
    if (root.matches(BUTTON_SELECTOR)) decorateButton(root);
  }

  root.querySelectorAll<HTMLElement>(PILL_SELECTOR).forEach(decoratePill);
  root.querySelectorAll<HTMLElement>(BUTTON_SELECTOR).forEach(decorateButton);
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

(() => {
  "use strict";

  const config = window.ALZA_SITE_CONFIG || {};
  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => [
    ...scope.querySelectorAll(selector),
  ];
  const valid = (value) => typeof value === "string" && value.trim() !== "";

  const emit = (name, params = {}) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...params });
    if (typeof window.gtag === "function") window.gtag("event", name, params);
    if (typeof window.fbq === "function") {
      const metaEvent =
        name === "generate_lead"
          ? "Lead"
          : name === "installer_download"
            ? "ViewContent"
            : null;
      if (metaEvent) window.fbq("track", metaEvent, params);
    }
    window.dispatchEvent(
      new CustomEvent("alza:analytics", { detail: { name, params } }),
    );
  };
  window.alzaTrack = emit;

  function initMotionBudget() {
    const root = document.documentElement;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true;
    const saveData = navigator.connection?.saveData === true;
    // Preserve motion on normal mobile and desktop hardware. Only an explicit
    // reduced-motion preference or browser Save-Data mode disables it.
    root.classList.toggle("low-motion", reduced || saveData);

    const syncVisibility = () => {
      root.classList.toggle("motion-paused", document.hidden);
    };

    document.addEventListener("visibilitychange", syncVisibility, { passive: true });
    window.addEventListener("pagehide", () => root.classList.add("motion-paused"), { passive: true });
    window.addEventListener("pageshow", syncVisibility, { passive: true });
    syncVisibility();
  }

  function initNavigation() {
    const toggle = qs(".nav-toggle");
    const nav = qs(".desktop-nav");
    if (!toggle || !nav) return;

    const desktopQuery = window.matchMedia("(min-width: 72rem)");
    const navLinks = () => qsa("a, button:not([disabled])", nav);

    const setState = (open, { returnFocus = false } = {}) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute(
        "aria-label",
        open ? "Close navigation" : "Open navigation",
      );
      nav.classList.toggle("open", open);
      document.body.classList.toggle("menu-open", open && !desktopQuery.matches);

      if (open && !desktopQuery.matches) {
        requestAnimationFrame(() => navLinks()[0]?.focus());
      } else if (returnFocus && !desktopQuery.matches) {
        toggle.focus();
      }
    };

    const close = (options) => setState(false, options);

    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      setState(open);
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) close();
    });

    document.addEventListener("click", (event) => {
      if (
        toggle.getAttribute("aria-expanded") === "true" &&
        !desktopQuery.matches &&
        !nav.contains(event.target) &&
        !toggle.contains(event.target)
      ) {
        close();
      }
    });

    document.addEventListener("keydown", (event) => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      if (!open || desktopQuery.matches) return;

      if (event.key === "Escape") {
        event.preventDefault();
        close({ returnFocus: true });
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = [toggle, ...navLinks()].filter(
        (element) => element.offsetParent !== null,
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    const syncNavigation = () => {
      if (desktopQuery.matches) close();
    };

    if (typeof desktopQuery.addEventListener === "function") {
      desktopQuery.addEventListener("change", syncNavigation);
    } else {
      desktopQuery.addListener(syncNavigation);
    }

    setState(false);
  }

  function initReveal() {
    const items = qsa("[data-reveal]");
    document.body.classList.add("reveal-ready");
    if (
      !items.length ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      items.forEach((item) => item.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
  }

  function initFaq() {
    qsa(".faq-question").forEach((button) => {
      const answer = document.getElementById(
        button.getAttribute("aria-controls"),
      );
      if (!answer) return;
      button.addEventListener("click", () => {
        const open = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!open));
        answer.hidden = open;
      });
    });
  }

  function initTabs() {
    const list = qs('[role="tablist"]');
    if (!list) return;
    const tabs = qsa('[role="tab"]', list);
    const panels = qsa('[role="tabpanel"]');
    const activate = (tab) => {
      tabs.forEach((item) => {
        item.setAttribute("aria-selected", String(item === tab));
        item.tabIndex = item === tab ? 0 : -1;
      });
      panels.forEach((panel) => {
        panel.hidden = panel.id !== tab.getAttribute("aria-controls");
      });
      emit("capability_tab_view", {
        capability: tab.dataset.trackLabel || tab.textContent.trim(),
      });
    };
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activate(tab));
      tab.addEventListener("keydown", (event) => {
        if (
          !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(
            event.key,
          )
        )
          return;
        event.preventDefault();
        const direction = ["ArrowRight", "ArrowDown"].includes(event.key)
          ? 1
          : -1;
        const next = tabs[(index + direction + tabs.length) % tabs.length];
        next.focus();
        activate(next);
      });
    });
  }

  function initTracking() {
    qsa("[data-track]").forEach((element) => {
      element.addEventListener("click", () => {
        emit(element.dataset.track, {
          label: element.dataset.trackLabel || element.textContent.trim(),
          page: location.pathname,
        });
      });
    });
  }

  function attribution() {
    const params = new URLSearchParams(location.search);
    let stored = null;
    try {
      stored = JSON.parse(localStorage.getItem("alza_attribution") || "null");
    } catch {
      stored = null;
    }
    const current = {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      landing_page: location.pathname,
      referrer: document.referrer || "",
    };
    if (current.utm_source || current.utm_campaign || !stored) {
      current.captured_at = new Date().toISOString();
      try {
        localStorage.setItem("alza_attribution", JSON.stringify(current));
      } catch {
        // Storage can be unavailable in strict privacy modes.
      }
      return current;
    }
    return stored;
  }

  function initPersonalization(source) {
    if (config.personalization?.enabled === false) return;
    const sourceText =
      `${source.utm_source} ${source.utm_medium} ${source.utm_campaign} ${source.referrer}`.toLowerCase();
    let variant = "default";
    if (/linkedin|social/.test(sourceText)) variant = "leadership";
    else if (/partner|referral|consult/.test(sourceText)) variant = "partner";
    else if (/google|bing|search|m365|migration/.test(sourceText))
      variant = "migration";
    const messages = {
      leadership: {
        eyebrow: "Secure execution for transformation leaders",
        line: "Keep migration content inside customer-controlled infrastructure while giving stakeholders clear operational visibility.",
      },
      partner: {
        eyebrow: "Customer-hosted execution for migration teams",
        line: "Standardize secure pre-stage, delta, cutover, and validation workflows across customer engagements.",
      },
      migration: {
        eyebrow: "Customer-hosted Microsoft 365 migration",
        line: "Run migration workloads from infrastructure you control, without an ALZA-hosted content staging layer.",
      },
      default: {
        eyebrow: "Customer-hosted migration execution",
        line: "Run migration workloads from infrastructure you control. Data moves directly from source to target tenants—without an ALZA-hosted staging layer.",
      },
    };
    const copy = messages[variant];
    qsa("[data-personalized-eyebrow]").forEach((el) => {
      el.lastChild.textContent = copy.eyebrow;
    });
    qsa("[data-personalized-line]").forEach((el) => {
      el.textContent = copy.line;
    });
    document.documentElement.dataset.audience = variant;
  }

  function fieldValue(form, name, value) {
    const field = form.elements.namedItem(name);
    if (field) field.value = value || "";
  }

  function fallbackEmail(form) {
    const recipient =
      config.site?.contactEmail || "info@alzatotaltech.com";
    const data = new FormData(form);
    const subject = encodeURIComponent(
      `Website enquiry — ${data.get("company") || data.get("name") || "prospective customer"}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name") || ""}\n` +
        `Email: ${data.get("email") || ""}\n` +
        `Company: ${data.get("company") || ""}\n` +
        `Role: ${data.get("role") || ""}\n` +
        `Migration stage: ${data.get("stage") || ""}\n\n` +
        `Selected plan: ${data.get("selected_plan") || "Not selected"}\n\n` +
        `Message:\n${data.get("message") || ""}`,
    );
    location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }

  function initForms(source) {
    qsa(".lead-form").forEach((form) => {
      [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "landing_page",
        "referrer",
      ].forEach((name) => fieldValue(form, name, source[name]));
      fieldValue(
        form,
        "selected_plan",
        new URLSearchParams(location.search).get("plan") || "",
      );
      const status = qs(".form-status", form);
      let started = false;
      form.addEventListener("focusin", () => {
        if (!started) {
          started = true;
          emit("lead_form_start", {
            form_id: form.id,
            page: location.pathname,
          });
        }
      });
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (!form.reportValidity()) return;
        const botField = form.elements.namedItem("_company_website");
        if (botField?.value) return;
        const endpoint = config.leadCapture?.endpoint;
        emit("lead_form_submit", { form_id: form.id, page: location.pathname });
        if (!valid(endpoint)) {
          if (status) {
            status.textContent =
              "Your email app will open with the enquiry prepared. Add a form endpoint in site-config.js for direct submission.";
            status.className = "form-status success";
          }
          emit("lead_form_mailto_fallback", { form_id: form.id });
          fallbackEmail(form);
          return;
        }
        const submit = qs('[type="submit"]', form);
        if (submit) {
          submit.disabled = true;
          submit.textContent = "Sending…";
        }
        try {
          const response = await fetch(endpoint, {
            method: config.leadCapture?.method || "POST",
            body: new FormData(form),
            headers: { Accept: "application/json" },
          });
          if (!response.ok) throw new Error("Submission failed");
          emit("generate_lead", { form_id: form.id, page: location.pathname });
          const redirect =
            form.dataset.success || config.leadCapture?.redirectUrl;
          if (redirect) location.href = redirect;
          else {
            form.reset();
            if (status) {
              status.textContent = "Thank you. Your enquiry has been received.";
              status.className = "form-status success";
            }
          }
        } catch {
          emit("lead_form_error", {
            form_id: form.id,
            page: location.pathname,
          });
          if (status) {
            status.textContent = `We could not send the form. Email ${config.site?.contactEmail || "info@alzatotaltech.com"} instead.`;
            status.className = "form-status error";
          }
        } finally {
          if (submit) {
            submit.disabled = false;
            submit.textContent = submit.dataset.label || "Submit enquiry";
          }
        }
      });
    });
  }

  function initModal() {
    const modal = qs("#lead-modal");
    if (!modal) return;
    let priorFocus = null;
    const close = () => {
      modal.hidden = true;
      document.body.classList.remove("menu-open");
      priorFocus?.focus();
    };
    const open = (trigger) => {
      priorFocus = trigger;
      modal.hidden = false;
      document.body.classList.add("menu-open");
      qs("input:not([type=hidden])", modal)?.focus();
      emit("lead_modal_open", { source: trigger.dataset.modalSource || "cta" });
    };
    qsa("[data-open-lead]").forEach((trigger) =>
      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        open(trigger);
      }),
    );
    qsa("[data-close-modal]", modal).forEach((trigger) =>
      trigger.addEventListener("click", close),
    );
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !modal.hidden) {
        close();
        return;
      }
      if (event.key === "Tab" && !modal.hidden) {
        const focusable = qsa(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
          modal,
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
  }

  function hasAnalytics() {
    return (
      /^G-[A-Z0-9]+$/i.test(config.analytics?.ga4MeasurementId || "") ||
      /^\d{8,20}$/.test(config.analytics?.metaPixelId || "")
    );
  }

  function loadAnalytics() {
    const gaId = config.analytics?.ga4MeasurementId || "";
    if (/^G-[A-Z0-9]+$/i.test(gaId)) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
      document.head.appendChild(script);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", gaId, { anonymize_ip: true });
    }
    const pixelId = config.analytics?.metaPixelId || "";
    if (/^\d{8,20}$/.test(pixelId)) {
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js",
      );
      window.fbq("init", pixelId);
      window.fbq("track", "PageView");
    }
    localStorage.setItem("alza_consent", "accepted");
  }

  function initConsent() {
    if (!hasAnalytics()) return;
    const prior = localStorage.getItem("alza_consent");
    if (config.analytics?.requireConsent === false || prior === "accepted") {
      loadAnalytics();
      return;
    }
    if (prior === "declined") return;
    const banner = qs("#consent-banner");
    if (!banner) return;
    banner.hidden = false;
    qs("[data-consent-accept]", banner)?.addEventListener("click", () => {
      banner.hidden = true;
      loadAnalytics();
    });
    qs("[data-consent-decline]", banner)?.addEventListener("click", () => {
      localStorage.setItem("alza_consent", "declined");
      banner.hidden = true;
    });
  }

  function loadChatbot() {
    const provider = config.chatbot?.provider;
    const placeholder = qs(".chat-placeholder");
    if (provider === "chatbase" && valid(config.chatbot?.chatbaseBotId)) {
      window.embeddedChatbotConfig = {
        chatbotId: config.chatbot.chatbaseBotId,
        domain: "www.chatbase.co",
      };
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.setAttribute("chatbotId", config.chatbot.chatbaseBotId);
      script.setAttribute("domain", "www.chatbase.co");
      script.defer = true;
      document.body.appendChild(script);
      placeholder?.remove();
    } else if (provider === "tidio" && valid(config.chatbot?.tidioPublicKey)) {
      const script = document.createElement("script");
      script.src = `https://code.tidio.co/${encodeURIComponent(config.chatbot.tidioPublicKey)}.js`;
      script.async = true;
      document.body.appendChild(script);
      placeholder?.remove();
    } else if (placeholder) {
      placeholder.addEventListener("click", () =>
        qs("[data-open-lead]")?.click(),
      );
      placeholder.title = "Start an enquiry";
    }
  }

  async function initRelease() {
    const status = qs("[data-release-status]");
    if (!status) return;
    try {
      const response = await fetch("releases/release-manifest.json", {
        cache: "no-store",
      });
      const release = await response.json();
      const button = qs("[data-download-button]");
      qsa("[data-release-version]").forEach((el) => {
        el.textContent = release.version || "Not published";
      });
      qsa("[data-release-date]").forEach((el) => {
        el.textContent = release.releaseDate || "Pending";
      });
      qsa("[data-release-format]").forEach((el) => {
        el.textContent = release.format || "EXE or MSI";
      });
      if (release.available === true && valid(release.file) && button) {
        button.href = `releases/${release.file}`;
        button.removeAttribute("aria-disabled");
        button.removeAttribute("tabindex");
        button.textContent = `Download ${release.format || "installer"}`;
        status.textContent = "The production installer is available.";
        status.dataset.state = "available";
      }
    } catch {
      status.textContent = "Release information is temporarily unavailable.";
    }
  }

  function initExitIntent() {
    if (
      !config.exitIntent?.enabled ||
      innerWidth < 900 ||
      sessionStorage.getItem("alza_exit_seen")
    )
      return;
    setTimeout(
      () => {
        document.addEventListener("mouseout", function handler(event) {
          if (event.clientY > 8 || event.relatedTarget) return;
          sessionStorage.setItem("alza_exit_seen", "1");
          document.removeEventListener("mouseout", handler);
          qs("[data-open-lead]")?.click();
          emit("exit_intent_open");
        });
      },
      Number(config.exitIntent?.delayMs) || 15000,
    );
  }

  document.addEventListener("DOMContentLoaded", () => {
    const source = attribution();
    initMotionBudget();
    initNavigation();
    initReveal();
    initFaq();
    initTabs();
    initTracking();
    initPersonalization(source);
    initForms(source);
    initModal();
    initConsent();
    loadChatbot();
    initRelease();
    initExitIntent();
    const year = qs("[data-year]");
    if (year) year.textContent = new Date().getFullYear();
  });
})();

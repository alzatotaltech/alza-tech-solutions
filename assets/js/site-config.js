/*
 * ALZA website integration settings.
 * Leave values blank until you have real production credentials.
 * See INTEGRATIONS.md before enabling any provider.
 */
window.ALZA_SITE_CONFIG = {
  site: {
    baseUrl: "https://alzatotaltech.com",
    contactEmail: "sales@alzatotaltech.com",
    generalEmail: "info@alzatotaltech.com",
    supportEmail: "support@alzatotaltech.com",
    phone: "+971557550081",
    whatsappUrl:
      "https://wa.me/971557550081?text=Hello%20ALZA%2C%20I%27d%20like%20to%20discuss%20a%20Microsoft%20365%20migration.",
  },
  leadCapture: {
    endpoint: "",
    method: "POST",
    redirectUrl: "thank-you.html",
  },
  chatbot: {
    provider: "none", // "chatbase", "tidio", or "none"
    chatbaseBotId: "",
    tidioPublicKey: "",
  },
  analytics: {
    requireConsent: true,
    ga4MeasurementId: "",
    metaPixelId: "",
  },
  personalization: {
    enabled: true,
  },
  exitIntent: {
    enabled: false,
    delayMs: 15000,
  },
};

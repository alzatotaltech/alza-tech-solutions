# Analytics and conversion tracking

## Configure GA4

1. Create or select a GA4 property and web data stream.
2. Copy the Measurement ID in the `G-XXXXXXXXXX` format.
3. Set it in `assets/js/site-config.js`:

```js
analytics: {
  requireConsent: true,
  ga4MeasurementId: "G-XXXXXXXXXX",
  metaPixelId: ""
}
```

Google's current [GA4 website setup guide](https://developers.google.com/analytics/devguides/collection/ga4/web)
explains the account, property, stream, and tagging process.

## Configure Meta Pixel

Create the web data source in Meta Events Manager and copy its numeric ID:

```js
analytics: {
  requireConsent: true,
  ga4MeasurementId: "G-XXXXXXXXXX",
  metaPixelId: "YOUR_NUMERIC_PIXEL_ID"
}
```

Meta's [pixel setup guidance](https://www.facebook.com/help/messenger-app/952192354843755)
describes manual and partner-based setup. Add the pixel only when ALZA has an
approved advertising purpose, privacy disclosure, consent approach, and
retargeting plan.

## Consent behavior

With `requireConsent: true`, configured analytics scripts do not load until the
visitor accepts. A decline is stored in the browser. No banner appears when no
measurement IDs are configured.

The included banner is a technical control, not a legal opinion. Review consent,
privacy, and advertising requirements for the countries and audiences served.

## Events available

| Event | Trigger | Use |
|---|---|---|
| `primary_nav_cta` | Navigation evaluation CTA | Main navigation intent |
| `hero_primary_cta` | Homepage evaluation CTA | Hero conversion |
| `hero_secondary_cta` | Homepage “how it works” | Education intent |
| `capability_tab_view` | Workload tab selected | Product interest |
| `lead_modal_open` | Lead modal opened | Form-view funnel |
| `lead_form_start` | First form interaction | Form-start funnel |
| `lead_form_submit` | Valid form submitted | Submission attempt |
| `generate_lead` | Endpoint confirms success | Primary lead conversion |
| `lead_form_error` | Endpoint fails | Reliability monitoring |
| `lead_form_mailto_fallback` | No endpoint configured | Configuration warning |
| `exit_intent_open` | Optional exit capture opens | Exit-intent performance |
| `installer_download` | Enabled download clicked | Product download intent |

`generate_lead` maps to Meta's `Lead` event when Meta Pixel is active.

## Recommended funnel

1. Landing-page view
2. Primary CTA click
3. Lead modal open or contact-page view
4. Form start
5. Form submit
6. `generate_lead`
7. Qualified conversation
8. Evaluation booked

The last two steps normally come from the CRM and should not be inferred from a
website form alone.

## Verification

- Accept consent in a clean browser session.
- Use GA4 Realtime and DebugView.
- Confirm `page_view` and the custom events above.
- Confirm no analytics requests after a consent decline.
- Use Meta's Pixel Helper and Test Events tools when Meta Pixel is enabled.
- Submit test leads from each form and check UTM/referrer fields.
- Check that successful submissions redirect to `thank-you.html`.

Google's [GA4 troubleshooting guide](https://developers.google.com/analytics/devguides/collection/ga4/troubleshoot)
describes DebugView, Realtime, Tag Assistant, and network verification.

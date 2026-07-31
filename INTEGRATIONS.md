# Lead capture, chatbot, and email automation

All integration settings live in `assets/js/site-config.js`. Defaults are safe:
no external service loads and forms fall back to a prepared email.

## Recommended initial stack

- **Lead form:** Formspree or an approved CRM form/webhook
- **AI chat:** Chatbase for a knowledge-grounded AI agent, or Tidio for a
  combined chat/automation workflow
- **Email automation:** the selected CRM/email platform, connected directly or
  through an approved workflow provider
- **Analytics:** GA4; add Meta Pixel only when paid retargeting is active

This keeps GitHub Pages as the website host while external services handle work
that requires a backend.

## Form endpoint

1. Create and verify a form in the selected provider.
2. Configure destination email, spam controls, retention, and access.
3. Copy the public POST endpoint.
4. Set:

```js
leadCapture: {
  endpoint: "https://formspree.io/f/YOUR_FORM_ID",
  method: "POST",
  redirectUrl: "thank-you.html"
}
```

5. Submit from the home modal and contact page.
6. Confirm delivery, field mapping, UTM values, spam behavior, error behavior,
   and the thank-you redirect.

Formspree documents how to create a form and locate its endpoint in its
[HTML form setup guide](https://help.formspree.io/articles/building-your-form/building-an-html-form/).
The site uses `fetch` with an `Accept: application/json` header and does not
require a client secret.

For a custom serverless endpoint, allow requests from the production domain,
validate every field server-side, rate-limit submissions, filter spam, and
return a successful 2xx response. Never place a CRM private token in this site.

## Email automation sequence

Trigger the workflow only after a successful form or chatbot lead event.

| Timing | Purpose | Recommended content | Primary action |
|---|---|---|---|
| Immediate | Confirm receipt | Scope received, expected response route, privacy reminder | Open checklist |
| Day 1 | Improve qualification | Ask for tenants, users, workloads, target date, and constraints | Reply with scope |
| Day 3 | Establish value | Explain discovery, wave planning, governance, and validation | Book evaluation |
| Day 7 | Resolve objections | Address tool fit, security review, delivery model, and pricing | Review requirements |
| Day 14 | Close the loop | Offer a final conversation and a clear opt-out | Schedule or pause |

Rules:

- Do not add enquiry contacts to marketing lists without the required consent.
- Stop the nurture sequence when a person replies, books, opts out, or becomes
  an active opportunity.
- Route high-intent requests to a person immediately.
- Keep sales, support, and privacy contacts distinct.
- Use the first-touch UTM and landing-page fields for segmentation.

## Chatbase

1. Create an agent and load only approved website, product, FAQ, and support
   content.
2. Add a system instruction that prohibits invented product features, prices,
   security claims, timelines, and customer names.
3. Enable lead collection and define a human handoff.
4. Under **Deploy → Chat widget**, allow the production domain.
5. Copy the agent/chatbot ID and set:

```js
chatbot: {
  provider: "chatbase",
  chatbaseBotId: "YOUR_PUBLIC_CHATBOT_ID",
  tidioPublicKey: ""
}
```

Chatbase's current [deployment documentation](https://www.chatbase.co/docs/user-guides/chatbot/deploy)
describes widget enablement, allowed domains, content, and embed settings.

Recommended bot instructions:

> Help visitors understand ALZA's customer-hosted Microsoft 365 migration
> execution model. Explain that migration content is designed to move through
> customer-managed workers rather than an ALZA staging layer. Qualify tenant
> count, users, workloads, stage, target date, worker infrastructure, network,
> and support need. Never promise zero downtime, unlimited throughput,
> throttling bypass, perfect preservation, or an unsupported feature,
> certification, customer, price, or release date. If uncertain, say so and
> offer human contact.

## Tidio alternative

Find the unique installation code under **Settings → Live Chat →
Installation**, then copy the public key from the script URL and set:

```js
chatbot: {
  provider: "tidio",
  chatbaseBotId: "",
  tidioPublicKey: "YOUR_PUBLIC_TIDIO_KEY"
}
```

Tidio's [installation guide](https://help.tidio.com/hc/en-us/articles/5378348485660-Install-Tidio-on-Your-Website)
describes the current manual JavaScript route.

Enable only one chatbot provider.

## Dynamic personalization

Personalization is enabled by default and changes only the homepage eyebrow
and supporting sentence:

- LinkedIn/social → secure execution for transformation leadership
- partner/referral → repeatable customer-hosted execution
- search/migration campaign → Microsoft 365 customer-hosted migration
- direct/unknown → inside-the-perimeter migration proposition

The source is first-touch `utm_source`, `utm_medium`, `utm_campaign`, and
referrer data stored in the browser. It does not change prices or make
individual-level decisions.

## Exit intent

Exit intent is disabled. If approved, change `exitIntent.enabled` to `true`.
It appears only on desktop, after the configured delay, and once per session.
Use it only after the direct form endpoint is tested.

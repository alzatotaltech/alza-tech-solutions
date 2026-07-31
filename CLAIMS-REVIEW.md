# Product claims review

This review converts the proposed homepage language into claims that remain
commercially strong without creating avoidable technical, security, or
contractual exposure.

## Recommended public positioning

- **Customer-hosted migration execution**
- **Migration content moves from authorized source to target tenants through
  customer-managed workers**
- **No ALZA-hosted content staging or relay layer**
- **Separate cloud control plane for licensing and operational metering**
- **Pre-stage, delta-sync, and final-cutover passes reduce the final migration
  window**
- **Scale out across customer-managed worker virtual machines**
- **Throttling-aware execution within Microsoft service limits**
- **Preservation or reconstruction of supported content, metadata, permissions,
  and identities**

## Claims rewritten or rejected

| Original wording | Decision | Public wording |
|---|---|---|
| Zero bandwidth bottlenecks | Replace | No third-party data-relay bottleneck |
| No transit risk | Reject | No ALZA staging layer; Microsoft, network, endpoint, and configuration risks remain |
| Credentials and streams never touch our servers | Verify | Credentials and authorization tokens are handled by the local deployment |
| Seamless mailbox transfer | Soften | Transfer supported mailbox content, folders, calendars, and settings |
| Fully automated domain mapping | Verify | Identity-aware source-to-target domain mapping |
| Exact sharing rights | Reject absolute | Reconstruct supported permissions and sharing against mapped identities |
| Legally compliant HTML files | Reject legal conclusion | Searchable HTML archives designed for retention and review |
| Injects conversation history natively | Hold—code verification required | Do not publish until the production implementation is separately verified against supported Microsoft APIs and their conversation-history restrictions |
| Moves 90% before deadline | Reject fixed number | Move the bulk of eligible content before cutover |
| Delta loops continuously | Verify | Run repeatable or scheduled delta passes |
| Only copies changed items | Qualify | Delta skips unchanged items when verified through supported hashes or metadata; reconcile otherwise |
| Zero user downtime | Replace | Minimizes cutover downtime |
| Bypass API throttling | Replace | Scale throughput within Microsoft service limits |
| Unlimited storage | Qualify | No per-GB ALZA license fee; plan, subscription, Microsoft, infrastructure, supported-workload, and acceptable-use limits still apply |
| Hard-coded device limits guarantee optimal processing | Soften | Hard registered-device and concurrent-job caps control entitlement and help maintain stable workload distribution |
| Complete Suite includes native Teams history | Hold—code verification required | Current public scope is Teams history exported to searchable HTML; native history remains unpublished pending separate code and Microsoft API verification |

## Approved commercial schedule for Build 15

- Complete Suite: Starter $149 monthly / $1,490 annually; Professional $250 /
  $2,500; Business $499 / $4,990; Business Plus $750 / $7,500; Enterprise
  $2,000 / $20,000.
- Email Only: Starter $69 monthly / $690 annually; Professional $119 / $1,190;
  Business $229 / $2,290; Business Plus $349 / $3,490; Enterprise $750 /
  $7,500.
- Annual subscriptions are billed upfront at the equivalent of ten monthly
  payments.
- Standard tiers lock to one source and one target tenant. Enterprise tiers
  permit up to five tenant pairs per subscription year.
- Registered devices and concurrent migration jobs are separate hard limits.

## Verification required before public installer launch

1. Confirm whether any migration content, credentials, tokens, filenames, site
   names, chat text, or error payloads are sent to ALZA cloud services.
2. Document every telemetry and usage field, purpose, retention period,
   encryption control, and opt-out behavior.
3. Confirm the exact mailbox rules and settings supported.
4. Test metadata and permission behavior for OneDrive and SharePoint, including
   unresolved identities and sharing links.
5. Confirm path validation against current Microsoft limits.
6. Separately inspect the production Teams migration code and confirm exactly
   which conversation-history operations it performs. Validate every native
   history capability against current supported Microsoft APIs and document
   restrictions before any native-history claim is approved.
7. Confirm Teams HTML archive content, destination, search behavior, identity
   mapping, attachments, reactions, and retention implications.
8. Document hash and metadata verification used by Delta, plus fallback
   reconciliation by workload.
9. Test scheduling, pause/resume, retries, throttling, and multi-worker
   concurrency against licensed capacity.
10. Align the website, documentation, privacy notice, security architecture, and
    customer agreement with the verified production build.
11. Approve subscription, renewal, cancellation, refund, tax, acceptable-use,
    tenant-pair, license-transfer, and enforcement terms before checkout goes
    live.

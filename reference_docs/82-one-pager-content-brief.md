# 82 One-Pager Landing Page Content Brief

## Purpose

This brief provides the product story, messaging hierarchy, draft copy, and claim
boundaries for a public one-page landing page for 82.

It is based on the fetched `origin/master` product documents, especially:

- [`product-spec-through-phase-4.md`](../product-spec-through-phase-4.md)
- [Final MVP Requirements v1.1](https://github.com/bblabs-Llyco/82/blob/master/docs/reference/final-mvp-requirements-v1.1.md)
- [`CONTEXT.md`](../CONTEXT.md)

The current MVP is Android-only and begins with locally approved taxi supply in the
Philippines. This is product-positioning guidance, not a claim of production,
regulatory, security, or pilot readiness.

## 1. Product definition

### One-sentence definition

82 is a public mobility network that makes eligible local taxi supply easier to
operate, discover, request, and coordinate.

### Short description

82 connects passengers, drivers, and transport operators through one shared mobility
layer. Passengers can discover eligible nearby taxis and request a journey. Drivers
control when they are on duty and receive work through an explicit, accountable flow.
Operators can manage their vehicles and drivers, monitor their active fleet, and
control when eligible supply is visible to the public.

### Positioning statement

For passengers, drivers, and local transport operators who need a clearer way to
coordinate taxi journeys, 82 is a Philippines-focused mobility platform that brings
public discovery and private operations together without taking authority away from
the people and institutions responsible for the transport service.

## 2. Recommended public message

### Core idea

**Local mobility, made visible and accountable.**

82 is not simply a map of vehicles and it is not an operator replacement. It is the
shared layer between a passenger looking for a ride, a driver choosing when to work,
and an operator responsible for the fleet.

### Recommended tone

- Clear instead of technical
- Local instead of generic
- Accountable instead of overly promotional
- Calm and trustworthy instead of urgent or exaggerated
- Human and practical instead of enterprise-heavy

### Words to prefer

`passenger`, `driver`, `operator`, `local taxi supply`, `eligible`, `visible`,
`on duty`, `private operations`, `clear request`, `accountable journey`,
`public mobility network`

### Words to avoid or use carefully

Avoid `guaranteed`, `instant`, `nearest driver`, `best driver`, `fully verified`,
`always live`, `automatic dispatch`, `cheapest`, `government-approved by 82`,
`secure and compliant` without specific evidence, and `Uber for taxis`.

## 3. Audiences and value propositions

### Passengers

**Need:** Understand what local mobility is available and make a clear request.

**Message:**

See eligible nearby taxi supply, choose from available options, send a direct
request, and follow the resulting journey with clear states.

**Public-facing benefit points:**

- Discover nearby public taxi supply through a minimized map view.
- Set one pickup point and one destination for the journey.
- Choose an eligible driver instead of being silently assigned by an opaque ranking.
- Know whether the request is waiting, offered, accepted, unavailable, or complete.
- See only the information needed for the passenger journey.

### Drivers

**Need:** Work with a clear duty boundary and receive eligible work without routine
off-duty tracking.

**Message:**

Start duty when you are ready to work, understand when location reporting is active,
and respond to clear journey offers.

**Public-facing benefit points:**

- Decide when duty begins and ends.
- See the assigned vehicle and the journey facts needed to act.
- Receive one explicit offer rather than an invisible automatic dispatch.
- Keep passenger identity and unnecessary private information out of the Driver view.
- End duty without routine off-duty location monitoring.

### Operators

**Need:** Run a trustworthy fleet operation while choosing what becomes publicly visible.

**Message:**

Set up your operating organization, connect drivers, assign vehicles, monitor active
operations, and manage public visibility from the mobile Operator surface and the
richer Fleet Console.

**Public-facing benefit points:**

- Manage drivers, vehicles, and temporary Driver Assignments.
- Monitor operational status separately from location signal freshness.
- See the organization's own fleet, without cross-organization exposure.
- Handle duty and assignment exceptions with an accountable record.
- Keep private fleet operations separate from the minimized public map.

## 4. One-page information architecture

### Section 1 — Hero

**Goal:** Explain 82 in one glance and direct visitors to the appropriate next step.

**Headline options:**

1. **A clearer way to move with local taxi supply.**
2. **Make local mobility easier to see, operate, and trust.**
3. **The shared mobility layer for passengers, drivers, and operators.**

**Recommended subheadline:**

82 connects passengers with eligible local taxi supply while giving drivers and
operators the tools to coordinate service with clearer duty, visibility, and
operational boundaries.

**CTA options:**

- `Explore the public map` — use only when the public map is available to the target audience.
- `See how 82 works` — safe default for an informational page.
- `Join the 82 pilot` — use only after a real pilot process and eligibility are defined.
- `For operators` — links to the operator interest or onboarding path.

**Hero proof line:**

Starting with taxi mobility in the Philippines. Built around clear authority,
purposeful location use, and accountable journeys.

### Section 2 — The problem

**Heading:**

Local mobility should be easier to understand.

**Draft copy:**

Passengers should not have to guess what supply is actually available. Drivers should
not have to trade away control of their workday to participate. Operators should not
have to choose between private operational visibility and public discovery. 82 brings
these needs into one connected experience.

### Section 3 — The 82 approach

**Heading:**

One network, clear responsibilities.

**Draft copy:**

82 gives each participant the tools and information appropriate to their part of the
journey. The passenger sees a minimized public view. The Driver controls duty and
responds to a specific offer. The operator manages its own Organization and fleet.
The platform connects these experiences without collapsing their boundaries.

### Section 4 — Three audience cards

Use the three value propositions from Section 3 as short cards:

1. **For passengers** — Discover, choose, and request.
2. **For drivers** — Work on your terms.
3. **For operators** — Run the fleet with confidence.

Each card should link to a dedicated section or expandable detail if the page needs
more explanation.

### Section 5 — How a journey works

**Heading:**

From visible supply to a clear journey.

**Five-step flow:**

1. **A driver starts duty** — the Driver deliberately enters an active work context.
2. **An operator enables eligible visibility** — only supply that meets the required
   public conditions appears in the public projection.
3. **A passenger discovers and selects** — the Passenger Customer sees a minimized
   nearby view and selects one eligible Driver.
4. **The Driver receives an offer** — the request is explicit, bounded, and answerable.
5. **The trip has a visible outcome** — accepted, unavailable, cancelled, ended early,
   or completed states remain understandable.

### Section 6 — Trust and privacy

**Heading:**

Visibility with boundaries.

**Draft copy:**

82 separates public discovery from private fleet operations. Public viewers do not
receive private fleet records, precise movement history, internal notes, or compliance
evidence. Location collection has a work purpose: routine off-duty tracking is not a
default feature. Important operational decisions retain enough history to explain what
happened and who acted.

**Short trust points:**

- Public information is minimized.
- Organization data stays organization-scoped.
- Duty and tracking are understandable states.
- Operational actions are attributable.
- Stale or unavailable information is shown honestly.

### Section 7 — Surfaces

**Heading:**

The right experience for every part of the network.

**Cards:**

- **Universal Android App** — Passenger, Driver, and mobile Operator experiences in
  one app.
- **Public Mobility Map** — A read-only view of currently eligible nearby supply.
- **Fleet Console** — A richer large-screen workspace for operator fleet setup,
  monitoring, records, and exceptions.

Do not describe these as separate passenger and driver products with separate account
systems. The current model uses one Universal Account that can hold different
capacities and Organization relationships.

### Section 8 — Roadmap boundary

**Heading:**

Starting focused. Built to grow.

**Draft copy:**

82 starts with the core taxi journey: local operations, public visibility, passenger
intentions, driver offers, and trip outcomes. Future product decisions may extend the
network to additional payment, scheduling, transport, delivery, commerce, or mobility
capabilities, but each expansion will be added deliberately and with the same clear
authority and privacy boundaries.

Label these as `Future direction` or `Roadmap`, not as currently available features.

### Section 9 — Closing CTA

**Headline options:**

- **Help build a clearer local mobility network.**
- **Make your next journey easier to coordinate.**
- **Bring your operation into a more connected mobility network.**

**CTA:**

Use one verified action only: `Explore`, `Request access`, `Talk to the 82 team`, or
`Join the pilot`, depending on the real destination and eligibility process.

## 5. Ready-to-adapt short copy

### 50-word version

82 is a public mobility network for local taxi supply in the Philippines. It helps
passengers discover eligible nearby taxis and make clear requests, while drivers
control their duty and operators manage their own vehicles, people, and public
visibility. One connected layer, with clear responsibilities at every step.

### 100-word version

82 connects passengers, drivers, and transport operators through one public mobility
network. Passengers can discover eligible nearby taxi supply, choose a Driver, send a
clear request, and follow the journey's outcome. Drivers decide when they are on duty,
understand when location reporting is active, and respond to explicit offers. Operators
can manage their Organization, connect drivers, assign vehicles, monitor active fleet
operations, and control what becomes publicly visible. 82 starts with taxi mobility in
the Philippines and is designed to support local transport without replacing the
operators or institutions responsible for it.

### Suggested meta description

82 connects passengers, drivers, and local taxi operators through a clearer public
mobility network, starting in the Philippines.

## 6. Public claim checklist

### Safe to communicate for the current MVP

- 82 begins with taxi mobility in the Philippines.
- The network connects passengers, drivers, and operators.
- The Universal App supports Passenger, Driver, and mobile Operator experiences.
- A public map shows minimized eligible supply.
- Drivers control duty start and end.
- Operators can manage their own fleet and public visibility.
- The journey uses explicit selection, offers, and trip outcomes.
- The current MVP is Android-focused.

### Describe as future direction, not current availability

- Wallets, fintech, and payment processor integrations
- Scheduled or future journeys
- Multi-stop journeys
- Non-taxi transport modes
- Automatic dispatch, driver ranking, or broadcast requests
- Advanced analytics, ratings, incentives, loyalty, or referrals
- Delivery, commerce, or mobility intelligence

### Do not claim without separate evidence and approval

- Government certification or regulatory approval by 82
- Complete legal or compliance verification of every vehicle or operator
- Guaranteed availability, pickup time, fare, or trip outcome
- Permanent or continuous real-time location tracking
- Production readiness, security certification, or broad public launch
- That 82 owns fleets, employs Drivers, or sets regulated transport fares

## 7. Internal terminology notes for content authors

Use plain public language in the landing page, but preserve these meanings:

- **Passenger Customer:** the authenticated account arranging transport.
- **Passenger:** the person physically transported; they may be different from the
  Passenger Customer.
- **Driver:** a person with an active Driver Membership in an Organization.
- **Organization:** the operating group responsible for its own fleet records.
- **Vehicle / Unit:** `Vehicle` is the domain term; `Unit` may be used in operator-facing
  presentation.
- **Driver Assignment:** a temporary, dated pairing between one Driver and one Vehicle.
- **Duty Period:** the bounded work period during which a Driver is authorized to act
  and generate live operational state.
- **Ride intention:** a Passenger Customer's request to be carried on one journey.
- **Offer:** an explicit, expiring invitation to one eligible Driver duty period.
- **Trip:** the durable record of the undertaking and its outcome.

Do not use `mode`, `persona`, or `account type` to imply that passenger and Driver are
separate identities. One Universal Account can hold multiple legitimate capacities.

## 8. Recommended page order

1. Hero and primary CTA
2. Problem statement
3. 82 approach / positioning
4. Passenger, Driver, and Operator value cards
5. How the journey works
6. Trust and privacy boundaries
7. Product surfaces
8. Focused MVP / future direction
9. Closing CTA and footer

Keep the first screen focused on the human outcome. Move implementation details such as
Cognito, Firebase, Docker, Fleet Console authentication, API architecture, and database
technology to developer documentation, not the public landing page.

# 82 Product Overview

## Document purpose

This document is the complete product reference for understanding 82 before writing
public content, a landing page, a product brief, or an investor-facing explanation.
It separates the product vision from the current MVP scope and from the repository's
development architecture.

The content is grounded in the fetched `origin/master` requirements, including:

- [`product-spec-through-phase-4.md`](../product-spec-through-phase-4.md)
- [Final MVP Requirements v1.1](https://github.com/bblabs-Llyco/82/blob/master/docs/reference/final-mvp-requirements-v1.1.md)
- [`CONTEXT.md`](../CONTEXT.md)
- [`README.md`](../README.md)

The latest fetched remote tip at the time this document was prepared was
`origin/master` at `bcdb5e4`.

## 1. Executive summary

### What 82 is

82 is a public mobility app and network that begins with taxi infrastructure in the
Philippines. It connects passengers, drivers, and transport operators through one
shared digital layer.

The product makes eligible local taxi supply easier to:

- operate;
- discover;
- request;
- coordinate; and
- account for.

### What 82B is

82B is the platform and operating foundation behind the 82 experience. It provides
the identity, Organization, fleet, duty, location, public-visibility, request, offer,
Trip, notification, and administrative boundaries that allow the network to operate
without collapsing every participant into one undifferentiated system.

### The simple product promise

82 gives passengers a clearer way to find and request local taxi supply, gives Drivers
a clear work context, and gives operators a private way to run their own fleet while
choosing what becomes publicly visible.

### Current product status

The repository represents an Android-focused MVP/POC and active implementation effort.
It is not, by itself, proof of production readiness, regulatory certification, public
launch, security certification, or broad operational availability.

## 2. The problem 82 addresses

Local mobility involves three related but different needs:

1. **Passengers need understandable supply.** They need to know what nearby mobility
   is publicly available and what state a request is in.
2. **Drivers need a deliberate work boundary.** They need to choose when duty starts
   and ends and understand when location reporting is active.
3. **Operators need private operational control.** They need to manage their own
   drivers, vehicles, assignments, live operations, and exceptions without exposing
   private fleet data to the public.

Traditional public maps, private fleet tools, and passenger request flows often treat
these as one problem. 82 keeps them connected but distinct.

## 3. Product vision

82 is designed to grow into one coherent mobility network that can work across cities
and operating cultures while respecting local rules and existing transport authority.

Its product progression is:

1. Make transport supply visible to the people responsible for operating it.
2. Make eligible supply safely visible to the public.
3. Let Passenger Customers and operators coordinate and confirm trips.
4. Support clear, accountable payment and resolution flows when those capabilities
   are separately specified and released.

The long-term platform may support additional transport modes, institutions,
delivery, commerce, and mobility intelligence. Those are not part of the current
MVP contract.

## 4. What 82 is and is not

### 82 is

- A public mobility network.
- A taxi-focused starting point for the Philippines.
- A shared layer between Passenger Customers, Drivers, and Organizations.
- A private operations tool for authorized operators.
- A public discovery experience with minimized information.
- A system for explicit requests, offers, Trips, and reviewable outcomes.
- A platform that treats authority, privacy, and state accuracy as product features.

### 82 is not

- A fleet owner by default.
- An employer of Drivers by default.
- A replacement for local transport operators or institutions.
- A source of regulated taxi fares merely because it supports a journey flow.
- A public directory of every vehicle or every private fleet record.
- An automatic ranking or dispatch engine that silently chooses the Driver.
- A system that derives authority from possession of a Vehicle identifier, a cached
  client screen, an email address, or a forwarded invitation.
- A claim that a vehicle's public visibility proves legal authority or compliance.
- A permanent archive of every raw GPS heartbeat.

## 5. People and actors

### Public viewer

An anonymous person who can view the Public Mobility Map. A public viewer has no
account, organization authority, or ability to create a Passenger Customer record.

### Passenger Customer

An authenticated Universal Account acting under self-scoped authority to discover,
compose, request, coordinate, or review a passenger journey.

A Passenger Customer may arrange transport for one or more Passengers and does not
have to be the person physically transported.

### Passenger

The person physically transported on a journey. A Passenger does not need to hold a
Universal Account and may be different from the Passenger Customer, Booker, Payer, or
Sponsor.

### Driver

A person using a Universal Account with an active Driver Membership in an Organization.
The Driver can review the current assignment, start and end duty, receive and decide
Offers, perform Trip actions, and review their own relevant history.

### Solo operator

An operator who runs independently while using the same tools for Vehicle setup,
duty, private monitoring, public visibility, requests, and operational records.

### Fleet operator or dispatcher

An operator responsible for multiple Drivers or Vehicles, fleet monitoring, request
coordination, and exception handling within an Organization.

### Authorized Organization Representative

A Membership explicitly granted authority to act for one Organization within a defined
scope. The representative can manage Drivers, Vehicles, Assignments, duty exceptions,
private fleet views, and applicable public-enablement controls.

### Assigned platform staff

Platform-side staff with limited, purposeful authority for public-visibility review,
support, administration, or compliance work. Platform staff do not automatically
become Members of a customer Organization.

## 6. Identity and authority model

### One Universal Account

82 uses one Universal Account per authenticated identity. The same person may hold
multiple legitimate capacities at the same time:

- Passenger Customer capacity;
- Driver Memberships in one or more Organizations; and
- Authorized Organization Representative Memberships.

The product does not create separate passenger, driver, and operator identities for
the same person.

### Capacity is not a selectable account type

Capacity describes what an Account has grounds to do. It is not a persona, mode,
profile, or account-type switch. A Driver still retains Passenger Customer capacity.

The client may show a Passenger surface, Driver surface, or Operator surface, but the
server still verifies the authority behind every request.

### Two authority shapes

Each request runs under exactly one authority shape:

1. **Self-scoped Passenger Customer authority** — the Account's own Passenger
   Customer-authored records.
2. **Organization authority** — an active Membership and applicable grant within one
   selected Organization.
3. **No authority** — anonymous public discovery only.

Self-scoped authority and Organization authority are deliberately separate. A person's
email address, display name, Vehicle identifier, cached client state, or old screen
does not create authority.

### Authentication

A verified email address is required before a Passenger Customer-authored server record
can exist. Anonymous people can discover public supply but cannot create a Ride
intention.

## 7. Product surfaces

### Universal 82 Android App

One mobile app supports the Passenger Customer, Driver, solo-operator, and authorized
mobile Operator experiences.

The app exposes the appropriate surface based on the Account's capacities and selected
Organization context. It does not require separate passenger and driver mobile apps or
separate login identities.

#### Passenger surface

- Public Mobility Map with minimized eligible supply.
- Pickup and Destination composition.
- Ride intention submission and withdrawal.
- Eligible Driver selection.
- Direct request and Offer state.
- Trip progress and outcome.
- Relevant contact and notification states.

#### Driver surface

- Driver invitations and enrollment.
- Organization and Vehicle assignment review.
- Duty start and end.
- Tracking-purpose and permission explanation.
- Incoming Offer review and decision.
- Pickup, Trip progress, contact, and outcome actions.
- Duty history.

#### Operator surface

- Organization-scoped fleet map and list.
- Vehicle roster and setup.
- Driver roster and invitations.
- Temporary Driver Assignment management.
- Active Duty review and force-end with a reason.
- Signal/freshness and operational status.
- Permitted location-history review.
- Public-enablement controls.

### Public Mobility Map

The Public Mobility Map is a public or Passenger Customer-facing view of currently
eligible nearby supply.

It is intentionally minimized. It is not a copy of the operator's private fleet map
and does not expose private fleet records, precise location history, internal notes,
or compliance evidence.

### Fleet Console

The Fleet Console is the richer large-screen companion for solo and fleet operators.
It supports organization-scoped fleet setup, live operations, records, booking
coordination, and exception handling.

The Fleet Console is not the only place where core fleet operations can occur. The
current MVP requires the mobile Operator surface to support core fleet workflows too.

### Platform administration

A restricted platform surface supports assigned support, public-visibility approval or
restriction, compliance review, and other limited administrative actions. Platform
staff do not receive unrestricted access to every Organization's private data.

## 8. Gate A — controlled operator and Driver trial

Gate A proves that an Organization can move from setup to a trustworthy live fleet.
It is not complete because a screen exists; it requires real test accounts, real
devices, real Driver/Vehicle changes, and live map updates.

### Gate A journey

1. **Create an Organization.** The creator receives the initial representative grant.
2. **Invite a Driver.** The invitation is a record, not authority by itself.
3. **Accept the invitation.** The Driver uses a matching verified Account. Acceptance
   creates the Driver Membership but not an Assignment automatically.
4. **Add a Vehicle.** The Organization records its own Vehicle and operator-facing
   label.
5. **Create a Driver Assignment.** One active Driver is paired with one active Vehicle
   in the same Organization.
6. **Start Duty.** The Driver deliberately begins an active Duty Period on the
   assigned Vehicle.
7. **Report location.** Accepted observations support live operational state while the
   work-purpose authority remains valid.
8. **Monitor the fleet.** The representative sees the Organization's fleet from the
   mobile Operator surface and Fleet Console.
9. **Manage exceptions.** The representative may end assignments or force-end duty
   where the rules permit and must preserve the action reason where required.
10. **End and reassign.** A Driver–Vehicle pairing is temporary and can be ended and
    recreated for another operational arrangement.

### Driver Assignment rule

A Driver is not permanently bound to one Vehicle. The Driver Assignment is a dated,
temporary relationship. There can be at most one active Assignment per Driver and at
most one active Assignment per Vehicle in an Organization.

### Duty and signal rule

Operational status and Signal are separate readings:

- A Vehicle may be operationally Available while its location Signal is stale or
  absent.
- Losing location reporting does not automatically mean the Driver ended Duty.
- Ending Duty ends the normal authority for routine tracking.

## 9. Gate B — public passenger MVP

Gate B proves the core passenger-to-taxi journey from public discovery to a durable
Trip outcome.

### Gate B journey

1. **Discover.** An anonymous viewer or authenticated Passenger Customer sees only
   minimized public supply that is currently eligible for the map area.
2. **Authenticate when authoring.** A Passenger Customer signs in and has a verified
   email before creating a server-side Ride intention.
3. **Compose.** The Passenger Customer creates one Ride intention with one Pickup and
   one Destination.
4. **Select.** The Passenger Customer chooses one eligible Driver handle. The system
   does not silently rank or automatically select a Driver.
5. **Request.** A direct request asks that selected Driver to undertake the open Ride
   intention.
6. **Offer.** The Driver receives one explicit, expiring Offer and may accept or
   decline it.
7. **Create the Trip.** A valid acceptance creates exactly one Trip and removes the
   Driver from candidacy for that intention.
8. **Progress.** The Passenger and Driver see the Trip stages and actions appropriate
   to their side of the journey.
9. **Resolve.** The Trip ends with a clear outcome such as completion, cancellation,
   no-show, or early ending, with the applicable party and consequence recorded.

### No automatic dispatch

The current MVP does not choose the nearest, fastest, or highest-ranked Driver for the
Passenger. Passenger selection and explicit Driver Offer acceptance are intentional
parts of the product boundary.

### No hidden Destination in the current freeze

The current requirements disclose the Destination in the Offer before Driver
commitment. Older ideas that hide the Destination until boarding are superseded.

## 10. Core domain objects

### Universal Account

The authenticated identity that can hold multiple capacities and Organization
relationships.

### Organization

A neutral operating group. It is not automatically a corporation, employer, fleet
owner, or verified legal entity.

### Membership

A dated relationship through which an Account belongs to an Organization. Membership
is not automatically blanket administration authority.

### Driver invitation

An explicit invitation record with states such as pending, accepted, revoked,
expired, or redundant. An invitation identifier alone grants no authority.

### Driver Assignment

A temporary, dated authority relationship between one active Driver Membership and one
Vehicle in one Organization.

### Vehicle / Unit

`Vehicle` is the domain term. `Unit` may be used as an operator-facing presentation
label. A Vehicle is an Organization-private asset and may carry a Taxi Transport
Service designation.

### Duty Period

A bounded operational-responsibility period during which the Driver is authorized to
act on the assigned Vehicle and generate live operational state.

### Location Observation

A reported location fact evaluated by the server as accepted live, accepted delayed,
or rejected. Transport success alone is not proof that an observation was accepted.

### Signal

The operator-facing freshness presentation for the latest usable operational signal.
Signal is not the same as Vehicle status, Duty, availability, or connectivity proof.

### Public eligibility

The derived state that determines whether a Duty Period can appear in the public
projection. It considers relevant driver, Vehicle, Duty, service, freshness, operator,
platform, and local requirements.

### Public projection

A minimized public representation of one eligible Duty Period. It is not a private
fleet record and does not provide authority to act.

### Ride intention

A Passenger Customer's standing intent to be carried on one journey. It represents
demand; it is not automatically a confirmed booking.

### Offer handle

An opaque, intention-scoped selector representing one eligible live Duty Period to the
Passenger Customer. It is not a permanent Driver identity or a Vehicle authority key.

### Offer

An exclusive, expiring invitation to one live Duty Period to undertake the open Ride
intention.

### Trip

A durable record of the undertaking to carry and how it ended. A Trip is not a raw
location track and does not contain a complete route history.

## 11. Location, privacy, and public visibility

### Work-purpose location

Location collection and access must have an active, understandable work purpose.
Routine off-duty tracking is prohibited.

### Active duty boundary

Drivers deliberately start and end Duty. The product should explain why location
access is needed and make the relationship between duty and tracking understandable.

### Graceful degradation

Weak connectivity can cause delayed, stale, offline, or unavailable information. The
product must show that state honestly instead of presenting stale data, an undelivered
notification, or a queued action as proof of success.

### Public minimization

The public experience should show enough information for discovery and selection, but
not private fleet data, precise history, internal notes, or compliance evidence.

### Organization isolation

An Organization's private fleet, history, actions, and notifications are isolated
from other Organizations. Public projections and transaction views are separately
minimized for their audience.

### No permanent raw GPS archive

The product does not treat every raw location heartbeat as permanent history. Selected
location history is purpose-limited, coarse or bounded where required, Organization-
scoped, and may contain gaps.

## 12. Accountability and state integrity

82 is designed around honest state rather than optimistic UI claims.

Important actions such as bookings, visibility changes, financial changes, operational
overrides, and elevated administrative actions should preserve enough history to
explain:

- who acted;
- what they attempted;
- why the action occurred;
- what the previous state was; and
- what result the server accepted.

The server remains authoritative for:

- operational status;
- public eligibility;
- Signal/freshness;
- active Assignments;
- Duty state;
- Offer and Trip lifecycle;
- authority and Organization scope; and
- concurrency conflicts.

The client must not turn a locally displayed state into proof that the server accepted
an operation.

## 13. Current MVP scope

### Gate A includes

- Organization creation;
- representative authority;
- Driver invitations and onboarding;
- Vehicle onboarding;
- temporary Driver Assignments;
- Duty start and end;
- live location reporting;
- mobile Operator fleet monitoring;
- Fleet Console fleet monitoring;
- public visibility controls; and
- operator exception handling.

### Gate B includes

- Public Mobility Map;
- public visibility eligibility;
- Passenger Customer authentication for authoring;
- Ride intention composition;
- Pickup and Destination;
- Passenger Driver selection;
- Direct request;
- expiring Offer;
- Trip creation;
- basic notifications;
- Passenger and Driver Trip flows; and
- clear Trip and Ride intention outcomes.

### Current release constraints

- Android is the active MVP target.
- iOS work is deferred and is not a current release blocker.
- Development and acceptance builds should be debug builds where required by the
  location SDK configuration.
- The current MVP is a bounded taxi journey, not a complete mobility marketplace.

## 14. Explicitly deferred or excluded from the current MVP

These areas require separate product decisions and should not be implied as currently
available on a landing page:

- wallet or fintech functionality;
- payment processor and detailed refund mechanics;
- scheduled or future journeys;
- multi-stop journeys;
- dynamic fare calculation;
- taxi-meter integration;
- non-taxi transport modes;
- negotiated pricing;
- rentals, TNVS/TNC models, tricycles, jeepneys, or buses;
- automatic dispatch, broadcast requests, or Driver ranking;
- advanced fleet analytics;
- ratings, gamification, incentives, loyalty, or referrals;
- delivery and commerce;
- white-label marketplace mechanics; and
- broad mobility intelligence.

The earlier Phase 4 product vision describes some of these as future direction. The
latest Final MVP Requirements v1.1 freeze is the boundary for current implementation.

## 15. Technical architecture in the repository

This section is for product, development, and content teams who need to understand
what the repository contains. It is not public landing-page copy.

### Monorepo

- Node.js 24.x
- pnpm 11.25.0
- Turborepo workspace
- TypeScript packages and application workspaces

### Backend

The backend is a NestJS/TypeScript service with:

- AWS Cognito JWT verification and identity mapping;
- PostgreSQL/PostGIS persistence;
- Kysely database access;
- Redis for live projection and queue concerns;
- BullMQ for queued work;
- Socket.IO for live client updates;
- Firebase Admin for push-notification capability; and
- worker and scheduler processes for asynchronous and retention work.

### Universal App

The Universal App is a bare React Native application rather than an Expo application.
The current source includes:

- React Native;
- MapLibre maps;
- React Native Firebase App and Messaging;
- Cognito authorization-code/PKCE integration;
- Keychain/Keystore-backed credential storage;
- SQLite-backed local support;
- geolocation and background-location capabilities;
- QR support; and
- Socket.IO client updates.

The active product constraint is Android-only MVP work. iOS source and instructions
remain for future resumption, not current release work.

### Fleet Console

The Fleet Console is a React web/PWA-style application with:

- React and React Router;
- MapLibre;
- Cognito/OIDC browser authentication;
- Socket.IO live updates;
- organization-scoped fleet views; and
- operator setup and exception workflows.

### Public Map

The Public Map is a React/MapLibre web application that presents the minimized public
projection and is designed to work without a signed-in user for public discovery.

### Local infrastructure

The repository's Compose stack includes:

- PostgreSQL with PostGIS;
- a non-persistent Redis live projection store;
- a disk-persisted Redis queue store; and
- an optional GraphHopper routing service for local route estimates.

The development setup also uses local HTTPS for the Fleet Console and separate local
configuration for Cognito, Firebase, and API origins. Credentials and service-account
keys are kept out of source control.

## 16. Typical local development surfaces

The documented local setup uses these typical endpoints:

| Surface | Typical local endpoint | Purpose |
| --- | --- | --- |
| Backend API | `http://localhost:3000` | Accounts, operations, passenger, Driver, and service APIs |
| Fleet Console | `https://localhost:8000` | Operator web/PWA surface |
| Public Map | `http://localhost:8010` | Public read-only mobility view |
| PostgreSQL/PostGIS | `localhost:5432` | Application database |
| Redis live | `localhost:6382` | Non-persistent live projection |
| Redis queue | `localhost:6383` | Durable queued work |
| Optional routing | `localhost:8989` | Local route-estimate fallback |

These are development endpoints, not public production URLs.

## 17. Recommended public explanation

### One-sentence version

82 is a Philippines-focused public mobility network that connects passengers with
eligible local taxi supply while giving Drivers and operators clearer control over
duty, fleet operations, and public visibility.

### Short paragraph

82 brings passengers, Drivers, and transport operators into one connected mobility
experience. Passengers can discover eligible nearby taxi supply, choose a Driver, and
send a clear request. Drivers decide when they are on duty and respond to explicit
Offers. Operators manage their own Organizations, Vehicles, Assignments, and active
fleet from the Universal App and Fleet Console. 82 starts with taxi mobility in the
Philippines and is designed to support local transport without replacing the operators
or institutions responsible for it.

### Simple flow

**Operator prepares the fleet → Driver starts duty → eligible supply becomes visible →
Passenger selects and requests → Driver accepts an Offer → the Trip receives a clear
outcome.**

## 18. Frequently asked questions

### Is 82 a taxi company?

No. 82 is a mobility platform and shared operating layer. It is designed to support
locally approved transport and does not own fleets or employ Drivers by default.

### Are there separate passenger and Driver apps?

No. The current design uses one Universal Android App with different surfaces based on
the Account's legitimate capacities and Organization context.

### Does 82 track Drivers all the time?

No. Routine off-duty tracking is prohibited. Location use is tied to an understandable
work purpose and active operational authority.

### Does 82 automatically choose the nearest Driver?

No. In the current MVP, the Passenger Customer selects one eligible Driver and that
Driver receives an explicit Offer.

### Does the Public Map show every taxi?

No. It shows only minimized public projections for supply that is currently eligible
for public visibility in the relevant query area.

### Does 82 set taxi fares?

The platform does not gain authority to set regulated transport fares merely by
supporting the mobility flow. Fare and payment mechanics require separate policy and
product decisions.

### Is 82 already a production service?

The repository is an Android-focused MVP/POC and implementation/acceptance effort.
Production, regulatory, security, and broad-launch claims require separate evidence.

### What may come later?

Additional payment, scheduling, transport-mode, delivery, commerce, and mobility
capabilities may be considered through separately specified product work.

## 19. Content and claims guidance

### Safe public claims

- 82 begins with taxi mobility in the Philippines.
- 82 connects passengers, Drivers, and operators.
- Passengers can discover eligible nearby supply and make a clear request.
- Drivers control duty start and end.
- Operators can manage their own Vehicles, Drivers, Assignments, and fleet visibility.
- Public discovery and private fleet operations are separate experiences.
- The current MVP is Android-focused.

### Claims requiring evidence before publication

- Exact launch date or city availability
- Number of Drivers, Vehicles, or Organizations
- Government approvals or certifications
- Guaranteed pickup times or availability
- Fare levels or savings
- Payment availability
- Security, compliance, or reliability certifications
- Production readiness or public operational scale

### Terms to avoid in public copy

Avoid using `driver account`, `passenger account`, `nearest Driver`, `automatic
dispatch`, `always-on tracking`, `fully verified`, `government-approved by 82`, or
`real-time everywhere` unless a separately approved product decision and evidence
support the statement.

## 20. Relationship to the landing-page brief

Use [`82-one-pager-content-brief.md`](82-one-pager-content-brief.md) for the concise
marketing structure: hero copy, value propositions, section order, CTAs, short copy,
and public claim checklist.

Use this document as the complete product reference behind that marketing content.

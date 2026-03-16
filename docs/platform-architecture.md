# Sasquatch Platform Architecture

## Product Direction

This project is evolving from a custom marketing site into a structured commerce and content platform for Sasquatch Golf Academy.

The long-term product is not just a website editor. It is an operations platform that combines:

- visual page building
- media and content publishing
- product and service catalog management
- inventory tracking
- customer accounts
- memberships and bookings
- payments and order processing
- admin roles, permissions, and audit history

## Core Principles

### 1. Structured visual editing over fully freeform editing

The admin experience should feel flexible like Squarespace or Wix, but the underlying data model should stay structured:

- `Site -> Page -> Revision -> Section -> Props`
- sections come from reusable templates
- each template exposes a controlled set of editable properties
- layout stays responsive and safe by default

This avoids fragile pages while still giving non-technical admins a drag-and-drop style workflow.

### 2. Platform before polish

The product foundation should support future features without rewrites:

- multiple sites or brands
- draft and publish workflows
- staged environments
- configurable payment providers
- inventory by location
- service products and physical products

### 3. Admin actions should be auditable

Publishing, refunding, changing stock, and editing pricing should all be trackable through audit logs and revision history.

## Recommended Stack

### Application

- Next.js App Router
- React
- TypeScript

### Backend and data

- Prisma ORM
- PostgreSQL
- Prisma driver adapter for `pg`

### Authentication

- Auth.js / NextAuth route layer
- role-based admin authorization
- future support for magic link, Google, and internal staff credentials

### Commerce and payments

- Stripe for memberships, checkouts, cards on file, and webhooks
- optional Square support later if required by on-site operations

### Storage and media

- S3-compatible object storage
- image and video metadata
- focal point support
- poster image support for high-resolution video experiences

## Platform Domains

### 1. Site builder

Purpose:

- create pages
- reorder sections
- edit content visually
- manage draft revisions
- publish safely

Main entities:

- `Site`
- `Page`
- `PageRevision`
- `MediaAsset`

Future admin capabilities:

- page list and page duplication
- drag-and-drop section ordering
- reusable blocks
- template library
- theme tokens
- preview links

### 2. Catalog and inventory

Purpose:

- manage memberships, lessons, merchandise, services, and simulator offerings
- handle stock-aware physical products
- keep service products separate from stocked products

Main entities:

- `Product`
- `ProductVariant`
- `InventoryLocation`
- `InventoryLevel`

Future admin capabilities:

- product editor
- options and variants
- collection management
- stock adjustments
- low-stock alerts
- location-level reporting

### 3. Orders and payments

Purpose:

- track checkout activity
- capture, refund, and reconcile payments
- support multiple payment providers and test/live modes

Main entities:

- `Order`
- `OrderItem`
- `PaymentProvider`
- `PaymentTransaction`

Future admin capabilities:

- payment capture and refund dashboard
- webhook event logs
- failed payment recovery
- tax and discount support

### 4. Customers and memberships

Purpose:

- maintain customer profiles
- connect website accounts to commerce history
- support recurring memberships and service entitlements

Main entities:

- `User`
- `Customer`
- `Membership`
- `Organization`

Future admin capabilities:

- customer profile timeline
- membership status management
- service purchase history
- notes and tags

### 5. Governance and audit

Purpose:

- keep sensitive actions traceable
- prepare for a larger staff workflow

Main entity:

- `AuditLog`

Future admin capabilities:

- who changed pricing
- who published content
- who adjusted stock
- who refunded orders

## Admin Experience Shape

The admin application should be organized around five primary workspaces:

### Content

- pages
- sections
- revisions
- media

### Commerce

- products
- variants
- collections
- pricing

### Operations

- inventory
- locations
- orders
- refunds

### Customers

- customer profiles
- memberships
- account management

### Platform

- domains
- themes
- integrations
- roles and permissions

## Publishing Model

Recommended workflow:

1. Admin edits a page draft.
2. System creates a new `PageRevision`.
3. Preview is generated from draft data.
4. Publish sets `publishedRevisionId`.
5. Rollback means repointing the published revision.

This model is safer than in-place edits and gives the team version history from the start.

## Payment Integration Model

Recommended first payment provider: Stripe.

Reasons:

- strong recurring billing support
- checkout and payment intent support
- webhooks for order state sync
- broad ecosystem and documentation

Suggested payment flow:

1. Create order in pending state.
2. Create payment intent or checkout session with Stripe.
3. On webhook success, mark payment transaction as succeeded.
4. Update order status to paid.
5. Grant entitlements for digital or service products.
6. If refunded, create refund transaction and update order totals.

## Booking and Services Direction

Golf operations often include non-shippable products:

- lessons
- club repair
- fitting sessions
- event hosting
- simulator bookings

Those should be represented as products or service offerings with service-specific metadata, then connected later to a booking engine or scheduling module.

Recommended future addition:

- `ServiceOffering`
- `Booking`
- `ResourceCalendar`

These can be layered in after the catalog and customer foundations are stable.

## Security Requirements

Before production launch, the platform should include:

- password hashing or third-party auth provider
- route protection for admin pages
- role-based authorization checks
- CSRF-safe auth defaults
- signed webhook verification
- rate limiting on auth and sensitive admin routes
- secure secret management

## Immediate Build Roadmap

### Phase 1: Foundation

- Next.js App Router scaffold
- Prisma schema
- Auth route scaffold
- admin shell
- placeholder APIs

### Phase 2: Real data wiring

- connect PostgreSQL
- run migrations
- seed development environment
- replace mock dashboard data with Prisma queries

### Phase 3: Content platform

- page CRUD
- revisioning
- section template registry
- visual section ordering
- props editor

### Phase 4: Commerce

- product CRUD
- variant CRUD
- inventory CRUD
- order list
- customer list

### Phase 5: Payments

- Stripe integration
- webhook ingestion
- refund actions
- order/payment reconciliation

### Phase 6: Admin polish

- permissions
- audit log UI
- media library
- publish workflow
- analytics and operational insights

## What Exists In The Repo Now

The current scaffold already includes:

- Next.js application shell
- admin dashboard routes
- Prisma schema for the major domains
- Auth.js route scaffolding
- section template registry
- sample admin API endpoints
- seed script foundation

It is now a real platform foundation, not just a static homepage mockup, but it is still early infrastructure rather than a finished builder or commerce system.

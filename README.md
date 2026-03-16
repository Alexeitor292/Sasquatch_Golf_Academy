# Sasquatch Platform Foundation

This repository now contains two layers:

- The original static prototype in `legacy/site-prototype/`
- A new `Next.js + TypeScript + Prisma` foundation for the future admin platform

## What This Scaffold Is For

The goal is to evolve Sasquatch Golf Academy into a full platform, not just a marketing site:

- visual page builder and reusable section templates
- drafts, revisions, preview, and publishing
- account management and role-based admin access
- inventory-aware product catalog
- order management and payment integrations
- customer profiles, memberships, and service history

## Tech Stack

- Next.js App Router
- React + TypeScript
- Prisma + PostgreSQL
- Auth.js / NextAuth route scaffolding
- Structured section template system for a future drag-and-drop builder

See [docs/platform-architecture.md](docs/platform-architecture.md) for the fuller product and backend roadmap.

## Run It

1. Copy `.env.example` to `.env`
2. Set a real PostgreSQL `DATABASE_URL`
3. Generate the Prisma client

```bash
npm run db:generate
```

4. Push the schema

```bash
npm run db:push
```

5. Seed development data

```bash
npm run db:seed
```

6. Start the app

```bash
npm run dev
```

Open `http://localhost:3000` for the marketing foundation and `http://localhost:3000/admin` for the admin shell.

## Validation Status

The scaffold has been validated with:

- `npm.cmd run db:generate`
- `npm.cmd run typecheck`
- `npm.cmd run lint`
- `npm.cmd run build`

## Important Notes

- Authentication is scaffolded but not production-complete yet.
- The builder UI is still a schema-driven foundation, not a finished drag-and-drop editor yet.
- Payment providers are modeled in the schema, but live provider integration still needs implementation.
- The static prototype files remain in the repo as design reference during the migration.

## Recommended Next Build Steps

1. Connect a real Postgres database and run Prisma.
2. Add real auth providers and route protection.
3. Build the page builder canvas with drag-and-drop section ordering.
4. Replace mock admin data with Prisma-backed loaders and actions.
5. Add Stripe or Square payment flows plus webhook processing.
6. Port the current homepage design into the React renderer as structured page content.

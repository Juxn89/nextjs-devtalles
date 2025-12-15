<div align="center" style="margin-bottom:1rem">
  <h1 style="font-size:2.25rem; margin:0;">Testlo Shop</h1>
  <p style="color:#555; margin-top:0.5rem; max-width:60ch;">
    Minimal, modern starter for a Next.js + Prisma e‑commerce demo — Dockerized, Postgres-backed, and ready for local development.
  </p>
</div>

<p>
  <img src="https://img.shields.io/badge/Next.js-13.x-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-blue?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-blueviolet?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Prisma-4.0-2ec4b6?logo=prisma" alt="Prisma" />
  <img src="https://img.shields.io/badge/Postgres-14.0-blue?logo=postgresql" alt="Postgres" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.0-skyblue?logo=tailwindcss" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Docker-20.10-blue?logo=docker" alt="Docker" />
</p>

## Quick Start

- **Purpose:** Lightweight e‑commerce demo using Next.js, Prisma and Postgres, with Auth.js and PayPal integration.
- **Audience:** Developers wanting a full‑stack example with Docker + Prisma workflows.

**Prerequisites**
- Node.js (>=18), npm
- Docker & Docker Compose (for database container)

**Set up**
1. Copy `.env.template` to `.env` and set the values as shown in the template.
   - The project intentionally excludes `.env` from source control.
2. Install dependencies:

```pwsh
npm install
```

3. Start the database container:

```pwsh
docker compose up -d
```

4. Apply Prisma schema changes (development):

```pwsh
npx prisma migrate dev --name init
```

Or, if you prefer to push schema without migrations:

```pwsh
npx prisma db push
```

5. Run the database seed script:

```pwsh
npx ts-node prisma/seed.ts
```

If `ts-node` is not installed globally, use:

```pwsh
npx ts-node prisma/seed.ts
```

**Run the app (development)**

```pwsh
npm run dev
```

**Build & start (production)**

```pwsh
npm run build
npm run start
```

## Seed Accounts (for testing)
- **Admin:** `admin@example.com` / `password`
- **User:** `user@example.com` / `password`

These credentials come from `src/seed/seed.ts` and are seeded into the database by `prisma/seed.ts`.

## Technologies
- **Next.js:** Framework for server & client rendering. (See `next.config.ts`)
- **React + TypeScript:** Typed UI and components (TypeScript config in `tsconfig.json`).
- **Prisma:** ORM (schema at `prisma/schema.prisma`).
- **Postgres:** Database (containerized by `docker-compose.yml`).
- **Tailwind CSS:** Utility-first styling (`postcss.config.mjs`).
- **Auth.js:** Authentication flows (`nextauth.d.ts`, `auth.config.ts`).
- **PayPal & Cloudinary:** Payments and image uploads (env vars in `.env.template`).

## Useful Links (with purpose)
- **Next.js docs:** Official docs for routing, layouts and the app directory (reference for framework features).
- **Prisma docs:** Schema, migrations and seeding guide (database workflows).
- **Auth.js:** Authentication strategies used by the project (credentials, OAuth providers).
- **Docker Compose:** Container orchestration for the local Postgres instance.

## Account Setup — Get API keys

Below are direct links to create accounts and obtain API keys / client IDs for services used by this project.

| Service | Where to create an account | Purpose |
|---|---|---|
| GitHub | [Create account / Developer settings](https://github.com/join) | Create a GitHub account and configure OAuth apps or Personal Access Tokens (useful for GitHub OAuth or integrations). |
| PayPal | [PayPal Developer Dashboard](https://developer.paypal.com/) | Sign up and create REST API apps to get `CLIENT_ID` and `SECRET` for sandbox/production. |
| Cloudinary | [Cloudinary Sign Up / Console](https://cloudinary.com/users/register_free) | Create a free Cloudinary account and get cloud name / API key / API secret for image uploads. |

<!-- Footer with requested phrase and flag image on same line, centered -->
<p style="text-align:center; margin-top:1.5rem;">
  Made with ❤️ and ☕ from Nicaragua, Juan Gómez
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg" alt="Nicaragua" width="18" style="vertical-align:middle; margin-left:6px;" />
</p>

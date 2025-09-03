<div align="center" style="margin-bottom: 2rem;">
  <h1 style="font-size:2.5rem; margin-bottom:0.5rem;">🚀 Next.js Admin Todos API</h1>
  <p style="font-size:1.1rem; color:#444;">
    Experiments and notes for building a robust Admin Todos API with <b>Next.js</b>, <b>Prisma</b>, <b>Postgres</b>, <b>Docker</b>, and more.<br>
    <span style="color:#3b82f6;">Practical backend & fullstack patterns for modern web apps.</span>
  </p>
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg" alt="Nicaragua Flag" width="60" style="margin-top:1rem; border-radius: 12px; box-shadow: 0 2px 8px #0002;" />
</div>

## 📚 About this repository

<ul>
  <li>This is a personal repository created while following the <a href="https://cursos.devtalles.com/courses/nextjs" target="_blank">Next.js course</a> on DevTalles.</li>
  <li>It contains different branches, each one for a specific topic or section of the course.</li>
  <li><b>Current branch:</b> <code>03-admintodos-api</code> — API design, CRUD, database integration, validation, and more.</li>
  <li>More branches may be added as I progress through the course.</li>
</ul>

## 📝 What you'll find in this branch

This branch (<code>03-admintodos-api</code>) covers:

- **READ**: Endpoints and logic to fetch todos, including filtering and searching.
- **Paginaciones**: Implementation of pagination for efficient data loading and navigation.
- **Update**: Endpoints and UI for updating existing todos.
- **Post**: Logic and endpoints for creating new todos.
- **SEED**: Database seeding scripts for development and testing.
- **Docker**: Containerization of the app and database for easy local development and deployment.
- **Postgres**: PostgreSQL as the main relational database.
- **Prisma**: ORM for type-safe database access and migrations.
- **Prisma + Next**: Integration patterns for using Prisma within Next.js API routes and server components.
- **Yup - Validador**: Schema validation for API payloads using Yup.

## 🚀 Tech Stack

<p>
  <img src="https://img.shields.io/badge/Next.js-Server%20Components-black?logo=next.js" alt="Next.js Badge" />
  <img src="https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma&logoColor=white" alt="Prisma Badge" />
  <img src="https://img.shields.io/badge/PostgreSQL-Database-4169E1?logo=postgresql&logoColor=white" alt="PostgreSQL Badge" />
  <img src="https://img.shields.io/badge/Docker-Containerization-2496ED?logo=docker&logoColor=white" alt="Docker Badge" />
  <img src="https://img.shields.io/badge/Yup-Validation-4B32C3?logo=yup&logoColor=white" alt="Yup Badge" />
  <img src="https://img.shields.io/badge/TypeScript-Type%20Safety-3178C6?logo=typescript&logoColor=white" alt="TypeScript Badge" />
</p>

## 📚 Useful resources

<table>
  <tr>
    <td><a href="https://nextjs.org/docs" target="_blank">Next.js Docs</a></td>
    <td><a href="https://www.prisma.io/docs" target="_blank">Prisma Docs</a></td>
    <td><a href="https://www.postgresql.org/docs/" target="_blank">PostgreSQL Docs</a></td>
  </tr>
  <tr>
    <td><a href="https://yup.dev/" target="_blank">Yup Docs</a></td>
    <td><a href="https://docs.docker.com/" target="_blank">Docker Docs</a></td>
    <td><a href="https://cursos.devtalles.com/" target="_blank">DevTalles Platform</a></td>
  </tr>
</table>

## 🧩 Advanced Next.js Features

### Server Actions

Server Actions in Next.js allow you to define asynchronous functions that run securely on the server, enabling direct data mutations and business logic without exposing sensitive code to the client. They simplify data workflows and can be invoked from client components.

- [Server Actions Documentation](https://nextjs.org/docs/app/api-reference/functions/server-actions)
- [Learn Server Actions (Next.js Dashboard App)](https://nextjs.org/learn/dashboard-app/mutating-data)

### useOptimistic

The `useOptimistic` hook in Next.js enables optimistic UI updates, allowing your interface to reflect changes immediately while awaiting server confirmation. This improves user experience by making applications feel faster and more responsive.

- [useOptimistic Reference](https://nextjs.org/learn/dashboard-app/mutating-data)

### Route Segment Config

Route segment configuration in Next.js allows you to customize the behavior of specific route segments, such as enabling or disabling dynamic rendering, caching, and more.

- [Route Segment Config Documentation](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config)

## 🍪 Cookies & Shopping Cart Functionality

The objective of this section is to demonstrate how to read and write cookies, and how to use server-side cookies to build dynamic content. Key topics include:

- **Server-side cookies:** How to set, read, and manipulate cookies from API routes or server components.
- **Client-side cookies:** How to access and update cookies from the browser.
- **Shopping cart:** Using cookies to persist and manage a shopping cart across sessions.
- **Cookie manipulation:** Best practices for secure and efficient cookie handling.

For more details, see the [Next.js cookies API reference](https://nextjs.org/docs/app/api-reference/functions/cookies).

## ⚙️ Initial Setup

To get started with this project, follow these steps to configure your local environment and database:

**Requirements:**
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (for Windows)
- Docker Engine (for Linux/Mac) — see [Install Docker Engine](https://docs.docker.com/engine/install/)

**1. Install dependencies**
```bash
npm install
```

**2. Configure .env file**

Create a `.env` file based on the `.env.template` file and configure your database connection string. For example:

```
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/mydb?schema=public"
```

**3. Build and run Docker containers**

```bash
docker-compose up -d
```

**4. Run database migrations**

This command will generate and run the necessary migrations to set up your database schema.

```bash
npx prisma migrate dev --name init
```

**5. Generate Prisma Client**

Generates the Prisma Client code based on your schema. This is required for your application to interact with the database in a type-safe way.
```bash
npx prisma generate
```

**6. Start the Next.js project**

This command will start the development server.

```bash
npm run dev
```

**7. Seed the database**

A special endpoint is available to seed the database with initial data.  
Visit in your browser or use a tool like curl to access:

```
GET http://localhost:3000/api/seed
```

This will execute the seed and populate the database with sample data.

---

> Make sure Docker is running before executing the database commands.

The database data will be persisted in the `./postgres` folder in your project directory.  
Default credentials:  
- user: `postgres`  
- password: `postgres`

## 🔑 Auth.js Providers Setup

This project uses [Auth.js](https://authjs.dev/) for authentication, with Google and GitHub as providers.  
To enable these providers, you must create OAuth credentials for each and set the corresponding environment variables in your `.env` file.

### Google Provider
- Go to the [Google Cloud Console](https://console.cloud.google.com/apis/credentials?pli=1).
- Create OAuth 2.0 credentials and obtain your **Client ID** and **Client Secret**.
- Follow the [NextAuth.js Google Provider guide](https://next-auth.js.org/providers/google) for detailed steps.
- Set the following in your `.env`:

### GitHub Provider
- Go to [GitHub Developer Settings](https://github.com/settings/developers) > OAuth Apps.
- Register a new OAuth application and obtain your **Client ID** and **Client Secret**.
- Follow the [NextAuth.js GitHub Provider guide](https://authjs.dev/reference/core/providers/github).
- Set the following in your `.env`:

````````markdown
> For secure session management, generate a strong secret using [Generate Secret (NextAuth.js)](https://generate-secret.vercel.app/32) and set it as `AUTH_SECRET` in your `.env`.
````````
---

## 🧪 Testing the Application

You can test the application using the following demo credentials with the Credentials Provider:

- **Email:** `test@example.com`
- **Password:** `123456`

Use these credentials on the login page to access the app without a third-party provider.

...

## 📖 Official Documentation Links

<table>
<tr>
  <th>Resource</th>
  <th>Description</th>
</tr>
<tr>
  <td><a href="https://nextjs.org/docs/app/api-reference/file-conventions/route" target="_blank">Next.js Route Handlers</a></td>
  <td>Official documentation for creating API endpoints and custom route handlers in the Next.js App Router.</td>
</tr>
<tr>
  <td><a href="https://www.prisma.io/docs/orm/prisma-client/queries/pagination" target="_blank">Prisma Pagination</a></td>
  <td>Guide to implementing efficient pagination patterns using Prisma Client in your database queries.</td>
</tr>
<tr>
  <td><a href="https://www.prisma.io/docs/orm/reference/prisma-cli-reference" target="_blank">Prisma CLI Reference</a></td>
  <td>Comprehensive reference for all Prisma CLI commands, options, and usage examples.</td>
</tr>
<tr>
  <td><a href="https://nextjs.org/docs/app/api-reference/functions/server-actions" target="_blank">Next.js Server Actions</a></td>
  <td>API reference for defining and using Server Actions in Next.js applications.</td>
</tr>
<tr>
  <td><a href="https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config" target="_blank">Next.js Route Segment Config</a></td>
  <td>Documentation for customizing route segment behavior in the Next.js App Router.</td>
</tr>
<tr>
  <td><a href="https://nextjs.org/docs/app/api-reference/functions/cookies" target="_blank">Next.js Cookies API</a></td>
  <td>Official API reference for reading, setting, and manipulating cookies in Next.js (server and client).</td>
</tr>
<tr>
  <td><a href="https://next-auth.js.org/deployment" target="_blank">NextAuth.js Deployment</a></td>
  <td>Best practices and guides for deploying NextAuth.js in production environments.</td>
</tr>
<tr>
  <td><a href="https://generate-secret.vercel.app/32" target="_blank">Generate Secret (NextAuth.js)</a></td>
  <td>Online tool to generate secure secrets for NextAuth.js configuration.</td>
</tr>
<tr>
  <td><a href="https://next-auth.js.org/providers/google" target="_blank">NextAuth.js Google Provider</a></td>
  <td>Guide for integrating Google authentication with NextAuth.js.</td>
</tr>
<tr>
  <td><a href="https://authjs.dev/reference/core/providers/github" target="_blank">NextAuth.js GitHub Provider</a></td>
  <td>Guide for integrating GitHub authentication with Auth.js/NextAuth.js.</td>
</tr>
<tr>
  <td><a href="https://console.cloud.google.com/apis/credentials?pli=1" target="_blank">Google Cloud Credentials</a></td>
  <td>Google Cloud Console for managing OAuth credentials and API keys.</td>
</tr>
<tr>
  <td><a href="https://github.com/settings/developers" target="_blank">GitHub OAuth Apps</a></td>
  <td>GitHub Developer Settings for registering OAuth applications.</td>
</tr>
<tr>
  <td><a href="https://next-auth.js.org/providers/credentials" target="_blank">NextAuth.js Credentials Provider</a></td>
  <td>Guide for implementing custom username/password authentication with NextAuth.js.</td>
</tr>
<tr>
  <td><a href="https://www.prisma.io/docs/concepts/components/prisma-schema/relations" target="_blank">Prisma Schema Relations</a></td>
  <td>Documentation on defining and working with relations in the Prisma schema.</td>
  </tr>
</table>

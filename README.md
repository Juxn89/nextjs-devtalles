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

Rename the `.env.example` file to `.env` and configure your database connection string. For example:
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

---

> Make sure Docker is running before executing the database commands.

The database data will be persisted in the `./postgres` folder in your project directory.  
Default credentials:  
- user: `postgres`  
- password: `postgres`

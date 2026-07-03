# Tachys-Next

Tachys-Next is a high-performance, opinionated boilerplate for Next.js 16, optimized for modern, rapid development with strict architectural guidelines.

![Tachys-Next Landing Page Preview](https://assets.laznology.dev/project-preview/tachy-next-landing.png)

## 🚀 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) & [React 19](https://react.dev/)
- **Data Fetching & RPC**: [tRPC v10](https://trpc.io/)
- **Database ORM**: [Drizzle ORM v1](https://orm.drizzle.team/)
- **Database Driver**: [PGlite](https://pglite.dev/) (Postgres in WASM/Node)
- **Authentication**: [Better-Auth](https://better-auth.dev/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) with [Unstorage](https://unjs.io/packages/unstorage)
- **Styling**: Tailwind CSS v4 & Shadcn UI (v4)
- **Config Management**: c12 & defu
- **Linting & Formatting**: Ultracite (Oxlint & Oxfmt)
- **SEO**: Built-in Metadata API, OpenGraph, JSON-LD Schema, dynamic Sitemap & Robots.txt

## 🏗 Architecture & Guidelines

This repository strictly adheres to the **Tachys-Next Pattern**.

### 1. Folder Structure

- `server/routers/`: Pure controllers for defining tRPC endpoints. All heavy lifting is delegated.
- `server/services/`: Business logic, heavy data processing, and complex queries.
- `server/models/`: Zod schemas and validation logic.
- `server/db/`: Drizzle ORM schema using v2 `defineRelations` (`r.one`/`r.many`).
- `hooks/`: Domain-specific hooks for tRPC (e.g., `useUserQuery.ts`). UI components should **never** call `trpc.useQuery` directly.

### 2. State & Configuration

- **State Persistence**: Zustand stores are backed by Unstorage in `lib/store.ts` for universal persistence across environments.
- **App Configuration**: Deep-merged configuration management using `c12` and `defu` in `lib/config.ts`.

### 3. Code Standards

We use `ultracite` (powered by Oxlint & Oxfmt) to enforce strict code quality.

- **Check Code**: `pnpm check` or `pnpm lint`
- **Fix Code**: `pnpm fix`

All React code should follow modern React 19 standards:

- Use `ref` as a prop instead of `React.forwardRef`.
- Use Server Components for async data fetching where appropriate, minimizing Client Components.
- No class components.

## 🛠 Getting Started

1. **Install dependencies**:

   ```bash
   pnpm install
   ```

2. **Database Setup** (PGlite is local, but you may need to push schema):

   ```bash
   # Add your push command here if applicable
   ```

3. **Start the development server**:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🤝 Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤖 Agent Guidelines

This project utilizes specific prompts (`.claude/CLAUDE.md` and `AGENTS.md`) to instruct AI code assistants (like Gemini and Claude) to strictly follow the "Tachys-Next" pattern, write terse/high-signal output (Caveman style), and prioritize surgical edits using subagents.

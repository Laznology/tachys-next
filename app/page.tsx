"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const LandingPage = () => (
  <main className="bg-background text-foreground w-full max-w-full overflow-x-hidden font-sans antialiased selection:bg-primary selection:text-primary-foreground min-h-dvh flex flex-col animate-in fade-in duration-700">
    <nav className="fixed top-8 left-1/2 z-50 flex w-full max-w-4xl -translate-x-1/2 items-center justify-between rounded-full border border-border bg-background/60 px-6 py-3 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-full bg-foreground text-background">
          <Icon icon="ph:lightning-bold" className="size-6" />
        </div>
        <span className="font-bold tracking-tight text-xl">Tachys</span>
      </div>

      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-2">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link
                href="/dashboard"
                className="bg-transparent text-foreground hover:bg-foreground/10 hover:text-foreground focus:bg-foreground/10 data-active:bg-foreground/10"
              >
                Dashboard
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-4">
        <ThemeToggle className="h-9 w-9 rounded-full bg-transparent text-foreground hover:bg-foreground/10 hover:text-foreground" />
        <Button
          asChild
          className="hidden rounded-full sm:flex bg-primary text-primary-foreground hover:bg-primary/90 border-0"
        >
          <Link href="/login">Deploy Now</Link>
        </Button>
      </div>
    </nav>

    <section className="relative flex flex-col items-center justify-center min-h-[90dvh] pt-40 pb-32 px-6 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,rgba(0,0,0,1)_70%)] pointer-events-none -z-10" />
      <div className="mx-auto max-w-6xl w-full">
        <h1 className="text-[clamp(3.5rem,7vw,6.5rem)] font-bold leading-[0.9] tracking-tighter text-foreground animate-in slide-in-from-bottom-8 fade-in duration-1000">
          Production-ready Next.js. <br /> Ship faster with confidence.
        </h1>
        <p className="mt-10 max-w-2xl mx-auto text-xl font-light leading-relaxed text-muted-foreground animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-150 fill-mode-both">
          Stop wiring up ORMs, Auth, and UI libraries from scratch. We
          architected the ultimate Next.js boilerplate so you can launch in
          minutes, not weeks.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300 fill-mode-both">
          <Button
            asChild
            size="lg"
            className="rounded-full text-lg h-16 px-10 bg-primary text-primary-foreground hover:bg-primary/90 group overflow-hidden relative border-0"
          >
            <Link
              href="https://github.com/Laznology/tachys-next"
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener"
            >
              Get Template Repo
              <Icon
                icon="ph:arrow-right-bold"
                className="size-5 transition-transform group-hover:translate-x-2"
              />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full text-lg h-16 px-10 border-border bg-transparent text-foreground hover:bg-foreground/5 group"
          ></Button>
        </div>
      </div>
    </section>

    <section className="relative w-full bg-background py-48 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 grid-flow-dense">
          <div className="md:col-span-2 md:row-span-2 rounded-3xl p-12 bg-card flex flex-col justify-between border border-border relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500 ease-out">
            <div className="absolute inset-0 bg-linear-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
            <div>
              <h2 className="text-foreground text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-tight mb-6 leading-tight">
                Save 50+ hours of setup time.
              </h2>
              <p className="text-muted-foreground text-xl font-light leading-relaxed">
                We pre-configured Next.js App Router, Better Auth, and Drizzle
                ORM into a single cohesive stack. No more debugging integration
                errors or spending days writing boilerplate.
              </p>
            </div>
            <div className="mt-24 flex items-center gap-3 text-foreground font-medium">
              <Icon icon="ph:clock-bold" className="size-6 text-[#C5F74F]" />
              Launch Faster
            </div>
          </div>

          <div className="md:col-span-2 rounded-3xl p-10 bg-card border border-border flex flex-col justify-between group overflow-hidden hover:scale-[1.02] transition-transform duration-500 ease-out">
            <div className="flex items-center gap-4 text-muted-foreground mb-6">
              <Icon icon="ph:database-bold" className="size-6" />
              <span className="text-sm font-mono tracking-widest uppercase text-muted-foreground/50">
                Database
              </span>
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Postgres Ready
            </h3>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Drizzle ORM paired with PGlite out-of-the-box. Push your schema
              and start querying immediately with full type safety.
            </p>
          </div>

          <div className="md:col-span-1 rounded-3xl p-10 bg-primary border border-primary flex flex-col justify-between group overflow-hidden hover:scale-[1.02] transition-transform duration-500 ease-out">
            <div className="flex items-center gap-4 text-primary-foreground/50 mb-6">
              <Icon icon="ph:lock-key-bold" className="size-6" />
            </div>
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Ready Auth
            </h3>
            <p className="text-primary-foreground/80 font-medium leading-relaxed">
              Better Auth integrated with database sessions.
            </p>
          </div>

          <div className="md:col-span-1 rounded-3xl p-10 bg-card border border-border flex flex-col justify-between group overflow-hidden hover:scale-[1.02] transition-transform duration-500 ease-out">
            <div className="flex items-center gap-4 text-muted-foreground mb-6">
              <Icon icon="ph:palette-bold" className="size-6" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Tailwind v4
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              Pre-configured with Shadcn components.
            </p>
          </div>

          <div className="md:col-span-2 rounded-3xl p-10 bg-card border border-border flex flex-col justify-between group overflow-hidden hover:scale-[1.02] transition-transform duration-500 ease-out">
            <div className="flex items-center gap-4 text-muted-foreground mb-6">
              <Icon icon="ph:globe-hemisphere-west-bold" className="size-6" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              PWA & SEO Optimized
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              Native PWA support, dynamic sitemap, robots.txt, and Schema.org
              JSON-LD built-in.
            </p>
          </div>

          <div className="md:col-span-2 rounded-3xl p-10 bg-card border border-border flex flex-col justify-between group overflow-hidden hover:scale-[1.02] transition-transform duration-500 ease-out">
            <div className="flex items-center gap-4 text-muted-foreground mb-6">
              <Icon icon="ph:robot-bold" className="size-6" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Agent AI Skills Ready
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              Fully optimized for AI assistants with strict architectural rules
              and subagent workflows.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 border-y border-border bg-background overflow-hidden flex whitespace-nowrap">
      <div className="animate-marquee flex items-center gap-24 shrink-0">
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-24 text-muted-foreground"
          >
            <div className="flex flex-col items-center gap-4">
              <Icon
                icon="logos:nextjs-icon"
                className="size-14 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                Next.js 16+
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Icon
                icon="logos:react"
                className="size-14 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                React 19
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Icon
                icon="vscode-icons:file-type-tailwind"
                className="size-14 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                Tailwind v4
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Icon
                icon="simple-icons:drizzle"
                className="size-14 text-[#C5F74F] grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                Drizzle ORM
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Icon
                icon="logos:postgresql"
                className="size-14 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                PGlite
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Icon
                icon="logos:trpc"
                className="size-14 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                tRPC
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Icon
                icon="logos:hono"
                className="size-14 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                Hono
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Icon
                icon="simple-icons:betterauth"
                className="size-14 text-foreground grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                Better Auth
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>

    <footer className="bg-background px-6 pt-48 pb-24 border-t border-border mt-auto">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <h2 className="mb-12 text-[clamp(4rem,8vw,8rem)] font-bold leading-[0.9] tracking-tighter text-foreground">
          Architecture.
          <br />
          Perfected.
        </h2>
        <Button
          asChild
          size="lg"
          className="h-16 rounded-full px-12 text-xl mt-4 bg-primary text-primary-foreground hover:bg-primary/90 border-0"
        >
          <Link href="/login">Deploy the Engine</Link>
        </Button>

        <div className="mt-48 w-full flex flex-col items-center justify-between text-sm font-medium text-muted-foreground md:flex-row gap-6">
          <span>© {new Date().getFullYear()} Your Company.</span>
          <div className="flex gap-8">
            <a
              href="https://github.com/Laznology/tachys-next"
              target="_blank"
              rel="noopener"
              className="hover:text-foreground transition-colors"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </footer>
  </main>
);

export default LandingPage;

"use client";

import { GalleryVerticalEndIcon, ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-svh bg-background flex flex-col items-center">
      <header className="w-full max-w-4xl py-8 px-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold tracking-tight"
        >
          <div className="flex size-8 items-center justify-center rounded-md bg-foreground text-background">
            <GalleryVerticalEndIcon className="size-5" />
          </div>
          Tachys Inc.
        </Link>
        <Link
          href="/register"
          className="text-sm font-medium hover:underline flex items-center gap-2"
        >
          <ArrowLeftIcon className="size-4" /> Back
        </Link>
      </header>

      <main className="w-full max-w-3xl px-6 py-12 md:py-24 prose prose-neutral dark:prose-invert">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          Terms of Service
        </h1>

        <p className="text-muted-foreground mb-8">Last updated: July 1, 2026</p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using this service, you accept and agree to be
            bound by the terms and provision of this agreement. In addition,
            when using these particular services, you shall be subject to any
            posted guidelines or rules applicable to such services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            2. Provision of Services
          </h2>
          <p>
            You agree and acknowledge that Tachys Inc. is entitled to modify,
            improve or discontinue any of its services at its sole discretion
            and without notice to you even if it may result in you being
            prevented from accessing any information contained in it.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Proprietary Rights</h2>
          <p>
            You acknowledge and agree that Tachys Inc. may contain proprietary
            and confidential information including trademarks, service marks and
            patents protected by intellectual property laws and international
            intellectual property treaties.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            4. Termination of Agreement
          </h2>
          <p>
            The Terms of this agreement will continue to apply in perpetuity
            until terminated by either party without notice at any time for any
            reason. Terms that are to continue in perpetuity shall be unaffected
            by the termination of this agreement.
          </p>
        </section>
      </main>
    </div>
  );
}

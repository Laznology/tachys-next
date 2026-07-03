"use client";

import Link from "next/link";
import { GalleryVerticalEndIcon, ArrowLeftIcon } from "lucide-react";

export default function PrivacySettingsPage() {
  return (
    <div className="min-h-svh bg-background flex flex-col items-center">
      <header className="w-full max-w-4xl py-8 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
          <div className="flex size-8 items-center justify-center rounded-md bg-foreground text-background">
            <GalleryVerticalEndIcon className="size-5" />
          </div>
          Tachys Inc.
        </Link>
        <Link href="/register" className="text-sm font-medium hover:underline flex items-center gap-2">
          <ArrowLeftIcon className="size-4" /> Back
        </Link>
      </header>

      <main className="w-full max-w-3xl px-6 py-12 md:py-24 prose prose-neutral dark:prose-invert">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Privacy Policy & Settings</h1>
        
        <p className="text-muted-foreground mb-8">Last updated: July 1, 2026</p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Data Collection</h2>
          <p>
            We collect information that you provide directly to us when you create an account, update your profile, or use our services. This may include your name, email address, and usage data.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Use of Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience. We do not sell your personal data to third parties.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>
        </section>

        <section className="mb-12 p-6 border rounded-xl bg-card">
          <h2 className="text-xl font-semibold mb-4">Your Privacy Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Essential Cookies</h3>
                <p className="text-sm text-muted-foreground">Required for the site to function properly.</p>
              </div>
              <div className="h-6 w-11 rounded-full bg-primary/50 relative opacity-50 cursor-not-allowed">
                <div className="absolute right-1 top-1 h-4 w-4 rounded-full bg-background"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Analytics Cookies</h3>
                <p className="text-sm text-muted-foreground">Help us improve by tracking usage data.</p>
              </div>
              <div className="h-6 w-11 rounded-full bg-primary relative cursor-pointer">
                <div className="absolute right-1 top-1 h-4 w-4 rounded-full bg-background"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

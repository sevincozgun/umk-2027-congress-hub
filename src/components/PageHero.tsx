import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";

export function PageHero({ title, subtitle }: { title: string; subtitle?: ReactNode }) {
  return (
    <div className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 -z-10 opacity-30" style={{ background: "var(--gradient-hero)" }} />
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-4 pt-40 pb-20 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-base opacity-85">{subtitle}</p>}
      </div>
    </div>
  );
}

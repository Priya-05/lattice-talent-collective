import type { ReactNode } from "react";

import { LatticeGraphic } from "./LatticeGraphic";

export function PageHero({
  eyebrow,
  title,
  text,
  actions,
}: {
  eyebrow?: string;
  title: string;
  text: string;
  actions: ReactNode;
}) {
  return (
    <div className="wrap grid items-center gap-10 py-12 md:grid-cols-[1.1fr_0.9fr] md:py-20">
      <div>
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="display-xl">{title}</h1>
        <p className="mt-6 mb-8 max-w-[30em] text-xl text-muted-foreground">{text}</p>
        <div className="flex flex-wrap gap-3.5">{actions}</div>
      </div>
      <LatticeGraphic className="mx-auto max-w-[360px] md:max-w-none" />
    </div>
  );
}

export function InfoCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-[14px] border border-border bg-card p-7">
      <h3 className="mb-2.5 text-[1.35rem] font-bold">{title}</h3>
      <div className="text-muted-foreground">{children}</div>
    </div>
  );
}

export function Steps({ items }: { items: Array<{ title: string; text: string }> }) {
  return (
    <ol className="steps">
      {items.map((s) => (
        <li key={s.title}>
          <h3 className="mb-1 text-xl font-bold">{s.title}</h3>
          <p className="text-muted-foreground">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

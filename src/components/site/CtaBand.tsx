import type { ReactNode } from "react";

export function CtaBand({
  title,
  text,
  action,
}: {
  title: string;
  text: string;
  action: ReactNode;
}) {
  return (
    <section className="py-20">
      <div className="wrap">
        <div className="flex flex-wrap items-center justify-between gap-8 rounded-[20px] border border-border bg-band bg-band-gradient px-7 py-10 text-band-foreground md:p-14">
          <div>
            <h2 className="display-lg max-w-[14em]">{title}</h2>
            <p className="mt-3 max-w-[36em] opacity-85">{text}</p>
          </div>
          {action}
        </div>
      </div>
    </section>
  );
}

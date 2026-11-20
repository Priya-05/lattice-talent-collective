import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import type { ServiceGroup } from "@/lib/services";
import { cn } from "@/lib/utils";

/** Top-menu item that opens a panel listing every service in its group. */
export function NavDropdown({ group, triggerClassName }: { group: ServiceGroup; triggerClassName: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const panelId = `menu-${group.label.toLowerCase()}`;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to={group.to}
        className={cn(triggerClassName, "inline-flex items-center gap-1")}
        activeProps={{ className: "bg-muted text-foreground" }}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={panelId}
        onFocus={() => setOpen(true)}
      >
        {group.label}
        <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
      </Link>

      <div
        id={panelId}
        className={cn(
          "absolute top-full left-1/2 z-40 w-[400px] -translate-x-1/2 pt-3 transition-all",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0",
        )}
      >
        <div className="rounded-2xl border border-border bg-popover p-3 shadow-2xl">
          <p className="px-3 pt-2 pb-1 eyebrow">{group.heading}</p>
          <p className="px-3 pb-3 text-sm text-muted-foreground">{group.summary}</p>
          <ul>
            {group.items.map((s) => (
              <li key={s.id}>
                <Link
                  to={group.to}
                  hash={s.id}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-muted focus-visible:bg-muted"
                >
                  <span className="block font-semibold text-foreground">{s.title}</span>
                  <span className="block text-sm text-muted-foreground">{s.bestFor}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to={group.to}
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-between rounded-xl border-t border-border px-3 pt-3 pb-2 text-sm font-semibold text-teal hover:text-foreground"
          >
            See all {group.label.toLowerCase()} services
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

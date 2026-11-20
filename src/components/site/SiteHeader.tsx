import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SERVICE_GROUPS } from "@/lib/services";
import { NAV } from "@/lib/site";
import { LatticeMark } from "./LatticeMark";
import { NavDropdown } from "./NavDropdown";

const linkBase =
  "rounded-full px-4 py-2 text-[0.98rem] font-medium text-muted-foreground transition-colors hover:text-foreground";
const linkActive = "bg-muted text-foreground";

const groupFor = (to: string) => SERVICE_GROUPS.find((g) => g.to === to);

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
      <div className="wrap flex h-[68px] items-center justify-between">
        <Link
          to="/"
          aria-label="Lattice home"
          className="flex items-center gap-3 font-display text-[1.35rem] font-extrabold tracking-tight"
        >
          <LatticeMark />
          Lattice
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const group = groupFor(item.to);
            if (group) return <NavDropdown key={item.to} group={group} triggerClassName={linkBase} />;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={linkBase}
                activeProps={{ className: linkActive }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            );
          })}
          <Button asChild variant="amber" size="pillSm" className="ml-2">
            <Link to="/contact">Contact us</Link>
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu className="!size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col gap-1 overflow-y-auto pt-14 pb-8">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            {[...NAV, { to: "/contact", label: "Contact" } as const].map((item) => {
              const group = groupFor(item.to);
              return (
                <div key={item.to}>
                  <Link
                    to={item.to}
                    onClick={close}
                    className="block rounded-xl px-4 py-3 font-display text-xl font-semibold text-foreground"
                    activeProps={{ className: "bg-muted" }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                  {group && (
                    <ul className="mb-2 ml-4 border-l border-border pl-3">
                      {group.items.map((s) => (
                        <li key={s.id}>
                          <Link
                            to={group.to}
                            hash={s.id}
                            onClick={close}
                            className="block rounded-lg px-3 py-1.5 text-muted-foreground hover:text-foreground"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
            <Button asChild variant="amber" size="pill" className="mt-4">
              <Link to="/contact" onClick={close}>
                Start a conversation
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

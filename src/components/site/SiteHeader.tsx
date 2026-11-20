import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV } from "@/lib/site";
import { LatticeMark } from "./LatticeMark";

const linkBase =
  "rounded-full px-4 py-2 text-[0.98rem] font-medium text-muted-foreground transition-colors hover:text-foreground";
const linkActive = "bg-muted text-foreground";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

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
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={linkBase}
              activeProps={{ className: linkActive }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="brand" size="pillSm" className="ml-2">
            <Link to="/contact">Contact us</Link>
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu className="!size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col gap-2 pt-14">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            {[...NAV, { to: "/contact", label: "Contact" } as const].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-display text-xl font-semibold text-foreground"
                activeProps={{ className: "bg-muted" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="brand" size="pill" className="mt-4">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Start a conversation
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

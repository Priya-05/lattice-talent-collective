import { Link, useLocation } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { SERVICE_GROUPS } from "@/lib/services";
import { NAV } from "@/lib/site";
import { LatticeMark } from "./LatticeMark";
import { NavDropdown } from "./NavDropdown";

const linkBase =
  "rounded-full px-4 py-2 text-[0.98rem] font-medium text-muted-foreground transition-colors hover:text-foreground";
const linkActive = "bg-muted text-foreground";

/* Mobile tab strip: every page is one tap, no hamburger menu. */
const tabBase =
  "min-w-0 flex-1 shrink-0 whitespace-nowrap rounded-t-xl px-2 py-3.5 text-center text-[0.92rem] font-semibold text-muted-foreground transition-colors hover:text-foreground";
const tabActive = "text-foreground shadow-[inset_0_-3px_0_0_var(--color-amber)]";

const groupFor = (to: string) => SERVICE_GROUPS.find((g) => g.to === to);

export function SiteHeader() {
  const { pathname } = useLocation();
  const openGroup = SERVICE_GROUPS.find((g) => pathname.startsWith(g.to));

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
      <div className="wrap flex h-[58px] items-center justify-between md:h-[68px]">
        <Link
          to="/"
          aria-label="Lattice home"
          className="flex items-center gap-3 font-display text-[1.35rem] font-extrabold tracking-tight"
        >
          <LatticeMark live />
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

        <Button asChild variant="amber" size="pillSm" className="md:hidden">
          <Link to="/contact">Contact us</Link>
        </Button>
      </div>

      <div className="border-t border-border md:hidden">
        <nav
          aria-label="Main tabs"
          className="wrap flex gap-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={tabBase}
              activeProps={{ className: tabActive }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {openGroup && (
        <nav aria-label={`${openGroup.label} services`} className="border-t border-border md:hidden">
          <div className="wrap flex gap-2 overflow-x-auto py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {openGroup.items.map((s) => (
              <Link
                key={s.id}
                to={openGroup.to}
                hash={s.id}
                className="shrink-0 whitespace-nowrap rounded-full border border-border px-3.5 py-1 text-[0.85rem] font-medium text-muted-foreground transition-colors hover:border-teal hover:text-foreground"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

import { Link } from "@tanstack/react-router";

import { CONTACT, NAV } from "@/lib/site";
import { LatticeMark } from "./LatticeMark";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-3 font-display text-xl font-extrabold">
            <LatticeMark size={32} />
            Lattice
          </Link>
          <p className="mt-4 max-w-xs text-muted-foreground">
            Staffing and consulting that meet possibilities with purpose.
          </p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-muted-foreground hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Get in touch</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a href={`mailto:${CONTACT.general}`} className="text-muted-foreground hover:text-foreground">
                {CONTACT.general}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.careers}`} className="text-muted-foreground hover:text-foreground">
                {CONTACT.careers}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap flex flex-wrap justify-between gap-4 border-t border-border py-6 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Lattice LLC. All rights reserved.</span>
        <span>Meeting possibilities with purpose.</span>
      </div>
    </footer>
  );
}

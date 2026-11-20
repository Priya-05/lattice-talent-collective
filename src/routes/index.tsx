import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Users, Warehouse } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";

const TITLE = "Lattice LLC | Where possibilities meet purpose";
const DESC =
  "Talent and consulting in one partner. Lattice connects IT and engineering professionals with roles that matter, and helps warehouses and facilities run better.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const PATHS = [
  {
    icon: Users,
    title: "I need talent",
    text: "Temporary, temp-to-hire, direct hire, or a full hiring program, with screened people ready to contribute.",
    to: "/talent",
    cta: "Explore talent",
  },
  {
    icon: Briefcase,
    title: "I'm looking for work",
    text: "Meet a recruiter who knows you by name and finds roles that fit your goals.",
    to: "/careers",
    cta: "Find your next role",
  },
  {
    icon: Warehouse,
    title: "I want a better operation",
    text: "Warehouse flow, slotting, and layout design that helps your space do more.",
    to: "/consulting",
    cta: "Explore consulting",
  },
] as const;

const VALUES = [
  {
    title: "People first",
    text: "Every match starts with understanding the person, the team, and the work.",
  },
  {
    title: "Clear at every step",
    text: "You always know where things stand, and we reply within one business day.",
  },
  {
    title: "Results you can see",
    text: "Placements that last and plans that work on the floor, not just on paper.",
  },
];

function Home() {
  return (
    <>
      <PageHero
        eyebrow="Talent & consulting"
        title="Where possibilities meet purpose."
        text="Lattice connects talented people with roles that matter, and helps operations make the most of their space. One partner for your team and your site."
        actions={
          <>
            <Button asChild variant="brand" size="pill">
              <Link to="/contact">Request talent</Link>
            </Button>
            <Button asChild variant="brandOutline" size="pill">
              <Link to="/careers">Find work</Link>
            </Button>
          </>
        }
      />

      <section className="bg-muted py-16 md:py-20">
        <div className="wrap">
          <h2 className="display-lg">How can we help?</h2>
          <p className="mt-4 max-w-[36em] text-muted-foreground">
            Pick the path that fits you. Each one leads to a real person on our team.
          </p>
          <div className="mt-11 grid gap-5 md:grid-cols-3">
            {PATHS.map(({ icon: Icon, ...p }) => (
              <Link
                key={p.to}
                to={p.to}
                className="group flex flex-col rounded-[14px] border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-teal"
              >
                <span className="grid size-12 place-items-center rounded-full bg-muted text-teal">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-[1.35rem] font-bold">{p.title}</h3>
                <p className="mt-2 flex-1 text-muted-foreground">{p.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold">
                  {p.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">Why Lattice</p>
            <h2 className="display-lg mt-3">A partner that keeps things simple.</h2>
            <div className="mt-7 flex flex-wrap gap-2.5" aria-label="Where we place talent">
              {["Information Technology", "Engineering", "Warehousing", "Facility layout"].map((s) => (
                <span key={s} className="rounded-full border-[1.5px] border-teal px-[18px] py-2 font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="divide-y divide-border">
            {VALUES.map((v) => (
              <div key={v.title} className="py-6 first:pt-0 last:pb-0">
                <h3 className="text-xl font-bold">{v.title}</h3>
                <p className="mt-1.5 text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell us about the work."
        text="One specialist or a full program, start by describing what needs to get done. We'll bring together the right people and practical solutions to move it forward."
        action={
          <Button asChild variant="amber" size="pill">
            <Link to="/contact">Contact us</Link>
          </Button>
        }
      />
    </>
  );
}

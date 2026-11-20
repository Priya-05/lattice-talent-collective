import { createFileRoute, Link } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { InfoCard, PageHero, Steps } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { CONSULTING_SERVICES } from "@/lib/services";

const TITLE = "Warehouse & layout consulting | Lattice LLC";
const DESC =
  "Practical consulting for warehouses and facilities: operations and flow, slotting, capacity planning, floor layout and racking.";

export const Route = createFileRoute("/consulting")({
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
  component: Consulting,
});

const SERVICES = [
  {
    ...CONSULTING_SERVICES[0]!,
    chips: ["Operations & flow assessment", "Slotting & inventory placement", "Labor & capacity planning"],
  },
  {
    ...CONSULTING_SERVICES[1]!,
    chips: ["Facility & floor layout", "Racking & material flow", "Space planning for growth"],
  },
];

const STEPS = [
  { title: "Assess", text: "We walk the site, study your data, and listen to the people doing the work." },
  { title: "Design", text: "You get a clear plan with layouts, priorities, and expected results." },
  { title: "Implement", text: "We support the change through go-live so it sticks." },
];

function Consulting() {
  return (
    <>
      <PageHero
        eyebrow="Consulting"
        title="Better space. Stronger operations."
        text="Practical consulting for warehouses and facilities, from how product moves to where every rack and workstation belongs."
        actions={
          <>
            <Button asChild variant="brand" size="pill">
              <Link to="/contact">Discuss your site</Link>
            </Button>
            <Button asChild variant="brandOutline" size="pill">
              <Link to="/talent">See talent</Link>
            </Button>
          </>
        }
      />

      <section className="bg-muted py-16 md:py-20">
        <div className="wrap">
          <h2 className="display-lg">Consulting services</h2>
          <p className="mt-4 max-w-[36em] text-muted-foreground">
            Hands-on work to make your space and your process do more with what you already have.
          </p>
          <div className="mt-11 grid gap-5 md:grid-cols-2">
            {SERVICES.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-[calc(var(--header-h)+4rem)]">
              <InfoCard title={s.title}>
                <p>{s.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.chips.map((c) => (
                    <li key={c} className="rounded-full bg-muted px-3.5 py-1.5 text-[0.95rem] font-medium text-foreground">
                      {c}
                    </li>
                  ))}
                </ul>
              </InfoCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="wrap grid items-start gap-14 md:grid-cols-2">
          <div>
            <h2 className="display-lg">How an engagement works</h2>
            <p className="mt-4 text-muted-foreground">
              A simple path from walking your site to a change that holds up on day one.
            </p>
          </div>
          <Steps items={STEPS} />
        </div>
      </section>

      <CtaBand
        title="Let's look at your site."
        text="Tell us about your facility and what's slowing it down. We'll respond within one business day."
        action={
          <Button asChild variant="amber" size="pill">
            <Link to="/contact">Discuss your site</Link>
          </Button>
        }
      />
    </>
  );
}

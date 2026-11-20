import { createFileRoute, Link } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { InfoCard, PageHero, Steps } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";

const TITLE = "Talent services | Lattice LLC";
const DESC =
  "Temporary, temp-to-hire, direct hire and RPO talent solutions for IT and engineering teams, with a clear process from first call to first day.";

export const Route = createFileRoute("/talent")({
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
  component: Talent,
});

const SERVICES = [
  {
    title: "Temporary talent",
    text: "Fill peaks, absences, and special projects with screened, ready-to-work people.",
  },
  {
    title: "Temp-to-hire",
    text: "Work with a candidate on the job first, then convert to a permanent hire when the fit is proven.",
  },
  {
    title: "Direct hire",
    text: "We find, vet, and present candidates for permanent roles so you can hire with confidence.",
  },
  {
    title: "RPO",
    text: "When hiring volume outgrows your team, we run the process as an extension of your team.",
  },
];

const STEPS = [
  { title: "Tell us what you need", text: "We learn the role, schedule, skills, and culture." },
  {
    title: "We source and screen",
    text: "Interviews, skills checks, and reference reviews before anyone reaches you.",
  },
  {
    title: "You meet your matches",
    text: "Review a short list of qualified candidates and choose with confidence.",
  },
  { title: "We stay involved", text: "Check-ins after the start date keep everyone set up to succeed." },
];

function Talent() {
  return (
    <>
      <PageHero
        eyebrow="Talent"
        title="The right people, ready to do great work."
        text="We help employers build the dependable teams they need to grow, and connect talented people with roles where they can thrive."
        actions={
          <>
            <Button asChild variant="brand" size="pill">
              <Link to="/contact">Request talent</Link>
            </Button>
            <Button asChild variant="brandOutline" size="pill">
              <Link to="/careers">I'm looking for work</Link>
            </Button>
          </>
        }
      />

      <section className="bg-muted py-16 md:py-20">
        <div className="wrap">
          <h2 className="display-lg max-w-[16em]">Talent solutions built around your needs</h2>
          <p className="mt-4 max-w-[36em] text-muted-foreground">
            Every placement starts with understanding the work, the team, and what success looks like.
          </p>
          <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <InfoCard key={s.title} title={s.title}>
                <p>{s.text}</p>
              </InfoCard>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-2.5" aria-label="Where we place talent">
            <span className="mr-1 font-medium text-muted-foreground">We place talent in</span>
            {["Information Technology", "Engineering"].map((s) => (
              <span key={s} className="rounded-full border-[1.5px] border-teal px-[18px] py-2 font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="wrap grid items-start gap-14 md:grid-cols-2">
          <div>
            <h2 className="display-lg">A clear process from first call to first day</h2>
            <p className="mt-4 text-muted-foreground">
              No guesswork. You always know where your search stands, and so does the person you hire.
            </p>
          </div>
          <Steps items={STEPS} />
        </div>
      </section>

      <CtaBand
        title="Ready to build your team?"
        text="Tell us about your talent needs and we will respond within one business day."
        action={
          <Button asChild variant="amber" size="pill">
            <Link to="/contact">Request talent</Link>
          </Button>
        }
      />
    </>
  );
}

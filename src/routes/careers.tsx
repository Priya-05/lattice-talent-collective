import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHero, Steps } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/site";

const TITLE = "Find work with Lattice | IT & engineering jobs";
const DESC =
  "Looking for work that fits your goals? Lattice matches you with employers that value your skills, from short assignments to long-term roles.";

export const Route = createFileRoute("/careers")({
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
  component: Careers,
});

const resumeHref = `mailto:${CONTACT.careers}?subject=${encodeURIComponent("My resume")}`;

const PROMISES = [
  "Honest communication about every role",
  "Prompt follow-up, every time",
  "A recruiter who knows you by name, not a resume number",
  "Short assignments or a long-term home, your choice",
];

const STEPS = [
  { title: "Send your resume", text: `Email it to ${CONTACT.careers} with the kind of work you want.` },
  { title: "Talk with a recruiter", text: "We learn your skills, goals, schedule, and pay needs." },
  { title: "Meet employers", text: "We introduce you to roles that truly fit and prepare you for each step." },
  { title: "Start strong", text: "We check in after your first day to make sure it's going well." },
];

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Find work"
        title="Work that fits your goals."
        text="We match you with employers that value your skills and offer a real path forward, whether you want a short assignment or a long-term home."
        actions={
          <>
            <Button asChild variant="brand" size="pill">
              <a href={resumeHref}>Send your resume</a>
            </Button>
            <Button asChild variant="brandOutline" size="pill">
              <Link to="/contact">Ask a question</Link>
            </Button>
          </>
        }
      />

      <section className="bg-muted py-16 md:py-20">
        <div className="wrap grid items-start gap-14 md:grid-cols-2">
          <div>
            <h2 className="display-lg">What you get with Lattice</h2>
            <p className="mt-4 text-muted-foreground">
              We place people in Information Technology and Engineering roles.
            </p>
          </div>
          <ul className="space-y-4 rounded-[14px] border border-border bg-card p-7">
            {PROMISES.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-amber text-amber-foreground">
                  <Check className="size-4" />
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="wrap grid items-start gap-14 md:grid-cols-2">
          <div>
            <h2 className="display-lg">How it works</h2>
            <p className="mt-4 text-muted-foreground">Four simple steps, and we're with you the whole way.</p>
          </div>
          <Steps items={STEPS} />
        </div>
      </section>

      <CtaBand
        title="Your next role starts here."
        text="Send your resume and a recruiter will reach out within one business day."
        action={
          <Button asChild variant="amber" size="pill">
            <a href={resumeHref}>{CONTACT.careers}</a>
          </Button>
        }
      />
    </>
  );
}

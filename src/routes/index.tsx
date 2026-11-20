import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, CheckCircle2, Users, Warehouse } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHero, Steps } from "@/components/site/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SERVICE_GROUPS } from "@/lib/services";
import { CONTACT } from "@/lib/site";

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

const JUMP_LINKS = [
  { id: "start", label: "Start here" },
  { id: "services", label: "Services" },
  { id: "process", label: "How we work" },
  { id: "industries", label: "Industries" },
  { id: "why", label: "Why Lattice" },
  { id: "faq", label: "FAQ" },
];

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

const STEPS = [
  { title: "Tell us what you need", text: "A short conversation about the role, the site, or the goal." },
  { title: "We build your plan", text: "Screened candidates or a clear consulting plan, matched to your needs." },
  { title: "You choose with confidence", text: "Meet your matches or review the plan, and decide what moves forward." },
  { title: "We stay involved", text: "Regular check-ins after day one keep everyone set up to succeed." },
];

const INDUSTRIES = [
  {
    title: "Information Technology",
    text: "Skilled technology professionals for projects, support, and long-term roles.",
    to: "/talent",
  },
  {
    title: "Engineering",
    text: "Engineers who bring practical skills and dependable results to your team.",
    to: "/talent",
  },
  {
    title: "Warehousing & logistics",
    text: "Smoother flow, smarter slotting, and capacity that keeps up with demand.",
    to: "/consulting",
  },
  {
    title: "Facilities",
    text: "Floor layouts, racking, and space planning built for today and for growth.",
    to: "/consulting",
  },
] as const;

const VALUES = [
  {
    title: "People first",
    text: "Every match starts with understanding the person, the team, and the work.",
  },
  {
    title: "Clear at every step",
    text: `You always know where things stand, and we reply within ${CONTACT.responseTime}.`,
  },
  {
    title: "Results you can see",
    text: "Placements that last and plans that work on the floor, not just on paper.",
  },
];

const FAQ = [
  {
    q: "What's the difference between temporary, temp-to-hire, and direct hire?",
    a: "Temporary talent covers a set period, like a busy season or a project. Temp-to-hire lets you work with someone on the job first and make them permanent once the fit is proven. Direct hire is a permanent role on your team from day one.",
  },
  {
    q: "How quickly will I hear back?",
    a: `We reply to every message within ${CONTACT.responseTime}, and we'll agree on a clear timeline together on our first call.`,
  },
  {
    q: "Can we start with just one role?",
    a: "Absolutely. Many partnerships begin with a single role or a single site. You can grow the work with us whenever you're ready.",
  },
  {
    q: "What does warehouse and layout consulting include?",
    a: "We walk your site, study how product and people move, and deliver a practical plan for flow, slotting, capacity, floor layout, and racking. Then we support the change through go-live.",
  },
  {
    q: "I'm looking for work. How do I get started?",
    a: `Send your resume to ${CONTACT.careers} or use the contact form. A recruiter will get to know your goals and reach out about roles that fit.`,
  },
  {
    q: "Is there a cost to talk with you?",
    a: "No. The first conversation is free and comes with no obligation. It's simply a chance to understand what you need.",
  },
];

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-[40em]">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display-lg mt-3">{title}</h2>
      {text && <p className="mt-4 text-muted-foreground">{text}</p>}
    </div>
  );
}

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

      <nav
        aria-label="On this page"
        className="sticky top-[var(--header-h)] z-20 border-y border-border bg-background/95 backdrop-blur"
      >
        <div className="wrap flex gap-1 overflow-x-auto py-2.5 [scrollbar-width:none]">
          {JUMP_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="shrink-0 rounded-full px-4 py-1.5 text-[0.95rem] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="start" className="scroll-mt-[calc(var(--header-h)+3.5rem)] bg-muted py-16 md:py-20">
        <div className="wrap">
          <SectionHeading
            eyebrow="Start here"
            title="How can we help?"
            text="Pick the path that fits you. Each one leads to a real person on our team."
          />
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

      <section id="services" className="scroll-mt-[calc(var(--header-h)+3.5rem)] py-16 md:py-24">
        <div className="wrap">
          <SectionHeading
            eyebrow="Our services"
            title="Everything you need, from one partner."
            text="Talent for your team and practical consulting for your space. Choose a service to see how it works."
          />

          {SERVICE_GROUPS.map((group) => (
            <div key={group.to} className="mt-14">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-4">
                <div>
                  <h3 className="font-display text-2xl font-bold">{group.heading}</h3>
                  <p className="mt-1 text-muted-foreground">{group.summary}</p>
                </div>
                <Link
                  to={group.to}
                  className="inline-flex items-center gap-2 font-semibold text-teal hover:text-foreground"
                >
                  See all {group.label.toLowerCase()} services
                  <ArrowRight className="size-4" />
                </Link>
              </div>
              <div
                className={`mt-6 grid gap-5 sm:grid-cols-2 ${group.items.length > 2 ? "lg:grid-cols-4" : ""}`}
              >
                {group.items.map((s, i) => (
                  <Link
                    key={s.id}
                    to={group.to}
                    hash={s.id}
                    className="group flex flex-col rounded-[14px] border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-teal"
                  >
                    <span className="font-display text-sm font-bold text-amber">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="mt-3 text-[1.3rem] font-bold">{s.title}</h4>
                    <p className="eyebrow mt-1 text-[0.75rem]">{s.bestFor}</p>
                    <p className="mt-3 flex-1 text-muted-foreground">{s.text}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                      Learn more
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="scroll-mt-[calc(var(--header-h)+3.5rem)] bg-muted py-16 md:py-20">
        <div className="wrap grid items-start gap-14 md:grid-cols-2">
          <SectionHeading
            eyebrow="How we work"
            title="Simple from the very first call."
            text="Whether you're hiring or improving a site, you'll always know what happens next."
          />
          <Steps items={STEPS} />
        </div>
      </section>

      <section id="industries" className="scroll-mt-[calc(var(--header-h)+3.5rem)] py-16 md:py-20">
        <div className="wrap">
          <SectionHeading eyebrow="Industries" title="Where we do our best work." />
          <ul className="mt-10 grid gap-x-10 md:grid-cols-2">
            {INDUSTRIES.map((ind) => (
              <li key={ind.title} className="border-b border-border">
                <Link to={ind.to} className="group flex items-center justify-between gap-6 py-6">
                  <span>
                    <span className="block text-xl font-bold">{ind.title}</span>
                    <span className="mt-1 block text-muted-foreground">{ind.text}</span>
                  </span>
                  <ArrowRight className="size-5 shrink-0 text-teal transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="why" className="scroll-mt-[calc(var(--header-h)+3.5rem)] bg-muted py-16 md:py-20">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <SectionHeading
            eyebrow="Why Lattice"
            title="A partner that keeps things simple."
            text="One team for talent and operations, focused on matches that last and plans that work."
          />
          <div className="divide-y divide-border">
            {VALUES.map((v) => (
              <div key={v.title} className="flex gap-4 py-6 first:pt-0 last:pb-0">
                <CheckCircle2 className="mt-1 size-6 shrink-0 text-teal" />
                <div>
                  <h3 className="text-xl font-bold">{v.title}</h3>
                  <p className="mt-1.5 text-muted-foreground">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-[calc(var(--header-h)+3.5rem)] py-16 md:py-20">
        <div className="wrap grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Common questions"
            title="Good questions, clear answers."
            text="Don't see yours? We're happy to help."
          />
          <Accordion type="single" collapsible className="border-t border-border">
            {FAQ.map((f, i) => (
              <AccordionItem key={f.q} value={`q${i}`} className="border-border">
                <AccordionTrigger className="py-5 text-left text-lg font-semibold hover:no-underline hover:text-teal">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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

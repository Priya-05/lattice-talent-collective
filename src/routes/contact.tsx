import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buildMailto, INTERESTS, type ContactForm, type Interest } from "@/lib/contact";
import { CONTACT } from "@/lib/site";
import { cn } from "@/lib/utils";

const TITLE = "Contact Lattice LLC | Request talent or consulting";
const DESC =
  "Tell us about the work. Request talent, ask about warehouse and layout consulting, or send your resume. We reply within one business day.";

export const Route = createFileRoute("/contact")({
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
  component: Contact,
});

const EMPTY: ContactForm = {
  name: "",
  email: "",
  company: "",
  phone: "",
  interest: "hire",
  message: "",
};

const fieldClass = "h-12 rounded-xl bg-card text-base";

function Contact() {
  const [form, setForm] = useState<ContactForm>(EMPTY);
  const [sent, setSent] = useState(false);
  const set = <K extends keyof ContactForm>(k: K, v: ContactForm[K]) => setForm((f) => ({ ...f, [k]: v }));

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    window.location.href = buildMailto(form);
    setSent(true);
  }

  return (
    <section className="py-12 md:py-20">
      <div className="wrap grid items-start gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="display-xl mt-4">Tell us about the work.</h1>
          <p className="mt-6 max-w-[28em] text-xl text-muted-foreground">
            One specialist or a full program, start by describing what needs to get done.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-muted text-teal">
                <Mail className="size-5" />
              </span>
              <div>
                <p className="font-semibold">Email us directly</p>
                <a href={`mailto:${CONTACT.general}`} className="block text-muted-foreground hover:text-foreground">
                  {CONTACT.general}
                </a>
                <a href={`mailto:${CONTACT.careers}`} className="block text-muted-foreground hover:text-foreground">
                  {CONTACT.careers} <span className="text-sm">(job seekers)</span>
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-muted text-teal">
                <Clock className="size-5" />
              </span>
              <div>
                <p className="font-semibold">Fast replies</p>
                <p className="text-muted-foreground">We respond within {CONTACT.responseTime}.</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-[20px] border border-border bg-card p-6 md:p-9"
          aria-label="Contact form"
        >
          <fieldset>
            <legend className="mb-3 font-semibold">How can we help?</legend>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {INTERESTS.map((i) => (
                <label
                  key={i.value}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-xl border-2 px-4 py-3 font-medium transition-colors",
                    form.interest === i.value ? "border-teal bg-muted" : "border-border hover:border-teal",
                  )}
                >
                  <input
                    type="radio"
                    name="interest"
                    value={i.value}
                    checked={form.interest === i.value}
                    onChange={() => set("interest", i.value as Interest)}
                    className="size-4 shrink-0 accent-teal"
                  />
                  {i.label}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full name *</Label>
              <Input id="name" required maxLength={100} autoComplete="name" className={fieldClass}
                value={form.name} onChange={(e) => set("name", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" required maxLength={255} autoComplete="email" className={fieldClass}
                value={form.email} onChange={(e) => set("email", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" maxLength={100} autoComplete="organization" className={fieldClass}
                value={form.company} onChange={(e) => set("company", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" maxLength={30} autoComplete="tel" className={fieldClass}
                value={form.phone} onChange={(e) => set("phone", e.target.value)} />
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea id="message" required maxLength={2000} rows={5}
              placeholder="Roles, number of people, timeline, or what's happening at your site..."
              className="rounded-xl bg-card text-base"
              value={form.message} onChange={(e) => set("message", e.target.value)} />
          </div>

          <Button type="submit" variant="brand" size="pill" className="mt-7 w-full sm:w-auto">
            Send message
          </Button>
          <p className="mt-3 text-sm text-muted-foreground" aria-live="polite">
            {sent
              ? "Your email app should open with your message ready. Just press send."
              : "This opens your email app with your message ready to send."}
          </p>
        </form>
      </div>
    </section>
  );
}

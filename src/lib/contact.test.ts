import { describe, expect, it } from "vitest";

import { buildMailto, recipientFor, type ContactForm } from "./contact";

const base: ContactForm = {
  name: "Ana Ruiz",
  email: "ana@example.com",
  company: "Acme",
  phone: "",
  interest: "hire",
  message: "We need two engineers.",
};

describe("contact form email", () => {
  it("sends business inquiries to hello@latticellc.com", () => {
    expect(recipientFor("hire")).toBe("hello@latticellc.com");
    expect(recipientFor("consulting")).toBe("hello@latticellc.com");
    expect(buildMailto(base).startsWith("mailto:hello@latticellc.com?")).toBe(true);
  });

  it("sends job seekers to careers@latticellc.com", () => {
    expect(buildMailto({ ...base, interest: "work" }).startsWith("mailto:careers@latticellc.com?")).toBe(true);
  });

  it("includes the visitor's message and contact details", () => {
    const body = decodeURIComponent(buildMailto(base).split("body=")[1] ?? "");
    expect(body).toContain("We need two engineers.");
    expect(body).toContain("Email: ana@example.com");
    expect(body).not.toContain("Phone:");
  });
});

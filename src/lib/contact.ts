import { CONTACT } from "./site";

export const INTERESTS = [
  { value: "hire", label: "I need talent" },
  { value: "work", label: "I'm looking for work" },
  { value: "consulting", label: "Warehouse or layout consulting" },
  { value: "other", label: "Something else" },
] as const;

export type Interest = (typeof INTERESTS)[number]["value"];

export interface ContactForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: Interest;
  message: string;
}

/** Job seekers go to the careers inbox; everyone else to the general inbox. */
export function recipientFor(interest: Interest): string {
  return interest === "work" ? CONTACT.careers : CONTACT.general;
}

export function buildMailto(form: ContactForm): string {
  const label = INTERESTS.find((i) => i.value === form.interest)?.label ?? "Inquiry";
  const subject = `${label} - ${form.name.trim()}`;
  const lines = [
    form.message.trim(),
    "",
    "---",
    `Name: ${form.name.trim()}`,
    `Email: ${form.email.trim()}`,
    form.company.trim() ? `Company: ${form.company.trim()}` : "",
    form.phone.trim() ? `Phone: ${form.phone.trim()}` : "",
  ].filter((l, i, arr) => l !== "" || (i > 0 && arr[i - 1] !== ""));
  return `mailto:${recipientFor(form.interest)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

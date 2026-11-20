export type Service = {
  /** Anchor id on the service's own page, e.g. /talent#temporary */
  id: string;
  title: string;
  /** Short line shown in menus and on cards */
  bestFor: string;
  text: string;
};

export const TALENT_SERVICES: readonly Service[] = [
  {
    id: "temporary",
    title: "Temporary talent",
    bestFor: "Peaks, projects and cover",
    text: "Fill peaks, absences and special projects with screened, ready-to-work people.",
  },
  {
    id: "temp-to-hire",
    title: "Temp-to-hire",
    bestFor: "Try the fit, then hire",
    text: "Work with a candidate on the job first, then make them permanent once the fit is proven.",
  },
  {
    id: "direct-hire",
    title: "Direct hire",
    bestFor: "Permanent roles",
    text: "We find, vet and present candidates for permanent roles so you can hire with confidence.",
  },
  {
    id: "rpo",
    title: "RPO",
    bestFor: "Ongoing, high-volume hiring",
    text: "When hiring outgrows your team, we run the process for you as an extension of your team.",
  },
];

export const CONSULTING_SERVICES: readonly Service[] = [
  {
    id: "warehousing",
    title: "Warehousing",
    bestFor: "Flow, slotting and capacity",
    text: "Make the operation you have run smoother, faster and safer.",
  },
  {
    id: "layout",
    title: "Layout services",
    bestFor: "Floor plans, racking and growth",
    text: "Design space that supports the work and leaves room to grow.",
  },
];

export const SERVICE_GROUPS = [
  {
    to: "/talent",
    label: "Talent",
    heading: "Talent services",
    summary: "People for your team, from one role to a full program.",
    items: TALENT_SERVICES,
  },
  {
    to: "/consulting",
    label: "Consulting",
    heading: "Consulting services",
    summary: "Practical help for warehouses and facilities.",
    items: CONSULTING_SERVICES,
  },
] as const;

export type ServiceGroup = (typeof SERVICE_GROUPS)[number];

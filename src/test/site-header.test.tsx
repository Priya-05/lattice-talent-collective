import { QueryClient } from "@tanstack/react-query";
import { RouterProvider, createMemoryHistory, createRouter } from "@tanstack/react-router";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

/** Render the running app at a given path, without touching the network. */
async function renderApp(path: string) {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: [path] }),
    context: { queryClient: new QueryClient() },
  });
  await router.load();
  return render(<RouterProvider router={router} />);
}

describe("Site header navigation", () => {
  it("shows no hamburger menu button", async () => {
    await renderApp("/");
    expect(screen.queryByRole("button", { name: "Open menu" })).toBeNull();
  });

  it("shows every page as a tab", async () => {
    await renderApp("/");
    const tabs = within(screen.getByRole("navigation", { name: "Main tabs" })).getAllByRole("link");
    expect(tabs.map((t) => t.textContent)).toEqual(["Home", "Talent", "Consulting", "Find work"]);
  });

  it("lists the services of the open page under the tabs", async () => {
    await renderApp("/talent");
    const chips = within(screen.getByRole("navigation", { name: "Talent services" })).getAllByRole("link");
    expect(chips.map((c) => c.textContent)).toEqual([
      "Temporary talent",
      "Temp-to-hire",
      "Direct hire",
      "RPO",
    ]);
  });

  it("shows no service chips on a page without services", async () => {
    await renderApp("/careers");
    expect(screen.queryByRole("navigation", { name: "Talent services" })).toBeNull();
    expect(screen.queryByRole("navigation", { name: "Consulting services" })).toBeNull();
  });
});

import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const getBasePath = () => {
  const configuredBase = import.meta.env.BASE_URL ?? "/";
  if (configuredBase && configuredBase !== "/") {
    return configuredBase;
  }

  if (typeof window !== "undefined") {
    const pathname = window.location.pathname;
    const repoPrefixMatch = pathname.match(/^\/[^/]+\//);
    if (repoPrefixMatch) {
      return repoPrefixMatch[0];
    }
  }

  return "/";
};

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Use the Vite base URL as the router basepath so the app works when
    // deployed under a sub-path on GitHub Pages (e.g. `/repo-name/`).
    basepath: getBasePath(),
  });

  return router;
};

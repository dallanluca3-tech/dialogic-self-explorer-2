import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Use the Vite base URL as the router basepath so the app works when
    // deployed under a sub-path on GitHub Pages (e.g. `/repo-name/`).
    basepath: import.meta.env.BASE_URL,
  });

  return router;
};

import { defineConfig } from "@lovable.dev/vite-tanstack-config";
const basePath = process.env.BASE_PATH ?? "/";
export default defineConfig({
  tanstackStart: { server: { entry: "server" }, spa: { enabled: true } },
  nitro: false,
  vite: { base: basePath },
});

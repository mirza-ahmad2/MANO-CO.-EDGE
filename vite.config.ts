// Vite + TanStack Start config. Additional plugins (React, Tailwind, Nitro, path
// aliases) are provided by the shared config package — do not duplicate them here.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (SSR error wrapper).
    server: { entry: "server" },
  },
});

// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// On Vercel this site is deployed as a static SPA. TanStack Start writes its
// client build to dist/client, so we prerender a SPA shell as index.html there
// and let Vercel rewrite /quote and all other page URLs back to that shell.
const isVercel = !!process.env.VERCEL;

export default defineConfig({
  cloudflare: isVercel ? false : undefined,
  tanstackStart: isVercel
    ? {
        spa: {
          enabled: true,
          prerender: {
            outputPath: "/index",
          },
        },
      }
    : undefined,
});

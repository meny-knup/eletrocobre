// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// On Vercel we must NOT use the Cloudflare Workers build target — Vercel
// expects the default Nitro output. Detect Vercel via its built-in env var
// and disable the Cloudflare plugin so TanStack Start emits a Vercel-compatible
// server build (.vercel/output) that Vercel deploys automatically.
const isVercel = !!process.env.VERCEL;

export default defineConfig({
  cloudflare: isVercel ? false : undefined,
  tanstackStart: isVercel ? { target: "vercel" } : undefined,
});

import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { join } from "node:path";
import { copyFileSync } from "node:fs";

export default defineConfig({

  base: '/michinskiVsZanth/',
  plugins: [
    remix({
      basename: '/michinskiVsZanth/',
      ssr: false,

    }),
    tsconfigPaths(),
  ],
});

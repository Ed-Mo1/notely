import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { purgeCss } from "vite-plugin-tailwind-purgecss";

export default defineConfig({
  plugins: [react(), purgeCss()],
  base: "/notely/",
});

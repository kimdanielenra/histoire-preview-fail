import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";

export default defineConfig({
  plugins: [HstVue()],
  // viteNodeInlineDeps: [/.*date-fns.*/],
  setupFile: "/src/histoire.setup.ts",
  tree: {
    groups: [
      {
        id: "top",
        title: "", // No toggle
      },
    ],
  },
});

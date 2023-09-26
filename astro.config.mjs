import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://pp-astro-tutorial.netlify.app/",
  integrations: [preact()]
});
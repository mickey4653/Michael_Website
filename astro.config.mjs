import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        ssr: {
          // Example: Minify local SVG 
          external: ["svgo"],
        }
      },
});

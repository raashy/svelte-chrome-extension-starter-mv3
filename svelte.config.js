import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess({
    postcss: {
      plugins: [autoprefixer(), tailwindcss()],
    },
    compilerOptions: {
      format: "cjs",
    },
  }),
};

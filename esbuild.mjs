/*
    Alternatively, you can use the esbuild API to build.
    
    This is useful if you don't want to have HTML files for background and content scripts or build self-contained svelete components.
    The css will be injected into the js file. Change the entryPoints to your needs.
*/

import esbuild from "esbuild";
import sveltePlugin from "esbuild-svelte";
import sveltePreprocess from "svelte-preprocess";
import postcss from "esbuild-postcss";
import cssModulesPlugin from "esbuild-css-modules-plugin";
import { style } from "@hyrious/esbuild-plugin-style";

esbuild
  .build({
    entryPoints: ["src/background/background.js", "src/content/content.js"],
    mainFields: ["svelte", "browser", "module", "main"],
    bundle: true,
    format: "esm",
    target: "esnext",
    outdir: "dist",
    plugins: [
      sveltePlugin({
        emitCss: true,
        compilerOptions: {
          css: "injected",
        },
        preprocess: [sveltePreprocess()],
      }),
      style(),
      postcss(),
      cssModulesPlugin(),
    ],
    logLevel: "info",
  })
  .catch((e) => {
    console.error("Build failed", e);
    process.exit(1);
  });

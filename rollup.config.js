import * as path from "path";

import autoprefixer from "autoprefixer";

import svelte from "rollup-plugin-svelte";
import preprocess from "svelte-preprocess";
import postcss from "rollup-plugin-postcss";
import htmlTemplate from "rollup-plugin-generate-html-template";

import resolve from "@rollup/plugin-node-resolve";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import { watchExternal } from "rollup-plugin-watch-external";
import terser from "@rollup/plugin-terser";

export default {
  input: "./src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    name: "app"
  },
  plugins: [
    svelte({
      preprocess: preprocess(),
      emitCss: true
    }),
    postcss({
      extensions: [ ".sass", ".css" ],
      extract: true,
      minimize: true,
      plugins: [ autoprefixer() ]
    }),
    htmlTemplate({
      template: "./public/index.html",
      target: "dist/index.html"
    }),
    watchExternal({
      entries: [ "html/*.html" ]
    }),
    resolve(),
    serve({
      contentBase: path.join(process.cwd(), "/dist"),
      host: "localhost",
      port: 50000
    }),
    livereload("dist"),
    terser()
  ]
};

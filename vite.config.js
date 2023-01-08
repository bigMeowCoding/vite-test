import { defineConfig } from "vite";
import * as path from "path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import postcssEnv from "postcss-preset-env";
import viteAlias from "./src/plugins/vite-alias";

export default defineConfig(() => {
  return {
    css: {
      postcss: {
        plugins: [
          autoprefixer(),
          postcssEnv({
            importFrom: path.resolve(
              __dirname,
              "src/common/styles/variable.css"
            ),
          }),
          tailwindcss(),
        ],
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "${path.resolve(
            __dirname,
            "src/common/styles/var.scss"
          )}";
          @import "${path.resolve(
              __dirname,
              "src/common/styles/variable.css"
          )}";
          
          `,
        },
      },
    },
    plugins: [{ ...viteAlias(), enforce: "pre" }],
  };
});

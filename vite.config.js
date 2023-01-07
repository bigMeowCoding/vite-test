import { defineConfig } from "vite";
import * as path from "path";

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/common/styles/var.scss";`,
        },
      },
    },
  };
});

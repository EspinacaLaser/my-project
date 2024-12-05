import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./src", // no olvidemos cambiar la raíz del proyecto a "src"
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/index.html"), // Página principal
        buy: resolve(__dirname, "./src/buy.html"), // Otra página
        // Añade más entradas si es necesario
      },
    },
    outDir: "docs", // Cambia la carpeta de salida a "docs"
  },
  base: "/my-project/", // Opcional: rutas relativas para mayor compatibilidad
});
import path from "node:path";
import { existsSync, readdirSync } from "node:fs";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const inferredBase =
  process.env.GITHUB_ACTIONS && repositoryName && !repositoryName.endsWith(".github.io")
    ? `/${repositoryName}/`
    : "/";

function workPageInputs() {
  const workRoot = path.resolve(__dirname, "work");

  if (!existsSync(workRoot)) {
    return {};
  }

  return Object.fromEntries(
    readdirSync(workRoot, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => {
        const htmlPath = path.resolve(workRoot, entry.name, "index.html");
        return [`work/${entry.name}/index`, htmlPath] as const;
      })
      .filter(([, htmlPath]) => existsSync(htmlPath))
  );
}

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? inferredBase,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
        ...workPageInputs()
      }
    }
  },
});

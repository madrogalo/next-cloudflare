import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

export default eslintConfig;

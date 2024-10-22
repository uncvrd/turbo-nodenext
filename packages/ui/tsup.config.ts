import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["./src/**/*.ts*"],
    outDir: "dist",
    bundle: false,
    format: ["esm"],
    silent: true,
});

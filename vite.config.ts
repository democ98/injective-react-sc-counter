import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { nodePolyfills } from "@bangjelkoski/vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills({ protocolImports: true })],
  base: process.env.NODE_ENV === 'production' ? '/injective-react-sc-counter/' : '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});

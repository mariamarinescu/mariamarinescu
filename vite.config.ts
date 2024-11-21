import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import viteReact from '@vitejs/plugin-react';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react(), tsconfigPaths(), TanStackRouterVite(), viteReact()],
  base: '/mm-me/',
});

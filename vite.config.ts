/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

// const pwaOptions: Partial<VitePWAOptions> = {
//   registerType: 'autoUpdate',
//   manifest: {
//     short_name: 'vite-react-chakra-starter',
//     name: 'Vite React App Template',
//     lang: 'en',
//     start_url: '/',
//     background_color: '#FFFFFF',
//     theme_color: '#FFFFFF',
//     dir: 'ltr',
//     display: 'standalone',
//     prefer_related_applications: false,
//     icons: [
//       {
//         src: '/assets/favicon.svg',
//         purpose: 'any',
//         sizes: '48x48 72x72 96x96 128x128 256x256',
//       },
//     ],
//   },
// };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
    tsconfigPaths(),
    // VitePWA(pwaOptions),
  ],
  server: {
    open: true,
  },
});

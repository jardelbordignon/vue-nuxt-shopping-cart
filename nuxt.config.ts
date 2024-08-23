// https://nuxt.com/docs/api/configuration/nuxt-config
// https://vuetifyjs.com/en/getting-started/installation/#manual-setup
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import type { PwaModuleOptions } from "@vite-pwa/nuxt";

const pwa: PwaModuleOptions = {
  strategies: "injectManifest",
  srcDir: "service-worker",
  filename: "sw.ts",
  registerType: "autoUpdate",
  manifest: {
    name: "nome do seu APP",
    short_name: "nome simplificado do APP",
    theme_color: "#ffffff",
    start_url: "/",
    lang: "pt-br",
    description: "descrição do seu APP",
    screenshots: [
      {
        src: "manifest/home-screen.png",
        sizes: "320x320",
        type: "image/png",
        form_factor: "wide",
        label: "nome simplificado do APP",
      },
    ],
    icons: [
      {
        src: "manifest/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "manifest/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "manifest/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  workbox: {
    globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
  },
  injectManifest: {
    globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
  },
  client: {
    installPrompt: true,
    periodicSyncForUpdates: 20,
  },
  devOptions: {
    enabled: true,
    suppressWarnings: true,
    navigateFallback: "/",
    navigateFallbackAllowlist: [/^\/$/],
    type: "module",
  },
};

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  srcDir: "src/",
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    ["@pinia/nuxt", { disableVuex: true }],
    "@nuxt/test-utils/module",
    "@vite-pwa/nuxt",
  ],
  pwa,
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});

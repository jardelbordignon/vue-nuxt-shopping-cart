// https://nuxt.com/docs/api/configuration/nuxt-config
// https://vuetifyjs.com/en/getting-started/installation/#manual-setup
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
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
    '@nuxt/test-utils/module',
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});

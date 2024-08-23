import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  plugins: [],
  test: {
    environment: "nuxt",
    globals: true,
    //environment: "jsdom",
  },
});

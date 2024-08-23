// mover para o diretorio src/plugins caso for usar vuetify

// find icons in https://materialdesignicons.com/
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { VCalendar } from "vuetify/labs/VCalendar";

const vuetify = createVuetify({
  ssr: true,
  components: {
    VCalendar,
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "dark",
  },
});

export default defineNuxtPlugin((app) => {
  app.vueApp.use(vuetify);
});

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const myCustomTheme = {
    dark: false,
    colors: {
      "main-color": "#41A3AC",
      "app-red": "#FF3A52",
      "app-blue": "#6D8DFF",
    },
  };

  const vuetify = createVuetify({
    ssr: false,
    components,
    directives,
    theme: {
      defaultTheme: "myCustomTheme",
      themes: {
        myCustomTheme,
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});

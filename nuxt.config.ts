// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  plugins: ["~/plugins/vuetify.js"],
  app: {
    head: {
      title: "Laravel-Nuxt-App",
      meta: [
        { charset: "utf-8" },
        { name: "EasyToDo", content: "Nuxt.jsのアプリです" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
    define: {
      "process.env.DEBUG": false,
    },
  },
  css: ["vuetify/lib/styles/main.sass"],
  modules: ["@pinia/nuxt"],
  imports: {
    dirs: [
      "composables",
      "composables/*/index.{ts,js,mjs,mts}",
      "composables/**",
      "components",
      "components/*/index.{ts,js,mjs,mts}",
      "components/**",
      "components/ui/**",
    ],
  },
});

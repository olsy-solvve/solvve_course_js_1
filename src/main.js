import { createApp } from "vue";
import App from "@/App.vue";

const app = createApp(App);

import "@/styles/main.scss";

import router from "@/plugins/router.js";
app.use(router);

import primeVue from "@/plugins/primeVue.js";
app.use(primeVue.PrimeVue, primeVue.options);

import { componentRegistrar } from "@/classes/componentRegistrar.js";
componentRegistrar(app);

import store from "@/store";
app.use(store);

app.mount("#app");

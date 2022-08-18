import { createApp } from "vue";
import App from "@/App.vue";

import "@/assets/main.css";

const app = createApp(App);

import router from "@/plugins/router.js";
app.use(router);

import primeVue from "@/plugins/primeVue.js";
primeVue(app);

import BaseButton from "@/components/UI/BaseButton.vue";
app.component("BaseButton", BaseButton);

app.mount("#app");

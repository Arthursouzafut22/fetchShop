import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import store from "../state/index.js";

import App from "./App.vue";
import router from "./router";
import state from "../state/index.js";

const app = createApp(App);

app.use(createPinia());
app.use(store);
app.use(router);
app.use(state);

app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

createApp(App).mount("#app");

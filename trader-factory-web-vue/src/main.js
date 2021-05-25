import { createApp } from "vue";
import App from "./App.vue";
import router from "./_helpers/router.js";

import { store } from "./_store";

// setup fake backend
import { configureFakeBackend } from "./_helpers/fake-backend.js";
configureFakeBackend();

// createApp(App).mount("#app");

console.log("Check router on main.js file -> ", router);

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");

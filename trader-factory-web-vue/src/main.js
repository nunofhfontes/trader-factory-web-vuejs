import { createApp } from "vue";
import App from "./App.vue";
import router from './_helpers/router';

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

// createApp(App).mount("#app");

const app = createApp(App);
app.use(router);
app.mount('#app');
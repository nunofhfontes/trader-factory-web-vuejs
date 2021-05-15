// import Vue from "vue";
// import { createStore } from "vuex";
// import Vuex from "vuex";

// import { createApp } from "vue";
import { createStore } from "vuex";

// import { createStore } from 'vuex';

import { authentication } from "./authentication.module";
import { users } from "./users.module";

// Vue.use(Vuex);

// export const store = new Vuex.Store({
//     modules: {
//         users
//     }
// });

export const store = new createStore({
  modules: {
    authentication,
    users,
  },
});

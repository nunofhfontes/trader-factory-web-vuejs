import Vue from "vue";
import { createStore } from "vuex";
import Vuex from "vuex";

// import { createStore } from 'vuex';

import { users } from "./users.module";

Vue.use(Vuex);

// export const store = new Vuex.Store({
//     modules: {
//         users
//     }
// });

export const store = new createStore({
  modules: {
    // authentication,
    users,
  },
});

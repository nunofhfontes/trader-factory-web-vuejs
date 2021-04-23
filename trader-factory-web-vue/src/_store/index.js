import Vue from 'vue';
import Vuex from 'vuex';

import { users } from './users.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        users
    }
});
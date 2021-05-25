import { userService } from "../_services";
import router from "../_helpers/router.js";

const user = JSON.parse(sessionStorage.getItem("user"));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null };

console.log("Check router on authentication.module.js file -> ", router);

export const authentication = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ dispatch, commit }, { username, password }) {
      commit("loginRequest", { username });

      console.log("login action on authentication module.");

      console.log("Check router -> ", router);

      userService.login(username, password).then(
        (user) => {
          commit("loginSuccess", user);
          router.push("/");
        },
        (error) => {
          commit("loginFailure", error);
          console.log("error on auth!! -> ", error);
          dispatch("alert/error", error, { root: true });
        }
      );

      console.log("After login");
    },
    logout({ commit }) {
      userService.logout();
      commit("logout");
    },
  },
  mutations: {
    loginRequest(state, user) {
      state.status = { loggingIn: true };
      state.user = user;
    },
    loginSuccess(state, user) {
      state.status = { loggedIn: true };
      state.user = user;
    },
    loginFailure(state) {
      state.status = {};
      state.user = null;
    },
    logout(state) {
      state.status = {};
      state.user = null;
    },
  },
};

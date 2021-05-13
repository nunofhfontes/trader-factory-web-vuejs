import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Login from "../components/Login.vue";
import Dashboard from "../pages/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    {
      name: "home",
      path: "/home",
      //   meta: { needsAuth: true },
      meta: { needsAuth: false },
      components: { default: Home /*, footer: someFooter */ },
    },
    {
      name: "login",
      path: "/login",
      meta: { needsAuth: false },
      components: {
        default: Login,
        // footer: someFooter
      },
      beforeEnter(to, from, next) {
        console.log("login beforeEnter");
        console.log(to, from);
        next();
      },
    },
    {
      name: "dahsboard",
      path: "/dashboard",
      meta: { needsAuth: true },
      components: {
        default: Dashboard,
        // footer: someFooter
      },
    },
    // Uncomment this after fixing server redirect to index.html
    // { path: '/:notFound(.*)', component: NotFound }
    { path: "/:catchAll(.*)", redirect: "/" },
  ],
  //   linkActiveClass: 'active',
  //   scrollBehavior(_, _2, savedPosition) {
  //     // console.log(to, from, savedPosition);
  //     if (savedPosition) {
  //       return savedPosition;
  //     }
  //     return { left: 0, top: 0 };
  //   }
});

router.beforeEach(function (to, from, next) {
  // console.log("Global beforeEach");
  // console.log(to, from);
  // if (to.meta.needsAuth) {
  //   console.log("Needs auth!");
  //   next();
  // } else {
  //   next();
  // }

  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = sessionStorage.getItem("user");

  if (authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});

// router.afterEach(function (to, from) {
//   // sending analytics data
//   console.log("Global afterEach");
//   console.log(to, from);
// });

export default router;

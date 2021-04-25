import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";

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
      path: "/login",
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
    // Uncomment this after fixing server redirect to index.html
    // { path: '/:notFound(.*)', component: NotFound }
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
  console.log("Global beforeEach");
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log("Needs auth!");
    next();
  } else {
    next();
  }
});

router.afterEach(function (to, from) {
  // sending analytics data
  console.log("Global afterEach");
  console.log(to, from);
});

export default router;

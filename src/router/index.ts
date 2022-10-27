import { createRouter, createWebHistory } from "vue-router";
import DailyTop from "../views/DailyTop.vue";
import DetailView from "../views/DetailView.vue";
import CategoryView from "../views/CategoryView.vue";


// Vuerouterについて
// https://macareux.co.jp/blog/vue-routerurl/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "top",
      component: DailyTop,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: DetailView,
    },
    { 
      path: "/category/:cat",
      name: "category",
      component: CategoryView,
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;

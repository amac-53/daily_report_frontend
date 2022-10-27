import { createRouter, createWebHistory } from "vue-router";
import DailyTop from "../views/DailyTop.vue";
import DetailView from "../views/DetailView.vue";
import CategoryView from "../views/CategoryView.vue";

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
  ],
});

export default router;

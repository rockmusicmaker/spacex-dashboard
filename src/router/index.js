import { createRouter, createWebHistory } from "vue-router";
import { LaunchesDashboard } from "@/views";

export const Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/launches",
      name: "Launches",
      component: LaunchesDashboard,
    },
    { path: "/:pathMatch(.*)*", redirect: "/launches" },
  ],
});

export default Router;

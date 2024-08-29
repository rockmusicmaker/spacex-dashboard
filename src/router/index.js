import { createRouter, createWebHistory } from "vue-router";
import { LaunchDashboard } from "@/views";

export const Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/launches",
      name: "Launches",
      component: LaunchDashboard,
    },
    { path: "/:pathMatch(.*)*", redirect: "/launches" },
  ],
});

export default Router;

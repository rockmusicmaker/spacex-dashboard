import { createRouter, createWebHistory } from "vue-router";
import { LaunchDashboard } from "@/views";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: LaunchDashboard,
    },
  ],
});

export default router;

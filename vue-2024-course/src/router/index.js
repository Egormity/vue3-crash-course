import { createRouter, createWebHistory } from "vue-router";
import PageHome from "@/pages/PageHome.vue";
import PageJobs from "@/pages/PageJobs.vue";
import PageJob from "@/pages/PageJob.vue";
import PageNotFound from "@/pages/PageNotFound.vue";

//
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: PageHome,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: PageJobs,
    },
    {
      path: "/jobs/:id",
      name: "job",
      component: PageJob,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: PageNotFound,
    },
  ],
});
export default router;

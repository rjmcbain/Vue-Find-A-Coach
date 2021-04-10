import { createRouter, createWebHistory } from "vue-router";
import CoachDetail from "../views/coaches/CoachDetails.vue";
import CoachesList from "../views/coaches/CoachesList.vue";
import CoachRegister from "../views/coaches/CoachRegister.vue";
import ContactCoach from "../views/requests/ContactCoach.vue";
import RequestsReceived from "../views/requests/RequestsReceived.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  { path: "/", redirect: "/coaches" },
  {
    path: "/coaches",
    component: CoachesList,
  },
  {
    path: "/coaches/:id",
    component: CoachDetail,
    children: [{ path: "contact", component: ContactCoach }],
  },
  {
    path: "/register",
    component: CoachRegister,
  },
  {
    path: "/requests",
    component: RequestsReceived,
  },
  {
    path: "/:notFound(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

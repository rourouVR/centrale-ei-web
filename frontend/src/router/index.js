import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Lien from "../views/Lien.vue";
import logout from "../views/Logout.vue";
import recommendation from "../views/recommendation.vue";
const routes = [
  {
    path: "/movies/movie/:movieId",
    name: "Lien",
    component: Lien,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/logout",
    name: "logout",
    component: logout,
  },
  {
    path: "/recommendation",
    name: "recommendation",
    component: recommendation,
  },
  // {
  //   path: "/counter",
  //   name: "Counter",
  //   component: Counter,
  // },
  // {
  //   path: "/users",
  //   name: "Users",
  //   component: Users,
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: About,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

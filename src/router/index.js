import { createRouter, createWebHistory } from "vue-router";
import CoursesView from "@/components/client_testForPayment/views/CoursesView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: CoursesView, // Gắn CoursesView vào Home
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

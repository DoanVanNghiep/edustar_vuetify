import { createRouter, createWebHistory } from "vue-router";
import CourseList from "@/components/CourseList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: CourseList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

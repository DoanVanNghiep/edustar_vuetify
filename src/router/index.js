import { createRouter, createWebHistory } from "vue-router";
import CourseList from "@/components/CourseList.vue";
import PaymentPage from "@/components/payment/PaymentPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: CourseList,
  },
  {
    path: "/payment/:id",
    name: "PaymentPage",
    component: PaymentPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

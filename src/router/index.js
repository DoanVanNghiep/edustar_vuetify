import { createRouter, createWebHistory } from "vue-router";
import CourseList from "@/components/CourseList.vue";
import PaymentPage from "@/components/payment/PaymentPage.vue";
import LoginPage from "@/components/LoginRegister/LoginPage.vue";

const routes = [
  {
    path: "/CourseList",
    name: "Home",
    component: CourseList,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
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

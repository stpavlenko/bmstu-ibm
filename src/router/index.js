import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/HomeView.vue") },
  { path: "/about", component: () => import("@/views/AboutView.vue") },
  { path: "/conferences", component: () => import("@/views/ConferencesView.vue") },
  { path: "/scientific-society", component: () => import("@/views/ScientificSocietyView.vue") },
  { path: "/commission", component: () => import("@/views/CommissionView.vue") },
  { path: "/postgraduate", component: () => import("@/views/PostgraduateView.vue") },
  { path: "/scientific-activity", component: () => import("@/views/ScientificActivityView.vue") },
  { path: "/project-management", component: () => import("@/views/ProjectManagementView.vue") },
  { path: "/economic-methods", component: () => import("@/views/EconomicMethodsView.vue") },
  { path: "/student-spring", component: () => import("@/views/StudentSpringView.vue") },
  { path: "/student-spring-2024", component: () => import("@/views/StudentSpring24View.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

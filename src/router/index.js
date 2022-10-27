import { createRouter, createWebHistory } from 'vue-router';
const HomeView = () => import('@/views/HomeView.vue');
const TeamsView = () => import('@/views/TeamsView.vue');
const LocationsView = () => import('@/views/LocationsView.vue');
const BenefitsView = () => import('@/views/BenefitsView.vue');
const JobResultsView = () => import('@/views/JobResultsView.vue');
const StudentsView = () => import('@/views/StudentsView.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/teams',
      name: 'Teams',
      component: TeamsView,
    },
    {
      path: '/location',
      name: 'Locations',
      component: LocationsView,
    },
    {
      path: '/benefit',
      name: 'Benefits',
      component: BenefitsView,
    },
    {
      path: '/jobs',
      name: 'JobResults',
      component: JobResultsView,
    },
    {
      path: '/students',
      name: 'Students',
      component: StudentsView,
    },
  ],
});

export default router;

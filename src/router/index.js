import { createRouter, createWebHistory } from 'vue-router';
import { useStoreJobs } from '@/stores/storeJobs';
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
      path: '/locations',
      name: 'Locations',
      component: LocationsView,
    },
    {
      path: '/benefits',
      name: 'Benefits',
      component: BenefitsView,
    },
    {
      path: '/jobs/:id',
      name: 'JobResults',
      component: JobResultsView,
      async beforeEnter(to) {
        const storeJobs = useStoreJobs();
        await storeJobs.fetchJobs();
        const maxPage = Math.ceil(storeJobs.filteredJobs.length / 10);
        const targetPage = parseInt(to.params.id);
        if (maxPage < targetPage) {
          return { name: 'Home' };
        }
      },
    },
    {
      path: '/students',
      name: 'Students',
      component: StudentsView,
    },
  ],
  scrollBehavior() {
    // const scrollPos = savedPosition || { top: 0, left: 0 };

    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve({ ...scrollPos });
    //   }, 100);
    // });
    return { top: 0 };
  },
});

export default router;

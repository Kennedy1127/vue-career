import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useStoreJobs = defineStore('storeJobs', () => {
  const isLoggedIn = ref(false);

  const userLogin = () => {
    isLoggedIn.value = true;
  };

  return { isLoggedIn, userLogin };
});

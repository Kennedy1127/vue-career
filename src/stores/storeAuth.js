import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useStoreAuth = defineStore('storeAuth', () => {
  const isLoggedIn = ref(false);

  const userLogin = () => {
    isLoggedIn.value = true;
  };

  return { isLoggedIn, userLogin };
});

<template>
  <div class="flex items-center h-full px-8 text-sm">
    <font-awesome-icon
      v-if="!isHome"
      icon="fa-solid fa-magnifying-glass"
      class="mr-3"
      data-test="glasses"
    />
    <div v-if="!isHome" class="tracking-wide">
      <div v-if="!isJobResults" class="text-text-black">
        <div v-if="!currentWindowWidth">
          <span>Find your next job at Austin. </span>
          <RouterLink
            :to="{ name: 'JobResults' }"
            class="underline text-brand-blue-1"
            >What do you want to do?
          </RouterLink>
        </div>
        <div v-if="currentWindowWidth">
          <RouterLink
            :to="{ name: 'JobResults' }"
            class="underline text-brand-blue-1"
            >Find a job</RouterLink
          >
        </div>
      </div>
      <div v-else class="text-text-grey">
        <span class="text-[#137333]">2600 </span>
        <span>jobs matched</span>
      </div>
    </div>
    <div
      v-if="isLoggedIn"
      class="flex items-center ml-auto text-text-grey max-[1000px]:hidden"
    >
      <RouterLink to="#" class="hover:text-text-black">Saved jobs</RouterLink>
      <RouterLink to="#" class="ml-9 hover:text-text-black"
        >Job alerts</RouterLink
      >
    </div>
    <div
      v-if="isLoggedIn"
      class="flex items-center ml-auto text-text-grey home-lg:hidden"
    >
      <RouterLink to="#" class="hover:text-text-black">
        <font-awesome-icon icon="fa-solid fa-bell" class="w-4 h-4" />
      </RouterLink>
      <RouterLink to="#" class="ml-9 hover:text-text-black">
        <font-awesome-icon icon="fa-solid fa-bookmark" class="w-4 h-4" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStoreAuth } from '@/stores/storeAuth';

// store route
const storeAuth = useStoreAuth();
const route = useRoute();
//

// route check
const isHome = computed(() => route.name === 'Home');
const isJobResults = computed(() => route.name === 'JobResults');
//

// loggin check
const isLoggedIn = computed(() => storeAuth.isLoggedIn);
//

// check if current window width > 800
const windowWidth = ref(window.innerWidth);
const currentWindowWidth = computed(() => windowWidth.value < 800);
window.addEventListener('resize', () => {
  windowWidth.value = window.innerWidth;
});
//
</script>

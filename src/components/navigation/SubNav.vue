<template>
  <div class="flex items-center h-full px-8 text-sm">
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="mr-3" />
    <div v-if="!isHome" class="tracking-wide">
      <div v-if="!isJobResults" class="text-text-black">
        <span>Find your next job at Austin. </span>
        <RouterLink
          :to="{ name: 'JobResults' }"
          class="underline text-brand-blue-1"
          >What do you want to do?
        </RouterLink>
      </div>
      <div v-else class="text-text-grey">
        <span class="text-[#137333]">2600 </span>
        <span>jobs matched</span>
      </div>
    </div>
    <div v-if="isLoggedIn" class="flex items-center ml-auto text-text-grey">
      <RouterLink to="#" class="hover:text-text-black">Saved jobs</RouterLink>
      <RouterLink to="#" class="ml-9 hover:text-text-black"
        >Job alerts</RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
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
</script>

<template>
  <div class="flex items-center h-full px-8 text-sm">
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="mr-3" />
    <div v-if="!isHome" class="text-text-black tracking-wide">
      <div class="">
        <span>Find your next job at Austin.</span>
        <RouterLink to="#"></RouterLink>
      </div>
    </div>
    <div class="flex items-center ml-auto text-text-grey">
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

const route = useRoute();
const isHome = computed(() => route.name === 'Home');
</script>

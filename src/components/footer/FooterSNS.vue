<template>
  <div class="flex home-sm:flex-row flex-col home-sm:pt-3 home-sm:pb-8">
    <p
      class="text-lg text-text-black font-medium home-sm:pr-16 max-[600px]:mt-6 max-[600px]:mb-4"
    >
      Follow Life at Austin Careers on
    </p>
    <ul class="flex justify-between max-[600px]:mb-6">
      <li v-for="icon in icons" :key="icon" class="home-sm:mr-8">
        <font-awesome-icon
          :icon="`fa-brands ${icon}`"
          class="w-6 h-6"
          data-test="icon"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const icons = ref([
  'fa-instagram',
  'fa-twitter',
  'fa-youtube',
  'fa-linkedin',
  'fa-facebook',
]);
</script>

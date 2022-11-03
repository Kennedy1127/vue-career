<template>
  <div class="text-text-grey">
    <h2 class="text-xs mb-6">LOCATIONS</h2>
    <h3
      class="text-text-black home-lg:text-[64px] home-md:text-[56px] text-[32px] mb-10"
    >
      Our locations
    </h3>
    <p class="text-base my-4">
      Large or small, each one of our offices is designed to inspire innovation,
      big ideas, and community.
    </p>
    <div
      class="text-lg grid home-lg:grid-cols-9 home-md:grid-cols-6 home-sm:grid-cols-9 max-[600px]:grid-cols-6 my-9"
    >
      <div
        v-for="location in locations"
        :key="location.title"
        class="col-span-3 pr-5 mb-5"
      >
        <h3 class="text-brand-blue-1 font-medium">
          <RouterLink :to="{ name: 'Locations' }">{{
            location.city
          }}</RouterLink>
        </h3>
        <p class="text-base my-4">
          {{ location.jobs }}
        </p>
      </div>
    </div>
    <div>
      <RouterLink
        :to="{ name: 'Locations' }"
        class="text-base text-brand-blue-1"
        >View all teams</RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const locations = ref([
  {
    city: 'New York',
    jobs: `828 jobs`,
  },
  {
    city: 'Loa Angeles',
    jobs: `534 jobs`,
  },
  {
    city: 'Austin',
    jobs: `82 jobs`,
  },
  {
    city: 'Tokyo',
    jobs: `80 jobs`,
  },
  {
    city: 'Seoul',
    jobs: `78 jobs`,
  },
  {
    city: 'Singapore',
    jobs: `51 jobs`,
  },
]);
</script>

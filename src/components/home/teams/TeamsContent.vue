<template>
  <div class="text-text-grey">
    <h2 class="text-xs mb-6">TEAMS</h2>
    <h3
      class="text-text-black home-lg:text-[64px] home-md:text-[56px] text-[32px] mb-10"
    >
      Find your team
    </h3>
    <p class="text-base my-4">
      Together, we create access to information and build products for everyone.
      Want to be a Googler? Find your team.
    </p>
    <div class="text-lg grid grid-cols-9 my-9">
      <div v-for="team in teams" :key="team.title" class="col-span-4 pr-5 mb-5">
        <h3 class="text-brand-blue-1 font-medium">
          <RouterLink :to="{ name: 'Teams' }">{{ team.title }}</RouterLink>
        </h3>
        <p class="text-base my-4">
          {{ team.texts }}
        </p>
      </div>
      <div class="row-start-1 col-[5_/_span_1]"></div>
      <div class="row-start-2 col-[5_/_span_1]"></div>
    </div>
    <div>
      <RouterLink :to="{ name: 'Teams' }" class="text-base text-brand-blue-1"
        >View all teams</RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const teams = ref([
  {
    title: 'Engineering & Tech',
    texts: `Develop the products and tools of the future for billions of users.`,
  },
  {
    title: 'Sales, Service & Support',
    texts: `Equip businesses with the right tools to help them grow.`,
  },
  {
    title: 'People',
    texts: `Find, grow, and support the people who make Google great.`,
  },
  {
    title: 'Consumer Hardware',
    texts: `Make people's lives better through technology.`,
  },
]);
</script>

<template>
  <ul>
    <li
      v-for="job in props.jobs"
      :key="job.id"
      class="max-w-[990px] mt-6 mx-auto first:mt-0"
    >
      <JobResultsListing :job="job" />
    </li>
  </ul>
</template>

<script setup>
import JobResultsListing from '@/components/jobResults/jobResultsListings/JobResultsListing.vue';

const props = defineProps({
  jobs: {
    type: Array,
    required: true,
  },
});
</script>

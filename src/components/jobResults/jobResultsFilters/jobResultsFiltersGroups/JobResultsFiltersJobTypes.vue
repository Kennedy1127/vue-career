<template>
  <JobResultsAccordion title="Job Types">
    <JobResultsFiltersGroups
      :group="storeJobs.jobTypes"
      :mutation="storeJobs.addSelectedJobTypes"
    />
  </JobResultsAccordion>
</template>

<script setup>
import { useStoreJobs } from '@/stores/storeJobs';
import JobResultsAccordion from '@/components/jobResults/jobResultsFilters/JobResultsAccordion.vue';
import JobResultsFiltersGroups from '@/components/jobResults/jobResultsFilters/jobResultsFiltersGroups/JobResultsFiltersGroups.vue';

const storeJobs = useStoreJobs();
</script>

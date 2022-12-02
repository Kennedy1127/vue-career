<template>
  <JobResultsAccordion title="Degree">
    <JobResultsFiltersGroups
      :group="storeJobs.degree"
      :mutation="storeJobs.addSelectedDegree"
    />
  </JobResultsAccordion>
</template>

<script setup>
import { useStoreJobs } from '@/stores/storeJobs';
import JobResultsAccordion from '@/components/jobResults/jobResultsFilters/JobResultsAccordion.vue';
import JobResultsFiltersGroups from '@/components/jobResults/jobResultsFilters/jobResultsFiltersGroups/JobResultsFiltersGroups.vue';

const storeJobs = useStoreJobs();
</script>

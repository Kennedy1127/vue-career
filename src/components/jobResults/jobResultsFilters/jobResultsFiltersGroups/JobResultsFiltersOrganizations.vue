<template>
  <JobResultsAccordion title="Organizations">
    <JobResultsFiltersGroups
      :group="storeJobs.organizations"
      :mutation="storeJobs.addSelectedOrganizations"
    />
  </JobResultsAccordion>
</template>

<script setup>
import { useStoreJobs } from '@/stores/storeJobs';
import JobResultsAccordion from '@/components/jobResults/jobResultsFilters/JobResultsAccordion.vue';
import JobResultsFiltersGroups from '@/components/jobResults/jobResultsFilters/jobResultsFiltersGroups/JobResultsFiltersGroups.vue';

const storeJobs = useStoreJobs();
</script>

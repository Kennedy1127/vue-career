<template>
  <JobResultsAccordion title="Locations">
    <form @submit.prevent="handleSubmit">
      <JobResultsFiltersInput
        v-model="submitText"
        placeholder="New York, Dallas, London"
      />
    </form>
  </JobResultsAccordion>
</template>

<script setup>
import { ref } from 'vue';
import JobResultsAccordion from '@/components/jobResults/jobResultsFilters/JobResultsAccordion.vue';
import JobResultsFiltersInput from '@/components/jobResults/jobResultsFilters/jobResultsFiltersInput/JobResultsFiltersInput.vue';
import { useStoreJobs } from '@/stores/storeJobs';

const storeJobs = useStoreJobs();

const submitText = ref('');

const handleSubmit = () => {
  storeJobs.addSelectedLocation(submitText.value);
};

storeJobs.$onAction(({ name }) => {
  if (name === 'clearSelectedFilters') {
    submitText.value = '';
  }
});
</script>

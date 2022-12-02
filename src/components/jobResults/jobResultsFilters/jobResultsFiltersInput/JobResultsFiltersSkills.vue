<template>
  <JobResultsAccordion title="Skills & qualifications">
    <form @submit.prevent="handleSubmit" data-test="form-submit">
      <JobResultsFiltersInput
        v-model="submitText"
        placeholder="Computer programming, Finance degree, UX design"
        data-test="input-field"
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
  storeJobs.addSelectedSkill(submitText.value);
};

storeJobs.$onAction(({ name }) => {
  if (name === 'clearSelectedFilters') {
    submitText.value = '';
  }
});
</script>

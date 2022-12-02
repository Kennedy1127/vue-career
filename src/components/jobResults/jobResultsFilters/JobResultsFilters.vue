<template>
  <div class="w-[372px] p-[15px]">
    <div class="pb-5">
      <div class="flex justify-between">
        <h3 class="text-text-black text-base my-4">What do you want to do?</h3>
        <button
          @click="clearFilters"
          class="text-brand-blue-1"
          data-test="clear-filters"
        >
          Clear filters
        </button>
      </div>
      <form @submit.prevent="handleSubmit" data-test="form-submit">
        <JobResultsFiltersInput
          v-model="submitText"
          placeholder="Software engineer, Design, Sales"
          data-test="input-field"
        />
      </form>
    </div>
    <JobResultsFiltersLocations />
    <JobResultsFiltersSkills />
    <JobResultsFiltersDegree />
    <JobResultsFiltersJobTypes />
    <JobResultsFiltersOrganizations />
  </div>
</template>

<script setup>
import JobResultsFiltersInput from '@/components/jobResults/jobResultsFilters/jobResultsFiltersInput/JobResultsFiltersInput.vue';
import JobResultsFiltersLocations from '@/components/jobResults/jobResultsFilters/jobResultsFiltersInput/JobResultsFiltersLocations.vue';
import JobResultsFiltersSkills from '@/components/jobResults/jobResultsFilters/jobResultsFiltersInput/JobResultsFiltersSkills.vue';
import JobResultsFiltersDegree from '@/components/jobResults/jobResultsFilters/jobResultsFiltersGroups/JobResultsFiltersDegree.vue';
import JobResultsFiltersJobTypes from '@/components/jobResults/jobResultsFilters/jobResultsFiltersGroups/JobResultsFiltersJobTypes.vue';
import JobResultsFiltersOrganizations from '@/components/jobResults/jobResultsFilters/jobResultsFiltersGroups/JobResultsFiltersOrganizations.vue';

import { useStoreJobs } from '@/stores/storeJobs';
import { ref } from 'vue';

const storeJobs = useStoreJobs();

const submitText = ref('');

const handleSubmit = () => {
  storeJobs.addSelectedSkill(submitText.value);
};

const clearFilters = () => {
  storeJobs.clearSelectedFilters();
};

storeJobs.$onAction(({ name }) => {
  if (name === 'clearSelectedFilters') {
    submitText.value = '';
  }
});
</script>

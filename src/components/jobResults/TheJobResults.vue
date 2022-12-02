<template>
  <div class="flex min-h-screen">
    <JobResultsFilters :degree="storeJobs.degree" class="" />
    <div class="flex-1 bg-brand-grey-2 p-[30px]">
      <div v-if="isLoading" class="flex justify-center items-center h-full">
        <TheLoading />
      </div>
      <div v-else>
        <JobResultsListings v-if="jobs.length" :jobs="jobs" />
        <div v-else class="text-center">
          No Jobs Fonud. Please refresh or select available location.
        </div>
        <div
          v-if="jobs.length"
          class="flex items-center justify-between mt-[30px]"
        >
          <div class="">Page {{ currentPage }}</div>
          <div class="flex">
            <button
              v-if="showPrevious"
              class="text-sm text-brand-blue-1 pr-3"
              @click="clickPrevious"
            >
              Previous
            </button>
            <button
              v-if="showNext"
              class="text-sm text-brand-blue-1 pl-3"
              @click="clickNext"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStoreJobs } from '@/stores/storeJobs';
import JobResultsFilters from '@/components/jobResults/jobResultsFilters/JobResultsFilters.vue';
import JobResultsListings from '@/components/jobResults/jobResultsListings/JobResultsListings.vue';
import TheLoading from '@/components/shared/TheLoading.vue';

// route
const route = useRoute();
const router = useRouter();
//

// store & fetch jobs
const storeJobs = useStoreJobs();
const isLoading = ref(true);
onMounted(() => {
  const fetchJobsSetInterVal = setInterval(async () => {
    await storeJobs.fetchJobs();
    if (!storeJobs.error) {
      clearInterval(fetchJobsSetInterVal);
      isLoading.value = false;
    }
  }, 1 * 1000);
});
//

// get jobs
const currentPage = computed(() =>
  route.params.id === 'results' || route.params.id === '1'
    ? 1
    : parseInt(route.params.id)
);

const jobs = computed(() =>
  currentPage.value - 1 === 0
    ? storeJobs.filteredJobs.slice(0, 10)
    : storeJobs.filteredJobs.slice(
        (currentPage.value - 1) * 10,
        currentPage.value * 10
      )
);
//

// pagination
const showPrevious = computed(() => currentPage.value > 1);
const showNext = computed(
  () => currentPage.value < Math.ceil(storeJobs.filteredJobs.length / 10)
);

const clickNext = () => {
  router.push({ name: 'JobResults', params: { id: currentPage.value + 1 } });
};

const clickPrevious = () => {
  router.push({ name: 'JobResults', params: { id: currentPage.value - 1 } });
};

//
</script>

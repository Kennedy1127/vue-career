<template>
  <div
    v-if="!responsive"
    class="form-container h-12 border border-solid border-brand-grey-3 rounded-3xl"
    data-test="not-responsive-form"
  >
    <form
      class="w-full h-full flex items-center"
      @submit.prevent="handleSubmit"
      data-test="submit-form"
    >
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="ml-4 mr-3"
      />

      <div class="flex-1 flex h-full text-base">
        <div class="flex-1 pr-3">
          <JobsSearchInput
            v-model="role"
            label="Role"
            placeholder="Software Developer"
            data-test="role"
          />
        </div>

        <span
          class="flex items-center px-3 bg-brand-grey-2 border-r border-l border-brand-grey-3"
          >in</span
        >

        <div class="flex-1 pl-3">
          <JobsSearchInput
            v-model="location"
            label="Where?"
            placeholder="Los Angeles"
            data-test="location"
          />
        </div>
      </div>

      <ActionButton
        text="Search"
        type="secondary"
        class="h-full rounded-r-3xl text-base"
      />
    </form>
  </div>
  <form
    v-if="responsive"
    @submit.prevent="handleSubmit"
    data-test="responsive-form"
  >
    <JobsSearchResponsiveInput
      v-model="role"
      placeholder="Software Developer"
      data-test="role"
    />

    <JobsSearchResponsiveInput
      v-model="location"
      placeholder="Los Angeles"
      :map="true"
      data-test="location"
    />
    <button class="w-full h-12 bg-brand-blue-1 rounded-3xl text-white">
      Search
    </button>
  </form>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import JobsSearchInput from './JobsSearchInput.vue';
import ActionButton from '@/components/shared/ActionButton.vue';
import JobsSearchResponsiveInput from '@/components/home/hero/JobsSearchResponsiveInput.vue';
import { useRouter } from 'vue-router';

//
const router = useRouter();
//

onMounted(() => {
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
  });
});

// search
const role = ref('');
const location = ref('');

const handleSubmit = () => {
  router.push({
    name: 'JobResults',
    query: { role: role.value, location: location.value },
  });
  role.value = '';
  location.value = '';
};
//

// responsive
const responsive = ref(false);
const windowWidth = ref(window.innerWidth);

const checkWindowWidth = () => {
  windowWidth.value > 800
    ? (responsive.value = false)
    : (responsive.value = true);
};
checkWindowWidth();

watchEffect(() => checkWindowWidth());
//
</script>

<style scoped>
.form-container {
  min-width: 450px;
}
</style>

<template>
  <div
    class="form-container h-12 border border-solid border-brand-grey-3 rounded-3xl"
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

      <div class="flex h-full flex-1 text-base">
        <div class="pr-3">
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

        <div class="pl-3">
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
</template>

<script setup>
import { ref } from 'vue';
import JobsSearchInput from './JobsSearchInput.vue';
import ActionButton from '@/components/shared/ActionButton.vue';
import { useRouter } from 'vue-router';

//
const router = useRouter();
//

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
</script>

<style scoped>
.form-container {
  min-width: 450px;
}
</style>

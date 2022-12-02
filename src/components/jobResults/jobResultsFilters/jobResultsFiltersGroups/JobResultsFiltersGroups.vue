<template>
  <form class="flex flex-wrap">
    <div
      v-for="item in props.group"
      :key="item"
      class="flex items-center w-1/2 mb-2"
    >
      <input
        type="checkbox"
        v-model="selectedValues"
        :id="item"
        :value="item"
        @change="selectValue"
        data-test="checkbox"
      />
      <label class="pl-1" :for="item">{{ item }}</label>
    </div>
  </form>
</template>

<script setup>
import { useStoreJobs } from '@/stores/storeJobs';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const storeJobs = useStoreJobs();

const props = defineProps({
  group: {
    type: Set,
    required: true,
  },
  mutation: {
    type: Function,
    required: true,
  },
});

const selectedValues = ref([]);
const selectValue = () => {
  props.mutation(selectedValues.value);
  router.push({ name: 'JobResults', params: { id: '1' } });
};

storeJobs.$onAction(({ name }) => {
  if (name === 'clearSelectedFilters') {
    selectedValues.value = [];
  }
});
</script>

<template>
  <div class="rounded-lg overflow-hidden">
    <RouterLink :to="{ name: 'JobResults', params: { id: 'results' } }">
      <div class="h-[102px] bg-[#e8eaed]">
        <img
          :src="imageLink"
          alt=""
          class="w-full h-full object-contain"
          data-test="image"
        />
      </div>
      <div class="h-[166px] bg-white">
        <div class="px-6 py-4">
          <h3 class="text-lg mb-3 font-medium">{{ props.spotlightTitle }}</h3>
          <p class="text-xs text-text-grey">
            {{ props.spotlightText }}
          </p>
        </div>
        <div class="px-6 pb-4 text-xs text-brand-blue-1 font-medium">
          <RouterLink :to="{ name: 'JobResults', params: { id: 'results' } }"
            >See jobs</RouterLink
          >
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  spotlightTitle: {
    type: String,
    require: true,
  },
  spotlightText: {
    type: String,
    require: true,
  },
});

const imageLink = ref('/src/assets/home/spotlight/spotlight1.png');
</script>

<style scoped></style>

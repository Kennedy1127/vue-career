<template>
  <RouterLink :to="{ name: 'JobResults', params: { id: 'results' } }">
    <div
      class="h-[268px] flex flex-col justify-end text-white"
      ref="container"
      data-test="container"
    >
      <div class="px-6 py-4">
        <h3 class="text-[22px] mb-3 font-medium">
          {{ props.spotlightLargeTitle }}
        </h3>
        <p class="text-sm">
          {{ props.spotlightLargeText }}
        </p>
      </div>
      <div class="px-6 pb-4 text-sm font-medium">
        <RouterLink
          :to="{ name: 'JobResults', params: { id: 'results' } }"
          class=""
          >See jobs</RouterLink
        >
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  spotlightLargeTitle: {
    type: String,
    require: true,
  },
  spotlightLargeText: {
    type: String,
    require: true,
  },
  spotlightLargeImage: {
    type: String,
    require: true,
  },
});

const container = ref(null);

onMounted(() => {
  container.value.style.backgroundImage = `url(${props.spotlightLargeImage})`;
  container.value.style.background = `linear-gradient(180deg, transparent 20%, rgba(0, 0, 0, 0.85)),url(${props.spotlightLargeImage})`;
  container.value.style.backgroundSize = 'cover';
});
</script>

<style scoped></style>

<template>
  <RouterLink :to="{ name: 'JobResults' }">
    <div class="h-[268px] flex flex-col justify-end text-white" ref="container">
      <div class="px-6 py-4">
        <h3 class="text-[22px] mb-3 font-medium">
          {{ props.spotlightLargeTitle }}
        </h3>
        <p class="text-sm">
          {{ props.spotlightLargeText }}
        </p>
      </div>
      <div class="px-6 pb-4 text-sm font-medium">
        <RouterLink :to="{ name: 'JobResults' }" class="">See jobs</RouterLink>
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
  container.value.style.backgroundImage = `linear-gradient(180deg, transparent 33%, rgba(0, 0, 0, 0.8)),url(${props.spotlightLargeImage})`;
  container.value.style.backgroundSize = 'cover';
});
</script>

<style scoped></style>

<template>
  <div
    class="max-w-[260px] max-[1000px]:max-w-[290px] max-[600px]:max-w-full mx-3"
  >
    <div class="relative h-[340px] min-h-[340px] bg-[#f1f3f4] card-shadow">
      <div class="flex flex-col h-full">
        <RouterLink :to="{ name: 'JobResults', params: { id: 'results' } }">
          <div class="h-[145px]">
            <img
              :src="props.image"
              alt=""
              class="w-full h-full object-cover"
              data-test="image"
            />
          </div>
        </RouterLink>
        <div class="flex flex-col h-full py-5 px-4">
          <h2 class="text-lg text-brand-blue-1 font-light">
            <RouterLink :to="{ name: 'JobResults', params: { id: 'results' } }">
              {{ props.title }}
            </RouterLink>
          </h2>
          <p class="text-sm text-text-black py-2">{{ props.text }}</p>
          <div class="flex mt-auto">
            <RouterLink
              RouterLink
              :to="{ name: 'JobResults', params: { id: 'results' } }"
              class="font-medium text-sm text-brand-blue-1 pr-3"
            >
              Learn more
            </RouterLink>
            <RouterLink
              RouterLink
              :to="{ name: 'JobResults', params: { id: 'results' } }"
              class="font-medium text-sm text-brand-blue-1"
            >
              See jobs
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.card-shadow {
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.2);
}
</style>

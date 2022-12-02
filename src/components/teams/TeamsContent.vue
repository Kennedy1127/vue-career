<template>
  <div class="w-[47.62%] max-[600px]:w-full mx-[1.18%] max-[600px]:mx-[3.125%]">
    <div class="flex my-3">
      <RouterLink
        :to="{ name: 'JobResults', params: { id: 'results' } }"
        class="flex-2 w-[210px] h-[145px] max-[1000px]:w-[110px] max-[1000px]:h-[75px] max-[800px]:w-[112px] max-[800px]:h-[90px] mt-1 mr-6"
      >
        <img
          :src="props.image"
          alt=""
          class="w-full h-full"
          data-test="image"
        />
      </RouterLink>
      <div class="flex-1">
        <RouterLink :to="{ name: 'JobResults', params: { id: 'results' } }">
          <h2 class="text-lg text-brand-blue-1 font-light mb-4">
            {{ props.title }}
          </h2>
        </RouterLink>
        <p class="text-sm text-text-black my-3">
          {{ props.text }}
        </p>
        <div class="flex max-[1000px]:flex-col max-[600px]:flex-row">
          <RouterLink
            :to="{ name: 'JobResults', params: { id: 'results' } }"
            class="text-sm text-brand-blue-1 font-medium pr-4"
            >Learn more</RouterLink
          >
          <RouterLink
            :to="{ name: 'JobResults', params: { id: 'results' } }"
            class="text-sm text-brand-blue-1 font-medium"
            >See Jobs</RouterLink
          >
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

<template>
  <div class="max-w-[544px] h-[251px] bg-[#f1f3f4] mx-3 card-shadow">
    <RouterLink
      :to="{ name: 'JobResults', params: { id: 'results' } }"
      class="block h-full"
    >
      <div class="h-[110px]">
        <img
          :src="props.image"
          alt=""
          class="w-full h-full object-cover"
          data-test="image"
        />
      </div>
      <div class="font-light text-lg text-text-black p-5">
        {{ props.text }}
      </div>
      <span class="text-sm text-brand-blue-1 px-5 pt-8 block">
        {{ props.link }}
      </span>
    </RouterLink>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.card-shadow {
  transition: box-shadow 0.2s ease;
}
.card-shadow:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
}
</style>

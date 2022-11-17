<template>
  <div class="flex mb-6">
    <font-awesome-icon
      icon="fa-solid fa-check"
      class="w-5 h-5 text-brand-blue-1"
      data-test="icon"
    />
    <p class="text-base text-input-text-grey ml-3">{{ props.text }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

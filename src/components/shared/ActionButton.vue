<template>
  <button :class="buttonClass">{{ props.text }}</button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: 'primary',
  },
});

const buttonClass = computed(() => ({
  [props.type]: true,
}));
</script>

<style scoped>
button {
  @apply font-medium px-5 py-2.5;
}
.primary {
  @apply text-xs rounded bg-brand-blue-1 text-white hover:shadow-blue;
}

.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2  hover:text-white;
}
</style>

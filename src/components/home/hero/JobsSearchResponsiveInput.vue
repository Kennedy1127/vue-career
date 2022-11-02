<template>
  <div class="relative mb-4">
    <input
      @input="$emit('update:modelValue', $event.target.value)"
      :value="props.modelValue"
      class="w-full h-12 border border-solid border-brand-grey-1 rounded-3xl focus:outline-none pl-10"
      :placeholder="props.placeholder"
    />
    <font-awesome-icon
      v-if="props.map"
      icon="fa-solid fa-location-dot"
      class="absolute left-5 top-1/2 -translate-y-1/2"
      data-test="font-awesome-icon"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  map: {
    type: Boolean,
    required: false,
  },
});
</script>

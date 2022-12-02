<template>
  <input
    :value="props.modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    type="text"
    :placeholder="props.placeholder"
    class="w-full shadow border border-brand-grey-1 rounded-md p-3 outline-none"
    data-test="input"
  />
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },

  placeholder: {
    type: String,
    required: false,
    default: '',
  },
});
</script>

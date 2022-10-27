<template>
  <div
    class="relative h-full flex flex-1 items-center border-b-2 border-b-transparent hover:border-b-brand-blue-2"
  >
    <label class="absolute left-0 -top-10 text-text-black">{{
      props.label
    }}</label>
    <input
      type="text"
      @input="$emit('update:modelValue', $event.target.value)"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      class="focus:outline-none placeholder-input-text-grey"
      data-test="text-input"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
input {
  width: 100%;
}
</style>

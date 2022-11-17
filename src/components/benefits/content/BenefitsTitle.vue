<template>
  <div class="flex justify-between max-[800px]:justify-start pt-1 pb-7 pl-3">
    <div class="icon self-start pt-2">
      <font-awesome-icon
        :icon="props.icon"
        class="w-7 h-7 text-brand-blue-1"
        data-test="icon"
      />
    </div>
    <p class="text-xl max-[800px]:text-base text-input-text-grey pl-6">
      {{ props.title }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.icon {
  position: relative;
}
.icon::before {
  content: '';
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: block;
  @apply bg-benefits-title-background;

  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

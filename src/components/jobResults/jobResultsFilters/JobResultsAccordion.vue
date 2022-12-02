<template>
  <div class="border-b border-solid border-brand-grey-1 py-5">
    <div
      class="flex justify-between items-center hover:cursor-pointer"
      @click="toggleAccordion"
      data-test="toggleAccordion"
    >
      <div class="text-text-black text-base">{{ props.title }}</div>
      <font-awesome-icon v-if="!isActive" icon="fa-solid fa-angle-down" />
      <font-awesome-icon v-else icon="fa-solid fa-angle-up" />
    </div>
    <div
      class="h-0 mt-[18px] overflow-hidden accordion"
      ref="accordion"
      data-test="accordion"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const isActive = ref(false);
const accordion = ref(null);

const toggleAccordion = () => {
  if (accordion.value.scrollHeight === 0) {
    return;
  }
  isActive.value = !isActive.value;
  isActive.value
    ? ((accordion.value.style.height = accordion.value.scrollHeight + 'px'),
      accordion.value.classList.add('trigger'))
    : ((accordion.value.style.height = ''),
      accordion.value.classList.remove('trigger'));
};
</script>

<style scoped>
.accordion {
  transition: height 0.3s ease;
}
</style>

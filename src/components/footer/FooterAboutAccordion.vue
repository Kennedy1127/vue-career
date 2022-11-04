<template>
  <div class="py-6 px-4">
    <div
      @click="toggleAccordion"
      class="flex items-center justify-between hover:cursor-pointer"
      data-test="toggle-accordion"
    >
      <h3 class="text-lg text-text-black">{{ props.title }}</h3>
      <font-awesome-icon
        v-if="!accordionIsActive"
        icon="fa-solid fa-angle-up"
        data-test="angle-up"
      />
      <font-awesome-icon
        v-if="accordionIsActive"
        icon="fa-solid fa-angle-down"
        data-test="angle-down"
      />
    </div>
    <div
      class="accordion-content max-h-0 overflow-hidden text-sm text-brand-blue-1"
      ref="accordionContent"
    >
      <div v-if="props.links">
        <div v-for="link in links" :key="link" class="my-6" data-test="link">
          <RouterLink to="#">{{ link }}</RouterLink>
        </div>
      </div>

      <div v-if="props.content">
        <div class="text-text-grey my-6" data-test="content">
          {{ props.content }}
        </div>
      </div>
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
  links: {
    type: Array,
    required: false,
  },
  content: {
    type: String,
    required: false,
  },
});

const accordionIsActive = ref(false);
const accordionContent = ref(null);

const toggleAccordion = () => {
  accordionIsActive.value
    ? ((accordionContent.value.style.maxHeight = ''),
      (accordionIsActive.value = !accordionIsActive.value))
    : ((accordionContent.value.style.maxHeight =
        accordionContent.value.scrollHeight.toString() + 'px'),
      (accordionIsActive.value = !accordionIsActive.value));
};
</script>

<style scoped>
.accordion-content {
  transition: max-height 0.3s ease;
}
</style>

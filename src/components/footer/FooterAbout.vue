<template>
  <div
    class="border-t border-b border-solid border-brand-grey-1 home-sm:pt-10 home-sm:pb-5 max-[600px]:-mx-5"
  >
    <FooterAboutGrid v-if="!isResponsive" data-test="grid" />
    <FooterAboutAccordions v-if="isResponsive" data-test="accordions" />
  </div>
</template>

<script setup>
import FooterAboutGrid from '@/components/footer/FooterAboutGrid.vue';
import FooterAboutAccordions from '@/components/footer/FooterAboutAccordions.vue';
import { onMounted, ref, watchEffect } from 'vue';

// onmount
onMounted(() => {
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
  });
});
//

// check window width
const isResponsive = ref(false);
const windowWidth = ref(window.innerWidth);
const checkWindowSize = () => {
  windowWidth.value < 600
    ? (isResponsive.value = true)
    : (isResponsive.value = false);
};
checkWindowSize();

watchEffect(() => checkWindowSize());
//
</script>

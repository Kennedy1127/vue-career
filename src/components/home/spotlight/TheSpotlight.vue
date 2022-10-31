<template>
  <section class="pb-[90px] overflow-hidden">
    <div class="home-container mx-auto">
      <div class="grid grid-cols-24">
        <div class="col-[3_/_span_20] xl:col-[2_/_span_22] mb-7">SPOTLIGHT</div>
        <div class="row-start-2 col-span-2 xl:col-span-1"></div>
        <div class="col-[3_/_span_20] xl:col-[2_/_span_22]">
          <SpotlightSwiper />
        </div>
        <div class="col-span-2 xl:col-span-1"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SpotlightSwiper from '@/components/home/spotlight/SpotlightSwiper.vue';
</script>

<style scoped>
section {
  background: linear-gradient(180deg, transparent 37%, #e8eaed 0);
}
</style>

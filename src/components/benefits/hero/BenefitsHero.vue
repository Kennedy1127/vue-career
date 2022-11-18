<template>
  <div class="bg-brand-grey-2 home-md:py-16 py-9">
    <div
      class="home-container grid grid-cols-24 max-[1000px]:grid-cols-12 max-[600px]:grid-cols-4 mx-auto max-[1000px]:mx-8"
    >
      <div class="col-span-2 max-[1000px]:hidden"></div>
      <div class="col-span-9 max-[1000px]:col-span-full">
        <BenefitsHeroDescritpion />
      </div>
      <div class="col-span-2 max-[1000px]:hidden"></div>
      <div class="col-span-9 max-[1000px]:col-span-full">
        <BenefitsHeroImage />
      </div>
      <div class="col-span-2 max-[1000px]:hidden"></div>
    </div>
  </div>
</template>

<script setup>
import BenefitsHeroDescritpion from '@/components/benefits/hero/BenefitsHeroDescritpion.vue';
import BenefitsHeroImage from '@/components/benefits/hero//BenefitsHeroImage.vue';
</script>

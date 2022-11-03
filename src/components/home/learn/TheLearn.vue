<template>
  <section
    class="py-[140px] max-[800px]:py-[70px] border-b border-solid border-brand-grey-1"
  >
    <div class="home-container home-lg:mx-auto home-sm:mx-8 mx-5">
      <div class="grid home-lg:grid-cols-24 grid-cols-12">
        <div class="home-lg:col-span-1 home-lg:block hidden"></div>
        <div class="home-lg:col-[2_/_span_22] col-span-full">
          <LearnContent />
          <LearnImages />
        </div>
        <div class="home-lg:col-span-1 home-lg:block hidden"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import LearnContent from '@/components/home/learn/LearnContent.vue';
import LearnImages from './LearnImages.vue';
</script>

<style scoped>
section {
  background: linear-gradient(180deg, transparent 40%, #e8eaed 0);
}
</style>

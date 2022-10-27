<template>
  <section class="pt-10 pb-20">
    <div class="home-container mx-auto">
      <div class="grid grid-cols-24">
        <div class="col-span-2 xl:col-span-1"></div>
        <div class="col-span-10 xl:col-span-11">
          <HeadLine />
          <JobsSearchFrom />
        </div>
        <div class="col-span-10 xl:col-span-11 justify-self-center self-center">
          <HeroImages />
        </div>
        <div class="col-span-2 xl:col-span-1"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeadLine from '@/components/home/hero/HeadLine.vue';
import JobsSearchFrom from '@/components/home/hero/JobsSearchForm.vue';
import HeroImages from './HeroImages.vue';
</script>

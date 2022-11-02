<template>
  <section class="pt-10 pb-20">
    <div class="home-container mx-auto max-[1000px]:mx-8">
      <div class="grid grid-cols-24">
        <div
          class="hero-xl:col-span-2 hero-lg:col-span-1 max-[1000px]:hidden"
        ></div>
        <div
          class="hero-xl:col-span-10 hero-lg:col-span-12 max-[1000px]:col-span-full"
        >
          <HeadLine />
          <JobsSearchFrom />
        </div>
        <div
          class="hero-xl:col-span-1 hero-lg:col-span-1 max-[1000px]:hidden"
        ></div>
        <div
          class="hero-xl:col-span-9 hero-lg:col-span-9 max-[1000px]:col-span-full max-[1000px]:row-start-1 justify-self-center self-center"
        >
          <div
            class="max-w-[400px] max-[800px]:max-w-[300px] max-[500px]:max-w-[200px]"
          >
            <HeroImages />
          </div>
        </div>
        <div
          class="hero-xl:col-span-2 hero-lg:col-span-1 max-[1000px]:hidden"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeadLine from '@/components/home/hero/HeadLine.vue';
import JobsSearchFrom from '@/components/home/hero/JobsSearchForm.vue';
import HeroImages from './HeroImages.vue';
</script>

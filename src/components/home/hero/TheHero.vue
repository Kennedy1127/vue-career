<template>
  <section class="pt-10 pb-20">
    <div class="home-container mx-auto max-[1000px]:mx-8">
      <div class="grid grid-cols-24">
        <div
          class="home-xl:col-span-2 home-lg:col-span-1 max-[1000px]:hidden"
        ></div>
        <div
          class="home-xl:col-span-10 home-lg:col-span-12 max-[1000px]:col-span-full"
        >
          <HeadLine />
          <JobsSearchFrom />
        </div>
        <div
          class="home-xl:col-span-1 home-lg:col-span-1 max-[1000px]:hidden"
        ></div>
        <div
          class="w-full h-full home-xl:col-span-9 home-lg:col-span-9 max-[1000px]:col-span-full max-[1000px]:row-start-1 flex items-center justify-center"
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

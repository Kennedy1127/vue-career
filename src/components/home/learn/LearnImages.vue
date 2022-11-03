<template>
  <div class="home-md:mt-20 mt-[60px]">
    <div
      class="w-full flex home-lg:flex-row flex-col justify-center items-center"
    >
      <LearnImage
        title="Learn how we're building a more diverse and inclusive Austin"
        text="Read about our efforts"
        image="src/assets/home/learn/learn-1.jpg"
      />
      <LearnImage
        title="Our commitment to hiring people with disabilities"
        text="Learn more"
        image="src/assets/home/learn/learn-2.jpg"
      />
    </div>
    <div
      class="w-full flex home-lg:flex-row flex-col justify-center items-center"
    >
      <LearnImage
        title="Take a look inside our hiring process"
        text="See how we hire"
        image="src/assets/home/learn/learn-3.jpg"
      />
      <LearnImage
        title="Visit our My Path to Austin blog"
        text="Learn more"
        image="src/assets/home/learn/learn-4.jpg"
      />
    </div>
  </div>
</template>

<script setup>
import LearnImage from '@/components/home/learn/LearnImage.vue';
</script>

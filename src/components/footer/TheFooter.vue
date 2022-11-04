<template>
  <footer class="py-8">
    <div class="home-container home-lg:mx-auto home-sm:mx-8 mx-5">
      <div class="grid home-lg:grid-cols-24 home-sm:grid-cols-12 grid-cols-4">
        <div
          class="home-xl:col-span-2 home-lg:col-span-1 home-lg:block hidden"
        ></div>
        <div
          class="home-xl:col-[3_/_span_20] home-lg:col-[2_/_span_22] col-span-full"
        >
          <FooterSNS />
          <FooterAbout />
          <FooterCopyright />
        </div>
        <div
          class="home-xl:col-span-2 home-lg:col-span-1 home-lg:block hidden"
        ></div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import FooterSNS from '@/components/footer/FooterSNS.vue';
import FooterAbout from '@/components/footer/FooterAbout.vue';
import FooterCopyright from '@/components/footer/FooterCopyright.vue';
</script>

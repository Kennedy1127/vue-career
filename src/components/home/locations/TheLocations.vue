<template>
  <section
    class="py-[140px] max-[800px]:py-[70px] border-b border-solid border-brand-grey-1"
  >
    <div class="home-container home-lg:mx-auto home-sm:mx-8 mx-4">
      <div class="grid home-lg:grid-cols-24 grid-cols-12">
        <div
          class="home-xl:col-span-2 home-lg:col-span-1 home-lg:block home-md:hidden"
        ></div>
        <div
          class="home-xl:col-span-9 home-lg:col-span-9 home-md:col-span-5 col-span-full max-[800px]:row-start-2"
        >
          <LocationsContent />
        </div>
        <div
          class="home-xl:col-span-2 home-lg:col-span-2 home-md:col-span-1 home-md:block hidden"
        ></div>
        <div
          class="home-xl:col-span-9 home-lg:col-span-9 home-md:col-span-6 col-span-full max-[800px]:mb-10 max-[800px]:row-start-1"
        >
          <LocationsImage />
        </div>
        <div
          class="home-xl:col-span-2 home-lg:col-span-1 home-lg:block home-md:hidden"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import LocationsImage from '@/components/home/locations/LocationsImage.vue';
import LocationsContent from '@/components/home/locations/LocationsContent.vue';
</script>

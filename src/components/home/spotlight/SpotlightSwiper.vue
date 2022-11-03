<template>
  <div class="relative swiper-container w-full">
    <swiper
      slidesPerView="auto"
      :spaceBetween="10"
      :allowTouchMove="false"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="mySwiper"
      data-test="swiper"
    >
      <swiper-slide data-test="swiper-slide">
        <SpotlightCard
          :spotlightTitle="spotlightTitles[0]"
          :spotlightText="spotlightTexts[0]"
        />
      </swiper-slide>
      <swiper-slide class="card-lg" data-test="swiper-slide">
        <SpotlightLargeCard
          :spotlightLargeTitle="spotlightLargeTitles[0]"
          :spotlightLargeText="spotlightLargeTexts[0]"
          :spotlightLargeImage="spotlightLargeImages[0]"
        />
      </swiper-slide>
      <swiper-slide data-test="swiper-slide">
        <SpotlightCard
          :spotlightTitle="spotlightTitles[1]"
          :spotlightText="spotlightTexts[1]"
        />
      </swiper-slide>
      <swiper-slide data-test="swiper-slide">
        <SpotlightCard
          :spotlightTitle="spotlightTitles[2]"
          :spotlightText="spotlightTexts[2]"
        />
      </swiper-slide>
      <swiper-slide class="card-lg">
        <SpotlightLargeCard
          :spotlightLargeTitle="spotlightLargeTitles[1]"
          :spotlightLargeText="spotlightLargeTexts[1]"
          :spotlightLargeImage="spotlightLargeImages[1]"
        />
      </swiper-slide>
      <swiper-slide data-test="swiper-slide">
        <SpotlightCard
          :spotlightTitle="spotlightTitles[3]"
          :spotlightText="spotlightTexts[3]"
        />
      </swiper-slide>
    </swiper>
    <div
      v-if="!isBeginning"
      @click="goToSlide('prev')"
      class="-left-5 arrow w-[60px] h-[60px] bg-white border border-solid border-brand-grey-1 flex items-center justify-center cursor-pointer"
      data-test="is-beginning"
    >
      <font-awesome-icon icon="fa-solid fa-angle-left" />
    </div>
    <div
      v-if="!isEnd"
      @click="goToSlide('next')"
      class="-right-5 arrow w-[60px] h-[60px] bg-white border border-solid border-brand-grey-1 flex items-center justify-center cursor-pointer"
      data-test="is-end"
    >
      <font-awesome-icon icon="fa-solid fa-angle-right" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import SpotlightCard from '@/components/home/spotlight/SpotlightCard.vue';
import SpotlightLargeCard from '@/components/home/spotlight/SpotlightLargeCard.vue';

// swiper
const onSwiperSlide = ref(null);
const isBeginning = ref(true);
const isEnd = ref(false);

const onSwiper = (swiper) => {
  // console.log(swiper);
  onSwiperSlide.value = swiper;
};

const onSlideChange = () => {
  onSwiperSlide.value.isBeginning
    ? (isBeginning.value = true)
    : (isBeginning.value = false);

  onSwiperSlide.value.isEnd ? (isEnd.value = true) : (isEnd.value = false);
};

const goToSlide = (diraction) => {
  if (diraction === 'prev') {
    return onSwiperSlide.value.slidePrev();
  }
  return onSwiperSlide.value.slideNext();
};
//

// spotlight titles and texts default
const spotlightTitles = ref([
  'Cloud Engineering',
  'Remote-eligible roles',
  'Data Center Roles',
  'Consumer Hardware',
]);

const spotlightTexts = ref([
  `Help millions build what’s next for their business — all with
   technology built in the cloud. Find your engineering jobs with
   Google Cloud now.`,
  `Find jobs that are eligible for remote work.`,
  ` Make Google’s product portfolio possible by building data centers of the future.`,
  ` Design and build the systems that are the heart of the world’s largest and most powerful computing infrastructure and products.`,
]);

const spotlightLargeTitles = ref([
  'Executive Leadership',
  'Staff Software Engineer',
]);

const spotlightLargeTexts = ref([
  `Bring your experience and perspectives to Google and join our goal to
   build for everyone.`,
  `Develop the next-generation technologies that change how billions of users connect,        explore, and interact with information and one another.`,
]);

const spotlightLargeImages = ref([
  'src/assets/home/spotlight/spotlight-lg-1.jpg',
  'src/assets/home/spotlight/spotlight-lg-2.jpg',
]);
//
</script>

<style scoped>
.swiper {
  overflow: visible;
}

.swiper-slide {
  width: 280px;
}

.swiper-slide.card-lg {
  width: 530px;
}

@media (max-width: 600px) {
  .swiper-slide,
  .swiper-slide.card-lg {
    width: 450px;
  }
}

.arrow {
  @apply absolute top-1/2  z-10 -translate-y-1/2;
  border-radius: 50%;
  box-shadow: 0px 0px 36px -15px rgba(99, 99, 99, 0.9);
}
</style>

<template>
  <div class="grid grid-cols-2 max-[1000px]:grid-cols-1 mx-[-1.18%]">
    <div class="mb-8 max-[1000px]:mb-5">
      <StudentsLargeCard
        :image="cards[0].image"
        :text="cards[0].text"
        :link="cards[0].link"
      />
    </div>
    <div class="mb-8 max-[1000px]:mb-5">
      <StudentsLargeCard
        :image="cards[1].image"
        :text="cards[1].text"
        :link="cards[1].link"
      />
    </div>
    <div class="mb-8 max-[1000px]:mb-5">
      <StudentsLargeCard
        :image="cards[2].image"
        :text="cards[2].text"
        :link="cards[2].link"
      />
    </div>
    <div class="mb-8 max-[1000px]:mb-5">
      <StudentsLargeCard
        :image="cards[3].image"
        :text="cards[3].text"
        :link="cards[3].link"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import StudentsLargeCard from '@/components/students/large/StudentsLargeCard.vue';

const cards = ref([
  {
    image: '/src/assets/students/bottom/students-1.jpg',
    text: 'Plan your next career move with Careers OnAir',
    link: 'LEARN MORE',
  },
  {
    image: '/src/assets/students/bottom/students-2.jpg',
    text: 'Google Associate Product Manager Program',
    link: 'LEARN MORE',
  },
  {
    image: '/src/assets/students/bottom/students-3.jpg',
    text: 'See the scholarships and grants Google offers',
    link: 'READ MORE',
  },
  {
    image: '/src/assets/students/bottom/students-4.jpg',
    text: 'Virtual Career Fair',
    link: 'WATCH NOW',
  },
]);
</script>

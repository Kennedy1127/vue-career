<template>
  <div
    class="grid grid-cols-4 max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1 mx-[-1.18%]"
  >
    <div class="mb-8 max-[1000px]:mb-5">
      <StudentsSamllCardText
        :text="texts[0].text"
        :link="texts[0].link"
        :color="texts[0].color"
      />
    </div>
    <div class="mb-8 max-[1000px]:mb-5">
      <StudentsSmallCard
        :image="cards[0].image"
        :title="cards[0].title"
        :text="cards[0].text"
      />
    </div>
    <div class="mb-8 max-[1000px]:mb-5">
      <StudentsSmallCard
        :image="cards[1].image"
        :title="cards[1].title"
        :text="cards[1].text"
      />
    </div>
    <div class="mb-8 max-[1000px]:mb-5">
      <StudentsSamllCardText
        :text="texts[1].text"
        :link="texts[1].link"
        :color="texts[1].color"
      />
    </div>
    <div class="mb-8 max-[1000px]:mb-5">
      <StudentsSamllCardText
        :text="texts[2].text"
        :link="texts[2].link"
        :color="texts[2].color"
      />
    </div>
    <div class="mb-8 max-[1000px]:mb-5">
      <StudentsSmallCard
        :image="cards[2].image"
        :title="cards[2].title"
        :text="cards[2].text"
      />
    </div>
    <div class="mb-8 max-[1000px]:mb-5">
      <StudentsSmallCard
        :image="cards[3].image"
        :title="cards[3].title"
        :text="cards[3].text"
      />
    </div>
    <div class="mb-8 max-[1000px]:mb-5">
      <StudentsSamllCardText
        :text="texts[3].text"
        :link="texts[3].link"
        :color="texts[3].color"
      />
    </div>
    <div class="col-span-2 max-[600px]:col-span-1 mb-8 max-[1000px]:mb-5">
      <StudentsSmallCardLong
        :image="longs[0].image"
        :text="longs[0].text"
        :link="longs[0].link"
      />
    </div>
    <div class="col-span-2 max-[600px]:col-span-1 mb-8 max-[1000px]:mb-5">
      <StudentsSmallCardLong
        :image="longs[1].image"
        :text="longs[1].text"
        :link="longs[1].link"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import StudentsSamllCardText from '@/components/students/small/StudentsSamllCardText.vue';
import StudentsSmallCard from '@/components/students/small/StudentsSmallCard.vue';
import StudentsSmallCardLong from '@/components/students/small/StudentsSmallCardLong.vue';

const texts = ref([
  {
    text: 'Learn how to create a great resume and apply',
    link: 'READ MORE',
    color: 'blue',
  },
  {
    text: 'Featured job:Software Engineer, Network infrastructure-PhD',
    link: 'APPLY NOW',
    color: 'purple',
  },
  {
    text: 'Perpare for technical roles at Austin with out comprehensive guide',
    link: 'READ MORE',
    color: 'green',
  },
  {
    text: 'Discover Austin-sponsored programs, events, and more on our Build Your Future site',
    link: 'LEARN MORE',
    color: 'orange',
  },
]);

const cards = ref([
  {
    image: '/src/assets/students/top/students-1.jpg',
    title: 'Jobs in Engineering & Technology',
    text: 'Security, Operations, and more',
  },
  {
    image: '/src/assets/students/top/students-2.jpg',
    title: 'Jobs in Business',
    text: 'Finance, Sales, Marketing, and more',
  },
  {
    image: '/src/assets/students/top/students-3.jpg',
    title: 'Internships in Engineering & Technology',
    text: 'UX, Product Management, and more',
  },
  {
    image: '/src/assets/students/top/students-4.jpg',
    title: 'Internships in Business',
    text: 'Sales, People, and more',
  },
]);

const longs = ref([
  {
    image: '/src/assets/students/top/students-5.jpg',
    text: 'Austin Associate Product Marketing Manager Program (APMM)',
    link: 'LEARN MORE',
  },
  {
    image: '/src/assets/students/top/students-6.jpg',
    text: 'Google BOLD Program',
    link: 'GOOGLE BOLD PROGRAM',
  },
]);
</script>

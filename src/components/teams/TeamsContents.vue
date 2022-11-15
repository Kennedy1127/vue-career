<template>
  <div
    class="home-container max-[1000px]:max-w-[600px] max-[1000px]:box-content py-10 px-[4%] mx-auto"
  >
    <div class="flex flex-wrap max-[600px]:flex-col">
      <TeamsContent
        v-for="TeamsContent in TeamsContents"
        :key="TeamsContent.title"
        :image="TeamsContent.image"
        :title="TeamsContent.title"
        :text="TeamsContent.text"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TeamsContent from '@/components/teams/TeamsContent.vue';

const TeamsContents = ref([
  {
    image: '/src/assets/teams/teams-1.jpg',
    title: 'Engineering & Technology',
    text: 'Develop the products and tools of the future for billions of users.',
  },
  {
    image: '/src/assets/teams/teams-2.jpg',
    title: 'Sales, Service & Support',
    text: 'Equip businesses with the right tools to help them grow.',
  },
  {
    image: '/src/assets/teams/teams-3.jpg',
    title: 'Marketing & Communications',
    text: 'Connect users to the product magic.',
  },
  {
    image: '/src/assets/teams/teams-4.jpg',
    title: 'Design',
    text: 'Create beautiful and intuitive experiences.',
  },
  {
    image: '/src/assets/teams/teams-5.jpg',
    title: 'Business Strategy',
    text: 'Deliver the analysis and insights we use to innovate.',
  },
  {
    image: '/src/assets/teams/teams-6.jpg',
    title: 'Finance',
    text: 'Design and manage solutions to support our global business.',
  },
  {
    image: '/src/assets/teams/teams-7.jpg',
    title: 'Legal',
    text: 'Shape the future of internet policy and law.',
  },
  {
    image: '/src/assets/teams/teams-8.jpg',
    title: 'People',
    text: 'Find, grow, and support the people who make Google great.',
  },
  {
    image: '/src/assets/teams/teams-9.jpg',
    title: 'Facilities',
    text: 'Reimagine what it means to be at work.',
  },
]);
</script>

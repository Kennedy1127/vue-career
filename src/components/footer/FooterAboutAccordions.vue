<template>
  <div>
    <FooterAboutAccordion
      v-for="accordion in accordions"
      :key="accordion.id"
      :title="accordion.title"
      :links="accordion.links"
      :content="accordion.content"
    />
  </div>
</template>

<script setup>
import FooterAboutAccordion from '@/components/footer/FooterAboutAccordion.vue';
import { ref } from 'vue';

const accordions = ref([
  {
    id: 'accordion1',
    title: 'More about us',
    links: ['About us', 'Contact us', 'Press'],
  },
  {
    id: 'accordion2',
    title: 'Related information',
    links: ['Investor relations', 'Blog'],
  },
  {
    id: 'accordion3',
    title: 'Equal Opportunity',
    content: `Google is proud to be an equal opportunity workplace and is an affirmative action employer. We are committed to equal employment opportunity regardless of race, color, ancestry, religion, sex, national origin, sexual orientation, age, citizenship, marital status, disability, gender identity or Veteran status. We also consider qualified applicants regardless of criminal histories, consistent with legal requirements. See also Google's EEO Policy and EEO is the Law. If you have a need that requires accommodation, please let us know by completing our Accommodations for Applicants form.`,
  },
]);
</script>

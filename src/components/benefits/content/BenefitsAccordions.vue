<template>
  <div class="py-16 max-[800px]:py-9 max-[1000px]:mx-8 max-[600px]:mx-5">
    <div
      class="grid grid-cols-24 max-[1000px]:grid-cols-20 max-[800px]:grid-cols-12 max-[600px]:grid-cols-4"
    >
      <div class="col-span-2 max-[1000px]:hidden"></div>
      <div class="col-[3_/_span_20] max-[1000px]:col-span-full">
        <BenefitsAccordion
          v-for="content in contents"
          :key="content.subject"
          :subject="content.subject"
          :content="content"
        />
      </div>
      <div class="col-span-2 max-[1000px]:hidden"></div>
    </div>
  </div>
</template>

<script setup>
import BenefitsAccordion from '@/components/benefits/content/BenefitsAccordion.vue';
import { ref } from 'vue';

const contents = ref([
  {
    subject: 'Health and wellness',
    icon: 'fa-solid fa-suitcase-medical',
    title: 'Keeping Googlers healthy is our priority.',
    texts: [
      'Medical, dental, and vision insurance for employees and dependents',
      'Employee assistance programs focused on mental health',
      'Workplace accommodations for physical or mental health concerns',
      'Onsite wellness centers',
      'Access to mental health apps',
      'Second medical opinion for you and your loved ones',
      'Medical advocacy program for transgender employees',
    ],
  },
  {
    subject: 'Financial wellbeing',
    icon: 'fa-solid fa-wallet',
    title:
      'Providing compensation and programs that give our employees financial peace of mind.',
    texts: [
      'Competitive compensation',
      'Regular bonus and equity refresh opportunities',
      'Generous 401(k) and regional retirement plans',
      'Annual cross-company pay equity analysis and adjustments',
      'Student loan reimbursement',
      '1-on-1 financial coaching',
    ],
  },
  {
    subject: 'Flexibility and time off',
    icon: 'fa-solid fa-clock',
    title:
      'The time you need to recharge, and the flexibility to get your best work done.',
    texts: [
      'Paid time off, including vacation, bereavement, jury duty, sick leave, parental leave, disability, holidays, and global reset/wellbeing days',
      'Hybrid work model — two work from home days each week for most roles',
      'Remote work opportunities available',
      'Four “work from anywhere” weeks per year',
      'Part-time work and job-sharing options',
    ],
  },
  {
    subject: 'Family support and care',
    icon: 'fa-solid fa-hands-holding-child',
    title: 'How we support your loved ones.',
    texts: [
      'Fertility and growing family support',
      'Parental leave and baby bonding leave',
      'Caregiver leave',
      'Backup childcare',
    ],
  },
  {
    subject: 'Community and personal development',
    icon: 'fa-solid fa-layer-group',
    title:
      'Providing room and opportunities to grow — on your own and with your teammates.',
    texts: [
      'Educational reimbursement',
      'Austiner-to-Austiner peer learning and coaching platform',
      'Donation matching and time off to volunteer',
      'Employee resource groups for underrepresented employees and their allies',
      'Internal Austiner community groups and local culture clubs',
    ],
  },
  {
    subject: 'Austin extras',
    icon: 'fa-solid fa-wand-magic-sparkles',
    title:
      'Programming, spaces, and resources to support your growth, productivity, and wellbeing.',
    texts: [
      'Inspiring spaces to work, recharge, and collaborate with fellow Austiners',
      'Top technology, including internet reimbursement and company-paid mobile phone',
      'On-site meals and snacks',
      'Fitness centers, massage programs, and ergonomic support',
      'At-home fitness, wellbeing, and cooking classes',
    ],
  },
]);
</script>

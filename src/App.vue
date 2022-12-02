<template>
  <MainNavVue />

  <RouterView />

  <TheFooterVue v-if="routeName !== 'JobResults'" />
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MainNavVue from '@/components/navigation/MainNav.vue';
import TheFooterVue from './components/footer/TheFooter.vue';

const route = useRoute();
const routeName = computed(() => route.name);
</script>

<template>
  <MainNavVue />

  <RouterView />

  <TheFooterVue />
</template>

<script setup>
import MainNavVue from '@/components/navigation/MainNav.vue';
import TheFooterVue from './components/footer/TheFooter.vue';
</script>

<template>
  <div>
    <MainNavVue />
  </div>
  <div>
    <RouterView />
  </div>
  <footer>
    <TheFooterVue />
  </footer>
</template>

<script setup>
import MainNavVue from '@/components/navigation/MainNav.vue';
import TheFooterVue from './components/footer/TheFooter.vue';
</script>

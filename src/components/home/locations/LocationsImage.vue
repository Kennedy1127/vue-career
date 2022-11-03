<template>
  <div>
    <img :src="imageLink" alt="" class="rounded-2xl" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const imageLink = ref('src/assets/home/locations/locations-1.jpg');
</script>

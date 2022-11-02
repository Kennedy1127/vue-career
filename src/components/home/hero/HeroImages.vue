<template>
  <div class="landscape">
    <img :src="imgLink" alt="" />
  </div>
</template>

<script setup>
import { onUnmounted, ref } from 'vue';

const imgLink = ref('src/assets/home/hero/hero1.jpg');

const changeImgLink = () => {
  const imgLinks = [
    'src/assets/home/hero/hero1.jpg',
    'src/assets/home/hero/hero2.jpg',
    'src/assets/home/hero/hero3.jpg',
    'src/assets/home/hero/hero4.jpg',
  ];

  const currentLinkIndex = imgLinks.indexOf(imgLink.value);
  const nextLinkIndex = (currentLinkIndex + 1) % imgLinks.length;
  imgLink.value = imgLinks[nextLinkIndex];
};

const timeout = setInterval(() => changeImgLink(), 1000 * 3);

onUnmounted(() => clearInterval(timeout));
</script>

<style scoped>
.landscape {
  overflow: hidden;
  border-radius: 50%;
}

img {
  width: auto;
  object-fit: contain;
}

/* @media (max-width: 800px) {
  .landscape {
    max-width: 360px;
  }
}

@media (max-width: 500px) {
  .landscape {
    max-width: 250px;
  }
}

@media (max-width: 300px) {
  .landscape {
    max-width: 180px;
  }
} */
</style>

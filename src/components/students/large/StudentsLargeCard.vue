<template>
  <div class="mx-3 card-shadow" ref="card" data-test="card">
    <div class="relative min-h-[505px] max-[1000px]:min-h-[344px]">
      <RouterLink :to="{ name: 'JobResults' }">
        <div class="absolute bottom-[7%] left-[10%] z-10 w-2/3">
          <p
            class="text-[30px] max-[600px]:text-2xl text-white font-light mb-3"
          >
            {{ props.text }}
          </p>
          <p class="text-sm text-white">{{ props.link }}</p>
        </div>
        <div class="absolute top-0 left-0 w-full h-full background"></div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  image: {
    type: String,
    required: true,
  },

  text: {
    type: String,
    required: true,
  },

  link: {
    type: String,
    required: true,
  },
});

const card = ref(null);

onMounted(() => {
  card.value.style.backgroundImage = `url(${props.image})`;
  card.value.style.backgroundSize = 'cover';
});
</script>

<style scoped>
.background {
  background-image: linear-gradient(
    180deg,
    transparent 60%,
    rgba(31, 31, 31, 0.6)
  );
}

.card-shadow {
  transition: box-shadow 0.2s ease;
}
.card-shadow:hover {
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.5);
}
</style>

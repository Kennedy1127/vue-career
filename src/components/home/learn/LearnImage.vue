<template>
  <div
    class="relative home-lg:max-w-[600px] home-lg:w-1/2 max-w-[670px] w-full home-lg:min-h-[500px] home-sm:min-h-[340px] min-h-[270px] home-lg:mx-3 mb-5 rounded-lg overflow-hidden"
    ref="image"
  >
    <RouterLink :to="{ name: 'JobResults' }" class="w-full h-full">
      <div class="absolute left-10 bottom-8 z-10 w-3/4">
        <h2 class="text-white home-lg:text-3xl text-2xl font-normal mb-5">
          {{ props.title }}
        </h2>
        <h3 class="text-white text-sm font-normal">{{ props.text }}</h3>
      </div>
    </RouterLink>
    <div class="absolute top-0 left-0 w-full h-full" ref="overlay"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const image = ref(null);
const overlay = ref(null);

onMounted(() => {
  image.value.style.backgroundImage = `url('${props.image}')`;
  image.value.style.backgroundSize = 'cover';
  overlay.value.style.backgroundImage = `linear-gradient(180deg,transparent 40%,rgba(0,0,0,.6))`;
});
</script>

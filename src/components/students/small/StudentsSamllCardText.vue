<template>
  <div
    class="max-w-[260px] max-[1000px]:max-w-[290px] max-[600px]:max-w-full mx-3 card-shadow"
  >
    <RouterLink :to="{ name: 'JobResults' }">
      <div
        class="relative h-[340px] min-h-[340px] max-[600px]:max-h-[230px]"
        :class="backgroundColor"
        data-test="color"
      >
        <div class="flex flex-col justify-between h-full px-5 py-5">
          <div class="text-white text-xl font-light pt-10">
            {{ props.text }}
          </div>
          <span class="text-sm text-white">{{ props.link }} </span>
        </div>
        <div class="absolute top-0 left-0 w-full h-full background"></div>
      </div>
    </RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const backgroundColor = computed(() => ({ [props.color]: true }));
</script>

<style scoped>
.background {
  background-image: linear-gradient(
    180deg,
    transparent 80%,
    rgba(0, 0, 0, 0.2)
  );
}

.card-shadow {
  transition: box-shadow 0.2s ease;
}
.card-shadow:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
}

.blue {
  background-color: #1967d2;
}

.purple {
  background-color: #673ab7;
}

.green {
  background-color: #4caf50;
}

.orange {
  background-color: #d93025;
}
</style>

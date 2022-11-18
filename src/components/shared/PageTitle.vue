<template>
  <div class="border-b border-solid border-brand-grey-1">
    <div class="my-16 px-4">
      <div class="flex flex-col items-center home-container mx-auto">
        <h1
          class="home-md:text-[40px] home-sm:text-[32px] text-[30px] text-input-text-grey"
        >
          {{ props.title }}
        </h1>
        <div class="max-w-[650px]">
          <p
            class="home-sm:text-base text-sm text-text-grey font-light text-center my-4"
          >
            {{ props.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div class="flex flex-col text-text-black">
    <h1 class="text-[44px] mb-7">Benefits at Austin</h1>
    <p class="text-lg max-[1000px]:mt-4 max-[1000px]:mb-9">
      We strive to provide Austiner and their loved ones with a world-class
      benefits experience, focused on supporting their physical, financial, and
      emotional wellbeing. Our benefits are based on data, and centered around
      our users: Austiner and their families. They’re thoughtfully designed to
      enhance your health and wellbeing, and generous enough to make it easy for
      you to take good care of yourself (now, and in the future). So we can
      build for everyone, together. *
    </p>
    <p class="text-base mt-6 max-[1000px]:mb-9">
      Learn more about Austin’s benefits on
      <RouterLink
        :to="{ name: 'JobResults' }"
        class="text-brand-blue-1 underline"
      >
        our site featuring Austinrs’ experience.
        <span>
          <font-awesome-icon
            icon="fa-solid fa-arrow-up-right-from-square"
            class="w-4 h-4"
          />
        </span>
      </RouterLink>
    </p>
  </div>
</template>

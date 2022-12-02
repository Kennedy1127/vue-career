<template>
  <div class="bg-white border border-solid border-brand-grey-1">
    <RouterLink to="/">
      <div
        class="pt-[18px] pb-[8px] mx-[30px] border-b border-solid border-brand-grey-1"
      >
        <h2 class="text-2xl text-text-black mb-[9px]">
          {{ props.job.title }}
        </h2>
        <div class="flex flex-wrap items-center text-sm text-input-text-grey">
          <div class="flex items-center mr-2">
            <font-awesome-icon
              icon="fa-solid fa-building"
              class="text-brand-grey-3 mr-2"
            />
            <p class="font-medium">{{ props.job.organization }}</p>
          </div>
          <div class="flex items-center mr-2">
            <font-awesome-icon
              icon="fa-solid fa-location-dot"
              class="text-brand-grey-3 mr-2"
            />
            <span class="font-medium mr-2">In-office:</span>
            <span
              v-for="location in props.job.locations"
              :key="location"
              class="mr-2"
              >{{ location }}
              <span
                v-if="
                  props.job.locations.length &&
                  location !==
                    props.job.locations[props.job.locations.length - 1]
                "
                >,</span
              >
            </span>
          </div>
          <div class="flex items-center mr-2">
            <font-awesome-icon
              icon="fa-solid fa-graduation-cap"
              class="text-brand-grey-3 mr-2"
            />
            <span class="mr-2">{{ props.job.degree }}</span>
          </div>
          <div class="flex items-center mr-2">
            <font-awesome-icon
              icon="fa-solid fa-briefcase"
              class="text-brand-grey-3 mr-2"
            />
            <span class="mr-2">{{ props.job.jobType }}</span>
          </div>
        </div>
      </div>
      <div class="text-base text-text-black py-[18px] px-[30px]">
        <h3 class="font-medium mt-1 mb-2">Qualifications:</h3>
        <ul class="list-disc pl-[30px]">
          <li
            v-for="qualification in props.job.minimumQualifications"
            :key="qualification"
            class="font-sm mb-2.5"
          >
            {{ qualification }}
          </li>
        </ul>
        <div class="flex justify-center mt-2">
          <button class="text-sm text-brand-blue-1 font-medium">Expand</button>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script setup>
const props = defineProps({
  job: {
    type: Object,
    required: true,
  },
});
</script>
